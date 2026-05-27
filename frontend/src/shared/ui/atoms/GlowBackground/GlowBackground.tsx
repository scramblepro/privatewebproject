import { cn } from "../../../lib/cn";

type GlowBackgroundProps = {
  className?: string;
};

export const GlowBackground = ({ className }: GlowBackgroundProps) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-0 overflow-hidden",
      className,
    )}
  >
    <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--color-glow-primary)] blur-[100px]" />
    <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-[var(--color-glow-accent)] blur-[120px]" />
    <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-primary)] opacity-20 blur-[90px]" />
  </div>
);
