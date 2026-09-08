"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationItemProps {
  text: string;
  image?: string;
  isRead?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

const NotificationItem = ({ text, image, isRead, ctaLabel, ctaHref }: NotificationItemProps) => (
  <div className="flex items-start gap-4 p-4 hover:bg-brand-gray cursor-pointer transition-colors border-b border-brand-primary-light/30 last:border-0 group">
    <div className="relative flex-shrink-0 w-[60px] h-[60px] rounded-lg bg-brand-gray overflow-hidden">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image || "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=100"})` }} />
      <div className="absolute top-1 left-1 bg-[#ef4444] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded uppercase leading-tight">
        LIVE NOW
      </div>
    </div>
    <div className="flex-1">
      <p className="text-[13px] font-bold text-black leading-snug group-hover:text-brand-primary transition-colors line-clamp-3">
        {text}
      </p>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-block mt-2 bg-[#056bfa] hover:bg-[#0451c4] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide transition-colors"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
    {!isRead && (
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-1.5" />
    )}
  </div>
);

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPanel = ({ isOpen }: NotificationPanelProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="fixed sm:absolute top-20 sm:top-auto sm:mt-3 left-2 right-2 sm:left-auto sm:right-0 sm:w-[360px] bg-white rounded-xl shadow-2xl border border-brand-primary-light overflow-hidden z-[60]"
        >
          <div className="p-4 bg-white border-b border-brand-primary-light">
            <h4 className="text-base font-bold text-black uppercase tracking-tight">Notifications</h4>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            <NotificationItem
              text="AliExpress Labour Day Sale is LIVE! Save Up to 93% OFF"
              image="https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp"
              ctaLabel="Shop Now"
              ctaHref="https://www.amazon.com/?&linkCode=ll2&tag=analytics0922-20&linkId=9a29e2639a93ee0a01cbc9eb8d14bdf1&language=en_US&ref_=as_li_ss_tl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
