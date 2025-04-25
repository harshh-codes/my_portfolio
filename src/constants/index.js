import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  python,
  rust,
  solidity,
  coloryourworld,
  cosmogenius,
  jobscreener,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Data Analysis",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Machine Learning & BlockChain",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Solidity",
    icon: solidity,
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
    name: "Node JS",
    icon: nodejs,
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
];

const projects = [
  {
    name: "Color Your World",
    description:
      "Web-based platform that allows users to design and decorate rooms in 2D and visualize furniture in 3D, providing a convenient and interactive solution for interior planning and design.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "unity",
        color: "pink-text-gradient",
      },
    ],
    image: coloryourworld,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cosmo Genius",
    description:
      "An educational web platform that makes learning astronomy and space science engaging through interactive 3D models, quizzes, and real-time space data visualization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cosmogenius,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job Screener",
    description:
      "A powerful AI-driven recruitment assistant that analyzes resumes using a multi-agent system, assigns candidate scores, automates shortlisting with email notifications, and streamlines interview preparation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: jobscreener,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
