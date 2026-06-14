"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6"
            >
              <Zap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Trusted by 5000+ Customers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Your One-Stop Destination for
              <span className="gradient-text block mt-2">
                Computers, Accessories & Expert Repairs
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              From cutting-edge gaming PCs to reliable business laptops, we
              provide premium hardware and professional repair services. Expert
              technicians, competitive pricing, and 24/7 support.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-white font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
              >
                Get a Free Quote
              </motion.a>

              <motion.a
                href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
              >
                WhatsApp Us
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <p className="text-3xl font-bold gradient-text">20+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">5000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Support
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: auto-advancing slider of product/category images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-full"
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Slider() {
  const slides = [
    {
      title: "Desktop Computers",
      subtitle: "Business workstations, mini PCs, and custom systems",
      img: "/pc.jpg",
    },
    {
      title: "Laptops & Notebooks",
      subtitle: "Portable performance for professionals",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Servers & Storage",
      subtitle: "Reliable server platforms and storage",
      img: "/ram.jpg",
    },
    {
      title: "Printers & Peripherals",
      subtitle: "Printing, scanning and productivity peripherals",
      img: "/printer.png",
    },
    {
      title: "Networking Equipment",
      subtitle: "Routers, switches and wireless access points",
      img: "/network.jpg",
    },
    {
      title: "Security & Surveillance",
      subtitle: "CCTV, NVRs and access control",
      img: "/camera.jpg",
    },
    {
      title: "Accessories & Cables",
      subtitle: "Mice, headsets, keyboards, webcams, SSDs and cables",
      img: "/assecrioes.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.36, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[index].img}
            alt={slides[index].title}
            loading="eager"
            decoding="async"
            onError={(event) => {
              const target = event.currentTarget;
              target.onerror = null;
              target.src = "https://via.placeholder.com/1200x800?text=Image+Unavailable";
            }}
            className="block w-full h-full object-cover"
          />
          <div className="absolute left-6 bottom-6 bg-black/60 text-white rounded-lg p-4 backdrop-blur-sm max-w-sm">
            <h4 className="font-semibold text-lg">{slides[index].title}</h4>
            <p className="text-sm mt-1">{slides[index].subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
