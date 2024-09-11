import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: { entry: resolve(__dirname, "src/main.ts"), formats: ["es"],
    },
    copyPublicDir: false,
  },
});
