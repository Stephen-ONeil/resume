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
            style={{ textAlign: "center" }}
            header_level={1}
          />
          <div
            className={classNames(
              paper_styles["fcol"],
              paper_styles["fcol__1-half"]
            )}
            style={{ justifyContent: "center" }}
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
              paper_styles["fcol__1-4th"]
            )}
            style={{ justifyContent: "center" }}
          >
            <ResumeSection
              section={languages}
              className={classNames(
                common_styles["flex-list"],
                common_styles["flex-list--compact"]
              )}
              enter_from="bottom"
            />
            <ResumeSection
              section={libraries}
              className={classNames(
                common_styles["flex-list"],
                common_styles["flex-list--compact"]
              )}
              enter_from="bottom"
            />
            <ResumeSection
              section={tools}
              className={classNames(
                common_styles["flex-list"],
                common_styles["flex-list--compact"]
              )}
              enter_from="bottom"
            />
            <ResumeSection
              section={platforms}
              className={classNames(
                common_styles["flex-list"],
                common_styles["flex-list--compact"]
              )}
              enter_from="bottom"
            />
            <ResumeSection section={education} enter_from="bottom" />
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
