import { Building, Building2, Factory, Globe, Landmark, ShoppingCart, Store, Truck, type LucideIcon } from "lucide-react";
import { INDUSTRIES, SOLUTIONS } from "@/lib/site";

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  manufacturing: Factory,
  banking: Landmark,
  retail: Store,
  fmcg: ShoppingCart,
  "real-estate": Building2,
  mnc: Globe,
  government: Building,
};

export function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="section border-t border-line bg-paper">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Solutions</p>
          <h2 id="solutions-title" className="h2">
            Complete IT solutions for enterprises and growing companies
          </h2>
          <p className="lead">
            Most companies need more than a single product. We plan, supply, install and support the whole setup — from the
            firewall and switches to the laptops on every desk — so one partner is accountable for all of it.
          </p>
        </div>

        <div data-stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <article key={s.title} className="bg-white p-6 transition-colors duration-ui hover:bg-brand-light/60 sm:p-7">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold">Industries we serve</h3>
          <p className="mt-1 text-ink-muted">What companies in each sector typically buy from us.</p>
        </div>
        <ul data-stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {INDUSTRIES.map((ind) => {
            const Icon = INDUSTRY_ICONS[ind.id] ?? Building2;
            return (
              <li key={ind.id} className="lift rounded-2xl border border-line bg-white p-5 hover:border-brand/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="mt-3 font-semibold leading-snug text-ink">{ind.name}</h4>
                <p className="mt-1 text-sm text-ink-muted">{ind.text}</p>
              </li>
            );
          })}
          <li className="lift rounded-2xl bg-brand p-5 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15" aria-hidden="true">
              <Truck className="h-5 w-5" />
            </span>
            <h4 className="mt-3 font-semibold leading-snug text-white">Delivering across India</h4>
            <p className="mt-1 text-sm text-white/85">
              We serve companies across Delhi NCR — New Delhi, Noida, Greater Noida, Gurugram, Faridabad and Ghaziabad —
              and deliver anywhere in India.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
