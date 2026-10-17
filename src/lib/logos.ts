// Client and brand logos.
//
// To add a client logo:
//   1. Put the file in /public/clients/ with a descriptive name, e.g. "company-name.png"
//      (PNG, SVG or WebP; transparent or white background; roughly 160 px tall is plenty).
//   2. Add a line below with the company's real name, the file path and its
//      pixel width/height (the layout scales it; the numbers just prevent layout shift).
// To remove a client, delete its line (and the file).

export type Logo = { name: string; src: string; width: number; height: number };

export const CLIENTS: Logo[] = [
  { name: "Tata Motors", src: "/clients/tata-motors.png", width: 215, height: 160 },
  { name: "Apollo Tyres", src: "/clients/apollo-tyres.png", width: 136, height: 135 },
  { name: "Nykaa", src: "/clients/nykaa.png", width: 179, height: 71 },
  { name: "Sterlite Power", src: "/clients/sterlite-power.png", width: 159, height: 160 },
  { name: "Uno Minda (Minda Industries Limited)", src: "/clients/uno-minda.png", width: 237, height: 133 },
  { name: "Spice Money", src: "/clients/spice-money.png", width: 134, height: 135 },
  { name: "RapiPay", src: "/clients/rapipay.png", width: 391, height: 131 },
  { name: "Dr. Bakshi's Bakson's Homoeopathy", src: "/clients/baksons-homoeopathy.png", width: 144, height: 56 },
  { name: "Action", src: "/clients/action.png", width: 363, height: 88 },
];

export const BRANDS: Logo[] = [
  { name: "Dell", src: "/brands/dell.png", width: 115, height: 114 },
  { name: "HP", src: "/brands/hp.png", width: 115, height: 115 },
  { name: "Lenovo", src: "/brands/lenovo.png", width: 288, height: 96 },
  { name: "Apple", src: "/brands/apple.png", width: 94, height: 115 },
  { name: "Samsung", src: "/brands/samsung.png", width: 217, height: 74 },
  { name: "Asus", src: "/brands/asus.png", width: 158, height: 33 },
  { name: "Acer", src: "/brands/acer.png", width: 269, height: 95 },
  { name: "D-Link", src: "/brands/dlink.png", width: 115, height: 115 },
  { name: "TP-Link", src: "/brands/tp-link.png", width: 421, height: 159 },
  { name: "Western Digital", src: "/brands/western-digital.png", width: 219, height: 61 },
  { name: "CP Plus", src: "/brands/cp-plus.png", width: 285, height: 77 },
  { name: "Canon", src: "/brands/canon.png", width: 251, height: 52 },
  { name: "Epson", src: "/brands/epson.png", width: 271, height: 61 },
  { name: "Logitech", src: "/brands/logitech.png", width: 173, height: 115 },
];
