"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, Home, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-[#0F172B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Team
            </h1>
            <div className="flex items-center justify-center text-gray-300">
              <Link
                href="/"
                className="flex items-center hover:text-[#FEA116] transition-colors"
              >
                <Home size={16} />
                <span className="ml-2">Home</span>
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span>Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0F172B] mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of chefs and staff who work together to
              bring you the best dining experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.social.facebook && (
                          <motion.a
                            href={member.social.facebook}
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#FEA116] text-white p-2 rounded-full"
                          >
                            <Facebook size={20} />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#FEA116] text-white p-2 rounded-full"
                          >
                            <Twitter size={20} />
                          </motion.a>
                        )}
                        {member.social.instagram && (
                          <motion.a
                            href={member.social.instagram}
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#FEA116] text-white p-2 rounded-full"
                          >
                            <Instagram size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#0F172B] mb-2 group-hover:text-[#FEA116] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#FEA116] font-semibold">
                      {member.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
