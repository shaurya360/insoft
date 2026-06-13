"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Zap,
  Database,
  Shield,
  Wrench,
  HardDrive,
  Package,
  MessageSquare,
} from "lucide-react";

interface RepairService {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function RepairServicesSection() {
  const services: RepairService[] = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptop Repair",
      description: "Screen replacement, battery service, keyboard fixes",
      features: ["Fast turnaround", "Genuine parts", "Warranty included"],
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Desktop Repair",
      description: "Component replacement, hardware upgrades, troubleshooting",
      features: ["Expert diagnosis", "Quality repairs", "Fair pricing"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Printer Repair",
      description: "Cartridge service, mechanical fixes, network setup",
      features: ["Preventive maintenance", "Supply refills", "24/7 support"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Recovery",
      description: "Safe data extraction, hard drive recovery, file restoration",
      features: ["No data loss", "Secure handling", "Quick service"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Virus Removal",
      description: "Malware elimination, system optimization, security setup",
      features: ["Complete cleanup", "Antivirus install", "Protection"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hardware Upgrades",
      description: "RAM installation, SSD upgrades, graphics cards",
      features: ["Performance boost", "Professional install", "Warranty"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="repair" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Repair & Maintenance Services</h2>
          <p className="section-subtitle">
            Expert technicians ready to fix any computer problem, anytime
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-all group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-shadow"
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-white font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
