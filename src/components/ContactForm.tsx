"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { COMPANY, ENQUIRY_TOPICS as TOPICS, WHATSAPP_URL } from "@/lib/site";
import { QUOTE_EVENT } from "@/components/QuoteBuilder";

const QUOTE_PREFIX = "I'd like a quotation for:";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const inputClass =
  "field mt-1.5 block w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-red-600";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const startedAt = useRef(Date.now());
  const errorRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const pending = useRef<{ message: string; topic: string } | null>(null);

  // Prefill from the bulk quote builder. A previous list is replaced; anything else the
  // visitor already typed is kept, with the list added after it.
  const applyQuote = () => {
    const form = formRef.current;
    const q = pending.current;
    if (!form || !q) return;
    pending.current = null;
    const msg = form.elements.namedItem("message") as HTMLTextAreaElement;
    const topic = form.elements.namedItem("topic") as HTMLSelectElement;
    const current = msg.value.trim();
    msg.value = !current || current.startsWith(QUOTE_PREFIX) ? q.message : `${current}\n\n${q.message}`;
    if (TOPICS.includes(q.topic)) topic.value = q.topic;
    msg.classList.remove("prefilled");
    void msg.offsetWidth; // restart the highlight animation
    msg.classList.add("prefilled");
    setInvalid((v) => ({ ...v, message: false }));
    (form.elements.namedItem("name") as HTMLInputElement).focus({ preventScroll: true });
  };

  useEffect(() => {
    const onQuote = (e: Event) => {
      pending.current = (e as CustomEvent<{ message: string; topic: string }>).detail;
      if (formRef.current) applyQuote();
      else setStatus({ kind: "idle" }); // "thank you" screen showing: bring the form back, then fill it
    };
    window.addEventListener(QUOTE_EVENT, onQuote);
    return () => window.removeEventListener(QUOTE_EVENT, onQuote);
  }, []);

  useEffect(() => {
    if (status.kind === "idle") applyQuote();
  }, [status.kind]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const bad: Record<string, boolean> = {};
    if (!data.name?.trim()) bad.name = true;
    if (!data.phone?.trim() && !data.email?.trim()) bad.phone = true;
    if (data.email?.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email.trim())) bad.email = true;
    if (!data.message?.trim()) bad.message = true;
    setInvalid(bad);
    if (Object.keys(bad).length) {
      const msg = bad.phone
        ? "Please enter a phone number or email address so we can reply."
        : bad.email
          ? "Please check the email address."
          : "Please fill in the highlighted fields.";
      setStatus({ kind: "error", message: msg });
      // Focus the first problem field; the message itself is announced via role="alert".
      const first = ["name", "phone", "email", "message"].find((k) => bad[k]);
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "We couldn't send your message.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: (err as Error).message });
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="fade-up rounded-2xl border border-line bg-white p-8">
        <CheckCircle2 className="h-8 w-8 text-green-700" aria-hidden="true" />
        <h3 className="mt-3 text-xl font-semibold">Thank you — your enquiry has been sent</h3>
        <p className="mt-2 text-ink-muted">
          We will get back to you during business hours. For anything urgent, call{" "}
          <a href={`tel:${COMPANY.phones[0].tel}`} className="link">
            {COMPANY.phones[0].display}
          </a>
          .
        </p>
        <button type="button" className="btn-secondary mt-6" onClick={() => { startedAt.current = Date.now(); setStatus({ kind: "idle" }); }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="relative rounded-2xl border border-line bg-white p-6 sm:p-8" aria-labelledby="form-title">
      <h3 id="form-title" className="text-xl font-semibold">
        Send an enquiry
      </h3>
      <p className="mt-1 text-sm text-ink-muted">Fields marked * are required. Give us a phone number or an email address.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="text-sm font-medium text-ink">Name *</label>
          <input id="f-name" name="name" autoComplete="name" required maxLength={120} aria-invalid={!!invalid.name} className={inputClass} />
        </div>
        <div>
          <label htmlFor="f-company" className="text-sm font-medium text-ink">Company</label>
          <input id="f-company" name="company" autoComplete="organization" maxLength={160} className={inputClass} />
        </div>
        <div>
          <label htmlFor="f-phone" className="text-sm font-medium text-ink">Phone</label>
          <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} aria-invalid={!!invalid.phone} aria-describedby="contact-hint" className={inputClass} />
        </div>
        <div>
          <label htmlFor="f-email" className="text-sm font-medium text-ink">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" maxLength={200} aria-invalid={!!invalid.email || !!invalid.phone} aria-describedby="contact-hint" className={inputClass} />
        </div>
        <p id="contact-hint" className="sr-only">Enter at least a phone number or an email address.</p>
        <div className="sm:col-span-2">
          <label htmlFor="f-topic" className="text-sm font-medium text-ink">What is it about?</label>
          <select id="f-topic" name="topic" defaultValue="" className={inputClass}>
            <option value="">Choose a topic (optional)</option>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-message" className="text-sm font-medium text-ink">Your requirement *</label>
          <textarea
            id="f-message"
            name="message"
            rows={5}
            required
            maxLength={4000}
            aria-invalid={!!invalid.message}
            placeholder="e.g. 15 business laptops (Core i5, 16 GB RAM) for our Noida office, needed by next week"
            className={inputClass}
          />
        </div>
        {/* Honeypot: hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
          <label htmlFor="f-website">Website</label>
          <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status.kind === "error" && (
        <p ref={errorRef} tabIndex={-1} role="alert" className="fade-up mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message}{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="font-semibold underline">
            Message us on WhatsApp
          </a>
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary disabled:cursor-progress disabled:opacity-70" disabled={status.kind === "sending"}>
          {status.kind === "sending" && <LoaderCircle className="spinner h-4 w-4" aria-hidden="true" />}
          {status.kind === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <span className="text-sm text-ink-muted">
          Or WhatsApp{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="link">
            {COMPANY.phones[0].display}
          </a>
        </span>
      </div>
    </form>
  );
}
