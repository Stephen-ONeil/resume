import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://resume.oneil.online/",
  base: "/",
  trailingSlash: "always",
  integrations: [react()],
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
});
