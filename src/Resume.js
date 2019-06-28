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
  - **1.5+ years back end, DevOps. Node, GraphQL, MongoDB, Google Cloud**
  - E.g. **GC InfoBase** ([canada.ca/gcinfobase](https://canada.ca/gcinfobase)), a React SPA backed by a serverless GraphQL API
`;

const developer = `
## Developer
- _Code cleanly-ness is next to goodly-ness. "Done yesterday" is the enemy of "still works tomorrow". Aim for done right, right now._ – Stephen O'Neil
- JS expert, HTML & CSS proficient. Framework of choice is React. Ever aware of A11y, and strives to make ethical and user-first decisions always
- ECMAScript proposal watcher, currently excited for the pipeline operator and optional chaining + nullish coalescing
- Generally borrows heavily from the functional paradigm, favours declarative style for internal APIs
- Perfectly at home with Linux and Posix (Mac OS) systems. Comfortable with Windows. Preference for VS Code and command line tools
- Git and GitHub fan, with years of experience using and training others to make full use of the tool & service
`;

const operations = `
## Operations                
- Strong believer in DevOps, personally bringing both the "Dev" and the "Ops" to all projects within appropriate scale
- Automation and Bash scripts! Serverless microservices! Logging! Actually using logs! Making deployments easy & safe!
`;

const security = `
## Security
- Pushing _from_ the left, bringing security-by-design to the design stages of Dev and DevOps tasks
- Staying up-to-date with SecOps and AppSec news and best practices through blogs, mailing lists, podcasts, and the local OWASP meet-up
`;

const curriculum_vitae = `
## Curriculum Vitae
- **09/2017 - Ongoing** – Senior JavaScript Developer, Expenditure Management Sector (EMS), TBS
  - Maintaining the GC InfoBase front end source code, at ~50,000 lines of JS. Implementing, and guiding junior Devs' implementation of new features while ensuring continued maintainability
  - Building backend components for the main SPA, including a GraphQL data-fetching API and an email backend (obviating mailto)
  - Hiring, supervising, and mentoring of 7+ CO-OP students
  - Championing for code standards, code review, testing, CI/CD, and Open Sourcing/working in the open
  - Transitioned hosting from a static file server administered by a separate team to a self-administered cloud hosting setup, bringing the deployment process from days to minutes, gaining more flexible, faster hosting & a real backend, and doing it all for negligible hosting costs
  - Providing a security audit function within my team, identifying more relevant risks and bugs than IT commissioned App scans
  
- **01/2015 - 09/2017** – Developer/Junior Analyst, Office of the Chief Human Resources Officer (OCHRO), TBS
  - Developed and maintained OCHRO's portions of the GC InfoBase web app, in partnership with EMS colleagues
  - SQL, SAS, Java. Responded to ad-hoc data requests and automated periodic ones
  
- **09/2012 - 04/2017** – Honours Bachelour of Science, Physics-Mathematics with CO-OP, University of Ottawa
  - Dean's Honour List 2014-2015 (for an annual GPA of 8.5+)
  - Founding president of uOttawa Computational Physics Club
`;

const extracurricular = `
## Extracurricular
- Regular attendee at the Ottawa Civic Tech meet-up
- GNU+Linux nerd
- Reading novels (Sci-fi, fantasy) & comics (web, indie)
- Listening to music (misc) & podcasts (comedy, tech)
- Night-time walking
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