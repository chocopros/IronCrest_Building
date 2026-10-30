"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Hammer } from "lucide-react";

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  alt: string;
  specCode: string;
  gradeBadge: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "SAME PEOPLE, SAME SERVICE.",
    subtitle:
      "Now backed by the strength of IronCrest Building Systems. Nationwide supply, factory-direct roll-forming, and dedicated local expertise.",
    ctaText: "VIEW ALL LOCATIONS",
    ctaLink: "#store-locator",
    image: "/carousel/slide1.jpg",
    alt: "IronCrest retail locations and manufacturing distribution network",
    specCode: "NETWORK // 40+ REGIONAL PLANTS & HUBS",
    gradeBadge: "DIRECT ROLL-FORMING",
  },
  {
    id: 2,
    title: "READY. SET. BUILD.",
    subtitle:
      "Seasonal savings start now. Take advantage of manufacturer-direct pricing on steel workshops, storage buildings, and residential kits.",
    ctaText: "VIEW SPECIAL OFFERS",
    ctaLink: "#special-offers",
    image: "/carousel/slide2.jpg",
    alt: "Seasonal metal building savings and promotional pricing",
    specCode: "PROMO // BOLT-TOGETHER FRAMING PACKAGES",
    gradeBadge: "FACTORY DIRECT SAVINGS",
  },
  {
    id: 3,
    title: "BUILD IT RIGHT FROM THE START",
    subtitle: "Less Concrete. Less labor. More control over your build.",
    ctaText: "PLAN YOUR POLE BARN",
    ctaLink: "#pole-barn",
    image: "/carousel/slide3.jpg",
    alt: "Black modern pole barn post frame building with garage doors",
    specCode: "POST-FRAME // SOLID TRUSS ENGINEERING",
    gradeBadge: "26-GA COMMERCIAL STEEL",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-10 md:py-16 select-none bg-blueprint-grid border-b border-gray-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Top Left Signature Forge Crimson Wedge with Industrial Cut */}
      <div
        className="absolute top-0 left-0 w-28 md:w-44 h-28 md:h-44 z-10 pointer-events-none drop-shadow-md"
        style={{
          background: "#D92525",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Bottom Right Signature Forge Crimson Wedge */}
      <div
        className="absolute bottom-0 right-0 w-40 md:w-[22rem] h-40 md:h-[22rem] z-10 pointer-events-none hidden sm:block drop-shadow-md"
        style={{
          background: "#D92525",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Main Slide Container */}
      <div className="max-w-site mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px] md:min-h-[480px]">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 md:py-6">
            <div>
              {/* Technical Spec Tag */}
              <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 bg-[#1C2329] text-white text-[10px] font-mono tracking-wider uppercase border-l-2 border-brand-orange">
                <Hammer className="w-3 h-3 text-brand-orange" />
                <span>{slide.specCode}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase text-[#1C2329] tracking-tight leading-[1.12] font-serif">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed font-normal">
                {slide.subtitle}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-3 bg-[#1C2329] hover:bg-black text-white text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 transition-all shadow-lg border-b-2 border-brand-orange group"
                >
                  <span>{slide.ctaText}</span>
                  <span className="text-brand-orange text-sm font-black group-hover:translate-x-1.5 transition-transform">
                    ▶
                  </span>
                </Link>
              </div>
            </div>

            {/* Slider Navigation Controls (Matches Screenshot 1 + Industrial Tuning) */}
            <div className="flex items-center gap-3 mt-10 md:mt-14">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="text-brand-orange hover:text-brand-orange-hover p-1.5 transition-colors border border-gray-300 hover:border-brand-orange bg-white shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Dots / Indicators */}
              <div className="flex items-center gap-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${s.id}`}
                    className={`h-2.5 transition-all rounded-none ${
                      idx === currentSlide
                        ? "w-7 bg-brand-orange shadow-sm"
                        : "w-2.5 bg-gray-400 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="text-brand-orange hover:text-brand-orange-hover p-1.5 transition-colors border border-gray-300 hover:border-brand-orange bg-white shadow-sm"
              >
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Slide Number Indicator (Industrial Monospace) */}
              <span className="text-xs font-mono font-bold text-gray-500 ml-2 bg-gray-100 px-2 py-0.5 border border-gray-300">
                0{slide.id} // 0{SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right Image Column (Framed with Steel Rivet Details) */}
          <div className="lg:col-span-7 relative h-[280px] sm:h-[370px] md:h-[450px] w-full overflow-hidden shadow-2xl border-2 border-[#1C2329] bg-[#1C2329]">
            {/* Rivets in the 4 corners */}
            <span className="absolute top-2 left-2 rivet-head z-20 pointer-events-none" />
            <span className="absolute top-2 right-2 rivet-head z-20 pointer-events-none" />
            <span className="absolute bottom-2 left-2 rivet-head z-20 pointer-events-none" />
            <span className="absolute bottom-2 right-2 rivet-head z-20 pointer-events-none" />

            {/* Industrial Stamp Badge */}
            <div className="absolute top-4 right-4 z-20 bg-[#1C2329]/95 text-white px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest border border-brand-orange/60 shadow-lg flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>{slide.gradeBadge}</span>
            </div>

            {/* Background image transition */}
            <div
              key={slide.id}
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
              role="img"
              aria-label={slide.alt}
            />
            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
