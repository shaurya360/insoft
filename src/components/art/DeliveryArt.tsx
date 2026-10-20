import { BadgeCheck, Laptop, Truck, Zap, type LucideIcon } from "lucide-react";
import { COMPANY } from "@/lib/site";

// "Why us" illustration: a bulk order moving from quotation to delivery, in front of its
// GST invoice. The truck, progress line and step checks animate only while on screen.

const FONT = "var(--font-sans), system-ui, sans-serif";
const STEPS = ["Quoted", "Packed", "Dispatched", "Delivered"];
const TRACK = { x: 80, y: 222, length: 270 };
const CHIPS: { x: number; y: number; label: string; Icon: LucideIcon }[] = [
  { x: 24, y: 24, label: "Manufacturer warranty", Icon: BadgeCheck },
  { x: 352, y: 18, label: "Same-day delivery", Icon: Zap },
  { x: 318, y: 302, label: "Pan-India delivery", Icon: Truck },
];

export function DeliveryArt() {
  return (
    <svg
      data-ambient
      viewBox="0 0 560 360"
      role="img"
      aria-label="Illustration of a bulk laptop order being tracked from quotation to delivery, with its GST invoice."
      className="h-auto w-full"
    >
      <rect width="560" height="360" fill="#ffffff" />
      <ellipse cx="280" cy="190" rx="236" ry="140" fill="#eaf1fa" />

      {/* GST invoice, behind the order card */}
      <g transform="rotate(4 458 172)">
        <rect x="382" y="72" width="152" height="200" rx="10" fill="#0f172a" opacity="0.05" transform="translate(0 4)" />
        <rect x="382" y="72" width="152" height="200" rx="10" fill="#ffffff" stroke="#e3e6ea" />
        <text x="400" y="100" fontSize="12" fontWeight="700" fill="#1f2328" fontFamily={FONT}>
          Tax invoice
        </text>
        <text x="400" y="116" fontSize="8.5" fill="#5b6470" fontFamily={FONT}>
          GSTIN {COMPANY.gstin}
        </text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="400" y={134 + i * 20} width="70" height="7" rx="3.5" fill="#e3e6ea" />
            <rect x="488" y={134 + i * 20} width="28" height="7" rx="3.5" fill="#e3e6ea" />
          </g>
        ))}
        <line x1="400" y1="200" x2="516" y2="200" stroke="#e3e6ea" />
        <text x="400" y="218" fontSize="10" fontWeight="600" fill="#5b6470" fontFamily={FONT}>
          CGST + SGST
        </text>
        <rect x="488" y="211" width="28" height="7" rx="3.5" fill="#c9daf0" />
        <text x="400" y="246" fontSize="11" fontWeight="700" fill="#1f2328" fontFamily={FONT}>
          Total
        </text>
        <rect x="476" y="238" width="40" height="9" rx="4.5" fill="#0056b3" />
      </g>

      {/* Order card */}
      <rect x="40" y="100" width="350" height="180" rx="14" fill="#0f172a" opacity="0.05" transform="translate(0 5)" />
      <rect x="40" y="100" width="350" height="180" rx="14" fill="#ffffff" stroke="#e3e6ea" />
      <rect x="62" y="120" width="38" height="38" rx="10" fill="#eaf1fa" />
      <Laptop x={71} y={129} width={20} height={20} color="#0056b3" strokeWidth={2} aria-hidden="true" />
      <text x="114" y="135" fontSize="14" fontWeight="700" fill="#1f2328" fontFamily={FONT}>
        Bulk order
      </text>
      <text x="114" y="153" fontSize="11.5" fill="#5b6470" fontFamily={FONT}>
        25 × business laptops, configured
      </text>

      {/* Progress: line fills from step to step, the truck drives along it */}
      <rect x={TRACK.x} y={TRACK.y - 3} width={TRACK.length} height="6" rx="3" fill="#eaf1fa" />
      <rect className="trk-fill" x={TRACK.x} y={TRACK.y - 3} width={TRACK.length} height="6" rx="3" fill="#0056b3" />
      <g className="trk-truck">
        <Truck x={TRACK.x - 12} y={TRACK.y - 38} width={24} height={24} color="#0056b3" strokeWidth={2} aria-hidden="true" />
      </g>
      {STEPS.map((s, i) => {
        const cx = TRACK.x + (TRACK.length / (STEPS.length - 1)) * i;
        return (
          <g key={s}>
            <circle cx={cx} cy={TRACK.y} r="9" fill="#ffffff" stroke="#c9daf0" strokeWidth="2" />
            <g className={`trk-step trk-step-${i}`}>
              <circle cx={cx} cy={TRACK.y} r="9" fill="#16a34a" />
              <path
                d={`M${cx - 4} ${TRACK.y} l3 3 l5 -6`}
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text x={cx} y={TRACK.y + 28} fontSize="11" textAnchor="middle" fill="#5b6470" fontFamily={FONT}>
              {s}
            </text>
          </g>
        );
      })}

      {/* Floating chips */}
      {CHIPS.map(({ x, y, label, Icon }) => {
        const w = 52 + label.length * 7.2;
        return (
          <g key={label}>
            <rect x={x} y={y + 4} width={w} height="40" rx="20" fill="#0f172a" opacity="0.05" />
            <rect x={x} y={y} width={w} height="40" rx="20" fill="#ffffff" stroke="#e3e6ea" />
            <Icon x={x + 14} y={y + 11} width={18} height={18} color="#0056b3" strokeWidth={2} aria-hidden="true" />
            <text x={x + 40} y={y + 25} fontSize="13" fontWeight="600" fill="#1f2328" fontFamily={FONT}>
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
