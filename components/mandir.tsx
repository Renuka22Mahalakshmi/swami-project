"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SamadhiMandir() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 px-6 py-10 flex items-center justify-center">
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
            src="/8.jpg" // replace when image is provided
            alt="Samadhi Mandir"
            width={450}
            height={450}
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-gray-800"
        >
          <h1 className="text-4xl font-bold text-orange-600 tracking-wide mb-4 hover:tracking-widest transition-all duration-300">
            Samadhi Mandir
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>The house where Tatha lived for many years was renovated and inaugurated on 9th December 1992 for Dattajayanthi.</li>
            <li>Tatha prepared his house knowing he would leave his physical form, similar to Shirdi Saibaba’s Samadhi Mandir.</li>
            <li>After 37 days, on 15th January 1993, Tatha took Mahasamadhi and the renovated house became the Samadhi Mandir.</li>
            <li>An elegant idol is placed in the mandir where devotees offer prayers and seek blessings.</li>
            <li>Devotees still feel immense love, divine presence, and blessings of Tatha at this sacred place.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}