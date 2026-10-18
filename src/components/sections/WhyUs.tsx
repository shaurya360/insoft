import { REASONS } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Why Insoft</p>
          <h2 id="why-title" className="h2">
            Why companies keep buying from us
          </h2>
        </div>
        <ol data-stagger className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
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
