"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const AMAZON_URL = "/stores/amazon-discount-code";

export const AmazonBlackFridayPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating trigger button — bottom-left */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Amazon Black Friday Sale"
        className="fixed bottom-6 left-6 z-40 h-16 w-16 lg:h-20 lg:w-20 rounded-full border-2 border-[#056bfa] shadow-2xl transition-transform hover:scale-105 active:scale-95 overflow-hidden p-0 bg-white"
      >
        <img
          src="https://res.cloudinary.com/zzlsqavg/image/upload/v1795178300/amazon-circle.webp"
          alt="Amazon Black Friday"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Popup panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-[300px] sm:w-[340px] lg:w-[440px] rounded-3xl bg-white shadow-2xl border border-[#f0f0f0] overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/zzlsqavg/image/upload/v1795178302/popup.webp"
              alt="Amazon Black Friday Sale"
              className="w-full h-auto block"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default AmazonBlackFridayPopup;
