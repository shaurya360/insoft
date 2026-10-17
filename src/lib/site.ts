// All company facts and page content in one place.
// Source: Insoft Technology product & solutions catalogue and the existing website.

export const SITE_URL = "https://insofttechnology.in";

export const COMPANY = {
  name: "Insoft Technology",
  legalName: "INSOFT TECHNOLOGY",
  phones: [
    { display: "+91 93110 05448", tel: "+919311005448" },
    { display: "+91 88000 06700", tel: "+918800006700" },
  ],
  whatsapp: "919311005448",
  email: "info@insofttechnology.in",
  gstin: "07ANZPS2464A1ZN",
  address: {
    line1: "203, Harsh Bhawan",
    line2: "64–65 Nehru Place",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110019",
    country: "IN",
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 am – 7:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  // Used for structured data (schema.org openingHoursSpecification)
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Insoft+Technology+203+Harsh+Bhawan+Nehru+Place+New+Delhi+110019",
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Insoft Technology, I'd like a quotation for ")}`;

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Repairs & AMC" },
  { href: "#clients", label: "Clients" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const FIGURES = [
  { value: "20+", label: "years in Nehru Place" },
  { value: "5,000+", label: "customers served" },
  { value: "100%", label: "certified technicians" },
];

export const SECTORS = [
  "Manufacturing",
  "Banking & financial services",
  "Retail",
  "FMCG",
  "Real estate",
  "MNCs",
  "Government organisations",
];

export type ProductGroup = {
  id: string;
  title: string;
  summary: string;
  items: { name: string; detail: string }[];
  brands: string;
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "computing",
    title: "Laptops, desktops & computing",
    summary: "Business laptops and desktops for every role, plus custom builds and tablets.",
    items: [
      { name: "Laptops & thin-and-light ultrabooks", detail: "Business-grade Intel Core i5/i7 and Apple Silicon models, 14\"–16\" displays." },
      { name: "Commercial desktops", detail: "Small-form-factor and tower PCs for offices, reception and admin teams." },
      { name: "Custom PC builds", detail: "Gaming rigs and video-editing or rendering workstations built to your specification." },
      { name: "Refurbished laptops", detail: "Tested and graded pre-owned laptops with warranty — a lower-cost option for bulk deployments and training labs." },
      { name: "Tablets", detail: "iPadOS and Android tablets for field sales, digital forms and point of sale." },
    ],
    brands: "Dell, HP, Lenovo, Apple, Acer, Samsung",
  },
  {
    id: "networking",
    title: "Networking & connectivity",
    summary: "Office and campus networks, from cabling to managed switching and Wi-Fi.",
    items: [
      { name: "Wi-Fi 6/6E access points", detail: "Indoor and outdoor units, cloud or on-premises managed." },
      { name: "Managed L2/L3 PoE+ switches", detail: "24/48-port Gigabit and 10G, VLANs, L3 routing and stacking." },
      { name: "Structured cabling", detail: "CAT6/CAT6A copper and fibre, racks, patch panels and cable management." },
    ],
    brands: "Cisco, D-Link, TP-Link",
  },
  {
    id: "storage",
    title: "Data storage & memory",
    summary: "Drives and media for upgrades, backups and surveillance recording.",
    items: [
      { name: "SSDs and hard disks", detail: "NVMe and SATA solid-state drives and HDDs for laptops, desktops and workstations." },
      { name: "Memory cards", detail: "High-endurance SD and microSD cards for CCTV, POS and embedded devices." },
      { name: "Pen drives", detail: "USB 3.0/3.2 flash drives in multiple capacities." },
    ],
    brands: "Western Digital, Samsung",
  },
  {
    id: "surveillance",
    title: "CCTV & surveillance",
    summary: "Camera systems for offices, warehouses and retail floors.",
    items: [
      { name: "IP CCTV cameras", detail: "Dome, bullet and PTZ cameras with motion tracking and colour night vision." },
      { name: "NVR / DVR recording", detail: "Multi-channel recording with central storage and remote viewing on mobile." },
    ],
    brands: "CP Plus",
  },
  {
    id: "printing",
    title: "Printers, scanners & barcode",
    summary: "Office printing and point-of-sale hardware.",
    items: [
      { name: "Network multifunction printers", detail: "Duplex print and scan hubs for medium and large offices." },
      { name: "Barcode scanners", detail: "Wired and wireless 1D/2D handheld scanners for inventory and checkout." },
      { name: "POS thermal receipt printers", detail: "Compact, high-speed printers for billing counters." },
    ],
    brands: "HP, Canon, Epson",
  },
  {
    id: "displays",
    title: "Interactive panels & displays",
    summary: "Collaboration displays for meeting rooms and classrooms.",
    items: [
      { name: "4K interactive panels & smart boards", detail: "Anti-glare multi-touch panels with annotation and wireless casting." },
    ],
    brands: "Samsung",
  },
];

export const SERVICES = [
  { name: "Laptop & desktop repair", detail: "Diagnosis and repair, including screen, battery and keyboard replacement." },
  { name: "Motherboard-level repair", detail: "Chip-level fault finding and component replacement, done in-house." },
  { name: "Printer repair", detail: "Mechanical faults, servicing and network printing setup." },
  { name: "Upgrades", detail: "RAM, SSD and graphics card upgrades to extend the life of existing systems." },
  { name: "Software & virus issues", detail: "Malware removal, OS reinstallation and system clean-up." },
  { name: "Annual maintenance contracts (AMC)", detail: "Scheduled maintenance and priority repairs for your organisation's IT equipment." },
];

export const REASONS = [
  {
    title: "One partner for hardware, network and maintenance",
    text: "Computers, networking, CCTV and printers come from one team that also installs and maintains them — so you are not coordinating several vendors.",
  },
  {
    title: "Certified engineers in-house",
    text: "Our own technicians configure, install and repair what we supply, rather than handing it off to a third party.",
  },
  {
    title: "Genuine products with warranty",
    text: "Every product comes with the manufacturer's warranty, backed by our own technical support.",
  },
  {
    title: "Same-day delivery options",
    text: "Many in-stock items can be delivered the same day; timelines for larger orders are confirmed in your quotation.",
  },
];

export const STEPS = [
  { title: "Share your requirement", text: "Call, WhatsApp or send the enquiry form with the products, quantities or problem you need help with." },
  { title: "Receive a quotation", text: "We send a written quotation with prices, GST, delivery time and payment terms." },
  { title: "Delivery & installation", text: "Products are delivered with a GST invoice and, where needed, installed and configured on site." },
  { title: "Support after purchase", text: "Warranty support, repairs and optional AMC keep your equipment running." },
];

export const FAQS = [
  {
    q: "Where is Insoft Technology located?",
    a: "Our office is at 203, Harsh Bhawan, 64–65 Nehru Place, New Delhi – 110019. We are open Monday to Saturday, 9:00 am to 7:00 pm.",
  },
  {
    q: "Do you supply companies and handle bulk orders?",
    a: "Yes. Most of our work is for businesses and institutions. Send us your requirement and we will prepare a quotation with bulk pricing, delivery time and payment terms.",
  },
  {
    q: "Do you provide GST invoices?",
    a: `Yes. Insoft Technology is GST-registered (GSTIN ${"07ANZPS2464A1ZN"}) and every sale is billed with a GST invoice.`,
  },
  {
    q: "Which brands do you deal in?",
    a: "Dell, HP, Lenovo, Apple, Acer, Asus and Samsung for computing; Cisco, D-Link and TP-Link for networking; Western Digital and Samsung for storage; CP Plus for surveillance; HP, Canon and Epson for printing; and Logitech accessories.",
  },
  {
    q: "Do you repair laptops and computers?",
    a: "Yes. Our in-house technicians handle laptop, desktop and printer repairs, including motherboard-level repair, part replacement and upgrades. Contact us with the model and the problem, or bring the device to our office.",
  },
  {
    q: "Do you sell refurbished laptops?",
    a: "Yes. We supply tested and graded refurbished laptops from Dell, HP, Lenovo and Acer, with warranty. They are a practical option for training labs and large deployments.",
  },
  {
    q: "Do you offer annual maintenance contracts (AMC)?",
    a: "Yes. We offer AMC for computers, printers, networking and CCTV, handled by our own engineering team. Tell us what equipment you have and we will suggest a plan.",
  },
];
