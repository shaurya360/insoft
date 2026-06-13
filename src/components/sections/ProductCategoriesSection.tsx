"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, hoverPop } from "../../lib/animations";
import { Monitor, Laptop, Server, Printer, Wifi, ShieldCheck } from "lucide-react";

interface ProductCategory {
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
  brands: string[];
  image: string;
}

export function ProductCategoriesSection() {
  const categories: ProductCategory[] = [
    {
      title: "Desktop Computers",
      description: "Business workstations, mini PCs, and custom-built systems.",
      items: ["Business Workstations", "All-in-One PCs", "Mini PCs & Thin Clients", "Custom-built Systems"],
      icon: <Monitor className="w-6 h-6" />,
      brands: ["Dell", "HP", "Lenovo", "Acer"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    },
    {
      title: "Laptops & Notebooks",
      description: "Portable performance for professionals and creators.",
      items: ["Business Laptops", "Ultrabooks", "2-in-1 Convertibles", "Chromebooks"],
      icon: <Laptop className="w-6 h-6" />,
      brands: ["Dell", "HP", "Lenovo", "Apple"],
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=800&fit=crop",
    },
    {
      title: "Servers & Storage",
      description: "Reliable server platforms and storage solutions.",
      items: ["Tower & Rack Servers", "NAS & SAN Storage", "UPS & Power Systems", "Blade Servers"],
      icon: <Server className="w-6 h-6" />,
      brands: ["Dell PowerEdge", "HP ProLiant", "Lenovo ThinkSystem", "Synology NAS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Printers, Displays & AV",
      description: "Printing, smart display boards, projectors, and productivity peripherals.",
      items: ["Laser & Inkjet Printers", "Multifunction Printers", "Scanners & Copiers", "Smart Boards & Projectors"],
      icon: <Printer className="w-6 h-6" />,
      brands: ["Canon", "HP", "Epson", "Brother", "Hisense"],
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Networking Equipment",
      description: "Secure networking hardware for modern offices.",
      items: ["Routers & Switches", "Wireless Access Points", "Firewalls & UTM", "PoE Switches"],
      icon: <Wifi className="w-6 h-6" />,
      brands: ["Cisco", "TP-Link", "Ubiquiti", "Netgear"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
    },
    {
      title: "Security & Surveillance",
      description: "Integrated CCTV and access control solutions.",
      items: ["IP CCTV Cameras", "DVR & NVR Systems", "Access Control", "Biometric Devices"],
      icon: <ShieldCheck className="w-6 h-6" />,
      brands: ["Hikvision", "Dahua", "Bosch", "Honeywell"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Accessories & Cables",
      description: "Mice, keyboards, headsets, webcams, storage and all accessory essentials.",
      items: [
        "Mice",
        "Keyboards",
        "Headsets",
        "Webcams",
        "USB Flash Drives",
        "External Hard Drives",
        "SSDs",
        "Speakers",
        "Cables & Adapters",
      ],
      icon: <Monitor className="w-6 h-6" />,
      brands: ["Logitech", "Kingston", "Crucial", "Gigabyte", "Microtec", "MSI", "Seagate", "Western Digital", "Sony"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-slate-100/95 border border-slate-200/70 mb-12 shadow-xl dark:bg-slate-900/95 dark:border-white/10">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=700&fit=crop"
              alt="IT Products Showcase"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="relative px-6 py-16 md:px-12 md:py-24 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.4em] text-primary-600 mb-4">
              Our Catalogue
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mb-4 text-slate-900 dark:text-white">
              IT Products
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Genuine products from top global brands — authorized dealer for Dell, HP, and Lenovo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={fadeUp as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              custom={idx * 0.04}
              className="rounded-3xl p-8 border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700 dark:bg-slate-900 flex flex-col"
            >
              <div className="relative mb-6 h-40 overflow-hidden rounded-3xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20"></div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600/10 text-primary-600 flex items-center justify-center dark:bg-primary-600/20 dark:text-primary-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-6">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 text-xs text-slate-500 dark:border-gray-700 dark:text-slate-400">
                {category.brands.map((brand) => (
                  <span key={brand} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
