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
          section={sections.contact_info}
          className="fcol fcol__1-half primary-section"
          style={{textAlign: "center"}}
          heading_element='h1'
          escape_html={false}
        />
        <ResumeSection
          section={sections.brief}
          className="fcol fcol__1-half"
          heading_element='h2'
          heading_style={{height: "0em", width: "0em", fontSize: "0em"}}
          escape_html={false}
          enter_from="top"
        />
      </div>
      <div className="frow" style={{flexGrow: 1}}>
        <div className="fcol fcol__1-3rd">
          <ResumeSection
            section={sections.skills}
            heading_element='h2'
            enter_from="left"
          />
          <ResumeSection
            section={sections.qualities}
            style={{height: "100%"}}
            heading_element='h2'
            enter_from="bottom"
          />
        </div>
        <div className="fcol fcol__2-3rd" style={{flexGrow: 1}}>
          <ResumeSection
            section={sections.curriculum_vitae}
            style={{height: "100%"}}
            heading_element='h2'
            enter_from="right"
          />
        </div>
      </div>
    </div>
  );
}

export { PaperResume };