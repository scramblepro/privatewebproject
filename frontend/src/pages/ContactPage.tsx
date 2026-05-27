import { ContactForm } from "../features/contact/ui/ContactForm";
import { Section } from "../shared/ui/Section";

export const ContactPage = () => (
  <Section
    title="Связаться с нами"
    subtitle="Оставьте сообщение — ответим в ближайшее время"
    spacing="compact"
    containerClassName="max-w-xl"
  >
    <ContactForm />
  </Section>
);
