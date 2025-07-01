"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCounter } from "@/hooks/useCounter";
import { Utensils } from "lucide-react";

export default function About() {
  const { count: experienceCount, ref: experienceRef } = useCounter(15);
  const { count: chefsCount, ref: chefsRef } = useCounter(50);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="/images/about-1.jpg"
                alt="About 1"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-8"
            >
              <Image
                src="/images/about-2.jpg"
                alt="About 2"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <Image
                src="/images/about-3.jpg"
                alt="About 3"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative mt-8"
            >
              <Image
                src="/images/about-4.jpg"
                alt="About 4"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#FEA116] font-secondary text-lg mb-2"
            >
              About Us
            </motion.h5>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-[#0F172B] mb-6"
            >
              Welcome to{" "}
              <span className="text-[#FEA116] inline-flex items-center">
                <Utensils className="mr-2" />
                Your app name
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 mb-4 leading-relaxed"
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              <div className="flex items-center border-l-4 border-[#FEA116] pl-4">
                <div className="flex-shrink-0">
                  <span
                    ref={experienceRef}
                    className="text-4xl font-bold text-[#FEA116]"
                  >
                    {experienceCount}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 mb-0">Years of</p>
                  <h6 className="text-[#0F172B] font-semibold uppercase">
                    Experience
                  </h6>
                </div>
              </div>

              <div className="flex items-center border-l-4 border-[#FEA116] pl-4">
                <div className="flex-shrink-0">
                  <span
                    ref={chefsRef}
                    className="text-4xl font-bold text-[#FEA116]"
                  >
                    {chefsCount}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 mb-0">Popular</p>
                  <h6 className="text-[#0F172B] font-semibold uppercase">
                    Master Chefs
                  </h6>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEA116] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#FEA116]/90 transition-colors duration-300"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
