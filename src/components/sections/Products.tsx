import {
  BatteryCharging,
  Cable,
  Cctv,
  Gamepad2,
  HardDrive,
  Laptop,
  Network,
  Presentation,
  Printer,
  Recycle,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PRODUCT_GROUPS } from "@/lib/site";
import { ProductDialog } from "@/components/ProductDialog";

const ICONS: Record<string, LucideIcon> = {
  computing: Laptop,
  servers: Server,
  refurbished: Recycle,
  gaming: Gamepad2,
  networking: Network,
  security: ShieldCheck,
  "racks-cabling": Cable,
  power: BatteryCharging,
  storage: HardDrive,
  surveillance: Cctv,
  printing: Printer,
  displays: Presentation,
};

const PREVIEW = 3; // product names shown on the closed card

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

        {/* Cards in a row share one height and never resize; "See all" opens the full list in a dialog.
            On phones the cards are compact (no highlight chips or brands — both are in the dialog). */}
        <div data-stagger className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {PRODUCT_GROUPS.map((group) => {
            const Icon = ICONS[group.id] ?? Laptop;
            return (
              <article
                key={group.id}
                id={group.id}
                aria-labelledby={`${group.id}-title`}
                className="lift flex flex-col rounded-2xl border border-line bg-white p-4 hover:border-brand/30 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 id={`${group.id}-title`} className="text-lg font-semibold leading-snug">
                      {group.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[0.9rem] text-ink-muted sm:line-clamp-none sm:text-[0.95rem]">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex" aria-label={`${group.title}: highlights`}>
                  {group.items.slice(0, PREVIEW).map((item) => (
                    <li
                      key={item.name}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 text-[0.8rem] text-ink-soft"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {group.brands && (
                    <p className="mt-4 hidden text-sm text-ink-muted sm:block">
                      <span className="font-semibold text-ink-soft">Brands:</span> {group.brands}
                    </p>
                  )}
                  <div className="mt-3 border-t border-line pt-2 sm:mt-4 sm:pt-3">
                    <ProductDialog id={group.id} title={group.title} count={group.items.length}>
                      <p className="text-ink-muted">{group.summary}</p>
                      {group.brands && (
                        <p className="mt-2 text-sm text-ink-muted">
                          <span className="font-semibold text-ink-soft">Brands:</span> {group.brands}
                        </p>
                      )}
                      <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <li key={item.name} className="border-l-2 border-brand-line pl-3">
                            <h4 className="font-semibold text-ink">{item.name}</h4>
                            <p className="mt-0.5 text-sm text-ink-muted">{item.detail}</p>
                          </li>
                        ))}
                      </ul>
                    </ProductDialog>
                  </div>
                </div>
              </article>
            );
          })}
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
