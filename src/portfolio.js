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
    "AI Engineer and Frontend Developer 🚀 with 5+ years of experience (specialized in Angular), delivering high-performance web applications. Skilled in building scalable, user-friendly, and dynamic front-end solutions with a strong foundation in modern development practices and AI integration."
  ),
  resumeLink:"", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mhnnamosab",
  linkedin: "https://www.linkedin.com/in/mosab-mhnna-3649281b4/",
  gmail: "ite.mosab@gmail.com",
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
  subTitle: "FRONTEND SOFTWARE DEVELOPER EXPLORING EVERY TECH STACK",
  skills: [
    emoji("⚡ Frontend Frameworks & Libraries: Angular, Vue.js, Angular Material, PrimeNg, Vuex, RxJS, NgRx"),
    emoji("⚡ JavaScript/TypeScript: ES6+, TypeScript, DOM Manipulation"),
    emoji("⚡ Web Technologies: HTML5, CSS3, SASS, Bootstrap, TailwindCSS, HTML5 Canvas"),
    emoji("⚡ Build Tools: Webpack, Angular CLI, Vue CLI, Vite, Nx, NPM"),
    emoji("⚡ DevOps & CI/CD: Azure DevOps, Git, GitHub, GitLab, Docker"),
    emoji("⚡ API Integration: RESTful APIs, JWT authentication, WebSocket, Server-Sent Events (SSE), Stomp"),
    emoji("⚡ Agile & Project Management: Jira, ClickUp, Asana, Scrum"),
    emoji("⚡ Responsive Design: Mobile-first approach, cross-browser compatibility"),
    emoji("⚡ UX/UI: Wireframing, user-centered design, prototyping tools like Figma, XD")
  ],
  
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "angular",
    fontAwesomeClassname: "fab fa-angular"
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
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
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
    skillName: "webpack",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "angular-cli",
    fontAwesomeClassname: "fab fa-angular"
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
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "azure-devops",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "restful-apis",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "jwt-authentication",
    fontAwesomeClassname: "fas fa-lock"
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
      logo: require("./assets/images/syrian-virtual-university.jpg"),
      subHeader: "Master of Web Science",
      duration: "Jan 2024 - Present",
      desc: "program designed to provide students with in-depth knowledge and practical skills in web technologies, software development, data management, and digital communication..",
      descBullets: []
    },
    {
      schoolName: "Damascus University",
      logo: require("./assets/images/damsuniversity.png"),
      subHeader: "Bachelor of Engineering (B.E.) in Information Technology - Specialization in Artificial Intelligence",
      duration: "Jan 2016 - Jan 2021",
      desc: "This program blends core informatics engineering with advanced AI studies, equipping graduates with expertise in machine learning, neural networks, and intelligent system design..",
      descBullets: [""]
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
      role: "SENIOR FRONTEND DEVELOPER",
      company: "Micropolis Robotics",
      companylogo: require("./assets/images/micropolis_robotics_logo.jpg"),
      date: "Mar 2024 – Present",
      desc: "Contributed to the development and enhancement of the Microspot system, delivering high-quality, scalable frontend solutions.",
      descBullets: [
        "Edited, fixed bugs, and added new features for the Microspot system",
        "Developed location-based services and interactive maps using Google Maps API",
        "Created visually engaging and interactive content with HTML5 Canvas",
        "Integrated real-time updates and notifications using Server-Sent Events (SSE) and Stomp WebSocket",
        "Enabled seamless real-time communication with WebSocket",
        "Worked with Microfrontends Architecture using Nx to manage multiple frontend projects efficiently",
        "Ensured high code quality through thorough code reviews and adherence to best practices",
        "Collaborated in an Agile Scrum environment to deliver high-quality software solutions"
      ]
    },
    {
      role: "FRONTEND DEVELOPER",
      company: "Teacharabia",
      companylogo: require("./assets/images/teacharabia.png"),
      date: "Jan 2022 – Mar 2024",
      desc: "Contributed to the development and optimization of various web applications, focusing on performance, usability, and scalability.",
      descBullets: [
        "Edited, fixed bugs, and added new features for the Charity Resource Planning System (TAWAD)",
        "Developed complex CRUD operations, dynamic forms, and stepper functionalities to streamline user workflows",
        "Optimized UI/UX design for seamless user interaction and improved system performance",
        "Built and developed a complete frontend for an exams and questions builder system (Thaber) using Vue.js, ensuring a smooth and intuitive user experience"
      ]
    },
    {
      role: "FRONTEND DEVELOPER",
      company: "Nakheel Group International",
      companylogo: require("./assets/images/nakheel.png"),
      date: "May 2021 – Jan 2022",
      desc: "Designed and developed user-centric dashboards for diverse platforms, enhancing functionality and user engagement.",
      descBullets: [
        "Developed a dashboard for an English learning platform (WRITALK), enabling live streaming and online payments through multiple payment gateways",
        "Developed a dashboard for the Events Creation System (RecDeck) to create events for cricket and other sports"
      ]
    },
    {
      role: "FRONTEND DEVELOPER",
      company: "Etloob",
      companylogo: require("./assets/images/etloob.png"),
      date: "Jan 2021 – Jan 2023",
      desc: "Played a key role in designing and developing user-friendly frontend systems for an ecommerce platform and management dashboards.",
      descBullets: [
        "Developed a comprehensive frontend (dashboard and website) for an ecommerce platform (Etloob), featuring product and order management, online payment integration, and real-time order tracking",
        "Developed a dashboard for efficient administrative and data management tasks, streamlining workflows and improving system usability"
      ]
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
          url: "https://www.etloob.sy/"
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
  email_address: "ite.mosab@gmail.com"
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
