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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Presentation,
  FileText,
  Globe,
  Users2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Envato Elements", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp", dealText: "Up to 50% OFF", href: "/stores/envato-elements-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
];

const STORE_URL = "https://try.gamma.app/itnpygrzknl9";

export default function GammaContent() {
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
              <span className="text-black font-extrabold">Gamma</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1791437484/gamma-logo_zh4kj5.webp" alt="Gamma" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Gamma Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(2,900 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on AI-powered presentation tools with the latest Gamma Discount Code. Enjoy up to 28% OFF eligible annual subscription plans and start with a free trial on selected plans. Use a Gamma Promo Code to unlock verified savings and access premium templates, AI features, and professional content creation tools.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "25K+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791437484/gamma-logo_zh4kj5.webp" alt="Gamma Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Gamma Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "26%", title: "Gamma – Save Up to 26% on Subscription Plans", desc: "Enjoy up to 26% off on Gamma subscription plans.", bullets: ["Choose from flexible monthly and annual plans with AI-powered tools and templates.", "Save more with special subscription offers and discounted plans.", "Sign up now and get more value from Gamma's presentation and content creation tools."] },
                  { label: "UP TO", value: "28%", title: "Gamma Annual Subscription – Save Up to 28%", desc: "Save up to 28% on eligible Gamma annual subscription plans.", bullets: ["Enjoy access to AI-powered presentation tools and creative templates.", "Choose an annual plan for greater savings compared with monthly billing.", "Subscribe now and unlock Gamma's premium features."] },
                  { label: "FREE", value: "Templates", title: "Gamma Signup Offer – Get Free Templates", desc: "Sign up for Gamma and get free templates on your first use.", bullets: ["Create presentations, documents and other content with Gamma's AI tools.", "Explore professionally designed templates to get started quickly.", "Join Gamma today and start creating with your signup offer."] },
                  { label: "FROM", value: "$20", title: "Gamma Pro Monthly Plan – From $20", desc: "Get the Gamma Pro Monthly Plan starting from $20.", bullets: ["Access advanced AI tools, templates and premium creation features.", "Create professional presentations and content with greater flexibility.", "Choose the monthly plan and upgrade your Gamma experience."] },
                  { label: "FROM", value: "$96", title: "Gamma Annual Plus Plan – From $96", desc: "Get the Gamma Annual Plus Plan starting at $96.", bullets: ["Enjoy premium AI-powered tools and templates throughout your subscription.", "Save with annual billing while accessing Gamma's advanced features.", "Choose the Plus plan for a more powerful content creation experience."] },
                  { label: "FROM", value: "$100", title: "Gamma Monthly Ultra Plan – From $100", desc: "Get the Gamma Monthly Ultra Plan starting at $100.", bullets: ["Unlock advanced AI-powered features for creating professional content.", "Enjoy premium tools and templates with the Ultra subscription.", "Upgrade to Gamma Ultra and create more with powerful AI tools."] },
                  { label: "FROM", value: "$180", title: "Gamma Annual Pro Plan – From $180", desc: "Get the Gamma Annual Pro Plan starting at just $180.", bullets: ["Enjoy advanced AI tools, premium templates and professional creation features.", "Choose annual billing for extended access to Gamma Pro.", "Start creating polished presentations and content with Gamma's premium tools."] },
                  { label: "FROM", value: "$10", title: "Gamma Monthly Plus Plan – From $10", desc: "Grab the Gamma Monthly Plus Plan starting at just $10.", bullets: ["Get access to premium templates and AI-powered content creation tools.", "Create professional presentations and documents with ease.", "Choose the monthly Plus plan for flexible access to Gamma's features."] },
                  { label: "FREE", value: "Trial", title: "Gamma – Free Trial on Subscription Plans", desc: "Enjoy a free trial on eligible Gamma subscription plans.", bullets: ["Explore Gamma's AI-powered tools, templates and content creation features.", "Try the platform before committing to a paid subscription.", "Start your Gamma journey and discover its creative tools today."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                            <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Gamma: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="nofollow noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Gamma AI?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Gamma is an AI-powered content creation platform designed to help users create presentations, documents, websites, and other visual content. Instead of starting with a blank page and designing every element manually, users can provide an idea or prompt and use Gamma's AI tools to generate a structured starting point.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is useful for professionals, students, marketers, entrepreneurs, educators, and teams that need to create visually engaging content quickly. Gamma combines AI-assisted writing and design with editable layouts, allowing users to refine the generated content according to their requirements.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    From business presentations and sales pitches to reports, proposals, educational material, and simple websites, Gamma can be used across a variety of content needs.
                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Presentation, name: "AI Presentations", count: "15+", color: "text-blue-500", href: "/categories/software" },
                        { icon: FileText, name: "AI Documents", count: "10+", color: "text-purple-500", href: "/categories/software" },
                        { icon: Globe, name: "AI Websites", count: "8+", color: "text-pink-500", href: "/categories/software" },
                        { icon: Users2, name: "Team Plans", count: "6+", color: "text-teal-500", href: "/categories/software" },
                        { icon: Percent, name: "Promo Offers", count: "10+", color: "text-orange-500", href: "/categories/software" },
                      ].map((cat, i) => (
                        <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                            <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                          </div>
                          <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                        </Link>
                      ))}
                   </div>
                   <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    How to Use a Gamma AI Discount Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Found a suitable Gamma AI discount code on CouponsBit? Follow these general steps to redeem it:
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Visit CouponsBit:</strong>
        Open the Gamma AI page and review the available offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Select a promotion:</strong>
        Choose a discount code or deal that matches your purchase.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Copy the code:</strong>
        If the offer provides a promotional code, copy it.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Visit Gamma:</strong>
        Head to Gamma and choose the plan or service you want.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Apply the code:</strong>
        Enter the promotional code in the designated field during the applicable stage of checkout or upgrade.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Complete your purchase:</strong>
        Confirm that the discount has been applied before completing your subscription.
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If the code doesn't work, check whether it has expired or whether there are restrictions on the selected plan. Some offers may also be limited to eligible customers.
    </p>
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Gamma AI Discount Code, Coupons & Deals
        </h2>


        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Gamma Subscription Plans", "Up to 26% OFF", "All Users", "Save across flexible monthly and annual plans with AI tools and templates", "Subscription Plans"],
        ["Gamma Annual Subscription", "Up to 28% OFF", "All Users", "Greater savings on annual billing compared to monthly plans", "Annual Plans"],
        ["Gamma Signup Offer", "Free Templates", "New Users", "Sign up to get access to professionally designed templates on first use", "First Signup"],
        ["Gamma Pro Monthly Plan", "From $20 / month", "All Users", "Flexible monthly plan with advanced AI tools and premium creation features", "Pro Monthly"],
        ["Gamma Plus Annual Plan", "From $96 / year", "All Users", "Annual billing offer ($8/mo equivalent) for full year of Plus AI features", "Plus Annual"],
        ["Gamma Ultra Monthly Plan", "From $100 / month", "All Users", "Unlock top-tier AI features, premium models, and advanced tools", "Ultra Monthly"],
        ["Gamma Pro Annual Plan", "From $180 / year", "All Users", "Discounted annual rate ($15/mo equivalent) for full Pro feature set", "Pro Annual"],
        ["Gamma Plus Monthly Plan", "From $10 / month", "All Users", "Flexible entry-level monthly plan with essential AI generation tools", "Plus Monthly"],
        ["Gamma Subscription Free Trial", "Free Trial", "Eligible Users", "Try AI tools, templates, and content creation features before committing", "All Subscriptions"]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Looking for a Gamma AI discount code to save on your next presentation, document, or website project? CouponsBit helps you find the latest Gamma AI discount codes, coupons, promo codes, and offers before you upgrade or purchase a plan. Whether you're creating presentations for work, building a pitch deck, preparing educational content, or turning an idea into a polished web page, Gamma AI can help you create professional-looking content with less manual effort.
          </p>
          <p>
            Before choosing a Gamma plan, check CouponsBit for available savings and promotional offers.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Tips for Getting More Value From Gamma AI
              </h3>
              <p>
                A discount is only one part of getting value from an AI content creation platform. Before selecting a paid plan, consider how frequently you'll use Gamma and the type of content you intend to create.
              </p>
              <p>
                If you primarily need presentations for occasional projects, your requirements may differ from someone creating sales decks, reports, websites, and other content every week.
              </p>
              <p>
                You can also prepare your prompts carefully before generating content. Providing Gamma with clear information about your audience, objective, tone, and key points can give you a stronger starting draft and reduce the amount of editing required.
              </p>
              <p>
                Most importantly, check for a Gamma AI discount code before upgrading so you don't miss a potential saving.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      Gamma AI Offers &amp; Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a Gamma AI Discount Code on CouponsBit
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Premium AI tools can become an additional expense, especially for professionals and teams using them regularly. Finding a Gamma AI discount code before upgrading can therefore be a useful way to reduce your overall cost.
      </p>
      <p>
        CouponsBit brings Gamma AI coupons, promotional codes, and offers together so you can check available savings before making a purchase. Rather than upgrading immediately, visit the Gamma AI page on CouponsBit and review the current promotions.
      </p>
      <p>
        Select an offer that matches your plan and eligibility, follow the redemption instructions, and make sure you understand any conditions attached to the promotion.
      </p>
      <p>
        Since discounts and promotional campaigns can change, checking CouponsBit before checkout can help you avoid missing a relevant offer.
      </p>
    </div>
  </section>

  {/* Coupons, Promo Codes & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> Gamma AI Coupons, Promo Codes &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Gamma AI savings may come in different forms. Depending on the promotion available at the time, users may find a direct discount, promotional code, subscription offer, or another limited-time deal.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">On CouponsBit, you can check for:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Gamma AI discount codes",
              "Gamma AI promo codes",
              "Gamma AI coupons",
              "Gamma AI promotional offers",
              "Subscription deals",
              "Limited-time discounts",
              "New-user promotions",
              "AI presentation and content creation offers"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Not every promotion will apply to every account or plan. Some offers may be restricted by subscription type, billing period, eligibility, or promotional terms, so always review the conditions before applying a code.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* What Can You Create With Gamma AI? */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Sparkles className="w-6 h-6" /> What Can You Create With Gamma AI?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Gamma is designed to simplify the process of turning ideas into polished visual content. Users can create presentations, documents, and websites without having to build everything from scratch.
        </p>
        <p>
          For businesses, Gamma can be useful for creating pitch decks, sales presentations, project proposals, internal reports, and marketing material. Startup founders can use it to turn business ideas into presentations, while sales teams can create customer-facing decks more efficiently.
        </p>
        <p>
          Students and educators can also use AI-assisted creation to structure presentations and learning material. Instead of spending significant time deciding how to organize every slide or section, users can start with an AI-generated structure and customize it.
        </p>
        <p>
          Gamma's website creation capabilities can also help users turn information or concepts into simple web experiences without beginning with traditional web-design workflows.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Why Check for a Promo Code? */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <HelpCircle className="w-6 h-6" /> Why Check for a Gamma AI Promo Code?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          If you're planning to use Gamma regularly, even a small promotional saving can make a difference over the duration of your subscription. This is particularly relevant for freelancers, businesses, students, and teams that rely on AI-powered content creation tools frequently.
        </p>
        <p>
          Checking CouponsBit before subscribing gives you the opportunity to compare available offers before committing to a paid plan.
        </p>
        <p>
          You can also make the most of Gamma's capabilities by choosing a plan based on how frequently you create content and which features you need. Instead of upgrading without checking available options, review the current plans and available promotions first.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Save on Gamma AI With CouponsBit
              </h3>
              <p>
                Gamma AI makes it easier to turn ideas into presentations, documents, websites, and other polished visual content with AI assistance. Whether you're creating a pitch deck, business proposal, classroom presentation, or marketing material, the platform can help streamline the creative process.
              </p>
              <p>
                Before upgrading to a paid Gamma plan, visit CouponsBit to check the latest Gamma AI discount code, coupons, promo codes, and deals. Compare the available offers, review their terms, and choose the promotion that gives you the best value for your needs.
              </p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Gamma AI Discount Codes
          </h3>
          {[
            {
              q: "How can I find a Gamma AI discount code?",
              a: "Check the Gamma AI page on CouponsBit for available discount codes, coupons, and promotional offers. Review the terms of each promotion before using it.",
            },
            {
              q: "Can I use a Gamma AI discount code on every plan?",
              a: "Not necessarily. Promotional codes can have specific eligibility requirements and may apply only to certain plans or subscription types. Check the individual offer for its conditions.",
            },
            {
              q: "Why isn't my Gamma AI promo code working?",
              a: "A promo code may have expired, reached its usage limit, or may not be valid for the plan you're trying to purchase. Check the promotion's terms and make sure the code is entered correctly.",
            },
            {
              q: "Does Gamma AI offer discounts without promo codes?",
              a: "Gamma may run promotions where a discount is applied directly rather than through a coupon code. CouponsBit can help you check for both code-based and other promotional offers.",
            },
            {
              q: "Should I check CouponsBit before subscribing to Gamma AI?",
              a: "Yes. Checking for a Gamma AI discount code before subscribing takes only a moment and gives you an opportunity to find an available promotion before paying for your plan.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-60 pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Gamma AI Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Gamma AI Discount Code",
              "AI Presentation Builder",
              "Gamma Plus Discount",
              "Gamma Pro Promo Code",
              "AI Pitch Deck Generator",
              "CouponsBit Gamma AI",
              "Gamma AI Annual Deal",
              "AI Document Creation",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Gamma AI Deals
          </h3>
          <div className="space-y-6">
            {[
              {
              heading: "ANNUAL SUBSCRIPTION",
              sub: "Save Up to 28% on eligible annual plans",
              },
              {
              heading: "SIGNUP OFFER",
              sub: "Get free templates on your first use",
              },
              {
              heading: "PRO MONTHLY PLAN",
              sub: "Starting from $20",
              },
              {
              heading: "FREE TRIAL",
              sub: "Try eligible subscription plans for free",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="https://gamma.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
                >
                  Get Deal
                </a>
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
