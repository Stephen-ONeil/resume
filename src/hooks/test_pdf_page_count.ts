import fs from "fs";

export const test_pdf_page_count = (
  pdf_path: string,
  expected_page_count: number
) => {
  const pdf = fs.readFileSync(pdf_path);

  // from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
  const pdf_page_count = pdf.toString().match(/\/Type[\s]*\/Page[^s]/g)?.length;

  if (pdf_page_count !== expected_page_count) {
    console.log(
      `Page count failed: PDF page count of ${pdf_page_count}, expected ${expected_page_count}`
    );
    process.exit(1);
  }

  console.log(`PDF page count as expected (${expected_page_count})`);
};
