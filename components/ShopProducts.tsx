"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProductCard {
  id: string;
  title: string;
  image: string;
  href: string;
  hoverText: string;
  technicalStamp: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: "buildings",
    title: "METAL BUILDINGS",
    image:
      "https://centria.widen.net/content/ooeolavdac/jpeg/espita%20garage%201__wide-2.jpg",
    href: "#metal-buildings",
    hoverText:
      "Complete pre-engineered steel buildings, rigid-frame CrestFrame™ packages, cold-formed IronCore® kits, and custom pole barn post-frame structures designed to your exact specs.",
    technicalStamp: "HEAVY RIGID-FRAME // ASTM A792",
  },
  {
    id: "panels",
    title: "METAL ROOF & WALL PANELS",
    image:
      "https://centria.widen.net/content/xmps6jz10n/jpeg/dandy%20residence%203__wide-2.jpg",
    href: "#panels",
    hoverText:
      "We offer a variety of metal roof and wall panel systems to accommodate any residential or commercial project, including standing seam, concealed fastener, and exposed fastener panels.",
    technicalStamp: "26 & 24-GA STEEL // KYNAR 500®",
  },
  {
    id: "trim",
    title: "TRIM",
    image:
      "https://centria.widen.net/content/qcws7tahvs/jpeg/blackwell%20residence%20and%20shop%202__wide-2.jpg",
    href: "#trim",
    hoverText:
      "Factory-formed ridge caps, rake trims, corner trims, gutters, and downspouts available in 26 and 24-gauge steel with matching color finishes.",
    technicalStamp: "PRECISION FLASHING // 10' & 20' RUNS",
  },
  {
    id: "structural",
    title: "STRUCTURAL",
    image:
      "https://centria.widen.net/content/n1pzfkmzkw/jpeg/james%20shop%20and%20apts%206__wide-2.jpg",
    href: "#structural",
    hoverText:
      "High-strength C-purlins, Z-purlins, eave struts, base channels, square tubing, and welded steel trusses engineered for commercial load-bearing stability.",
    technicalStamp: "C & Z PURLINS // 50 KSI HIGH-TENSILE",
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    image:
      "https://centria.widen.net/content/vttgqwxcys/jpeg/hays%20shop%203__wide.jpg",
    href: "#accessories",
    hoverText:
      "Commercial roll-up doors, walk-in doors, fiberglass skylights, cupolas, foil insulation, self-drilling fasteners, and closure strips for complete building envelopes.",
    technicalStamp: "COMMERCIAL HARDWARE & DOORS",
  },
];

export default function ShopProducts() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#F4F6F8] py-14 md:py-20 select-none border-b border-gray-300" id="shop-products">
      <div className="max-w-site mx-auto px-4 md:px-8">
        {/* Section Heading with Industrial Marker */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-brand-orange" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-steel">
              DIRECT FACTORY INVENTORY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1C2329] tracking-tight font-serif">
            Shop Products
          </h2>
          <div className="h-1 w-20 bg-brand-orange mt-2 mb-4" />

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            Explore our full range of metal buildings, roofing, components and more, all backed by the expertise of IronCrest Building Systems. Whether you&apos;re building a pole barn, an innovative IronCore® cold-formed structure, or outfitting a project with the right panels and parts, we design, quote, and deliver solutions nationwide for residential, commercial, industrial, agricultural, and recreational needs.
          </p>
        </div>

        {/* 5-Card Layout Grid: 2 Top Row, 3 Bottom Row */}
        <div className="space-y-4 md:space-y-6">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PRODUCTS.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative block h-[260px] sm:h-[320px] overflow-hidden group shadow-lg border-2 border-[#1C2329] bg-[#1C2329]"
              >
                {/* Corner Rivet Details */}
                <span className="absolute top-2.5 left-2.5 rivet-head z-20 pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 rivet-head z-20 pointer-events-none" />

                {/* Industrial Technical Stamp Badge */}
                <div className="absolute top-4 left-6 z-20 bg-[#1C2329]/90 text-white px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider border-l-2 border-brand-orange">
                  {item.technicalStamp}
                </div>

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />

                {/* Bottom Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Hover Overlay with Text */}
                <div
                  className={`absolute inset-0 bg-[#1C2329]/90 p-8 flex flex-col justify-center items-center transition-opacity duration-300 z-15 ${
                    hoveredCard === item.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-orange tracking-widest mb-2">
                    IRONCREST SPECIFICATION
                  </span>
                  <p className="text-white text-xs sm:text-sm leading-relaxed text-center max-w-md">
                    {item.hoverText}
                  </p>
                  <span className="mt-4 px-4 py-1.5 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider">
                    EXPLORE LINE →
                  </span>
                </div>

                {/* Bottom Title Bar (Matches Screenshot 3) */}
                <div className="absolute bottom-4 left-0 right-0 px-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    {/* Orange Vertical Marker */}
                    <span className="w-2 h-7 bg-brand-orange shrink-0 shadow-sm" />
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-wider uppercase font-sans drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                  {/* Right Triangle Arrow */}
                  <span className="text-white text-base group-hover:translate-x-1.5 group-hover:text-brand-orange transition-all font-bold">
                    ▶
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {PRODUCTS.slice(2, 5).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative block h-[230px] sm:h-[270px] overflow-hidden group shadow-lg border-2 border-[#1C2329] bg-[#1C2329]"
              >
                {/* Corner Rivet Details */}
                <span className="absolute top-2.5 left-2.5 rivet-head z-20 pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 rivet-head z-20 pointer-events-none" />

                {/* Industrial Technical Stamp Badge */}
                <div className="absolute top-4 left-5 z-20 bg-[#1C2329]/90 text-white px-2 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider border-l-2 border-brand-orange">
                  {item.technicalStamp}
                </div>

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />

                {/* Bottom Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Hover Overlay with Text */}
                <div
                  className={`absolute inset-0 bg-[#1C2329]/90 p-5 flex flex-col justify-center items-center transition-opacity duration-300 z-15 ${
                    hoveredCard === item.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-orange tracking-widest mb-1.5">
                    SPECIFICATIONS
                  </span>
                  <p className="text-white text-xs leading-relaxed text-center">
                    {item.hoverText}
                  </p>
                  <span className="mt-3 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider">
                    VIEW PRODUCTS →
                  </span>
                </div>

                {/* Bottom Title Bar */}
                <div className="absolute bottom-4 left-0 right-0 px-5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2.5">
                    {/* Orange Vertical Marker */}
                    <span className="w-1.5 h-6 bg-brand-orange shrink-0 shadow-sm" />
                    <h3 className="text-white font-black text-sm sm:text-base tracking-wider uppercase font-sans drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                  {/* Right Triangle Arrow */}
                  <span className="text-white text-sm group-hover:translate-x-1.5 group-hover:text-brand-orange transition-all font-bold">
                    ▶
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button (Industrial Heavy Steel Button) */}
        <div className="mt-10">
          <Link
            href="#all-products"
            className="inline-flex items-center gap-3 bg-[#1C2329] hover:bg-black text-white text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 transition-colors shadow-md border-b-2 border-brand-orange rounded-none group"
          >
            <span>Shop All Products</span>
            <span className="text-brand-orange text-xs group-hover:translate-x-1 transition-transform">▶</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
