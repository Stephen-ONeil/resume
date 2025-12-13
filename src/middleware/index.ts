import { sequence } from "astro:middleware";

import { spellcheck_prerendered_pages } from "./spellcheck.ts";

export const onRequest = sequence(spellcheck_prerendered_pages);
