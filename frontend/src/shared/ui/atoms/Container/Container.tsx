import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => (
  <div
    className={cn(
      "mx-auto w-full max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)] lg:px-[var(--space-xl)]",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
