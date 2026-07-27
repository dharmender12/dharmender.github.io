export interface Experience {
  id: string;
  role: string;
  company: string;
  program?: string;
  period: string;
  location: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  specialization?: string;
  imageUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Achievement {
  role: string;
  event: string;
  organization: string;
  period: string;
  location?: string;
}

export interface SkillCategory {
  category: 'technical' | 'soft';
  name: string;
  skills: {
    name: string;
    level: number; // 1-100
    iconName?: string;
    description?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'Machine Learning' | 'Data Analytics' | 'NLP' | 'Full Stack' | 'Cloud Analytics';
  featured: boolean;
  metrics?: string[];
  imagePlaceholderGradient: string;
  keyFeatures: string[];
}
