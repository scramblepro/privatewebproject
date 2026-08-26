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
    {icon === "ai" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c.7 2.8 2.2 4.3 5 5-2.8.7-4.3 2.2-5 5-.7-2.8-2.2-4.3-5-5 2.8-.7 4.3-2.2 5-5z" strokeLinejoin="round" />
        <path d="M19 14c.4 1.5 1.1 2.2 2.5 2.6-1.4.4-2.1 1.1-2.5 2.6-.4-1.5-1.1-2.2-2.5-2.6 1.4-.4 2.1-1.1 2.5-2.6z" strokeLinejoin="round" />
        <path d="M5 16c.3 1 .8 1.5 1.8 1.8-1 .3-1.5.8-1.8 1.8-.3-1-.8-1.5-1.8-1.8 1-.3 1.5-.8 1.8-1.8z" strokeLinejoin="round" />
      </svg>
    )}
    {icon === "chat" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16v10H8l-4 4V6z" strokeLinejoin="round" />
        <path d="M8 10h8M8 13h5" strokeLinecap="round" />
      </svg>
    )}
    {icon === "audit" && (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h11v16H4z" strokeLinejoin="round" />
        <path d="M8 8h3M8 12h7M8 16h5" strokeLinecap="round" />
        <path d="M16 8h4v12" strokeLinejoin="round" />
        <path d="M16 12h3M16 16h3" strokeLinecap="round" />
      </svg>
    )}
  </span>
);
