// using common.js module syntax in this file as it is also imported by some scripts, and I don't want to go around transpiling scripts

const moment = require('moment');
const _ = require('lodash');

const now = moment();
const approx_time_since_in_years = (date) => `~${_.round(moment.duration( now.diff(moment(date)) ).asYears(), 1)}`;

// roughly since start of first CO-OP term
const front_end_years = approx_time_since_in_years([2015, 0, 1]);

// roughly since when I first set up CI for real, we were starting to experiment with GCloud/GraphQl and the InfoBase API
const back_end_years = approx_time_since_in_years([2018, 2, 15]);


const link_out = (text, href) => `<a target='_blank' rel='noopener noreferrer' href='${href}'>${text}</a>`;


const contact_info = {
  header: "Stephen O'Neil",
  content: `
## Full Stack Web App Dev
${link_out("github.com/Stephen-ONeil","https://github.com/Stephen-ONeil")}  
${link_out("github.com/TBS-EACPD/infobase","https://github.com/TBS-EACPD/infobase")}  
[stephen.levi.oneil<span style="font-family: Times, serif;">@</span>gmail.com](mailto:stephen.levi.oneil@gmail.com)  
(613) 867-7727  
Ottawa, Ontario
`,
};

const brief = {
  header: 'Brief',
  content: `
- **Senior developer, full stack**
  - **${front_end_years} years frontend**
  - **${back_end_years} years backend & DevOps**

- Lead developer on **GC InfoBase** (${link_out("canada.ca/gcinfobase","https://canada.ca/gcinfobase")}), a **React SPA client** backed by a
  **serverless GraphQL API**, presenting government data to the public through visualizations and exploration tools

- Honours B.Sc. Physics-Mathematics, uOttawa (2017)
`,
};

const languages = {
  header: 'Languages',
  content: `
- JavaScript & TypeScript
- HTML5
- CSS & Sass
- sh & Bash
- Python 3  
`
};
const libraries = {
  header: 'Libraries & Frameworks',
  content: `
- React
- GraphQL (E.g. Apollo)
- Lodash
- Webpack
- Jest
- React Testing Library
- Express.js
- Mongoose
- Django
`
};
const tools = {
  header: 'Tools',
  content: `
- git
- VSCode
- Docker 
`
};
const platforms = {
  header: 'Platforms',
  content: `
- Google Cloud
- MongoDB Atlas
- CircleCI
`
};

const curriculum_vitae = {
  header: 'Curriculum Vitae',
  content: `
**09/2017 - Ongoing** – **Senior Developer**, Expenditure Management Sector (EMS), Treasury Board of Canada Secretariat (TBS)
  - Lead GC InfoBase developer since Summer 2018, responsible for the project's technical direction, overall design, and developer talent

    - Iterating on and maintaining the project's large React frontend
      - E.g. wrote an accessible typeahead search capable of displaying mixed local & async results, replacing an unmaintained and less flexible external library  

    - Building backend microservices to support the main application
      - E.g. built a flexible form template service, used to collect, validate, store, and alert the team across multiple lines of user feedback

    - Architecting and administering infrastructure and operations
      - E.g. transitioned hosting from a static file server administered by an external team to cloud hosting & an internal DevOps culture. Brought the
        deployment process from days to minutes while providing a capable backend + flexible & faster hosting

    - Developing tooling and practices as multipliers on team productivity
      - E.g. CI deployments of full, per-branch, development builds for quicker feedback and review cycles

    - Championing code standards, review practices, testing, CI/CD, and working in the open
      - E.g. convinced colleagues and upper management of the benefits to going open source; awarded in recognition of the impacts one year on

    - Hiring, supervising, and mentoring of juniour developers and students 
      - Supervised 10 students to date, 5 of which have returned for subsequent terms with 2 joining the team upon graduation

  - On an emergency placement, built the tool used for centralized tracking of COVID-19 related expenditures across all government departments
    - Quickly learnt Python, Django, an existing internal platform's code & environment, and the business needs; began implementation by day 6
    - Individually developed the new collection tool off the existing platform, with robust user and admin workflows, meeting a tight 3 month target
    - Contributed refinements to the existing platform's testing patterns
  
**01/2015 - 09/2017** – **Student**, Office of the Chief Human Resources Officer, TBS (alternating full-time CO-OP terms and part-time contracts)
  - Developed early HR portions of GC InfoBase. Self-taught JS/HTML/CSS, git, and the existing code base to do so
  
**09/2012 - 04/2017** – Honours Bachelour of Science in Physics-Mathematics, University of Ottawa
`
};

module.exports = {
  contact_info,
  brief,
  languages,
  libraries,
  tools,
  platforms,
  curriculum_vitae,
};