export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  image: string;
  gallery?: string[];
  video?: string;
  link?: string;
  badge?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface FAQ {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface MediaItem {
  id: string;
  title: string;
  client?: string;
  category: string;
  type: 'reel' | 'film' | 'website' | 'shoot';
  thumbnail: string;
  videoUrl?: string;
  embedUrl?: string;
  views?: string;
  year?: string;
}