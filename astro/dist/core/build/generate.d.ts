import type { OutputAsset, OutputChunk } from 'rollup';
import type { AstroSettings } from '../../@types/astro.js';
import { type BuildInternals } from '../../core/build/internal.js';
import type { StaticBuildOptions } from './types.js';
export declare function rootRelativeFacadeId(facadeId: string, settings: AstroSettings): string;
export declare function chunkIsPage(settings: AstroSettings, output: OutputAsset | OutputChunk, internals: BuildInternals): boolean;
export declare function generatePages(options: StaticBuildOptions, internals: BuildInternals): Promise<void>;
