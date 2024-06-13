/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { ShikiConfig, RehypePlugin as _RehypePlugin, RemarkPlugin as _RemarkPlugin, RemarkRehype as _RemarkRehype } from '@astrojs/markdown-remark';
import type { ViteUserConfig } from '../../@types/astro.js';
import type { OutgoingHttpHeaders } from 'node:http';
import { z } from 'zod';
interface ComplexifyUnionObj {
}
type ComplexifyWithUnion<T> = T & ComplexifyUnionObj;
type ComplexifyWithOmit<T> = Omit<T, '__nonExistent'>;
type ShikiLang = ComplexifyWithUnion<NonNullable<ShikiConfig['langs']>[number]>;
type ShikiTheme = ComplexifyWithUnion<NonNullable<ShikiConfig['theme']>>;
type ShikiTransformer = ComplexifyWithUnion<NonNullable<ShikiConfig['transformers']>[number]>;
type RehypePlugin = ComplexifyWithUnion<_RehypePlugin>;
type RemarkPlugin = ComplexifyWithUnion<_RemarkPlugin>;
type RemarkRehype = ComplexifyWithOmit<_RemarkRehype>;
export declare const ASTRO_CONFIG_DEFAULTS: {
    root: string;
    srcDir: string;
    publicDir: string;
    outDir: string;
    cacheDir: string;
    base: string;
    trailingSlash: "ignore";
    build: {
        format: "directory";
        client: string;
        server: string;
        assets: string;
        serverEntry: string;
        redirects: true;
        inlineStylesheets: "auto";
    };
    image: {
        service: {
            entrypoint: "astro/assets/services/sharp";
            config: {};
        };
    };
    devToolbar: {
        enabled: true;
    };
    compressHTML: true;
    server: {
        host: false;
        port: number;
        open: false;
    };
    integrations: never[];
    markdown: Required<import("@astrojs/markdown-remark").AstroMarkdownOptions>;
    vite: {};
    legacy: {};
    redirects: {};
    security: {};
    experimental: {
        actions: false;
        directRenderScript: false;
        contentCollectionCache: false;
        contentCollectionJsonSchema: false;
        clientPrerender: false;
        globalRoutePriority: false;
        rewriting: false;
    };
};
export declare const AstroConfigSchema: z.ZodObject<{
    root: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    srcDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    publicDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    outDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    cacheDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    site: z.ZodOptional<z.ZodString>;
    compressHTML: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    base: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    trailingSlash: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"always">, z.ZodLiteral<"never">, z.ZodLiteral<"ignore">]>>>;
    output: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"static">, z.ZodLiteral<"server">, z.ZodLiteral<"hybrid">]>>>;
    scopedStyleStrategy: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"where">, z.ZodLiteral<"class">, z.ZodLiteral<"attribute">]>>>;
    adapter: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>>;
    integrations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>, "many">>, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[], unknown>;
    build: z.ZodDefault<z.ZodObject<{
        format: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"file">, z.ZodLiteral<"directory">, z.ZodLiteral<"preserve">]>>>;
        client: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        assets: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        assetsPrefix: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodIntersection<z.ZodObject<{
            fallback: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fallback: string;
        }, {
            fallback: string;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>>]>, string | ({
            fallback: string;
        } & Record<string, string>) | undefined, string | ({
            fallback: string;
        } & Record<string, string>) | undefined>;
        serverEntry: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        redirects: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        inlineStylesheets: z.ZodDefault<z.ZodOptional<z.ZodEnum<["always", "auto", "never"]>>>;
    }, "strip", z.ZodTypeAny, {
        server: URL;
        format: "file" | "directory" | "preserve";
        client: URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }, {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }>>;
    server: z.ZodEffects<z.ZodDefault<z.ZodObject<{
        open: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        host: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        port: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        headers: z.ZodOptional<z.ZodType<OutgoingHttpHeaders, z.ZodTypeDef, OutgoingHttpHeaders>>;
    }, "strip", z.ZodTypeAny, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, {
        host?: string | boolean | undefined;
        port?: number | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        open?: string | boolean | undefined;
    }>>, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, unknown>;
    redirects: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        status: z.ZodUnion<[z.ZodLiteral<300>, z.ZodLiteral<301>, z.ZodLiteral<302>, z.ZodLiteral<303>, z.ZodLiteral<304>, z.ZodLiteral<307>, z.ZodLiteral<308>]>;
        destination: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>]>>>;
    prefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        prefetchAll: z.ZodOptional<z.ZodBoolean>;
        defaultStrategy: z.ZodOptional<z.ZodEnum<["tap", "hover", "viewport", "load"]>>;
    }, "strip", z.ZodTypeAny, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    }, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    }>]>>;
    image: z.ZodDefault<z.ZodObject<{
        endpoint: z.ZodOptional<z.ZodString>;
        service: z.ZodDefault<z.ZodObject<{
            entrypoint: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"astro/assets/services/sharp">, z.ZodLiteral<"astro/assets/services/squoosh">, z.ZodString]>>;
            config: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            entrypoint: string;
            config: Record<string, any>;
        }, {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        }>>;
        domains: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        remotePatterns: z.ZodDefault<z.ZodArray<z.ZodObject<{
            protocol: z.ZodOptional<z.ZodString>;
            hostname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            port: z.ZodOptional<z.ZodString>;
            pathname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }, {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    }, {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    }>>;
    devToolbar: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
    }, {
        enabled?: boolean | undefined;
    }>>;
    markdown: z.ZodDefault<z.ZodObject<{
        syntaxHighlight: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"shiki">, z.ZodLiteral<"prism">, z.ZodLiteral<false>]>>;
        shikiConfig: z.ZodDefault<z.ZodObject<{
            langs: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<ShikiLang, z.ZodTypeDef, ShikiLang>, "many">, ShikiLang[], ShikiLang[]>>;
            theme: z.ZodDefault<z.ZodUnion<[z.ZodEnum<[import("shiki").BundledTheme, ...import("shiki").BundledTheme[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>;
            themes: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodEnum<[import("shiki").BundledTheme, ...import("shiki").BundledTheme[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>>;
            wrap: z.ZodDefault<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
            transformers: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<ShikiTransformer, z.ZodTypeDef, ShikiTransformer>, "many">, ShikiTransformer[], ShikiTransformer[]>>;
        }, "strip", z.ZodTypeAny, {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        }, {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        }>>;
        remarkPlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodTuple<[z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodAny], null>]>, "many">>;
        rehypePlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodTuple<[z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodAny], null>]>, "many">>;
        remarkRehype: z.ZodDefault<z.ZodType<RemarkRehype, z.ZodTypeDef, RemarkRehype>>;
        gfm: z.ZodDefault<z.ZodBoolean>;
        smartypants: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    }, {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    }>>;
    vite: z.ZodDefault<z.ZodType<ViteUserConfig, z.ZodTypeDef, ViteUserConfig>>;
    i18n: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodObject<{
        defaultLocale: z.ZodString;
        locales: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            path: z.ZodString;
            codes: z.ZodArray<z.ZodString, "atleastone">;
        }, "strip", z.ZodTypeAny, {
            path: string;
            codes: [string, ...string[]];
        }, {
            path: string;
            codes: [string, ...string[]];
        }>]>, "many">;
        domains: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        fallback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"manual">, z.ZodEffects<z.ZodObject<{
            prefixDefaultLocale: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            redirectToDefaultLocale: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        }, {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        }>, {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        }, {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        }>]>>>;
    }, "strip", z.ZodTypeAny, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    }, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    }>>, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined>>;
    security: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        checkOrigin: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        checkOrigin: boolean;
    }, {
        checkOrigin?: boolean | undefined;
    }>>>;
    experimental: z.ZodDefault<z.ZodObject<{
        actions: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        directRenderScript: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        contentCollectionCache: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        contentCollectionJsonSchema: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        clientPrerender: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        globalRoutePriority: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        rewriting: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    }, {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    }>>;
    legacy: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    server: {
        host: string | boolean;
        port: number;
        open: string | boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: URL;
    srcDir: URL;
    publicDir: URL;
    outDir: URL;
    cacheDir: URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    output: "server" | "static" | "hybrid";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        server: URL;
        format: "file" | "directory" | "preserve";
        client: URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    };
    devToolbar: {
        enabled: boolean;
    };
    markdown: {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    security: {
        checkOrigin: boolean;
    };
    experimental: {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined;
}, {
    site?: string | undefined;
    server?: unknown;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    devToolbar?: {
        enabled?: boolean | undefined;
    } | undefined;
    markdown?: {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined;
    security?: {
        checkOrigin?: boolean | undefined;
    } | undefined;
    experimental?: {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>;
export type AstroConfigType = z.infer<typeof AstroConfigSchema>;
export declare function createRelativeSchema(cmd: string, fileProtocolRoot: string): z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    root: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    srcDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    publicDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    outDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    cacheDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    site: z.ZodOptional<z.ZodString>;
    compressHTML: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    base: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    trailingSlash: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"always">, z.ZodLiteral<"never">, z.ZodLiteral<"ignore">]>>>;
    output: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"static">, z.ZodLiteral<"server">, z.ZodLiteral<"hybrid">]>>>;
    scopedStyleStrategy: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"where">, z.ZodLiteral<"class">, z.ZodLiteral<"attribute">]>>>;
    adapter: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>>;
    integrations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>, "many">>, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[], unknown>;
    build: z.ZodDefault<z.ZodObject<{
        format: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"file">, z.ZodLiteral<"directory">, z.ZodLiteral<"preserve">]>>>;
        client: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        assets: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        assetsPrefix: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodIntersection<z.ZodObject<{
            fallback: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fallback: string;
        }, {
            fallback: string;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>>]>, string | ({
            fallback: string;
        } & Record<string, string>) | undefined, string | ({
            fallback: string;
        } & Record<string, string>) | undefined>;
        serverEntry: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        redirects: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        inlineStylesheets: z.ZodDefault<z.ZodOptional<z.ZodEnum<["always", "auto", "never"]>>>;
    }, "strip", z.ZodTypeAny, {
        server: URL;
        format: "file" | "directory" | "preserve";
        client: URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }, {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }>>;
    server: z.ZodEffects<z.ZodDefault<z.ZodObject<{
        open: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        host: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        port: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        headers: z.ZodOptional<z.ZodType<OutgoingHttpHeaders, z.ZodTypeDef, OutgoingHttpHeaders>>;
    }, "strip", z.ZodTypeAny, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, {
        host?: string | boolean | undefined;
        port?: number | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        open?: string | boolean | undefined;
    }>>, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, unknown>;
    redirects: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        status: z.ZodUnion<[z.ZodLiteral<300>, z.ZodLiteral<301>, z.ZodLiteral<302>, z.ZodLiteral<303>, z.ZodLiteral<304>, z.ZodLiteral<307>, z.ZodLiteral<308>]>;
        destination: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>]>>>;
    prefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        prefetchAll: z.ZodOptional<z.ZodBoolean>;
        defaultStrategy: z.ZodOptional<z.ZodEnum<["tap", "hover", "viewport", "load"]>>;
    }, "strip", z.ZodTypeAny, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    }, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    }>]>>;
    image: z.ZodDefault<z.ZodObject<{
        endpoint: z.ZodOptional<z.ZodString>;
        service: z.ZodDefault<z.ZodObject<{
            entrypoint: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"astro/assets/services/sharp">, z.ZodLiteral<"astro/assets/services/squoosh">, z.ZodString]>>;
            config: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            entrypoint: string;
            config: Record<string, any>;
        }, {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        }>>;
        domains: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        remotePatterns: z.ZodDefault<z.ZodArray<z.ZodObject<{
            protocol: z.ZodOptional<z.ZodString>;
            hostname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            port: z.ZodOptional<z.ZodString>;
            pathname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }, {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    }, {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    }>>;
    devToolbar: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
    }, {
        enabled?: boolean | undefined;
    }>>;
    markdown: z.ZodDefault<z.ZodObject<{
        syntaxHighlight: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"shiki">, z.ZodLiteral<"prism">, z.ZodLiteral<false>]>>;
        shikiConfig: z.ZodDefault<z.ZodObject<{
            langs: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<ShikiLang, z.ZodTypeDef, ShikiLang>, "many">, ShikiLang[], ShikiLang[]>>;
            theme: z.ZodDefault<z.ZodUnion<[z.ZodEnum<[import("shiki").BundledTheme, ...import("shiki").BundledTheme[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>;
            themes: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodEnum<[import("shiki").BundledTheme, ...import("shiki").BundledTheme[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>>;
            wrap: z.ZodDefault<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
            transformers: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<ShikiTransformer, z.ZodTypeDef, ShikiTransformer>, "many">, ShikiTransformer[], ShikiTransformer[]>>;
        }, "strip", z.ZodTypeAny, {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        }, {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        }>>;
        remarkPlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodTuple<[z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodAny], null>]>, "many">>;
        rehypePlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodTuple<[z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodAny], null>]>, "many">>;
        remarkRehype: z.ZodDefault<z.ZodType<RemarkRehype, z.ZodTypeDef, RemarkRehype>>;
        gfm: z.ZodDefault<z.ZodBoolean>;
        smartypants: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    }, {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    }>>;
    vite: z.ZodDefault<z.ZodType<ViteUserConfig, z.ZodTypeDef, ViteUserConfig>>;
    i18n: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodObject<{
        defaultLocale: z.ZodString;
        locales: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            path: z.ZodString;
            codes: z.ZodArray<z.ZodString, "atleastone">;
        }, "strip", z.ZodTypeAny, {
            path: string;
            codes: [string, ...string[]];
        }, {
            path: string;
            codes: [string, ...string[]];
        }>]>, "many">;
        domains: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        fallback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"manual">, z.ZodEffects<z.ZodObject<{
            prefixDefaultLocale: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            redirectToDefaultLocale: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        }, {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        }>, {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        }, {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        }>]>>>;
    }, "strip", z.ZodTypeAny, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    }, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    }>>, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined, {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined>>;
    security: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        checkOrigin: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        checkOrigin: boolean;
    }, {
        checkOrigin?: boolean | undefined;
    }>>>;
    experimental: z.ZodDefault<z.ZodObject<{
        actions: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        directRenderScript: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        contentCollectionCache: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        contentCollectionJsonSchema: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        clientPrerender: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        globalRoutePriority: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        rewriting: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    }, {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    }>>;
    legacy: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    root: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    srcDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    compressHTML: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    publicDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    outDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    cacheDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    build: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        format: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"file">, z.ZodLiteral<"directory">, z.ZodLiteral<"preserve">]>>>;
        client: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, import("url").URL, string | undefined>;
        server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, import("url").URL, string | undefined>;
        assets: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        assetsPrefix: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodIntersection<z.ZodObject<{
            fallback: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fallback: string;
        }, {
            fallback: string;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>>]>, string | ({
            fallback: string;
        } & Record<string, string>) | undefined, string | ({
            fallback: string;
        } & Record<string, string>) | undefined>;
        serverEntry: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        redirects: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        inlineStylesheets: z.ZodDefault<z.ZodOptional<z.ZodEnum<["always", "auto", "never"]>>>;
    }, "strip", z.ZodTypeAny, {
        server: import("url").URL;
        format: "file" | "directory" | "preserve";
        client: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }, {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    }>>>;
    server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodObject<{
        open: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        host: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        port: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        headers: z.ZodOptional<z.ZodType<OutgoingHttpHeaders, z.ZodTypeDef, OutgoingHttpHeaders>>;
        streaming: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, {
        host?: string | boolean | undefined;
        port?: number | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        open?: string | boolean | undefined;
        streaming?: boolean | undefined;
    }>>>, {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, unknown>;
}>, "strip", z.ZodTypeAny, {
    server: {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    output: "server" | "static" | "hybrid";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        server: import("url").URL;
        format: "file" | "directory" | "preserve";
        client: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    };
    devToolbar: {
        enabled: boolean;
    };
    markdown: {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    security: {
        checkOrigin: boolean;
    };
    experimental: {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined;
}, {
    site?: string | undefined;
    server?: unknown;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    devToolbar?: {
        enabled?: boolean | undefined;
    } | undefined;
    markdown?: {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined;
    security?: {
        checkOrigin?: boolean | undefined;
    } | undefined;
    experimental?: {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>, {
    server: {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    output: "server" | "static" | "hybrid";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        server: import("url").URL;
        format: "file" | "directory" | "preserve";
        client: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    };
    devToolbar: {
        enabled: boolean;
    };
    markdown: {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    security: {
        checkOrigin: boolean;
    };
    experimental: {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined;
}, {
    site?: string | undefined;
    server?: unknown;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    devToolbar?: {
        enabled?: boolean | undefined;
    } | undefined;
    markdown?: {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined;
    security?: {
        checkOrigin?: boolean | undefined;
    } | undefined;
    experimental?: {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>, {
    server: {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    output: "server" | "static" | "hybrid";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        server: import("url").URL;
        format: "file" | "directory" | "preserve";
        client: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    };
    devToolbar: {
        enabled: boolean;
    };
    markdown: {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    security: {
        checkOrigin: boolean;
    };
    experimental: {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined;
}, {
    site?: string | undefined;
    server?: unknown;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    devToolbar?: {
        enabled?: boolean | undefined;
    } | undefined;
    markdown?: {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined;
    security?: {
        checkOrigin?: boolean | undefined;
    } | undefined;
    experimental?: {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>, {
    server: {
        host: string | boolean;
        port: number;
        open: string | boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    output: "server" | "static" | "hybrid";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        server: import("url").URL;
        format: "file" | "directory" | "preserve";
        client: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    };
    devToolbar: {
        enabled: boolean;
    };
    markdown: {
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: ShikiLang[];
            theme: import("shiki").BundledTheme | ShikiTheme;
            themes: Record<string, import("shiki").BundledTheme | ShikiTheme>;
            wrap: boolean | null;
            transformers: ShikiTransformer[];
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: RemarkRehype;
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    security: {
        checkOrigin: boolean;
    };
    experimental: {
        actions: boolean;
        directRenderScript: boolean;
        contentCollectionCache: boolean;
        contentCollectionJsonSchema: boolean;
        clientPrerender: boolean;
        globalRoutePriority: boolean;
        rewriting: boolean;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        routing: "manual" | {
            prefixDefaultLocale: boolean;
            redirectToDefaultLocale: boolean;
        };
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
    } | undefined;
}, {
    site?: string | undefined;
    server?: unknown;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            port?: string | undefined;
            protocol?: string | undefined;
            hostname?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        server?: string | undefined;
        format?: "file" | "directory" | "preserve" | undefined;
        client?: string | undefined;
        assets?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        assetsPrefix?: string | ({
            fallback: string;
        } & Record<string, string>) | undefined;
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | "load" | undefined;
    } | undefined;
    devToolbar?: {
        enabled?: boolean | undefined;
    } | undefined;
    markdown?: {
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: ShikiLang[] | undefined;
            theme?: import("shiki").BundledTheme | ShikiTheme | undefined;
            themes?: Record<string, import("shiki").BundledTheme | ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
            transformers?: ShikiTransformer[] | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    i18n?: {
        defaultLocale: string;
        locales: (string | {
            path: string;
            codes: [string, ...string[]];
        })[];
        fallback?: Record<string, string> | undefined;
        domains?: Record<string, string> | undefined;
        routing?: "manual" | {
            prefixDefaultLocale?: boolean | undefined;
            redirectToDefaultLocale?: boolean | undefined;
        } | undefined;
    } | undefined;
    security?: {
        checkOrigin?: boolean | undefined;
    } | undefined;
    experimental?: {
        actions?: boolean | undefined;
        directRenderScript?: boolean | undefined;
        contentCollectionCache?: boolean | undefined;
        contentCollectionJsonSchema?: boolean | undefined;
        clientPrerender?: boolean | undefined;
        globalRoutePriority?: boolean | undefined;
        rewriting?: boolean | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>;
export {};
