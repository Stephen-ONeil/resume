import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// TODO, can I get this from an astro env or something?
// ... can't import astro:config/server when running this script directly,
// so possibly not without some extra indirection elsewhere
export const build_dir = path.resolve(__dirname, "../../dist");

export const pdf_name = "stephen-oneil-resume.pdf";

export const pdf_path = `${build_dir}/${pdf_name}`;
