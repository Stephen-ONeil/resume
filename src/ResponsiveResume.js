import React from 'react';
import ReactMarkdown from 'react-markdown';

import './resume-common.scss';
import * as content from './content.js';

import './ResponsiveResume.scss';

function ResponsiveResume(){
  return (
    <div className="resume responsive-resume">
      <section style={{textAlign: "center"}}>
        <ReactMarkdown source={content.contact_info} />
      </section>
      <section>
        <h2>Overview</h2>
        <ReactMarkdown source={content.brief} />
      </section>
      <section>
        <ReactMarkdown source={content.developer} />
      </section>
      <section>
        <ReactMarkdown source={content.operations} />
      </section>
      <section>
        <ReactMarkdown source={content.security} />
      </section>
      <section>
        <ReactMarkdown source={content.curriculum_vitae} />
      </section>
      <section>
        <ReactMarkdown source={content.extracurricular} />
      </section>
    </div>
  );
}

export { ResponsiveResume };