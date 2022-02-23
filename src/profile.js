import tailwindlogo from "./styles/images/tailwindcss.svg";
import jquerylogo from "./styles/images/jquery-icon.svg";

// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Precious Adedibu",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A Software Developer who loves to transform ideas into reality using code. I am skilled in creating responsive web applications with Html, css and front end frameworks such as React. I am also skilled in creating high performance APIs with back end technologies such as with nodejs and laravel,  and with Databases such as Mysql and Mongo DB. My passion for programming drives me to get better at better at delivering quality services ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
    logo: false,
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
    logo: false,
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
    logo: false,
  },
  {
    name: "React",
    faClass: "fab fa-react",
    logo: false,
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
    logo: false,
  },
  {
    name: "Node",
    faClass: "fab fa-node",
    logo: false,
  },
  {
    name: "Python",
    faClass: "fab fa-python",
    logo: false,
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
    logo: false,
  },
  {
    name: "Laravel",
    faClass: "fab fa-laravel",
    logo: false,
  },
  {
    name: "Database",
    faClass: "fas fa-database",
    logo: false,
  },
  {
    name: "Github",
    faClass: "fab fa-github",
    logo: false,
  },

  {
    name: "AWS",
    faClass: "fab fa-aws",
    logo: false,
  },
  {
    name: "Tailwind",
    faClass: false,
    logo: {
      logo: tailwindlogo,
      width: 50,
    },
  },
  {
    name: "Jquery",
    faClass: false,
    logo: {
      logo: jquerylogo,
      width: 27,
    },
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Front End Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "SpendyVest",
    skills: ["Tailwindcss, React, Framer motion"],
    github: "https://github.com/Preshy-Jones/Burjtech-React",
    url: "https://github.com/Preshy-Jones/Spendy-Vest",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project2",
    name: "Burjtech.org",
    skills: ["HTML, CSS, React, Node JS"],
    url: "https://burjtech.herokuapp.com/",
    github: "https://github.com/Preshy-Jones/Burjtech-React",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "Sis Certifications Nigeria",
    skills: ["HTML, CSS, JS, React, Node JS"],
    url: "https://preshy-jones.github.io/CisCertifications/#/",
    github: "https://github.com/Preshy-Jones/CisCertifications",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "Art Scope",
    skills: ["HTML, CSS"],
    url: "https://preshy-jones.github.io/Art-Scope/",
    github: "https://github.com/Preshy-Jones/Art-Scope",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project5",
    name: "Dog Website",
    skills: ["HTML, CSS, JS"],
    url: "https://preshy-jones.github.io/DOG/",
    github: "https://github.com/Preshy-Jones/DOG",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project6",
    name: "Anime Gallery Touch slider",
    skills: ["HTML, CSS, JS"],
    url: "https://animegallery.herokuapp.com/",
    github: "https://github.com/Preshy-Jones/Animepedia",
  },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Backend Projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Book Store",
    url: "https://preshybooks.herokuapp.com/",
    skills: ["Nodejs, Express, Mongodb"],
    github: "https://github.com/Preshy-Jones/Bookstore",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Nodejs Blog",
    url: "https://preshyblog.herokuapp.com/",
    skills: ["Nodejs, Express, Mongodb"],
    github: "https://github.com/Preshy-Jones/BLOG-DAY23-25",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "URL Shortener",
    url: "https://preshyurlshortener.herokuapp.com/shorten",
    skills: ["Nodejs, Express, Mongodb"],
    github: "https://github.com/Preshy-Jones/Url-Shortener",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc4",
    name: "Ajax Todo List",
    url: "https://myajaxtodolist.herokuapp.com/",
    skills: ["Nodejs, Express, MySQL"],
    github: "https://github.com/Preshy-Jones/AJAX-TODO-LIST",
  },
];
const full_stack = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "full_stack1",
    name: "XXOLCARE",
    url: "https://xxolcare.com",
    skills: [
      "Laravel,",
      "Mysql,",
      "Livewire,",
      "AlpineJs,",
      "Tailwind,",
      "Jquery,",
      "redis,",
      "chartJS",
    ],
    github: "https://xxolcare.com",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Full Stack Projects";
const section6Title = "Get in Touch";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Preshy-Jones",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/precious-adedibu-568aa211a/",
  instagram: "https://instagram.com",
  resume: "https://drive.google.com/drive/u/0/search?q=resume",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  full_stack,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
};
