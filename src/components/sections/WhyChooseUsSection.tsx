"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2;
      const increment = value / (duration * 60);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 1000 / 60);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

export function WhyChooseUsSection() {
  const stats: StatCard[] = [
    {
      icon: <Award className="w-8 h-8" />,
      value: 20,
      suffix: "+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 5000,
      suffix: "+",
      label: "Happy Customers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 24,
      suffix: "/7",
      label: "Customer Support",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: 100,
      suffix: "%",
      label: "Certified Technicians",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    "Premium quality products from trusted brands",
    "Expert technicians with industry certifications",
    "Fast and reliable repair services",
    "Competitive pricing with transparency",
    "Comprehensive warranty on all products",
    "Fast shipping and same-day delivery options",
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="gradient-text block mt-2">Insoft Technology?</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              With over a decade of experience, we&apos;ve become the trusted choice
              for thousands of customers. Our commitment to quality, expertise,
              and customer satisfaction sets us apart.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`glass rounded-2xl p-8 text-center border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-all group`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
