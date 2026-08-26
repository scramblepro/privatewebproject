import type { Technology } from "./types";

export const TECHNOLOGIES_CONFIG: Technology[] = [
  { id: "react", name: "React", category: "frontend", sortOrder: 1 },
  { id: "typescript", name: "TypeScript", category: "frontend", sortOrder: 2 },
  { id: "next", name: "Next.js", category: "frontend", sortOrder: 3 },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", sortOrder: 4 },
  { id: "redux", name: "Redux Toolkit", category: "frontend", sortOrder: 5 },
  { id: "node", name: "Node.js", category: "backend", sortOrder: 6 },
  { id: "php", name: "PHP", category: "backend", sortOrder: 7 },
  { id: "laravel", name: "Laravel", category: "backend", sortOrder: 8 },
  { id: "postgres", name: "PostgreSQL", category: "backend", sortOrder: 9 },
  { id: "mysql", name: "MySQL", category: "backend", sortOrder: 10 },
  { id: "redis", name: "Redis", category: "backend", sortOrder: 11 },
  { id: "docker", name: "Docker", category: "devops", sortOrder: 12 },
  { id: "kubernetes", name: "Kubernetes", category: "devops", sortOrder: 13 },
  { id: "nginx", name: "Nginx", category: "devops", sortOrder: 14 },
  { id: "git", name: "Git / CI-CD", category: "tooling", sortOrder: 15 },
  { id: "figma", name: "Figma", category: "tooling", sortOrder: 16 },
];