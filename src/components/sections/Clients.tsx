import Image from "next/image";
import { CLIENTS, type Logo } from "@/lib/logos";

// Square-ish logos are drawn taller and wide wordmarks shorter, so every logo
// has a similar visual weight without cropping or distortion.
function logoHeight(l: Logo) {
  const ratio = l.width / l.height;
  if (ratio < 1.4) return 68;
  if (ratio < 2.6) return 54;
  return 44;
}

export function Clients() {
  if (CLIENTS.length === 0) return null;
  return (
    <section id="clients" aria-labelledby="clients-title" className="section border-y border-line bg-paper">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Clients</p>
          <h2 id="clients-title" className="h2">
            Organisations we have worked with
          </h2>
          <p className="lead">
            A selection of companies we have supplied and supported, across manufacturing, banking and financial
            services, retail, FMCG, real estate, MNCs and government organisations.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border-l border-t border-line bg-white sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((c) => (
            <li key={c.name} className="group flex h-28 items-center justify-center border-b border-r border-line px-5 sm:h-32">
              <Image
                src={c.src}
                alt={c.name}
                width={c.width}
                height={c.height}
                sizes="(min-width: 1024px) 200px, 45vw"
                style={{ height: logoHeight(c) }}
                className="w-auto max-w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
