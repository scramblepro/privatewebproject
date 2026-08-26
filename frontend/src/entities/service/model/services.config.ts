import type { Service } from "./types";

export const SERVICES_CONFIG: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "SPA и корпоративные интерфейсы на React, Next.js и TypeScript с продуманной архитектурой.",
    icon: "frontend",
    sortOrder: 1,
  },
  {
    id: "backend",
    title: "Backend API",
    description:
      "REST API, GraphQL, интеграции, авторизация и бизнес-логика на Node.js, PHP и Laravel.",
    icon: "backend",
    sortOrder: 2,
  },
  {
    id: "uiux",
    title: "UI/UX & Design Systems",
    description:
      "Дизайн-системы, прототипы в Figma, визуальная иерархия и интерактивные анимации для конверсии.",
    icon: "uiux",
    sortOrder: 3,
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Кастомные CRM, дашборды с аналитикой и автоматизация внутренних процессов.",
    icon: "crm",
    sortOrder: 4,
  },
  {
    id: "automation",
    title: "Automation & DevOps",
    description:
      "CI/CD пайплайны, Docker, Kubernetes, скрипты и webhooks для снижения ручной работы.",
    icon: "automation",
    sortOrder: 5,
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Продающие лендинги с premium UI, анимациями, высокой скоростью и SEO-оптимизацией.",
    icon: "landing",
    sortOrder: 6,
  },
  {
    id: "ai",
    title: "Внедрение ИИ в бизнес",
    description:
      "Интеграция ИИ-решений: анализ данных, автоматизация рутины и языковые модели в Ваших процессах.",
    icon: "ai",
    sortOrder: 7,
  },
  {
    id: "chat",
    title: "Онлайн-чат и AI-помощник",
    description:
      "Создание онлайн-чатов и настройка интеллектуальных помощников для поддержки клиентов 24/7.",
    icon: "chat",
    sortOrder: 8,
  },
  {
    id: "audit",
    title: "Аудит и сопровождение IT",
    description:
      "Аудит Вашей IT-инфраструктуры, оптимизация производительности и техническое сопровождение систем.",
    icon: "audit",
    sortOrder: 9,
  },
];
