export type ProjectDto = {
  id: number;
  title: string;
  description: string;
  link?: string | null;
  image_url?: string | null;
  github_url?: string | null;
  technologies?: string | null;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
  githubUrl: string | null;
  demoUrl: string | null;
};
