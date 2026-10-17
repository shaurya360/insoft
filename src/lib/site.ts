// All company facts and page content in one place.
// Source: Insoft Technology product & solutions catalogue and the existing website.

export const SITE_URL = "https://insofttechnology.in";

export const COMPANY = {
  name: "Insoft Technology",
  legalName: "INSOFT TECHNOLOGY",
  phones: [
    { display: "+91 88000 06700", tel: "+918800006700" },
    { display: "+91 93110 05448", tel: "+919311005448" },
  ],
  whatsapp: "918800006700",
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
  // Google Business Profile (share link)
  googleProfileUrl: "https://share.google/tw1LFfa6OR4bogEqw",
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Insoft Technology, I'd like a quotation for ")}`;

export const NAV = [
  { href: "#solutions", label: "Solutions" },
  { href: "#products", label: "Products" },
  { href: "#bulk-orders", label: "Bulk orders" },
  { href: "#services", label: "Repairs" },
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
  brands?: string;
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "computing",
    title: "Laptops, desktops & computing",
    summary: "Business laptops and desktops for every role, plus custom builds and tablets.",
    items: [
      { name: "Business laptops & ultrabooks", detail: "Intel Core i5/i7 and Apple Silicon models with 14\"–16\" displays, for staff, managers and travelling teams." },
      { name: "Commercial desktops", detail: "Small-form-factor and tower PCs for offices, reception, accounts and admin teams." },
      { name: "All-in-one PCs", detail: "Space-saving desktops for front desks, counters and shared workstations." },
      { name: "Custom PC builds", detail: "Gaming rigs and video-editing or rendering machines built to your specification." },
      { name: "Tablets", detail: "iPadOS and Android tablets for field sales, digital forms and point of sale." },
      { name: "Monitors & accessories", detail: "Monitors, keyboards, mice, webcams, headsets, docking stations and bags." },
    ],
    brands: "Dell, HP, Lenovo, Apple, Acer, Asus, Samsung, Logitech",
  },
  {
    id: "servers",
    title: "Servers & workstations",
    summary: "Infrastructure for server rooms and demanding design, engineering and analytics work.",
    items: [
      { name: "Rack servers", detail: "1U and 2U servers for ERP, databases, virtualisation and file sharing, sized to your workload." },
      { name: "Tower servers", detail: "Quiet, compact servers for small offices and branches without a dedicated server room." },
      { name: "Workstations", detail: "Tower and mobile workstations with professional graphics for CAD, design, video and analytics." },
      { name: "Server storage & NAS", detail: "Network storage and backup appliances for shared files and data protection." },
      { name: "Server upgrades", detail: "Additional memory, drives, RAID controllers and power supplies for existing servers." },
    ],
    brands: "Dell, HP, Lenovo",
  },
  {
    id: "refurbished",
    title: "Refurbished laptops & desktops",
    summary: "Tested business-grade systems with warranty, at a lower cost than new.",
    items: [
      { name: "Refurbished laptops", detail: "Tested and graded pre-owned business laptops with warranty." },
      { name: "Refurbished desktops", detail: "Tested and graded office desktops and small-form-factor PCs with warranty." },
      { name: "Bulk lots", detail: "Matched batches for training labs, call centres, schools and new offices." },
      { name: "Upgrades on request", detail: "Extra RAM or an SSD fitted before delivery to extend the life of each system." },
    ],
    brands: "Dell, HP, Lenovo, Acer",
  },
  {
    id: "networking",
    title: "Switches, access points & routers",
    summary: "Wired and wireless networks for offices, warehouses, campuses and branches.",
    items: [
      { name: "Managed switches", detail: "24/48-port Gigabit and 10G L2/L3 switches with VLANs, routing and stacking." },
      { name: "PoE switches", detail: "Power over Ethernet for access points, IP cameras and IP phones from a single cable." },
      { name: "Unmanaged switches", detail: "Simple plug-and-play 5- to 24-port switches for small offices and desks." },
      { name: "Wi-Fi access points", detail: "Wi-Fi 6/6E indoor and outdoor access points, cloud or controller managed, for full-floor coverage." },
      { name: "Routers", detail: "Business routers with load balancing and failover across multiple internet connections." },
      { name: "Network setup", detail: "Site survey, configuration of VLANs and Wi-Fi, and installation by our engineers." },
    ],
    brands: "Cisco, D-Link, TP-Link",
  },
  {
    id: "security",
    title: "Firewalls & network security",
    summary: "Protect office networks and give staff secure access from outside.",
    items: [
      { name: "Next-generation firewalls", detail: "Firewalls for small offices through to large networks, with web filtering, intrusion prevention and gateway antivirus." },
      { name: "VPN & remote access", detail: "Site-to-site links between branches and secure remote access for employees." },
      { name: "Licences & renewals", detail: "Security subscription and support renewals for new and existing firewalls." },
      { name: "Setup & configuration", detail: "Policies, VPNs, user rules and web filtering configured by our engineers." },
    ],
    brands: "Sophos, Fortinet",
  },
  {
    id: "racks-cabling",
    title: "Racks & structured cabling",
    summary: "Neat, labelled cabling and racks for network and server equipment.",
    items: [
      { name: "Wall-mount network racks", detail: "Compact racks for switches, patch panels and NVRs in offices and shops." },
      { name: "Floor-standing server racks", detail: "Full-height racks for servers, storage and core network equipment." },
      { name: "Rack accessories", detail: "Shelves, cooling fans, PDUs, cable managers, blanking panels and mounting hardware." },
      { name: "Copper & fibre cabling", detail: "CAT6/CAT6A copper and fibre runs, patch panels, faceplates and patch cords." },
    ],
  },
  {
    id: "power",
    title: "UPS & power backup",
    summary: "Backup power that keeps servers, networks and workstations running through outages.",
    items: [
      { name: "Online UPS", detail: "Continuous, clean power for servers, network racks and critical equipment." },
      { name: "Line-interactive & offline UPS", detail: "Compact UPS units for desktops, POS counters and home offices." },
      { name: "Rack-mount UPS", detail: "UPS units that fit inside server and network racks." },
      { name: "UPS batteries", detail: "Replacement batteries and external battery banks for longer backup time." },
    ],
    brands: "APC, Microtek",
  },
  {
    id: "storage",
    title: "Data storage & memory",
    summary: "Drives and media for upgrades, backups and surveillance recording.",
    items: [
      { name: "SSDs and hard disks", detail: "NVMe and SATA solid-state drives and HDDs for laptops, desktops and workstations." },
      { name: "External drives", detail: "Portable hard disks and SSDs for backups and moving large files." },
      { name: "Memory cards", detail: "High-endurance SD and microSD cards for CCTV, POS and embedded devices." },
      { name: "Pen drives", detail: "USB 3.0/3.2 flash drives in multiple capacities." },
    ],
    brands: "Western Digital, Samsung",
  },
  {
    id: "surveillance",
    title: "CCTV & surveillance",
    summary: "Camera systems for offices, warehouses, factories and retail floors.",
    items: [
      { name: "IP CCTV cameras", detail: "Dome, bullet and PTZ cameras with motion tracking and colour night vision." },
      { name: "NVR / DVR recording", detail: "Multi-channel recording with central storage and remote viewing on mobile." },
      { name: "Installation", detail: "Camera placement, cabling, PoE power and mobile viewing set up by our technicians." },
    ],
    brands: "CP Plus",
  },
  {
    id: "printing",
    title: "Printers, scanners & barcode",
    summary: "Office printing and point-of-sale hardware.",
    items: [
      { name: "Network multifunction printers", detail: "Duplex print and scan hubs for medium and large offices." },
      { name: "Laser & ink-tank printers", detail: "Low running-cost printers for desks, branches and home offices." },
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
      { name: "Meeting-room setups", detail: "Displays, webcams and speakerphones for video conferencing rooms." },
    ],
    brands: "Samsung, Logitech",
  },
];

