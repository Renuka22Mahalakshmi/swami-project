"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Anugonda() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 px-6 py-12 flex items-center justify-center">
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
            src="/6.jpeg" // replace with actual image
            alt="Anugonda"
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
            Anugonda
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>Anugonda is the sacred birthplace of Tatha.</li>
            <li>Located around 20 km away from Kallur.</li>
            <li>The house where Tatha was born has been renovated into a temple by Sansthan.</li>
            <li>An elephantine Goshala is maintained near the temple premises.</li>
            <li>Every year in February, a grand celebration is organized with great love and devotion by villagers.</li>
          </ul>

          
        </motion.div>
      </motion.div>
    </div>
  );
}