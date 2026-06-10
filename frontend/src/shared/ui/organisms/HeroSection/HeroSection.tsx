import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { HeroConfig } from "../../../../entities/hero";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { GlowBackground } from "../../atoms/GlowBackground";
import { useMotionSafe } from "../../../lib/motion";
import { typography } from "../../../lib/ui-classes";
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
      <Container className="relative py-[var(--space-section-lg)] lg:py-28">
        <motion.div
          variants={motionSafe.staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center lg:max-w-5xl"
        >
          <motion.p
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className={cn(typography.eyebrow, "mb-[var(--space-lg)]")}
          >
            {config.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className={cn(typography.heroTitle, "text-[var(--color-text)]")}
          >
            <span className="block">{config.titleLines[0]}</span>
            <span className="block bg-gradient-to-r from-[var(--color-primary-soft)] via-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent">
              {config.titleLines[1]}
            </span>
            <span className="block">{config.titleLines[2]}</span>
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
              <li key={badge}>
                <Badge>{badge}</Badge>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mt-[var(--space-2xl)] flex flex-col items-center justify-center gap-[var(--space-md)] sm:flex-row"
          >
            <Button size="lg" onClick={() => navigate("/contact")}>
              Связаться
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
