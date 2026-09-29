/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mosab Mhnna",
  title: "Hi all, I'm Mosab",
  subTitle: emoji(
    "Frontend Software Engineer 🚀 with 5+ years building performant, accessible, pixel-perfect web UIs in Angular, React & TypeScript. I own features from design handoff and API integration through testing and cross-browser delivery — real-time dashboards, complex state, and AI-powered interfaces — and keep codebases scalable through modular architecture and rigorous code review."
  ),
  resumeLink:"", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mhnnamosab",
  linkedin: "https://www.linkedin.com/in/mosab-mhnna-3649281b4/",
  gmail: "eng.mosab.mhnna@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND SOFTWARE ENGINEER — ANGULAR, REACT & TYPESCRIPT",
  skills: [
    emoji("⚡ Frontend: Angular, React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Styled-Components, Vue, Angular Material, Vite, HTML Canvas"),
    emoji("⚡ State & Data: Redux, Zustand, NgRx, RxJS, REST API integration, WebSocket, Server-Sent Events"),
    emoji("⚡ Quality: Jest, Jasmine/Karma, accessibility, cross-browser compatibility, performance optimization, code review, Nx monorepo"),
    emoji("⚡ AI: Claude API, Model Context Protocol (MCP), AI agent workflows, tool use & multi-step reasoning"),
    emoji("⚡ Tools: Git, GitHub, Figma, Zeplin, Jira, Agile Scrum, Google Maps Platform")
  ],
  
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "angular",
    fontAwesomeClassname: "fab fa-angular"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "vuejs",
    fontAwesomeClassname: "fab fa-vuejs"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "typescript",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "javascript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "redux / ngrx",
    fontAwesomeClassname: "fas fa-layer-group"
  },
  {
    skillName: "nx monorepo",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "jest",
    fontAwesomeClassname: "fas fa-vial"
  },
  {
    skillName: "claude api / mcp",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "github",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "restful-apis",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "websocket",
    fontAwesomeClassname: "fas fa-wifi"
  },
  {
    skillName: "sse",
    fontAwesomeClassname: "fas fa-stream"
  },
  {
    skillName: "jira",
    fontAwesomeClassname: "fab fa-jira"
  },
  {
    skillName: "figma",
    fontAwesomeClassname: "fab fa-figma"
  },
  {
    skillName: "tailwindcss",
    fontAwesomeClassname: "fas fa-wind"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Syrian Virtual University",
      logo: require("./assets/images/SVU-LOGO.jpg"),
      subHeader: "Master's Degree, Web Science",
      duration: "2024",
      desc: "Program providing in-depth knowledge and practical skills in web technologies, software development, data management, and digital communication.",
      descBullets: []
    },
    {
      schoolName: "Damascus University",
      logo: require("./assets/images/damsuniversity.png"),
      subHeader: "Bachelor's Degree, Artificial Intelligence",
      duration: "2016 - 2021",
      desc: "Blends core informatics engineering with advanced AI studies, covering machine learning, neural networks, and intelligent system design.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SOFTWARE ENGINEER",
      company: "Micropolis Robotics",
      companylogo: require("./assets/images/micropolis_robotics_logo.jpg"),
      date: "Mar 2024 – Present · Dubai, UAE",
      desc: "Own frontend delivery for robotics operations software in Angular and TypeScript — from design handoff and API integration through testing and production release.",
      descBullets: [
        "Shipped AI-powered features on the Claude API and MCP, including agent workflows that let operators trigger real system actions from the UI",
        "Built live fleet monitoring on WebSockets and Server-Sent Events, managing high-frequency real-time state with NgRx and RxJS, plus Google Maps tracking and HTML Canvas visualization",
        "Led the migration of a monolithic codebase to a modular Nx workspace, splitting it into libraries with clear boundaries — faster builds, isolated unit testing with Jasmine/Karma and Jest, and parallel work across the team",
        "Built an internal HR management tool in React, TypeScript, and Next.js — employee records, attendance tracking, and fingerprint-device integration — with Redux state management, Tailwind CSS styling, and Jest tests",
        "Raised code quality through Git-based code reviews and shared conventions within an Agile Scrum team",
        "Optimized performance across bundle size, rendering, and data flows, keeping the app fast and responsive as scope grew",
        "Built responsive, accessible (WCAG-minded) interfaces with Angular Material, implementing pixel-perfect designs from Figma and Zeplin"
      ]
    },
    {
      role: "FRONTEND DEVELOPER",
      company: "TeachArabia",
      companylogo: require("./assets/images/teacharabia.png"),
      date: "Feb 2022 – Mar 2024 · Damascus, Syria",
      desc: "Built the learning platform's interfaces in Angular, turning designs into a reusable, scalable component library the team built on.",
      descBullets: [
        "Developed the Thaber application in Vue",
        "Integrated REST APIs across products with consistent cross-browser, cross-device behavior"
      ]
    },
    {
      role: "FRONTEND DEVELOPER (PART-TIME)",
      company: "Etloob",
      companylogo: require("./assets/images/etloob.png"),
      date: "Jan 2021 – Jan 2024 · Damascus, Syria",
      desc: "Built the storefront for an e-commerce platform along with its admin dashboard and product management module — catalog, listings, and order handling.",
      descBullets: [
        "Worked directly with backend and product to define API contracts and iterate on features release by release"
      ]
    },
    {
      role: "FRONTEND DEVELOPER, ANGULAR",
      company: "Nakheel Group International",
      companylogo: require("./assets/images/nakheel.png"),
      date: "May 2021 – Feb 2022 · Damascus, Syria",
      desc: "Built the teacher platform for an English-learning application in Angular — lesson management, class scheduling, and student progress views.",
      descBullets: []
    },
    {
      role: "FRONTEND DEVELOPER",
      company: "B-Wire",
      companylogo: require("./assets/images/bwire.svg"),
      date: "Sep 2019 – Feb 2020 · Damascus, Syria",
      desc: "Implemented pixel-perfect, responsive interfaces from design specs in HTML5, CSS3, and JavaScript.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/etloob1.png"),
      projectName: "Etloob",
      projectDesc: "Etloob is the largest online store in Syria",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.etloob.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/microspot.png"),
      projectName: "Microspot",
      projectDesc: "Transformative Intelligence for security and Law Enforcement",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.micropolis.ai/microspot/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Building with the Claude API",
      subtitle:
        "Anthropic certification on building applications with the Claude API.",
      image: require("./assets/images/claude-api.svg"),
      imageAlt: "Claude API",
      footerLink: [
        {
          name: "Certification",
          url: "https://verify.skilljar.com/c/n5zxmf2nyecr"
        }
      ]
    },
    {
      title: "Model Context Protocol: Advanced Topics",
      subtitle:
        "Anthropic certification on advanced Model Context Protocol (MCP) topics.",
      image: require("./assets/images/mcp.svg"),
      imageAlt: "MCP",
      footerLink: [
        {
          name: "Certification",
          url: "https://verify.skilljar.com/c/b38w6zxs4og5"
        }
      ]
    },
    {
      title: "World Robot Olympiad (WRO) 2018",
      subtitle: "Contestant at the World Robot Olympiad 2018.",
      image: require("./assets/images/wro.svg"),
      imageAlt: "WRO",
      footerLink: []
    },
    {
      title: "Jira Fundamentals Badge",
      subtitle:
        "Demonstrates foundational knowledge of Jira for project management tasks.",
      image: require("./assets/images/jira.png"),
      imageAlt: "jira",
      footerLink: [
        {
          name: "Certification",
          url: "https://university.atlassian.com/student/award/8Jg7QpoptudtzfBZegyXoDP7"
        }
      ]
    },
    {
      title: "Frontend Experience Certificate",
      subtitle:
        "Experience Certificate from Nakheel company",
      image: require("./assets/images/nakheel.png"),
      imageAlt: "Certifcation",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/mosab-mhnna-3649281b4/overlay/1635484816243/single-media-viewer/"
        }
      ]
    },

    {
      title: "Frontend Experience Certificate",
      subtitle: "Experience Certificate from Etloob company",
      image: require("./assets/images/etloob.png"),
      imageAlt: "Certifcation",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/mosab-mhnna-3649281b4/overlay/1707158101011/single-media-viewer/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-586163728",
  email_address: "eng.mosab.mhnna@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
