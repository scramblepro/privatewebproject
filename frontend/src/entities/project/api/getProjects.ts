import { API_BASE_URL } from "../../../shared/config/api";
import type { Project, ProjectDto } from "../model/types";
import { normalizeProject } from "../lib/normalizeProject";

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${API_BASE_URL}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = (await res.json()) as ProjectDto[];
  return data.map(normalizeProject);
};
