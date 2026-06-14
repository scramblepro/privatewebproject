import type { Technology } from "../../../../entities/technology";
import { Section } from "../../Section";
import { layout } from "../../../lib/ui-classes";
import { TechPill } from "../../molecules/TechPill";

type TechnologiesSectionProps = {
  technologies: Technology[];
};

export const TechnologiesSection = ({
  technologies,
}: TechnologiesSectionProps) => (
  <Section
    id="technologies"
    title="Технологии"
    subtitle="Стек, на котором строятся надёжные продукты"
    className="bg-[var(--color-bg-elevated)]"
  >
    <ul className={layout.gridTech}>
      {technologies.map((technology) => (
        <TechPill key={technology.id} technology={technology} />
      ))}
    </ul>
  </Section>
);
