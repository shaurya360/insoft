import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, FIGURES, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="blob blob-a -left-28 -top-36 h-[34rem] w-[34rem]" />
        <span className="blob blob-b right-[-10rem] top-4 h-[30rem] w-[30rem]" />
        <span className="blob blob-c bottom-[-12rem] left-1/3 h-[26rem] w-[36rem]" />
      </div>
      <div className="hero-scroll container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow hero-in">Nehru Place, New Delhi</p>
          <h1 id="hero-title" className="hero-title display mt-3">
            Complete IT solutions provider for enterprises and companies in Delhi
          </h1>
          <p className="hero-in mt-5 max-w-2xl text-lg text-ink-muted [--d:90ms]">
            Insoft Technology is a complete IT solutions provider for enterprises and companies — servers, workstations,
            new, refurbished and gaming laptops, desktops, networking, firewalls, racks, UPS, CCTV and printers from Dell,
            HP, Lenovo, Apple and other leading brands. We specialise in bulk orders and are just as happy to supply a
            single unit, with in-house repairs and delivery across India.
          </p>
          <div className="hero-in mt-8 flex flex-col gap-3 [--d:170ms] sm:flex-row">
            <a href="#contact" className="btn-primary">
              Request a quotation
            </a>
            <a href={`tel:${COMPANY.phones[0].tel}`} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {COMPANY.phones[0].display}
            </a>
          </div>

          <dl className="hero-in mt-10 grid [--d:250ms] max-w-xl grid-cols-3 divide-x divide-line border-y border-line">
            {FIGURES.map((f) => (
              <div key={f.label} className="flex flex-col px-3 py-4 first:pl-0 sm:px-5">
                <dt className="text-sm text-ink-muted">{f.label}</dt>
                <dd className="order-first text-2xl font-semibold text-ink sm:text-[1.75rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside aria-labelledby="visit-title" className="hero-in lift rounded-3xl border border-white bg-white/90 shadow-[0_20px_50px_-30px_rgba(0,86,179,0.45)] [--d:220ms] p-6 sm:p-7">
          <h2 id="visit-title" className="text-lg font-semibold">
            Visit or contact our office
          </h2>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {COMPANY.address.line1}, {COMPANY.address.line2}
                <br />
                {COMPANY.address.city} – {COMPANY.address.postalCode}
                <br />
                <a href={COMPANY.mapsUrl} className="link text-sm" target="_blank" rel="noopener">
                  Get directions
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="flex flex-col">
                {COMPANY.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-brand">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-brand">
                WhatsApp {COMPANY.phones[0].display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {COMPANY.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
