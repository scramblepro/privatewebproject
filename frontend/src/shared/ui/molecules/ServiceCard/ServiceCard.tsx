import { motion } from "framer-motion";
import type { Service } from "../../../../entities/service";
import { ServiceIcon } from "../../atoms/ServiceIcon";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { surfaces, typography } from "../../../lib/ui-classes";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const motionSafe = useMotionSafe();

  return (
    <motion.article
      className={`${surfaces.cardInteractive} flex h-full flex-col gap-[var(--space-lg)] p-[var(--space-xl)]`}
      variants={motionSafe.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={motionSafe.transition}
      whileHover={
        motionSafe.prefersReducedMotion ? undefined : { y: -4 }
      }
    >
      <ServiceIcon icon={service.icon} />
      <div>
        <h3 className={typography.cardTitle}>{service.title}</h3>
        <p className={`${typography.cardBody} mt-[var(--space-sm)]`}>
          {service.description}
        </p>
      </div>
    </motion.article>
  );
};
