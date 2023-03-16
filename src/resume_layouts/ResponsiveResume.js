import classNames from "classnames";
import React from "react";

import { ResumeSection } from "../components/ResumeSection/ResumeSection.js";
import {
  contact_info,
  brief,
  languages,
  libraries,
  tools,
  platforms,
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
        section={contact_info}
        className={classNames(responsive_styles["primary-section"])}
        style={{ textAlign: "center" }}
        header_level={1}
      />
      <ResumeSection section={brief} show_header={false} enter_from="left" />
      <ResumeSection
        section={languages}
        className={classNames(responsive_styles["two-column-list"])}
        enter_from="right"
      />
      <ResumeSection
        section={libraries}
        className={classNames(responsive_styles["two-column-list"])}
        enter_from="left"
      />
      <ResumeSection
        section={tools}
        className={classNames(responsive_styles["two-column-list"])}
        enter_from="right"
      />
      <ResumeSection
        section={platforms}
        className={classNames(responsive_styles["two-column-list"])}
        enter_from="left"
      />
      <ResumeSection section={curriculum_vitae} enter_from="right" />
    </div>
  );
}

export { ResponsiveResume };
