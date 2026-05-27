import type { Technology } from "./types";

export const TECHNOLOGIES_CONFIG: Technology[] = [
  { id: "react", name: "React", category: "frontend", sortOrder: 1 },
  { id: "typescript", name: "TypeScript", category: "frontend", sortOrder: 2 },
  { id: "node", name: "Node.js", category: "backend", sortOrder: 3 },
  { id: "postgres", name: "PostgreSQL", category: "backend", sortOrder: 4 },
  { id: "tailwind", name: "Tailwind", category: "frontend", sortOrder: 5 },
  { id: "docker", name: "Docker", category: "devops", sortOrder: 6 },
  { id: "git", name: "Git", category: "tooling", sortOrder: 7 },
];
