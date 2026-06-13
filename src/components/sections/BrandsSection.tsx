"use client";

// use native <img> for dynamic local/external sources to avoid URL parsing issues
import { motion } from "framer-motion";
import { stagger, fadeUp, hoverPop } from "../../lib/animations";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "Dell", logo: "/dell.png" },
  { id: 2, name: "HP", logo: "/hp.png" },
  { id: 3, name: "Lenovo", logo: "/lenovo.png" },
  { id: 4, name: "Apple", logo: "/apple.png" },
  { id: 5, name: "Samsung", logo: "/samsung.png" },
  { id: 8, name: "ASUS", logo: "/asus.png" },
  { id: 9, name: "Acer", logo: "/acer.png" },
  { id: 10, name: "D-Link", logo: "/dlink.png" },
  { id: 11, name: "Logitech", logo: "/logitech.jpg" },
  { id: 12, name: "Microsoft", logo: "/microsoft.png" },
  { id: 13, name: "Intel", logo: "/intel.png" },
  { id: 14, name: "NVIDIA", logo: "/nvidia.png" },
  { id: 15, name: "Hisense", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Hisense-Logo.svg" },
  { id: 16, name: "Kingston", logo: "/kingston.jpg" },
  { id: 17, name: "Crucial", logo: "/crucial.png" },
  { id: 18, name: "Gigabyte", logo: "/gigabyte.png" },
  { id: 19, name: "Microtec", logo: "/microtec.png" },
  { id: 20, name: "MSI", logo: "/msi.png" },
];

export function BrandsSection() {
  const containerVariants = stagger(0.06);
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.28, delay: i * 0.02 },
    }),
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary-600 mb-4">
            Trusted partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Brands We Work With
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Authorized partners and trusted manufacturers delivering premium
            hardware and support for every business need.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              custom={i}
              variants={itemVariants}
              whileHover={hoverPop}
              className="relative rounded-xl p-4 flex items-center justify-center h-28 border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-xl dark:border-gray-700 dark:bg-slate-900 overflow-hidden"
            >
              <motion.div className="relative w-full h-full" variants={fadeUp as any}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logo} alt={brand.name} className="object-contain p-2 w-full h-full" />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-white/90 text-slate-900 flex items-center justify-center rounded-xl shadow-lg dark:bg-black/70 dark:text-white"
              >
                <span className="text-sm font-semibold">{brand.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mt-12 max-w-2xl mx-auto"
        >
          We are authorized dealers and service centers for all major computer
          brands. Genuine products and certified service guaranteed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-white font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
