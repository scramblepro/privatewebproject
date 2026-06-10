export type SiteLinkKey = "telegram" | "email" | "phone";

export type SiteLink = {
  key: SiteLinkKey;
  label: string;
  href: string;
  external?: boolean;
};

const contactEmail =
  process.env.REACT_APP_CONTACT_EMAIL ?? "hello@studio.dev";

export const SITE_CONFIG = {
  brand: "BrainStorm project",
  tagline: "Modern software studio",
  copyright: "BrainStorm project",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Docker"],
  links: {
    telegram:
      process.env.REACT_APP_TELEGRAM_URL ?? "https://t.me",
    email: `mailto:${contactEmail}`,
    phone: `tel:+79111163142`,
  } satisfies Record<SiteLinkKey, string>,
} as const;

export const SITE_FOOTER_LINKS: SiteLink[] = [
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
  {
    key: "phone",
    label: "+7 911 116-31-42",
    href: SITE_CONFIG.links.phone,
    external: true,
  },
];
