import Image from "next/image";
import { COMPANY, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Image src="/insoft-technology-logo.png" alt="Insoft Technology" width={364} height={176} className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-ink-muted">
            IT hardware supply, repairs and AMC for businesses and individuals, from Nehru Place, New Delhi.
          </p>
          <p className="mt-3 text-sm text-ink-muted">GSTIN: {COMPANY.gstin}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">On this page</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink-soft hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Contact</h2>
          <p className="mt-4 text-ink-soft">
            {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city} – {COMPANY.address.postalCode}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-3">
            {COMPANY.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="text-ink-soft hover:text-brand">
                {p.display}
              </a>
            ))}
          </p>
          <p className="mt-2">
            <a href={`mailto:${COMPANY.email}`} className="text-ink-soft hover:text-brand">
              {COMPANY.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-ink-muted">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
