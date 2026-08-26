import type { Service } from "../../../../entities/service";
import { Section } from "../../Section";
import { layout } from "../../../lib/ui-classes";
import { ServiceCard } from "../../molecules/ServiceCard";

type ServicesSectionProps = {
  services: Service[];
};

export const ServicesSection = ({ services }: ServicesSectionProps) => (
  <Section
    id="services"
    title="Услуги"
    subtitle="Полный цикл разработки - от интерфейса до инфраструктуры"
  >
    <ul className={layout.gridServices}>
      {services.map((service) => (
        <li key={service.id}>
          <ServiceCard service={service} />
        </li>
      ))}
    </ul>
  </Section>
);
