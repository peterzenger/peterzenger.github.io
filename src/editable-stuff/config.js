// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#40E0D0, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f",
  firstName: "Peter",
  middleName: "",
  lastName: "Zeng",
  message: "First Year Master's at Stony Brook University",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/peterzeng",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/peter-zeng/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//b) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//c) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pyrex.jpg"),
  imageSize: 375,
  message:
    " I am currently a first year Master's student at Stony Brook University studying computer science with a specialization in AI and data science. \n In my free time, I like to play and listen to music, cruise around on my longboard, or play some Super Smash Brothers Melee",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch that number of your most recently updated projects.
// You can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display additional, specfic projects, add the repository names.
//      i.e ["repository-1", "repo-2"]
// Be careful not to include the same repo twice
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "peterzeng", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "CSE416-NLP/waveback", "peterzeng/peterzeng.github.io",
    "peterzeng/MiniatureKeyboard", 
  ],
};

// const manualProjects = [
//   {
//     // show: false,
//     name: "placeholder",
//     description: "Playlist Creation/Sharing Software built using the MERN stack and Spotify API",
//     url: "https://github.com/CSE416-NLP/waveback/",
//     classId: "CSE 416",
//     date: "Fall 2020"
//   },
// ];

// Leadership SECTION
const leadership = {
  show: false, // Not enabled
  heading: "Leadership",
  message:
    "Generic leadership message.",
  images: [
    { 
      // img: require("../editable-stuff/yyang.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/yyang.png"), 
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
    "Python",
    "JavaScript",
    "React",
    "HTML/CSS",
    "MongoDB",
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true, // Not enabled
  heading: "Get In Touch",
  message:
    "Questions? Comments? Concerns? Send me an email"
};

const contactInfo = {
  email: "peterateast@gmail.com",
  location: "Buffalo, NY",
  // locationLink: "https://www.openstreetmap.org/#map=12/40.9174/-73.1247",
  occupation: "Student at Stony Brook University"
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, contactInfo };
