const { get_resume_pdf } = require('./script_utils');

const expected_page_count = 1;

(async () => {
  const pdf = await get_resume_pdf();

  // from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
  const pdf_page_count = pdf.toString().match(/\/Type[\s]*\/Page[^s]/g).length; 

  if (pdf_page_count !== expected_page_count){
    throw new Error(`Page count failed: PDF page count of ${pdf_page_count}, expected ${expected_page_count}`);
  }
})().catch( error => {
  console.log(error);
  process.exit(1);
});