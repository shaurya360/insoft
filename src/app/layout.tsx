import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insoft Technology | Computers, Laptops & Repair Services",
  description:
    "Your one-stop destination for computers, laptops, accessories, and expert repair services. Trusted by customers in Delhi.",
  keywords:
    "computers, laptops, printers, repair, maintenance, computer parts, networking",
  authors: [{ name: "Insoft Technology" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Insoft Technology | Computers, Laptops & Repair Services",
    description:
      "Your one-stop destination for computers, laptops, accessories, and expert repair services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
