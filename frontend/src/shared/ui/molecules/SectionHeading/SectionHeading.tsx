type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({
  id,
  title,
  subtitle,
}: SectionHeadingProps) => (
  <header className="mb-[var(--space-xl)] max-w-2xl">
    <h2
      id={id}
      className="text-2xl font-bold leading-[var(--leading-tight)] text-[var(--color-text)] sm:text-3xl"
    >
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-[var(--space-sm)] text-base leading-[var(--leading-relaxed)] text-[var(--color-text-muted)]">
        {subtitle}
      </p>
    ) : null}
  </header>
);
