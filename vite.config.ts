import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
  },
  plugins: [react()],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@examples": resolve(__dirname, "./src/examples"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@src": resolve(__dirname, "./src"),
    },
  },
});
