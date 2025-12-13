import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    "link-out": {
      render: component("./src/components/LinkOut.astro"),
      attributes: {
        href: {
          type: String,
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
      },
    },
    "years-since": {
      render: component("./src/components/ApproxYearsSince.astro"),
      attributes: {
        year: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
        day: {
          type: Number,
          required: true,
        },
      },
    },
  },
});
