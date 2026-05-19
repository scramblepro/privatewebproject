import { motion } from "framer-motion";
import type { Skill } from "../../../../entities/skill";
import { ProgressBar } from "../../atoms/ProgressBar";
import { useMotionSafe } from "../../../lib/motion";

type SkillItemProps = {
  skill: Skill;
  animateProgress?: boolean;
};

export const SkillItem = ({ skill, animateProgress = false }: SkillItemProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.article
      className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-[var(--space-lg)] shadow-[var(--shadow-card)]"
      whileHover={
        motionSafe.prefersReducedMotion
          ? undefined
          : { y: -2, boxShadow: "var(--shadow-card-hover)" }
      }
      transition={motionSafe.transitionFast}
    >
      <ProgressBar
        value={skill.level}
        label={skill.name}
        animate={animateProgress}
      />
    </motion.article>
  );
};
