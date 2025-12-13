import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const resume_sections = defineCollection({
  loader: glob({ pattern: "*.mdoc", base: "src/content/resume_sections" }),
});

export const collections = { resume_sections };
