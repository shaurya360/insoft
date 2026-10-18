import { ChevronDown } from "lucide-react";
import { COMPANY, FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section border-t border-line">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="h2">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-ink-muted">
            Can&apos;t find your answer? Call{" "}
            <a href={`tel:${COMPANY.phones[0].tel}`} className="link">
              {COMPANY.phones[0].display}
            </a>{" "}
            or{" "}
            <a href="#contact" className="link">
              send us a message
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="faq group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                <h3 className="text-[1.05rem] font-medium">{f.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-ink-muted transition-[transform,color] duration-ui group-open:rotate-180 group-open:text-brand" aria-hidden="true" />
              </summary>
              <p className="pb-5 pr-8 text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
