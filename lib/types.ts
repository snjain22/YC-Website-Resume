export type AccentName = "amber" | "cyan";

export interface Education {
  school: string;
  degree: string;
  location: string;
  dates: string;
  notes?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  dates: string;
  blurb?: string;
  bullets: string[];
  tech?: string[];
  link?: string;
}

export interface Product {
  name: string;
  oneLine: string;
  description: string;
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface LeadershipItem {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}

export interface Socials {
  github?: string;
  linkedin?: string;
}

export interface ProfileData {
  slug: "ayush" | "sambhav";
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  socials: Socials;
  photo: string;
  photoPosition?: string;
  resumePdf: string;
  accent: AccentName;
  education: Education[];
  experience: ExperienceItem[];
  products?: Product[];
  projects: Project[];
  skills: SkillGroup[];
  achievements?: string[];
  leadership?: LeadershipItem[];
}
