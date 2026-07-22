import {
  Project,
  ExperienceItem,
  EducationItem,
  Certification,
  SkillCategory,
  NavLink,
  SocialLink,
} from "@/lib/types";
import Image from "next/image";

export const personalInfo = {
  fullName: "Justine Kyle O. Resureccion",
  title: "Fresh Graduate |  Web Developer | Data Enthusiast",
  email: "resureccionjustine@gmail.com",
  linkedin: "https://linkedin.com/in/justineresureccion",
  github: "https://github.com/jeyks",
  resumeUrl: "/Resume_Resureccion.pdf",
  introduction:
    "I'm an Information Technology graduate with experience in data administration and a passion for building web applications. I enjoy solving problems through technology, whether it's developing user-friendly web interfaces or working with data to ensure accuracy and efficiency.",
  summary:
    "My experience includes data processing, validation, and reporting support through my internship in the reinsurance industry, as well as frontend development through academic and personal projects. I have worked with technologies such as Laravel, Next.js, JavaScript, React, and Excel-based automation. I am passionate about continuous learning and applying technology to create practical and reliable solutions.",
  careerGoals:
    "I am looking to grow my career in web development, data analytics, or IT, where I can strengthen my technical skills, contribute to meaningful projects, and gain hands-on experience in solving real-world business and technology challenges.",
interests:
  "Outside of academics and work, I am serving as a church organist, playing mobile games, and exploring new technologies. These activities help me stay creative, focused, and continuously curious about learning new things.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personalInfo.github, icon: "github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: "mail" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Web Development",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "SQL", "Tailwind CSS", "Laravel", "Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Canva", "Capcut", "Microsoft Clipchamp"],
  },
  {
    category: "Data Administration & Analytics",
    skills: ["Microsoft Excel", "Power BI", "SQL","Google Workspace"],
  },

];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Tara4a",
    description:
      "Tara4A: Interactive Web Application for Smart Tourism and Local Establishment Discovery  for the Department of Tourism Region 4A CALABARZON Capstone Project.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Google Maps API", "JavaScript"],
    imageUrl: "/Tara4A.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-2",
    title: "GeoTrace",
    description:
      "Android-Enabled Geofence Tracker for Manpower and Payroll Management with Website Database Monitoring Capstone Project.",
    techStack: ["Laravel", "React", "Javascript", "Tailwind CSS", "MySQL", "Google Maps API", "JavaScript", "Android Studio"],
    imageUrl: "/GeoTrace1.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-3",
    title: "AirSentinel",
    description:
      "IoT-based Air Quality Monitoring System with Real-Time Data Visualization and Alert Notifications for Environmental Awareness and Public Health.",
    techStack: ["Arduino", "Google Maps API", "JavaScript", "Microsoft Clipchamp", "Canva", "Figma"],
    imageUrl: "/AirSentinel.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-4",
    title: "Web Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience with a clean, modern design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React",],
    imageUrl: "/WebPortfolio.jpg",
    githubUrl: "",
    liveUrl: "",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    jobTitle: "Data Administrator Intern",
    company: "National Reinsurance Corporation of the Philippines",
    startDate: "December 2025",
    endDate: "April 2026",
    responsibilities: [
      "Performed data entry, cleaning, and validation of financial datasets using Microsoft Excel and Google Workspace.",
      "Conducted data quality checks by identifying inconsistencies, duplicate records, and formatting issues to ensure data accuracy.",
      "Utilized Excel formulas, functions, and VBA macros to streamline data validation and improve processing efficiency.",
      "Monitored data processing progress using Google Sheets trackers and maintained accurate status updates.",
      "Collaborated with team members through Gmail and Google Chat to resolve data issues and support reporting workflows.",
    ],
    achievements: [
      "Developed an Excel VBA macro to automate parts of the data cleaning process, improving workflow efficiency.",
      "Created a custom Excel validation checker to compare datasets and identify discrepancies during monthly reporting.",
    ],
  },
  {
    id: "exp-2",
    jobTitle: "Lead Frontend Developer",
    company: "Department of Tourism CALABARZON (Capstone 2 Project)",
    startDate: "July 2025",
    endDate: "October 2025",
    responsibilities: [
      "Led the design and development of the user interface for TARA4A, ensuring consistency with the Department of Tourism CALABARZON branding and design standards.",
      "Collaborated with the development team to deliver a cohesive, intuitive, and user-friendly experience across the website.",
      "Reviewed frontend implementations to ensure design consistency, responsiveness, and functional accuracy.",
      "Identified and resolved frontend issues discovered during QA testing to improve usability, performance, and cross-browser compatibility.",
      "Built responsive interfaces that provided a seamless experience across desktop, tablet, and mobile devices."
    ],
    achievements: [
      "Served as the frontend lead, coordinating UI implementation and maintaining design consistency throughout the project.",
      "Successfully delivered a production-ready tourism website as part of the capstone project in collaboration with the development team."
    ],
  },
  {
    id: "exp-3",
    jobTitle: "Frontend Developer / QA Tester",
    company: "Southern Technology (Capstone 1 Project)",
    startDate: "August 2024",
    endDate: "March 2025",
    responsibilities: [
      "Designed and developed the user interface for GEOTRACE, an Android-enabled geofence tracker for manpower and payroll management with a web-based monitoring system.",
      "Tested, identified, and resolved issues across both the web and mobile applications to improve functionality and reliability.",
      "Conducted QA testing and refined the user interface based on client and user feedback.",
      "Collaborated with the development team to ensure a responsive, intuitive, and consistent user experience."
    ],
    achievements: [
      "Contributed to the successful development and delivery of a functional geofence tracking and payroll management system.",
      "Improved application usability and stability by identifying and resolving bugs during the QA and testing phases."
    ],
  }
];

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Information Technology",
    school: "National University - Laguna",
    graduationYear: "July 2026",
    awards: ["Dean's Lister 2022-2026", "Magna Cum Laude 2026"],
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web and Mobile Development",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
      "Arduino Programming",
      "Cloud Computing",
      "Cybersecurity Fundamentals",
      "Data Analytics and Visualization",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Data Fundamentals",
    issuer: "IBM",
    dateObtained: "Apr 2026",
  },
  {
    id: "cert-2",
    name: "Salesforce Supported Virtual Internship Program 2025 - Philippines",
    issuer: "Salesforce",
    dateObtained: "Jan 2026",
  },
  {
    id: "cert-3",
    name: "IT Customer Support Basics",
    issuer: "Cisco",
    dateObtained: "Nov 2025",
  },
  {
    id: "cert-4",
    name: "Semi-Finals of the Packethacks x HackTheClimate Pitching and Demo 2025",
    issuer: "HackTheClimate Hackathon and Awards",
    dateObtained: "2025",
  },
  {
    id: "cert-5",
    name: "Agentblazer Workshop Completion Certificate",
    issuer: "Salesforce",
    dateObtained: "Aug 2025",
  },
  {
    id: "cert-6",
    name: "Information Technology Specialist in Network Security",
    issuer: "Certiport - A Pearson VUE Business",
    dateObtained: "Feb 2025",
  },
];