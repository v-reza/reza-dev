/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Reza",
  logo_name: "Velkey.()",
  nickname: "velkey",
  full_name: "M Zulfi Fahreza",
  subTitle: "Full Stack Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1bQIyiYsdgbvl1jQ9fDgAOy08JI0M5Klh/view?usp=sharing",
  mail: "mailto:mrezalf0@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/v-reza/",
  linkedin: "https://www.linkedin.com/in/m-zulfi-fahreza-552a1220b/",
  gmail: "mrezalf0@gmail.com",
  gitlab: "https://gitlab.com/mrezalf0",
  facebook: "https://www.facebook.com/kratak.duar/",
  twitter: "#",
  instagram: "https://www.instagram.com/mrezavyg/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express, Laravel",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#303030",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#F05340",
          },
        },
        {
          skillName: "Magento",
          fontAwesomeClassname: "simple-icons:magento",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Cpanel",
          fontAwesomeClassname: "simple-icons:cpanel",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SMK Negeri 4 Malang",
      subtitle: "in Rekayasa Perangkat Lunak and Engineering",
      logo_path: "logo-grafika.png",
      alt_name: "SSEC",
      duration: "2019 - 2022",
      descriptions: [
        "⚡  I'm currently pursuing my Skills in Coding and Engineering.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://smkn4malang.sch.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Sekawan Media",
      subtitle: "Internship Sekawan Media",
      logo_path: "sekawanmedia.jfif",
      certificate_link: "#",
      alt_name: "Sekawan Media",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Icube by Sirclo",
      subtitle: "Engineer Trainee Icube by Sirclo",
      logo_path: "icube.jfif",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "Icube",
      color_code: "#f47e2c",
    },
    // {
    //   title: "Hackathon",
    //   subtitle: "HyperHacks",
    //   logo_path: "hackathon2.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Contributor's Hack",
    //   subtitle: "Hakin Codes",
    //   logo_path: "HakinCodes.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
    //   alt_name: "Opensource Event",
    //   color_code: "#fefd7b",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Olympiad",
    //   subtitle: "Ramanujan Mathematics Olympiad",
    //   logo_path: "Olympiad.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Reply Challenges",
    //   logo_path: "Reply.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Google Hash Code",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Training",
    //   subtitle: "30 Days of Open Source",
    //   logo_path: "CFC.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#a60000",
    // },
    // {
    //   title: "Training",
    //   subtitle: "Git Learning",
    //   logo_path: "Progate.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#88e7ce",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Sekawan Media Internship",
          company: "Sekawan Media",
          company_url: "https://www.sekawanmedia.co.id/",
          logo_path: "sekawanmedia.jfif",
          duration: "May 2020 - December 2020",
          location: "Work from Office",
          description: `I undertook this internship as a part of the Sekawan Media's Internship Program. I Worked on the following tasks and helped the company grow significantly using Rest API PHP Phalcon Backend Developer`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Icube by Sirclo Enginer Trainee",
          company: "Icube by Sirclo",
          company_url: "https://icubeonline.com/",
          logo_path: "icube.jfif",
          duration: "Mar 2022 - Mar 2023",
          location: "Remote",
          description: `Developed predictive models and deployed it on a ecommerce website using Magento & PWA NextJS base on React.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "R&D Member",
        //   company: "Webarch Club",
        //   company_url: "https://www.webarchsrm.com/",
        //   logo_path: "Webarch.jfif",
        //   duration: "Mar 2020 - Nov 2020",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Campus Leader",
        //   company: "Code For Cause",
        //   company_url: "https://www.codecau.se/",
        //   logo_path: "CFC.jfif",
        //   duration: "Nov 2020 - Present",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
        //   color: "#a60000",
        // },
        // {
        //   title: "Machine Learning - Research associate",
        //   company: "Next Tech Lab",
        //   company_url: "https://nextech.io/",
        //   logo_path: "NTL.jfif",
        //   duration: "Oct 2020 - Present",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
        //   color: "#62cff0",
        // },
        // {
        //   title: "Campus Ambassador",
        //   company: "Bagcampus",
        //   company_url: "https://bagcampus.in/",
        //   logo_path: "Bagcampus.jpg",
        //   duration: "Dec 2020 - May 2021",
        //   location: "Remote",
        //   description:
        //     "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
        //   color: "#0059c9",
        // },
        // {
        //   title: "Volunteer",
        //   company: "Google Crowdsource",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "GCS.jfif",
        //   duration: "Sept 2020 - Present",
        //   location: "Remote",
        //   description:
        //     "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
        //   color: "#ffffff",
        // },
        // {
        //   title: "Student Volunteer",
        //   company: "National Service Scheme",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "NSS.jfif",
        //   duration: "Dec 2019 - May 2020",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#282b6c",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Laravel, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-image.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@mrezalf0",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Social Media Dashboard",
      url: "https://velkeymedia-client.netlify.app/",
      description:
        "Social Media Dashboard for training my skills Frontend ReactJS and Backend ExpressJS",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "vscode-icons:file-type-reactjs",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "Ecommerce Website",
      url: "https://velxcommerce.netlify.app/",
      description: "Building a ecommerce website using ReactJS and ExpressJS",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "vscode-icons:file-type-reactjs",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Material UI",
          iconifyClass: "simple-icons:materialui",
        },
      ],
    },
    // {
    //   id: "2",
    //   name: "Tune In",
    //   url: "https://github.com/vvHacker007/Tune-In",
    //   description:
    //     "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Django",
    //       iconifyClass: "logos-django",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "Event Scheduler",
    //   url: "https://github.com/vvHacker007/Event-Scheduler",
    //   description:
    //     "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Movie Reccomendation System",
    //   url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
    //   description:
    //     "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "Login Authenticator",
    //   url: "https://github.com/vvHacker007/Login-Authenticator",
    //   description: "Made a template for a Login Authenticator using Flask ",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Calculator",
    //   url: "https://github.com/vvHacker007/Calculator",
    //   description:
    //     "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Notepad",
    //   url: "https://github.com/vvHacker007/Notepad",
    //   description:
    //     "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Tetris",
    //   url: "https://github.com/vvHacker007/Tetris",
    //   description: "Made a GUI based arcade game Tetris using pygame.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Steganography",
    //   url: "https://github.com/vvHacker007/Steganography",
    //   description:
    //     "A CLI tool to conceal messages within a file, text, image, or video.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Mini Paint",
    //   url: "https://github.com/vvHacker007/Mini-Paint",
    //   description: "GUI based Mini Paint Application.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Speedtest",
    //   url: "https://github.com/vvHacker007/Speed-test",
    //   description:
    //     "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Cat Classifier",
    //   url: "https://github.com/vvHacker007/Cat-Classifier",
    //   description:
    //     "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Snake",
    //   url: "https://github.com/vvHacker007/Snake",
    //   description:
    //     "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Score Predictor",
    //   url: "https://score-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts students score based on the number of hours the student puts in it.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "Blood Donation Predictor",
    //   url: "https://blood-donation-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts if one is ready to donate blood based on the user's blood donation history.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "14",
    //   name: "Credit-Card Default Predictor",
    //   url: "https://default-predictor-app.herokuapp.com/",
    //   description:
    //     "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "15",
    //   name: "Portfolio Website",
    //   url: "https://vvhacker007.github.io/Portfolio/",
    //   description: "You are stalking it right now 😉",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
