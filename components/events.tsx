"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, BookOpen, Flame } from "lucide-react";

export default function EventsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const events = [
    {
      icon: BookOpen,
      title: "Thata Jeevitha Charita Parayana",
      description:
        "Sacred reading of the life story of Sri Ramavadhuta, bringing divine blessings and spiritual insights to all devotees.",
      link: "#",
    },
    {
      icon: Flame,
      title: "Daily Sevas",
      description:
        "Experience the sanctity of daily rituals and sevas performed at the ashram with devotion and traditional practices.",
      link: "#",
    },
    {
      icon: Calendar,
      title: "Special Events & Festivals",
      description:
        "Join us for grand celebrations of sacred occasions that bring the community together in divine celebration.",
      link: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-sans text-sm font-medium text-orange-600 tracking-widest uppercase mb-4">
            Spiritual Gatherings
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Events & Sacred Sevas
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Participate in divine ceremonies and experience the transformative power of devotion
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.title}
                className={`text-center group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500 group-hover:-translate-y-1">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 border-2 border-orange-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  className="inline-flex items-center gap-2 font-sans font-medium text-orange-600 hover:text-red-500 transition-colors group/link"
                >
                  <span>View Details</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Live Pooja CTA */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_12px_hsl(0,100%,50%)]" />
            <p className="font-serif text-lg text-gray-900">Watch Live Swami Pooja</p>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-sans font-medium rounded-lg shadow hover:shadow-2xl transition-all duration-300"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
