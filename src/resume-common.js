import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import _ from 'lodash';

export const ResumeSection = ({className, style, section, heading_element, heading_style, enter_from = false, escape_html = true}) => {
  const {header, content} = section

  const HeadingElement = /^h[1-9]$/.test(heading_element) ? heading_element : 'h1';

  const section_class = _.chain(className)
    .concat(enter_from && `enter-from-${enter_from}`)
    .compact()
    .join(" ")
    .value()
  
  return (
    <section className={section_class} style={style}>
      <HeadingElement style={heading_style}>
        {header}
      </HeadingElement>
      <ReactMarkdown source={content} escapeHtml={escape_html}/>
    </section>
  );
};
