import React from 'react';
import './Resume.scss';

import ReactMarkdown from 'react-markdown';


const contact_info = `
# Stephen O'Neil
## Full Stack Web App Dev
(613) 867-7727  
[github.com/Stephen-ONeil](https://github.com/Stephen-ONeil)  
[Stephen.Levi.ONeil@gmail.com](mailto:Stephen.Levi.ONeil@gmail.com)  
Apt. 7 - 45 Somerset Street, Ottawa, Ontario, K2P 0H3  
`;

const brief = `
- Honours B.Sc. Physics-Mathematics, uOttawa
- **Senior JavaScript developer, full stack** at 
Treasury Board of Canada Secretariat (TBS)
  - **4+ years front end**. **React, Lodash, Sass, D3**
  - **1.5+ years back end**, DevOps. **Node, GraphQL, MongoDB, Google Cloud**
  - E.g. **GC InfoBase** ([canada.ca/gcinfobase](https://canada.ca/gcinfobase)), a React SPA backed by a serverless GraphQL API
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
- Strong believer in DevOps, bringing both the "Dev" and the "Ops" to the table in all projects with space at the table
- Automation! Logging! Serverless microservices! Actually reading logs! Making deployments easy and safe!
`;

const security = `
## Security
- Pushing _from_ the left, bringing security-by-design to the design stages of Dev and DevOps tasks
- Staying up-to-date with SecOps news/topics through blogs, mailing lists, podcasts, and local OWASP meet-ups
`;

const curriculum_vitae = `
## Curriculum Vitae
- **09/2017 - Ongoing** – Senior JavaScript Developer, Expenditure Management Sector (EMS), TBS
  - Maintaining the GC InfoBase front end source code, at ~50,000 lines of JS. Implementing, and guiding junior Devs implementing, new features while ensuring continued maintainability
  - Building more backend components for the main SPA, including the GraphQL data API and a email backend to obviate mailto links
  - Transitioned the GC InfoBase hosting from a static file server administered by a separate team to a self-administered cloud hosting setup, bringing the deployment process from days to minutes, gaining more flexible and faster hosting with a real backend, and doing it all for negligible hosting costs 
  - Providing a security audit function, identifying more relevant risks and bugs than IT commissioned scans
  - Hiring, supervising, and mentoring of 7+ CO-OP students
  - Championing for code standards, code reviews, testing, CI/CD, and Open Sourcing/working in the open
  
- **01/2015 - 09/2017** – Junior Analyst/Developer, Office of the Chief Human Resources Officer (OCHRO), TBS
  - Developed and maintained OCHRO's portions of the GC InfoBase web app, in partnership with EMS colleagues
  - SQL, SAS, Java. Responded to ad-hoc data requests and automated periodic ones
  
- **09/2012 - 04/2017** – Honours Bachelour of Science, Physics-Mathematics with CO-OP, University of Ottawa
  - Dean's Honour List 2014-2015 (for an annual GPA of 8.5+)
  - Founding president of uOttawa Computational Physics Club
`;

const extracurricular = `
## Extracurricular
- Regular attendee of Ottawa Civic Tech meet-ups
- GNU+Linux nerd
`;


function Resume(){
  return (
    <div className="resume fcol">
      <div className="frow">
        <section className="fcol fcol__1-half" style={{textAlign: "center"}}>
          <ReactMarkdown source={contact_info} />
        </section>
        <section className="fcol fcol__1-half">
          <h2 style={{height: "0em", width: "0em", fontSize: "0em"}}>
            {"Overview"}
          </h2>
          <ReactMarkdown source={brief} />
        </section>
      </div>
      <div className="frow" style={{flexGrow: 1}}>
        <div className="fcol fcol__1-3rd">
          <section className="fcol" style={{height: "100%"}}>
            <ReactMarkdown source={developer} />
          </section>
          <section className="fcol">
            <ReactMarkdown source={extracurricular} />
          </section>
        </div>
        <div className="fcol fcol__2-3rd" style={{flexGrow: 1}}>
          <div className="frow">
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={operations} />
            </section>
            <section className="fcol fcol__1-half">
              <ReactMarkdown source={security} />
            </section>
          </div>
          <section className="fcol" style={{height: "100%"}}>
            <ReactMarkdown source={curriculum_vitae} />
          </section>
        </div>
      </div>
    </div>
  );
}

export { Resume };