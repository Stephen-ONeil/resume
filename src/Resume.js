import React from 'react';
import './Resume.css';

function Resume(){
  return (
    <div style={{display: "flex"}} className="resume">
      <section className="fcol fcol__1-3rd-page">
        <h1>
          {"Stephen O'Neil"}
        </h1>
        <h2>
          {"Developer"}
        </h2>
      </section>
      <div className="fcol">
        <section className="fcol fcol__2-3rd-page">
          <h2>
            {"Contact"}
          </h2>
        </section>
        <div className="frow">
          <section className="fcol fcol__1-3rd-page">
            <h2>
              {"Operations"}
            </h2>
          </section>
          <section className="fcol fcol__1-3rd-page">
            <h2>
              {"Security"}
            </h2>
          </section>
        </div>
        <section className="fcol fcol__2-3rd-page">
          <h2>
            {"CV"}
          </h2>
        </section>
      </div>
    </div>
  );
}

export { Resume };