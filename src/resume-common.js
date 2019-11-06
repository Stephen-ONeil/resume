import React from 'react';
import ReactMarkdown from 'react-markdown';

export const ResumeSection = ({className, style, section, heading_element, heading_style}) => {
  const HeadingElement = /^h[1-9]$/.test(heading_element) ? heading_element : 'h1';
  return (
    <section className={className} style={style}>
      <HeadingElement style={heading_style}>
        {section.header}
      </HeadingElement>
      <ReactMarkdown source={section.content} />
    </section>
  );
};