"use client"

import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      ref={sectionRef}
className="section-padding py-28 md:py-32 bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <div className="container-sacred">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-sans text-sm font-medium text-primary tracking-widest uppercase mb-4">
            The Divine Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            About Sri Ramavadhuta
          </h2>
          <div className="w-20 h-1 bg-gradient-divine mx-auto rounded-full" />
        </div>

        {/* 3-column layout: Left Image - Center Text - Right Image */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
<div
  className={`relative transition-all duration-1000 delay-200 px-4 md:px-6 ${
    isVisible
      ? "opacity-100 -translate-x-0"
      : "opacity-0 -translate-x-10"
  }`}
>
  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
    <img
      src="about.jpeg"
      alt="Sri Ramavadhuta"
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* Center Text */}
          <div
            className={`transition-all duration-1000 delay-300 text-center lg:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                <span className="text-gradient-sacred font-semibold">
                  Sri Avadhutha Rami Reddy Thatha
                </span>{" "}
                
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed">
                Born on the auspicious day of Srikrishna Janmashtami at Anugonda
                village of Kurnool District in Andhra Pradesh, born to Hanumanth Reddy and Eshwaramma in 1949 on Shravan
                Bahula Ashtami.Just like Lord
                Krishna showed miracles from childhood, Sri Ramavadhuta also
                performed divine acts early in life.
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed">
                At age 13, Tatha moved to Kallur Village near Kurnool. Devotees
                regarded Sri Rami Reddy Thatha as the guiding head of their
                families, and he took full responsibility for their well-being.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-lg shadow-soft">
                <p className="font-serif text-lg italic text-foreground">
                  "This is why Sri Ramavadhuta is called ‘Tatha’ — the beloved
                  grandfather who guides, protects, and uplifts."
                </p>
              </blockquote>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-sans font-medium text-primary hover:text-accent transition-colors group"
              >
                Read Complete Biography{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="baba.png"
                alt="Sri Ramavadhuta"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
