import { ContactForm } from "../features/contact/ui/ContactForm";
import { Section } from "../shared/ui/Section";
import { ButtonLink } from "../shared/ui/atoms/Button";

export const ContactPage = () => (
  <Section
    title="Связаться с нами"
    subtitle="Оставьте сообщение - ответим в ближайшее время"
    spacing="compact"
    containerClassName="max-w-xl"
  >
    <div className="mb-[var(--space-lg)]">
      <ButtonLink
        href="https://t.me/weird_siberian"
        variant="primary"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full justify-center"
      >
        Написать в Telegram
      </ButtonLink>
    </div>
    <ContactForm />
  </Section>
);