export const SOLUTIONS = [
  {
    title: "New office IT setup",
    text: "Moving into a new office or opening a branch? We plan and supply everything in one go — laptops and desktops, network racks and cabling, switches and Wi-Fi, a firewall, UPS backup, CCTV and printers — then install and test it so your team can start work on day one.",
  },
  {
    title: "Networking & Wi-Fi",
    text: "Managed and PoE switches, Wi-Fi 6 access points and business routers, designed for your floor plan and number of users. We configure VLANs, guest Wi-Fi and internet failover, and leave the rack labelled and tidy.",
  },
  {
    title: "Firewall & network security",
    text: "Sophos and Fortinet firewalls with web filtering, intrusion prevention and VPN access for remote staff and branches. We size the firewall to your internet speed and users, set up the policies and handle licence renewals.",
  },
  {
    title: "Server room & power",
    text: "Rack and tower servers, network storage, server racks and online UPS from APC and Microtek — the core infrastructure your ERP, file sharing and backups depend on, installed and powered correctly.",
  },
  {
    title: "Surveillance",
    text: "CP Plus IP cameras and NVRs for offices, warehouses, factories and shops, with PoE cabling and mobile viewing, so you can see every site from your phone.",
  },
  {
    title: "Computer roll-outs & refresh",
    text: "New or refurbished laptops and desktops in bulk, configured with your operating system and software before delivery. A practical way to equip a training lab or call centre, or to replace ageing machines across the company.",
  },
];

export const BULK = {
  uses: "New offices, branch roll-outs, training labs, call centres, schools and project sites",
  points: [
    { title: "Volume pricing", text: "Better per-unit prices on larger quantities, quoted in writing with GST." },
    { title: "Identical configurations", text: "The same model and specification across the batch, so systems are easy to deploy and support." },
    { title: "Configured and installed", text: "Operating system and software set up before dispatch, with on-site installation where needed." },
    { title: "New or refurbished", text: "Choose new, refurbished or a mix of both to fit your budget." },
    { title: "Delivered across India", text: "Same-day delivery on many in-stock items, and pan-India delivery for larger orders." },
    { title: "One invoice, one contact", text: "Laptops, servers, networking, UPS and accessories on a single quotation and GST invoice." },
  ],
};

