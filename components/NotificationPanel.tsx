"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationItemProps {
  text: string;
  isRead?: boolean;
}

const NotificationItem = ({ text, isRead }: NotificationItemProps) => (
  <div className="flex items-start gap-4 p-4 hover:bg-brand-gray cursor-pointer transition-colors border-b border-brand-primary-light/30 last:border-0 group">
    <div className="relative flex-shrink-0 w-[60px] h-[60px] rounded-lg bg-brand-gray overflow-hidden">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=100)` }} />
      <div className="absolute top-1 left-1 bg-[#ef4444] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded uppercase leading-tight">
        LIVE NOW
      </div>
    </div>
    <div className="flex-1">
      <p className="text-[13px] font-bold text-black leading-snug group-hover:text-brand-primary transition-colors line-clamp-3">
        {text}
      </p>
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
              text="Flipkart Sasa Lele Sale is Live Now - Grab Crazy Deals Up To 90% OFF + Extra 10% OFF (SBI Cards)" 
            />
            <NotificationItem 
              text="Amazon Great Summer Sale - Up to 80% OFF + 10% OFF | LIVE NOW" 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
