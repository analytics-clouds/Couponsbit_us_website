"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Droplets,
  Sparkles,
  Leaf,
  PackageOpen,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "FLAT", heading: "Yauvari Amplified Youth Spring | FLAT 50% OFF", sub: "The Ayurveda Experience" },
  { id: "d2", label: "SAVE", heading: "Day & Night Face Oil Duo | SAVE 10%", sub: "The Ayurveda Experience" },
  { id: "d3", label: "ONLY", heading: "Balaayah Firming Body Oil | JUST $45", sub: "The Ayurveda Experience" },
  { id: "d4", label: "FROM", heading: "Firm-Focus Neck Mask | FROM $45", sub: "The Ayurveda Experience" },
  { id: "d5", label: "FROM", heading: "Cerabuild Face & Neck Cream | FROM $45", sub: "The Ayurveda Experience" },
  { id: "d6", label: "ONLY", heading: "5 Mini Skincare Essentials | JUST $35", sub: "The Ayurveda Experience" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
];

const STORE_URL = "https://www.jdoqocy.com/click-100938140-15601690?sid=1015";

export default function TheAyurvedaExperienceCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Toast Notification */}
      <div className={cn(
        "fixed top-20 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-3 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
      )}>
        <div className="bg-[#f0fdf4] p-2 rounded-full">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div>
          <p className="font-black text-black text-sm">Code Copied!</p>
          <p className="text-gray-500 text-xs font-bold font-mono">{toastCode}</p>
        </div>
      </div>

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">The Ayurveda Experience</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp" alt="The Ayurveda Experience" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">The Ayurveda Experience</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(19.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find The Ayurveda Experience discount codes, promo codes, and Ayurvedic skincare deals for Sep 2026. Save 50% on Yauvari Youth Spring, 10% on the Day & Night Face Oil Duo, and shop body oils, neck care, face creams, and mini skincare essentials from $35.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "870", label: "Deals" },
                    { icon: Users, val: "4M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788258588/6_vxpofa.webp" alt="The Ayurveda Experience Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4">
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons + Sidebar */}
        {/* Coupons + Sidebar */}
