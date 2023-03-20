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
(613) 867-7727 | [stephenlevioneil<span style="font-family: Times, serif;">@</span>gmail.com](mailto:stephenlevioneil@gmail.com)
${link_out("github.com/Stephen-ONeil", "https://github.com/Stephen-ONeil")}  
`,
};

export const brief = {
  header: false,
  content: `
- Currently **lead developer** & **technical advisor** for a **data services team**, navigating a mandate expansion from serving a sector of ~50 employees to **serving a branch of 600+**
- Previously **lead developer** on **GC InfoBase** (${link_out(
    "canada.ca/gcinfobase",
    "https://canada.ca/gcinfobase"
  )}, ${link_out(
    "github.com/TBS-EACPD/infobase",
    "https://github.com/TBS-EACPD/infobase"
  )}), a **React SPA client** backed by a **serverless GraphQL API**
`,
};
export const currently = {
  header: "Currently",
  content: `

`,
};
export const previously = {
  header: "Previously",
  content: `

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
`,
};
export const libraries = {
  header: "Libraries & Frameworks",
  content: `
- React
- Lodash
- GraphQL (Apollo)
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
- POSIX operating systems
- Git
- VSCode
- Docker
`,
};
export const platforms = {
  header: "Platforms",
  content: `
- Google Cloud Platform
- MongoDB Atlas
- DigitalOcean
- CircleCI
`,
};
export const skills = {
  header: "Skills & Competencies",
  content: `
- TODO
`,
};
export const education = {
  header: "Education",
  content: `
Honours Bachelor of Science, Physics-Mathematics,
uOttawa | 2017, Cum Laude
`,
};

export const curriculum_vitae = {
  header: "Curriculum Vitae",
  content: `
**01/2023 - ongoing** | **Lead Developer** & **Technical Advisor**, Science and Parliamentary Infrastructure Branch, Public Services and Procurement Canada
  - TODO

**09/2017 - 12/2022** | **Lead Developer**, Expenditure Management Sector, Treasury Board of Canada Secretariat (TBS)
  - Lead the GC InfoBase project since Summer 2018; was responsible for the project's technical direction, overall design, and for the developer talent on the team

    - Iterated on and maintained the project's large React frontend
      - E.g. wrote an accessible typeahead search component capable of displaying mixed sync & async results, replacing an unmaintained and less flexible external library  

    - Built backend microservices to support the main application
      - E.g. built a versatile template based form service, used to collect, validate, store, and alert the team across multiple lines of in-app user feedback

    - Architected and administered infrastructure and operations for the project
      - E.g. transitioned hosting from a static file server administered by an external team to cloud hosting & an internal DevOps culture. Brought the
        deployment process from days to minutes while obtaining flexible & faster hosting

    - Developed tooling to multiply team productivity and reinforce best practices
      - E.g. implemented end-to-end WCAG 2.1 accessibility testing as part of our CI process

    - Championed code standards, review practices, testing, CI/CD, and working in the open
      - E.g. successfully lobbied colleagues and upper management to take the project open source; was awarded in recognition of the positive impacts one year later

    - Hired, supervised, and mentored juniour developers and CO-OP students
      - E.g. supervised 10+ students, 5 of which returned for subsequent terms with 2 joining full-time upon graduation

  - On an emergency placement, built the data collection tool used for centralized tracking of COVID-19 related expenditures across all government departments
    - Quickly learnt Python, Django, an existing internal platform's code & environment, and the business needs; began implementation by day 6
    - Individually developed the new collection tool off the existing platform, with robust user and admin workflows, meeting the ambitious 3 month deadline provided
    - Contributed lasting refinements to the existing platform's testing patterns along the way
  
**01/2015 - 09/2017** | **Student**, Office of the Chief Human Resources Officer, TBS
  - Self-taught JS, HTML, CSS, and Git; developed the early HR data portions of GC InfoBase 
`,
};
