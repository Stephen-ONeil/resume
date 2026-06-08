import fs from "fs";

type PdfPath = string;
type ExpectedPageCount = number;

export const test_pdf_page_count = (
  config: Record<PdfPath, ExpectedPageCount>
) => {
  const should_error_exit = Object.entries(config).reduce(
    (exit_code, [pdf_path, expected_page_count]) => {
      const pdf = fs.readFileSync(pdf_path);

      // from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
      const pdf_page_count = pdf
        .toString()
        .match(/\/Type[\s]*\/Page[^s]/g)?.length;

      if (pdf_page_count !== expected_page_count) {
        console.error(
          `${pdf_path}:page count failed, has ${pdf_page_count}, expected ${expected_page_count}`
        );
        return true;
      } else {
        console.log(
          `${pdf_path}: page count passed (${expected_page_count} pages)`
        );
        return exit_code;
      }
    },
    false
  );

  if (should_error_exit) {
    process.exit(1);
  }
};
