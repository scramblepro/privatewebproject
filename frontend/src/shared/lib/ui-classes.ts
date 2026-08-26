export const typography = {
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-soft)] sm:text-sm",
  heroTitle:
    "font-bold leading-[var(--leading-tight)] tracking-tight text-[length:var(--text-hero)]",
  heroSubtitle:
    "max-w-2xl text-[length:var(--text-body)] leading-[var(--leading-relaxed)] text-[var(--color-text-muted)]",
  sectionTitle:
    "font-bold leading-[var(--leading-tight)] tracking-tight text-[length:var(--text-section)] text-[var(--color-text)]",
  sectionSubtitle:
    "mt-[var(--space-md)] max-w-2xl text-[length:var(--text-body)] leading-[var(--leading-relaxed)] text-[var(--color-text-muted)]",
  cardTitle: "text-lg font-semibold text-[var(--color-text)] sm:text-xl",
  cardBody:
    "text-sm leading-[var(--leading-normal)] text-[var(--color-text-muted)] sm:text-base",
} as const;

export const surfaces = {
  card: "rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]",
  cardInteractive:
    "group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-[box-shadow,transform,border-color] duration-[var(--transition-base)] hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card-hover)] motion-reduce:transform-none motion-reduce:transition-none",
  pill:
    "inline-flex items-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-md)] py-[var(--space-xs)] text-sm font-medium text-[var(--color-text)]",
} as const;

export const layout = {
  section: "py-[var(--space-section)]",
  sectionCompact: "py-[var(--space-3xl)]",
  sectionLoose: "py-[var(--space-section-lg)]",
  gridServices:
    "grid grid-cols-1 gap-[var(--space-lg)] sm:grid-cols-2 lg:grid-cols-3",
  gridProjects:
    "grid grid-cols-1 gap-[var(--space-xl)] md:grid-cols-2",
  gridTech:
    "flex flex-wrap gap-[var(--space-sm)] sm:gap-[var(--space-md)]",
} as const;

export const effects = {
  gradientText: "bg-[image:var(--gradient-text)] bg-clip-text text-transparent",
  gradientPrimary: "bg-[var(--gradient-primary)]",
  gradientAnimated:
    "bg-[length:200%_200%] animate-[var(--animate-gradient)]",
  shimmer:
    "relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.08)_50%,transparent_75%)] before:bg-[length:200%_100%] before:animate-[var(--animate-shimmer)]",
  glowHover:
    "transition-shadow duration-[var(--transition-base)] hover:shadow-[var(--shadow-glow-strong)]",
} as const;