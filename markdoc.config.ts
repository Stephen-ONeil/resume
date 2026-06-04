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
    "work-location": {
      render: component("./src/components/WorkLocation/WorkLocation.astro"),
      attributes: {
        tag: {
          type: String,
          required: false,
        },
        location: {
          type: String,
          required: true,
        },
        from: {
          type: String,
          required: false,
        },
        to: {
          type: String,
          required: false,
        },
      },
    },
  },
});
