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
          : { scale: 1.03 }
      }
    >
      <Badge
        className={cn(
          "px-[var(--space-lg)] py-[var(--space-sm)] text-sm sm:text-base",
          "hover:border-[var(--color-primary-soft)] hover:text-[var(--color-primary-soft)]",
        )}
      >
        {technology.name}
      </Badge>
    </motion.li>
  );
};
