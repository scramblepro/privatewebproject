import type { Project } from "../entities/project/model/types";
import { API_BASE_URL } from "../shared/config/api";

export type ContactMessagePayload = {
  name: string;
  email: string;
  message: string;
};

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${API_BASE_URL}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json() as Promise<Project[]>;
};

export const sendMessage = async (data: ContactMessagePayload): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }
};
