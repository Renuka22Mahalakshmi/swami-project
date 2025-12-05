"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "D Ramchandra Reddy", role: "President", image: "/28.png" },
  { name: "D Rama Lakshmi", role: "Vice President", image: "/28.png" },
  { name: "N Mallesh", role: "General Secretary", image: "/28.png" },
  { name: "M Potti Sreeramulu", role: "Joint Secretary", image: "/28.png" },
  { name: "E Hanmanth Reddy", role: "Treasurer", image: "/28.png" },
  { name: "D Sai Ram Reddy", role: "EC Member", image: "/28.png" },
  { name: "D Pratap Reddy", role: "EC Member", image: "/28.png" },
  { name: "B Kodandam", role: "Member", image: "/28.png" },
];

export default function ManagementPage() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const rowAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textAnim = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center px-4 py-16 bg-gradient-to-b from-yellow-50 to-white"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
          Our Management Team
        </h1>
        <p className="text-lg text-orange-600 max-w-xl mx-auto">
          Dedicated Servants of Sri Ramavadhuta&apos;s Mission
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mx-auto" />
      </motion.section>

      {/* TEAM LIST SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-6 max-w-3xl mx-auto"
      >
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Our team helps us to spread the goodness of Swami to all the bhaktas.
          They work tirelessly to maintain the Samsthan and organize all spiritual activities.
        </p>

        {/* CLEAN LIST */}
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={rowAnim}
              className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl shadow-sm"
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* TEXT ANIMATION */}
              <div>
                <motion.h3
                  variants={textAnim}
                  className="text-lg font-semibold text-gray-900"
                >
                  {member.name}
                </motion.h3>

                <motion.p
                  variants={textAnim}
                  className="text-orange-600 font-medium"
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
