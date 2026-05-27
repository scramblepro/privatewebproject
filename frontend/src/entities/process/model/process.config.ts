import type { ProcessStep } from "./types";

export const PROCESS_CONFIG: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Анализ целей, аудитории и ограничений проекта.",
    order: 1,
  },
  {
    id: "design",
    title: "Design",
    description: "Прототипы, UI-kit и согласование пользовательских сценариев.",
    order: 2,
  },
  {
    id: "development",
    title: "Development",
    description: "Итеративная разработка с code review и прозрачными статусами.",
    order: 3,
  },
  {
    id: "testing",
    title: "Testing",
    description: "QA, регрессия и проверка критичных бизнес-потоков.",
    order: 4,
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Релиз, мониторинг и передача документации.",
    order: 5,
  },
];
