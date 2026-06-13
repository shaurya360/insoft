"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Printer,
  Cpu,
  Network,
  Wrench,
} from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function ServicesSection() {
  const services: ServiceCard[] = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Computer Sales",
      description: "High-performance desktop computers for gaming and business",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptop Sales",
      description: "Premium laptops from leading brands with warranty support",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Printer Solutions",
      description: "Complete printing solutions for home and business",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Components",
      description: "Original parts and components for all major brands",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Equipment",
      description: "Enterprise-grade networking solutions and setup services",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repair & Maintenance",
      description: "Expert repair and maintenance services available 24/7",
      color: "from-rose-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="services" className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title">Our Services & Products</h2>
          <p className="section-subtitle">
            Comprehensive solutions for all your computer and technology needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-8 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition-shadow`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-600 dark:text-primary-400 font-semibold flex items-center">
                  Learn More →
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
