import classNames from "classnames";
import React from "react";

import { ResumeSection } from "src/components/ResumeSection/ResumeSection.js";

import {
  main_header,
  brief,
  languages,
  libraries,
  tools,
  platforms,
  skills,
  certs,
  education,
  curriculum_vitae,
} from "src/resume_content.js";

import paper_styles from "./PaperResume.module.scss";
import common_styles from "./resume-common.module.scss";

function PaperResume() {
  return (
    <div
      className={classNames(
        common_styles["resume"],
        paper_styles["paper-resume"]
      )}
    >
      <div className={classNames(paper_styles["fcol"])}>
        <div className={classNames(paper_styles["frow"])}>
          <ResumeSection
            section={main_header}
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-half"],
              paper_styles["primary-section"]
            )}
            header_level={1}
          />
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-half"]
            )}
            style={{ marginTop: "1em" }}
          >
            <ResumeSection section={brief} enter_from="top" />
          </div>
        </div>
        <div
          className={classNames(paper_styles["frow"])}
          style={{ flexGrow: 1 }}
        >
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__3-4th"]
            )}
            style={{ paddingRight: "1em" }}
          >
            <ResumeSection section={curriculum_vitae} enter_from="left" />
          </div>
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-4th"]
            )}
            style={{ padding: "2em 0em" }}
          >
            {[languages, libraries, tools, platforms, skills].map(section => (
              <ResumeSection
                key={section.header}
                section={section}
                className={classNames(common_styles["horizontal-list"])}
                style={{ paddingRight: "0.5em" }}
                enter_from="bottom"
              />
            ))}
            <ResumeSection
              section={certs}
              style={{ paddingRight: "0.5em" }}
              enter_from="bottom"
            />
            <ResumeSection
              section={education}
              style={{ paddingRight: "0.5em" }}
              enter_from="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PaperResume };
