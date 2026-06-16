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
interface PolicySection {
  id: string;
  title: string;
  content: string;
}

// --- Data ---
// --- Updated Privacy Policy Data ---

const PRIVACY_DATA: PolicySection[] = [
  {
    id: "collect",
    title: "Information We Collect",
    content: `When you use Couponsbit, we may collect certain information, including:

• Name and email address when contacting us  
• Browser type and device information  
• Cookies and website usage data  
• IP address and geographic location  
• Pages visited and clicks on promo codes or discount codes  

This information helps us improve user experience and provide better online shopping deals and coupon help.`,
  },

  {
    id: "use",
    title: "How We Use Your Information",
    content: `Couponsbit may use your information to:

• Improve website performance and user experience  
• Provide relevant promo codes and discount codes  
• Respond to customer support requests  
• Monitor website traffic and analytics  
• Prevent fraudulent or abusive activity  
• Send newsletters or promotional updates if subscribed`,
  },

  {
    id: "cookies",
    title: "Cookies Policy",
    content: `Couponsbit uses cookies to enhance browsing experience and analyze website traffic. Cookies help us understand user preferences and improve shopping deals recommendations.

You may disable cookies through your browser settings, but some website features may not function properly.`,
  },

  {
    id: "links",
    title: "Third-Party Links",
    content: `Our website contains links to third-party retailers and international shopping websites. Once you leave Couponsbit and visit another website, we are not responsible for the privacy practices or content of those websites.`,
  },

  {
    id: "affiliate",
    title: "Affiliate Disclosure",
    content: `Couponsbit may earn affiliate commissions when users click on certain promo codes, discount codes, or shopping deals and complete purchases through partner websites. This does not affect the price users pay.`,
  },

  {
    id: "security",
    title: "Data Security",
    content: `We implement appropriate security measures to protect user information against unauthorized access, misuse, or disclosure. However, no online platform can guarantee complete security.`,
  },

  {
    id: "children",
    title: "Children’s Privacy",
    content: `Couponsbit is not intended for children under the age of 13. We do not knowingly collect personal information from children.`,
  },

  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.`,
  },

  {
    id: "contact",
    title: "Contact Us",
    content: `If you have questions regarding this Privacy Policy, promo codes, or coupon help, please contact us through our Contact page.`,
  },
];

// --- Components ---

const AccordionItem: React.FC<{ section: PolicySection, isOpen: boolean, onToggle: () => void }> = ({ section, isOpen, onToggle }) => {
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

export default function PrivacyPolicyContent() {
  const [openSectionId, setOpenSectionId] = useState<string | null>("collect");

  const scrollToSection = (id: string) => {
    setOpenSectionId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const navLinks = [
    { name: "Information We Collect", id: "collect" },
    { name: "How We Use Your Information", id: "use" },
    { name: "Information Sharing", id: "sharing" },
    { name: "Cookies Policy", id: "cookies" },
    { name: "Data Security", id: "security" },
    { name: "Your Rights", id: "rights" },
    { name: "Third Party Links", id: "links" },
    { name: "Children's Privacy", id: "children" },
    { name: "Changes to Policy", id: "changes" },
    { name: "Contact Us", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative w-full pt-20 pb-24 bg-gradient-to-br from-[#0451c4] to-[#056bfa] mt-[64px] text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8"
          >
            <span className="text-[#056bfa] font-bold text-sm tracking-wide">Your Privacy Matters to Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-extrabold text-4xl md:text-6xl mb-2"
          >
            Privacy Policy
          </motion.h1>
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-lg max-w-[700px] mx-auto mb-10 leading-relaxed"
          >
            At Couponsbit, we respect your privacy and are committed to protecting the information you share with us while using our coupon website, promo code services, and online shopping deals platform.

          </motion.p>

          

    
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Section 3: Sidebar + Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[860px]">
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center">
            This Privacy Policy explains how we collect, use, store, and protect your information when you access Couponsbit.

          </p>

          <div className="space-y-4">
            {PRIVACY_DATA.map((section) => (
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
          <div className="text-5xl mb-6">🔒</div>
          <h2 className="text-3xl font-black text-white mb-4">Your Privacy is Our Priority</h2>
          <p className="text-white/80 text-lg mb-10">Have privacy concerns? Contact our privacy team directly</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-9 py-4 bg-white text-[#056bfa] rounded-full font-bold text-base shadow-lg transition-all hover:scale-105 text-center">
              Contact Privacy Team
            </Link>
            <Link href="/faqs" className="w-full sm:w-auto px-9 py-4 border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-[#056bfa] transition-all text-center">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
