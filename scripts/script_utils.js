import fs from "fs";
import http from "http";

import getPort from "get-port";
import puppeteer from "puppeteer";
import handler from "serve-handler";

import { build_dir } from "./script_consts.js";

export const serve_build_dir = async port =>
  http
    .createServer((request, response) =>
      handler(request, response, { public: build_dir })
    )
    .listen(port);

export const get_resume_pdf = async () => {
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
  });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${free_port}/`);

  const pdf = await page.pdf();

  await browser.close();
  server.close();

  return pdf;
};
