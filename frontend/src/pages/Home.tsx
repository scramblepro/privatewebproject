import { CtaSectionWidget } from "../widgets/cta-section";
import { HeroSectionWidget } from "../widgets/hero-section";
import { ServicesSectionWidget } from "../widgets/services-section";
import { TechnologiesSectionWidget } from "../widgets/technologies-section";

export const Home = () => (
  <>
    <HeroSectionWidget />
    <ServicesSectionWidget />
    <TechnologiesSectionWidget />
    <CtaSectionWidget />
  </>
);
