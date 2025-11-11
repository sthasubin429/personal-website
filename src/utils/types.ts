export type ProjectType = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  repoUrl?: string;
  techStack: string[];
};

export type ArchiveProjectType = {
  year: number;
  title: string;
  techStack: string[];
  projectUrl?: string;
  repoUrl?: string;
  category: 'Data Analytics' | 'Software Engineering' | 'Other';
};
