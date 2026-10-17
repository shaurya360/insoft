import Image from "next/image";
import { BRANDS } from "@/lib/logos";

export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="border-b border-line">
      <div className="container-page py-10">
        <h2 id="brands-title" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
          Brands we deal in
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {BRANDS.map((b) => (
            <li key={b.name} className="flex h-10 w-24 items-center justify-center sm:w-28">
              <Image
                src={b.src}
                alt={b.name}
                width={b.width}
                height={b.height}
                sizes="112px"
                className="max-h-10 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