export const SERVICES = [
  { name: "Laptop & desktop repair", detail: "Diagnosis and repair, including screen, battery and keyboard replacement." },
  { name: "Motherboard-level repair", detail: "Chip-level fault finding and component replacement, done in-house." },
  { name: "Printer repair", detail: "Mechanical faults, servicing and network printing setup." },
  { name: "Upgrades", detail: "RAM, SSD and graphics card upgrades to extend the life of existing systems." },
  { name: "Software & virus issues", detail: "Malware removal, OS reinstallation and system clean-up." },
];

export const REASONS = [
  {
    title: "A complete IT solutions provider",
    text: "Servers, computers, networking, firewalls, racks, UPS, CCTV and printers come from one team that also installs and repairs them — so you are not coordinating several vendors.",
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
    title: "Same-day and pan-India delivery",
    text: "Many in-stock items can be delivered the same day, and we deliver across India. Timelines for larger orders are confirmed in your quotation.",
  },
];

export const STEPS = [
  { title: "Share your requirement", text: "Call, WhatsApp or send the enquiry form with the products, quantities or problem you need help with." },
  { title: "Receive a quotation", text: "We send a written quotation with prices, GST, delivery time and payment terms." },
  { title: "Delivery & installation", text: "Products are delivered with a GST invoice and, where needed, installed and configured on site." },
  { title: "Support after purchase", text: "Warranty support and in-house repairs keep your equipment running." },
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
    a: "Dell, HP, Lenovo, Apple, Acer, Asus and Samsung for computing and servers; Cisco, D-Link and TP-Link for switches, access points and routers; Sophos and Fortinet for firewalls; APC and Microtek for UPS; Western Digital and Samsung for storage; CP Plus for surveillance; HP, Canon and Epson for printing; and Logitech accessories.",
  },
  {
    q: "Do you repair laptops and computers?",
    a: "Yes. Our in-house technicians handle laptop, desktop and printer repairs, including motherboard-level repair, part replacement and upgrades. Contact us with the model and the problem, or bring the device to our office.",
  },
  {
    q: "Do you sell refurbished laptops and desktops?",
    a: "Yes. We supply tested and graded refurbished laptops and desktops from Dell, HP, Lenovo and Acer, with warranty. They are a practical option for training labs and large deployments.",
  },
  {
    q: "Can you set up the complete IT infrastructure for a new office?",
    a: "Yes. We supply and install everything a new office or site needs — servers, workstations and laptops, networking and Wi-Fi, firewalls, racks, UPS, CCTV and printers — from one quotation.",
  },
  {
    q: "Do you deliver outside Delhi?",
    a: "Yes. We deliver across India. Send us your requirement and delivery location, and the delivery time will be confirmed in your quotation.",
  },  {
    q: "Which firewalls do you supply and install?",
    a: "We supply and configure Sophos and Fortinet firewalls, from small-office models to appliances for large networks. Our engineers set up the policies, web filtering and VPN access, and we handle licence renewals.",
  },
  {
    q: "Which UPS brands do you sell?",
    a: "We supply APC and Microtek UPS systems — online UPS for servers and network racks, and line-interactive or offline UPS for desktops and counters — along with replacement batteries. Tell us what needs backup and for how long, and we will suggest the right capacity.",
  },
  {
    q: "Do you supply and install switches, access points and racks?",
    a: "Yes. We supply managed, PoE and unmanaged switches, Wi-Fi access points, routers, wall-mount and floor-standing racks, and CAT6/fibre cabling, and our engineers install and configure the complete network.",
  },
  {
    q: "Do you supply servers and workstations?",
    a: "Yes. We supply Dell, HP and Lenovo rack and tower servers, workstations and network storage, configured for your applications, users and backup needs.",
  },
  {
    q: "Do products come with warranty?",
    a: "Yes. New products carry the manufacturer's warranty, refurbished systems come with warranty, and our own technicians support you if anything goes wrong.",
  },
  {
    q: "Do you sell to individuals as well as companies?",
    a: "Yes. Most of our work is with businesses, but individual buyers are welcome to call, WhatsApp or visit our Nehru Place office.",
  },
  {
    q: "How do I get a quotation?",
    a: "Send your requirement through the enquiry form on this page, on WhatsApp or by email — product types, quantities and delivery location. We reply with a written quotation including GST, delivery time and payment terms.",
  },

];

// Topics offered in the enquiry form (also validated by the /api/enquiry route).
export const ENQUIRY_TOPICS = [
  "Bulk order",
  "Complete office / IT setup",
  "Servers / workstations",
  "Laptops / desktops",
  "Refurbished laptops / desktops",
  "Networking / Wi-Fi",
  "Firewalls / network security",
  "Racks / UPS",
  "CCTV / surveillance",
  "Printers / barcode / POS",
  "Interactive panels",
  "Repair",
  "Other",
];
