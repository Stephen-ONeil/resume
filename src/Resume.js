import React from 'react';
import './Resume.scss';

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Resume(){
  return (
    <div className="resume fcol">
      <section className="frow">
        <h1>
          {"Stephen O'Neil"}
        </h1>
        {lorem_ipsum}
      </section>
      <div className="frow" style={{flexGrow: 1}}>
        <section className="fcol fcol__1-3rd">
          <h2>
            {"Developer"}
          </h2>
          {lorem_ipsum}
        </section>
        <div className="fcol fcol__2-3rd">
          <div className="frow">
            <section className="fcol fcol__1-half">
              <h2>
                {"Operations"}
              </h2>
              {lorem_ipsum}
            </section>
            <section className="fcol fcol__1-half">
              <h2>
                {"Security"}
              </h2>
              {lorem_ipsum}
            </section>
          </div>
          <section className="fcol" style={{height: "100%"}}>
            <h2>
              {"CV"}
            </h2>
            {lorem_ipsum}
          </section>
        </div>
      </div>
    </div>
  );
}

export { Resume };