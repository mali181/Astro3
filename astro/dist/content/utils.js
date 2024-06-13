import fsMod from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { slug as githubSlug } from "github-slugger";
import matter from "gray-matter";
import { normalizePath } from "vite";
import { z } from "zod";
import { AstroError, AstroErrorData, MarkdownError, errorMap } from "../core/errors/index.js";
import { isYAMLException } from "../core/errors/utils.js";
import { CONTENT_FLAGS, PROPAGATED_ASSET_FLAG } from "./consts.js";
import { createImage } from "./runtime-assets.js";
const collectionConfigParser = z.union([
  z.object({
    type: z.literal("content").optional().default("content"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal("data"),
    schema: z.any().optional()
  })
]);
const contentConfigParser = z.object({
  collections: z.record(collectionConfigParser)
});
const msg = {
  collectionConfigMissing: (collection) => `${collection} does not have a config. We suggest adding one for type safety!`
};
function parseEntrySlug({
  id,
  collection,
  generatedSlug,
  frontmatterSlug
}) {
  try {
    return z.string().default(generatedSlug).parse(frontmatterSlug);
  } catch {
    throw new AstroError({
      ...AstroErrorData.InvalidContentEntrySlugError,
      message: AstroErrorData.InvalidContentEntrySlugError.message(collection, id)
    });
  }
}
async function getEntryData(entry, collectionConfig, shouldEmitFile, pluginContext) {
  let data;
  if (collectionConfig.type === "data") {
    data = entry.unvalidatedData;
  } else {
    const { slug, ...unvalidatedData } = entry.unvalidatedData;
    data = unvalidatedData;
  }
  let schema = collectionConfig.schema;
  if (typeof schema === "function") {
    schema = schema({
      image: createImage(pluginContext, shouldEmitFile, entry._internal.filePath)
    });
  }
  if (schema) {
    if (collectionConfig.type === "content" && typeof schema === "object" && "shape" in schema && schema.shape.slug) {
      throw new AstroError({
        ...AstroErrorData.ContentSchemaContainsSlugError,
        message: AstroErrorData.ContentSchemaContainsSlugError.message(entry.collection)
      });
    }
    let formattedError;
    const parsed = await schema.safeParseAsync(data, {
      errorMap(error, ctx) {
        if (error.code === "custom" && error.params?.isHoistedAstroError) {
          formattedError = error.params?.astroError;
        }
        return errorMap(error, ctx);
      }
    });
    if (parsed.success) {
      data = parsed.data;
    } else {
      if (!formattedError) {
        formattedError = new AstroError({
          ...AstroErrorData.InvalidContentEntryFrontmatterError,
          message: AstroErrorData.InvalidContentEntryFrontmatterError.message(
            entry.collection,
            entry.id,
            parsed.error
          ),
          location: {
            file: entry._internal.filePath,
            line: getYAMLErrorLine(entry._internal.rawData, String(parsed.error.errors[0].path[0])),
            column: 0
          }
        });
      }
      throw formattedError;
    }
  }
  return data;
}
function getContentEntryExts(settings) {
  return settings.contentEntryTypes.map((t) => t.extensions).flat();
}
function getDataEntryExts(settings) {
  return settings.dataEntryTypes.map((t) => t.extensions).flat();
}
function getEntryConfigByExtMap(entryTypes) {
  const map = /* @__PURE__ */ new Map();
  for (const entryType of entryTypes) {
    for (const ext of entryType.extensions) {
      map.set(ext, entryType);
    }
  }
  return map;
}
function getEntryCollectionName({
  contentDir,
  entry
}) {
  const entryPath = typeof entry === "string" ? entry : fileURLToPath(entry);
  const rawRelativePath = path.relative(fileURLToPath(contentDir), entryPath);
  const collectionName = path.dirname(rawRelativePath).split(path.sep)[0];
  const isOutsideCollection = !collectionName || collectionName === "" || collectionName === ".." || collectionName === ".";
  if (isOutsideCollection) {
    return void 0;
  }
  return collectionName;
}
function getDataEntryId({
  entry,
  contentDir,
  collection
}) {
  const relativePath = getRelativeEntryPath(entry, collection, contentDir);
  const withoutFileExt = normalizePath(relativePath).replace(
    new RegExp(path.extname(relativePath) + "$"),
    ""
  );
  return withoutFileExt;
}
function getContentEntryIdAndSlug({
  entry,
  contentDir,
  collection
}) {
  const relativePath = getRelativeEntryPath(entry, collection, contentDir);
  const withoutFileExt = relativePath.replace(new RegExp(path.extname(relativePath) + "$"), "");
  const rawSlugSegments = withoutFileExt.split(path.sep);
  const slug = rawSlugSegments.map((segment) => githubSlug(segment)).join("/").replace(/\/index$/, "");
  const res = {
    id: normalizePath(relativePath),
    slug
  };
  return res;
}
function getRelativeEntryPath(entry, collection, contentDir) {
  const relativeToContent = path.relative(fileURLToPath(contentDir), fileURLToPath(entry));
  const relativeToCollection = path.relative(collection, relativeToContent);
  return relativeToCollection;
}
function getEntryType(entryPath, paths, contentFileExts, dataFileExts) {
  const { ext } = path.parse(entryPath);
  const fileUrl = pathToFileURL(entryPath);
  if (hasUnderscoreBelowContentDirectoryPath(fileUrl, paths.contentDir)) {
    return "ignored";
  } else if (contentFileExts.includes(ext)) {
    return "content";
  } else if (dataFileExts.includes(ext)) {
    return "data";
  } else if (fileUrl.href === paths.config.url.href) {
    return "config";
  } else {
    return "ignored";
  }
}
function hasUnderscoreBelowContentDirectoryPath(fileUrl, contentDir) {
  const parts = fileUrl.pathname.replace(contentDir.pathname, "").split("/");
  for (const part of parts) {
    if (part.startsWith("_")) return true;
  }
  return false;
}
function getYAMLErrorLine(rawData, objectKey) {
  if (!rawData) return 0;
  const indexOfObjectKey = rawData.search(
    // Match key either at the top of the file or after a newline
    // Ensures matching on top-level object keys only
    new RegExp(`(
|^)${objectKey}`)
  );
  if (indexOfObjectKey === -1) return 0;
  const dataBeforeKey = rawData.substring(0, indexOfObjectKey + 1);
  const numNewlinesBeforeKey = dataBeforeKey.split("\n").length;
  return numNewlinesBeforeKey;
}
function safeParseFrontmatter(source, id) {
  try {
    return matter(source);
  } catch (err) {
    const markdownError = new MarkdownError({
      name: "MarkdownError",
      message: err.message,
      stack: err.stack,
      location: id ? {
        file: id
      } : void 0
    });
    if (isYAMLException(err)) {
      markdownError.setLocation({
        file: id,
        line: err.mark.line,
        column: err.mark.column
      });
      markdownError.setMessage(err.reason);
    }
    throw markdownError;
  }
}
const globalContentConfigObserver = contentObservable({ status: "init" });
function hasAnyContentFlag(viteId) {
  const flags = new URLSearchParams(viteId.split("?")[1] ?? "");
  const flag = Array.from(flags.keys()).at(0);
  if (typeof flag !== "string") {
    return false;
  }
  return CONTENT_FLAGS.includes(flag);
}
function hasContentFlag(viteId, flag) {
  const flags = new URLSearchParams(viteId.split("?")[1] ?? "");
  return flags.has(flag);
}
async function loadContentConfig({
  fs,
  settings,
  viteServer
}) {
  const contentPaths = getContentPaths(settings.config, fs);
  let unparsedConfig;
  if (!contentPaths.config.exists) {
    return void 0;
  }
  const configPathname = fileURLToPath(contentPaths.config.url);
  unparsedConfig = await viteServer.ssrLoadModule(configPathname);
  const config = contentConfigParser.safeParse(unparsedConfig);
  if (config.success) {
    return config.data;
  } else {
    return void 0;
  }
}
async function reloadContentConfigObserver({
  observer = globalContentConfigObserver,
  ...loadContentConfigOpts
}) {
  observer.set({ status: "loading" });
  try {
    const config = await loadContentConfig(loadContentConfigOpts);
    if (config) {
      observer.set({ status: "loaded", config });
    } else {
      observer.set({ status: "does-not-exist" });
    }
  } catch (e) {
    observer.set({
      status: "error",
      error: e instanceof Error ? e : new AstroError(AstroErrorData.UnknownContentCollectionError)
    });
  }
}
function contentObservable(initialCtx) {
  const subscribers = /* @__PURE__ */ new Set();
  let ctx = initialCtx;
  function get() {
    return ctx;
  }
  function set(_ctx) {
    ctx = _ctx;
    subscribers.forEach((fn) => fn(ctx));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => {
      subscribers.delete(fn);
    };
  }
  return {
    get,
    set,
    subscribe
  };
}
function getContentPaths({ srcDir, root }, fs = fsMod) {
  const configStats = search(fs, srcDir);
  const pkgBase = new URL("../../", import.meta.url);
  return {
    cacheDir: new URL(".astro/", root),
    contentDir: new URL("./content/", srcDir),
    assetsDir: new URL("./assets/", srcDir),
    typesTemplate: new URL("content-types.template.d.ts", pkgBase),
    virtualModTemplate: new URL("content-module.template.mjs", pkgBase),
    config: configStats
  };
}
function search(fs, srcDir) {
  const paths = ["config.mjs", "config.js", "config.mts", "config.ts"].map(
    (p) => new URL(`./content/${p}`, srcDir)
  );
  for (const file of paths) {
    if (fs.existsSync(file)) {
      return { exists: true, url: file };
    }
  }
  return { exists: false, url: paths[0] };
}
async function getEntrySlug({
  id,
  collection,
  generatedSlug,
  contentEntryType,
  fileUrl,
  fs
}) {
  let contents;
  try {
    contents = await fs.promises.readFile(fileUrl, "utf-8");
  } catch (e) {
    throw new AstroError(AstroErrorData.UnknownContentCollectionError, { cause: e });
  }
  const { slug: frontmatterSlug } = await contentEntryType.getEntryInfo({
    fileUrl,
    contents
  });
  return parseEntrySlug({ generatedSlug, frontmatterSlug, id, collection });
}
function getExtGlob(exts) {
  return exts.length === 1 ? (
    // Wrapping {...} breaks when there is only one extension
    exts[0]
  ) : `{${exts.join(",")}}`;
}
function hasAssetPropagationFlag(id) {
  try {
    return new URL(id, "file://").searchParams.has(PROPAGATED_ASSET_FLAG);
  } catch {
    return false;
  }
}
export {
  collectionConfigParser,
  contentConfigParser,
  contentObservable,
  getContentEntryExts,
  getContentEntryIdAndSlug,
  getContentPaths,
  getDataEntryExts,
  getDataEntryId,
  getEntryCollectionName,
  getEntryConfigByExtMap,
  getEntryData,
  getEntrySlug,
  getEntryType,
  getExtGlob,
  globalContentConfigObserver,
  hasAnyContentFlag,
  hasAssetPropagationFlag,
  hasContentFlag,
  hasUnderscoreBelowContentDirectoryPath,
  loadContentConfig,
  msg,
  parseEntrySlug,
  reloadContentConfigObserver,
  safeParseFrontmatter
};