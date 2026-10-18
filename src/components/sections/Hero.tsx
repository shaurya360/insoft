import { Clock, MapPin, Phone } from "lucide-react";
import { HeroDiagram } from "@/components/art/HeroDiagram";
import { COMPANY } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="blob blob-a -left-28 -top-36 h-[34rem] w-[34rem]" />
        <span className="blob blob-b right-[-10rem] top-4 h-[30rem] w-[30rem]" />
        <span className="blob blob-c bottom-[-12rem] left-1/3 h-[26rem] w-[36rem]" />
      </div>
      <div className="hero-scroll container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow hero-in">Nehru Place, New Delhi</p>
          <h1 id="hero-title" className="hero-title display mt-3">
            Complete IT solutions provider for enterprises and companies in Delhi
          </h1>
          <p className="hero-slide mt-5 max-w-2xl text-lg text-ink-muted [--d:90ms]">
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

          <ul className="hero-in mt-8 flex flex-col gap-2 text-[0.95rem] text-ink-soft [--d:250ms] sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city} ·{" "}
                <a href={COMPANY.mapsUrl} className="link" target="_blank" rel="noopener">
                  Directions
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>Mon–Sat, 9 am – 7 pm</span>
            </li>
          </ul>
        </div>

        <figure className="hero-in relative [--d:200ms]">
          <div className="rounded-[2rem] border border-white bg-white/70 p-2 shadow-[0_24px_60px_-34px_rgba(0,86,179,0.5)] sm:p-3">
            <HeroDiagram />
          </div>
          <figcaption className="mt-3 text-center text-sm text-ink-muted">
            One partner for the whole setup — supply, installation and support
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
