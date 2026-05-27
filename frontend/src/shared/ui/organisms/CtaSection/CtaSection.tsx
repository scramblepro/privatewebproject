import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { CtaConfig } from "../../../../entities/cta";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { typography } from "../../../lib/ui-classes";
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
      className="py-[var(--space-section)]"
      aria-labelledby="cta-heading"
    >
      <Container size="narrow">
        <motion.div
          className={cn(
            "rounded-[var(--radius-2xl)] border border-[var(--color-border)]",
            "bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)]",
            "px-[var(--space-xl)] py-[var(--space-2xl)] text-center shadow-[var(--shadow-glow)]",
            "sm:px-[var(--space-2xl)] sm:py-[var(--space-3xl)]",
          )}
          variants={motionSafe.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={motionSafe.transition}
        >
          <h2 id="cta-heading" className={typography.sectionTitle}>
            {config.title}
          </h2>
          <p className={cn(typography.sectionSubtitle, "mx-auto")}>
            {config.subtitle}
          </p>
          <div className="mt-[var(--space-xl)]">
            <Button size="lg" onClick={() => navigate("/contact")}>
              {config.buttonLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
