import { HeroSection } from "../shared/ui/organisms/HeroSection";
import { ProjectsSection } from "../shared/ui/organisms/ProjectsSection";
import { SkillsSectionWidget } from "../widgets/skills-section";

export const Home = () => (
  <>
    <HeroSection />
    <SkillsSectionWidget />
    <ProjectsSection />
  </>
);
