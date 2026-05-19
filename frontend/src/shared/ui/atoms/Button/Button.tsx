import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]",
  secondary:
    "bg-[var(--color-accent)] text-white hover:brightness-110 active:brightness-95",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] active:bg-[var(--color-primary-active)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[var(--space-md)] py-[var(--space-sm)] text-sm",
  md: "px-[var(--space-lg)] py-[var(--space-sm)] text-base",
  lg: "px-[var(--space-xl)] py-[var(--space-md)] text-lg",
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
        "inline-flex items-center justify-center rounded-[var(--radius-lg)] font-semibold",
        "transition-[background-color,transform,box-shadow] duration-[var(--transition-base)]",
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
