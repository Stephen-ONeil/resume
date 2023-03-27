import moment from "moment";

const now = moment();
const approx_time_since_in_years = date =>
  `${Math.floor(moment.duration(now.diff(moment(date))).asYears())}+`;

// roughly since start of first CO-OP term
const front_end_years = approx_time_since_in_years([2015, 0, 1]);

// roughly since when I first set up CI for real, we were starting to experiment with GCloud/GraphQl and the InfoBase API
const back_end_years = approx_time_since_in_years([2018, 2, 15]);

const link_out = (text, href) =>
  `<a target='_blank' rel='noopener noreferrer' href='${href}'>${text}</a>`;

export const main_header = {
  header: "Stephen O'Neil",
  content: `
## Full Stack Web App Dev
**${front_end_years} years frontend** | **${back_end_years} years backend & DevSecOps**  
${link_out(
  "github.com/Stephen-ONeil",
  "https://github.com/Stephen-ONeil"
)}  | [stephenlevioneil<span style="font-family: Times, serif;">@</span>gmail.com](mailto:stephenlevioneil@gmail.com)
 
`,
};

export const brief = {
  header: false,
  content: `
- Currently **lead developer** & **technical advisor** for a **data services team**, serving a branch of **600+** employees
- Previously **lead developer** on **GC InfoBase** (${link_out(
    "canada.ca/gcinfobase",
    "https://canada.ca/gcinfobase"
  )}, ${link_out(
    "github.com/TBS-EACPD/infobase",
    "https://github.com/TBS-EACPD/infobase"
  )}), a **React SPA client** backed by a **serverless GraphQL API**
`,
};

export const languages = {
  header: "Languages",
  content: `
- TypeScript & JavaScript
- HTML
- CSS & Sass
- sh & Bash
- Python
- SQL
`,
};
export const libraries = {
  header: "Libraries & Frameworks",
  content: `
- React
- Lodash
- GraphQL
- Jest
- React Testing Library
- Cypress
- Axe-core
- Webpack
- Express.js
- NextJS
- Django
`,
};
export const tools = {
  header: "Tools",
  content: `
- Git
- VSCode
- Linux
- Docker
- MongoDB
- PostgreSQL
`,
};
export const platforms = {
  header: "Platforms",
  content: `
- Google Cloud Platform
- DigitalOcean
- CircleCI
`,
};
export const skills = {
  header: "Other Skills & Competencies",
  content: `
- Mentorship
- Automation
- Architecture
- Accessibility
- Application Security
- Strategic leadership
`,
};
export const education = {
  header: "Education",
  content: `
Honours B.Sc. Physics-Mathematics, uOttawa  
2017, Cum Laude
`,
};

export const curriculum_vitae = {
  header: "Curriculum Vitae",
  content: `
**Lead Developer** & **Technical Advisor** | 01/2023 - ongoing  
_Science and Parliamentary Infrastructure Branch, Public Services and Procurement Canada_
  - Advising on the technical aspects of the new branch-wide data policy
  - Triaging an inherited portfolio of ~20 applications in various stages from prototype to pilot 
    - Identified 10+ retired or stalled projects to decommission, directly reducing cloud bills, maintenance burden, and potential risks & attack surface  
    - Maturing the remaining applications and infrastructure (e.g. eliminating manual deploy steps, implementing automated rollback capabilities, hardening configurations, etc.) 

**Lead Developer** | 09/2017 - 12/2022  
_Expenditure Management Sector, Treasury Board of Canada Secretariat_
  - Lead the GC InfoBase project beginning in Summer 2018; was responsible for the project's technical direction, overall design, and for the team's developer talent

    - Iterated on and maintained the project's large React frontend
      - E.g. through gradual refactors to legacy code, brought the average turn around of routine site updates ${link_out(
        "from a baseline of 5 business days to an average of 0.13",
        "https://www.tbs-sct.canada.ca/ems-sgd/edb-bdd/index-eng.html#infographic/dept/326/results/.-.-(indicator.-.-&#39;PROGRAM-drr21-11350)"
      )}

    - Built backend microservices to support the main application
      - E.g. built a versatile template based form service, used to collect, validate, store, and alert the team across multiple lines of in-app user feedback

    - Architected and administered infrastructure and operations for the project
      - E.g. transitioned hosting from tenancy in an external team's servers to cloud platforms & an in-house DevOps culture, taking deploying from days to minutes

    - Developed tooling to multiply team productivity and reinforce best practices
      - E.g. implemented automated end-to-end WCAG 2.1 accessibility testing for CI

    - Championed code standards, review practices, testing, CI/CD, and working in the open
      - E.g. pitched stakeholders on open sourcing the project; was awarded in recognition of the positive impacts one year later

    - Hired, supervised, and mentored juniour developers and CO-OP students

  - Built the data collection tool used for the centralized tracking of COVID-19 related expenditures across all government departments
    - Quickly learnt Python, Django, an existing internal platform's code & environment, and the business requirements; met the ambitious 3 month deadline provided for launch
    - Independently developed the new collection tool off of the existing platform, with robust domain-specific user and admin workflows
    - Contributed lasting improvements to the existing platform's testing practices
  
**CO-OP Student & part-time developer** | 01/2015 - 09/2017  
_Office of the Chief Human Resources Officer, Treasury Board of Canada Secretariat_
  - Self-taught JS, HTML, CSS, and Git; developed the early HR data portions of GC InfoBase 
`,
};
