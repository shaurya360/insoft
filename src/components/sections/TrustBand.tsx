import { BadgeCheck, ReceiptText, Star, Truck, Wrench, Zap, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { COMPANY, TRUST_POINTS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  gst: ReceiptText,
  warranty: BadgeCheck,
  "same-day": Zap,
  "pan-india": Truck,
  repairs: Wrench,
};

const STATS = [
  { value: 20, suffix: "+", label: "years in Nehru Place" },
  { value: 5000, suffix: "+", label: "customers served" },
  { value: 100, suffix: "%", label: "certified technicians" },
];

export function TrustBand() {
  return (
    <section aria-label="Why customers trust us" className="border-b border-line bg-white">
      <div className="container-page py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="mt-1 text-sm text-ink-muted">{s.label}</dt>
              <dd className="order-first text-[clamp(1.9rem,1.5rem+1.6vw,2.6rem)] font-semibold leading-none tracking-tight text-ink">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
          <div className="flex flex-col">
            <dt className="mt-1 text-sm text-ink-muted">
              <a href={COMPANY.googleProfileUrl} target="_blank" rel="noopener" className="link text-ink-muted">
                rating on Google
              </a>
            </dt>
            <dd className="order-first flex items-center gap-2 text-[clamp(1.9rem,1.5rem+1.6vw,2.6rem)] font-semibold leading-none tracking-tight text-ink">
              <CountUp value={COMPANY.googleRating} decimals={1} />
              <Star className="h-[0.7em] w-[0.7em] fill-amber-400 text-amber-400" aria-label="out of 5 stars" />
            </dd>
          </div>
        </dl>

        <ul className="mt-10 grid gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-5">
          {TRUST_POINTS.map((p) => {
            const Icon = ICONS[p.id] ?? BadgeCheck;
            return (
              <li key={p.id} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand" aria-hidden="true">
                  <Icon className="h-[1.1rem] w-[1.1rem]" />
                </span>
                <div>
                  <p className="font-semibold leading-snug text-ink">{p.title}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{p.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
