import React from 'react';

import { ResumeSection } from './resume-common.js';
import './resume-common.scss';

import {
  contact_info,
  brief,
  languages,
  libraries,
  tools,
  platforms,
  curriculum_vitae,
} from './sections.js';

import './ResponsiveResume.scss';

function ResponsiveResume(){
  return (
    <div className="resume responsive-resume">
      <ResumeSection
        section={contact_info}
        className="primary-section"
        style={{textAlign: "center"}}
        header_level={1}
      />
      <ResumeSection
        section={brief}
        show_header={false}
        enter_from="left"
      />
      <ResumeSection
        section={languages}
        className="two-column-list"
        enter_from="right"
      />
      <ResumeSection
        section={libraries}
        className="two-column-list"
        enter_from="left"
      />
      <ResumeSection
        section={tools}
        className="two-column-list"
        enter_from="right"
      />
      <ResumeSection
        section={platforms}
        className="two-column-list"
        enter_from="left"
      />
      <ResumeSection
        section={curriculum_vitae}
        enter_from="right"
      />
    </div>
  );
}

export { ResponsiveResume };