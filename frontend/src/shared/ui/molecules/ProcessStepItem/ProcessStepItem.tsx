import { motion } from "framer-motion";
import type { ProcessStep } from "../../../../entities/process";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { typography } from "../../../lib/ui-classes";
import { cn } from "../../../lib/cn";

type ProcessStepItemProps = {
  step: ProcessStep;
  isLast: boolean;
};

export const ProcessStepItem = ({ step, isLast }: ProcessStepItemProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.li
      className="relative flex gap-[var(--space-lg)] pb-[var(--space-2xl)] last:pb-0 lg:flex-1 lg:flex-col lg:pb-0"
      variants={motionSafe.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={motionSafe.transition}
    >
      <div className="flex shrink-0 flex-col items-center lg:flex-row lg:items-start lg:gap-[var(--space-md)]">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)]",
            "border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)]",
            "text-sm font-bold text-[var(--color-primary-soft)]",
          )}
        >
          {step.order}
        </span>
        {!isLast ? (
          <span
            className="mt-2 hidden h-full w-px flex-1 bg-[var(--color-border)] lg:block lg:h-px lg:w-full lg:flex-none"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className={typography.cardTitle}>{step.title}</h3>
        <p className={`${typography.cardBody} mt-[var(--space-sm)]`}>
          {step.description}
        </p>
      </div>

      {!isLast ? (
        <span
          className="absolute left-5 top-10 bottom-0 w-px bg-[var(--color-border)] lg:hidden"
          aria-hidden
        />
      ) : null}
    </motion.li>
  );
};
