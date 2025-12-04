import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const build_dir = path.resolve(__dirname, "../dist");

export const pdf_name = "stephen-oneil-resume.pdf";

export const pdf_path = `${build_dir}/${pdf_name}`;
