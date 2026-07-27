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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personalInfo.github, icon: "github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: "mail" },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Tara4a",
    description:
      "Tara4A: Interactive Web Application for Smart Tourism and Local Establishment Discovery  for the Department of Tourism Region 4A CALABARZON Capstone Project.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Google Maps API",
      "JavaScript",
    ],
    imageUrl: "/Tara4A.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-2",
    title: "GeoTrace",
    description:
      "Android-Enabled Geofence Tracker for Manpower and Payroll Management with Website Database Monitoring Capstone Project.",
    techStack: [
      "Laravel",
      "Android Studio",
      "Javascript",
      "React",
      "MySQL",
      "Google Maps API",
      "JavaScript",
      "Android Studio",
    ],
    imageUrl: "/GeoTrace1.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-3",
    title: "AirSentinel",
    description:
      "IoT-based Air Quality Monitoring System with Real-Time Data Visualization and Alert Notifications for Environmental Awareness and Public Health.",
    techStack: ["Arduino", "Google Maps API", "JavaScript"],
    imageUrl: "/AirSentinel.jpg",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-4",
    title: "Web Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience with a clean, modern design.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/WebPortfolio.jpg",
    githubUrl: "",
    liveUrl: "",
  },
];

export const journey = [
  {
    id: "journey-1",
    year: "2022",
    type: "project",
    title: "Built My First Website",
    subtitle: "Qur-Knowledge",
    description:
      "In April 2022, while I was in Senior High School, I developed Qur-Knowledge, my first web application using HTML, CSS, and JavaScript. The website generated QR codes that linked users to stored learning materials, making educational resources easier to access and share. This project sparked my passion for web development and inspired me to pursue a degree in Information Technology.",
    icon: "code",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    image: "/journey/firstwebsite.png",
  },
  {
    id: "journey-2",
    year: "2022",
    type: "education",
    title: "Started My IT Journey",
    subtitle: "National University – Laguna",
    description:
      "Began my Bachelor of Science in Information Technology, where I strengthened my programming foundations, explored software development, and continued building modern web applications.",
    icon: "graduation",
    tech: [],
    image: "/journey/NU-Laguna.jpg",
  },
  {
    id: "journey-3",
    year: "2023",
    type: "learning",
    title: "Exploring Modern Web Development",
    subtitle: "Building Dynamic Web Applications",
    description:
      "Strengthened my frontend development skills by learning JSON, Bootstrap, Git, and Next.js. Applied these technologies in academic and personal projects while gaining experience in building responsive, component-based web applications and managing code with version control.",
    icon: "code",
    tech: ["Next.js", "JSON", "Bootstrap", "Git"],
    image: "/journey/mealpallate.png",
  },
  {
    id: "journey-4",
    year: "2024",
    type: "project",
    title: "Frontend Developer & QA Tester",
    subtitle: "GeoTrace Capstone Project",
    description:
      "Developed responsive user interfaces, performed quality assurance testing, and collaborated with the team to build a geofence tracking and payroll management system.",
    icon: "code",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/Geotrace1.jpg",
  },
  {
    id: "journey-5",
    year: "2025",
    type: "project",
    title: "Lead Frontend Developer",
    subtitle: "TARA4A Smart Tourism Platform",
    description:
      "Led the frontend development of a smart tourism platform for the Department of Tourism CALABARZON, focusing on responsive interfaces, accessibility, and user experience.",
    icon: "code",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/Tara4A.jpg",
  },
  {
    id: "journey-6",
    year: "2025",
    type: "achievement",
    title: "PacketHACKS Top 15 Semi-Finalist",
    subtitle: "Hack the Climate 2025",
    description:
      "Co-developed AirSentinel, an IoT-powered air quality monitoring solution, earning a place among the Top 15 teams in a nationwide innovation competition.",
    icon: "trophy",
    tech: ["Arduino", "IoT", "Google Maps API"],
    image: "/Airsentinel.jpg",
  },
  {
    id: "journey-7",
    year: "2025",
    type: "internship",
    title: "Data Administrator Intern",
    subtitle: "National Reinsurance Corporation of the Philippines",
    description:
      "Worked with large financial datasets, automated validation tasks using Excel VBA, maintained reporting workflows, and ensured data quality through validation and quality assurance processes.",
    icon: "briefcase",
    tech: ["Microsoft Excel", "VBA", "Google Workspace"],
    image: "/journey/intern.jpg",
  },
  {
    id: "journey-8",
    year: "2026",
    type: "education",
    title: "Graduated with Latin Honor's",
    subtitle: "Bachelor of Science in Information Technology",
    description:
      "Graduated from National University – Laguna while building modern web applications, strengthening my frontend expertise, and preparing for a career in software development.",
    icon: "graduation",
    tech: ["Magna Cum Laude", "Dean's Lister"],
    image: "/profile1.jpg",
  },
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

export const certifications = [
  {
    id: 1,
    issuer: "DataCamp",
    title: "AI Fundamentals",
    dateObtained: "July 2026",
    credential: "https://www.datacamp.com/skill-verification/AIF0026758729530",
  },
  {
    id: 2,
    issuer: "packetHACKS",
    title: "Packethacks Semi-Finals Top 15",
    dateObtained: "2025",
    credential:"/certificate/IOT.jpg",
  },
  {
    id: 3,
    issuer: "IBM",
    title: "IBM Data Fundamentals",
    dateObtained: "2025",
    credential:
      "https://www.credly.com/badges/89de8030-8ae2-46a5-80d1-535571d1ef73/",
  },
  {
    id: 4,
    issuer: "Salesforce",
    title: "Salesforce Virtual Internship",
    dateObtained: "2025",
    credential: "/certificate/SalesforceSVIP.jpg",
  },
  {
    id: 5,
    issuer: "Certiport",
    title: "Network Security",
    dateObtained: "2025",
    credential:
      "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=465&cvid=NZNObdQxTpMSW/+DHF1sLw==",
  },
  {
    id: 6,
    issuer: "Cisco",
    title: "IT Customer Support Basics",
    dateObtained: "2025",
    credential:
      "https://www.credly.com/badges/b4fff280-170e-42a2-8ea1-7a49c9c385dc",
  },
];
