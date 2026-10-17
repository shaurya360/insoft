import { STEPS } from "@/lib/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section">
      <div className="container-page">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title" className="h2">
          From requirement to installation
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="border-t-2 border-brand pt-5">
              <p className="text-sm font-semibold text-brand">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
