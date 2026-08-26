export type HeroConfig = {
  eyebrow: string;
  titleLines: readonly [string, string, string];
  subtitle: string;
  badges: readonly string[];
};

export const HERO_CONFIG: HeroConfig = {
  eyebrow: "Software Studio",
  titleLines: [
    "Создание современных",
    "web-приложений",
    "для бизнеса",
  ],
  subtitle:
    "Fullstack-разработка, автоматизация, внедрение ИИ, интеграции и сопровождение - от идеи до production.",
  badges: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
};
