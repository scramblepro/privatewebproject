import { Container } from "../../atoms/Container";

export const SiteFooter = () => (
  <footer className="mt-auto bg-[var(--color-header)] text-slate-300">
    <Container className="py-[var(--space-lg)] text-center text-sm">
      © {new Date().getFullYear()} Веб студия
    </Container>
  </footer>
);
