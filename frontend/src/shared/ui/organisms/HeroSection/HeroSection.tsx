import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { HeroConfig } from "../../../../entities/hero";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { GlowBackground } from "../../atoms/GlowBackground";
import { useMotionSafe } from "../../../lib/motion";
import { typography, effects } from "../../../lib/ui-classes";
import { cn } from "../../../lib/cn";

type HeroSectionProps = {
  config: HeroConfig;
};

export const HeroSection = ({ config }: HeroSectionProps) => {
  const navigate = useNavigate();
  const motionSafe = useMotionSafe();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <GlowBackground />
      {/* Анимированные плавающие частицы */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-60 [animation:var(--animate-float)]" />
        <div className="absolute left-[85%] top-[15%] h-3 w-3 rounded-full bg-[var(--color-primary-soft)] opacity-40 [animation:var(--animate-float-slow)]" />
        <div className="absolute left-[70%] top-[75%] h-2 w-2 rounded-full bg-[var(--color-accent-soft)] opacity-50 [animation:var(--animate-float)]" />
        <div className="absolute left-[15%] top-[80%] h-3 w-3 rounded-full bg-[var(--color-primary)] opacity-30 [animation:var(--animate-float-slow)]" />
        <div className="absolute left-[45%] top-[10%] h-1.5 w-1.5 rounded-full bg-[var(--color-success)] opacity-40 [animation:var(--animate-float)]" />
        <div className="absolute left-[30%] top-[65%] h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-35 [animation:var(--animate-float-slow)]" />
      </div>
      
      {/* Градиентная декоративная линия */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[var(--gradient-accent)] opacity-50"
      />

      <Container className="relative py-[var(--space-section-lg)] lg:py-32">
        <motion.div
          variants={motionSafe.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center lg:max-w-5xl"
        >
          <motion.p
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className={cn(
              typography.eyebrow,
              "mb-[var(--space-lg)] inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-[var(--space-lg)] py-[var(--space-xs)] backdrop-blur-sm",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] [animation:var(--animate-pulse-glow)]" />
            {config.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className={cn(typography.heroTitle, "text-[var(--color-text)]")}
          >
            <span className="block">{config.titleLines[0]}</span>
            <span
              className={cn(
                effects.gradientText,
                "block animate-[var(--animate-gradient)] bg-[length:200%_200%]",
              )}
            >
              {config.titleLines[1]}
            </span>
            <span
              className={cn(
                "block bg-gradient-to-r from-[var(--color-text)] to-[var(--color-text-muted)] bg-clip-text text-transparent",
              )}
            >
              {config.titleLines[2]}
            </span>
          </motion.h1>

          <motion.p
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className={cn(typography.heroSubtitle, "mx-auto mt-[var(--space-xl)]")}
          >
            {config.subtitle}
          </motion.p>

          <motion.ul
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mt-[var(--space-xl)] flex flex-wrap justify-center gap-[var(--space-sm)]"
            aria-label="Технологии"
          >
            {config.badges.map((badge) => (
              <motion.li
                key={badge}
                whileHover={
                  motionSafe.prefersReducedMotion
                    ? undefined
                    : { scale: 1.08, y: -2 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Badge className="transition-colors duration-[var(--transition-base)] hover:border-[var(--color-primary-soft)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary-soft)]">
                  {badge}
                </Badge>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mt-[var(--space-2xl)] flex flex-col items-center justify-center gap-[var(--space-md)] sm:flex-row"
          >
            <motion.div
              whileHover={
                motionSafe.prefersReducedMotion
                  ? undefined
                  : { scale: 1.02, y: -2 }
              }
              whileTap={motionSafe.prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" onClick={() => navigate("/contact")}>
                <span className="relative z-10">Связаться</span>
                <svg
                  aria-hidden
                  className="relative z-10 h-4 w-4 transition-transform duration-[var(--transition-base)] group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </motion.div>
            <motion.div
              whileHover={
                motionSafe.prefersReducedMotion
                  ? undefined
                  : { scale: 1.02, y: -2 }
              }
              whileTap={motionSafe.prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="secondary" size="lg" onClick={() => navigate("/contact")}>
                Обсудить задачу
              </Button>
            </motion.div>
          </motion.div>

          {/* Индикатор скролла */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-[var(--space-3xl)] flex justify-center"
          >
            <motion.div
              animate={motionSafe.prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--color-border-strong)] p-1.5"
              aria-hidden
            >
              <div className="h-2 w-1 rounded-full bg-[var(--color-primary-soft)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};