"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Cpu, Code,
  LayoutGrid, 
  Tag, 
  ShoppingBag, 
  Calendar, 
  ChevronDown, 
  ArrowRight, BadgeCheck
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
  { id: "rayneo-coupon-code", name: "Rayneo", logo: "/reyneo-coupon-code.webp", coupons: 6, discount: "Flat ₹2000 Off" },
  { id: "reolink-coupon-code", name: "Reolink", logo: "/Reolink-coupon-code.webp", coupons: 11, discount: "Up to 30% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics",        count: "850+",  color: "text-[#4A90E2]", href: "/categories/electronics", active: true },
  { icon: Plane,  name: "Travel",             count: "420+",  color: "text-[#19798d]", href: "/categories/travel" },
  { icon: Tv,     name: "Entertainment",      count: "210+",  color: "text-[#8E44AD]", href: "/categories/entertainment" },
  { icon: Code,   name: "Software & Digital", count: "300+",  color: "text-[#6B46C1]", href: "/categories/software" },
  { icon: Zap,    name: "Mobile & Telecom",   count: "320+",  color: "text-[#27AE60]", href: "/categories/mobile" },
];

export default function ElectronicsCouponsContent() {
  const [activeTab, setActiveTab] = useState("All (850)");
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
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#19798d] selection:text-white">
      <Navbar />

      <div className="bg-white border-b border-[#f0f0f0] mt-24">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#19798d] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Electronics</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-3xl">Electronics Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on AR glasses, security cameras, smart devices and gadgets with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Cpu, val: "850+", label: "Coupons" },
                        { icon: Store, val: "50+", label: "Top Stores" },
                        { icon: Users, val: "45K+", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#4A90E2]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-[45%] h-[200px] md:h-auto overflow-hidden">
                    <img
                      src="/electronics-coupon-codes.webp"
                      alt="Electronics Coupons"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Electronics</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {STORES.map((store) => (
                    <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#19798d] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                          <img src={store.logo} alt={store.name} className="max-h-12 max-w-[120px] w-auto object-contain" />
                        </div>
                        <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#19798d] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                        <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                        <span className="text-xs font-black text-[#19798d] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                      </div>
                      <div className="mt-4">
                        <Link href={`/stores/${store.id}`} className="block w-full">
                          <button className="w-full text-center py-2 border border-[#19798d] text-[#19798d] hover:bg-[#19798d] hover:text-white rounded-lg text-xs font-black transition-all duration-300">View Store</button>
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
                      <Link key={i} href={cat.href} className={cn("flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all", cat.active ? "bg-[#EBF8FF] text-[#4A90E2]" : "hover:bg-[#f5f5f5]")}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.active ? "text-[#4A90E2]" : cat.color)} />
                          <span className={cn("text-sm", cat.active ? "font-bold text-[#4A90E2]" : "text-gray-700 font-medium")}>{cat.name}</span>
                        </div>
                        <span className={cn("text-xs", cat.active ? "font-extrabold text-[#4A90E2]" : "text-black font-bold")}>{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#19798d] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Electronics Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "45,000+ happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#EBF8FF] rounded-full flex items-center justify-center text-[#4A90E2]"><badge.icon className="w-4 h-4" /></div>
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
            Electronics Coupon Codes, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#19798d] mb-5">Looking for the best electronics coupon codes before making your next purchase? You've come to the right place.</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Couponsbit, we help smart shoppers save on everything from laptops and smartphones to gaming accessories, smart home devices, headphones, cameras, and more.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Technology has become an essential part of everyday life, but upgrading your favorite gadgets doesn't have to strain your budget. To help you save more on every purchase, we curate the latest electronics coupon codes, electronics promo codes, and electronics deals & discounts from leading electronics brands and trusted retailers—all in one easy-to-access destination.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're shopping for a new computer, building a gaming setup, upgrading your home office, or investing in the latest smart technology, Couponsbit helps you find verified savings opportunities that make every purchase more affordable.
          </p>
        </div>

        {/* B — Find the Best Electronics Deals & Discounts */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find the Best Electronics Deals & Discounts</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The electronics industry evolves rapidly, with new products launching throughout the year. While cutting-edge technology often comes with premium pricing, savvy shoppers know that there are countless opportunities to save through exclusive promotions, seasonal sales, coupon codes, and limited-time offers. At Couponsbit, we regularly update our collection of electronics deals & discounts to help you spend less on the products you want most.
          </p>
          
          <p className="text-gray-500 text-xs font-bold mb-3">You may find savings on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Laptops and desktop computers", desc: "Save on high-performance machines, ultrabooks, and desktop setups." },
              { title: "Smartphones and tablets", desc: "Deals on the latest mobile devices and portable screens." },
              { title: "Gaming consoles and accessories", desc: "Discounts on hardware, controllers, and gaming peripherals." },
              { title: "Smartwatches and fitness trackers", desc: "Stay connected and track your health metrics for less." },
              { title: "Headphones and audio equipment", desc: "Premium sound gear, wireless earbuds, and speakers." },
              { title: "Smart home devices", desc: "Automate your living space with verified smart tech discounts." },
              { title: "TVs and home entertainment systems", desc: "Upgrade your living room screen and audio systems." },
              { title: "Cameras and photography gear", desc: "Capture moments with top-tier camera and lens offers." },
              { title: "Computer accessories", desc: "Keyboards, mice, and essentials to complete your workflow." },
              { title: "Networking equipment", desc: "High-speed routers, modems, and connectivity gear." },
              { title: "Storage devices and external drives", desc: "Expand your digital capacity with SSDs and backups." },
              { title: "Office electronics", desc: "Printers, shredders, and devices built for productivity." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#19798d]/30 transition-all duration-300 group flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#19798d] transition-colors duration-300">
                  <LayoutGrid className="w-5 h-5 text-[#19798d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you're purchasing gadgets, home electronics, or the latest tech products, exploring available electronics promo codes before completing your order can help you save more on your purchase.
          </p>
        </div>

        {/* Popular Electronics Brands */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Electronics Brands You Can Save On</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">Couponsbit features deals from many leading electronics manufacturers and retailers that U.S. shoppers trust.</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Lenovo", "Beelink", "RayNeo", "Apple", "Samsung", "Dell", "HP", "ASUS", "Acer", "Logitech",
              "Sony", "Bose", "JBL", "LG", "Microsoft", "Canon", "Nikon", "GoPro", "Reolink", "Anker"
            ].map((brand) => (
              <span key={brand} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-xs rounded-lg hover:border-[#19798d]/40 transition-all duration-200 cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            From productivity tools and home office equipment to gaming gear and entertainment devices, you can discover savings opportunities across a wide range of electronics categories.
          </p>
        </div>

        {/* Why Shop Electronics Online? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Shop Electronics Online?</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">Online electronics shopping offers consumers more flexibility, product variety, and pricing transparency than ever before.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Laptop, title: "Compare Products Easily", desc: "Online stores allow shoppers to compare specifications, features, and pricing across multiple brands before making a decision.", color: "bg-blue-50 text-blue-600" },
              { icon: Tag, title: "Access Exclusive Promotions", desc: "Many retailers offer online-only electronics coupon codes and special discounts that aren't available in physical stores.", color: "bg-teal-50 text-teal-600" },
              { icon: ShoppingBag, title: "Convenient Shopping Experience", desc: "Browse thousands of products, read customer reviews, and complete purchases from the comfort of your home.", color: "bg-purple-50 text-purple-600" },
              { icon: LayoutGrid, title: "Wider Product Selection", desc: "Online marketplaces often carry a broader range of models, configurations, and accessories than local retailers.", color: "bg-violet-50 text-violet-600" },
              { icon: Calendar, title: "Frequent Sales Events", desc: "Technology retailers regularly run promotions throughout the year, creating opportunities for significant savings.", color: "bg-green-50 text-green-600" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#19798d]/20 transition-all duration-300 group flex gap-4 items-start">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", item.color.split(" ")[0])}>
                  <item.icon className={cn("w-5 h-5", item.color.split(" ")[1])} />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1 group-hover:text-[#19798d] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C — How To Use */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use Electronics Coupon Codes</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using electronics coupon codes through Couponsbit is simple and only takes a few minutes.</p>
          
          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Browse Electronics Deals", desc: "Explore the latest electronics coupon codes, promo codes, and special offers available on Couponsbit." },
              { step: "2", title: "Step 2: Select an Offer", desc: "Select the coupon code or promotional offer that provides the best savings on the product you intend to buy." },
              { step: "3", title: "Step 3: Copy the Coupon Code", desc: "Click to reveal and copy the available code." },
              { step: "4", title: "Step 4: Visit the Retailer", desc: "Proceed to the retailer's website and add your desired electronics products to your shopping cart." },
              { step: "5", title: "Step 5: Apply the Promo Code", desc: "Paste the coupon code into the discount or promo code field during checkout." },
              { step: "6", title: "Step 6: Enjoy Your Savings", desc: "Complete your purchase and enjoy lower prices on your favorite tech products." },
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#19798d] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#19798d]/20 my-1" />}
                </div>
                <div className="pb-7">
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {[
              { q: "What are electronics coupon codes?", a: "Electronics coupon codes are promotional codes that can provide discounts, free shipping, bonus offers, or other savings on technology purchases." },
              { q: "Where can I find electronics promo codes?", a: "You can find the latest electronics promo codes right here on Couponsbit, where we regularly update offers from popular electronics brands and retailers." },
              { q: "Are electronics coupon codes free to use?", a: "Yes. Electronics coupon codes are completely free to use and can help reduce the overall cost of your purchase." },
              { q: "When is the best time to buy electronics?", a: "Major shopping events such as Black Friday, Cyber Monday, Memorial Day, Labor Day, and Back-to-School sales often feature some of the best electronics deals & discounts." },
              { q: "Can I use coupon codes on sale items?", a: "This depends on the retailer. Some stores allow coupon codes on discounted products, while others may have restrictions." },
              { q: "Does Couponsbit verify electronics deals?", a: "We regularly review and update available promotions to help users access relevant and active savings opportunities." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <h3 className="text-black font-extrabold text-base mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Saving on Electronics Today */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Start Saving on Electronics Today</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're shopping for the latest gadgets, upgrading your workspace, building a gaming setup, or investing in smart home technology, Couponsbit helps you find the best electronics coupon codes, electronics promo codes, and electronics deals & discounts in one place.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse the latest offers today and discover smarter ways to save on the technology products you use every day.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Best Times to Find Electronics Deals & Discounts */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Best Times to Find Electronics Deals & Discounts</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            If you're flexible with your purchase timing, you may be able to maximize your savings during major shopping events.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Black Friday", desc: "Black Friday is one of the biggest shopping events of the year for electronics, often featuring deep discounts across multiple product categories." },
              { title: "Cyber Monday", desc: "Many online retailers extend their promotions through Cyber Monday, making it an excellent time to shop for technology products." },
              { title: "Back-to-School Season", desc: "Students and professionals can often find discounts on laptops, tablets, printers, and accessories." },
              { title: "Memorial Day Sales", desc: "Retailers frequently offer electronics deals during Memorial Day promotions." },
              { title: "Labor Day Sales", desc: "Technology brands and retailers often feature limited-time discounts during Labor Day events." },
              { title: "Holiday Shopping Season", desc: "November and December are popular months for electronics promotions, gift bundles, and seasonal discounts." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#19798d] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Save More on Electronics Purchases */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">How to Save More on Electronics Purchases</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Looking to maximize your savings? Consider these proven shopping strategies.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Always Check for Coupon Codes",
              "Compare Multiple Retailers",
              "Consider Product Bundles",
              "Sign Up for Email Alerts",
              "Watch for Product Launch Cycles",
              "Take Advantage of Seasonal Sales"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#19798d] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use Couponsbit for Electronics Coupon Codes? */}
        <div className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Use Couponsbit for Electronics Coupon Codes?</h3>
          <p className="text-white font-bold text-xs mb-4">
            There are countless places online to search for discounts, but Couponsbit is designed to make saving simple, reliable, and hassle-free.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Verified Offers:</strong> Our team works to provide updated electronics coupon codes and promotional offers from trusted retailers.</p>
            <p><strong>Wide Range of Brands:</strong> We feature deals from leading technology companies and electronics retailers.</p>
            <p><strong>Free to Use:</strong> Couponsbit is completely free and accessible whenever you're ready to shop.</p>
            <p><strong>Updated Regularly:</strong> We continuously monitor promotions to help users find fresh savings opportunities.</p>
            <p><strong>Simple User Experience:</strong> Quickly browse, copy, and apply coupon codes without unnecessary steps.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Why Electronics Shoppers Trust Couponsbit:</strong> Technology purchases are often significant investments. Whether you're buying a high-performance laptop for work, a new smartphone, a gaming setup, or smart home devices, every dollar saved matters.
          </p>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            By providing access to verified electronics coupon codes and promotional offers, we help consumers shop smarter and keep more money in their wallets.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#19798d] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Tech Deals Now →
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
          <p className="text-[#19798d] font-mono font-bold text-xs mt-0.5">{toastCode}</p>
        </div>
      </div>
    </div>
  );
}
