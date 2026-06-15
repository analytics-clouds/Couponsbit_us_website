"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users, BadgeCheck,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Smartphone, Code, Tag, ShoppingBag , Calendar, LayoutGrid
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
  { id: "lyca-mobile-coupon-code", name: "Lyca Mobile", logo: "/lyca-mobile-coupon-code.webp", coupons: 10, discount: "Up to 20% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics",        count: "850+", color: "text-[#4A90E2]", href: "/categories/electronics" },
  { icon: Plane,  name: "Travel",             count: "420+", color: "text-[#19798d]", href: "/categories/travel" },
  { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-[#8E44AD]", href: "/categories/entertainment" },
  { icon: Code,   name: "Software & Digital", count: "300+", color: "text-[#6B46C1]", href: "/categories/software" },
  { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-[#27AE60]", href: "/categories/mobile", active: true },
];

export default function MobileCouponsContent() {
  const [activeTab, setActiveTab] = useState("All (320)");
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
          <span className="text-gray-700 font-medium">Mobile & Telecom</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-3xl">Mobile & Telecom Coupons</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on SIM plans, data packs and international calling with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Smartphone, val: "320+", label: "Coupons" },
                        { icon: Store, val: "10+", label: "Top Stores" },
                        { icon: Users, val: "15K+", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#00A651]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-[45%] h-[200px] md:h-auto overflow-hidden">
                    <img src="/mobile-coupon-codes.webp" alt="Mobile & Telecom Coupons" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Mobile & Telecom</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} store{STORES.length !== 1 ? "s" : ""}</p>
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
                      <Link key={i} href={cat.href} className={cn("flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all", cat.active ? "bg-[#F0FFF4] text-[#00A651]" : "hover:bg-[#f5f5f5]")}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.active ? "text-[#00A651]" : cat.color)} />
                          <span className={cn("text-sm", cat.active ? "font-bold text-[#00A651]" : "text-gray-700 font-medium")}>{cat.name}</span>
                        </div>
                        <span className={cn("text-xs", cat.active ? "font-extrabold text-[#00A651]" : "text-black font-bold")}>{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#19798d] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Mobile Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every plan" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "15,000+ happy customers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#F0FFF4] rounded-full flex items-center justify-center text-[#00A651]"><badge.icon className="w-4 h-4" /></div>
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
            Mobile Phone Promo Codes, Cell Phone Plan Coupon Codes & Prepaid Phone Deals 2026
          </h2>
          <p className="text-lg font-bold text-[#19798d] mb-5">Staying connected has never been more important, but mobile services and devices can quickly become expensive. If you're searching for the latest mobile phone promo codes, you've come to the right place.</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Couponsbit, we help shoppers discover valuable savings on smartphones, mobile plans, prepaid services, accessories, and wireless solutions from leading mobile carriers and technology brands.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're upgrading to a new smartphone, switching carriers, activating a family plan, or looking for affordable wireless service, finding the right deal can help you save significantly. That's why Couponsbit brings together verified cell phone plan coupon codes, exclusive discounts, and the latest prepaid phone deals to help consumers get more value from their mobile purchases.
          </p>
        </div>

        {/* B — Discover the Best Mobile Phone Deals and Discounts */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Discover the Best Mobile Phone Deals and Discounts</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The mobile industry continues to evolve with faster networks, innovative devices, and flexible service plans. While consumers have more options than ever before, monthly service costs and device upgrades can add up over time. At Couponsbit, we help users find savings across a wide range of mobile categories.
          </p>
          
          <p className="text-gray-500 text-xs font-bold mb-3">Including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Smartphones", desc: "Save on the latest flagship devices and reliable mobile upgrades." },
              { title: "Prepaid phone plans", desc: "No-contract options built for monthly financial flexibility." },
              { title: "Unlimited data plans", desc: "Stream, browse, and connect without worrying about hard data caps." },
              { title: "Family mobile plans", desc: "Multi-line savings packages intended for shared household accounts." },
              { title: "International calling plans", desc: "Keep in touch across borders with discounted rates and roaming." },
              { title: "Mobile accessories", desc: "Cases, charging blocks, screen protectors, and power banks." },
              { title: "Wireless carriers", desc: "Promotions and setup discounts from premier network providers." },
              { title: "eSIM services", desc: "Digital connectivity options built for simple activation and travel." },
              { title: "5G mobile plans", desc: "Access high-speed mobile networks with updated coupon rates." },
              { title: "Mobile hotspots", desc: "Stay connected anywhere with portable internet hardware bundles." },
              { title: "SIM-only plans", desc: "Keep your current hardware and save purely on network data lines." },
              { title: "Device protection plans", desc: "Peace of mind hardware insurance and replacement warranties." },
              { title: "Mobile broadband services", desc: "Dedicated home or mobile travel data connectivity options." },
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
            Before activating a new plan or purchasing a device, it's always worth checking for available mobile phone promo codes that can help reduce your costs.
          </p>
        </div>

        {/* Popular Mobile Brands and Carriers */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Mobile Brands and Carriers</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">Consumers today can choose from a variety of carriers, service providers, and device manufacturers to fit their needs and budget.</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Lyca Mobile", "AT&T", "Verizon", "T-Mobile", "Mint Mobile", "Visible", "Cricket Wireless", "Boost Mobile", "Google Fi", "Metro by T-Mobile", "Samsung", "Apple", "Google Pixel", "Motorola", "OnePlus"
            ].map((brand) => (
              <span key={brand} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-xs rounded-lg hover:border-[#19798d]/40 transition-all duration-200 cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            Whether you're looking for premium wireless service, budget-friendly prepaid options, or the latest smartphone technology, there are often opportunities to save through special promotions and exclusive offers.
          </p>
        </div>

        {/* Why More Consumers Are Choosing Flexible Mobile Plans */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why More Consumers Are Choosing Flexible Mobile Plans</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">Today's mobile users want more flexibility, better value, and greater control over their wireless spending.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Laptop, title: "Affordable Service Options", desc: "Many carriers now offer competitive pricing with flexible monthly plans.", color: "bg-blue-50 text-blue-600" },
              { icon: Tag, title: "No Long-Term Commitments", desc: "Prepaid and contract-free options allow customers to switch plans without lengthy agreements.", color: "bg-teal-50 text-teal-600" },
              { icon: ShoppingBag, title: "Nationwide Coverage", desc: "Modern wireless networks provide extensive coverage across the United States.", color: "bg-purple-50 text-purple-600" },
              { icon: LayoutGrid, title: "International Connectivity", desc: "Many providers offer affordable international calling and roaming options.", color: "bg-violet-50 text-violet-600" },
              { icon: Calendar, title: "Access to Advanced Technology", desc: "Consumers can enjoy faster speeds and improved performance through expanding 5G networks.", color: "bg-green-50 text-green-600" },
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

        {/* How to Use Mobile Phone Promo Codes */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use Mobile Phone Promo Codes</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using mobile phone promo codes through Couponsbit is simple and can help reduce the cost of your next purchase.</p>
          
          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Browse Available Deals", desc: "Explore the latest mobile phone promo codes and wireless offers available on Couponsbit." },
              { step: "2", title: "Select a Promotion", desc: "Choose the deal that best matches your preferred carrier, device, or service plan." },
              { step: "3", title: "Copy the Coupon Code", desc: "Reveal and copy the available code if one is provided." },
              { step: "4", title: "Visit the Mobile Provider", desc: "Proceed to the carrier's website and select your device, plan, or service package." },
              { step: "5", title: "Apply the Discount", desc: "Enter the promo code during checkout or activation and verify that the savings have been applied." },
              { step: "6", title: "Complete Your Purchase", desc: "Finalize your order and start enjoying your new mobile service while saving money." },
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
              { q: "What are mobile phone promo codes?", a: "Mobile phone promo codes are promotional discounts that can help reduce the cost of smartphones, wireless plans, accessories, and mobile services." },
              { q: "Where can I find cell phone plan coupon codes?", a: "Couponsbit regularly features cell phone plan coupon codes from popular carriers and mobile service providers." },
              { q: "Are mobile phone promo codes free to use?", a: "Yes. Mobile phone promo codes are completely free and can provide savings on eligible purchases." },
              { q: "What types of prepaid phone deals can I find?", a: "You may find discounts on prepaid plans, unlimited data packages, international calling services, smartphones, and mobile accessories." },
              { q: "When is the best time to buy a new phone or mobile plan?", a: "Black Friday, Cyber Monday, holiday promotions, and new device launch periods often provide excellent savings opportunities." },
              { q: "Does Couponsbit verify mobile deals?", a: "We regularly review and update promotions to help users discover relevant savings opportunities." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <h3 className="text-black font-extrabold text-base mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Connected for Less */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Stay Connected for Less</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're upgrading your smartphone, activating a new wireless plan, switching carriers, or searching for affordable prepaid service, smart shopping can help you get more value from every purchase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse the latest mobile phone promo codes, cell phone plan coupon codes, and prepaid phone deals on Couponsbit and discover better ways to save on the devices and services that keep you connected every day.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Best Times to Find Prepaid Phone Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Best Times to Find Prepaid Phone Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Timing your purchase can help maximize your savings on mobile services and devices.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Black Friday", desc: "Many wireless providers offer some of their largest discounts during Black Friday promotions." },
              { title: "Cyber Monday", desc: "Online-exclusive deals frequently continue through Cyber Monday." },
              { title: "Back-to-School Season", desc: "Students and families can often find discounts on devices and mobile plans." },
              { title: "Holiday Promotions", desc: "Major holidays commonly bring special carrier offers, device discounts, and bonus incentives." },
              { title: "New Device Launches", desc: "Previous-generation smartphones often receive price reductions when new models are released." },
              { title: "Carrier Switching Promotions", desc: "Wireless providers frequently offer incentives to customers who transfer their service from another carrier." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#19798d] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Ways to Save on Mobile Services */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Ways to Save on Mobile Services</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Saving money on wireless service doesn't have to be difficult. Consider these strategies before purchasing.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Compare Multiple Providers",
              "Check Couponsbit Before Buying",
              "Consider Prepaid Plans",
              "Review Data Needs",
              "Look for Family Plans",
              "Watch for Limited-Time Promotions"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#19798d] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use Couponsbit for Mobile Savings? */}
        <div className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Use Couponsbit for Mobile Savings?</h3>
          <p className="text-white font-bold text-xs mb-4">
            At Couponsbit, we make it easier to find savings on wireless services and mobile technology.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Updated Offers:</strong> We regularly update promotions from leading mobile carriers and smartphone brands.</p>
            <p><strong>Wide Range of Providers:</strong> Find deals from major carriers, prepaid providers, and mobile technology companies.</p>
            <p><strong>Easy-to-Use Platform:</strong> Quickly browse, copy, and apply discounts before making a purchase.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and designed to help consumers save more.</p>
            <p><strong>Savings Across Mobile Categories:</strong> From smartphones and accessories to service plans and international calling options, you'll find a variety of opportunities to save.</p>
          </div>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#19798d] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Mobile Deals Now →
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
