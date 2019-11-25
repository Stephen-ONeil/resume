// using common.js module syntax in this file as it is also imported by some scripts, and I don't want to go around transpiling scripts

const moment = require('moment');
const _ = require('lodash');

const now = moment();
const approx_time_since_in_years = (date) => `~${_.round(moment.duration( now.diff(moment(date)) ).asYears(), 1)}`;

// roughly since start of first CO-OP term
const front_end_years = approx_time_since_in_years([2015, 0, 1]);

// roughly since when I first set up CI for real, we were starting to experiment with GCloud/GraphQl and the InfoBase API
const back_end_years = approx_time_since_in_years([2018, 2, 15]);


const contact_info = {
  header: "Stephen O'Neil",
  content: `
## Full Stack Web App Dev
(613) 867-7727  
[github.com/Stephen-ONeil](https://github.com/Stephen-ONeil)  
[github.com/TBS-EACPD/infobase](https://github.com/TBS-EACPD/infobase)  
[Stephen.Levi.ONeil<span style="font-family: Times, serif;">@</span>gmail.com](mailto:Stephen.Levi.ONeil@gmail.com)  
Ottawa, Ontario
`,
};

const brief = {
  header: 'Brief',
  content: `
- Honours B.Sc. Physics-Mathematics, uOttawa
- **Senior JavaScript developer, full stack** at 
Treasury Board of Canada Secretariat (TBS)
  - **${front_end_years} years front end — React, Lodash, Sass, ESNext**
  - **${back_end_years} years back end/DevOps — Node, GraphQL, MongoDB, Google Cloud, Docker, CircleCI**
- E.g. **GC InfoBase** ([canada.ca/gcinfobase](https://canada.ca/gcinfobase)), a SPA React frontend backed by a serverless GraphQL API, offering data vizualization and exploration vectors
`,
};

const developer = {
  header: 'Developer',
  content: `
- _Prefer done right, right now, over done yesterday. The "done yesterday" mindset is opposed to "still works tomorrow"._  
&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp;– Me, on my resume
- JS expert, HTML & CSS proficient. Framework of choice React. Strives to make ethical and user-centric design decisions, from performance to A11y
- ECMAScript proposal watcher, excited for the pipeline operator and optional chaining + nullish coalescing. Ride the wave of JS progress!
- Generally borrows heavily from the functional paradigm, prefers declarative APIs (internally), and loves formulating robust data-driven control-flow  
- Environment of choice is VS Code and command line tools. Most at home with Linux or Posix (macOS) systems
- Git and GitHub fan, with years of experience using, and helping others to learn, the tool & service ${/* TODO: this line's not necessary, plenty of links to my GitHub show this. Think about something more useful to replace it with */''}
`
};

const operations = {
  header: 'Operations',
  content: `
- Strong believer in DevOps, with a current position combining both the lead Dev and Ops roles
- Automation and Bash scripts! Getting fancy with CI! Dev tooling! Easy & safe deploys! It's fun to build _and_ a solid project investment
`
};

const security = {
  header: 'Security',
  content: `
- Pushing _from_ the left, bringing security-by-design to the design stages of Dev and DevOps tasks
- Staying up-to-date with SecOps and AppSec news and best practices through blogs, mailing lists, podcasts, and local groups
`
};

const curriculum_vitae = {
  header: 'Curriculum Vitae',
  content: `
- **09/2017 - Ongoing** – Senior JavaScript Developer, Expenditure Management Sector, TBS
  - Responsible for the GC InfoBase source code, at ~57,000 lines of JS. Implementing new features and guiding junior devs' while ensuring continued maintainability. Constantly oiling the machine
  - Building backend components for the main SPA, E.g.
    - a GraphQL data-fetching API using GCloud functions and MongoDB
    - an email form microservice providing and validating templates, brokering to keep sender/receiver emails anonymous, and mitigating spam. Keeps :mailto links and their inconsistent UX out of the front-end while ensuring that received communications are of high quality
  - Architecting and administering project DevOps, E.g.
    - transitioned hosting from a static file server administered by a separate team to a self-administered cloud hosting setup, bringing the deployment process from days to minutes and providing a real backend + flexible & faster hosting. All for negligible operating costs!
  - Acting as champion for code standards, code review, testing, CI/CD, and Open Sourcing/working in the open
  - Hiring, supervising, and mentoring of CO-OP students; 7+ to date
  - Providing a security audit function within the team, identifying more real risks and sensitive bugs than our IT security's commissioned App scans
  
- **01/2015 - 09/2017** – Developer/Junior Analyst/CO-OP Student, Office of the Chief Human Resources Officer, TBS
  - Developed and maintained HR portions of the GC InfoBase. Responded to and built tooling to automate data requests using SQL, SAS, and Java
  
- **09/2012 - 04/2017** – Honours Bachelour of Science in Physics-Mathematics with CO-OP, Cum Laude, University of Ottawa
  - Founding president of uOttawa Computational Physics Club
`
};

const extracurricular = {
  header: 'Extracurricular',
  content: `
- Unix nerd, [github.com/ Stephen-ONeil/.dotfiles](https://github.com/Stephen-ONeil/.dotfiles)
- Local tech meet-ups
- Reading novels (Sci-fi, fantasy) & comics (web, indie)
- Listening to music (all sorts) & podcasts (comedy, tech)
- Night-time walking
`
};

module.exports = {
  contact_info,
  brief,
  developer,
  operations,
  security,
  curriculum_vitae,
  extracurricular,
};