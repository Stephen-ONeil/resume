import { readFileSync } from "node:fs";
import { console } from "node:inspector";
import path from "node:path";

import { defineMiddleware } from "astro:middleware";

import _ from "lodash";
import { stripHtml } from "string-strip-html";
import Typo from "typo-js";

// TODO could be a lot more defensive about this
const dict_name = "en-ca";
const dict_path = "node_modules/hunspell-dict-en-ca";

const aff_data = readFileSync(
  path.resolve(`${dict_path}/${dict_name}.aff`),
  "utf8"
);
const word_data = readFileSync(
  path.resolve(`${dict_path}/${dict_name}.dic`),
  "utf8"
);

const dictionary = new Typo("en-ca", aff_data, word_data);

const allow_list = [
  "Architected",
  "architected",
  "COVID",
  "Dev",
  "EACPD",
  "GC",
  "JS",
  "Kubernetes",
  "Kustomize",
  "Laude",
  "Lodash",
  "POSIX",
  "Postgre",
  "Triaged",
  "triaged",
  "WCAG",
  "Webpack",
  "backend",
  "canada",
  "frontend",
  "gcinfobase",
  "gcp",
  "github",
  "gmail",
  "infobase",
  "kubernetes",
  "microservices",
  "oneil",
  "serverless",
  "stephenlevioneil",
  "tinyurl",
];

export const spellcheck_prerendered_pages = defineMiddleware(
  async (context, next) => {
    const {
      url: { pathname },
    } = context;

    if (context.isPrerendered) {
      console.log(
        `Spellcheck: "${pathname}" is being pre-rendered, proceeding with spellcheck.`
      );

      const response = await next();

      const html = await response.text();

      const typos = _.chain(html)
        .thru(html => stripHtml(html).result)
        .words()
        .uniq()
        .filter(
          word =>
            _.isNaN(+word) &&
            !(dictionary.check(word) || allow_list.includes(word))
        )
        .value();

      if (typos.length > 0) {
        throw new Error(
          `Spellcheck: typos found on "${pathname}", ["${typos.sort().join('", "')}"]`
        );
      } else {
        console.log(`Spellcheck: no typos found on "${pathname}"`);
      }
    }

    return next();
  }
);
