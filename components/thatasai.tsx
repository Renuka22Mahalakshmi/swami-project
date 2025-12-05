"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ThataSaiMandir() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-100 py-10 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold tracking-wide text-orange-800">Thata and Sai Mandir</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/26.jpg" // Replace after image uploaded
            alt="Sai Mandir Mallapur"
            width={450}
            height={550}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-orange-800 bg-white p-8 rounded-3xl shadow-lg"
        >
          <p>
            Tatha has inaugurated many Sai temples across Andhra Pradesh. One such Sai Mandir
            inaugurated by Tatha is located at <strong>Mallapur, Hyderabad</strong>.
          </p>

          <p className="mt-4">
            Mr. Narayana Rao, who wished to construct a Sai temple, approached Tatha with the
            instruction from <strong>Sri Sivanesan Swamiji</strong>. Tatha gladly accepted the request
            and blessed the temple with his presence.
          </p>

          <p className="mt-4">
            This temple is not like the regular Sai temples seen today—it is designed to reflect the
            original <strong>Shirdi environment during Baba’s physical lifetime</strong>. The divine
            connection between Tatha and Sai Baba reveals a cosmic purpose aligned for the same cause.
          </p>

          <p className="mt-4">
            It is said that <strong>the place where an Avadootha places his feet becomes a Kshetra</strong>.
            Based on this principle, the Mallapur Sai Mandir radiates divine vibrations, making it a
            sacred place for devotees seeking spiritual experience.
          </p>

          <p className="mt-4 font-semibold text-orange-800">
            There are many other Sai temples inaugurated by Tatha.
          </p>
        </motion.div>
      </div>
    </div>
  );
}