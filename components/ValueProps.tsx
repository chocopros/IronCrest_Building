"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Factory, Headphones, Award, Hammer, Truck } from "lucide-react";

export default function ValueProps() {
  return (
    <div className="w-full select-none">
      {/* ======================================================== */}
      {/* 1. TRANSFORM HOME ROOFING BANNER (Heavy Steel Look)      */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#171D22] py-16 md:py-24 text-white border-b border-gray-800">
        {/* Background Image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              'url("https://centria.widen.net/content/xmps6jz10n/jpeg/dandy%20residence%203__wide-2.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171D22] via-[#171D22]/85 to-transparent" />
        <div className="absolute inset-0 bg-blueprint-grid-dark pointer-events-none opacity-30" />

        {/* Top-Left Corner Wedge */}
        <div
          className="absolute top-0 left-0 w-28 md:w-40 h-28 md:h-40 z-10 pointer-events-none drop-shadow-md"
          style={{
            background: "#D92525",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />

        <div className="max-w-site mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2 px-2.5 py-1 bg-black/60 border border-brand-orange/40 text-[10px] font-mono tracking-widest uppercase text-brand-orange">
              <Award className="w-3.5 h-3.5" />
              <span>ARCHITECTURAL METAL ROOFING SYSTEMS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight font-serif text-white mt-2 leading-tight">
              Transform the look of your home with metal roofing
            </h2>
            <div className="h-1 w-20 bg-brand-orange mt-2 mb-4" />

            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
              Increase your property value, dramatically improve energy efficiency, and enjoy lifetime peace of mind with Class 4 impact resistance, non-combustible Class A fire ratings, and 30-year paint finish warranties.
            </p>

            {/* Dual Action Buttons (Industrial Steel Look) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#residential-roofing"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 transition-all shadow-lg border-b-2 border-black"
              >
                <span>Shop Residential Metal Roofing</span>
                <span className="text-xs">▶</span>
              </Link>
              <Link
                href="#guide-roofing"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white hover:text-[#1C2329] text-white border-2 border-white text-xs font-black uppercase tracking-wider px-7 py-3.5 transition-all"
              >
                <span>Get Started with Metal Roofing</span>
                <span className="text-brand-orange text-xs">▶</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WHY BUY FROM IRONCREST (Cast Steel Plate Design)       */}
      {/* ======================================================== */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-gray-300 bg-blueprint-grid">
        <div className="max-w-site mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-orange" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-steel">
                MODERN STEEL MANUFACTURING & ENGINEERING
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1C2329] tracking-tight font-serif">
              Why Buy From IronCrest?
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="relative p-8 border-2 border-[#1C2329] bg-[#F8FAFC] hover:border-brand-orange hover:shadow-2xl transition-all group overflow-hidden">
              {/* Corner Rivet */}
              <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
              <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

              <div className="w-14 h-14 bg-[#1C2329] text-white flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors shadow-md border-b-2 border-brand-orange">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-brand-steel tracking-wider block mb-1">
                PILLAR 01 // STRUCTURAL INTEGRITY
              </span>
              <h3 className="text-lg font-black uppercase text-[#1C2329] font-serif tracking-tight">
                Precision Engineering
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
                Built with modern steel engineering, high-tensile cold-forming, and rigid-frame manufacturing, our pre-engineered buildings are engineered to withstand extreme snow, hurricane-force winds, and seismic demands.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="relative p-8 border-2 border-[#1C2329] bg-[#F8FAFC] hover:border-brand-orange hover:shadow-2xl transition-all group overflow-hidden">
              {/* Corner Rivet */}
              <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
              <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

              <div className="w-14 h-14 bg-[#1C2329] text-white flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors shadow-md border-b-2 border-brand-orange">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-brand-steel tracking-wider block mb-1">
                PILLAR 02 // LOGISTICS & SUPPLY
              </span>
              <h3 className="text-lg font-black uppercase text-[#1C2329] font-serif tracking-tight">
                Nationwide Manufacturing & Supply
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
                Direct-from-the-manufacturer pricing with zero middleman markups. Our automated roll-forming mills, coil inventory, and dedicated fleet ensure reliable delivery directly to your job site or nearest branch.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="relative p-8 border-2 border-[#1C2329] bg-[#F8FAFC] hover:border-brand-orange hover:shadow-2xl transition-all group overflow-hidden">
              {/* Corner Rivet */}
              <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
              <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

              <div className="w-14 h-14 bg-[#1C2329] text-white flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors shadow-md border-b-2 border-brand-orange">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-brand-steel tracking-wider block mb-1">
                PILLAR 03 // FULL PROJECT SUPPORT
              </span>
              <h3 className="text-lg font-black uppercase text-[#1C2329] font-serif tracking-tight">
                Support from Concept to Delivery
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
                Our in-house design engineers and local building specialists guide you every step of the way — from selecting the optimal structural profile to providing anchor bolt plans, CSI specifications, and certified erection manuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
