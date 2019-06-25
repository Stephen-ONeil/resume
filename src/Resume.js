import React from 'react';
import './Resume.scss';

import ReactMarkdown from 'react-markdown';


const contact_info = `
# Stephen O'Neil
## Full-stack Web App Dev
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

const developer = `
## Developer
### Front End
TODO

### Back End
TODO
`;

const operations = `
## Operations
TODO
`;

const security = `
## Security
TODO
`;

const curriculum_vitae = `
## Curriculum Vitae
TODO
`;

const extracurricular = `
- a
- b
- c
`;


function Resume(){
  return (
    <div className="resume fcol">
      <div className="frow">
        <section className="fcol fcol__1-half" style={{textAlign: "center"}}>
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
          <ReactMarkdown source={developer}/>
        </section>
        <div className="fcol fcol__2-3rd">
          <div className="frow">
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={operations}/>
            </section>
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={security}/>
            </section>
          </div>
          <section className="fcol" style={{height: "100%"}}>
            <ReactMarkdown source={curriculum_vitae}/>
          </section>
          <section className="fcol" style={{height: "100%"}}>
            <h2>
              {"Extracurricular"}
            </h2>
            <div className="two-column-list">
              <ReactMarkdown source={extracurricular}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export { Resume };