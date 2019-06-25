import React from 'react';
import './Resume.scss';

import ReactMarkdown from 'react-markdown';

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const contact_info = `
(613) 867-7727  
[github.com/Stephen-ONeil](https://github.com/Stephen-ONeil)  
[Stephen.Levi.ONeil@gmail.com](mailto:Stephen.Levi.ONeil@gmail.com)  
Apt. 7 - 45 Somerset Street, Ottawa, Ontario, K2P 0H3  
`;

const brief = `
- Honours B.Sc. Physics-Mathematics, uOttawa
- **Senior full stack JavaScript developer**,  
Treasury Board of Canada Secretariat
  - **4+ years front end** experience. Single page web applications. **React, Lodash, Sass**
  - **1.5+ years back end** experience, DevOps. **Node, GraphQL, MongoDB, Google Cloud**
  - E.g. [canada.ca/gcinfobase](https://canada.ca/gcinfobase)
`;

function Resume(){
  return (
    <div className="resume fcol">
      <div className="frow">
        <section className="fcol fcol__1-half" style={{textAlign: "center"}}>
          <h1>
            {"Stephen O'Neil"}
          </h1>
          <h2>
            {"Full-stack Web App Dev"}
          </h2>
          <ReactMarkdown source={contact_info}/>
        </section>
        <section className="fcol fcol__1-half">
          <h2 style={{height: "0em", width: "0em", fontSize: "0em"}}>
            {"Overview"}
          </h2>
          <ReactMarkdown source={brief}/>
        </section>
      </div>
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