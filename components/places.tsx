"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

export default function PlacesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sacredPlaces = [
    {
      title: "Samadhi Mandir",
      description: "The sacred shrine where devotees experience divine presence.",
      image: "8.jpg",
      link: "#",
    },
    {
      title: "Gurusthan",
      description: "The holy seat of the Guru radiating spiritual blessings.",
      image: "9.jpg",
      link: "#",
    },
    {
      title: "Sacred Dhuni",
      description: "The eternal flame that purifies and blesses all devotees.",
      image: "15.jpeg",
      link: "#",
    },
    {
      title: "Thata Sai Mandir",
      description: "A divine space where devotees connect with spiritual energy.",
      image: "4.jpg",
      link: "#",
    },
    {
      title: "Anugonda",
      description: "The birthplace of Sri Ramavadhuta, blessed with miracles.",
      image: "6.jpeg",
      link: "#",
    },
  ];

  return (
    <section
      id="places"
      ref={sectionRef}
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            Pilgrimage Destinations
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Sacred Places & Shrines
          </h2>

          <p className="text-gray-600 mt-4">
            Visit these holy sites to experience the divine presence and receive blessings.
          </p>

          <div className="w-24 h-1 mt-6 mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sacredPlaces.map((place, index) => (
            <a
              key={place.title}
              href={place.link}
              className={`group overflow-hidden rounded-2xl shadow-md bg-white transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition">
                  {place.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {place.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-orange-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
