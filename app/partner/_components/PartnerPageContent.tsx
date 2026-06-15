"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Users, 
  Store, 
  TrendingUp, 
  Star, 
  Zap, 
  BadgeCheck, 
  ChevronRight, 
  Eye, 
  ShoppingBag, 
  Clock, 
  Globe, 
  Crown, 
  Megaphone, 
  CheckCircle, 
  FileText, 
  Search, 
  Settings, 
  Mail, 
  Phone, 
  Send,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
interface PartnerStat {
  icon: any;
  number: string;
  label: string;
  subtext: string;
}

interface PartnershipOption {
  id: string;
  name: string;
  tagline: string;
  gradient: string;
  iconGradient: string;
  icon: any;
  features: string[];
  buttonStyle: "outline" | "solid";
  isPopular?: boolean;
}

// --- Data ---
const STAT_CARDS: PartnerStat[] = [
  { icon: Users, number: "500K+", label: "Monthly Visitors", subtext: "Active deal hunters" },
  { icon: Eye, number: "2M+", label: "Monthly Page Views", subtext: "Massive brand exposure" },
  { icon: TrendingUp, number: "₹50 Cr+", label: "Sales Generated", subtext: "For our partners" },
  { icon: Star, number: "4.8/5", label: "Partner Satisfaction", subtext: "From 500+ reviews" },
  { icon: ShoppingBag, number: "35%", label: "Avg Conversion Boost", subtext: "vs industry average" },
  { icon: Clock, number: "24/7", label: "Deal Monitoring", subtext: "Always up to date" },
  { icon: Globe, number: "15+", label: "Cities Covered", subtext: "Across all of India" },
  { icon: BadgeCheck, number: "100%", label: "Verified Traffic", subtext: "Real shoppers only" }
];

const OPTIONS: PartnershipOption[] = [
  {
    id: "listing",
    name: "Store Listing",
    tagline: "Get your store discovered",
    gradient: "from-[#19798d] to-[#1a9db5]",
    iconGradient: "from-[#19798d] to-[#0f5a6b]",
    icon: Store,
    features: [
      "Free basic store listing",
      "Appear in store directory",
      "Coupon submission access",
      "Category page visibility",
      "Performance dashboard access"
    ],
    buttonStyle: "outline"
  },
  {
    id: "featured",
    name: "Featured Partner",
    tagline: "Maximum visibility & sales",
    gradient: "from-[#FF6B9D] to-[#19798d]",
    iconGradient: "from-[#FF6B9D] to-[#C44B8A]",
    icon: Crown,
    features: [
      "Featured store placement",
      "Homepage banner exposure",
      "Priority coupon listing",
      "Dedicated account manager",
      "Weekly performance reports",
      "Exclusive deal promotions"
    ],
    buttonStyle: "solid",
    isPopular: true
  },
  {
    id: "ads",
    name: "Advertising Partner",
    tagline: "Targeted brand campaigns",
    gradient: "from-[#F39C12] to-[#d35400]",
    iconGradient: "from-[#F39C12] to-[#d35400]",
    icon: Megaphone,
    features: [
      "Banner ad placements",
      "Newsletter sponsorships",
      "Category page takeover",
      "Custom landing pages",
      "Detailed analytics & ROI",
      "Dedicated campaign manager"
    ],
    buttonStyle: "outline"
  }
];

