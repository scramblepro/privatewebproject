import { FormEvent, useState } from "react";
import { sendMessage } from "../../../api/api";
import { cn } from "../../../shared/lib/cn";
import { surfaces, typography } from "../../../shared/lib/ui-classes";
import { Button } from "../../../shared/ui/atoms/Button";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const fieldClass = cn(
  surfaces.card,
  "w-full px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text)]",
  "transition-[border-color,box-shadow] duration-[var(--transition-fast)]",
  "focus:border-[var(--color-primary-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30",
);

export const ContactForm = () => {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await sendMessage(form);
      setForm(initialState);
      alert("Отправлено!");
    } catch {
      alert("Не удалось отправить. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[var(--space-md)]" noValidate>
      <label className="block">
        <span className={`${typography.cardBody} mb-[var(--space-xs)] block font-medium text-[var(--color-text)]`}>
          Имя
        </span>
        <input
          className={fieldClass}
          name="name"
          value={form.name}
          required
          autoComplete="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="block">
        <span className={`${typography.cardBody} mb-[var(--space-xs)] block font-medium text-[var(--color-text)]`}>
          Email
        </span>
        <input
          className={fieldClass}
          type="email"
          name="email"
          value={form.email}
          required
          autoComplete="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <label className="block">
        <span className={`${typography.cardBody} mb-[var(--space-xs)] block font-medium text-[var(--color-text)]`}>
          Сообщение
        </span>
        <textarea
          className={cn(fieldClass, "min-h-[8rem] resize-y")}
          name="message"
          value={form.message}
          required
          rows={5}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправка…" : "Отправить"}
      </Button>
    </form>
  );
};
