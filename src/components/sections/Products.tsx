import { PRODUCT_GROUPS } from "@/lib/site";

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="section border-t border-line">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Products</p>
          <h2 id="products-title" className="h2">
            Everything your business runs on, from servers to printers
          </h2>
          <p className="lead">
            We supply individual units as well as complete setups and bulk orders for offices, data rooms, labs and new
            sites, and deliver across India. Tell us what you need and we will recommend suitable models and quote them.
          </p>
        </div>

        <div data-stagger className="mt-12 divide-y divide-line border-y border-line">
          {PRODUCT_GROUPS.map((group) => (
            <article key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="grid gap-6 py-9 md:grid-cols-[17rem_1fr] md:gap-10">
              <div>
                <h3 id={`${group.id}-title`} className="text-xl font-semibold">
                  {group.title}
                </h3>
                <p className="mt-2 text-ink-muted">{group.summary}</p>
                {group.brands && (
                  <p className="mt-3 text-sm text-ink-muted">
                    <span className="font-semibold text-ink-soft">Brands:</span> {group.brands}
                  </p>
                )}
              </div>
              <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.name} className="border-l-2 border-brand-line pl-4 transition-colors duration-ui hover:border-brand">
                    <h4 className="font-semibold text-ink">{item.name}</h4>
                    <p className="mt-1 text-[0.95rem] text-ink-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-ink-soft">
          Need specification sheets or bulk pricing?{" "}
          <a href="#contact" className="link">
            Send us your requirement
          </a>
          .
        </p>
      </div>
    </section>
  );
}
