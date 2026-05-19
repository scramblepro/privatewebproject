import { motion } from "framer-motion";
import type { Skill } from "../../../../entities/skill";
import { useMotionSafe, viewportOnce } from "../../../lib/motion";
import { Container } from "../../atoms/Container";
import { Section } from "../../atoms/Section";
import { SectionHeading } from "../../molecules/SectionHeading";
import { SkillItem } from "../../molecules/SkillItem";

const HEADING_ID = "skills-heading";

type SkillsSectionProps = {
  skills: Skill[];
  isLoading?: boolean;
};

export const SkillsSection = ({
  skills,
  isLoading = false,
}: SkillsSectionProps) => {
  const motionSafe = useMotionSafe();

  return (
    <Section aria-labelledby={HEADING_ID}>
      <Container>
        <motion.div
          variants={motionSafe.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={motionSafe.transition}
        >
          <SectionHeading
            id={HEADING_ID}
            title="Навыки"
            subtitle="Стек и уровень владения — единая шкала для всех направлений"
          />
        </motion.div>

        {isLoading ? (
          <p className="text-[var(--color-text-muted)]">Загрузка навыков…</p>
        ) : (
          <motion.ul
            className="grid grid-cols-1 gap-[var(--space-lg)] sm:grid-cols-2 lg:grid-cols-3"
            variants={motionSafe.staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.id}
                variants={motionSafe.fadeInUp}
                transition={motionSafe.transition}
              >
                <SkillItem skill={skill} animateProgress />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </Container>
    </Section>
  );
};
