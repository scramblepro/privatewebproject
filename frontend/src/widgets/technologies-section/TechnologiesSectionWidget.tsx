import { TECHNOLOGIES_CONFIG } from "../../entities/technology";
import { TechnologiesSection } from "../../shared/ui/organisms/TechnologiesSection";

const technologies = [...TECHNOLOGIES_CONFIG].sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

export const TechnologiesSectionWidget = () => (
  <TechnologiesSection technologies={technologies} />
);
