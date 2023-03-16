import { get_resume_pdf } from "./script_utils.js";

const EXPECTED_PAGE_COUNT = 1;

try {
  const pdf = await get_resume_pdf();

  // from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
  const pdf_page_count = pdf.toString().match(/\/Type[\s]*\/Page[^s]/g).length;

  if (pdf_page_count !== EXPECTED_PAGE_COUNT) {
    throw `Page count failed: PDF page count of ${pdf_page_count}, expected ${EXPECTED_PAGE_COUNT}`;
  }
} catch (e) {
  console.log(e);
  process.exit(1);
}

console.log(`PDF page count as expected (${EXPECTED_PAGE_COUNT})`);
