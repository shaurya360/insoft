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

export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="border-b border-line">
      <div className="container-page py-10">
        <h2 id="brands-title" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
          Brands we deal in
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {BRANDS.map((b) => (
            <li key={b.name} className="flex h-10 items-center justify-center">
              <Image
                src={b.src}
                alt={b.name}
                width={b.width}
                height={b.height}
                sizes="180px"
                style={{ height: logoHeight(b) }}
                className="w-auto max-w-[9rem] object-contain sm:max-w-[10rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
