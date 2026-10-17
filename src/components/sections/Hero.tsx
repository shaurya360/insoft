import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, FIGURES, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-line bg-paper">
      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Nehru Place, New Delhi</p>
          <h1 id="hero-title" className="mt-3 text-[2rem] font-semibold leading-[1.15] sm:text-[2.6rem]">
            Complete IT solutions provider for enterprises and companies in Delhi
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            Insoft Technology is a complete IT solutions provider for enterprises and companies, specialising in bulk
            orders — servers, workstations, new, refurbished and gaming laptops, desktops, networking, firewalls, racks,
            UPS, CCTV and printers from Dell, HP, Lenovo, Apple and other leading brands, with in-house repairs and
            delivery across India.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#bulk-orders" className="btn-primary">
              Get a bulk quotation
            </a>
            <a href={`tel:${COMPANY.phones[0].tel}`} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {COMPANY.phones[0].display}
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-line border-y border-line">
            {FIGURES.map((f) => (
              <div key={f.label} className="flex flex-col px-3 py-4 first:pl-0 sm:px-5">
                <dt className="text-sm text-ink-muted">{f.label}</dt>
                <dd className="order-first text-2xl font-semibold text-ink sm:text-[1.75rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside aria-labelledby="visit-title" className="rounded-lg border border-line bg-white p-6 sm:p-7">
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
