import type { Project, ProjectDto } from "../model/types";

const DEFAULT_TECHNOLOGIES = ["React", "TypeScript"];

const parseTechnologies = (raw: string | null | undefined): string[] => {
  if (!raw?.trim()) {
    return DEFAULT_TECHNOLOGIES;
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    return raw.split(",").map((item) => item.trim()).filter(Boolean);
  }

  return DEFAULT_TECHNOLOGIES;
};

export const normalizeProject = (dto: ProjectDto): Project => ({
  id: dto.id,
  title: dto.title,
  description: dto.description,
  imageUrl: dto.image_url?.trim() || null,
  technologies: parseTechnologies(dto.technologies),
  githubUrl: dto.github_url?.trim() || null,
  demoUrl: dto.link?.trim() || null,
});
