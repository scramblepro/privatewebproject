import type { Service } from "./types";

export const SERVICES_CONFIG: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "SPA и корпоративные интерфейсы на React и TypeScript с продуманной архитектурой.",
    icon: "frontend",
    sortOrder: 1,
  },
  {
    id: "backend",
    title: "Backend API",
    description:
      "REST API, интеграции, авторизация и бизнес-логика на Node.js.",
    icon: "backend",
    sortOrder: 2,
  },
  {
    id: "uiux",
    title: "UI/UX",
    description:
      "Дизайн-системы, прототипы и визуальная иерархия для конверсии.",
    icon: "uiux",
    sortOrder: 3,
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Кастомные CRM, дашборды и автоматизация внутренних процессов.",
    icon: "crm",
    sortOrder: 4,
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Скрипты, webhooks и пайплайны для снижения ручной работы.",
    icon: "automation",
    sortOrder: 5,
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Продающие лендинги с premium UI, анимациями и высокой скоростью.",
    icon: "landing",
    sortOrder: 6,
  },
];
