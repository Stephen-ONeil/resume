import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

import pdf from "astro-pdf";

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
  integrations: [
    markdoc({ allowHTML: true }),
    pdf({ pages: { "/": "stephen-oneil-resume.pdf" } }),
  ],
  experimental: {
    contentIntellisense: true,
  },
});
