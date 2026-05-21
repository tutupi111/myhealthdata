"use client";

import { useState, type FormEvent } from "react";
import { trackContactEvent } from "@/lib/contactTracking";
import { translations, type Locale } from "@/lib/i18n";

interface ContactFormProps {
  lang: Locale;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang].contactPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const result = await trackContactEvent({
      channel: "form",
      contactTarget: "contact-page-form",
      campaign: "contact-page",
      metadata: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    setStatus(result.ok ? "success" : "error");

    if (result.ok) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const inputClassName =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors";

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900 mb-6">{t.formTitle}</h2>

      {status === "success" && (
        <div
          role="status"
          className="mb-6 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-teal-800"
        >
          {t.formSuccess}
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
        >
          {t.formError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t.formName} <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClassName}
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t.formEmail} <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t.formSubject} <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClassName}
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t.formMessage} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClassName} resize-y min-h-[120px]`}
            disabled={status === "submitting"}
          />
        </div>

        <p className="text-sm text-slate-500">{t.formPrivacy}</p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? t.formSubmitting : t.formSubmit}
        </button>
      </form>
    </div>
  );
}
