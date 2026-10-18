import { AboutArt } from "@/components/art/AboutArt";
import { COMPANY } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">About us</p>
          <h2 id="about-title" className="h2">
            A Nehru Place technology partner for more than 20 years
          </h2>
          <div className="mt-5 space-y-4 text-ink-soft">
            <p>
              Insoft Technology is a Delhi-based IT hardware supplier that started in Nehru Place, the city&apos;s main
              computer market. For over two decades we have supplied and supported computers, networks and office
              technology for corporate, industrial and government organisations, as well as individual buyers.
            </p>
            <p>
              We handle sourcing, configuration, installation and repairs under one roof. That means your
              procurement and IT teams deal with a single accountable partner — from the first quotation to repairs years
              later — instead of coordinating several vendors.
            </p>
            <p>
              Every sale is billed with a GST invoice (GSTIN {COMPANY.gstin}), and every product carries the
              manufacturer&apos;s warranty.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-line">
          <AboutArt />
        </figure>
      </div>
    </section>
  );
}
