import { MessageCircle } from "lucide-react";
import { BULK, WHATSAPP_URL } from "@/lib/site";

export function BulkOrders() {
  return (
    <section id="bulk-orders" aria-labelledby="bulk-title" className="section bg-brand text-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Our specialisation</p>
          <h2 id="bulk-title" className="mt-3 text-[1.75rem] font-semibold leading-tight text-white sm:text-[2.1rem]">
            We specialise in bulk and corporate orders — from a batch of laptops to a complete office
          </h2>
          <p className="mt-4 text-lg text-white/85">
            {BULK.uses}. Need just one or two units? Small orders are equally welcome. Send your quantities and
            specifications and we will return a written quotation with pricing,
            delivery time and payment terms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-5 py-3 font-semibold text-brand transition-colors hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a bulk quotation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/60 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp your list
            </a>
          </div>
        </div>
        <ul className="grid gap-px self-start overflow-hidden rounded-lg bg-white/20 sm:grid-cols-2">
          {BULK.points.map((p) => (
            <li key={p.title} className="bg-brand p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1.5 text-white/85">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
