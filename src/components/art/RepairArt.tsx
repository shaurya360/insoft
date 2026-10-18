import { Cpu, HardDrive, ShieldCheck, type LucideIcon } from "lucide-react";

// Repairs section illustration: an open laptop running a diagnostic, with the kinds of
// work done in-house. Progress bars and the check marks animate only while on screen.

const CHECKS = ["Battery", "Display", "Motherboard", "Storage"];
const CHIPS: { x: number; y: number; label: string; Icon: LucideIcon }[] = [
  { x: 24, y: 40, label: "Chip-level repair", Icon: Cpu },
  { x: 330, y: 300, label: "SSD & RAM upgrades", Icon: HardDrive },
  { x: 352, y: 34, label: "Virus removal", Icon: ShieldCheck },
];

export function RepairArt() {
  return (
    <svg
      data-ambient
      viewBox="0 0 560 360"
      role="img"
      aria-label="Illustration of a laptop running a hardware diagnostic: battery, display, motherboard and storage checks."
      className="h-auto w-full"
    >
      <rect width="560" height="360" fill="#ffffff" />
      <ellipse cx="280" cy="200" rx="230" ry="140" fill="#eaf1fa" />

      {/* Laptop */}
      <rect x="130" y="70" width="300" height="190" rx="14" fill="#1f2328" />
      <rect x="142" y="82" width="276" height="166" rx="6" fill="#ffffff" />
      <path d="M100 262 H460 L440 288 H120 Z" fill="#c9daf0" />
      <rect x="250" y="262" width="60" height="6" rx="3" fill="#a9c2e3" />

      {/* Diagnostic screen */}
      <text x="160" y="108" fontSize="13" fontWeight="700" fill="#1f2328" fontFamily="var(--font-sans), system-ui, sans-serif">
        Hardware diagnostic
      </text>
      {CHECKS.map((c, i) => {
        const y = 128 + i * 28;
        return (
          <g key={c}>
            <text x="160" y={y + 10} fontSize="11.5" fill="#5b6470" fontFamily="var(--font-sans), system-ui, sans-serif">
              {c}
            </text>
            <rect x="250" y={y + 2} width="120" height="9" rx="4.5" fill="#eaf1fa" />
            <rect
              className="diag-bar"
              style={{ animationDelay: `${i * 0.5}s` }}
              x="250"
              y={y + 2}
              width="120"
              height="9"
              rx="4.5"
              fill="#0056b3"
            />
            <g className="diag-check" style={{ animationDelay: `${i * 0.5}s` }}>
              <circle cx="390" cy={y + 6.5} r="8" fill="#16a34a" />
              <path d={`M386 ${y + 6.5} l3 3 l5 -6`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
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
            <text x={x + 40} y={y + 25} fontSize="13" fontWeight="600" fill="#1f2328" fontFamily="var(--font-sans), system-ui, sans-serif">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
