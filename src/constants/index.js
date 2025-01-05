import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  UB,
  foodhub,
  uhg,
  eitacies,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Django Backend Developer",
    icon: backend,
  },
  {
    title: "Automation Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDET",
    company_name: "FoodHub",
    icon: foodhub,
    iconBg: "#383E56",
    date: "Aug 2021 – Feb 2022",
    points: [
      "Automated scripts using Java to test product stability and upgraded new features for the customer-facing app.",
      "Spearheaded the integration of new features into the app, leveraging technical skills to enhance user experience..",
      "Authored comprehensive research and analytics, leveraging programming skills to improve data quality.",
      "Achieved a 25% boost in accuracy by incorporating diverse data points.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "United Health Groups , OPTUM",
    icon: uhg,
    iconBg: "#E6DEDD",
    date: "Feb 2022 – Aug 2023",
    points: [
      "Designed a UI project facilitating virtual connections between doctors and patients in the OVC team. Pioneered new functionalities using React.js and addressed website accessibility needs.",
      "Identified and resolved bottlenecks arising from inefficient code, optimizing application performance and increasing system reliability by 15%.",
      "Developed highly scalable applications using Python/Django framework for backend and React.js for frontend, improving patient record management and data accessibility for healthcare professionals",
      "Engineered efficient RESTful API solutions enabling smooth interactions among diverse healthcare software platforms directly. Increased the speed of information retrieval time from two minutes to under eight seconds.",
      "Automated the deployment process using Docker and Jenkins, reducing manual efforts by 30% and ensuring consistent environment setups for development and production.",
      "Orchestrated backend integration for a cross-functional team of 11 developers and testers, reducing feature deployment time by 20%, resulting in faster market delivery of key updates."
    ],
  },
  {
    title: "Intern, Python/Django Developer",
    company_name: "Eitacies.INC",
    icon: eitacies,
    iconBg: "#E6DEDD",
    date: "May 2024 – Aug 2024",
    points: [
      "Developed and deployed 10+ backend features using Django, resulting in a 25% improvement in portal load times and enhanced user experience.",
      "Created and optimized 15+ RESTful APIs, increasing data retrieval efficiency by 30%, leading to smoother interactions between patients and doctors.",
      "Implemented responsive front-end components using React.js, improving user interface and overall user experience.",
      "Crafted engaging visual components through innovative use of JavaScript; as most junior members on team, focused efforts resulted in enhanced interactivity that elevated site usability metrics across key performance indicators.",
    ],
  },
  {
    title: "Masters in CS",
    company_name: "University at Buffalo",
    icon: UB,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Currently Pursuing my Masters  degree from University at Buffalo",
      ,
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
