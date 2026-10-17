import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY, SITE_URL, PRODUCT_GROUPS, SERVICES } from "@/lib/site";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const TITLE = "Insoft Technology | Bulk IT Hardware Supplier, Nehru Place Delhi";
const DESCRIPTION =
  "IT hardware for bulk & small orders: servers, new, refurbished & gaming laptops, networking, firewalls, UPS. 20+ years in Nehru Place. Pan-India delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Insoft Technology — IT hardware & computer repair, Nehru Place, Delhi",
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Insoft Technology — computers, laptops & IT hardware, Nehru Place, New Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insoft Technology — IT hardware & computer repair, Nehru Place, Delhi",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

// Structured data — only verified business details (no ratings or reviews).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ComputerStore",
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/insoft-technology-logo.png`,
      image: `${SITE_URL}/og-image.png`,
      description: DESCRIPTION,
      telephone: COMPANY.phones.map((p) => p.tel),
      email: COMPANY.email,
      taxID: COMPANY.gstin,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.region,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: COMPANY.openingHours.days,
          opens: COMPANY.openingHours.opens,
          closes: COMPANY.openingHours.closes,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT hardware and services",
        itemListElement: [
          ...PRODUCT_GROUPS.map((g) => ({
            "@type": "OfferCatalog",
            name: g.title,
            itemListElement: g.items.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: i.name } })),
          })),
          {
            "@type": "OfferCatalog",
            name: "Repairs",
            itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
          },
        ],
      },
      sameAs: [COMPANY.googleProfileUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={plex.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
