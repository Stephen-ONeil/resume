const _ = require('lodash');
const remove_markdown = require('remove-markdown');
const SpellChecker = require('simple-spellchecker');

const dictionary = SpellChecker.getDictionarySync("en-GB");

const sections = require('../src/sections.js');

const allow_list = [
  "app", "dev", "github", "com", "oneil", "tbs", "eacpd", "infobase", "infobase's", "gcinfobase", "gmail", "uottawa", "lodash",
  "sass", "devops", "graphql", "mongodb", "google", "gc", "frontend", "serverless", "api",
  "vizualization", "nbsp", "js", "css", "ecmascript", "nullish", "apis", "vs", "posix", "macos", "ci",
  "microservices", "secops", "appsec", "blogs", "podcasts", "owasp", "devs", "backend", "mailto",
  "mentoring", "setup", "ochro", "ochro's", "sql", "sas", "hoc", "hr", "bachelour", "gpa", "dotfiles",
  "tech", "esnext", "circleci", "architecting", "ux", "gcloud", "microservice",  "laude", "instills",
  "monorepo", "ts", "juniour", "juniours", "django", "sh", "webpack", "vscode", "ui", "covid", "workflows",
  "admin", "async", "typeahead"
];


const spelling_mistakes_by_section = _.chain(sections)
  .mapValues( (section, section_key) => _.chain(section)
    .thru( ({header, content}) => `${header} ${content}`)
    .thru(remove_markdown)
    .toLower()
    .words()
    .uniq()
    .filter( (word) => _.isNaN(+word) && !_.includes(allow_list, word) )
    .map( (word) => !dictionary.spellCheck(word) && word )
    .filter()
    .value()
  )
  .pickBy( (spelling_errors, section_key) => !_.isEmpty(spelling_errors) )
  .value()

if ( !_.isEmpty(spelling_mistakes_by_section) ){
  const spelling_error_log = _.map(
    spelling_mistakes_by_section,
    (spelling_mistakes, section_key) => `\n In '${section_key}': ${spelling_mistakes.toString()}`
  );

  throw new Error(`Alert: spelling mistakes detected!${spelling_error_log}`);
}