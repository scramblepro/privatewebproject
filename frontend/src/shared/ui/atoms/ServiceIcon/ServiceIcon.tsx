import type { ServiceIconId } from "../../../../entities/service";
import { cn } from "../../../lib/cn";

type ServiceIconProps = {
  icon: ServiceIconId;
  className?: string;
};

const iconClass = "h-6 w-6 text-[var(--color-primary-soft)]";

export const ServiceIcon = ({ icon, className }: ServiceIconProps) => (
  <span
    className={cn(
      "flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-surface-elevated)]",
      className,
    )}
    aria-hidden
  >
    {icon === "frontend" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />
      </svg>
    )}
    {icon === "backend" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="6" rx="1" />
        <rect x="3" y="14" width="18" height="6" rx="1" />
      </svg>
    )}
    {icon === "uiux" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 16l3-4 2 3 3-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
    {icon === "crm" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c0-3 3-5 5-5s5 2 5 5M11 20c0-2 2-4 5-4s5 2 5 4" strokeLinecap="round" />
      </svg>
    )}
    {icon === "automation" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )}
    {icon === "landing" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 18V6l8 6 8-6v12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </span>
);
