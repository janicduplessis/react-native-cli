import { Config } from '@react-native-community/cli-types';
export interface MetroConfig {
    resolver: {
        resolveRequest?: (context: any, realModuleName: string, platform: string, moduleName: string) => any;
        resolverMainFields: string[];
        platforms: string[];
    };
    serializer: {
        getModulesRunBeforeMainModule: () => string[];
        getPolyfills: () => any;
    };
    server: {
        port: number;
        enhanceMiddleware?: Function;
    };
    symbolicator: {
        customizeFrame: (frame: {
            file: string | null;
        }) => {
            collapse: boolean;
        };
    };
    transformer: {
        babelTransformerPath: string;
        assetRegistryPath: string;
        assetPlugins?: Array<string>;
    };
    watchFolders: ReadonlyArray<string>;
    reporter?: any;
}
/**
 * Default configuration
 */
export declare const getDefaultConfig: (ctx: Config) => MetroConfig;
export interface ConfigOptionsT {
    maxWorkers?: number;
    port?: number;
    projectRoot?: string;
    resetCache?: boolean;
    watchFolders?: string[];
    sourceExts?: string[];
    reporter?: any;
    config?: string;
}
/**
 * Loads Metro Config and applies `options` on top of the resolved config.
 *
 * This allows the CLI to always overwrite the file settings.
 */
export default function load(ctx: Config, options?: ConfigOptionsT): Promise<MetroConfig>;
//# sourceMappingURL=loadMetroConfig.d.ts.map