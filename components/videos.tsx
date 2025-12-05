"use client";

import { motion } from "framer-motion";

// Your YouTube links
const links = [
  "https://youtu.be/gDhJHkQkEDQ",
  "https://youtu.be/VwcFkSQiAoE",
  "https://youtu.be/8PgO5L6AkjQ",
  "https://youtu.be/ysTHhrzKKWs",
  "https://youtu.be/sBgCVgzQjU8",
  "https://youtu.be/Ik5S1Z5reKI",
  "https://youtu.be/GmvNjRZ3VgE",
  "https://youtu.be/a8lafYNDd4Y",
  "https://youtu.be/ZrDHXBd-2-0",
  "https://youtu.be/PP-_AYxxL6s",
  "https://youtu.be/r_FkzokddJ0",
  "https://youtu.be/WfCnObsKcWo",
  "https://youtu.be/Ag7BA5EfVUI",
  "https://youtu.be/18drsaGw8kc",
  "https://youtu.be/ZFCXdZ8Er54",
  "https://youtu.be/R2KbeMBr3Fc",
  "https://youtu.be/68cuTnwsuak",
  "https://youtu.be/NP3TC8JoJpE",
  "https://youtu.be/exxDEZte2xU",
  "https://youtu.be/X2OA7nJbPOM",
];

// Convert YouTube URL → Video ID
function extractId(url: string) {
  return url.split("youtu.be/")[1];
}

export default function Videos() {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-6 md:px-12">

      {/* ⭐ Beautiful Title Section ⭐ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Our Videos
        </h1>

        {/* Orange Underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mx-auto"></div>
      </motion.div>

      {/* Grid of Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {links.map((url, i) => {
          const id = extractId(url);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
