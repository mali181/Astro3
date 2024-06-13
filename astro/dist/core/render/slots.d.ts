import type { SSRResult } from '../../@types/astro.js';
import { type ComponentSlots } from '../../runtime/server/index.js';
import type { Logger } from '../logger/core.js';
export declare class Slots {
    #private;
    constructor(result: SSRResult, slots: ComponentSlots | null, logger: Logger);
    has(name: string): boolean;
    render(name: string, args?: any[]): Promise<any>;
}