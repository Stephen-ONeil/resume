import classNames from "classnames";
import React from "react";

import { ResumeSection } from "src/components/ResumeSection/ResumeSection.js";

import {
  contact_info,
  brief,
  languages,
  libraries,
  tools,
  platforms,
  curriculum_vitae,
} from "src/resume_content.js";

import paper_styles from "./PaperResume.module.scss";
import common_styles from "./resume-common.module.scss";

function PaperResume() {
  return (
    <div
      className={classNames(common_styles.resume, paper_styles["paper-resume"])}
    >
      <div className={classNames(paper_styles["fcol"])}>
        <div className={classNames(paper_styles["frow"])}>
          <ResumeSection
            section={contact_info}
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-half"],
              paper_styles["primary-section"]
            )}
            style={{ textAlign: "center" }}
            header_level={1}
          />
          <ResumeSection
            section={brief}
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-half"]
            )}
            style={{ justifyContent: "center" }}
            show_header={false}
            enter_from="top"
          />
        </div>
        <div
          className={classNames(paper_styles["frow"])}
          style={{ flexGrow: 1 }}
        >
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-4th"]
            )}
            style={{ justifyContent: "center" }}
          >
            <ResumeSection section={languages} enter_from="bottom" />
            <ResumeSection section={libraries} enter_from="bottom" />
            <ResumeSection section={tools} enter_from="bottom" />
            <ResumeSection section={platforms} enter_from="bottom" />
          </div>
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__3-4th"]
            )}
            style={{ flexGrow: 1, paddingRight: "18px" }}
          >
            <ResumeSection section={curriculum_vitae} enter_from="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PaperResume };
