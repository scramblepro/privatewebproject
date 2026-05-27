import { NavLink } from "react-router-dom";
import { SITE_CONFIG } from "../../../config/site";
import { cn } from "../../../lib/cn";
import { Container } from "../../atoms/Container";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-xs)] text-sm font-medium transition-colors duration-[var(--transition-fast)]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
    isActive
      ? "bg-[var(--color-surface-elevated)] text-[var(--color-text)]"
      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
  );

const NAV_ITEMS = [
  { to: "/", label: "Главная", end: true },
  { to: "/projects", label: "Проекты", end: false },
  { to: "/contact", label: "Контакты", end: false },
] as const;

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
    <Container className="flex items-center justify-between gap-[var(--space-md)] py-[var(--space-md)]">
      <NavLink
        to="/"
        className="text-lg font-bold tracking-tight text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      >
        {SITE_CONFIG.brand}
      </NavLink>

      <nav
        className="flex flex-wrap gap-[var(--space-xs)] sm:gap-[var(--space-sm)]"
        aria-label="Основная навигация"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={linkClass}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Container>
  </header>
);
