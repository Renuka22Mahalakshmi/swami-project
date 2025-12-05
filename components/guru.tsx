"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gurusthan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-100 px-6 py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl"
      >
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/9.jpg" // replace after image provided
            alt="Gurusthan"
            width={450}
            height={450}
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* RIGHT SIDE TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-gray-800"
        >
          <h1 className="text-4xl font-bold text-orange-600 tracking-wide mb-4 hover:tracking-widest transition-all duration-300">
            Gurusthan
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>When Tatha wanted to proclaim himself as one of the Dattavataras, he silently left Anugonda and lived in a small unused pump house.</li>
            <li>This place had no common needs like food or water, where Tatha stayed for around 6 months in deep Tapas.</li>
            <li>This sacred place was later maintained by Sansthan with minor modifications.</li>
            <li>Gurusthan is located around 1 km away from the Samadhi Mandir.</li>
            <li>Though small in space, it radiates holy vibrations and immense spiritual power.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}