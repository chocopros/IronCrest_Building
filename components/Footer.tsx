"use client";

import React, { useState } from "react";
import Link from "next/link";
import IronCrestLogo from "./IronCrestLogo";
import { Phone, MapPin, ArrowRight, ShieldCheck, Check, Factory, Award } from "lucide-react";

interface FooterProps {
  onOpenStoreLocator?: () => void;
  onOpenQuoteModal?: () => void;
}

export default function Footer({
  onOpenStoreLocator,
  onOpenQuoteModal,
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [customHoneypot, setCustomHoneypot] = useState(""); // Anti-spam hidden honeypot
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (customHoneypot) return;
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#11161A] text-white select-none border-t-2 border-brand-charcoal-light">
      {/* ======================================================== */}
      {/* PRE-FOOTER DUAL CALL-TO-ACTION BLOCKS (Heavy Steel Plates)*/}
      {/* ======================================================== */}
      <div className="border-b border-gray-800 bg-black/40">
        <div className="max-w-site mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Block 1: GET A QUOTE */}
            <div className="relative p-8 border-2 border-gray-700 bg-[#171D22] flex flex-col justify-between shadow-xl">
              {/* Corner Rivet Details */}
              <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
              <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-brand-orange" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                    FACTORY DIRECT PRICING // AISC CERTIFIED
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight font-serif text-white mt-1">
                  Get A Quote
                </h3>
                <div className="h-0.5 w-12 bg-brand-orange mt-2 mb-3" />
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Start your custom steel building or roofing estimate today. Speak directly with our structural & electrical engineers Jose Diego Monroy (B.S.C.E.) or Jesus Arechider (B.S.E.E.) for immediate pricing.
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand-orange font-bold text-sm bg-black/40 p-2.5 border-l-2 border-brand-orange inline-flex">
                  <Phone className="w-4 h-4" />
                  <a href="tel:8327810906" className="hover:underline font-mono">
                    (832) 781-0906
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 transition-colors shadow-lg border-b-2 border-black cursor-pointer"
                >
                  <span>Request A Free Quote</span>
                  <span>▶</span>
                </button>
              </div>
            </div>

            {/* Block 2: OFFICE LOCATION */}
            <div className="relative p-8 border-2 border-gray-700 bg-[#171D22] flex flex-col justify-between shadow-xl">
              {/* Corner Rivet Details */}
              <span className="absolute top-2.5 left-2.5 rivet-head-dark z-10" />
              <span className="absolute top-2.5 right-2.5 rivet-head-dark z-10" />

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-brand-blue" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-zinc">
                    HEADQUARTERS // HOUSTON, TEXAS
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight font-serif text-white mt-1">
                  Office Location
                </h3>
                <div className="h-0.5 w-12 bg-brand-blue mt-2 mb-3" />
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Visit our corporate engineering office or schedule a project review with our team in downtown Houston.
                </p>
                <div className="mt-4 flex flex-col gap-1.5 text-gray-300 text-xs bg-black/40 p-3 border-l-2 border-brand-blue font-mono">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">708 Main St.</span>
                      <span className="text-gray-300 block">10th Floor</span>
                      <span className="text-gray-300 block">Houston, TX 77002</span>
                      <span className="text-brand-orange font-bold text-[11px] block mt-0.5">Houston, Texas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onOpenStoreLocator}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-[#1C2329] text-xs font-black uppercase tracking-wider px-7 py-3.5 transition-colors shadow-lg border-b-2 border-gray-400 cursor-pointer"
                >
                  <span>View Office & Contacts</span>
                  <span className="text-brand-orange">▶</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Credential Badges Bar */}
          <div className="mt-10 pt-8 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-black/30 border border-gray-800">
              <span className="text-xs font-mono font-bold text-brand-orange block">AISC CERTIFIED</span>
              <span className="text-[10px] text-gray-400">Quality Structural Fabricator</span>
            </div>
            <div className="p-3 bg-black/30 border border-gray-800">
              <span className="text-xs font-mono font-bold text-brand-orange block">ASTM A792</span>
              <span className="text-[10px] text-gray-400">Galvalume Plus® High-Tensile</span>
            </div>
            <div className="p-3 bg-black/30 border border-gray-800">
              <span className="text-xs font-mono font-bold text-brand-orange block">UL 2218 CLASS 4</span>
              <span className="text-[10px] text-gray-400">Maximum Hail Impact Resistance</span>
            </div>
            <div className="p-3 bg-black/30 border border-gray-800">
              <span className="text-xs font-mono font-bold text-brand-orange block">ENERGY STAR®</span>
              <span className="text-[10px] text-gray-400">Cool Roof Infrared Reflectivity</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MAIN FOOTER NAVIGATION COLUMNS & NEWSLETTER              */}
      {/* ======================================================== */}
      <div className="max-w-site mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-4 border-b border-gray-700 pb-2">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "CrestFrame™ Rigid-Frame", href: "#crestframe" },
                { label: "IronCore® Cold-Formed", href: "#ironcore" },
                { label: "Pole Barn Post Frame", href: "#pole-barn" },
                { label: "Metal Roof & Wall Panels", href: "#panels" },
                { label: "Metal Roof Shingles", href: "#shingles" },
                { label: "Structural Steel", href: "#structural" },
                { label: "Trim & Flashing", href: "#trim" },
                { label: "Accessories & Doors", href: "#accessories" },
                { label: "CrestCoil™ Jobsite Coils", href: "#crestcoil" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Planning & Quotes */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-4 border-b border-gray-700 pb-2">
              Planning & Quotes
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Building Quote Assistant", href: "#quote-assistant" },
                { label: "Color Charts & Finishes", href: "#color-chart" },
                { label: "Standard Building Sizes", href: "#building-kits" },
                { label: "Structural Load Codes", href: "#load-calc" },
                { label: "Component Catalog", href: "#products" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-4 border-b border-gray-700 pb-2">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Project Gallery", href: "#gallery" },
                { label: "Learning Center & Blog", href: "#blog" },
                { label: "Brochures & Catalogs", href: "#brochures" },
                { label: "Color Charts & Warranties", href: "#colors" },
                { label: "Erection Manuals", href: "#manuals" },
                { label: "CSI Specifications", href: "#specs" },
                { label: "Contractor Portal", href: "#contractor" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Customer Service & Financing */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-4 border-b border-gray-700 pb-2">
              Customer Service
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Financing Options", href: "#financing" },
                { label: "Online Bill Pay", href: "#bill-pay" },
                { label: "Order Tracking", href: "#track-order" },
                { label: "Delivery Information", href: "#delivery-info" },
                { label: "Care & Maintenance", href: "#maintenance" },
                { label: "Warranty Registration", href: "#warranty" },
                { label: "Careers at IronCrest", href: "#careers" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Newsletter & Brand */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-4 border-b border-gray-700 pb-2">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Join our engineering dispatch for product updates, technical manual releases, and exclusive seasonal promotions.
            </p>

            {subscribed ? (
              <div className="bg-brand-green/20 border border-brand-green p-3 text-xs text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-green" />
                <span>Thank you for subscribing to IronCrest updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                {/* Anti-spam hidden honeypot */}
                <input
                  type="text"
                  name="customHoneypot"
                  value={customHoneypot}
                  onChange={(e) => setCustomHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="flex border-2 border-gray-700 focus-within:border-brand-orange">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-[#1C2329] text-white placeholder-gray-500 focus:outline-none rounded-none"
                  />
                  <button
                    type="submit"
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white px-3.5 py-2 text-xs font-bold uppercase transition-colors shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[10px] text-gray-500 block font-mono">
                  DIRECT STEEL BULLETINS // NO SPAM
                </span>
              </form>
            )}

            <div id="contact" className="mt-6 pt-4 border-t border-gray-800 space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                  DIRECT CONTACTS:
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">Jose Diego Monroy B.S.C.E.</span>
                    <a href="tel:8327810906" className="text-brand-orange hover:underline">
                      (832) 781-0906
                    </a>
                  </div>
                  <div className="flex flex-col pt-1.5 border-t border-gray-800">
                    <span className="font-bold text-white">Jesus Arechider B.S.E.E.</span>
                    <a href="tel:8327810906" className="text-brand-orange hover:underline">
                      (832) 781-0906
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800">
                <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">
                  UBICACIÓN DE OFICINA:
                </span>
                <div className="text-[11px] text-gray-300 font-mono leading-tight space-y-0.5">
                  <p className="font-semibold text-white">708 Main St.</p>
                  <p>10th Floor</p>
                  <p>Houston, TX 77002</p>
                  <p className="text-brand-orange">houston texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                             */}
      {/* ======================================================== */}
      <div className="border-t border-gray-800 bg-black/60 py-6 text-xs text-gray-400">
        <div className="max-w-site mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <IronCrestLogo className="h-6" variant="light" />
            <span className="text-gray-400 text-[11px] font-mono">
              ©2026 IronCrest Building Systems, Inc. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-gray-400">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="#accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="#sitemap" className="hover:text-white transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
