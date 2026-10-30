"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ShopProducts from "@/components/ShopProducts";
import ProjectGallery from "@/components/ProjectGallery";
import ValueProps from "@/components/ValueProps";
import ToolsResources from "@/components/ToolsResources";
import QuoteModals from "@/components/QuoteModals";
import Footer from "@/components/Footer";
import StoreLocatorModal from "@/components/StoreLocatorModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [cartCount] = useState(0);
  const [deliveryZip, setDeliveryZip] = useState("77002");
  const [nearestStore, setNearestStore] = useState("Houston HQ (708 Main St.)");

  const handleLocationChange = (zip: string, store: string) => {
    setDeliveryZip(zip);
    setNearestStore(store);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-charcoal">
      {/* 1. Header & Multi-level Mega Navigation */}
      <Navbar
        deliveryZip={deliveryZip}
        nearestStore={nearestStore}
        onLocationChange={handleLocationChange}
      />

      <main className="flex-1">
        {/* 2. Hero Carousel (4 Slides with Autoplay & Signature Wedges) */}
        <HeroCarousel />

        {/* 3. Shop Products (5-Card Grid) */}
        <ShopProducts />

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
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
        selectedStore={nearestStore}
        onSelectStore={(storeName, zip) => handleLocationChange(zip, storeName)}
      />
    </div>
  );
}
