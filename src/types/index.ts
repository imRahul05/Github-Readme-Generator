export interface FormData {
  name: string;
  bio: string;
  profilePicture: string;
  languages: string[];
  projects: Project[];
  skills: string[];
  social: SocialLinks;
  funFact: string;
  stats: boolean;
  achievements: Achievement[];
}

export interface Project {
  name: string;
  description: string;
  repo: string;
  tech: string[];
}

export interface SocialLinks {
  github: string;
  twitter: string;
  linkedin: string;
  website: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}