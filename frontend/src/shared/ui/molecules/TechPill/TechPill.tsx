import { motion } from "framer-motion";
import type { Technology } from "../../../../entities/technology";
import { Badge } from "../../atoms/Badge";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { cn } from "../../../lib/cn";

type TechPillProps = {
  technology: Technology;
};

export const TechPill = ({ technology }: TechPillProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.li
      variants={motionSafe.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={motionSafe.transitionFast}
      whileHover={
        motionSafe.prefersReducedMotion
          ? undefined
          : { scale: 1.06, y: -3 }
      }
      whileTap={motionSafe.prefersReducedMotion ? undefined : { scale: 0.97 }}
    >
      <Badge
        className={cn(
          "px-[var(--space-lg)] py-[var(--space-sm)] text-sm sm:text-base",
          "transition-all duration-[var(--transition-base)]",
          "hover:border-[var(--color-primary-soft)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary-soft)] hover:shadow-[var(--shadow-glow-accent)]",
        )}
      >
        {technology.name}
      </Badge>
    </motion.li>
  );
};