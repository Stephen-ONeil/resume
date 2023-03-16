import fs from "fs";

import { build_dir, pdf_name } from "./script_consts.js";
import { get_resume_pdf } from "./script_utils.js";

const pdf_path = `${build_dir}/${pdf_name}`;

fs.rmSync(pdf_path, { force: true });

try {
  const pdf = await get_resume_pdf();

  fs.writeFileSync(pdf_path, pdf);
} catch (e) {
  console.log(e);
  process.exit(1);
}

console.log(`Generating pdf successful. PDF written to ${pdf_path}`);
