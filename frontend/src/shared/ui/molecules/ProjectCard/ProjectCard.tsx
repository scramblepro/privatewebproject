import { motion } from "framer-motion";
import type { Project } from "../../../../entities/project/model/types";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { cn } from "../../../lib/cn";

type ProjectCardProps = {
  project: Pick<Project, "title" | "description">;
  className?: string;
};

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.article
      className={cn(
        "flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--color-surface)] p-[var(--space-lg)] shadow-[var(--shadow-card)]",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={motionSafe.fadeInUp}
      transition={motionSafe.transition}
      whileHover={
        motionSafe.prefersReducedMotion
          ? undefined
          : { y: -4, boxShadow: "var(--shadow-card-hover)" }
      }
    >
      <h3 className="mb-[var(--space-sm)] text-xl font-semibold leading-[var(--leading-tight)] text-[var(--color-text)]">
        {project.title}
      </h3>
      <p className="flex-1 text-base leading-[var(--leading-normal)] text-[var(--color-text-muted)]">
        {project.description}
      </p>
    </motion.article>
  );
};
