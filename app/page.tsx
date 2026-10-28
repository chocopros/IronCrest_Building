"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ShopProducts from "@/components/ShopProducts";
import VisualizerBanner from "@/components/VisualizerBanner";
import ProjectGallery from "@/components/ProjectGallery";
import ValueProps from "@/components/ValueProps";
import ToolsResources from "@/components/ToolsResources";
import QuoteModals from "@/components/QuoteModals";
import Footer from "@/components/Footer";
import StoreLocatorModal from "@/components/StoreLocatorModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const handleSaveQuote = (quoteName: string) => {
    setSavedQuotes((prev) => [...prev, quoteName]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-charcoal">
      {/* 1. Header & Multi-level Mega Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Carousel (4 Slides with Autoplay & Signature Wedges) */}
        <HeroCarousel />

        {/* 3. Shop Products (5-Card Grid) & Building Visualizer Banner */}
        <ShopProducts />
        <VisualizerBanner />

        {/* 4. Interactive Project Gallery (Filter tabs & Carousel) */}
        <ProjectGallery />

        {/* 5. Value Propositions & Tools / Resources */}
        <ValueProps />
        <ToolsResources />
      </main>

      {/* 6. Pre-Footer, Navigation Columns, Newsletter & Legal Footer */}
      <Footer
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteModals
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        cartItemCount={cartCount}
        onSaveQuote={handleSaveQuote}
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
        selectedStore="Dallas / Fort Worth (#104)"
        onSelectStore={(storeName) => {
          // Store selected
        }}
      />
    </div>
  );
}
