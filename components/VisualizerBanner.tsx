"use client";

import React from "react";
import Link from "next/link";
import { MonitorPlay, Layers } from "lucide-react";

export default function VisualizerBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171D22] text-white py-14 md:py-20 select-none border-b border-gray-800">
      {/* Background with Corrugated Metal Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.muellerinc.com/contentassets/be8ad7ee09484ab48b2b1042d140616e/40-60-module-dark-2.png")',
        }}
      />
      <div className="absolute inset-0 bg-blueprint-grid-dark pointer-events-none opacity-40" />

      {/* Top Left Signature Forge Crimson Wedge */}
      <div
        className="absolute top-0 left-0 w-28 md:w-40 h-28 md:h-40 z-10 pointer-events-none drop-shadow-lg"
        style={{
          background: "#D92525",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Thin Diagonal Orange Line Accent behind image (Matches Screenshot 5) */}
      <div
        className="absolute w-[2px] h-[320px] bg-brand-orange hidden lg:block pointer-events-none opacity-90 shadow-sm"
        style={{
          right: "26%",
          bottom: "-50px",
          transform: "rotate(45deg)",
          zIndex: 5,
        }}
      />

      <div className="max-w-site mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 py-2">
            <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 bg-black/60 border border-brand-orange/40 text-[10px] font-mono tracking-widest uppercase text-brand-orange">
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>3D CAD STRUCTURAL ENGINE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight font-serif text-white">
              Building Visualizer
            </h2>
            <div className="h-1 w-16 bg-brand-orange mt-2 mb-4" />

            <p className="text-xs sm:text-sm text-gray-300 mt-4 leading-relaxed font-normal">
              Let our building visualizer bring your vision to life! Use an existing template or go custom and submit your design to one of our knowledgeable sales representatives for a quote.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#visualizer"
                className="inline-flex items-center justify-between gap-4 bg-white hover:bg-gray-100 text-[#1C2329] text-xs sm:text-sm font-black tracking-wider px-7 py-3.5 transition-colors shadow-xl rounded-none border-l-4 border-brand-orange group"
              >
                <span>Design Your Building</span>
                <span className="text-brand-orange text-xs group-hover:translate-x-1.5 transition-transform">▶</span>
              </Link>
              <div className="text-[10px] font-mono text-gray-400 hidden sm:block">
                <span>[ 20+ FINISH COLORS • INSTANT SPECS ]</span>
              </div>
            </div>
          </div>

          {/* Right Framed Preview Image with Steel Rivet Details */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative overflow-hidden shadow-2xl border-2 border-white/20 bg-black/40 max-w-xl w-full">
              {/* Corner Rivet Details */}
              <span className="absolute top-2 left-2 rivet-head z-20 pointer-events-none" />
              <span className="absolute top-2 right-2 rivet-head z-20 pointer-events-none" />
              <span className="absolute bottom-2 left-2 rivet-head z-20 pointer-events-none" />
              <span className="absolute bottom-2 right-2 rivet-head z-20 pointer-events-none" />

              {/* Technical Blueprint overlay tag */}
              <div className="absolute bottom-3 left-4 z-20 bg-[#1C2329]/90 px-3 py-1 text-[9px] font-mono text-gray-300 border-l-2 border-brand-orange">
                MODEL: BARNDOMINIUM // 40&apos; x 60&apos; x 16&apos;
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.muellerinc.com/globalassets/bannerimage01.png"
                alt="IronCrest 3D Building Visualizer Preview"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
