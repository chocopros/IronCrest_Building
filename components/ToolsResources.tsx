"use client";

import React from "react";
import Link from "next/link";
import { Calculator, BookOpen, MonitorPlay, FileCheck, Layers } from "lucide-react";

export default function ToolsResources() {
  const tools = [
    {
      id: "quote-assistant",
      title: "Building Quote Assistant",
      desc: "Customize dimensions, roof slopes, door packages, and insulation in minutes to receive an instant factory direct quote estimate.",
      cta: "Start A Quote",
      href: "#get-a-quote",
      icon: Calculator,
      badge: "QUICK PRICING // CAD TAKEOFF",
    },
    {
      id: "brochures",
      title: "Brochures & Literature",
      desc: "Download full color charts, product catalogs, architectural CSI specifications, warranty sheets, and complete erection manuals.",
      cta: "Browse Now",
      href: "#downloads",
      icon: BookOpen,
      badge: "TECHNICAL CSI SPECS",
    },
    {
      id: "visualizer",
      title: "Building Visualizer",
      desc: "Experiment with 20+ panel colors, trims, wainscots, and porch additions in interactive real-time 3D before you build.",
      cta: "Design Now",
      href: "#visualizer",
      icon: MonitorPlay,
      badge: "3D COLOR & MODEL RENDER",
    },
  ];

  return (
    <section className="w-full bg-[#EEF1F4] py-16 md:py-24 select-none border-b border-gray-300">
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-brand-orange" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-steel">
              DIGITAL ENGINEERING SUITE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1C2329] tracking-tight font-serif">
            Tools & Resources
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-gray-700">
            Interactive design software, architectural catalogs, and estimators built to streamline your metal building project from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="relative bg-white border-2 border-[#1C2329] p-8 flex flex-col justify-between hover:border-brand-orange hover:shadow-2xl transition-all group overflow-hidden"
              >
                {/* Corner Rivet */}
                <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
                <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 bg-[#1C2329] group-hover:bg-brand-orange text-white flex items-center justify-center transition-colors p-3 shadow-md border-b-2 border-brand-orange">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-gray-100 text-brand-steel px-2.5 py-1 border border-gray-300">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase text-[#1C2329] font-serif tracking-tight mt-2">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center justify-between w-full bg-[#1C2329] hover:bg-black text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 transition-colors shadow-md border-b-2 border-brand-orange group"
                  >
                    <span>{tool.cta}</span>
                    <span className="text-brand-orange group-hover:translate-x-1 transition-transform">▶</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
