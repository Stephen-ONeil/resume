import { console } from "node:inspector";

import { defineMiddleware } from "astro:middleware";

import en_ca_aff from "hunspell-dict-en-ca/en-ca.aff?raw";
import en_ca_dic from "hunspell-dict-en-ca/en-ca.dic?raw";

import _ from "lodash";
import { stripHtml } from "string-strip-html";
import Typo from "typo-js";

const dictionary = new Typo("en-ca", en_ca_aff, en_ca_dic);

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
