// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yang",
  middleName: "",
  lastName: "Yang",
  message: "Senior at Stony Brook University",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/yang573",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yang573/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/yyang.png"),
  imageSize: 375,
  message:
    " I am a senior studying computer science and sociology. \
    Many of my past projects have focused on backend and cloud services, \
    but I have also dabbled with some full-stack projects. \
    I am most passionate about the cloud and systems, \
    and I hope to land a career in one of these fields. \
    I'm currently assisting a lab with designing benchmarks for cloud-native storage.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch that number of your most recently updated projects.
// You can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names.
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "yang573", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["MYSpace-Deployment", "club-membership-py", ],
};

// Leadership SECTION
const leadership = {
  show: false, // Not enabled
  heading: "Leadership",
  message:
    "Generic leadership message.",
  images: [
    { 
      img: require("../editable-stuff/yyang.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/yyang.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  skills: [
    "C",
    "Java",
    "C#",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "NoSQL",
    "Elasticsearch",
    "Ceph",
    "Flask"
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Questions? Comments? Concerns? Send me an email",
  email: "yangyang1998@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
