import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: { lib: { entry: resolve(__dirname, "src/main.ts"), formats: ["es"] } },
});
