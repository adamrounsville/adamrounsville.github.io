// To change portfolio colors globally, go to the  _globalColor.scss file
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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Adam Rounsville",
  title: "Hi, I'm Adam",
  subTitle: emoji(
    "I'm a passionate full stack software engineer with experience using languages and frameworks such as Python, JavaScript, Java, C++, Flutter, and React to create innovative new software solutions"
  ),
  resumeLink:
    "https://drive.google.com/file/d/17MMXgtyzpgUYyduXkh4XxisG7Hh7RWRv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/adamrounsville",
  linkedin: "https://www.linkedin.com/in/adam-rounsville",
  gmail: "adamjrounsville@gmail.com",
  twitter: "https://www.twitter.com/AdamRounsville",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skills",
  subTitle: "FULL STACK SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop full stack software for web and mobile applications"),
    emoji("⚡ Leverage REST APIs and microservices to build scalable solutions"),
    emoji("⚡ Build and conduct tests to ensure software quality and stability"),
  ],

  // Make Sure to include correct Font Awesome Classname to view your icon
  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      size: "50",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      size: "50",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      size: "50",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      size: "50",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      size: "50",
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      size: "50",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      size: "50",
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      size: "50",
    },
    {
      skillName: "Elixir",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
      size: "50",
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      size: "50",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      size: "50",
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      size: "50",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      size: "50",
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      size: "50",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      size: "50",
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      size: "50",
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      size: "50",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      size: "50",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021 - April 2025",
      desc: "GPA: 4.00 / 4.00",
      descBullets: ["Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Discrete Structures, Computer Systems, Web Development, Multivariable Calculus, Statistics, Linear Algebra, Software Engineering Practicum"]
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Podium",
      companylogo: require("./assets/images/podiumLogo.jpeg"),
      date: "Jun 2022 – Aug 2022",
      descBullets: [
        "Developed 18 full stack software features and engineered solutions for user-reported bugs using React, Elixir, and PostgreSQL",
        "Engineered and deployed a buy now, pay later payment option for businesses utilizing webhooks and Affirm/Stripe REST APIs",
        "Built and conducted unit and integration tests on 4 new text-based payment features used by over 100,000 businesses worldwide",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Relay | YC S22",
      companylogo: require("./assets/images/relayLogo.jpeg"),
      date: "May 2022 – Aug 2022",
      descBullets: [
        "Designed, tested, and shipped 12 user-requested full stack app features during Relay's participation in Y Combinator's S22 batch",
        "Optimized the product onboarding process for over 1,000 users by decreasing API response times and database fetches by 10%",
        "Decreased app load times by 20% by implementing device caching, persistent data storage, and local preferences for user profiles",
      ]
    },
    {
      role: "Software Engineer",
      company: "Refill",
      companylogo: require("./assets/images/refillLogo.jpeg"),
      date: "Dec 2021 – Jun 2022",
      descBullets: [
        "Spearheaded the development of app audio features utilizing AWS S3 and Flutter audio packages built using Dart and TypeScript",
        "Improved code delivery time by 15% by overhauling continuous integration and continuous delivery pipeline using Bash scripts",
        "Upgraded product embedding plugin APIs for security compliance and to support updated Dart versions and open-source libraries",
      ]
    },
    {
      role: "Software Engineer",
      company: "StockMotion",
      companylogo: require("./assets/images/stockMotionLogo.jpeg"),
      date: "Jun 2021 – May 2022",
      descBullets: [
        "Integrated Flutter bloc state management and refactored existing state management solutions, resulting in 20% fewer API calls",
        "Refactored the company codebase to take advantage of Flutter null-safety code, adding Bash scripts to streamline future updates",
        "Enabled JSON data retrieval via REST APIs by creating a RESTful backend server with TypeScript, Node.js, and Express.js",
      ]
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects
const projects = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  projects,
  contactInfo,
};
