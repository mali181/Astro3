import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { isFunctionPerRouteEnabled } from "../../../integrations/hooks.js";
import { routeIsRedirect } from "../../redirects/index.js";
import { isServerLikeOutput } from "../../util.js";
import { addRollupInput } from "../add-rollup-input.js";
import { SSR_MANIFEST_VIRTUAL_MODULE_ID } from "./plugin-manifest.js";
import { MIDDLEWARE_MODULE_ID } from "./plugin-middleware.js";
import { ASTRO_PAGE_MODULE_ID } from "./plugin-pages.js";
import { RENDERERS_MODULE_ID } from "./plugin-renderers.js";
import { getComponentFromVirtualModulePageName, getVirtualModulePageName } from "./util.js";
const SSR_VIRTUAL_MODULE_ID = "@astrojs-ssr-virtual-entry";
const RESOLVED_SSR_VIRTUAL_MODULE_ID = "\0" + SSR_VIRTUAL_MODULE_ID;
function vitePluginSSR(internals, adapter, options) {
  return {
    name: "@astrojs/vite-plugin-astro-ssr-server",
    enforce: "post",
    options(opts) {
      return addRollupInput(opts, [SSR_VIRTUAL_MODULE_ID]);
    },
    resolveId(id) {
      if (id === SSR_VIRTUAL_MODULE_ID) {
        return RESOLVED_SSR_VIRTUAL_MODULE_ID;
      }
    },
    async load(id) {
      if (id === RESOLVED_SSR_VIRTUAL_MODULE_ID) {
        const { allPages } = options;
        const imports = [];
        const contents = [];
        const exports = [];
        let i = 0;
        const pageMap = [];
        for (const pageData of Object.values(allPages)) {
          if (routeIsRedirect(pageData.route)) {
            continue;
          }
          const virtualModuleName = getVirtualModulePageName(
            ASTRO_PAGE_MODULE_ID,
            pageData.component
          );
          let module = await this.resolve(virtualModuleName);
          if (module) {
            const variable = `_page${i}`;
            imports.push(`const ${variable} = () => import("${virtualModuleName}");`);
            const pageData2 = internals.pagesByKeys.get(pageData.key);
            if (pageData2) {
              pageMap.push(`[${JSON.stringify(pageData2.component)}, ${variable}]`);
            }
            i++;
          }
        }
        contents.push(`const pageMap = new Map([
    ${pageMap.join(",\n    ")}
]);`);
        exports.push(`export { pageMap }`);
        const middleware = await this.resolve(MIDDLEWARE_MODULE_ID);
        const ssrCode = generateSSRCode(adapter, middleware.id);
        imports.push(...ssrCode.imports);
        contents.push(...ssrCode.contents);
        return [...imports, ...contents, ...exports].join("\n");
      }
      return void 0;
    },
    async generateBundle(_opts, bundle) {
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "asset") {
          internals.staticFiles.add(chunk.fileName);
        }
      }
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "asset") {
          continue;
        }
        if (chunk.modules[RESOLVED_SSR_VIRTUAL_MODULE_ID]) {
          internals.ssrEntryChunk = chunk;
        }
      }
    }
  };
}
function pluginSSR(options, internals) {
  const ssr = isServerLikeOutput(options.settings.config);
  const functionPerRouteEnabled = isFunctionPerRouteEnabled(options.settings.adapter);
  return {
    targets: ["server"],
    hooks: {
      "build:before": () => {
        let vitePlugin = ssr && functionPerRouteEnabled === false ? vitePluginSSR(internals, options.settings.adapter, options) : void 0;
        return {
          enforce: "after-user-plugins",
          vitePlugin
        };
      },
      "build:post": async () => {
        if (!ssr) {
          return;
        }
        if (functionPerRouteEnabled) {
          return;
        }
        if (!internals.ssrEntryChunk) {
          throw new Error(`Did not generate an entry chunk for SSR`);
        }
        internals.ssrEntryChunk.fileName = options.settings.config.build.serverEntry;
      }
    }
  };
}
const SPLIT_MODULE_ID = "@astro-page-split:";
const RESOLVED_SPLIT_MODULE_ID = "\0@astro-page-split:";
function vitePluginSSRSplit(internals, adapter, options) {
  const functionPerRouteEnabled = isFunctionPerRouteEnabled(options.settings.adapter);
  return {
    name: "@astrojs/vite-plugin-astro-ssr-split",
    enforce: "post",
    options(opts) {
      if (functionPerRouteEnabled) {
        const inputs = /* @__PURE__ */ new Set();
        for (const pageData of Object.values(options.allPages)) {
          if (routeIsRedirect(pageData.route)) {
            continue;
          }
          inputs.add(getVirtualModulePageName(SPLIT_MODULE_ID, pageData.component));
        }
        return addRollupInput(opts, Array.from(inputs));
      }
    },
    resolveId(id) {
      if (id.startsWith(SPLIT_MODULE_ID)) {
        return "\0" + id;
      }
    },
    async load(id) {
      if (id.startsWith(RESOLVED_SPLIT_MODULE_ID)) {
        const imports = [];
        const contents = [];
        const exports = [];
        const componentPath = getComponentFromVirtualModulePageName(RESOLVED_SPLIT_MODULE_ID, id);
        const virtualModuleName = getVirtualModulePageName(ASTRO_PAGE_MODULE_ID, componentPath);
        let module = await this.resolve(virtualModuleName);
        if (module) {
          imports.push(`import * as pageModule from "${virtualModuleName}";`);
        }
        const middleware = await this.resolve(MIDDLEWARE_MODULE_ID);
        const ssrCode = generateSSRCode(adapter, middleware.id);
        imports.push(...ssrCode.imports);
        contents.push(...ssrCode.contents);
        exports.push("export { pageModule }");
        return [...imports, ...contents, ...exports].join("\n");
      }
      return void 0;
    },
    async generateBundle(_opts, bundle) {
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "asset") {
          internals.staticFiles.add(chunk.fileName);
        }
      }
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "asset") {
          continue;
        }
        for (const moduleKey of Object.keys(chunk.modules)) {
          if (moduleKey.startsWith(RESOLVED_SPLIT_MODULE_ID)) {
            internals.ssrSplitEntryChunks.set(moduleKey, chunk);
            storeEntryPoint(moduleKey, options, internals, chunk.fileName);
          }
        }
      }
    }
  };
}
function pluginSSRSplit(options, internals) {
  const ssr = isServerLikeOutput(options.settings.config);
  const functionPerRouteEnabled = isFunctionPerRouteEnabled(options.settings.adapter);
  return {
    targets: ["server"],
    hooks: {
      "build:before": () => {
        let vitePlugin = ssr && functionPerRouteEnabled ? vitePluginSSRSplit(internals, options.settings.adapter, options) : void 0;
        return {
          enforce: "after-user-plugins",
          vitePlugin
        };
      }
    }
  };
}
function generateSSRCode(adapter, middlewareId) {
  const edgeMiddleware = adapter?.adapterFeatures?.edgeMiddleware ?? false;
  const pageMap = isFunctionPerRouteEnabled(adapter) ? "pageModule" : "pageMap";
  const imports = [
    `import { renderers } from '${RENDERERS_MODULE_ID}';`,
    `import { manifest as defaultManifest } from '${SSR_MANIFEST_VIRTUAL_MODULE_ID}';`,
    `import * as serverEntrypointModule from '${adapter.serverEntrypoint}';`,
    edgeMiddleware ? `` : `import { onRequest as middleware } from '${middlewareId}';`
  ];
  const contents = [
    edgeMiddleware ? `const middleware = (_, next) => next()` : "",
    `const _manifest = Object.assign(defaultManifest, {`,
    `    ${pageMap},`,
    `    renderers,`,
    `    middleware`,
    `});`,
    `const _args = ${adapter.args ? JSON.stringify(adapter.args, null, 4) : "undefined"};`,
    adapter.exports ? `const _exports = serverEntrypointModule.createExports(_manifest, _args);` : "",
    ...adapter.exports?.map((name) => {
      if (name === "default") {
        return `export default _exports.default;`;
      } else {
        return `export const ${name} = _exports['${name}'];`;
      }
    }) ?? [],
    // NOTE: This is intentionally obfuscated!
    // Do NOT simplify this to something like `serverEntrypointModule.start?.(_manifest, _args)`
    // They are NOT equivalent! Some bundlers will throw if `start` is not exported, but we
    // only want to silently ignore it... hence the dynamic, obfuscated weirdness.
    `const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}`
  ];
  return {
    imports,
    contents
  };
}
function storeEntryPoint(moduleKey, options, internals, fileName) {
  const componentPath = getComponentFromVirtualModulePageName(RESOLVED_SPLIT_MODULE_ID, moduleKey);
  for (const pageData of Object.values(options.allPages)) {
    if (componentPath == pageData.component) {
      const publicPath = fileURLToPath(options.settings.config.build.server);
      internals.entryPoints.set(pageData.route, pathToFileURL(join(publicPath, fileName)));
    }
  }
}
export {
  RESOLVED_SPLIT_MODULE_ID,
  RESOLVED_SSR_VIRTUAL_MODULE_ID,
  SPLIT_MODULE_ID,
  SSR_VIRTUAL_MODULE_ID,
  pluginSSR,
  pluginSSRSplit
};