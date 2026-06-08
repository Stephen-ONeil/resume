import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

import pdf from "astro-pdf";
import type { PagesEntry } from "astro-pdf";

import _ from "lodash";

import { test_pdf_page_count } from "./src/hooks/test_pdf_page_count.ts";

const PAGE_COUNT = 2;

const get_test_page_path = (page_number: number) =>
  `build_artifacts/_test-page-${page_number}.pdf`;

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
      pages: {
        "/": [
          { path: "stephen-oneil-resume.pdf" },
          ..._.chain(PAGE_COUNT)
            .range()
            .map(
              (index): PagesEntry => ({
                path: get_test_page_path(index + 1),
                callback: async page => {
                  await page.addStyleTag({
                    content: `[id^="page-"]:not(#page-${index + 1}) { display: none !important; }`,
                  });
                },
              })
            )
            .value(),
        ],
      },
    }),
    {
      name: "test-pdf-page-count",
      hooks: {
        "astro:build:done": () =>
          test_pdf_page_count({
            "dist/stephen-oneil-resume.pdf": PAGE_COUNT,
            ..._.chain(PAGE_COUNT)
              .range()
              .map(index => [`dist/${get_test_page_path(index + 1)}`, 1])
              .fromPairs()
              .value(),
          }),
      },
    },
  ],
  experimental: {
    contentIntellisense: true,
  },
});
