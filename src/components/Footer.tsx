"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@insofttechnology.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickLinks = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Repair & Maintenance", href: "#repair" },
    { name: "Computer Sales", href: "#products" },
    { name: "Laptop Services", href: "#services" },
    { name: "Networking Setup", href: "#services" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/insoft_technology/" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo-Picsart-BackgroundRemover.png"
                alt="Insoft Technology Logo"
                width={60}
                height={50}
                className="object-contain dark:brightness-110 dark:drop-shadow-lg"
                unoptimized
              />
              <span className="text-2xl font-bold">Insoft Technology</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for computers, accessories, and expert
              repair services in Delhi.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919311005448"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +91 9311005448
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:info@insofttechnology.in"
                    className="text-gray-400 break-all hover:text-primary-400 transition-colors"
                  >
                    info@insofttechnology.in
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 hover:text-primary-400" />
                    )}
                  </button>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  203, Harsh Bhawan<br />
                  64-65 Nehru Place<br />
                  Delhi-110019
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Insoft Technology. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
