"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

// --- Types ---
interface TermsSection {
  id: string;
  title: string;
  content: string;
}

// --- Data ---
const TERMS_DATA: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: "By accessing Couponsbit, you agree to follow these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations."
  },
  {
    id: "use",
    title: "Use of Couponsbit",
    content: `Couponsbit provides promo codes, discount codes, shopping deals, and online savings information from third-party retailers and brands.\n\nUsers agree not to:\n• Misuse the website or attempt unauthorized access\n• Copy or reproduce website content without permission\n• Use automated tools to scrape data or coupon codes\n• Upload harmful software or malicious content`
  },
  {
    id: "disclaimer",
    title: "Coupon Disclaimer",
    content: "Couponsbit does not guarantee that every promo code or discount code will work for every user or purchase. Coupon validity depends on retailer policies, expiration dates, location restrictions, and product eligibility."
  },
  {
    id: "thirdparty",
    title: "Third-Party Websites",
    content: "Our website may redirect users to third-party retailer websites. Couponsbit is not responsible for the products, services, transactions, or policies of external websites."
  },
  {
    id: "property",
    title: "Intellectual Property",
    content: "All website content, including logos, graphics, text, design elements, and branding, belongs to Couponsbit unless otherwise stated.\n\nUnauthorized use, reproduction, or distribution of content is prohibited."
  },
  {
    id: "affiliate",
    title: "Affiliate Relationships",
    content: "Couponsbit may participate in affiliate marketing programs. We may receive commissions from purchases made through selected promo codes and shopping deals."
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `Couponsbit shall not be held liable for:\n• Incorrect or expired promo codes\n• Purchase disputes between users and retailers\n• Website downtime or technical interruptions\n• Losses resulting from the use of third-party services\n\nUsers access the website at their own discretion.`
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: "We reserve the right to modify these Terms and Conditions at any time. Continued use of Couponsbit after updates indicates acceptance of revised terms."
  },
  {
    id: "law",
    title: "Governing Law",
    content: "These Terms and Conditions shall be governed according to applicable international digital and eCommerce regulations."
  },
  {
    id: "contact",
    title: "Contact Information",
    content: "For questions regarding these Terms and Conditions or coupon website policies, please contact our support team."
  }
];

// --- Components ---

const AccordionItem: React.FC<{ section: TermsSection, isOpen: boolean, onToggle: () => void }> = ({ section, isOpen, onToggle }) => {
  return (
    <div id={section.id} className="bg-white rounded-2xl border border-[#f0f0f0] mb-3 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-[#f9f9f9] transition-all duration-300"
      >
        <span className="text-base font-bold text-black">{section.title}</span>
        <ChevronDown className={cn("w-5 h-5 text-[#056bfa] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {section.content}
        </div>
      </motion.div>
    </div>
  );
};

export default function TermsOfUseContent() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(TERMS_DATA[0].id);

  const scrollToSection = (id: string) => {
    setOpenSectionId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const navLinks = [
    { name: "Acceptance of Terms", id: "acceptance" },
    { name: "Use of Platform", id: "use" },
    { name: "User Accounts", id: "accounts" },
    { name: "Coupon & Deal Accuracy", id: "accuracy" },
    { name: "Intellectual Property", id: "property" },
    { name: "Affiliate Disclosure", id: "affiliate" },
    { name: "Limitation of Liability", id: "liability" },
    { name: "Prohibited Activities", id: "prohibited" },
    { name: "Termination", id: "termination" },
    { name: "Governing Law", id: "law" },
    { name: "Changes to Terms", id: "changes" },
    { name: "Contact Us", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative w-full pt-20 pb-24 bg-gradient-to-br from-[#0451c4] to-[#056bfa] text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8"
          >
            <span className="text-[#056bfa] font-bold text-sm tracking-wide">Please Read Before Using Our Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-extrabold text-4xl md:text-6xl mb-2"
          >
            Terms of Use
          </motion.h1>
       

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-lg max-w-[700px] mx-auto mb-10 leading-relaxed"
          >
            Welcome to Couponsbit. By using our website, you agree to comply with these Terms and Conditions. Please read them carefully before using our coupon website and online shopping deals platform.

          </motion.p>

        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Terms of Use</span>
          </nav>
        </div>
      </div>

      {/* Section 3: Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[860px]">
          

          <div className="space-y-4">
            {TERMS_DATA.map((section) => (
              <AccordionItem
                key={section.id}
                section={section}
                isOpen={openSectionId === section.id}
                onToggle={() => setOpenSectionId(prev => prev === section.id ? null : section.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA */}
      <section className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-5xl mb-6">📋</div>
          <h2 className="text-3xl font-black text-white mb-4">Questions About Our Terms?</h2>
          <p className="text-white/80 text-lg mb-10">Our legal team is happy to clarify anything</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-9 py-4 bg-white text-[#056bfa] rounded-full font-bold text-base shadow-lg transition-all hover:scale-105 text-center">
              Contact Legal Team
            </Link>
            <Link href="/privacy-policy" className="w-full sm:w-auto px-9 py-4 border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-[#056bfa] transition-all text-center">
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
