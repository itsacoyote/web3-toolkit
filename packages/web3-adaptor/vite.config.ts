import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true })],
  build: { sourcemap: true, lib: { entry: resolve(__dirname, "src/main.ts"), formats: ["es"] } },
});
