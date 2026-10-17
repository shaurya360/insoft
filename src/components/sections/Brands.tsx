import Image from "next/image";
import { BRANDS, type Logo } from "@/lib/logos";

// Wide wordmarks are drawn shorter than compact marks so all logos look a similar size.
function logoHeight(l: Logo) {
  const ratio = l.width / l.height;
  if (ratio > 5) return 20;
  if (ratio > 3.2) return 26;
  if (ratio > 1.6) return 34;
  return 40;
}

function LogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center gap-x-14 pr-14 ${duplicate ? "marquee-dup" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {BRANDS.map((b) => (
        <li key={b.name} className="flex h-10 shrink-0 items-center justify-center">
          <Image
            src={b.src}
            alt={duplicate ? "" : b.name}
            width={b.width}
            height={b.height}
            sizes="180px"
            style={{ height: logoHeight(b) }}
            className="w-auto max-w-[10rem] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="border-b border-line">
      <div className="py-10">
        <h2 id="brands-title" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
          Brands we deal in
        </h2>
        {/* The list is rendered twice so the strip can loop seamlessly; the copy is hidden from screen readers. */}
        <div className="marquee mt-7 overflow-hidden">
          <div className="marquee-track flex w-max">
            <LogoList />
            <LogoList duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
