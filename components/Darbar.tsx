"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BhaktaNivas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-12 flex items-center justify-center">
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
            src="/4.jpg" // replace when image provided
            alt="Bhakta Nivas"
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
            Darbar & Bhakta Nivas
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>Initially, the house next to Samadhi Mandir was bought by devotees to offer Prasad and accommodation.</li>
            <li>It provided shelter for devotees traveling long distances for darshan.</li>
            <li>As the number of devotees increased, Sansthan constructed Bhakta Nivas.</li>
            <li>The facility includes all essential amenities for pilgrims.</li>
            <li>Bhakta Nivas now accommodates around 500 people comfortably.</li>
          </ul>

        </motion.div>
      </motion.div>
    </div>
  );
}
