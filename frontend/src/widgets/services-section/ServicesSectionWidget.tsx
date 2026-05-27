import { SERVICES_CONFIG } from "../../entities/service";
import { ServicesSection } from "../../shared/ui/organisms/ServicesSection";

const services = [...SERVICES_CONFIG].sort((a, b) => a.sortOrder - b.sortOrder);

export const ServicesSectionWidget = () => (
  <ServicesSection services={services} />
);
