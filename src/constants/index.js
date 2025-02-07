import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  CompileVortex,
  scss,
  less,
  bootstrap,
  typescript,
  jquery,
  tka,
  codenomad,
  expinator,
  rocketpos,
  bestpractice,
  brainly,
  cheveux,
  hostbuddy,
  skeww,
  meeran,
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

export const services = [
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "LESS", icon: less },
  { title: "SCSS", icon: scss },
  { title: "Bootstrap", icon: bootstrap },
  { title: "Tailwind", icon: tailwind },
  { title: "Javascript", icon: javascript },
  { title: "JQuery", icon: jquery },
  { title: "Typescript", icon: typescript },
  { title: "Reactjs", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web Designer",
    company_name: "The Knowledge Academy",
    icon: tka,
    iconBg: "#161329",
    date: "Apr 2020 - Apr 2021",
    points: [
      "At this company, I turned XD designs into HTML, styled with CSS and LESS. I used JavaScript and JQuery to add interactive features and worked closely with the backend team for smooth integration",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Codenomad",
    icon: codenomad,
    iconBg: "#161329",
    date: "May 2021 - Auy 2023",
    points: [
      "I started as a Web designer here, working in CSS and then in Shopify but laterbecame a Frontend Developer specializing in React.js, turning mockups into HTML and building React components. I also integrated backend APIs to keep everything running smoothly",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Expinator Technologies",
    icon: expinator,
    iconBg: "#161329",
    date: "Sep 2023 - Apr 2024",
    points: [
      "As the Team Leader for the Web Design Department, I handle client communications, keep them updated on project progress, and assign tasks to team members based on client needs. I also work as a Frontend Developer, focusing on building and improving websites using React and Next.js",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "RocketPOS",
    icon: rocketpos,
    iconBg: "#161329",
    date: "Apr 2024 - Present",
    points: [
      "My role here is pretty much the same as before. The main change here is that this is a Product-based company and being one of the initial hiring of this company, my job here is to manage the Frontend team and to redesign the company’s Dashboard and Super admin Panel",
    ],
  },
];

export const projects = [
  {
    name: "Best Practice Training",
    description:
      "Specially designed training courses accredited by AXELOS, APMG International, BCS, PMI, CompTIA, and Microsoft leading bodies",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "LESS", color: "pink-text-gradient" },
    ],
    image: bestpractice,
    source_code_link: "https://bestpracticetraining.com/",
  },
  {
    name: "Brainly",
    description:
      "Brainly is the knowledge-sharing community where hundreds of millions of students and experts put their heads together to crack their toughest homework questions.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    image: brainly,
    source_code_link: "https://brainly.in/",
  },
  {
    name: "Cheveux",
    description:
      "A website to buy hair extensions, wigs and other hair products.",
    tags: [
      { name: "Shopify", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: cheveux,
    source_code_link: "https://www.cheveuxluxury.com/",
  },
  {
    name: "Host Buddy",
    description: "Website using AI features to manage user properties.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],
    image: hostbuddy,
    source_code_link: "https://hostbuddy-react-frontend.vercel.app/",
  },
  {
    name: "Skeww",
    description:
      "Website to Buy & Sell used and new computer parts and accessories",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Boostrap", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],
    image: skeww,
    source_code_link: "https://us-store.msi.com/",
  },
  {
    name: "Meeran",
    description:
      "A website to search and participate in an event or activity happening in a city.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],

    image: meeran,
    source_code_link:
      "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
