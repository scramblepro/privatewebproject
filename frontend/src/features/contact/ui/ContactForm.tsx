import { FormEvent, useState } from "react";
import { sendMessage } from "../../../api/api";
import { cn } from "../../../shared/lib/cn";
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

  const fieldClass =
    "w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text)] transition-[border-color,box-shadow] duration-[var(--transition-fast)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] p-[var(--space-xl)] shadow-[var(--shadow-card)]"
      noValidate
    >
      <label className="mb-[var(--space-md)] block">
        <span className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text)]">
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

      <label className="mb-[var(--space-md)] block">
        <span className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text)]">
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

      <label className="mb-[var(--space-lg)] block">
        <span className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text)]">
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

      <Button type="submit" variant="secondary" disabled={isSubmitting}>
        {isSubmitting ? "Отправка…" : "Отправить"}
      </Button>
    </form>
  );
};
