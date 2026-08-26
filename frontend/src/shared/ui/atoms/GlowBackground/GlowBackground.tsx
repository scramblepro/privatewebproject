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
    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[var(--color-glow-primary)] blur-[110px] [animation:var(--animate-float-slow)]" />
    <div className="absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-[var(--color-glow-accent)] blur-[130px] [animation:var(--animate-float)]" />
    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--color-primary)] opacity-20 blur-[100px] [animation:var(--animate-pulse-glow)]" />

    {/*
      Тонкая декоративная сетка в стиле "digital grid".
      Полностью скрыта для тех, кто отключил анимации (см. prefers-reduced-motion в tokens.css).
    */}
    <div
      className={cn(
        "absolute inset-0",
        "bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)]",
        "bg-[size:80px_80px]",
        "[mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_60%)]",
      )}
    />
  </div>
);