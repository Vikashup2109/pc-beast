import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteMinifyPlugin } from "vite-plugin-minify";

// minify the contents of assets
export default defineConfig({
  "build": {
    outDir: "build",
  },
  plugins: [
    react(),
    ViteMinifyPlugin({
      minifyHtml: true,
      minifyCss: true,
      minifyJs: true,
    }),
  ],
});
