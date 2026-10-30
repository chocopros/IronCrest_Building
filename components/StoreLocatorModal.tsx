"use client";

import React, { useState } from "react";
import { X, Search, MapPin, Phone, Clock, Check, User } from "lucide-react";

interface ContactPerson {
  name: string;
  degree: string;
  phone: string;
}

interface Store {
  id: string;
  name: string;
  address: string;
  floor: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  contacts: ContactPerson[];
  hours: string;
  isFactory: boolean;
}

const STORES: Store[] = [
  {
    id: "108",
    name: "IronCrest Houston Corporate Office",
    address: "708 Main St.",
    floor: "10th Floor",
    city: "Houston",
    state: "TX",
    zip: "77002",
    phone: "(832) 781-0906",
    contacts: [
      {
        name: "Jose Diego Monroy",
        degree: "B.S.C.E.",
        phone: "(832) 781-0906",
      },
      {
        name: "Jesus Arechider",
        degree: "B.S.E.E.",
        phone: "(832) 781-0906",
      },
    ],
    hours: "Mon - Fri: 7:00 AM - 5:00 PM",
    isFactory: true,
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
      s.address.toLowerCase().includes(query.toLowerCase()) ||
      s.zip.includes(query) ||
      s.contacts.some((c) => c.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-brand-border overflow-hidden">
        {/* Header */}
        <div className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-orange" />
            <h3 className="text-lg font-bold tracking-wider uppercase">
              Office Location & Direct Contacts
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
              placeholder="Search by name, address or Houston ZIP..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-brand-blue text-brand-charcoal"
            />
          </div>
          <p className="text-xs text-brand-muted mt-2">
            Direct engineering desk and primary headquarters in Houston, Texas.
          </p>
        </div>

        {/* Store List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar">
          {filteredStores.length === 0 ? (
            <div className="text-center py-8 text-brand-muted">
              No matching locations or contacts found. Our office is located at 708 Main St., 10th Floor, Houston, TX 77002.
            </div>
          ) : (
            filteredStores.map((store) => {
              const isSelected =
                selectedStore.includes(store.name) ||
                selectedStore.includes(store.city) ||
                selectedStore.includes(store.id);
              return (
                <div
                  key={store.id}
                  className={`p-5 border transition-all ${
                    isSelected
                      ? "border-brand-green bg-green-50/40 shadow-sm"
                      : "border-gray-200 hover:border-gray-400 bg-white"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      {/* Name & Badge */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-lg text-brand-charcoal font-serif">
                          {store.name}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-charcoal text-white px-2 py-0.5">
                          Headquarters
                        </span>
                      </div>

                      {/* Office Address */}
                      <div className="text-sm text-gray-700 bg-white p-3 border border-gray-200 rounded-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-brand-charcoal">{store.address}</p>
                            <p>{store.floor}</p>
                            <p>{store.city}, {store.state} {store.zip}</p>
                            <p className="text-xs text-brand-muted font-semibold">Houston, Texas</p>
                          </div>
                        </div>
                      </div>

                      {/* Designated Contacts */}
                      <div className="bg-gray-50 border border-gray-200 p-3 space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-steel block">
                          Direct Engineering Contacts:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {store.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-white p-2.5 border border-gray-200 flex flex-col">
                              <div className="flex items-center gap-1.5 font-bold text-xs text-brand-charcoal">
                                <User className="w-3.5 h-3.5 text-brand-orange" />
                                <span>{contact.name}</span>
                              </div>
                              <span className="text-[11px] font-mono font-bold text-brand-blue ml-5">
                                {contact.degree}
                              </span>
                              <a
                                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                                className="text-xs font-mono font-bold text-brand-orange hover:underline ml-5 mt-1 flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3" />
                                {contact.phone}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Phone & Hours */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-brand-muted pt-1">
                        <a
                          href={`tel:${store.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-1 font-bold text-brand-charcoal hover:text-brand-orange transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-brand-orange" />
                          <span>{store.phone}</span>
                        </a>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand-blue" />
                          {store.hours}
                        </span>
                      </div>
                    </div>

                    <div className="sm:self-start shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-1.5 text-brand-green font-bold text-xs uppercase px-3 py-2 bg-green-100/70 border border-brand-green">
                          <Check className="w-4 h-4" />
                          Primary Office
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            onSelectStore(store.name, store.zip);
                            onClose();
                          }}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-brand-charcoal hover:bg-brand-orange text-white transition-colors cursor-pointer"
                        >
                          Select Location
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
