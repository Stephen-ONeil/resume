const { get_resume_pdf } = require('./script_utils');

(async () => {
    const pdf = await get_resume_pdf();

    // from https://stackoverflow.com/a/39222676, has caveats but seems totally reasonable for my use case
    const pdf_page_count = pdf.toString().match(/\/Type[\s]*\/Page[^s]/g).length; 

    console.log(`page count: ${pdf_page_count}`)
})();