const MARQUEE_ROW_1 = ["Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Nike", "Puma", "Adidas", "MakeMyTrip", "Goibibo", "Zomato", "Swiggy", "Samsung", "Dell", "HP"];
const MARQUEE_ROW_2 = ["Lenovo", "BookMyShow", "Uber", "Redbus", "Healthkart", "MuscleBlaze", "Boat", "Noise", "Lenskart", "Mamaearth", "WOW Skin", "FirstCry", "Meesho", "Bewakoof", "Bata"];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Since partnering with Coupons Clouds our monthly sales increased by 40%. The quality of traffic they send is incredible — these are real shoppers who are ready to buy. Best decision we made for our brand.",
    initials: "AK",
    gradient: "from-[#19798d] to-[#0f5a6b]",
    name: "Amit Kapoor",
    role: "Marketing Director",
    store: "FashionBrand India"
  },
  {
    stars: 5,
    quote: "Coupons Clouds helped us reach customers we simply could not reach through other channels. The featured placement drove 3x more coupon redemptions in the first month alone. Highly recommend!",
    initials: "RP",
    gradient: "from-[#FF6B9D] to-[#C44B8A]",
    name: "Riya Patel",
    role: "E-commerce Head",
    store: "BeautyStore Pro"
  },
  {
    stars: 5,
    quote: "The team at Coupons Clouds is extremely professional and responsive. They set us up within 24 hours and the dashboard gives us complete visibility into our performance. Outstanding platform.",
    initials: "VS",
    gradient: "from-[#4A90E2] to-[#1a5fb4]",
    name: "Vikram Singh",
    role: "Founder & CEO",
    store: "TechGadgets.in"
  }
];

