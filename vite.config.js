import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  css: {
    modules: {
      generateScopedName: "[local]__[hash:base64:5]",
    },
  },
  build: {
    outDir: "dist",
  },
  preview: {
    historyApiFallback: true,
  },
});
