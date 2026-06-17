"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users, BadgeCheck,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Code
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Coupon {
  id: string;
  store: { name: string; style: string; brandColor: string };
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

const STORES = [
  { id: "driffle-coupon-code", name: "Driffle", logo: "/driffle-coupon-code.webp", coupons: 14, discount: "Up to 15% OFF" },
  { id: "bluehost-coupon-code", name: "Bluehost", logo: "/bluehost-coupon-code.webp", coupons: 12, discount: "Up to 65% OFF" },
  { id: "envato-elements-coupon-code", name: "Envato Elements", logo: "/envato-coupon-code.webp", coupons: 7, discount: "Up to 50% OFF" },
  { id: "sintra-coupon-code", name: "Sintra", logo: "/sintra-coupon-code.webp", coupons: 5, discount: "Up to 40% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics",        count: "850+", color: "text-[#4A90E2]", href: "/categories/electronics" },
  { icon: Plane,  name: "Travel",             count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-[#8E44AD]", href: "/categories/entertainment" },
  { icon: Code,   name: "Software & Digital", count: "300+", color: "text-[#6B46C1]", href: "/categories/software", active: true },
  { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-[#27AE60]", href: "/categories/mobile" },
];

export default function SoftwareCouponsContent() {
  const [activeTab, setActiveTab] = useState("All (300)");
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupons, setExpandedCoupons] = useState<Set<string>>(new Set());
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleExpand = (id: string) => {
    const next = new Set(expandedCoupons);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedCoupons(next);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#056bfa] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Software & Digital</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Software & Digital Coupons</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on game keys, web hosting, creative assets and AI tools with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Code, val: "300+", label: "Coupons" },
                        { icon: Store, val: "30+", label: "Top Stores" },
                        { icon: Users, val: "20K+", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#6B46C1]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%] md:h-auto overflow-hidden">
                    <img src="https://res.cloudinary.com/couponsbit/image/upload/v1781677501/software-store_obazsu.webp" alt="Software & Digital Coupons" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Software & Digital</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {STORES.map((store) => (
                    <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                          <img src={store.logo} alt={store.name} className="max-h-12 max-w-[120px] w-auto object-contain" />
                        </div>
                        <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#056bfa] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                        <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                        <span className="text-xs font-black text-[#056bfa] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                      </div>
                      <div className="mt-4">
                        <Link href={`/stores/${store.id}`} className="block w-full">
                          <button className="w-full text-center py-2 border border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-lg text-xs font-black transition-all duration-300">View Store</button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <aside className="lg:w-[28%] space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <h3 className="text-black font-extrabold text-base mb-5">All Categories</h3>
                  <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((cat, i) => (
                      <Link key={i} href={cat.href} className={cn("flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all", cat.active ? "bg-[#FAF5FF] text-[#6B46C1]" : "hover:bg-[#f5f5f5]")}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.active ? "text-[#6B46C1]" : cat.color)} />
                          <span className={cn("text-sm", cat.active ? "font-bold text-[#6B46C1]" : "text-gray-700 font-medium")}>{cat.name}</span>
                        </div>
                        <span className={cn("text-xs", cat.active ? "font-extrabold text-[#6B46C1]" : "text-black font-bold")}>{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#056bfa] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Software Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every purchase" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "20,000+ happy customers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#FAF5FF] rounded-full flex items-center justify-center text-[#6B46C1]"><badge.icon className="w-4 h-4" /></div>
                        <div>
                          <p className="text-black font-extrabold text-sm leading-tight mb-0.5">{badge.title}</p>
                          <p className="text-gray-500 font-bold text-[10px]">{badge.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <section className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">

      {/* ── LEFT COLUMN ── */}
      <div className="lg:col-span-7 flex flex-col gap-14">

        {/* A — Intro */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
            Software Promo Codes, Software Coupon Codes & Tech Software Deals 2026
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Technology plays a crucial role in how we work, create, communicate, and manage our daily lives. If you're searching for the latest software promo codes, you've come to the right place. At Couponsbit, we help individuals, professionals, students, and businesses save money on essential software products, digital tools, subscriptions, and online services from leading software providers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're looking for productivity software, design tools, cybersecurity solutions, business applications, AI platforms, or cloud-based services, finding the right discount can make premium technology more affordable. That's why Couponsbit brings together verified software coupon codes, exclusive promotions, and the latest tech software deals to help you get the tools you need while keeping costs under control.
          </p>
        </div>

        {/* B — Why Shop (Discover Categories) */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Discover the Best Software Deals Online</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Software has become an essential investment for both personal and professional use. From managing projects and protecting devices to creating content and growing businesses, the right software can improve productivity and efficiency.
          </p>
          <p className="text-[#056bfa] text-sm font-bold mb-4">At Couponsbit, we help shoppers discover savings across a wide range of software categories, including:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              "Productivity software", "Business and office tools", "Graphic design software",
              "Video editing applications", "Cybersecurity and antivirus software", "AI-powered platforms",
              "Project management solutions", "CRM software", "Website-building tools",
              "Web hosting services", "Cloud storage platforms", "Developer tools",
              "Marketing software", "Accounting and finance software", "Educational software"
            ].map((category, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#e8f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#056bfa] transition-colors duration-300">
                  <Laptop className="w-4 h-4 text-[#056bfa] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-black font-extrabold text-xs">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs italic">
            Before purchasing a subscription or software license, checking for available software promo codes can help you secure valuable savings.
          </p>
        </div>

        {/* E — Category Breakdown (Popular Brands) */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Software Brands You Can Save On</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Today's software market offers solutions for virtually every need. Whether you're running a business, freelancing, studying, or managing personal projects, many software providers regularly offer discounts and promotional offers.
          </p>
          <p className="text-gray-500 text-xs font-bold mb-3">Popular software brands often featured on Couponsbit include:</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              "Envato Elements", "Bluehost", "Canva", "Adobe", "Microsoft", "Grammarly",
              "NordVPN", "Surfshark", "HubSpot", "Shopify", "Wix", "Squarespace",
              "Notion", "Monday.com", "QuickBooks", "FreshBooks", "Avast", "Norton",
              "Kaspersky", "Sintra AI"
            ].map((brand, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-3 text-center hover:shadow-sm hover:border-[#056bfa]/20 transition-all duration-300 group">
                <span className="text-gray-700 font-bold text-xs group-hover:text-[#056bfa] transition-colors">{brand}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            These platforms help millions of users improve productivity, security, collaboration, and creativity every day.
          </p>
        </div>

        {/* Why More People Are Investing in Software */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why More People Are Investing in Software</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Software solutions continue to transform the way people work and live. Businesses rely on digital tools to streamline operations, while individuals use software to stay organized, creative, and connected.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Improved Productivity", desc: "The right software can automate repetitive tasks and help users accomplish more in less time." },
              { title: "Greater Flexibility", desc: "Cloud-based software allows users to work from virtually anywhere with an internet connection." },
              { title: "Enhanced Security", desc: "Cybersecurity tools help protect personal information, devices, and business data from online threats." },
              { title: "Better Collaboration", desc: "Many modern platforms support real-time communication and teamwork across locations." },
              { title: "Continuous Innovation", desc: "Software companies regularly release updates, new features, and improvements to enhance the user experience." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C — How To Use */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use Software Promo Codes</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using software promo codes through Couponsbit is a quick and easy way to save money.</p>
          
          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Browse Available Offers", desc: "Explore the latest software coupon codes and promotional deals available on Couponsbit." },
              { step: "2", title: "Select a Promotion", desc: "Choose the offer that matches the software product or subscription you're interested in." },
              { step: "3", title: "Copy the Coupon Code", desc: "Reveal and copy the available discount code." },
              { step: "4", title: "Visit the Software Provider", desc: "Navigate to the provider's website and select your preferred plan, license, or subscription." },
              { step: "5", title: "Apply the Promo Code", desc: "Enter the coupon code during checkout and verify that the discount has been applied." },
              { step: "6", title: "Complete Your Purchase", desc: "Finalize your order and start using your software while enjoying extra savings." }
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#056bfa] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#056bfa]/20 my-1" />}
                </div>
                <div className="pb-7">
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use Couponsbit Section */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Use Couponsbit for Software Coupon Codes?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Couponsbit, we make it easier for consumers and businesses to find software savings.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Verified Promotions", desc: "We regularly update available software coupon codes and discounts from leading providers." },
              { title: "Wide Range of Software Categories", desc: "From business tools and cybersecurity solutions to creative software and AI platforms, we cover a broad range of products." },
              { title: "User-Friendly Experience", desc: "Quickly browse, copy, and apply software deals without unnecessary hassle." },
              { title: "Completely Free", desc: "Couponsbit is free to use and designed to help users save on digital products and services." },
              { title: "Updated Regularly", desc: "We continually monitor offers to help users discover new savings opportunities." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-black text-black mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {[
              { q: "What are software promo codes?", a: "Software promo codes are promotional discounts that can help reduce the cost of software subscriptions, licenses, digital tools, and online services." },
              { q: "Where can I find software coupon codes?", a: "Couponsbit regularly features software coupon codes from leading software companies, technology providers, and SaaS platforms." },
              { q: "Are software promo codes free to use?", a: "Yes. Software promo codes are completely free and can provide discounts on eligible purchases." },
              { q: "What types of tech software deals can I find?", a: "You may find discounts on productivity software, cybersecurity tools, AI platforms, website builders, marketing software, accounting solutions, and more." },
              { q: "When is the best time to buy software?", a: "Black Friday, Cyber Monday, New Year promotions, and company anniversary sales often feature some of the strongest software discounts." },
              { q: "Does Couponsbit verify software deals?", a: "We regularly review and update available promotions to help users discover relevant savings opportunities." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <h3 className="text-black font-extrabold text-base mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* D — Seasonal Sales Card (Best Times to Find) */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Best Times to Find Tech Software Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            While software discounts are available throughout the year, certain periods often offer especially attractive promotions.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {[
              "Black Friday", "Cyber Monday", "New Year Promotions", 
              "Back-to-School Season", "Anniversary Sales", "Product Launch Events"
            ].map((event) => (
              <span key={event} className="px-3 py-1.5 bg-[#e8f6f8] border border-[#056bfa]/20 text-[#056bfa] font-bold text-xs rounded-full cursor-default">
                {event}
              </span>
            ))}
          </div>
        </div>

        {/* F — Why Different Card (Smart Ways to Save) */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Ways to Save on Software Purchases</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Looking to maximize your savings? These strategies can help.
          </p>
          
          <div className="flex flex-col gap-3">
            {[
              "Always Check Couponsbit First", "Choose Annual Plans", "Watch for Free Trials",
              "Compare Features", "Subscribe to Brand Updates", "Look for Bundle Deals"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* G — CTA Card */}
        <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Save More on the Software You Need</h3>
          <p className="text-white/90 text-xs leading-relaxed mb-4">
            Whether you're launching a business, managing projects, creating content, improving cybersecurity, or boosting productivity, software has become an essential part of modern life.
          </p>
          <p className="text-white/80 text-xs leading-relaxed mb-5">
            Browse the latest software promo codes, software coupon codes, and tech software deals on Couponsbit to find valuable savings on the tools and services you use every day. With updated offers from leading software providers, it's never been easier to access premium technology while spending less.
          </p>
          
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop & Save Now →
            </button>
          </Link>
        </div>

      </aside>

    </div>
  </div>
</section>

      <Footer />

      <div className={cn("fixed top-6 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-4 transition-all duration-300 transform", showToast ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none")}>
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#22c55e]"><CheckCircle className="w-5 h-5" /></div>
        <div>
          <p className="text-black font-black text-sm">Code Copied!</p>
          <p className="text-[#056bfa] font-mono font-bold text-xs mt-0.5">{toastCode}</p>
        </div>
      </div>
    </div>
  );
}
