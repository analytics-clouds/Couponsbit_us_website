"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  HelpCircle,
  Tag,
  Percent,
  Wallet,
  User,
  Store,
  Handshake,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
interface FAQ {
  question: string;
  answer: string;
}

interface FAQGroup {
  id: string;
  title: string;
  icon: React.ElementType;
  faqs: FAQ[];
}

// --- Data ---
const FAQ_DATA: FAQGroup[] = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    faqs: [
      {
        question: "How do I use a promo code on Couponsbit?",
        answer: "To use a promo code, search for your preferred brand or store on Couponsbit, click on the available coupon code to reveal it, copy the code, and paste it during checkout on the retailer's website. Once applied successfully, the discount will be reflected in your total amount."
      },
      {
        question: "Are the promo codes on Couponsbit verified?",
        answer: "Yes. Our team regularly checks and updates promo codes, discount codes, and online shopping deals to ensure users receive active and working offers from trusted international brands."
      },
      {
        question: "How can I get coupon help on Couponsbit?",
        answer: "If you need coupon help, you can visit our FAQs page for guidance or contact our support team through the Contact page. We aim to assist users with promo code usage, coupon-related queries, and deal information."
      },
      {
        question: "Why is my promo code not working?",
        answer: "A promo code may not work for several reasons. The offer could have expired, the coupon may only apply to selected products, or minimum purchase conditions may not be fulfilled. Some discount codes are also limited to first-time users or specific regions."
      },
      {
        question: "Is Couponsbit free to use?",
        answer: "Yes. Couponsbit is completely free for all users. You can browse online deals, promo codes, and discount codes without paying any subscription or membership fee."
      },
      {
        question: "Does Couponsbit sell products directly?",
        answer: "No. Couponsbit is a coupon and deals platform that helps users discover savings opportunities from third-party retailers and international brands. We do not directly sell products or services."
      },
      {
        question: "How often are coupons updated on Couponsbit?",
        answer: "Our team updates promo codes, online deals, and discount offers regularly to provide users with the latest shopping deals and verified coupon codes."
      },
      {
        question: "Can I use multiple promo codes together?",
        answer: "This depends on the retailer's coupon policy. Some brands allow coupon stacking, while others permit only one promo code per order."
      },
      {
        question: "What types of deals can I find on Couponsbit?",
        answer: "You can find fashion promo codes, shopping discounts, cashback deals, electronics offers, travel deals, lifestyle discounts, and seasonal online shopping promotions."
      },
      {
        question: "Are the deals available internationally?",
        answer: "Yes. Couponsbit focuses on international brands and online shopping websites, helping users discover global promo codes and shopping deals."
      }
    ]
  }
];

// --- Components ---

const AccordionItem: React.FC<{ faq: FAQ, isOpen: boolean, onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#f0f0f0] last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-[#f9f9f9] transition-all duration-300 group"
      >
        <span className="text-base font-semibold text-black">{faq.question}</span>
        <div className="text-[#056bfa] transition-transform duration-300">
          {isOpen ? <Minus className="w-5 h-5 shrink-0" /> : <Plus className="w-5 h-5 shrink-0" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQGroupComponent: React.FC<{ group: FAQGroup }> = ({ group }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        {/* <group.icon className="w-6 h-6 text-[#056bfa]" /> */}
        {/* <h3 className="text-xl font-bold text-black">{group.title}</h3> */}
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-[#f0f0f0] overflow-hidden">
        {group.faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(prev => prev === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default function FAQsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "coupons", name: "Coupons & Codes", icon: Tag },
    { id: "deals", name: "Deals & Offers", icon: Percent },
    { id: "cashback", name: "Cashback", icon: Wallet },
    { id: "account", name: "Account & Profile", icon: User },
    { id: "stores", name: "Stores & Brands", icon: Store },
    { id: "partner", name: "Partner With Us", icon: Handshake }
  ];

  const filteredGroups = FAQ_DATA.filter(group => {
    if (activeCategory !== "all" && group.id !== activeCategory) return false;
    if (searchQuery.trim() === "") return true;
    return group.faqs.some(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative w-full pt-20 pb-32 bg-gradient-to-br from-[#0451c4] to-[#056bfa] overflow-hidden mt-[64px] text-center">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8 animate-pulse"
          >
            <span className="text-[#056bfa] font-bold text-sm tracking-wide">Got Questions? We Have Answers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-4xl md:text-6xl mb-2"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg max-w-[700px] mx-auto mb-10 leading-relaxed mt-6"
          >
            At Couponsbit, we help shoppers save more with verified promo codes, discount codes, online shopping deals, and exclusive offers from international brands. Below are some commonly asked questions related to promo codes, coupon help, and online shopping discounts.

          </motion.p>

        
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-[14px] max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">FAQs</span>
          </nav>
        </div>
      </div>

      

      {/* Section 4: FAQ Accordion Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-[860px]">
          {filteredGroups.length > 0 ? (
            filteredGroups.map(group => (
              <FAQGroupComponent key={group.id} group={group} />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#f0f0f0]">
               <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
               <h4 className="text-xl font-bold text-gray-600">No matching questions found</h4>
               <p className="text-gray-400 mt-2">Try searching with different keywords or browse categories</p>
               <Button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-full px-6"
               >
                View All Questions
               </Button>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: Still Have Questions CTA */}
      <section className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
     
          <h2 className="text-3xl font-black text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/80 text-lg mb-10">Our support team is always ready to help you</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-9 py-4 bg-white text-[#056bfa] rounded-full font-bold text-base shadow-lg transition-all hover:scale-105 text-center">
              Contact Us
            </Link>
            <Link href="/deals" className="w-full sm:w-auto px-9 py-4 border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-[#056bfa] transition-all text-center">
              Browse Deals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
