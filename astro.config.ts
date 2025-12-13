import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://resume.oneil.online/",
  base: "/",
  trailingSlash: "always",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssCodeSplit: false,
      cssMinify: true,
    },
  },
  integrations: [markdoc({ allowHTML: true })],
  experimental: {
    contentIntellisense: true,
  },
});
