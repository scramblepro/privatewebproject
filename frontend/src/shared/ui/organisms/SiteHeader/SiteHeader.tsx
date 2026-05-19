import { NavLink } from "react-router-dom";
import { cn } from "../../../lib/cn";
import { Container } from "../../atoms/Container";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-xs)] text-sm font-medium transition-colors duration-[var(--transition-fast)] motion-reduce:transition-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    isActive ? "bg-white/15 text-white" : "text-slate-300 hover:text-white",
  );

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 bg-[var(--color-header)] text-white shadow-md">
    <Container className="flex flex-wrap items-center justify-between gap-[var(--space-md)] py-[var(--space-md)]">
      <NavLink
        to="/"
        className="text-lg font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Веб студия
      </NavLink>

      <nav
        className="flex flex-wrap gap-[var(--space-sm)] sm:gap-[var(--space-md)]"
        aria-label="Основная навигация"
      >
        <NavLink to="/" className={linkClass} end>
          Главная
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Проекты
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Контакты
        </NavLink>
      </nav>
    </Container>
  </header>
);