// --- Form Validation Helper ---
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function PartnerPageContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState<string>("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Controlled form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    traffic: "Under 10K",
    message: "",
    source: "Google Search",
    agreed: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    if (errors.categories) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.categories;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (formData.fullName.length < 3) newErrors.fullName = "Full Name must be at least 3 characters";
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid business email";
    if (formData.phone.length !== 10) newErrors.phone = "Phone Number must be exactly 10 digits";
    if (formData.companyName.length < 2) newErrors.companyName = "Company Name is required";
    if (formData.websiteUrl && !formData.websiteUrl.startsWith("http")) newErrors.websiteUrl = "Must start with http:// or https://";
    if (selectedCategories.length === 0) newErrors.categories = "Select at least one category";
    if (formData.message.length < 30) newErrors.message = "Please describe your business in at least 30 characters";
    if (!formData.agreed) newErrors.agreed = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Style Tag for Marquee Animation */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        .floating {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Section 1: Hero Section */}
      <section className="relative w-full pt-20 pb-36 md:pt-32 md:pb-52 bg-gradient-to-br from-[#0f5a6b] via-[#19798d] to-[#1a9db5] overflow-hidden mt-[64px]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8 animate-pulse"
          >
            <span className="text-[#19798d] font-bold text-sm tracking-wide">Grow Your Business With Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-extrabold text-5xl md:text-7xl mb-1 flex flex-col gap-2"
          >
            <span>Partner With</span>
            <span className="text-[#e8f6f8]">Coupons Clouds</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mt-8 mb-2 leading-relaxed"
          >
            Couponsbit is a growing international coupon website that helps brands connect with smart online shoppers looking for promo codes, discount codes, and shopping deals.

          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mt-4 mb-16 leading-relaxed"
          >
            We work with global brands, eCommerce businesses, service providers, and affiliate networks to promote verified offers and increase brand visibility.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, text: "500K+ Active Shoppers" },
              { icon: Store, text: "2000+ Partner Stores" },
              { icon: TrendingUp, text: "₹50 Cr+ Sales Generated" },
              { icon: Star, text: "4.8/5 Partner Rating" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 justify-center"
              >
                <item.icon className="w-5 h-5 text-[#19798d] shrink-0" />
                <span className="text-black font-black text-sm whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ top: "15%", left: "5%" }}
            className="absolute bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 floating"
          >
            <div className="p-3 bg-[#e8f6f8] rounded-xl"><Zap className="w-6 h-6 text-[#19798d]" /></div>
            <div className="text-left">
              <p className="font-black text-black text-sm">Instant Visibility</p>
              <p className="text-gray-500 text-xs font-bold">Reach shoppers immediately</p>
            </div>
          </motion.div>

          <motion.div 
            style={{ top: "10%", right: "8%", animationDelay: "0.5s" }}
            className="absolute bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 floating"
          >
            <div className="p-3 bg-[#e8f6f8] rounded-xl"><TrendingUp className="w-6 h-6 text-[#19798d]" /></div>
            <div className="text-left">
              <p className="font-black text-black text-sm">More Sales</p>
              <p className="text-gray-500 text-xs font-bold">Drive qualified traffic</p>
            </div>
          </motion.div>

          <motion.div 
            style={{ bottom: "20%", right: "5%", animationDelay: "1s" }}
            className="absolute bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 floating"
          >
            <div className="p-3 bg-[#f2fff2] rounded-xl"><BadgeCheck className="w-6 h-6 text-[#22c55e]" /></div>
            <div className="text-left">
              <p className="font-black text-black text-sm">Verified Platform</p>
              <p className="text-gray-500 text-xs font-bold">Trusted by 500K+ users</p>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0] relative z-20">
        <div className="container mx-auto px-4 py-3.5 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#19798d] font-bold hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-black">Partner With Us</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="inline-flex items-center rounded-full bg-[#19798d]/10 px-4 py-1 text-sm font-semibold text-[#19798d] mb-4">
        Partner Benefits
      </span>

      <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
        Why Partner With Couponsbit?
      </h2>

      <p className="mt-5 text-slate-600 text-lg leading-8">
        Grow your brand visibility, reach high-intent shoppers, and increase conversions through verified promotional campaigns.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="group bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-[#19798d]/10 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-[#19798d]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5V4H2v16h5m10 0v-6H7v6m10 0H7"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Reach Deal-Seeking Customers
        </h3>

        <p className="text-slate-600 leading-7 text-[15px]">
          Couponsbit helps brands attract customers actively searching for online shopping deals, promo codes, and discounts.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-[#19798d]/10 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-[#19798d]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M9 3v2m6-2v2m-9 4h12v10H6V9z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Increase Brand Visibility
        </h3>

        <p className="text-slate-600 leading-7 text-[15px]">
          We feature your offers across multiple categories including fashion, electronics, beauty, travel, lifestyle, and more.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-[#19798d]/10 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-[#19798d]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm0 0V3m0 15v3"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Improve Sales & Conversions
        </h3>

        <p className="text-slate-600 leading-7 text-[15px]">
          Consumers are more likely to complete purchases when they discover attractive discount codes and promotional deals.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-[#19798d]/10 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-[#19798d]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17l-5 3 1-6-4-4 6-.8L12 3l2 6.2 6 .8-4 4 1 6z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Trusted Coupon Website
        </h3>

        <p className="text-slate-600 leading-7 text-[15px]">
          We focus on verified deals, updated offers, and a seamless user experience that builds trust among shoppers.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Section 3: Why Partner With Us (Stats Banner) */}
      <section className="bg-[#0f1f22] py-24">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block bg-[#19798d] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            BY THE NUMBERS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Why Brands Choose Coupons Clouds</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STAT_CARDS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "#19798d" }}
                className="bg-[#1a3a3e] rounded-3xl p-10 border border-[#19798d]/30 text-center transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-[#19798d]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#19798d]/40 transition-colors">
                  <stat.icon className="w-10 h-10 text-[#19798d]" />
                </div>
                <p className="text-[#19798d] font-black text-5xl mb-2">{stat.number}</p>
                <p className="text-white font-black text-lg mb-2">{stat.label}</p>
                <p className="text-gray-400 font-bold text-sm">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Partnership Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block bg-[#e8f6f8] text-[#19798d] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            PARTNERSHIP OPTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Choose How You Want to Partner</h2>
          <p className="text-gray-500 text-lg font-medium mb-16">Flexible partnership models designed for every type of business</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OPTIONS.map((opt) => (
              <motion.div 
                key={opt.id}
                whileHover={{ y: -8 }}
                className="bg-white border border-[#f0f0f0] rounded-[48px] p-10 md:p-14 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:border-[#19798d] transition-all duration-300 flex flex-col"
              >
                <div className={cn("absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r", opt.gradient)} />
                
                {opt.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#19798d] text-white text-[10px] font-black tracking-widest rounded-bl-3xl px-6 py-2.5 uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div className={cn("w-20 h-20 rounded-3xl mx-auto flex items-center justify-center bg-gradient-to-br shadow-xl mb-8", opt.iconGradient)}>
                  <opt.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-black text-black mb-2">{opt.name}</h3>
                <p className="text-[#19798d] font-black text-sm uppercase tracking-widest mb-6">{opt.tagline}</p>
                
                <div className="h-px bg-[#f0f0f0] w-full mb-8" />
                
                <ul className="space-y-4 mb-10 flex-1">
                  {opt.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0" />
                      <span className="text-gray-700 font-bold text-sm tracking-wide">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToForm}
                  className={cn(
                    "w-full py-7 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all text-center",
                    opt.buttonStyle === "solid" 
                      ? "bg-[#19798d] text-white hover:bg-[#0f5a6b] shadow-[#19798d]/20" 
                      : "bg-white border-2 border-[#19798d] text-[#19798d] hover:bg-[#19798d] hover:text-white"
                  )}
                >
                  Get Started →
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-flex items-center rounded-full bg-[#19798d] px-5 py-2 text-xs font-black uppercase tracking-wide text-white shadow-sm">
        Brand Benefits
      </span>

      <h2 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-slate-900">
        Benefits of Listing Your Brand
      </h2>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Line */}
      <div className="hidden lg:block absolute top-16 left-0 right-0 border-t-2 border-dashed border-[#19798d]/25"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">

        {/* Item 1 */}
        <div className="text-center relative">
          <div className="mx-auto w-28 h-28 rounded-full bg-[#19798d] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-black text-white">01</span>
          </div>

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            Global Reach
          </h3>

          <p className="mt-5 text-slate-600 leading-8 font-medium max-w-xs mx-auto">
            Reach a global audience actively searching for promo codes, shopping deals, and discounts.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-10 h-10 text-[#19798d]/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10m0-20C9.5 4.7 8 8.3 8 12s1.5 7.3 4 10"
              />
            </svg>
          </div>
        </div>

        {/* Item 2 */}
        <div className="text-center relative">
          <div className="mx-auto w-28 h-28 rounded-full bg-[#19798d] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-black text-white">02</span>
          </div>

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            More Traffic
          </h3>

          <p className="mt-5 text-slate-600 leading-8 font-medium max-w-xs mx-auto">
            Increase website traffic by showcasing exclusive deals and promotional offers.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-10 h-10 text-[#19798d]/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M12 3v18"
              />
            </svg>
          </div>
        </div>

        {/* Item 3 */}
        <div className="text-center relative">
          <div className="mx-auto w-28 h-28 rounded-full bg-[#19798d] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-black text-white">03</span>
          </div>

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            Customer Growth
          </h3>

          <p className="mt-5 text-slate-600 leading-8 font-medium max-w-xs mx-auto">
            Improve customer acquisition through highly targeted shopping campaigns.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-10 h-10 text-[#19798d]/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5V4H2v16h5"
              />
            </svg>
          </div>
        </div>

        {/* Item 4 */}
        <div className="text-center relative">
          <div className="mx-auto w-28 h-28 rounded-full bg-[#19798d] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-black text-white">04</span>
          </div>

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            Promote Offers
          </h3>

          <p className="mt-5 text-slate-600 leading-8 font-medium max-w-xs mx-auto">
            Promote exclusive offers, coupons, and discounts to high-intent shoppers.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-10 h-10 text-[#19798d]/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z"
              />
            </svg>
          </div>
        </div>

        {/* Item 5 */}
        <div className="text-center relative">
          <div className="mx-auto w-28 h-28 rounded-full bg-[#19798d] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-black text-white">05</span>
          </div>

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            More Conversions
          </h3>

          <p className="mt-5 text-slate-600 leading-8 font-medium max-w-xs mx-auto">
            Generate more conversions through targeted shopping deals and verified promotions.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-10 h-10 text-[#19798d]/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H9m8 0v8"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Section 6: Current Partners Marquee */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
          <h3 className="text-3xl font-black text-black mb-2">Trusted by India's Leading Brands</h3>
          <p className="text-gray-400 font-black text-sm uppercase tracking-widest">Join the growing family of 2000+ partner stores</p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fading Gradients */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="mb-8">
            <div className="animate-marquee-left">
              {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((name, i) => (
                <div key={i} className="bg-white px-10 py-4 mx-3 rounded-full border border-[#f0f0f0] shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#19798d] rounded-full" />
                  <span className="text-black font-black text-lg tracking-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <div className="animate-marquee-right">
              {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((name, i) => (
                <div key={i} className="bg-white px-10 py-4 mx-3 rounded-full border border-[#f0f0f0] shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#19798d] rounded-full" />
                  <span className="text-black font-black text-lg tracking-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block bg-[#19798d] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            PARTNER STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-16">What Our Partners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#f0f0f0] rounded-[48px] p-10 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:border-[#19798d] transition-all duration-300 flex flex-col text-left"
              >
                <div className="absolute top-10 left-8 text-[#e8f6f8] font-black text-[12rem] leading-none opacity-20 pointer-events-none select-none">“</div>
                
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg font-bold italic leading-relaxed mb-10 flex-1 relative z-10">
                  "{t.quote}"
                </p>
                
                <div className="h-px bg-[#f0f0f0] w-full mb-8" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg border-2 border-white shadow-xl bg-gradient-to-br", t.gradient)}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-black font-black text-lg leading-none mb-1">{t.name}</p>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-1">{t.role}</p>
                    <p className="text-[#19798d] font-black text-xs uppercase tracking-widest">{t.store}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Partnership Contact Form */}
      <section className="py-24 bg-white scroll-mt-24" ref={formRef}>
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block bg-[#e8f6f8] text-[#19798d] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            START YOUR PARTNERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Let's Grow Together</h2>
          <p className="text-gray-500 text-lg font-medium mb-16">Fill out the form below and our partnerships team will get back to you within 48 hours</p>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[48px] shadow-2xl border border-[#f0f0f0] p-8 md:p-14 max-w-[900px] mx-auto text-left"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Full Name</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19798d]" />
                        <input 
                          type="text" 
                          placeholder="Your full name"
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all",
                            errors.fullName ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                          )}
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19798d]" />
                        <input 
                          type="email" 
                          placeholder="business@yourstore.com"
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all",
                            errors.email ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                          )}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19798d]" />
                        <input 
                          type="tel" 
                          placeholder="+91 00000 00000"
                          maxLength={10}
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all",
                            errors.phone ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                          )}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Company Name</label>
                      <div className="relative">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19798d]" />
                        <input 
                          type="text" 
                          placeholder="Your store or brand name"
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all",
                            errors.companyName ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                          )}
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        />
                      </div>
                      {errors.companyName && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Website URL</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19798d]" />
                        <input 
                          type="text" 
                          placeholder="https://yourstore.com"
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all",
                            errors.websiteUrl ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                          )}
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                        />
                      </div>
                      {errors.websiteUrl && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.websiteUrl}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Monthly Website Traffic</label>
                      <select 
                        className="w-full px-4 py-4 rounded-2xl border-2 border-[#e0e0e0] font-bold text-sm outline-none focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10 transition-all bg-white"
                        value={formData.traffic}
                        onChange={(e) => setFormData({...formData, traffic: e.target.value})}
                      >
                        <option>Under 10K</option>
                        <option>10K–50K</option>
                        <option>50K–100K</option>
                        <option>100K–500K</option>
                        <option>500K+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Partnership Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: "listing", name: "Store Listing", icon: Store, desc: "Get your store listed for free" },
                        { id: "featured", name: "Featured Partner", icon: Crown, desc: "Maximum visibility & sales" },
                        { id: "ads", name: "Advertising", icon: Megaphone, desc: "Targeted brand campaigns" }
                      ].map((opt) => (
                        <div 
                          key={opt.id}
                          onClick={() => setSelectedType(opt.id)}
                          className={cn(
                            "relative border-2 rounded-2xl p-6 cursor-pointer text-center transition-all duration-300 hover:shadow-lg",
                            selectedType === opt.id 
                              ? "border-[#19798d] bg-[#e8f6f8] shadow-[#19798d]/10" 
                              : "border-[#e0e0e0] bg-white"
                          )}
                        >
                          <opt.icon className={cn("w-10 h-10 mx-auto mb-3 transition-colors", selectedType === opt.id ? "text-[#19798d]" : "text-gray-400")} />
                          <p className="text-black font-black text-sm mb-1">{opt.name}</p>
                          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-tight">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Product/Service Categories (Select Multiple)</label>
                    <div className="flex flex-wrap gap-2.5">
                      {["Fashion", "Electronics", "Travel", "Beauty", "Health", "Food", "Education", "Sports", "Home & Living", "Finance"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCategoryToggle(cat)}
                          className={cn(
                            "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border-2 transition-all duration-300",
                            selectedCategories.includes(cat)
                              ? "bg-[#19798d] border-[#19798d] text-white shadow-md"
                              : "bg-white border-[#19798d] text-[#19798d] hover:bg-[#e8f6f8]"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                    {errors.categories && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.categories}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-black text-sm uppercase tracking-widest">Tell Us About Your Business</label>
                    <textarea 
                      placeholder="Describe your store, products, target audience and what you are hoping to achieve through this partnership..."
                      rows={5}
                      className={cn(
                        "w-full px-6 py-4 rounded-2xl border-2 font-bold text-sm outline-none transition-all resize-none",
                        errors.message ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:border-[#19798d] focus:ring-4 focus:ring-[#19798d]/10"
                      )}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    {errors.message && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-black text-sm uppercase tracking-widest">How did you hear about us?</label>
                    <select 
                      className="w-full px-4 py-4 rounded-2xl border-2 border-[#e0e0e0] font-bold text-sm outline-none focus:border-[#19798d] bg-white"
                      value={formData.source}
                      onChange={(e) => setFormData({...formData, source: e.target.value})}
                    >
                      <option>Google Search</option>
                      <option>Social Media</option>
                      <option>Friend/Colleague Referral</option>
                      <option>Email Newsletter</option>
                      <option>Existing Partner</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-1">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={formData.agreed}
                          onChange={(e) => {
                            setFormData({...formData, agreed: e.target.checked});
                            if (errors.agreed) {
                              setErrors(prev => {
                                const newErrors = { ...prev };
                                delete newErrors.agreed;
                                return newErrors;
                              });
                            }
                          }}
                        />
                        <div className="w-6 h-6 border-2 border-[#19798d] rounded-md peer-checked:bg-[#19798d] transition-all flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 font-bold leading-relaxed">
                        I agree to the <Link href="/terms-of-use" className="text-[#19798d] hover:underline">Terms of Use</Link> and <Link href="/privacy-policy" className="text-[#19798d] hover:underline">Privacy Policy</Link> and consent to being contacted by the Coupons Clouds partnerships team
                      </span>
                    </label>
                    {errors.agreed && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">{errors.agreed}</p>}
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-18 bg-[#19798d] hover:bg-[#0f5a6b] text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all active:scale-[0.98] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        SUBMITTING REQUEST...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        SUBMIT PARTNERSHIP REQUEST
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[48px] shadow-2xl border border-[#f0f0f0] p-16 md:p-24 max-w-[800px] mx-auto text-center"
              >
                <div className="w-24 h-24 bg-[#f2fff2] rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <CheckCircle className="w-16 h-16 text-[#22c55e]" />
                </div>
                <h3 className="text-4xl font-black text-black mb-6">Partnership Request Sent!</h3>
                <p className="text-gray-500 font-bold text-lg mb-10 max-w-lg mx-auto">
                  Thank you! Our partnerships team will contact you within 48 hours on business days at your provided email address.
                </p>
                <p className="text-[#19798d] font-black text-lg mb-12">business@couponsclou.ds</p>
                
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-gray-400 font-black text-sm uppercase tracking-widest hover:text-[#19798d] transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section 9: Bottom CTA */}
      <section className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-8xl mb-8 animate-bounce">🤝</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">Ready to Reach 500K+ Shoppers?</h2>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-16">
              Join India's fastest growing coupon platform and watch your sales soar to new heights with our performance-driven partnerships
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-16 py-8 bg-white text-[#19798d] rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
              >
                Apply Now
              </Button>
              <Link href="/contact" className="w-full sm:w-auto px-16 py-8 border-[3px] border-white text-white rounded-full font-black text-xl hover:bg-white hover:text-[#19798d] transition-all text-center">
                Contact Us First
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
