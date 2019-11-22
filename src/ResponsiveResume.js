import React from 'react';

import { ResumeSection } from './resume-common.js';
import './resume-common.scss';
import * as sections from './sections.js';

import './ResponsiveResume.scss';

function ResponsiveResume(){
  return (
    <div className="resume responsive-resume">
      <ResumeSection
        className="primary-section"
        style={{textAlign: "center"}}
        section={sections.contact_info}
        heading_element='h1'
        escape_html={false}
      />
      <ResumeSection
        section={sections.brief}
        heading_element='h2'
      />
      <ResumeSection
        section={sections.developer}
        heading_element='h2'
      />
      <ResumeSection
        section={sections.operations}
        heading_element='h2'
      />
      <ResumeSection
        section={sections.security}
        heading_element='h2'
      />
      <ResumeSection
        section={sections.curriculum_vitae}
        heading_element='h2'
      />
      <ResumeSection
        section={sections.extracurricular}
        heading_element='h2'
      />
    </div>
  );
}

export { ResponsiveResume };