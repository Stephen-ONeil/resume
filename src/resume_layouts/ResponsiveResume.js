import classNames from "classnames";
import React from "react";

import { ResumeSection } from "../components/ResumeSection/ResumeSection.js";
import {
  main_header,
  brief,
  certs,
  languages,
  libraries,
  tools,
  platforms,
  skills,
  education,
  curriculum_vitae,
} from "../resume_content.js";

import responsive_styles from "./ResponsiveResume.module.scss";
import common_styles from "./resume-common.module.scss";

function ResponsiveResume() {
  return (
    <div
      className={classNames(
        common_styles.resume,
        responsive_styles["responsive-resume"]
      )}
    >
      <ResumeSection
        section={main_header}
        className={classNames(responsive_styles["primary-section"])}
        header_level={1}
      />
      <ResumeSection section={brief} enter_from="left" />
      <ResumeSection
        section={certs}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="right"
      />
      <ResumeSection
        section={languages}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="left"
      />
      <ResumeSection
        section={libraries}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="right"
      />
      <ResumeSection
        section={tools}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="left"
      />
      <ResumeSection
        section={platforms}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="right"
      />
      <ResumeSection
        section={skills}
        className={classNames(common_styles["horizontal-list"])}
        enter_from="left"
      />
      <ResumeSection section={education} enter_from="right" />
      <ResumeSection section={curriculum_vitae} enter_from="left" />
    </div>
  );
}

export { ResponsiveResume };
