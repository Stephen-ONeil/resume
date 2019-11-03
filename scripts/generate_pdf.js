const fs = require('fs');

const {
  build_dir,
  pdf_name,
} = require('./script_consts');
const { get_resume_pdf } = require('./script_utils');

const pdf_path = `${build_dir}/${pdf_name}`;

(async () => {
  const pdf = await get_resume_pdf();

  fs.writeFileSync(pdf_path, pdf);

  if ( fs.existsSync(pdf_path) ){
    console.log(`Generating pdf successful`);
  }
  // not logging the inverse as, pretty sure, anything going wrong before this would have thrown its own error. Confirm that some time?
})();