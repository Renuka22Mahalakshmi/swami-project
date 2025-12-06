"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// You can adjust categories and add width/height info for each image
const images = [
  { src: "/1.jpg", category: "swami", orientation: "vertical" },
  { src: "/2.jpg", category: "swami", orientation: "horizontal" },
  { src: "/3.jpg", category: "swami", orientation: "vertical" },
  { src: "/4.jpg", category: "goshala", orientation: "horizontal" },
  { src: "/6.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/7.jpg", category: "goshala", orientation: "horizontal" },
  { src: "/8.jpg", category: "swami", orientation: "horizontal" },
  { src: "/9.jpg", category: "goshala", orientation: "horizontal" },
  { src: "/10.jpg", category: "swami", orientation: "horizontal" },
  { src: "/12.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/13.jpg", category: "swami", orientation: "horizontal" },
  { src: "/14.jpg", category: "swami", orientation: "vertical" },
  { src: "/15.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/16.jpg", category: "swami", orientation: "vertical" },
  { src: "/17.jpg", category: "goshala", orientation: "vertical" },
  { src: "/19.jpg", category: "swami", orientation: "horizontal" },
  { src: "/21.jpg", category: "goshala", orientation: "vertical" },
  { src: "/22.jpg", category: "goshala", orientation: "horizontal" },
  { src: "/24.jpg", category: "goshala", orientation: "vertical" },
  { src: "/25.jpg", category: "goshala", orientation: "horizontal" },
  { src: "/26.jpg", category: "swami", orientation: "vertical" },
  { src: "/27.jpg", category: "swami", orientation: "vertical" },
  { src: "/29.jpeg", category: "swami", orientation: "vertical" },
  { src: "/30.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/31.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/32.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/33.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/34.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/35.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/36.jpeg", category: "swami", orientation: "vertical" },
  { src: "/37.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/38.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/39.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/40.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/41.jpeg", category: "goshala", orientation: "horizontal" },
  { src: "/42.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/43.jpeg", category: "swami", orientation: "vertical" },
  { src: "/44.jpeg", category: "swami", orientation: "horizontal" },
  { src: "/45.jpeg", category: "swami", orientation: "horizontal" },
];



export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  const horizontalImages = filteredImages.filter(img => img.orientation === "horizontal");
  const verticalImages = filteredImages.filter(img => img.orientation === "vertical");

  return (
    <div className="min-h-screen bg-white text-black pt-32 px-6 md:px-12">

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

      {/* Horizontal Images */}
      {horizontalImages.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Horizontal Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {horizontalImages.map((img, index) => (
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
        </div>
      )}

      {/* Vertical Images */}
      {verticalImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vertical Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {verticalImages.map((img, index) => (
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
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

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
