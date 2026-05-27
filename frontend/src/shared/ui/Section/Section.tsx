import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { layout, typography } from "../../lib/ui-classes";
import { Container } from "../atoms/Container";

export type SectionSpacing = "default" | "compact" | "loose";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  title?: string;
  subtitle?: string;
  spacing?: SectionSpacing;
  children: ReactNode;
  containerClassName?: string;
  headerClassName?: string;
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: layout.section,
  compact: layout.sectionCompact,
  loose: layout.sectionLoose,
};

export const Section = ({
  id,
  title,
  subtitle,
  spacing = "default",
  children,
  className,
  containerClassName,
  headerClassName,
  ...props
}: SectionProps) => (
  <section
    id={id}
    className={cn(spacingClasses[spacing], className)}
    {...props}
  >
    <Container className={containerClassName}>
      {title ? (
        <header className={cn("mb-[var(--space-2xl)]", headerClassName)}>
          <h2 className={typography.sectionTitle}>{title}</h2>
          {subtitle ? (
            <p className={typography.sectionSubtitle}>{subtitle}</p>
          ) : null}
        </header>
      ) : null}
      {children}
    </Container>
  </section>
);
