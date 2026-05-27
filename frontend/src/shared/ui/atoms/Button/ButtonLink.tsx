import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/cn";
import type { ButtonSize, ButtonVariant } from "./Button";

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] hover:border-[var(--color-primary-soft)]",
  ghost:
    "bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-text)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-[var(--space-md)] text-sm",
  md: "h-11 px-[var(--space-lg)] text-sm",
  lg: "h-12 px-[var(--space-xl)] text-base",
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = "secondary",
      size = "md",
      className,
      target,
      rel,
      children,
      ...props
    },
    ref,
  ) => (
    <a
      ref={ref}
      target={target}
      rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-lg)] font-semibold",
        "transition-[background-color,color,border-color] duration-[var(--transition-base)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
);

ButtonLink.displayName = "ButtonLink";
