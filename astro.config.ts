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
    pdf({
      launch: {
        // Ubuntu 23.10+ disables unpriviledged user namespaces, preventing chrome from creating a sandbox
        // can consider the pages visited here to be trusted, so running without a sandbox is acceptable if not ideal
        // TODO: reconsider this workaround if switching CI runtime image
        args: ["--no-sandbox"],
      },
      pages: { "/": "stephen-oneil-resume.pdf" },
    }),
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
