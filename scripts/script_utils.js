const http = require('http');
const fs = require('fs');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');
const getPort = require('get-port');

const { build_dir } = require('./script_consts.js')


const serve_build_dir = async (port) => http
  .createServer( (request, response) => handler(request, response, {public: build_dir}) )
  .listen(port);

const get_resume_pdf = async () => {
  if ( !fs.existsSync(`${build_dir}/index.html`) ){
    throw new Error("Error generating pdf: build dir doesn't contain an index.html file");
  }

  const free_port = await getPort();
  const server = await serve_build_dir(free_port);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${free_port}/`); 

  const pdf = await page.pdf();

  await browser.close();
  server.close(); 

  return pdf;
};

module.exports = {
  serve_build_dir,
  get_resume_pdf,
};