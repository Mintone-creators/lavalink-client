import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/index.ts"],
    outDir: "dist",
    clean: true,
    dts: true,
    format: ["cjs", "esm"],
    splitting: false,        
    shims: false,
    sourcemap: false,
    platform: "node",
    target: "esnext",
    preserveModules: true,
    preserveModulesRoot: "src",
    esbuildOptions: (opts) => ({
        ...opts,
        target: "esnext",
    }),
    ...options,
}));
