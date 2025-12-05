"use client";
import { motion } from "framer-motion";

export default function DailySevas() {
  const sevas = [
    { time: '5:15 am', activity: 'Melkolpu Aarthi' },
    { time: '7:00 am - 8:30 am', activity: 'Abhisekham, Archana, Naivedyam, Aarthi' },
    { time: '11:45 am', activity: 'Mahanaivedyam' },
    { time: '12:00 pm', activity: 'Noon Aarthi' },
    { time: '6:15 pm', activity: 'Sandhya Aarthi' },
    { time: '8:00 pm', activity: 'Naivedyam' },
    { time: '9:00 pm', activity: 'Pavalimpu Seva' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-100 px-6 py-12 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif font-bold text-orange-700 mb-10 text-center tracking-wide hover:tracking-widest transition-all duration-300"
      >
        Daily Sevas
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6"
      >
        {sevas.map((seva, idx) => (
          <div key={idx} className="flex justify-between items-center border-b border-amber-200 pb-2 last:border-b-0">
            <span className="text-amber-800 font-semibold text-lg">{seva.time}</span>
            <span className="text-gray-800 text-lg font-medium">{seva.activity}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
