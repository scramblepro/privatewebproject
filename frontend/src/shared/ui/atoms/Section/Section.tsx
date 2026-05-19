import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const Section = ({
  children,
  className,
  ...props
}: SectionProps) => (
  <section
    className={cn(
      "py-[var(--space-section)] first:pt-[var(--space-2xl)] last:pb-[var(--space-section-lg)]",
      className,
    )}
    {...props}
  >
    {children}
  </section>
);
