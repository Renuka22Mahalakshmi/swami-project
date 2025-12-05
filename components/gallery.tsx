"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/1.jpg", category: "swami" },
  { src: "/2.jpg", category: "swami" },
  { src: "/3.jpg", category: "swami" },
  { src: "/4.jpg", category: "goshala" },
  { src: "/6.jpeg", category: "goshala" },
  { src: "/7.jpg", category: "goshala" },
  { src: "/8.jpg", category: "swami" },
  { src: "/9.jpg", category: "swami" },
  { src: "/10.jpg", category: "swami" },
  { src: "/12.jpeg", category: "goshala" },
  { src: "/13.jpg", category: "goshala" },
  { src: "/14.jpg", category: "goshala" },
  { src: "/15.jpeg", category: "swami" },
  { src: "/16.jpg", category: "swami" },
  { src: "/17.jpg", category: "swami" },
  { src: "/19.jpg", category: "goshala" },
  { src: "/20.jpeg", category: "goshala" },
  { src: "/21.jpg", category: "goshala" },
  { src: "/22.jpg", category: "swami" },
  { src: "/24.jpg", category: "swami" },
  { src: "/25.jpg", category: "swami" },
  { src: "/26.jpg", category: "goshala" },
  { src: "/27.jpg", category: "goshala" },
  { src: "/28.png", category: "goshala" },
  { src: "/29.jpeg", category: "swami" },
  { src: "/30.jpeg", category: "swami" },
  { src: "/31.jpeg", category: "swami" },
  { src: "/32.jpeg", category: "swami" },
  { src: "/33.jpeg", category: "swami" },
  { src: "/34.jpeg", category: "swami" },
  { src: "/35.jpeg", category: "swami" },
  { src: "/36.jpeg", category: "swami" },
  { src: "/37.jpeg", category: "swami" },
  { src: "/38.jpeg", category: "swami" },
  { src: "/39.jpeg", category: "swami" },
  { src: "/40.jpeg", category: "swami" },
  { src: "/41.jpeg", category: "swami" },
  { src: "/42.jpeg", category: "swami" },
  { src: "/43.jpeg", category: "swami" },
  { src: "/44.jpeg", category: "swami" },
  { src: "/45.jpeg", category: "swami" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-12">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Gallery</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mx-auto"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "swami", "goshala"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition 
            ${filter === cat ? "bg-orange-500 text-white" : "bg-white border-gray-400"}`}
          >
            {cat === "all"
              ? "All Photos"
              : cat === "swami"
              ? "Swami Photos"
              : "Goshala"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer rounded-xl overflow-hidden shadow"
            onClick={() => setActiveImage(img.src)}
          >
            <Image
              src={img.src}
              alt=""
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
          onClick={() => setActiveImage(null)}
        >
          <Image
            src={activeImage}
            alt=""
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
