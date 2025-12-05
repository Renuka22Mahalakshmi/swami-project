"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Dhuni() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-100 px-6 py-12 flex items-center justify-center">
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
            src="/15.jpeg" // replace after image provided
            alt="Dhuni"
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
          <h1 className="text-4xl font-bold text-orange-600 tracking-wide mb-4 hover:tracking-widest transition-all duration-300">
            Dhuni
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>In Datta parampara, Dhuni plays a vital and sacred role.</li>
            <li>The sacred fire <strong>nityagnihotri</strong> burns continuously and destroys negative karmas.</li>
            <li>Devotees visiting Kallur offer mantras and sacred fuel to Dhuni as seva.</li>
            <li>The divine ash <strong>Udi</strong> from Dhuni is accepted as Prasad.</li>
            <li>Udi is believed to cure physical and mental issues and remove karmic obstacles.</li>
            <li>This holy ash carries immense spiritual power and blessings.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}