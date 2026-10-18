"use client";

import { useState } from "react";
import {
  BatteryCharging,
  Cctv,
  ClipboardList,
  Laptop,
  MessageCircle,
  Minus,
  Monitor,
  Network,
  Plus,
  Printer,
  Recycle,
  Server,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { COMPANY, QUOTE_ITEMS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  laptops: Laptop,
  desktops: Monitor,
  refurbished: Recycle,
  servers: Server,
  switches: Network,
  "access-points": Wifi,
  firewall: ShieldCheck,
  ups: BatteryCharging,
  cctv: Cctv,
  printers: Printer,
};
const MAX = 9999;

// Event the contact form listens for to prefill its message (see ContactForm)
export const QUOTE_EVENT = "insoft:quote";

export function QuoteBuilder() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const set = (id: string, n: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(MAX, Number.isFinite(n) ? Math.round(n) : 0)) }));

  const chosen = QUOTE_ITEMS.filter((i) => (qty[i.id] ?? 0) > 0);
  const units = chosen.reduce((s, i) => s + qty[i.id], 0);
  const list = chosen.map((i) => `- ${qty[i.id]} × ${i.name}`).join("\n");
  const message = `I'd like a quotation for:\n${list}`;
  const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hello Insoft Technology, ${message}`)}`;

  const toForm = () => {
    window.dispatchEvent(new CustomEvent(QUOTE_EVENT, { detail: { message, topic: "Bulk order" } }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rounded-3xl bg-white p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Build your quote</h3>
          <p className="mt-1 text-sm text-ink-muted">Choose what you need and how many — we&apos;ll reply with prices and delivery time.</p>
        </div>
        {chosen.length > 0 && (
          <button type="button" onClick={() => setQty({})} className="link self-start text-sm sm:self-auto">
            Clear all
          </button>
        )}
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {QUOTE_ITEMS.map((item) => {
          const Icon = ICONS[item.id] ?? Laptop;
          const n = qty[item.id] ?? 0;
          const on = n > 0;
          return (
            <li
              key={item.id}
              className={`flex flex-col rounded-2xl border p-3 transition-colors duration-micro ${
                on ? "border-brand bg-brand-light" : "border-line bg-white hover:border-brand/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 shrink-0 transition-colors duration-micro ${on ? "text-brand" : "text-ink-muted"}`} aria-hidden="true" />
                <span className="text-sm font-semibold leading-tight">{item.name}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-1">
                <button
                  type="button"
                  onClick={() => set(item.id, n - 1)}
                  disabled={!on}
                  aria-label={`Remove one: ${item.name}`}
                  className="stepper"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={MAX}
                  value={n === 0 ? "" : n}
                  placeholder="0"
                  aria-label={`${item.name} quantity`}
                  onChange={(e) => set(item.id, e.target.value === "" ? 0 : Number(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  className="field w-14 rounded-lg border border-transparent bg-transparent py-1 text-center text-base font-semibold tabular-nums text-ink [appearance:textfield] focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button type="button" onClick={() => set(item.id, n + 1)} aria-label={`Add one: ${item.name}`} className="stepper">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-ink-muted" aria-live="polite">
          {chosen.length === 0 ? (
            "Nothing selected yet."
          ) : (
            <>
              <span className="font-semibold text-ink">
                {units.toLocaleString("en-IN")} {units === 1 ? "unit" : "units"}
              </span>{" "}
              across {chosen.length} {chosen.length === 1 ? "product" : "products"}
            </>
          )}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {chosen.length ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener"
              className="btn whitespace-nowrap bg-[#25D366] text-white shadow-[0_8px_22px_-10px_rgba(37,211,102,0.9)] hover:bg-[#1fb957]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send list on WhatsApp
            </a>
          ) : (
            <button type="button" disabled className="btn whitespace-nowrap bg-[#25D366] text-white disabled:opacity-50">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send list on WhatsApp
            </button>
          )}
          <button type="button" onClick={toForm} disabled={chosen.length === 0} className="btn-primary whitespace-nowrap disabled:opacity-50">
            <ClipboardList className="h-4 w-4" aria-hidden="true" />
            Add to enquiry form
          </button>
        </div>
      </div>
    </div>
  );
}
