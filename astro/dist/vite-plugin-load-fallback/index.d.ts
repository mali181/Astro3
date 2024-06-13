/// <reference types="node" resolution-mode="require"/>
import nodeFs from 'node:fs';
import type * as vite from 'vite';
type NodeFileSystemModule = typeof nodeFs;
export interface LoadFallbackPluginParams {
    fs?: NodeFileSystemModule;
    root: URL;
}
export default function loadFallbackPlugin({ fs, root, }: LoadFallbackPluginParams): vite.Plugin[] | false;
export {};
