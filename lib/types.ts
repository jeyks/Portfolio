export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface JourneyItem {

  id: string;

  year: string;

  type: string;

  title: string;

  subtitle: string;

  description: string;

  icon: string;

  image: string;

  tech: string[];

}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  graduationYear: string;
  coursework: string[];
  awards: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateObtained: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}
