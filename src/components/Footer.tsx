"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Utensils,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Utensils className="text-[#FEA116] mr-3 text-3xl" />
              <h3 className="text-2xl font-bold text-[#FEA116]">
                Your app name
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-[#FEA116] text-white p-3 rounded-full hover:bg-[#FEA116]/90 transition-colors duration-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-[#FEA116] text-white p-3 rounded-full hover:bg-[#FEA116]/90 transition-colors duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-[#FEA116] text-white p-3 rounded-full hover:bg-[#FEA116]/90 transition-colors duration-300"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-[#FEA116] text-white p-3 rounded-full hover:bg-[#FEA116]/90 transition-colors duration-300"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Our Services", href: "/service" },
                { name: "Terms & Condition", href: "#" },
                { name: "Support", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#FEA116] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin
                  className="text-[#FEA116] mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">123 Street, New York, USA</span>
              </div>
              <div className="flex items-center">
                <Phone
                  className="text-[#FEA116] mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">+012 345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#FEA116] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">info@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
            <div className="space-y-3">
              {[
                { day: "Monday - Friday", time: "09:00 AM - 09:00 PM" },
                { day: "Saturday", time: "09:00 AM - 10:00 PM" },
                { day: "Sunday", time: "10:00 AM - 08:00 PM" },
              ].map((schedule) => (
                <div
                  key={schedule.day}
                  className="border-b border-gray-700 pb-2"
                >
                  <div className="text-gray-300 font-medium">
                    {schedule.day}
                  </div>
                  <div className="text-[#FEA116]">{schedule.time}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-300">
            © {currentYear} <span className="text-[#FEA116]">Restoran</span>.
            All rights reserved. Designed by{" "}
            <a href="#" className="text-[#FEA116] hover:underline">
              Your Company
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
