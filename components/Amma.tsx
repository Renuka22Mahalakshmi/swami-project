"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AmmaSamadhi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 px-6 py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl"
      >
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/25.jpg" // replace when actual image provided
            alt="Amma Samadhi"
            width={450}
            height={450}
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-gray-800"
        >
          <h1 className="text-4xl font-bold text-orange-700 tracking-wide mb-4 hover:tracking-widest transition-all duration-300">
            Amma Samadhi
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>Blessed is the mother who gave birth to god himself.</li>
            <li>On 6th August 1991, early hours of Ekadasi, her soul left her body.</li>
            <li>It is believed that Tatha removed all her karma and led her towards salvation.</li>
            <li>Sansthan later developed and maintained this divine Samadhi.</li>
            <li>A Goshala (cow shelter) is also maintained in the premises.</li>
          </ul>

          
        </motion.div>
      </motion.div>
    </div>
  );
}