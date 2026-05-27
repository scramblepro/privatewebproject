export type SiteLinkKey = "github" | "telegram" | "email";

export type SiteLink = {
  key: SiteLinkKey;
  label: string;
  href: string;
  external?: boolean;
};

const contactEmail =
  process.env.REACT_APP_CONTACT_EMAIL ?? "hello@studio.dev";

export const SITE_CONFIG = {
  brand: "Совдэп Studio",
  tagline: "Modern software studio",
  copyright: "Совдэп Studio",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Docker"],
  links: {
    github:
      process.env.REACT_APP_GITHUB_URL ?? "https://github.com",
    telegram:
      process.env.REACT_APP_TELEGRAM_URL ?? "https://t.me",
    email: `mailto:${contactEmail}`,
  } satisfies Record<SiteLinkKey, string>,
} as const;

export const SITE_FOOTER_LINKS: SiteLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: SITE_CONFIG.links.github,
    external: true,
  },
  {
    key: "telegram",
    label: "Telegram",
    href: SITE_CONFIG.links.telegram,
    external: true,
  },
  {
    key: "email",
    label: "Email",
    href: SITE_CONFIG.links.email,
  },
];
