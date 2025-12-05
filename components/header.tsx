"use client";

import Image from "next/image";
import heroBg from "../public/heaven.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Centered Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Sacred temple"
          fill
          className="object-cover"  // ensure original proportions
          priority
        />
      </div>

      {/* Optional Overlays (you can remove if not needed) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-104">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

       <p className="font-serif text-lg md:text-xl text-[#f54202] mb-6">
  ॐ श्री सद्गुरु देव की जय
</p>

<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-md mb-6">
  Avadhutha Sri
  <span className="block mt-2 bg-gradient-to-r from-[#f54202] to-white bg-clip-text text-transparent">
    Rami Reddy Thata
  </span>
  <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl font-normal text-white/90">
    Samsthan
  </span>
</h1>

<div className="flex justify-center mb-8">
  <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f54202] to-transparent" />
</div>


        
      </div>

      {/* Scroll Icon */}
      
    </section>
  );
};
