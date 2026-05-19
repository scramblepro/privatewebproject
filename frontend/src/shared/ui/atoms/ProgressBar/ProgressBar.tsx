import { motion, useReducedMotion } from "framer-motion";
import { clampSkillLevel } from "../../../../entities/skill";
import { cn } from "../../../lib/cn";
import { motionTransitionFast, viewportOnce } from "../../../lib/motion";

type ProgressBarProps = {
  value: number;
  label: string;
  className?: string;
  animate?: boolean;
};

const MotionFill = motion.div;

export const ProgressBar = ({
  value,
  label,
  className,
  animate = false,
}: ProgressBarProps) => {
  const prefersReducedMotion = useReducedMotion();
  const clamped = clampSkillLevel(value);
  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <div
      className={cn("w-full", className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="mb-[var(--space-xs)] flex justify-between text-sm text-[var(--color-text-muted)]">
        <span>{label}</span>
        <span>{clamped}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--color-border)]">
        {shouldAnimate ? (
          <MotionFill
            className="h-full rounded-full bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${clamped}%` }}
            viewport={viewportOnce}
            transition={motionTransitionFast}
          />
        ) : (
          <div
            className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-[var(--transition-base)] motion-reduce:transition-none"
            style={{ width: `${clamped}%` }}
          />
        )}
      </div>
    </div>
  );
};
