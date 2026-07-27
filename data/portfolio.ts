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
  { label: "Journey", href: "#experience" },
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

export const journey = [
  {
    id: "journey-1",
    year: "2022",
    type: "education",
    title: "Started My IT Journey",
    subtitle: "National University - Laguna",
    description:
      "Began my Bachelor of Science in Information Technology and built my first websites while learning the fundamentals of programming and web development.",
    icon: "graduation",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "journey-2",
    year: "2023",
    type: "learning",
    title: "Building My Foundation",
    subtitle: "Exploring Web Development",
    description:
      "Expanded my skills through academic projects, strengthened my understanding of JavaScript, databases, and responsive web design, and discovered my passion for frontend development.",
    icon: "code",
    tech: ["JavaScript", "SQL", "Git", "Bootstrap"],
  },
  {
    id: "journey-3",
    year: "2024",
    type: "project",
    title: "Frontend Developer & QA Tester",
    subtitle: "GEOTRACE Capstone Project",
    description:
      "Designed responsive interfaces, performed quality assurance testing, and collaborated with the team to develop a geofence tracking and payroll management system.",
    icon: "code",
    tech: ["Laravel", "React", "Tailwind CSS", "MySQL"],
  },
  {
    id: "journey-4",
    year: "2025",
    type: "project",
    title: "Lead Frontend Developer",
    subtitle: "TARA4A Capstone Project",
    description:
      "Led the frontend development of a smart tourism platform for the Department of Tourism CALABARZON, focusing on user experience, responsive design, and team collaboration.",
    icon: "code",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "journey-5",
    year: "2025",
    type: "internship",
    title: "Data Administrator Intern",
    subtitle: "National Reinsurance Corporation of the Philippines",
    description:
      "Worked with financial datasets, data validation, Excel automation, VBA macros, and reporting processes while ensuring data quality and accuracy.",
    icon: "briefcase",
    tech: ["Microsoft Excel", "VBA", "Google Workspace"],
  },
  {
    id: "journey-6",
    year: "2025",
    type: "achievement",
    title: "PacketHACKS Top 15 Semi-Finalist",
    subtitle: "Hack the Climate 2025",
    description:
      "Co-developed AirSentinel, an IoT-based air quality monitoring system, and reached the Top 15 Semi-Finals in the national innovation competition.",
    icon: "trophy",
    tech: ["Arduino", "IoT", "Google Maps API"],
  },
  {
    id: "journey-7",
    year: "2026",
    type: "education",
    title: "Graduated Magna Cum Laude",
    subtitle: "National University - Laguna",
    description:
      "Completed my Bachelor of Science in Information Technology while continuously building modern web applications and expanding my skills in frontend development and data analytics.",
    icon: "graduation",
    tech: ["Dean's Lister 2022-2026", "Magna Cum Laude",],
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