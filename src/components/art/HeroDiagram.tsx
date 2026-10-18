import {
  BatteryCharging,
  Cctv,
  Cloud,
  Laptop,
  Network,
  Printer,
  Server,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

// "Complete office setup" diagram for the hero: internet → firewall → switch, which
// links laptops, servers, Wi-Fi, CCTV and printers, with a UPS backing up the servers.
// Data packets travel along the cables (SVG animateMotion). Animation is paused while
// off screen and for reduced motion (see <Reveal />, which watches [data-ambient]).

type Node = { x: number; y: number; label: string; Icon: LucideIcon; accent?: boolean };

const NODES: Node[] = [
  { x: 280, y: 52, label: "Internet", Icon: Cloud },
  { x: 280, y: 152, label: "Firewall", Icon: ShieldCheck, accent: true },
  { x: 280, y: 252, label: "Switch", Icon: Network, accent: true },
  { x: 86, y: 252, label: "Laptops", Icon: Laptop },
  { x: 474, y: 252, label: "Servers", Icon: Server },
  { x: 86, y: 392, label: "Wi-Fi", Icon: Wifi },
  { x: 216, y: 392, label: "CCTV", Icon: Cctv },
  { x: 346, y: 392, label: "Printers", Icon: Printer },
  { x: 474, y: 392, label: "UPS", Icon: BatteryCharging },
];

// Cable routes (also the paths the packets follow)
const ROUTES = {
  toLaptops: "M280 52 V252 H86",
  toServers: "M280 52 V252 H474",
  toWifi: "M280 252 V322 H86 V392",
  toCctv: "M280 252 V322 H216 V392",
  toPrinters: "M280 252 V322 H346 V392",
  power: "M474 392 V252",
};

const PACKETS: { route: keyof typeof ROUTES; dur: number; begin: number; color?: string }[] = [
  { route: "toLaptops", dur: 3.2, begin: 0 },
  { route: "toServers", dur: 3.2, begin: 1.1 },
  { route: "toWifi", dur: 2.6, begin: 0.6 },
  { route: "toCctv", dur: 2.6, begin: 1.7 },
  { route: "toPrinters", dur: 2.6, begin: 2.4 },
  { route: "toLaptops", dur: 3.2, begin: 2.1 },
  { route: "power", dur: 1.8, begin: 0.3, color: "#16a34a" },
];

const W = 110;
const H = 82;

export function HeroDiagram() {
  return (
    <svg
      data-ambient
      viewBox="0 0 560 450"
      role="img"
      aria-label="Diagram of a complete office setup: the internet connects through a firewall to a network switch, which links laptops, servers, Wi-Fi, CCTV and printers, with a UPS backing up the servers."
      className="h-auto w-full"
    >
      {/* Cables */}
      <g fill="none" stroke="#c9daf0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M280 52 V252" />
        <path d="M86 252 H474" />
        <path d="M280 252 V322 M86 322 H346 M86 322 V392 M216 322 V392 M346 322 V392" />
      </g>
      <path d={ROUTES.power} fill="none" stroke="#86efac" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" />

      {/* Data packets */}
      <g>
        {PACKETS.map((p, i) => (
          <circle key={i} r="4.5" fill={p.color ?? "#0056b3"} opacity="0">
            <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" path={ROUTES[p.route]} />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.85;1"
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Devices */}
      {NODES.map(({ x, y, label, Icon, accent }) => (
        <g key={label}>
          <rect x={x - W / 2} y={y - H / 2 + 5} width={W} height={H} rx="18" fill="#0f172a" opacity="0.05" />
          <rect
            x={x - W / 2}
            y={y - H / 2}
            width={W}
            height={H}
            rx="18"
            fill={accent ? "#0056b3" : "#ffffff"}
            stroke={accent ? "#0056b3" : "#e3e6ea"}
          />
          <Icon x={x - 15} y={y - 29} width={30} height={30} color={accent ? "#ffffff" : "#0056b3"} strokeWidth={1.8} aria-hidden="true" />
          <text
            x={x}
            y={y + 26}
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill={accent ? "#ffffff" : "#3d4450"}
            fontFamily="var(--font-sans), system-ui, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
