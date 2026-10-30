"use client";

import React, { useEffect, useState } from "react";
import { X, MapPin, Truck, Check } from "lucide-react";

interface DeliveryLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentZip: string;
  onSaveZip: (zip: string, store: string) => void;
}

export const getStoreForZip = (zip: string): string => {
  return "Houston HQ (708 Main St.)";
};

export default function DeliveryLocationModal({
  isOpen,
  onClose,
  currentZip,
  onSaveZip,
}: DeliveryLocationModalProps) {
  const [zipInput, setZipInput] = useState(currentZip);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setZipInput(currentZip);
      setError("");
    }
  }, [isOpen, currentZip]);

  if (!isOpen) return null;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!/^\d{5}$/.test(cleanZip)) {
      setError("Please enter a valid 5-digit US ZIP Code.");
      return;
    }
    setError("");
    const nearest = getStoreForZip(cleanZip);
    onSaveZip(cleanZip, nearest);
    onClose();
  };

  const handleUseMyLocation = () => {
    // Simulated geolocation lookup
    const detectedZip = "77002";
    setZipInput(detectedZip);
    const store = getStoreForZip(detectedZip);
    onSaveZip(detectedZip, store);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden border border-brand-border">
        {/* Header */}
        <div className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-bold tracking-wider uppercase flex items-center gap-2">
            Update Delivery Location
          </h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-300 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <button
            type="button"
            onClick={handleUseMyLocation}
            className="flex items-center gap-2 text-brand-green font-bold text-sm hover:underline mb-4 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-brand-green" />
            Use My Location
          </button>

          <form onSubmit={handleUpdate}>
            <label
              htmlFor="delivery-zip-input"
              className="block text-sm font-semibold text-brand-charcoal mb-2"
            >
              Update Delivery Location <span className="text-brand-green">*</span>
            </label>

            <div className="flex gap-2 mb-2">
              <input
                id="delivery-zip-input"
                type="text"
                maxLength={5}
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value.replace(/\D/g, ""));
                  if (error) setError("");
                }}
                placeholder="Enter Zip Code"
                className="flex-1 px-4 py-2.5 text-base border border-gray-400 focus:outline-none focus:border-brand-blue text-brand-charcoal placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={zipInput.length !== 5}
                className={`px-6 py-2.5 font-bold uppercase text-sm tracking-wider transition-colors ${
                  zipInput.length === 5
                    ? "bg-brand-orange text-white hover:bg-brand-orange-hover cursor-pointer"
                    : "bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed"
                }`}
              >
                Update
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-xs mt-1 mb-2 font-medium">{error}</p>
            )}

            <div className="border-t border-gray-200 my-4" />

            <div className="flex items-start gap-3 bg-gray-50 p-3 border border-gray-200">
              <Truck className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
              <p className="text-xs text-brand-charcoal leading-relaxed">
                Your ZIP Code helps us provide the most accurate delivery routes, shipping rates, and product availability from your nearest IronCrest manufacturing center.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
