"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import IronCrestLogo from "./IronCrestLogo";
import DeliveryLocationModal from "./DeliveryLocationModal";
import StoreLocatorModal from "./StoreLocatorModal";
import {
  Phone,
  MapPin,
  Truck,
  User,
  ShoppingCart,
  Search,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  Compass,
  FileText,
  Wrench,
  Sparkles,
} from "lucide-react";

export const PANELS_LIST = [
  "AP",
  "CF",
  "CFS",
  "CPB",
  "CWH",
  "CWP",
  "MLK",
  "MSL",
  "MTL",
  "PBR",
  "PBU",
  "SSP",
  "7.2 Panel",
  "Artisan®",
  "AVP",
  "BattenLok® HS",
  "Double-Lok™",
  "FW-120",
  "LokSeam®",
  "PBD",
  "Retro-R®",
  "ShadowRib®",
  "Slimline®",
  "SuperLok®",
  "Ultra-Dek®",
];

export default function Navbar() {
  // Location states
  const [deliveryZip, setDeliveryZip] = useState("77002");
  const [nearestStore, setNearestStore] = useState("Houston HQ (708 Main St.)");
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Desktop Mega Menu state
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [buildingsSubTab, setBuildingsSubTab] = useState<"type" | "use" | "kits">("type");
  const [productsSubTab, setProductsSubTab] = useState<"panels" | "shingles" | "structural" | "trim" | "coil">("panels");

  // Mobile Drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileLevel, setMobileLevel] = useState<"main" | "metal-buildings" | "products" | "inspiration" | "resources" | "about-us">("main");
  const [mobileSubCategory, setMobileSubCategory] = useState<string | null>(null);

  // Account dropdown state
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Cart count
  const [cartCount, setCartCount] = useState(0);

  // Close menus on click outside
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Quick search suggestions
  const searchSuggestions = [
    { label: "CrestFrame™ Rigid-Frame Buildings", href: "#metal-buildings", tag: "Building" },
    { label: "IronCore® Cold-Formed Kits", href: "#building-kits", tag: "Kit" },
    { label: "PBR Metal Roof & Wall Panel", href: "#products", tag: "Panel" },
    { label: "BattenLok® HS Standing Seam", href: "#products", tag: "Panel" },
    { label: "Building Quote Assistant", href: "#quote-assistant", tag: "Quote" },
    { label: "CrestCoil™ Steel Jobsite Coils", href: "#products", tag: "Coil" },
  ].filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header ref={navRef} className="w-full bg-white relative z-40 border-b border-gray-300">
        {/* ======================================================== */}
        {/* TOP INDUSTRIAL CREDENTIAL BAR (Heavy Steel Manufacturing)*/}
        {/* ======================================================== */}
        <div className="bg-[#12171B] text-gray-300 text-[10px] font-mono tracking-wider py-1.5 px-4 border-b border-gray-800 hidden sm:block select-none">
          <div className="max-w-site mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-gray-300 font-semibold">
                <span className="w-1.5 h-1.5 bg-brand-orange animate-pulse" />
                AISC CERTIFIED QUALITY FABRICATOR
              </span>
              <span className="text-gray-600">|</span>
              <span className="hidden md:inline text-gray-400">
                GALVALUME PLUS® 50/80 KSI HIGH-TENSILE STEEL
              </span>
              <span className="text-gray-600 hidden md:inline">|</span>
              <span className="hidden lg:inline text-gray-400">
                CLASS 4 HAIL & 140+ MPH WIND LOAD RATED
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-brand-orange font-bold">
                FACTORY DIRECT ROLL-FORMING & REGIONAL PLANTS
              </span>
              <span className="text-gray-600">|</span>
              <a
                href="tel:8327810906"
                className="text-white hover:text-brand-orange transition-colors font-bold font-mono"
              >
                CALL (832) 781-0906
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TOP UTILITY BAR (Phone, Store, Delivery, Account, Cart)  */}
        {/* ======================================================== */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-site mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block" title="IronCrest Building Systems">
                <IronCrestLogo className="h-10 md:h-12" variant="dark" />
              </Link>
            </div>

            {/* Global Search Input (Desktop) */}
            <div className="hidden lg:block relative flex-1 max-w-xs xl:max-w-sm">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="What are you looking for?"
                  className="w-full pl-3.5 pr-10 py-1.5 text-xs border border-gray-400 focus:outline-none focus:border-brand-blue text-brand-charcoal placeholder-gray-500 rounded-none"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-7 p-1 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : null}
                <button
                  type="button"
                  aria-label="Submit search"
                  className="absolute right-1.5 p-1 text-brand-charcoal hover:text-brand-orange"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchQuery.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 shadow-xl z-50 max-h-64 overflow-y-auto">
                  {searchSuggestions.length > 0 ? (
                    searchSuggestions.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between px-3.5 py-2 hover:bg-gray-100 text-xs text-brand-charcoal border-b border-gray-100"
                      >
                        <span className="font-medium">{item.label}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-gray-200 text-gray-700">
                          {item.tag}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-xs text-brand-muted text-center">
                      No matching products or tools found.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Action Group */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Nearest Store */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-gray-500">Nearest Store:</span>
                  <button
                    onClick={() => setIsStoreModalOpen(true)}
                    className="font-bold text-brand-blue hover:text-brand-navy underline text-left cursor-pointer"
                  >
                    {nearestStore}
                  </button>
                </div>
              </div>

              {/* Delivery To Zip */}
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-brand-green shrink-0" />
                <div className="flex flex-col text-xs leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-500">Delivery To:</span>
                    <span className="font-bold text-brand-navy underline cursor-pointer" onClick={() => setIsDeliveryModalOpen(true)}>
                      {deliveryZip}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsDeliveryModalOpen(true)}
                    className="font-bold text-brand-blue hover:text-brand-navy underline text-left cursor-pointer"
                  >
                    Change Location
                  </button>
                </div>
              </div>

              {/* Phone Quick Link */}
              <a
                href="tel:8327810906"
                className="hidden xl:flex items-center gap-1.5 text-xs text-brand-charcoal hover:text-brand-orange font-semibold font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                (832) 781-0906
              </a>

              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-charcoal">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-xs leading-tight">
                    <span className="font-bold text-brand-charcoal">Account</span>
                    <span className="text-brand-blue underline font-semibold">Sign in / Register</span>
                  </div>
                </button>

                {isAccountOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 shadow-xl py-2 z-50 text-xs">
                    <Link
                      href="#signin"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 font-semibold text-brand-charcoal"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="#register"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Create An Account
                    </Link>
                    <div className="border-t border-gray-200 my-1" />
                    <Link
                      href="#bill-pay"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Online Bill Pay
                    </Link>
                    <Link
                      href="#order-status"
                      onClick={() => setIsAccountOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Track My Orders
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart Icon */}
              <Link
                href="#cart"
                className="relative p-1 text-brand-charcoal hover:text-brand-orange transition-colors"
                aria-label="View Shopping Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-2 bg-brand-green-dark text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </Link>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-1.5 text-brand-charcoal"
                aria-label="User account"
              >
                <User className="w-5 h-5" />
              </button>
              <Link
                href="#cart"
                className="relative p-1.5 text-brand-charcoal"
                aria-label="View cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-brand-green-dark text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(true);
                  setMobileLevel("main");
                }}
                className="p-1.5 text-brand-charcoal hover:text-brand-orange focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Location Banner Strip */}
        <div className="flex lg:hidden bg-brand-charcoal text-white text-xs px-4 py-2 justify-between items-center">
          <button
            onClick={() => setIsStoreModalOpen(true)}
            className="flex items-center gap-1.5 text-brand-orange font-semibold hover:underline"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Store: {nearestStore.split(" ")[0]}</span>
          </button>
          <div className="h-3 w-px bg-gray-500" />
          <button
            onClick={() => setIsDeliveryModalOpen(true)}
            className="flex items-center gap-1.5 text-brand-orange font-semibold hover:underline"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Delivery: {deliveryZip}</span>
          </button>
          <div className="h-3 w-px bg-gray-500" />
          <Link
            href="#quote"
            className="bg-white text-brand-charcoal font-bold px-2 py-0.5 text-[11px] uppercase tracking-wider"
          >
            Quote
          </Link>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP MAIN NAVIGATION BAR (Carbon Rolled Steel)        */}
        {/* ======================================================== */}
        <nav className="hidden lg:block bg-[#171D22] text-white border-t-2 border-brand-charcoal-light shadow-md">
          <div className="max-w-site mx-auto px-4 flex items-center justify-between">
            {/* Primary Nav Links */}
            <ul className="flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {/* 1. Metal Buildings */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("metal-buildings")}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === "metal-buildings" ? null : "metal-buildings")}
                  className={`px-3 py-3.5 text-xs xl:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
                    activeMenu === "metal-buildings"
                      ? "border-brand-orange text-white bg-white/10"
                      : "border-transparent text-gray-300 hover:text-white hover:border-gray-500"
                  }`}
                >
                  <span>Metal Buildings</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "metal-buildings" ? "rotate-180 text-brand-orange" : "text-gray-400"}`} />
                </button>
              </li>

              {/* 2. Products */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("products")}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
                  className={`px-3 py-3.5 text-xs xl:text-sm font-medium tracking-wide flex items-center gap-1 border-b-2 transition-all cursor-pointer ${
                    activeMenu === "products"
                      ? "border-brand-orange text-white bg-black/15"
                      : "border-transparent text-gray-200 hover:text-white hover:border-gray-400"
                  }`}
                >
                  Products
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />
                </button>
              </li>

              {/* 3. Inspiration */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("inspiration")}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === "inspiration" ? null : "inspiration")}
                  className={`px-3 py-3.5 text-xs xl:text-sm font-medium tracking-wide flex items-center gap-1 border-b-2 transition-all cursor-pointer ${
                    activeMenu === "inspiration"
                      ? "border-brand-orange text-white bg-black/15"
                      : "border-transparent text-gray-200 hover:text-white hover:border-gray-400"
                  }`}
                >
                  Inspiration
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "inspiration" ? "rotate-180" : ""}`} />
                </button>
              </li>

              {/* 5. Resources */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("resources")}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
                  className={`px-3 py-3.5 text-xs xl:text-sm font-medium tracking-wide flex items-center gap-1 border-b-2 transition-all cursor-pointer ${
                    activeMenu === "resources"
                      ? "border-brand-orange text-white bg-black/15"
                      : "border-transparent text-gray-200 hover:text-white hover:border-gray-400"
                  }`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`} />
                </button>
              </li>

              {/* 6. About Us */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("about-us")}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === "about-us" ? null : "about-us")}
                  className={`px-3 py-3.5 text-xs xl:text-sm font-medium tracking-wide flex items-center gap-1 border-b-2 transition-all cursor-pointer ${
                    activeMenu === "about-us"
                      ? "border-brand-orange text-white bg-black/15"
                      : "border-transparent text-gray-200 hover:text-white hover:border-gray-400"
                  }`}
                >
                  About Us
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "about-us" ? "rotate-180" : ""}`} />
                </button>
              </li>
            </ul>

            {/* Right Call-To-Action (Get A Quote - Industrial Steel Button) */}
            <div className="flex items-center gap-4 py-2">
              <Link
                href="#store-locator"
                onClick={() => setIsStoreModalOpen(true)}
                className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                Store Locator
              </Link>
              <Link
                href="#get-a-quote"
                className="relative bg-white hover:bg-gray-100 text-brand-charcoal text-xs font-black tracking-wider px-4 py-2 transition-all shadow-md flex items-center gap-2 border-l-4 border-brand-orange"
              >
                <span>GET A QUOTE</span>
                <span className="text-brand-orange text-xs">▶</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* ======================================================== */}
        {/* DESKTOP MEGA-MENU FLYOUT CONTAINERS                      */}
        {/* ======================================================== */}

        {/* 1. Metal Buildings Mega Menu */}
        {activeMenu === "metal-buildings" && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-white text-brand-charcoal shadow-2xl border-b border-gray-300 z-50 animate-fadeIn"
          >
            <div className="max-w-site mx-auto flex min-h-[420px]">
              {/* Left Column Tabs (25% width with right border) */}
              <div className="w-1/4 border-r border-gray-200 py-6 pr-4 bg-gray-50/50">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-muted px-4 mb-3">
                  Metal Buildings
                </p>
                <div className="space-y-1">
                  <button
                    onMouseEnter={() => setBuildingsSubTab("type")}
                    onClick={() => setBuildingsSubTab("type")}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-colors text-left ${
                      buildingsSubTab === "type"
                        ? "bg-white text-brand-orange border-l-4 border-brand-orange shadow-sm"
                        : "text-brand-charcoal hover:bg-gray-100"
                    }`}
                  >
                    <span>Metal Building Type</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onMouseEnter={() => setBuildingsSubTab("use")}
                    onClick={() => setBuildingsSubTab("use")}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-colors text-left ${
                      buildingsSubTab === "use"
                        ? "bg-white text-brand-orange border-l-4 border-brand-orange shadow-sm"
                        : "text-brand-charcoal hover:bg-gray-100"
                    }`}
                  >
                    <span>Metal Building by Use</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onMouseEnter={() => setBuildingsSubTab("kits")}
                    onClick={() => setBuildingsSubTab("kits")}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-colors text-left ${
                      buildingsSubTab === "kits"
                        ? "bg-white text-brand-orange border-l-4 border-brand-orange shadow-sm"
                        : "text-brand-charcoal hover:bg-gray-100"
                    }`}
                  >
                    <span>Building Kits</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-8 px-4">
                  <div className="bg-brand-charcoal text-white p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Free Design Consultation
                    </span>
                    <h5 className="font-bold text-sm mt-1">Ready to plan your build?</h5>
                    <p className="text-xs text-gray-300 mt-1">
                      Speak directly with engineers Jose Diego Monroy (B.S.C.E.) or Jesus Arechider (B.S.E.E.).
                    </p>
                    <a
                      href="tel:8327810906"
                      className="inline-block mt-3 text-xs font-bold text-brand-orange hover:underline font-mono"
                    >
                      Call (832) 781-0906 →
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content Panel (75% width) */}
              <div className="w-3/4 p-8">
                {buildingsSubTab === "type" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Explore By Building Type
                    </h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-200 hover:border-brand-orange transition-all bg-white group">
                        <span className="inline-block px-2 py-0.5 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                          Flagship Heavy-Duty
                        </span>
                        <h5 className="font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors">
                          CrestFrame™ Rigid-Frame
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Clear-span rigid-frame pre-engineered steel structures designed for maximum durability, wide spans, and commercial or heavy industrial applications. Formerly Simplisteel™.
                        </p>
                        <Link
                          href="#crestframe"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy mt-3"
                        >
                          Explore CrestFrame™ Solutions →
                        </Link>
                      </div>

                      <div className="p-4 border border-gray-200 hover:border-brand-orange transition-all bg-white group">
                        <span className="inline-block px-2 py-0.5 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                          Engineered Efficiency
                        </span>
                        <h5 className="font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors">
                          IronCore® Cold-Formed
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Precision cold-formed high-tensile steel frames offering faster bolt-together assembly, cost-effective foundations, and versatile footprints. Formerly Hypersteel®.
                        </p>
                        <Link
                          href="#ironcore"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy mt-3"
                        >
                          Explore IronCore® Cold-Formed →
                        </Link>
                      </div>

                      <div className="p-4 border border-gray-200 hover:border-brand-orange transition-all bg-white group">
                        <h5 className="font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors">
                          Pole Barn Post Frame
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Less concrete, less labor, and more control over your build. Solid post-frame engineering tailored for rural, agricultural, and hobby buildings.
                        </p>
                        <Link
                          href="#pole-barn"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy mt-3"
                        >
                          Plan Your Pole Barn →
                        </Link>
                      </div>

                      <div className="p-4 border border-gray-200 hover:border-brand-orange transition-all bg-white group">
                        <h5 className="font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors">
                          Self-Storage Facilities
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Custom single-story and multi-unit mini storage complexes designed for maximum rental yield, secure roll-up doors, and rapid site erection.
                        </p>
                        <Link
                          href="#self-storage"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy mt-3"
                        >
                          View Self-Storage Systems →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {buildingsSubTab === "use" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Explore By Primary Use
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { title: "Agriculture", desc: "Barns, hay covers, equipment storage & livestock housing." },
                        { title: "Carport", desc: "Protective vehicle, RV, boat & fleet steel canopies." },
                        { title: "Commercial", desc: "Retail centers, warehouses, showrooms & office complexes." },
                        { title: "Garage / Workshop", desc: "Spacious automotive bays, hobby shops & DIY workspaces." },
                        { title: "Living Spaces", desc: "Barndominiums, metal homes & integrated live-work structures." },
                        { title: "Storage", desc: "Personal storage, farm storage & heavy machinery shelters." },
                        { title: "Multi-Use", desc: "Flexible open-concept spaces configured for hybrid applications." },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={`#use-${item.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          onClick={() => setActiveMenu(null)}
                          className="p-3 border border-gray-200 hover:border-brand-orange hover:bg-gray-50 transition-all block group"
                        >
                          <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                            {item.title}
                          </h5>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {buildingsSubTab === "kits" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Pre-Engineered Building Kits
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { title: "Backyard Buildings", note: "Compact utility & garden" },
                        { title: "Carports", note: "Prefab single & double bay" },
                        { title: "Greenhouses", note: "Light transmitting panels" },
                        { title: "Homestead Series", note: "Rural residential & workshop" },
                        { title: "IronCore® Kits", note: "Cold-formed bolt-together" },
                        { title: "Loafing Sheds", note: "Livestock run-in shelters" },
                        { title: "Privacy Fencing", note: "Durable steel slat fencing" },
                        { title: "CrestFrame™ Kits", note: "Rigid-frame heavy-duty kits" },
                      ].map((kit, idx) => (
                        <Link
                          key={idx}
                          href={`#kit-${kit.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          onClick={() => setActiveMenu(null)}
                          className="p-3 border border-gray-200 hover:border-brand-orange bg-white hover:shadow-sm transition-all group"
                        >
                          <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                            {kit.title}
                          </h5>
                          <span className="text-[11px] text-gray-500 block mt-1">
                            {kit.note}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. Products Mega Menu (Matches Photo 2) */}
        {activeMenu === "products" && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-white text-brand-charcoal shadow-2xl border-b border-gray-300 z-50 animate-fadeIn"
          >
            <div className="max-w-site mx-auto flex min-h-[460px]">
              {/* Left Column Tabs (Matches Photo 2 with green active background) */}
              <div className="w-1/4 border-r border-gray-200 py-4 bg-white">
                <div className="space-y-0.5">
                  {[
                    { id: "panels", label: "Metal Roof & Wall Panels" },
                    { id: "shingles", label: "Metal Roof Shingles" },
                    { id: "structural", label: "Structural" },
                    { id: "trim", label: "Trim" },
                    { id: "accessories", label: "Accessories" },
                    { id: "fasteners", label: "Fasteners" },
                    { id: "coil", label: "Coil" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setProductsSubTab(cat.id as any)}
                      onClick={() => setProductsSubTab(cat.id as any)}
                      className={`w-full flex items-center justify-between px-6 py-3 text-xs xl:text-sm font-bold transition-colors text-left border-b border-gray-100 ${
                        productsSubTab === cat.id
                          ? "bg-brand-green text-white"
                          : "text-brand-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content Panel (Matches Photo 2 exact 2-column layout) */}
              <div className="w-3/4 p-8 pl-10">
                {productsSubTab === "panels" && (
                  <div>
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-brand-charcoal uppercase tracking-wider inline-block pb-1 border-b-2 border-brand-orange">
                        Browse Panels
                      </h4>
                    </div>

                    {/* 2 Neat Columns (Matches Photo 2) */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs">
                      {/* Column 1 */}
                      <div className="space-y-2">
                        {[
                          "AP Panel",
                          "CF Panel",
                          "CFS Panel",
                          "CPB Panel",
                          "CWH Panel",
                          "CWP Panel",
                          "MLK Panel",
                          "MSL Panel",
                          "MTL Panel",
                          "PBR Panel",
                          "PBU Panel",
                          "SSP Panel",
                          "7.2 Panel",
                        ].map((panel, idx) => (
                          <Link
                            key={idx}
                            href={`#panel-${panel.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            onClick={() => setActiveMenu(null)}
                            className="block text-gray-700 hover:text-brand-orange font-normal py-0.5"
                          >
                            {panel}
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2">
                        {[
                          "Artisan®",
                          "AVP Panel",
                          "BattenLok® HS",
                          "Double-Lok™",
                          "FW-120",
                          "LokSeam®",
                          "PBD Panel",
                          "Retro-R®",
                          "ShadowRib®",
                          "Slimline®",
                          "SuperLok®",
                          "Ultra-Dek®",
                        ].map((panel, idx) => (
                          <Link
                            key={idx}
                            href={`#panel-${panel.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            onClick={() => setActiveMenu(null)}
                            className="block text-gray-700 hover:text-brand-orange font-normal py-0.5"
                          >
                            {panel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {productsSubTab === "shingles" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Architectural Metal Roof Shingles
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="p-4 border border-gray-200 hover:border-brand-orange bg-white group">
                        <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                          Barrel Tile Metal Shingles
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Timeless Mediterranean clay tile aesthetics with the lightweight, Class-4 hail-resistant strength of 26-gauge steel.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 hover:border-brand-orange bg-white group">
                        <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                          Shake Metal Shingles
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Rustic cedar wood-shake texture without the splitting, rotting, or fire danger of real wood. Class A fire rating.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 hover:border-brand-orange bg-white group">
                        <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                          Slate Metal Shingles
                        </h5>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                          Refined quarried stone profile offering stately curb appeal at a fraction of true quarried slate weight.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {productsSubTab === "structural" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Structural Steel Components
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      {[
                        { title: "C-Purlins & Z-Purlins", desc: "Red oxide and galvanized 12-16 gauge cold-formed purlins." },
                        { title: "Eave Struts & Channels", desc: "Precision punched eave members for roof framing lines." },
                        { title: "Base Angles & Clips", desc: "Foundational anchorage and steel clip connectors." },
                        { title: "Square & Rectangular Tubing", desc: "Structural HSS hollow steel columns and beams." },
                        { title: "Pipe & Angle Iron", desc: "Hot-rolled carbon steel structural shapes." },
                        { title: "Custom Welded Trusses", desc: "Pre-fabricated steel gable frames and rafters." },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 border border-gray-200 bg-white">
                          <h5 className="font-bold text-sm text-brand-charcoal">{item.title}</h5>
                          <p className="text-gray-500 mt-1">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {productsSubTab === "trim" && (
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                      Precision Trim & Flashing
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      {[
                        "Ridge Caps & Vented Ridge",
                        "Rake / Gable Trim",
                        "Eave Drip & Gutters",
                        "Corner Trim & Base Trim",
                        "J-Channel & Transition Flashings",
                        "Door & Window Jamb Flashings",
                      ].map((trim, idx) => (
                        <div key={idx} className="p-3 border border-gray-200 bg-gray-50 font-semibold text-brand-charcoal">
                          {trim}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {productsSubTab === "coil" && (
                  <div>
                    <div className="p-6 bg-gray-50 border border-gray-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        Master & Slit Steel Coils
                      </span>
                      <h4 className="text-lg font-bold text-brand-charcoal mt-1">
                        CrestCoil™ Steel Jobsite Coils
                      </h4>
                      <p className="text-xs text-gray-600 mt-2 max-w-xl leading-relaxed">
                        Continuous steel coils manufactured specifically for portable on-site roll-forming machines and regional fabricators. Formerly Armacoil™. Available in 24 & 26 gauge with Galvalume Plus® or Kynar 500® paint finishes.
                      </p>
                      <div className="mt-4 flex gap-3">
                        <Link
                          href="#crestcoil"
                          onClick={() => setActiveMenu(null)}
                          className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold uppercase px-4 py-2 transition-colors"
                        >
                          Request Coil Specifications
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. Inspiration Mega Menu */}
        {activeMenu === "inspiration" && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-white text-brand-charcoal shadow-2xl border-b border-gray-300 z-50 animate-fadeIn"
          >
            <div className="max-w-site mx-auto p-8">
              <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">
                Project Gallery & Planning Guides
              </h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-5 border border-gray-200 hover:border-brand-orange bg-white group transition-all">
                  <Sparkles className="w-7 h-7 text-brand-orange mb-2" />
                  <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                    Project Gallery
                  </h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    Browse hundreds of completed residential, commercial, agricultural, and self-storage projects built nationwide with IronCrest systems.
                  </p>
                  <Link
                    href="#gallery"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    View Project Gallery →
                  </Link>
                </div>

                <div className="p-5 border border-gray-200 hover:border-brand-orange bg-white group transition-all">
                  <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                    Get Started with Metal Buildings
                  </h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    Step-by-step primer on foundation preparation, local zoning permits, slab engineering, and contractor coordination.
                  </p>
                  <Link
                    href="#get-started-buildings"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    Read Building Guide →
                  </Link>
                </div>

                <div className="p-5 border border-gray-200 hover:border-brand-orange bg-white group transition-all">
                  <h5 className="font-bold text-sm text-brand-charcoal group-hover:text-brand-orange">
                    Get Started with Metal Roofing
                  </h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    Compare standing seam vs. exposed fastener profiles, discover energy cost savings, and understand re-roofing over asphalt shingles.
                  </p>
                  <Link
                    href="#get-started-roofing"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    Read Roofing Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. Resources Mega Menu */}
        {activeMenu === "resources" && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-white text-brand-charcoal shadow-2xl border-b border-gray-300 z-50 animate-fadeIn"
          >
            <div className="max-w-site mx-auto p-8">
              <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">
                Technical Documentation & Learning Center
              </h4>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold text-sm text-brand-charcoal uppercase tracking-wider mb-3 text-brand-orange">
                    Learning Center
                  </h5>
                  <ul className="space-y-2 text-xs">
                    {["Blog & Industry News", "Video Tutorials & Time-Lapses", "Building Podcasts", "Care & Maintenance", "Frequently Asked Questions (FAQs)"].map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href="#learning"
                          onClick={() => setActiveMenu(null)}
                          className="text-gray-600 hover:text-brand-blue hover:underline block py-0.5"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-sm text-brand-charcoal uppercase tracking-wider mb-3 text-brand-orange">
                    Downloads & Literature
                  </h5>
                  <ul className="space-y-2 text-xs">
                    {[
                      "Product Catalogs & Brochures",
                      "Color Charts & Finish Warranties",
                      "Assembly Manuals & Erection Guides",
                      "Architectural Specifications (CSI)",
                      "Engineering Technical Library",
                      "Code Compliance & Certifications",
                    ].map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href="#downloads"
                          onClick={() => setActiveMenu(null)}
                          className="text-gray-600 hover:text-brand-blue hover:underline block py-0.5"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-sm text-brand-charcoal uppercase tracking-wider mb-3 text-brand-orange">
                    Contractor Support
                  </h5>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Join our authorized installer and certified steel erector network for wholesale job pricing, takeoff assistance, and direct factory freight.
                  </p>
                  <Link
                    href="#contractor-support"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors"
                  >
                    Contractor Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. About Us Mega Menu */}
        {activeMenu === "about-us" && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-white text-brand-charcoal shadow-2xl border-b border-gray-300 z-50 animate-fadeIn"
          >
            <div className="max-w-site mx-auto p-8">
              <h4 className="text-base font-bold text-brand-charcoal uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">
                About IronCrest Building Systems
              </h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 bg-white">
                  <h5 className="font-bold text-sm text-brand-charcoal">About IronCrest</h5>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    State-of-the-art pre-engineered steel manufacturing excellence. We deliver heavy structural steel, roll-formed metal roofing, and building kits built to endure the elements.
                  </p>
                  <Link
                    href="#about"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    Our Company & Philosophy →
                  </Link>
                </div>

                <div className="p-4 border border-gray-200 bg-white">
                  <h5 className="font-bold text-sm text-brand-charcoal">Expanding Our Network</h5>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Same people, same dedicated service — now backed by nationwide manufacturing hubs, regional logistics, and high-speed automated roll-forming lines.
                  </p>
                  <Link
                    href="#network"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    View Network Expansion →
                  </Link>
                </div>

                <div className="p-4 border border-gray-200 bg-white">
                  <h5 className="font-bold text-sm text-brand-charcoal">Careers at IronCrest</h5>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Join our team of steel fabricators, structural engineers, regional sales consultants, and logistics drivers.
                  </p>
                  <Link
                    href="#careers"
                    onClick={() => setActiveMenu(null)}
                    className="inline-block mt-3 text-xs font-bold text-brand-blue hover:underline"
                  >
                    Explore Open Positions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MOBILE DRAWER NAVIGATION (Multi-level with Back button)  */}
        {/* ======================================================== */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-sm bg-white h-full flex flex-col shadow-2xl">
              {/* Drawer Header */}
              <div className="p-4 bg-brand-charcoal text-white flex items-center justify-between">
                <IronCrestLogo className="h-8" variant="light" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-gray-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Search */}
              <div className="p-3 bg-gray-100 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products, panels, kits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 bg-white text-brand-charcoal focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Drawer Body - Level 1 (Main Categories) */}
              {mobileLevel === "main" && (
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100 text-sm">
                  {[
                    { id: "metal-buildings", label: "Metal Buildings" },
                    { id: "products", label: "Products" },
                    { id: "inspiration", label: "Inspiration" },
                    { id: "resources", label: "Resources" },
                    { id: "about-us", label: "About Us" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setMobileLevel(item.id as any)}
                      className="w-full px-5 py-3.5 flex items-center justify-between font-bold text-brand-charcoal hover:bg-gray-50 text-left"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}

                  <div className="p-4 bg-gray-50 space-y-2 pt-6">
                    <button
                      onClick={() => {
                        setIsStoreModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full py-2.5 px-3 border border-gray-300 bg-white text-xs font-bold text-brand-charcoal uppercase flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-brand-blue" />
                      Find A Store
                    </button>
                    <a
                      href="tel:8327810906"
                      className="w-full py-2.5 px-3 border border-gray-300 bg-white text-xs font-bold text-brand-charcoal uppercase flex items-center justify-center gap-2 font-mono"
                    >
                      <Phone className="w-4 h-4 text-brand-orange" />
                      (832) 781-0906
                    </a>
                    <Link
                      href="#quote"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full py-2.5 px-3 bg-brand-orange text-white text-xs font-bold uppercase flex items-center justify-center shadow-sm"
                    >
                      Get A Quote
                    </Link>
                  </div>
                </div>
              )}

              {/* Drawer Body - Level 2 (Sub-level with Back Button) */}
              {mobileLevel !== "main" && (
                <div className="flex-1 overflow-y-auto flex flex-col">
                  {/* Back Button */}
                  <button
                    onClick={() => {
                      if (mobileSubCategory) {
                        setMobileSubCategory(null);
                      } else {
                        setMobileLevel("main");
                      }
                    }}
                    className="p-3.5 bg-gray-100 border-b border-gray-200 text-xs font-bold uppercase text-brand-charcoal flex items-center gap-2 hover:bg-gray-200"
                  >
                    <ArrowLeft className="w-4 h-4 text-brand-orange" />
                    Back to {mobileSubCategory ? "Categories" : "Main Menu"}
                  </button>

                  {/* Sub-menu Content for Metal Buildings */}
                  {mobileLevel === "metal-buildings" && (
                    <div className="p-4 divide-y divide-gray-100 text-xs">
                      <div className="py-2">
                        <span className="font-bold uppercase tracking-wider text-brand-orange block mb-2">
                          Metal Building Types
                        </span>
                        <div className="space-y-1.5 pl-2">
                          <Link href="#crestframe" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700 font-semibold">
                            CrestFrame™ Rigid-Frame
                          </Link>
                          <Link href="#ironcore" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700 font-semibold">
                            IronCore® Cold-Formed
                          </Link>
                          <Link href="#pole-barn" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700">
                            Pole Barn Post Frame
                          </Link>
                          <Link href="#self-storage" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700">
                            Self-Storage Systems
                          </Link>
                        </div>
                      </div>

                      <div className="py-3">
                        <span className="font-bold uppercase tracking-wider text-brand-orange block mb-2">
                          Building by Use
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 pl-2">
                          {["Agriculture", "Carport", "Commercial", "Garage/Workshop", "Living Spaces", "Storage", "Multi-Use"].map((use, idx) => (
                            <Link key={idx} href={`#use-${use}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700">
                              {use}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="py-3">
                        <span className="font-bold uppercase tracking-wider text-brand-orange block mb-2">
                          Building Kits
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 pl-2">
                          {["Backyard Buildings", "Carports", "Greenhouses", "Homestead Series", "IronCore® Kits", "Loafing Sheds", "Privacy Fencing", "CrestFrame™ Kits"].map((kit, idx) => (
                            <Link key={idx} href={`#kit-${kit}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-gray-700">
                              {kit}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sub-menu Content for Products */}
                  {mobileLevel === "products" && (
                    <div className="p-4 space-y-4 text-xs">
                      <div>
                        <span className="font-bold uppercase tracking-wider text-brand-orange block mb-2">
                          Main Product Categories
                        </span>
                        <div className="space-y-1 pl-2">
                          {["Metal Roof & Wall Panels", "Metal Roof Shingles", "Structural", "Trim", "Accessories", "Fasteners", "CrestCoil™ Steel Coils"].map((item, idx) => (
                            <Link key={idx} href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-gray-700 font-semibold border-b border-gray-50">
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-bold uppercase tracking-wider text-brand-charcoal block mb-2">
                          Browse Panels (25 Profiles)
                        </span>
                        <div className="grid grid-cols-3 gap-1.5 pl-2">
                          {PANELS_LIST.map((panel, idx) => (
                            <Link key={idx} href={`#panel-${panel}`} onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-gray-50 text-center font-medium border border-gray-200">
                              {panel}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sub-menu for Inspiration */}
                  {mobileLevel === "inspiration" && (
                    <div className="p-4 space-y-3 text-xs">
                      <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        Project Gallery
                      </Link>
                      <Link href="#guide-buildings" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        Get Started with Metal Buildings
                      </Link>
                      <Link href="#guide-roofing" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        Get Started with Metal Roofing
                      </Link>
                    </div>
                  )}

                  {/* Sub-menu for Resources */}
                  {mobileLevel === "resources" && (
                    <div className="p-4 space-y-3 text-xs">
                      <div className="font-bold text-brand-orange uppercase">Learning Center</div>
                      <div className="pl-2 space-y-1 text-gray-700">
                        <div>Blog, Videos, Podcasts</div>
                        <div>Care & Maintenance</div>
                        <div>FAQs</div>
                      </div>
                      <div className="border-t border-gray-200 my-2" />
                      <div className="font-bold text-brand-orange uppercase">Downloads & Literature</div>
                      <div className="pl-2 space-y-1 text-gray-700">
                        <div>Brochures & Color Charts</div>
                        <div>Manuals & CSI Specifications</div>
                        <div>Technical Library & Certifications</div>
                      </div>
                    </div>
                  )}

                  {/* Sub-menu for About Us */}
                  {mobileLevel === "about-us" && (
                    <div className="p-4 space-y-3 text-xs">
                      <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        About IronCrest
                      </Link>
                      <Link href="#network" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        Expanding Our Network
                      </Link>
                      <Link href="#careers" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 border border-gray-200 bg-white font-bold text-brand-charcoal">
                        Careers at IronCrest
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Delivery Location Modal */}
      <DeliveryLocationModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        currentZip={deliveryZip}
        onSaveZip={(newZip, newStore) => {
          setDeliveryZip(newZip);
          setNearestStore(newStore);
        }}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
        selectedStore={nearestStore}
        onSelectStore={(storeName, zip) => {
          setNearestStore(storeName);
          setDeliveryZip(zip);
        }}
      />
    </>
  );
}
