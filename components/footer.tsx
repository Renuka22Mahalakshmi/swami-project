"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Youtube, Facebook } from "lucide-react";
import shraddhaLogo from "@/public/shraddha.png"; // replace with your logo
import logo from "@/public/logo.png";

const quickLinks = [
  { label: "About Swami", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const sacredLinks = [
  { label: "Samadhi Mandir", href: "/samadhi-mandir" },
  { label: "Gurusthan", href: "/gurusthan" },
  { label: "Sacred Dhuni", href: "/dhuni" },
  { label: "Thata Sai Mandir", href: "/thata-sai-mandir" },
  { label: "Anugonda", href: "/anugonda" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-800 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-fade-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-200/10 rounded-full blur-3xl animate-fade-slow" />

      <div className="container-sacred px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Info */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              {/* Replace the circle with your logo */}
              <Image src={logo} alt="Logo" width={60} height={60} className="object-contain" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900">Sri Rami Reddy Thata</h3>
                <p className="text-xs text-gray-600 tracking-wider">SAMSTHAN</p>
              </div>
            </div>
            <p className="font-sans text-sm text-gray-700 leading-relaxed mb-6">
              A sacred abode of spiritual wisdom, divine blessings, and eternal peace.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCSY0mLqBwfK2OXKoM80GKAA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Youtube className="w-5 h-5 text-gray-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up delay-100">
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-gray-700 hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sacred Places */}
          <div className="animate-fade-up delay-200">
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-6">Sacred Places</h4>
            <ul className="space-y-3">
              {sacredLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-gray-700 hover:text-orange-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Info */}
          <div className="animate-fade-up delay-300">
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-gray-700">
                  Kallur Village, Near Kurnool Town,<br />Kurnool District, Andhra Pradesh
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="font-sans text-sm text-gray-700 hover:text-orange-500">
                  +91 987 654 3210
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@ramireddythata.org.in" className="font-sans text-sm text-gray-700 hover:text-orange-500">
                  info@ramireddythata.org.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Donate Section */}
        <div id="donate" className="mb-16 animate-fade-up delay-400">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">Support the Sacred Mission</h3>
            <p className="font-sans text-white/90 max-w-2xl mx-auto mb-8">
              Your generous contributions help maintain the ashram, support daily sevas, and spread the divine teachings.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-sans font-medium rounded-lg shadow hover:shadow-lg transition-all">
              Donate Now
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300 animate-fade-up delay-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-sm text-gray-600">
              © {new Date().getFullYear()} Avadhutha Sri Rami Reddy Thata Samsthan. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>A Project By</span>
              <Image src={shraddhaLogo} alt="Shraddha" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
