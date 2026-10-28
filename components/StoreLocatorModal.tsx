"use client";

import React, { useState } from "react";
import { X, Search, MapPin, Phone, Clock, Check } from "lucide-react";

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  isFactory: boolean;
}

const STORES: Store[] = [
  {
    id: "104",
    name: "IronCrest Dallas North (#104)",
    address: "1420 Regal Row",
    city: "Dallas",
    state: "TX",
    zip: "75247",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM",
    isFactory: true,
  },
  {
    id: "108",
    name: "IronCrest Houston Metro (#108)",
    address: "8820 Gulf Freeway",
    city: "Houston",
    state: "TX",
    zip: "77017",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM",
    isFactory: true,
  },
  {
    id: "102",
    name: "IronCrest San Antonio West (#102)",
    address: "4501 NW Loop 410",
    city: "San Antonio",
    state: "TX",
    zip: "78229",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM",
    isFactory: false,
  },
  {
    id: "101",
    name: "IronCrest Amarillo Regional (#101)",
    address: "3200 I-40 East",
    city: "Amarillo",
    state: "TX",
    zip: "79103",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:30 AM - 5:00 PM, Sat: Closed",
    isFactory: true,
  },
  {
    id: "115",
    name: "IronCrest Phoenix Mountain West (#115)",
    address: "2450 S 19th Ave",
    city: "Phoenix",
    state: "AZ",
    zip: "85009",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:00 AM - 4:30 PM",
    isFactory: false,
  },
  {
    id: "120",
    name: "IronCrest Baton Rouge / Gulf (#120)",
    address: "9400 Airline Hwy",
    city: "Baton Rouge",
    state: "LA",
    zip: "70815",
    phone: "877-247-6627",
    hours: "Mon - Fri: 7:30 AM - 5:00 PM",
    isFactory: false,
  },
];

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStore: string;
  onSelectStore: (storeName: string, zip: string) => void;
}

export default function StoreLocatorModal({
  isOpen,
  onClose,
  selectedStore,
  onSelectStore,
}: StoreLocatorModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredStores = STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase()) ||
      s.state.toLowerCase().includes(query.toLowerCase()) ||
      s.zip.includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-brand-border overflow-hidden">
        {/* Header */}
        <div className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-orange" />
            <h3 className="text-lg font-bold tracking-wider uppercase">
              Find an IronCrest Store
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close store locator"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-5 border-b border-gray-200 bg-gray-50 shrink-0">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by City, State or ZIP Code..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-brand-blue text-brand-charcoal"
            />
          </div>
          <p className="text-xs text-brand-muted mt-2">
            Showing nationwide manufacturing plants, retail design centers, and distributor warehouses.
          </p>
        </div>

        {/* Store List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar">
          {filteredStores.length === 0 ? (
            <div className="text-center py-8 text-brand-muted">
              No IronCrest locations found matching your search. Please try another city or ZIP code.
            </div>
          ) : (
            filteredStores.map((store) => {
              const isSelected = selectedStore.includes(store.id) || selectedStore.includes(store.city);
              return (
                <div
                  key={store.id}
                  className={`p-4 border transition-all ${
                    isSelected
                      ? "border-brand-green bg-green-50/40 shadow-sm"
                      : "border-gray-200 hover:border-gray-400 bg-white"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-brand-charcoal">
                          {store.name}
                        </h4>
                        {store.isFactory && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-charcoal text-white px-2 py-0.5">
                            Factory & Roll-Forming
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {store.address}, {store.city}, {store.state} {store.zip}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-brand-muted pt-1">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-brand-blue" />
                          {store.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand-blue" />
                          {store.hours}
                        </span>
                      </div>
                    </div>

                    <div className="sm:self-center shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-1.5 text-brand-green font-bold text-xs uppercase px-3 py-2 bg-green-100/70 border border-brand-green">
                          <Check className="w-4 h-4" />
                          My Selected Store
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            onSelectStore(store.name, store.zip);
                            onClose();
                          }}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-brand-charcoal hover:bg-brand-orange text-white transition-colors cursor-pointer"
                        >
                          Select Store
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
