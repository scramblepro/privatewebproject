import { motion } from "framer-motion";
import type { Project } from "../../../../entities/project";
import { Badge } from "../../atoms/Badge";
import { ButtonLink } from "../../atoms/Button";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { surfaces, typography } from "../../../lib/ui-classes";
import { cn } from "../../../lib/cn";

type ProjectCaseCardProps = {
  project: Project;
};

export const ProjectCaseCard = ({ project }: ProjectCaseCardProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.article
      className={cn(surfaces.cardInteractive, "flex h-full flex-col overflow-hidden")}
      variants={motionSafe.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={motionSafe.transition}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-elevated)]">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-end bg-gradient-to-br from-[var(--color-primary)]/30 via-[var(--color-surface-elevated)] to-[var(--color-accent)]/20 p-[var(--space-lg)]"
            aria-hidden
          >
            <span className="text-sm font-medium text-[var(--color-text-muted)]">
              Case Study
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-[var(--space-md)] p-[var(--space-xl)]">
        <h3 className={typography.cardTitle}>{project.title}</h3>
        <p className={typography.cardBody}>{project.description}</p>

        <ul className="flex flex-wrap gap-[var(--space-sm)]">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge className="text-xs">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-[var(--space-sm)] pt-[var(--space-md)]">
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
              size="sm"
            >
              GitHub
            </ButtonLink>
          ) : null}
          {project.demoUrl ? (
            <ButtonLink
              href={project.demoUrl}
              target="_blank"
              variant="primary"
              size="sm"
            >
              Live Demo
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};
