import React from 'react';
import ReactMarkdown from 'react-markdown';

import './resume-common.scss';
import * as content from './content.js';

import './PaperResume.scss';

function PaperResume(){
  return (
    <div className="resume paper-resume fcol">
      <div className="frow">
        <section className="fcol fcol__1-half" style={{textAlign: "center"}}>
          <ReactMarkdown source={content.contact_info} />
        </section>
        <section className="fcol fcol__1-half">
          <h2 style={{height: "0em", width: "0em", fontSize: "0em"}}>
            {"Overview"}
          </h2>
          <ReactMarkdown source={content.brief} />
        </section>
      </div>
      <div className="frow" style={{flexGrow: 1}}>
        <div className="fcol fcol__1-3rd">
          <section className="fcol" style={{height: "100%"}}>
            <ReactMarkdown source={content.developer} />
          </section>
          <section className="fcol">
            <ReactMarkdown source={content.extracurricular} />
          </section>
        </div>
        <div className="fcol fcol__2-3rd" style={{flexGrow: 1}}>
          <div className="frow">
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={content.operations} />
            </section>
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={content.security} />
            </section>
          </div>
          <section className="fcol" style={{height: "100%"}}>
            <ReactMarkdown source={content.curriculum_vitae} />
          </section>
        </div>
      </div>
    </div>
  );
}

export { PaperResume };