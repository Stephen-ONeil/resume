import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

import pdf from "astro-pdf";

import { test_pdf_page_count } from "./src/hooks/test_pdf_page_count.ts";

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
    {
      name: "test-pdf-page-count",
      hooks: {
        "astro:build:done": () =>
          test_pdf_page_count("dist/stephen-oneil-resume.pdf", 1),
      },
    },
  ],
  experimental: {
    contentIntellisense: true,
  },
});
