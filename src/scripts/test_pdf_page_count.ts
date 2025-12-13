import fs from "fs";

import { pdf_path } from "./script_consts.js";

const EXPECTED_PAGE_COUNT = 1;

const pdf = fs.readFileSync(pdf_path);

// from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
const pdf_page_count = pdf.toString().match(/\/Type[\s]*\/Page[^s]/g)?.length;

if (pdf_page_count !== EXPECTED_PAGE_COUNT) {
  console.log(
    `Page count failed: PDF page count of ${pdf_page_count}, expected ${EXPECTED_PAGE_COUNT}`
  );
  process.exit(1);
}

console.log(`PDF page count as expected (${EXPECTED_PAGE_COUNT})`);
