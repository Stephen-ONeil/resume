const _ = require('lodash');
const remove_markdown = require('remove-markdown');
const SpellChecker = require('simple-spellchecker');

const dictionary = SpellChecker.getDictionarySync("en-US");

const content = require('../src/content.js');

const whitelist = [
  "App", "github", "EACPD", "infobase", "gmail", "Honours", "Lodash", "QL", "Mongo", "GC", "gcinfobase", 
  "frontend", "serverless", "API", "vizualization", "nbsp", "JS", "CSS", "ECMA", "nullish", "favours", 
  "Posix", "Serverless", "microservices", "App", "blogs", "podcasts", "OWASP", "GC", "JS", "Devs", 
  "backend", "QL", "API", "mailto", "App", "OCHRO", "SQL", "SAS", "Honours", "Bachelour", "Honour", 
  "github", "dotfiles", "fi", "indie", "podcasts",
];


const spelling_mistakes_by_section = _.chain(content)
  .mapValues( (section_content, section_key) => _.chain(section_content)
    .thru(remove_markdown)
    .words()
    .uniq()
    .filter( (word) => _.isNaN(+word) && !_.includes(whitelist, word) )
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