import { SITE_CONFIG, SITE_FOOTER_LINKS } from "../../../config/site";
import { Container } from "../../atoms/Container";
import { Badge } from "../../atoms/Badge";
import { typography } from "../../../lib/ui-classes";

export const SiteFooter = () => (
  <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-header)]">
    <Container className="py-[var(--space-2xl)]">
      <div className="grid gap-[var(--space-2xl)] md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-[var(--color-text)]">
            {SITE_CONFIG.brand}
          </p>
          <p className={`${typography.cardBody} mt-[var(--space-sm)]`}>
            {SITE_CONFIG.tagline}
          </p>
        </div>

        <div>
          <p className="mb-[var(--space-md)] text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Контакты
          </p>
          <ul className="flex flex-col gap-[var(--space-sm)]">
            {SITE_FOOTER_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-[var(--color-text-muted)] transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-primary-soft)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-[var(--space-md)] text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Stack
          </p>
          <ul className="flex flex-wrap gap-[var(--space-sm)]">
            {SITE_CONFIG.stack.map((item) => (
              <li key={item}>
                <Badge className="text-xs">{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-[var(--space-2xl)] border-t border-[var(--color-border)] pt-[var(--space-lg)] text-center text-sm text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} {SITE_CONFIG.copyright}
      </p>
    </Container>
  </footer>
);
