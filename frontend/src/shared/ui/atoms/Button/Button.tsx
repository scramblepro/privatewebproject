import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[0_0_24px_var(--color-glow-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] hover:border-[var(--color-primary-soft)] hover:bg-[var(--color-surface)]",
  ghost:
    "bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-text)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-[var(--space-md)] text-sm",
  md: "h-11 px-[var(--space-lg)] text-sm sm:text-base",
  lg: "h-12 px-[var(--space-xl)] text-base sm:h-14 sm:px-10 sm:text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      disabled,
      type = "button",
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-lg)] font-semibold",
        "transition-[background-color,transform,box-shadow,color,border-color] duration-[var(--transition-base)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
        "motion-reduce:transition-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
