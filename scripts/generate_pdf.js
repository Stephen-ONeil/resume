import fs from "fs";

import { build_dir, pdf_name } from "./script_consts.js";
import { get_resume_pdf } from "./script_utils.js";

const pdf_path = `${build_dir}/${pdf_name}`;

(async () => {
  const pdf = await get_resume_pdf();

  fs.writeFileSync(pdf_path, pdf);

  if (fs.existsSync(pdf_path)) {
    console.log(`Generating pdf successful`);
  }
})();
