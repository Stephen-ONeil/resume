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

import './PaperResume.scss';

function PaperResume(){
  return (
    <div className="resume paper-resume fcol">
      <div className="frow">
        <ResumeSection
          section={contact_info}
          className="fcol fcol__1-half primary-section"
          style={{textAlign: "center"}}
          header_level={1}
        />
        <ResumeSection
          section={brief}
          className="fcol fcol__1-half"
          style={{justifyContent: "center"}}
          show_header={false}
          enter_from="top"
        />
      </div>
      <div className="frow" style={{flexGrow: 1}}>
        <div className="fcol fcol__1-4th" style={{justifyContent: "center"}}>
          <ResumeSection
            section={languages}
            enter_from="bottom"
          />
          <ResumeSection
            section={libraries}
            enter_from="bottom"
          />
          <ResumeSection
            section={tools}
            enter_from="bottom"
          />
          <ResumeSection
            section={platforms}
            enter_from="bottom"
          />
        </div>
        <div className="fcol fcol__3-4th" style={{flexGrow: 1, paddingRight: "18px"}}>
          <ResumeSection
            section={curriculum_vitae}
            enter_from="right"
          />
        </div>
      </div>
    </div>
  );
}

export { PaperResume };