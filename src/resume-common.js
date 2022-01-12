import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import _ from 'lodash';

export const ResumeSection = ({section, className, style, header_level = 2, show_header = true, enter_from = false }) => {
  const {header, content} = section

  const HeadingElement = `h${_.clamp(header_level, 1, 9)}`;

  const section_class = _.chain(className)
    .concat(enter_from && `enter-from-${enter_from}`)
    .compact()
    .join(" ")
    .value()
  
  return (
    <section className={section_class} style={style}>
      <HeadingElement style={show_header ? {} : {height: "0em", width: "0em", fontSize: "0em"}}>
        {header}
      </HeadingElement>
      <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{content}</Markdown>
    </section>
  );
};
