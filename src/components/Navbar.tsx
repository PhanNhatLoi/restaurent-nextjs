"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Utensils } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

const dropdownPages = [
  { name: "Booking", href: "/booking" },
  { name: "Our Team", href: "/team" },
  { name: "Testimonial", href: "/testimonial" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useScroll();

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.h1
              className="text-primary text-2xl lg:text-3xl font-bold flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Utensils className="mr-3" />
              Your app name
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-primary transition-colors duration-300 font-medium ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-white hover:text-primary transition-colors duration-300 font-medium"
              >
                Pages
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {dropdownPages.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-dark hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Book A Table
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark border-t border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-white hover:text-primary transition-colors duration-300 ${
                      pathname === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile dropdown */}
                <div className="px-3 py-2">
                  <div className="text-white font-medium mb-2">Pages</div>
                  {dropdownPages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="px-3 pt-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Book A Table
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
