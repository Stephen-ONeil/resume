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
(613) 867-7727  
${link_out("github.com/Stephen-ONeil","https://github.com/Stephen-ONeil")}  
${link_out("github.com/TBS-EACPD/infobase","https://github.com/TBS-EACPD/infobase")}  
[Stephen.Levi.ONeil<span style="font-family: Times, serif;">@</span>gmail.com](mailto:StephenLeviONeil@gmail.com)  
Ottawa, Ontario
`,
};

const brief = {
  header: 'Brief',
  content: `
- **Senior developer, full stack**
  - **${front_end_years} years front end**
  - **${back_end_years} years back end & DevOps**
- Currently lead on **GC InfoBase** (${link_out("canada.ca/gcinfobase","https://canada.ca/gcinfobase")}), a **React SPA** backed by a
  **serverless GraphQL API**, presenting government data to the public through visualizations and exploration tools
- Honours B.Sc. Physics-Mathematics, uOttawa
`,
};

const skills = {
  header: 'Skill Highlights',
  content: `
- **Languages**
  - JavaScript & TypeScript – HTML5 – CSS & Sass – sh & Bash – Python 3  
- **Libraries & Frameworks**
  - React – GraphQL (E.g. Apollo) – Lodash – Webpack – Jest – Express.js – Mongoose – Django 
- **Tools, Platforms, & Environments**
  - git – VSCode – Docker – CircleCI – Google Cloud – MongoDB Atlas – Unix & POSIX systems
- **Other**
  - Architecture – UI/UX – A11y – Hiring, supervising, and mentoring – Interfacing with management and partners
`,
};

const qualities = {
  header: 'As a Developer, I',
  content: `
- _Prefer done right, right now, over done yesterday. The "done yesterday" mindset is opposed to "still works tomorrow"._  
&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp;– Me, here, on my resume
- Strive to make ethical and user-centric design decisions, from performance to accessibility
- Value developer experience and project velocity, but not when it compromises maintainability or user experience
- Continuously seek to invest in my skills, both tech & soft
  - I keep up with 60+ web dev blogs and news letters; I'm a nerd for web news _and_ web history!
`
};

const curriculum_vitae = {
  header: 'Curriculum Vitae',
  content: `
- **09/2017 - Ongoing** – **Senior Developer**, Expenditure Management Sector (EMS), Treasury Board of Canada Secretariat (TBS)
  - Lead GC InfoBase developer since Summer 2018, responsible for the project's 57K+ lines of JS/TS (and everything else InfoBase)
  - ** TODO** section mentioning some recent wins on the client
  - Building backend components for the main SPA, E.g.
    - a Node based GraphQL API leveraging serverless hosting and MongoDB, tuned to allow for more optimal data serving for the front end
    - a flexible form microservice, used to collect, validate, store, and alert the team across multiple lines of user feedback
  - Architecting and administering the GC InfoBase's operations, E.g.
    - transitioned hosting from a static file server administered by a separate team to a self-administered cloud hosting setup, bringing the
    deployment process from days to minutes and providing a real backend + flexible & faster hosting. An extreme boost to development velocity!
    - **TODO** CI wins, the dev link system and it's practical usefulness. Recent slicicng of CI run time in roughly half (best case)
  - **TODO** something about time on Titan, maybe include the post-Titan OT on the InfoBase side of covid. Mention cash award for this
  - Acting as champion for code standards, code review, testing, CI/CD, and Open Sourcing/working in the open
    - **TODO** some concrete examples? Maybe the fight to open source the repository, eventually receiving a cash award for it (what are those formally called?)
  - Hiring, supervising, and mentoring of juniour developers and CO-OP students; as many as two juniors and three CO-OPs concurrently
  - **TODO** notes on number of, success with, students
  - **TODO** mention of hiring multiple former CO-OPs as juniours, as well as training more seasoned hires with non-developer backgrounds

- **01/2015 - 09/2017** – **Student**, Office of the Chief Human Resources Officer, TBS (alternating full time CO-OP terms and part-time contracts)
  - Developed early HR portions of GC InfoBase. Self-taught JS/HTML/CSS, git, and the code base itself to do so, isolated from the core dev team
  
- **09/2012 - 04/2017** – Honours Bachelour of Science in Physics-Mathematics, University of Ottawa
`
};

module.exports = {
  contact_info,
  brief,
  skills,
  qualities,
  curriculum_vitae,
};