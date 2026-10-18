import { RepairArt } from "@/components/art/RepairArt";
import { Check } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/lib/site";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section bg-paper">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Repairs</p>
          <h2 id="services-title" className="h2">
            Laptop and computer repairs in Nehru Place
          </h2>
          <p className="lead">
            Our certified technicians diagnose and repair laptops and desktops in-house, from screen and battery
            replacements to motherboard-level faults.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book a repair
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-secondary">
              WhatsApp us
            </a>
          </div>
          <figure className="mt-10 hidden overflow-hidden rounded-2xl border border-line lg:block">
            <RepairArt />
          </figure>
        </div>

        <ul data-stagger className="divide-y divide-line self-start rounded-2xl border border-line bg-white">
          {SERVICES.map((s) => (
            <li key={s.name} className="flex gap-4 p-5 sm:p-6">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-ink-muted">{s.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
