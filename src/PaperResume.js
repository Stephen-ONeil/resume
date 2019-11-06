import React from 'react';

import { ResumeSection } from './resume-common.js';
import './resume-common.scss';
import * as sections from './sections.js';

import './PaperResume.scss';

function PaperResume(){
  return (
    <div className="resume paper-resume fcol">
      <div className="frow">
        <ResumeSection
          className="fcol fcol__1-half"
          style={{textAlign: "center"}}
          section={sections.contact_info}
          heading_element='h1'
        />
        <ResumeSection
          className="fcol fcol__1-half"
          section={sections.brief}
          heading_element='h2'
          heading_style={{height: "0em", width: "0em", fontSize: "0em"}}
        />
      </div>
      <div className="frow" style={{flexGrow: 1}}>
        <div className="fcol fcol__1-3rd">
          <ResumeSection
            className="fcol"
            style={{height: "100%"}}
            section={sections.developer}
            heading_element='h2'
          />
          <ResumeSection
            className="fcol"
            section={sections.extracurricular}
            heading_element='h2'
          />
        </div>
        <div className="fcol fcol__2-3rd" style={{flexGrow: 1}}>
          <div className="frow">
            <ResumeSection
              className="fcol fcol__1-half"
              section={sections.operations}
              heading_element='h2'
            />
            <ResumeSection
              className="fcol fcol__1-half"
              section={sections.security}
              heading_element='h2'
            />
          </div>
          <ResumeSection
            className="fcol"
            style={{height: "100%"}}
            section={sections.curriculum_vitae}
            heading_element='h2'
          />
        </div>
      </div>
    </div>
  );
}

export { PaperResume };