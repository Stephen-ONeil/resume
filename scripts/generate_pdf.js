const path = require('path');
const fs = require('fs');
const http = require('http');

const getPort = require('get-port');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');


const pdf_name = 'stephen-oneil-resume.pdf';

const build_dir = path.resolve(__dirname, '../build');

const serve_build_dir = async (port) =>  http
  .createServer( (request, response) => handler(request, response, {public: build_dir}) )
  .listen(port);

const save_pdf = async (port) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/`); 
  await page.pdf({path: `${build_dir}/${pdf_name}`});
  await browser.close();
};


(async () => {
    if ( !fs.existsSync(`${build_dir}/index.html`) ){
      console.log("Error generating pdf: build dir doesn't contain an index.html file");
    } else {
      const free_port = await getPort();

      const server = await serve_build_dir(free_port);

      await save_pdf(free_port);

      if ( fs.existsSync(`${build_dir}/${pdf_name}`) ){
        console.log(`Generating pdf successful`);
      }
      // not logging the inverse as, pretty sure, anything going wrong before this would have thrown its own error. Confirm that some time?

      server.close(); 
    }
})();