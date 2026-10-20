import { DeliveryArt } from "@/components/art/DeliveryArt";
import { REASONS } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Why Insoft</p>
          <h2 id="why-title" className="h2">
            Why companies keep buying from us
          </h2>
          <figure className="mt-10 hidden overflow-hidden rounded-2xl border border-line lg:block">
            <DeliveryArt />
          </figure>
        </div>
        <ol data-stagger className="grid gap-y-8 self-start">
          {REASONS.map((r, i) => (
            <li key={r.title} className="grid grid-cols-[2.5rem_1fr] gap-x-2">
              <span className="text-lg font-semibold tabular-nums text-brand" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-ink-muted">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
