import { useSkills } from "../../entities/skill";
import { SkillsSection } from "../../shared/ui/organisms/SkillsSection";

export const SkillsSectionWidget = () => {
  const { skills, isLoading } = useSkills();

  return <SkillsSection skills={skills} isLoading={isLoading} />;
};
