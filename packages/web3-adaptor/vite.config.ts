import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true })],
  build: { sourcemap: true, lib: { entry: resolve(__dirname, "src/main.ts"), formats: ["es"] } },
});
