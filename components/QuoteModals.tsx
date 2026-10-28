"use client";

import React, { useState } from "react";
import { X, FileText, CheckCircle2, AlertCircle, ShoppingCart } from "lucide-react";

interface QuoteModalsProps {
  isOpen: boolean;
  onClose: () => void;
  cartItemCount?: number;
  onSaveQuote?: (quoteName: string) => void;
}

export default function QuoteModals({
  isOpen,
  onClose,
  cartItemCount = 0,
  onSaveQuote,
}: QuoteModalsProps) {
  const [quoteName, setQuoteName] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedQuoteId, setSavedQuoteId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName.trim()) {
      setError("Quote name is required");
      return;
    }

    setError("");
    const generatedId = `IC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSavedQuoteId(generatedId);
    setIsSuccess(true);

    if (onSaveQuote) {
      onSaveQuote(quoteName.trim());
    }

    setTimeout(() => {
      // Auto close after showing success for 2 seconds
      setIsSuccess(false);
      setQuoteName("");
      onClose();
    }, 2400);
  };

  const handleClose = () => {
    setError("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn select-none">
      <div className="bg-white w-full max-w-lg shadow-2xl border border-brand-border overflow-hidden">
        {/* Header */}
        <div className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-orange" />
            <h3 className="text-base font-bold tracking-wider uppercase">
              Save Your Cart as Quote
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="text-gray-300 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-bold text-brand-charcoal uppercase font-serif">
              Quote Saved Successfully!
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Your quote has been saved as <strong className="text-brand-navy">{savedQuoteId}</strong>. A copy has been linked to your account and prices are locked for 30 days.
            </p>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6">
            {/* Cart Status Alert */}
            <div className="mb-5 p-3.5 bg-gray-50 border border-gray-200 flex items-start gap-3">
              <ShoppingCart className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal block">
                  Cart Status: {cartItemCount > 0 ? `${cartItemCount} item(s) in cart` : "Empty Cart"}
                </span>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                  {cartItemCount > 0
                    ? "Converting your cart will preserve all panel cuts, gauge choices, trim items, and calculated delivery rates."
                    : "No items currently in cart. Saving will create a new draft building quote template that you can customize."}
                </p>
              </div>
            </div>

            {/* Quote Name Input */}
            <div className="mb-6">
              <label
                htmlFor="quote-name-input"
                className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2"
              >
                Quote Name <span className="text-red-500">*</span>
              </label>
              <input
                id="quote-name-input"
                type="text"
                value={quoteName}
                onChange={(e) => {
                  setQuoteName(e.target.value);
                  if (error) setError("");
                }}
                placeholder="e.g., 40x60 Workshop - Smith Property"
                className={`w-full px-4 py-2.5 text-sm border focus:outline-none text-brand-charcoal ${
                  error ? "border-red-500 bg-red-50/20" : "border-gray-400 focus:border-brand-blue"
                }`}
              />
              {error && (
                <div className="flex items-center gap-1.5 text-red-600 text-xs font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <p className="text-[11px] text-gray-500 mt-2">
                Choose a recognizable name for this project to retrieve it later in your dashboard or share with an IronCrest representative.
              </p>
            </div>

            {/* Modal Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-300 text-brand-charcoal hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-brand-orange hover:bg-brand-orange-hover text-white transition-colors shadow-sm"
              >
                Save As Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
