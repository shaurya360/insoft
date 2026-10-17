import { SECTORS, SOLUTIONS } from "@/lib/site";

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

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <article key={s.title} className="bg-white p-6 sm:p-7">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Industries we serve</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SECTORS.map((s) => (
                <li key={s} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Where we deliver</h3>
            <p className="mt-3 text-ink-muted">
              From our office in Nehru Place we serve companies across Delhi NCR — New Delhi, Noida, Greater Noida,
              Gurugram, Faridabad and Ghaziabad — and deliver to businesses anywhere in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
