import { motion } from "framer-motion";
import type { Service } from "../../../../entities/service";
import { ServiceIcon } from "../../atoms/ServiceIcon";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { surfaces, typography } from "../../../lib/ui-classes";
import { cn } from "../../../lib/cn";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.article
      className={cn(
        surfaces.cardInteractive,
        "flex h-full flex-col gap-[var(--space-lg)] p-[var(--space-xl)]",
      )}
      variants={motionSafe.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={motionSafe.transition}
      whileHover={motionSafe.prefersReducedMotion ? undefined : { y: -6 }}
    >
      {/* Декоративный градиентный блик в углу карточки */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[var(--gradient-surface)] opacity-0 transition-opacity duration-[var(--transition-base)] group-hover:opacity-100"
      />

      <div className="relative">
        <motion.div
          whileHover={
            motionSafe.prefersReducedMotion
              ? undefined
              : { scale: 1.08, rotate: 4 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="inline-block"
        >
          <ServiceIcon icon={service.icon} />
        </motion.div>
      </div>

      <div className="relative">
        <h3 className={typography.cardTitle}>{service.title}</h3>
        <p className={cn(typography.cardBody, "mt-[var(--space-sm)]")}>
          {service.description}
        </p>
      </div>

      {/* Декоративная линия-индикатор под карточкой */}
      <motion.div
        aria-hidden
        className="relative mt-auto h-0.5 w-full origin-left scale-x-0 bg-[var(--gradient-primary)] transition-transform duration-[var(--transition-base)] group-hover:scale-x-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={motionSafe.transition}
      />
    </motion.article>
  );
};