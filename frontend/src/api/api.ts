import { API_BASE_URL } from "../shared/config/api";

export { getProjects } from "../entities/project/api/getProjects";
export type { Project, ProjectDto } from "../entities/project/model/types";

export type ContactMessagePayload = {
  name: string;
  email: string;
  message: string;
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