<section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">
            The Ayurveda Experience Discount Codes & Offers
          </h2>
        </div>

        {[
          { label: "FLAT", value: "50% OFF", title: "The Ayurveda Experience Discount Code – Yauvari Amplified Youth Spring | FLAT 50% OFF", desc: "Get Yauvari Amplified Youth Spring for just $24, down from $48.", bullets: ["Enjoy 50% savings on this Ayurvedic skincare essential.", "Helps improve the appearance of firmness, smoothness, and youthful-looking skin.", "Shop this limited-time offer and save $24."] },
          { label: "SAVE", value: "10% OFF", title: "he Ayurveda Experience Discount Code– Day & Night Face Oil Duo | SAVE 10% –", desc: "Get the Day & Night Face Oil Duo for $81, down from $90.", bullets: ["Save $9 on this curated Ayurvedic skincare duo.", "Designed for morning and evening skincare routines.", "Nourishes the skin and makes an ideal addition to your daily ritual."] },
          { label: "ONLY", value: "$45", title: "The Ayurveda Experience Promo Code – Balaayah Firming Body Oil | JUST $45", desc: "Shop Balaayah Firming Body Oil for only $45.", bullets: ["Helps nourish and moisturize dry, mature-looking skin.", "Formulated with Ayurvedic ingredients for a rich body-care experience.", "Available for customers in the USA, Canada, Australia & Singapore."] },
          { label: "FROM", value: "$45", title: "The Ayurveda Experience Promo Code – Firm-Focus Neck Mask | FROM $45", desc: "Get the Firm-Focus Neck Mask from $45.", bullets: ["Helps improve the appearance of loose-looking skin around the neck and jawline.", "Formulated with Phyto-Ceramides and Water Lily.", "Available across the USA, Canada, Australia & Singapore."] },
          { label: "FROM", value: "$45", title: "The Ayurveda Experience – Cerabuild Face & Neck Cream | FROM $45", desc: "Get Cerabuild Face & Neck Cream from $45.", bullets: ["Designed for both face and neck skincare.", "Ships across the USA, Canada, Australia & Singapore."] },
          { label: "ONLY", value: "$35", title: "The Ayurveda Experience – 5 Mini Skincare Essentials | JUST $35", desc: "Get 5 bestselling mini skincare essentials for just $35.", bullets: ["Perfect for travel, gifting, or trying Ayurvedic skincare.", "Explore a selection of premium skincare products in convenient mini sizes.", "A great way to experience the range before purchasing full-size products."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Left Blue Badge */}
                <div className="relative w-[110px] sm:w-[150px] bg-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                      {c.label}
                    </p>
                    <div className="text-sm sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">
                      {c.value}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                  <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                        Limited Time
                      </span>
                      <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                        Verified Deal
                      </span>
                    </div>
                    <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                      {c.title}
                    </h2>
                    <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                      {c.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                    >
                      View Details
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                        {c.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <span className="text-[#0344b0]">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Shop The Ayurveda Experience: ${c.title}`}
                      className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                    >
                      Get Deal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">

        <div className="w-full flex justify-center mb-6">
          <a
            href="https://www.google.com/preferences/source?q=couponsbit.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <Image
              src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
              alt="Add as a preferred source on Google"
              width={280}
              height={70}
              className="w-full max-w-[260px] h-auto object-contain"
              priority
            />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">
            About The Ayurveda Experience
          </h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            The Ayurveda Experience is a wellness brand offering Ayurvedic hair oils, skincare, herbal supplements and wellness kits made with traditional natural ingredients.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2"
          >
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
          <div className="space-y-1">
            {[
              { icon: Droplets, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
              { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
              { icon: Sparkles, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Leaf, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
              { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                  <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">
                    {cat.name}
                  </span>
                </div>
                <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">
                  {cat.count} Coupons
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/categories"
            className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-8">
            The Ayurveda Experience Products & Services
          </h3>
          <div className="space-y-8">
            {[
              { icon: Droplets, title: "Ayurvedic Hair Oils", sub: "Traditional hair oil formulas made with natural ingredients." },
              { icon: Sparkles, title: "Skincare", sub: "Face oils, cleansers and masks formulated with Ayurvedic herbs." },
              { icon: Leaf, title: "Herbal Supplements", sub: "Wellness and herbal supplements for everyday support." },
              { icon: PackageOpen, title: "Wellness Kits", sub: "Curated kits combining multiple Ayurvedic products." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 items-start text-justify">
                <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-black font-black text-sm leading-tight mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/stores" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  The Ayurveda Experience Discount Codes, Promo Codes & Wellness Deals 2026
                </h2>

             <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Yauvari Amplified Youth Spring
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat 50% OFF ($24)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time offer, save $24
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Ayurvedic youth spring skincare
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Day &amp; Night Face Oil Duo
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save 10% OFF ($81)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Discounted bundled price ($90 orig.)
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Morning and evening face oil duo
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Balaayah Firming Body Oil
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $45
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA, CA, AU &amp; SG
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Select region shipping
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Firming body oil for mature skin
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Firm-Focus Neck Mask
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $45
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA, CA, AU &amp; SG
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Phyto-Ceramides &amp; Water Lily formula
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Neck &amp; jawline firming treatment
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Cerabuild Face &amp; Neck Cream
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $45
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA, CA, AU &amp; SG
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            International shipping available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Dual-action face and neck cream
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            5 Mini Skincare Essentials
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $35
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Travel size bundle
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            5 bestselling Ayurvedic mini items
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for the latest <strong>The Ayurveda Experience discount codes and promo codes</strong>? At Couponsbit, we help shoppers find hair oil offers, skincare deals, herbal supplement picks and wellness kit offers.
                  </p>
                  <p>
                    Whether you're building a hair care routine or exploring Ayurvedic skincare, The Ayurveda Experience offers a range of products rooted in traditional formulas. Before you shop, check Couponsbit for the latest offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About The Ayurveda Experience</h3>
                    <p>
                      The Ayurveda Experience is a wellness brand offering Ayurvedic hair oils, skincare, herbal supplements and wellness kits made with traditional natural ingredients.
                    </p>
                    <p>
                      The brand's curated wellness kits combine multiple products, offering a convenient way for shoppers to explore Ayurvedic hair, skin and overall wellness routines.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest The Ayurveda Experience offers, bundle deals and first-order picks in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use The Ayurveda Experience via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available Offers — Visit The Ayurveda Experience page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits your needs.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant page.",
                        "Step 4: Browse Products — Explore hair oils, skincare or wellness kits.",
                        "Step 5: Check First Order Savings — New customers can review eligible discounts.",
                        "Step 6: Complete Your Purchase — Add items to your cart and check out.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at The Ayurveda Experience</h3>
                    <p><strong>Check Couponsbit Before Shopping:</strong> Always visit Couponsbit before shopping to see the latest offers.</p>
                    <p><strong>Try a Wellness Kit:</strong> Kits can offer better value than individual products.</p>
                    <p><strong>Watch for Bundle Deals:</strong> Hair care bundles are updated regularly.</p>
                    <p><strong>Check First Order Savings:</strong> New customers may be eligible for discounts.</p>
                    <p><strong>Compare Herbal Supplement Options:</strong> Review ingredients to find the right fit for your needs.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose The Ayurveda Experience?</h3>
                    <p><strong>Traditional Formulas:</strong> Products rooted in Ayurvedic ingredients and practices.</p>
                    <p><strong>Wide Product Range:</strong> Hair oils, skincare, supplements and wellness kits.</p>
                    <p><strong>Curated Kits:</strong> A convenient way to explore multiple products together.</p>
                    <p><strong>Wellness-Focused Brand:</strong> Products designed for hair, skin and overall wellness.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for The Ayurveda Experience Deals?</h3>
                    <p><strong>Curated Offers:</strong> We regularly review available offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find hair oil offers, skincare picks and wellness kit highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across wellness, fashion, electronics and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Support Your Wellness Routine for Less</h3>
                    <p>Whether you're shopping for hair oils, skincare, or a wellness kit, The Ayurveda Experience offers a range of options to explore.</p>
                    <p>Before your next order, check Couponsbit to explore the latest offers and updates.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQ */}
                <div className="mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is The Ayurveda Experience?", a: "The Ayurveda Experience is a wellness brand offering Ayurvedic hair oils, skincare, herbal supplements and wellness kits." },
                    { q: "Does The Ayurveda Experience offer discount codes?", a: "Yes. The Ayurveda Experience runs promotions such as hair oil offers and first order discount picks." },
                    { q: "Where can I find The Ayurveda Experience discount codes?", a: "You can find the latest The Ayurveda Experience discount codes and offers on Couponsbit." },
                    { q: "Does The Ayurveda Experience sell skincare products?", a: "Yes. The Ayurveda Experience offers Ayurvedic skincare products alongside its hair care and wellness range." },
                    { q: "Does The Ayurveda Experience offer wellness kits?", a: "Yes. The Ayurveda Experience offers curated wellness kits combining multiple Ayurvedic products." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
                        <span className="text-black font-black text-base">{faq.q}</span>
                        <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                          <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                        </div>
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Ayurvedic Hair Oil", "Skincare Deals", "Herbal Supplements", "Ayurveda Discount Code", "Wellness Kits", "Hair Care Bundles", "Natural Skincare", "First Order Deal"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">T</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop The Ayurveda Experience: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
