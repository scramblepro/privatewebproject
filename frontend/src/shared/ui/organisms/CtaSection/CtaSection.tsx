import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { CtaConfig } from "../../../../entities/cta";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { typography, effects } from "../../../lib/ui-classes";
import { cn } from "../../../lib/cn";

type CtaSectionProps = {
  config: CtaConfig;
};

export const CtaSection = ({ config }: CtaSectionProps) => {
  const navigate = useNavigate();
  const motionSafe = useMotionSafe();

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-[var(--space-section)]"
      aria-labelledby="cta-heading"
    >
      <Container size="narrow">
        <motion.div
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-3xl)] border border-[var(--color-border)]",
            "bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)]",
            "px-[var(--space-xl)] py-[var(--space-2xl)] text-center shadow-[var(--shadow-glow-strong)]",
            "sm:px-[var(--space-2xl)] sm:py-[var(--space-3xl)]",
          )}
          variants={motionSafe.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={motionSafe.transition}
          whileHover={motionSafe.prefersReducedMotion ? undefined : { scale: 1.01 }}
        >
          {/* Анимированный градиентный фон внутри CTA-блока */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0",
              effects.gradientAnimated,
              "bg-[var(--gradient-primary)] opacity-[0.04]",
            )}
          />

          {/* Плавающие декоративные частицы */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-40 [animation:var(--animate-float)]" />
            <div className="absolute right-[12%] top-[30%] h-3 w-3 rounded-full bg-[var(--color-primary-soft)] opacity-30 [animation:var(--animate-float-slow)]" />
            <div className="absolute bottom-[25%] left-[45%] h-2 w-2 rounded-full bg-[var(--color-accent-soft)] opacity-35 [animation:var(--animate-float)]" />
          </div>

          <div className="relative">
            <h2
              id="cta-heading"
              className={cn(typography.sectionTitle, effects.gradientText)}
            >
              {config.title}
            </h2>
            <p className={cn(typography.sectionSubtitle, "mx-auto")}>
              {config.subtitle}
            </p>
            <motion.div
              className="mt-[var(--space-xl)]"
              whileHover={
                motionSafe.prefersReducedMotion
                  ? undefined
                  : { scale: 1.03, y: -2 }
              }
              whileTap={motionSafe.prefersReducedMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" onClick={() => navigate("/contact")}>
                {config.buttonLabel}
                <svg
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-[var(--transition-base)] group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};