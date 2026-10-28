"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Tag, Compass, Shield } from "lucide-react";

export interface ProjectItem {
  id: number;
  name: string;
  category: "Residential" | "Self-Storage" | "Garages / Workshop" | "Agriculture" | "Commercial" | "Carport";
  location: string;
  specs: string;
  system: string;
  windLoad: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    name: "Dandy Residence",
    category: "Residential",
    location: "Kerrville, TX",
    specs: "CFS Standing Seam Roof & Accent Siding (24-Gauge)",
    system: "Architectural Concealed Fastener",
    windLoad: "140 MPH Wind Rated",
    image:
      "https://centria.widen.net/content/xmps6jz10n/jpeg/dandy%20residence%203__wide-2.jpg",
  },
  {
    id: 2,
    name: "Tullos Residence",
    category: "Residential",
    location: "Fredericksburg, TX",
    specs: "BattenLok® HS Structural Standing Seam Metal Roof",
    system: "High-Wind Standing Seam",
    windLoad: "150 MPH Wind Rated",
    image:
      "https://centria.widen.net/content/npapwyyznr/jpeg/mue26_new mueller site banner 1_0826.jpg",
  },
  {
    id: 3,
    name: "Chenal Storage Center",
    category: "Self-Storage",
    location: "Little Rock, AR",
    specs: "Multi-Unit Mini Storage Complex with Roll-Up Doors",
    system: "IronCore® Cold-Formed Mini Storage",
    windLoad: "Commercial Code Compliant",
    image:
      "https://centria.widen.net/content/zlsdnb6glo/jpeg/mue26_new mueller site banner 4_ms_0826.jpg",
  },
  {
    id: 4,
    name: "Espita Garage",
    category: "Garages / Workshop",
    location: "Abilene, TX",
    specs: "IronCore® 40x60 Cold-Formed 2-Bay Workshop",
    system: "IronCore® Bolt-Together Cold-Formed",
    windLoad: "135 MPH Wind Rated",
    image:
      "https://centria.widen.net/content/ooeolavdac/jpeg/espita%20garage%201__wide-2.jpg",
  },
  {
    id: 5,
    name: "Harris Horse Barn",
    category: "Agriculture",
    location: "Weatherford, TX",
    specs: "Pole Barn Post Frame with 12x40 Lean-To Loafing Shed",
    system: "Heavy Timber Post-Frame / 26-Ga PBR",
    windLoad: "Agricultural Wind/Snow Load",
    image:
      "https://centria.widen.net/content/ustlsjwqxu/jpeg/mue26_new mueller site banner 2_0826.jpg",
  },
  {
    id: 6,
    name: "Morning Sun Dollar Store",
    category: "Commercial",
    location: "Waco, TX",
    specs: "CrestFrame™ Rigid-Frame Clear-Span Retail Facility",
    system: "CrestFrame™ Heavy Structural Rigid-Frame",
    windLoad: "AISC Certified Commercial",
    image:
      "https://centria.widen.net/content/n1pzfkmzkw/jpeg/james%20shop%20and%20apts%206__wide-2.jpg",
  },
  {
    id: 7,
    name: "Residential Carport",
    category: "Carport",
    location: "San Angelo, TX",
    specs: "24x30 Prefab Two-Vehicle Steel Canopy with Trim",
    system: "Tubular Galvanized Steel Canopy",
    windLoad: "120 MPH Wind Rated",
    image:
      "https://centria.widen.net/content/qcws7tahvs/jpeg/blackwell%20residence%20and%20shop%202__wide-2.jpg",
  },
];

