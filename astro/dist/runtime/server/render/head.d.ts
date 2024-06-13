import type { SSRResult } from '../../../@types/astro.js';
import type { MaybeRenderHeadInstruction, RenderHeadInstruction } from './instruction.js';
export declare function renderAllHeadContent(result: SSRResult): any;
export declare function renderHead(): RenderHeadInstruction;
export declare function maybeRenderHead(): MaybeRenderHeadInstruction;