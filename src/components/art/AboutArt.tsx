import { BadgeCheck, Settings2, Wrench, type LucideIcon } from "lucide-react";

// About section illustration: a network/server rack with status lights, surrounded by the
// three things done under one roof. Lights blink only while on screen (see <Reveal />).

const UNITS = [0, 1, 2, 3, 4, 5];
const BADGES: { x: number; y: number; label: string; Icon: LucideIcon }[] = [
  { x: 312, y: 70, label: "Sourced genuine", Icon: BadgeCheck },
  { x: 324, y: 178, label: "Configured & installed", Icon: Settings2 },
  { x: 312, y: 286, label: "Repaired in-house", Icon: Wrench },
];

export function AboutArt() {
  return (
    <svg
      data-ambient
      viewBox="0 0 560 360"
      role="img"
      aria-label="Illustration of a network rack, with sourcing, configuration and installation, and in-house repair handled by one team."
      className="h-auto w-full"
    >
      <rect width="560" height="360" fill="#f7f8fa" />
      <circle cx="170" cy="180" r="150" fill="#eaf1fa" />

      {/* Rack */}
      <rect x="92" y="40" width="160" height="290" rx="14" fill="#0b2f5b" />
      <rect x="104" y="52" width="136" height="266" rx="8" fill="#123f74" />
      {UNITS.map((u) => {
        const y = 62 + u * 42;
        return (
          <g key={u}>
            <rect x="112" y={y} width="120" height="32" rx="5" fill={u === 2 ? "#0056b3" : "#1d4f8a"} />
            {[0, 1, 2, 3, 4, 5, 6].map((p) => (
              <rect key={p} x={120 + p * 11} y={y + 11} width="6" height="10" rx="1.5" fill="#0b2f5b" opacity="0.7" />
            ))}
            <circle className="led" style={{ animationDelay: `${(u * 0.37) % 1.6}s` }} cx="206" cy={y + 16} r="3.5" fill="#4ade80" />
            <circle
              className="led"
              style={{ animationDelay: `${(u * 0.61 + 0.4) % 1.9}s` }}
              cx="219"
              cy={y + 16}
              r="3.5"
              fill={u % 3 === 0 ? "#7dd3fc" : "#4ade80"}
            />
          </g>
        );
      })}

      {/* Cables to the badges */}
      <g fill="none" stroke="#c9daf0" strokeWidth="2.5" strokeLinecap="round">
        <path d="M252 95 C275 95 278 70 300 70" />
        <path d="M252 178 H312" />
        <path d="M252 262 C275 262 278 286 300 286" />
      </g>

      {/* Badges */}
      {BADGES.map(({ x, y, label, Icon }) => {
        const w = 56 + label.length * 7.6;
        return (
          <g key={label}>
            <rect x={x - 12} y={y - 22 + 4} width={w} height="44" rx="22" fill="#0f172a" opacity="0.05" />
            <rect x={x - 12} y={y - 22} width={w} height="44" rx="22" fill="#ffffff" stroke="#e3e6ea" />
            <circle cx={x + 10} cy={y} r="13" fill="#eaf1fa" />
            <Icon x={x + 1} y={y - 9} width={18} height={18} color="#0056b3" strokeWidth={2} aria-hidden="true" />
            <text x={x + 32} y={y + 5} fontSize="14" fontWeight="600" fill="#1f2328" fontFamily="var(--font-sans), system-ui, sans-serif">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