const CATEGORIES = [
  "All",
  "Residential",
  "Self-Storage",
  "Garages / Workshop",
  "Agriculture",
  "Commercial",
  "Carport",
] as const;

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const prevProject = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const nextProject = () => {
    setCurrentPage((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const activeIndex = Math.min(currentPage, Math.max(0, filteredProjects.length - 1));
  const project = filteredProjects[activeIndex] || PROJECTS[0];

  return (
    <section className="w-full bg-[#E8ECEF] py-16 md:py-24 select-none border-b border-gray-300" id="project-gallery">
      <div className="max-w-site mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-orange" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-steel">
                BUILT ACROSS AMERICA // JOB SITE PORTFOLIO
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1C2329] tracking-tight font-serif">
              Project Gallery
            </h2>
            <div className="h-1 w-20 bg-brand-orange mt-2 mb-3" />
            <p className="text-xs sm:text-sm text-gray-700 max-w-xl">
              Explore completed real-world builds using IronCrest pre-engineered systems, heavy rigid frames, and architectural metal panels.
            </p>
          </div>

          <Link
            href="#all-projects"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1C2329] hover:text-brand-orange transition-colors"
          >
            <span>View All Projects</span>
            <span className="text-brand-orange">→</span>
          </Link>
        </div>

        {/* Filter Tabs (Industrial Heavy Metal Plate Look) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b-2 border-gray-300 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer border-b-2 ${
                activeCategory === cat
                  ? "bg-[#1C2329] text-white border-brand-orange shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-transparent border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center text-gray-500 text-sm">
            No projects found in this category.
          </div>
        ) : (
          <div className="bg-white border-2 border-[#1C2329] shadow-2xl overflow-hidden relative">
            {/* Rivets in corners */}
            <span className="absolute top-2 left-2 rivet-head z-20 pointer-events-none" />
            <span className="absolute top-2 right-2 rivet-head z-20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
              {/* Image Frame (8 cols) */}
              <div className="lg:col-span-8 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden group bg-[#1C2329]">
                <div
                  key={project.id}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${project.image}")` }}
                  role="img"
                  aria-label={project.name}
                />
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1C2329]/95 text-white text-xs font-bold uppercase tracking-wider border-l-2 border-brand-orange">
                    <Tag className="w-3 h-3 text-brand-orange" />
                    {project.category}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-black/80 text-gray-300 text-[10px] font-mono tracking-wider">
                    <Shield className="w-3 h-3 text-brand-orange" />
                    {project.windLoad}
                  </span>
                </div>
              </div>

              {/* Details & Controls Column (4 cols) */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l-2 border-[#1C2329]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-steel bg-gray-100 px-2 py-0.5 border border-gray-200">
                      PROJECT 0{activeIndex + 1} // 0{filteredProjects.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#1C2329] uppercase tracking-tight mt-3 font-serif">
                    {project.name}
                  </h3>
                  <div className="h-1 w-12 bg-brand-orange mt-2 mb-4" />

                  <div className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                    <div className="bg-gray-50 p-2.5 border-l-2 border-brand-blue">
                      <span className="font-bold text-[#1C2329] block uppercase text-[10px] font-mono">Location</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="bg-gray-50 p-2.5 border-l-2 border-brand-orange">
                      <span className="font-bold text-[#1C2329] block uppercase text-[10px] font-mono">System Type</span>
                      <span>{project.system}</span>
                    </div>
                    <div className="bg-gray-50 p-2.5 border-l-2 border-brand-steel">
                      <span className="font-bold text-[#1C2329] block uppercase text-[10px] font-mono">Profile & Finish</span>
                      <span>{project.specs}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation and CTA */}
                <div className="pt-6 border-t border-gray-200 mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevProject}
                        aria-label="Previous project"
                        className="p-2 border-2 border-[#1C2329] hover:bg-[#1C2329] hover:text-white text-[#1C2329] transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextProject}
                        aria-label="Next project"
                        className="p-2 border-2 border-[#1C2329] hover:bg-[#1C2329] hover:text-white text-[#1C2329] transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {filteredProjects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-2 transition-all rounded-none ${
                            idx === activeIndex
                              ? "w-6 bg-brand-orange"
                              : "w-2 bg-gray-400 hover:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`#project-${project.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1C2329] hover:bg-black text-white text-xs font-black uppercase tracking-wider py-3.5 transition-colors shadow-md border-b-2 border-brand-orange"
                  >
                    <span>View Project Specifications</span>
                    <span className="text-brand-orange">▶</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
