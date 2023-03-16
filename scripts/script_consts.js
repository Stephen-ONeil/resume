import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const build_dir = path.resolve(__dirname, "../out");

export const pdf_name = "stephen-oneil-resume.pdf";
