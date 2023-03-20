import classNames from "classnames";
import _ from "lodash";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./ResumeSection.module.scss";

export const ResumeSection = ({
  section,
  className,
  style,
  header_level = 2,
  enter_from = false,
}) => {
  const { header, content } = section;

  const HeadingElement = `h${_.clamp(header_level, 1, 9)}`;

  return (
    <section
      className={classNames(
        className,
        styles["resume-section"],
        enter_from && styles[`enter-from-${enter_from}`]
      )}
      style={style}
    >
      <HeadingElement
        style={header ? {} : { height: "0em", width: "0em", fontSize: "0em" }}
      >
        {header}
      </HeadingElement>
      <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
    </section>
  );
};
