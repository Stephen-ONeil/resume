import fs from "fs";
import http from "http";

import getPort from "get-port";
import puppeteer from "puppeteer";
import handler from "serve-handler";

import { build_dir, pdf_path } from "./script_consts.js";

const serve_build_dir = async port =>
  http
    .createServer((request, response) =>
      handler(request, response, { public: build_dir })
    )
    .listen(port);

const get_resume_pdf = async () => {
  if (!fs.existsSync(`${build_dir}/index.html`)) {
    throw new Error(
      "Error generating pdf: build dir doesn't contain an index.html file"
    );
  }

  const free_port = await getPort();
  const server = await serve_build_dir(free_port);

  const browser = await puppeteer.launch({
    // see https://github.com/puppeteer/puppeteer/issues/4039
    // TODO: this fix is system dependent, find something more portable later
    executablePath: "/usr/bin/chromium",
    // Ubuntu 23.10+ disables unpriviledged user namespaces, preventing chrome from creating a sandbox
    // can consider the pages visited here to be trusted, so running without a sandbox is acceptable if not ideal
    // TODO: reconsider this workaround if switching CI runtime image
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${free_port}/`);

  // Some uncertain timing issue causes pdf generation to be flaky, waiting here before continuing seems to smooth it over
  // ... page.goto waits for the load event to fire, so it shouldn't be missing styles
  // The transitions are disabled by a media query so it shouldn't be those either... well, half a second is inconsequential, just want good pdfs to be spat out!
  await page.waitFor(500);

  const pdf = await page.pdf();

  await browser.close();
  server.close();

  return pdf;
};

fs.rmSync(pdf_path, { force: true });

try {
  const pdf = await get_resume_pdf();

  fs.writeFileSync(pdf_path, pdf);
} catch (e) {
  console.log(e);
  process.exit(1);
}

console.log(`Generating pdf successful. PDF written to ${pdf_path}`);
