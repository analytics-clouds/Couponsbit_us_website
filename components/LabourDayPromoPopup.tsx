"use client";

import React, { useState } from "react";
import { HardHat, X } from "lucide-react";

const AMAZON_URL =
  "https://www.amazon.com/?&linkCode=ll2&tag=analytics0922-20&linkId=9a29e2639a93ee0a01cbc9eb8d14bdf1&language=en_US&ref_=as_li_ss_tl";

export const LabourDayPromoPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Labour Day Sale"
        className="fixed bottom-24 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#056bfa] text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
      >
        <HardHat className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 z-40 w-[300px] sm:w-[340px] lg:w-[440px] rounded-3xl bg-white shadow-2xl border border-[#f0f0f0] overflow-hidden">
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
              src="https://res.cloudinary.com/couponsbit/image/upload/v1788846812/ChatGPT_Image_Sep_8_2026_11_18_38_AM_gsy2yp.png"
              alt="Labour Day Sale"
              className="w-full h-auto block"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default LabourDayPromoPopup;
