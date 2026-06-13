"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Moon,
  Sun,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { spring } from "../lib/animations";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom py-0 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} transition={spring} className="flex items-center">
              <Image
                src="/logo-Picsart-BackgroundRemover.png"
                alt="Insoft Technology Logo"
                width={160}
                height={45}
                className="object-contain dark:brightness-110 dark:drop-shadow-lg"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <a
              href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-white font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="space-y-3">
              <a
                href="https://wa.me/919311005448?text=Hello%20Insoft%20Technology"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center rounded-full bg-emerald-500 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center rounded-full bg-primary-600 py-3 text-white font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
