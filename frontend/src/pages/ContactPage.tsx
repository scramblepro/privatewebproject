import { ContactForm } from "../features/contact/ui/ContactForm";
import { Container } from "../shared/ui/atoms/Container";
import { Section } from "../shared/ui/atoms/Section";
import { SectionHeading } from "../shared/ui/molecules/SectionHeading";

const HEADING_ID = "contact-heading";

export const ContactPage = () => (
  <Section aria-labelledby={HEADING_ID} className="first:pt-[var(--space-xl)]">
    <Container className="max-w-xl">
      <SectionHeading
        id={HEADING_ID}
        title="Связаться с нами"
        subtitle="Оставьте сообщение — ответим в ближайшее время"
      />
      <ContactForm />
    </Container>
  </Section>
);
