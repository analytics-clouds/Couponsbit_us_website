"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  BedDouble, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Baby, Car, Glasses, Shirt
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
  { id: "zen-hotels-discount-code", name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", coupons: 8, discount: "$35 OFF Bookings" },
  { id: "agoda-discount-code", name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", coupons: 10, discount: "Up to 69% OFF" },
  { id: "expedia-discount-code", name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", coupons: 10, discount: "Up to 40% OFF" },
  { id: "radisson-discount-code", name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", coupons: 7, discount: "Up To 40% OFF" },
  { id: "vegas-discount-code", name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", coupons: 6, discount: "Up To 35% OFF" },
  { id: "itc-hotels-discount-code", name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", coupons: 8, discount: "Up To 50% OFF" },
  { id: "booking-promo-code", name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", coupons: 6, discount: "Up To 40% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics", count: "850+", color: "text-[#056bfa]", href: "/categories/electronics" },
  { icon: Plane, name: "Travel", count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv, name: "Entertainment", count: "210+", color: "text-[#056bfa]", href: "/categories/entertainment" },
  { icon: Code, name: "Software & Digital", count: "300+", color: "text-[#056bfa]", href: "/categories/software" },
  { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-[#056bfa]", href: "/categories/mobile" },
  { icon: HeartPulse, name: "Health & Wellness", count: "90+", color: "text-[#056bfa]", href: "/categories/health" },
  { icon: Home, name: "Home & Lifestyle", count: "120+", color: "text-[#056bfa]", href: "/categories/home" },
  { icon: UtensilsCrossed, name: "Food & Dining", count: "150+", color: "text-[#056bfa]", href: "/categories/food" },
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming" },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels", active: true },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function HotelsCouponsContent() {
  const [activeTab, setActiveTab] = useState("All");
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
          <span className="text-gray-700 font-medium">Hotels & Accommodation</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Hotels & Accommodation Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on hotel bookings, resorts, vacation rentals and accommodation with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: BedDouble, val: "55", label: "Coupons" },
                        { icon: Store, val: "7", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#0891B2]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%] md:h-auto overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780441/hotel_yff2bl.png"
                      alt="Hotels & Accommodation Coupons"
                      width={700}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Hotels & Accommodation</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#ecfeff] flex items-center justify-center mb-4">
                      <BedDouble className="w-6 h-6 text-[#0891B2]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Hotels & Accommodation</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new hotel & accommodation stores regularly — check back soon for verified coupon codes.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {STORES.map((store) => (
                      <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 flex flex-col justify-between group">
                        <div>
                          <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                            <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain" />
                          </div>
                          <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#056bfa] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                          <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                          <span className="text-xs font-black text-[#0344b0] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                        </div>
                        <div className="mt-4">
                          <Link href={`/stores/${store.id}`} aria-label={`View ${store.name} store`} className="block w-full">
                            <button className="w-full text-center py-2 border border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-lg text-xs font-black transition-all duration-300">View Store</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


            </div>

            <aside className="lg:w-[28%] space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <h3 className="text-black font-extrabold text-base mb-5">All Categories</h3>
                  <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((cat, i) => (
                      <Link key={i} href={cat.href} className="flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all hover:bg-[#f5f5f5]">
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className="text-sm text-gray-700 font-medium">{cat.name}</span>
                        </div>
                        <span className="text-xs text-black font-bold">{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#056bfa] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="w-full flex justify-center mb-6 mt-6">
      <a
        href="https://www.google.com/preferences/source?q=couponsbit.us"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        <img
          src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
          alt="Add as a preferred source on Google"
          className="w-full max-w-[260px] h-auto object-contain"
        />
      </a>
    </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Hotel Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#ecfeff] rounded-full flex items-center justify-center text-[#0891B2]"><badge.icon className="w-4 h-4" /></div>
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

        {/* Intro */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
            Hotels and Accommodations Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            A vacation can be unforgettable for all the right reasons or for one very wrong reason: the hotel bill.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Accommodation is often one of the biggest expenses when planning a trip, whether you're heading across the country for a family vacation, taking a quick weekend getaway, traveling for work, or finally booking that destination you've had saved on your travel list for months.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fortunately, you don't always have to accept the first hotel rate you find.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Hotels and Accommodations category on CouponsBit helps travelers across the USA discover hotel coupon codes, promo codes, discount offers, accommodation deals, and travel savings before making a booking.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From budget-friendly stays to luxury properties, resorts, boutique hotels, and extended-stay accommodations, checking for an available hotel promo code can be a simple way to make your travel budget work harder. And let's be honest, money saved on your hotel can be spent on the things you actually traveled for.
          </p>
        </div>

        {/* Find Hotel Coupon Codes Before Booking */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Hotel Coupon Codes Before Booking</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Booking accommodation usually involves comparing several properties, dates, locations, room types, and rates.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Once you've found a hotel that looks right, there is one more thing worth checking: whether an offer is available.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit gives travelers a place to discover hotel discount codes, coupon codes, promotional codes, vouchers, and special offers from participating travel and accommodation providers.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Depending on the retailer or booking platform, you may find percentage discounts, promotional rates, seasonal offers, booking incentives, or other savings opportunities.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Some promotions may require a code, while others may be automatically applied. Either way, checking before confirming your reservation can help you avoid missing a potential saving.
          </p>
        </div>

        {/* Find Deals for Different Types of Accommodation */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Deals for Different Types of Accommodation</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Not every traveler wants the same type of stay. A business traveler may prioritize location, while families need space, couples prefer boutique resorts, and solo travelers focus on budget. The Hotels and Accommodations category covers stays including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Hotels", desc: "Standard, mid-tier, and full-service brand properties." },
              { title: "Resorts", desc: "All-inclusive, oceanfront, and mountain vacation resorts." },
              { title: "Boutique hotels", desc: "Unique, stylish, and localized independent stays." },
              { title: "Budget accommodations", desc: "Affordable motels, inns, and cost-effective lodges." },
              { title: "Luxury properties", desc: "Five-star retreats, high-end suites, and VIP stays." },
              { title: "Family-friendly hotels", desc: "Spacious suites with pools and complimentary breakfast." },
              { title: "Business hotels", desc: "Properties with workspaces, high-speed Wi-Fi, and meeting facilities." },
              { title: "Airport hotels", desc: "Convenient transit stays with free shuttle services." },
              { title: "Extended-stay properties", desc: "Suite setups featuring kitchenettes for long-term visits." },
              { title: "Vacation accommodations", desc: "Rental homes, villas, cabins, and condos." },
              { title: "Beach resorts", desc: "Coastal properties offering private beach and water access." },
              { title: "City-center hotels", desc: "Downtown stays located near top urban attractions." },
              { title: "Road-trip accommodations", desc: "Highway-adjacent stops perfect for quick overnight rest." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0 group-hover:bg-[#EA580C] transition-colors duration-300">
                  <LayoutGrid className="w-5 h-5 text-[#EA580C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whatever your travel style, the goal is the same: find a stay that fits your plans and look for ways to reduce the cost.
          </p>
        </div>

        {/* Save on Weekend Getaways */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Weekend Getaways</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don't need to take a month-long vacation to get away.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Weekend trips have become a popular way to explore nearby cities, visit friends and family, attend events, or simply escape your usual routine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because shorter trips often have tighter budgets, finding a good accommodation deal can make a noticeable difference.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before booking your weekend stay, check CouponsBit for a hotel coupon code or promo code.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If your dates are flexible, compare multiple weekends as well. Rates can change depending on demand, events, holidays, and availability. A little flexibility can sometimes open up more affordable options.
          </p>
        </div>

        {/* Family Travel and Accommodation Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Family Travel and Accommodation Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Family vacations can become expensive quickly. You may need multiple rooms, larger accommodations, breakfast options, parking, and other services. When several people are traveling together, even a small savings on accommodation can add up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Look for family-friendly hotel promotions and accommodation discount codes when planning your trip.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            But don't judge a hotel only by its advertised room rate. Consider the complete cost of the stay. A slightly more expensive hotel that includes breakfast, parking, or other useful amenities may offer better value than a cheaper room with multiple additional charges.
          </p>
        </div>

        {/* Business Travel Savings */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Business Travel Savings</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hotels are also a regular expense for business travelers. If your work involves frequent travel, small savings can become meaningful over time. Depending on your company's travel policies, you may be able to combine available hotel promotions with loyalty programs or corporate booking benefits.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before booking a business stay, check whether a hotel promo code or special rate is available.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As always, make sure the booking meets your employer's travel requirements and reimbursement policies.
          </p>
        </div>

        {/* Luxury Hotels and Resorts */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Luxury Hotels and Resorts</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saving money doesn't mean you have to stay in the cheapest accommodation available. If you're celebrating an anniversary, taking a honeymoon, planning a milestone trip, or simply treating yourself, you may want something more luxurious.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Luxury hotels and resorts frequently introduce seasonal promotions, packages, and special booking offers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before paying for a premium stay, look for an applicable luxury hotel discount code or promotional offer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Compare what the promotion actually includes. A package that includes breakfast, resort credits, upgrades, or other benefits may offer more value than a simple room discount.
          </p>
        </div>

        {/* Hotel Deals for Road Trips */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Hotel Deals for Road Trips</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Road trips create a different type of accommodation needs. Instead of staying in one destination for an entire vacation, you may book several hotels along your route. That means accommodation costs can become a significant part of your overall travel budget.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before booking each stop, check for hotel deals and accommodation promo codes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It can also help to plan your route before booking. Knowing where you expect to stop gives you more time to compare properties and identify offers rather than booking the first available room late at night after hours on the road.
          </p>
        </div>

        {/* Seasonal Hotel Promotions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Hotel Promotions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hotel promotions can change throughout the year. Summer is a popular travel period for families and leisure travelers, while winter can bring different opportunities depending on the destination.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Spring and fall can be useful for travelers looking for potentially less crowded destinations, while holiday weekends often bring increased demand.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Major U.S. travel periods, including Memorial Day weekend, Independence Day, Labor Day weekend, Thanksgiving, Christmas, and New Year's can affect accommodation demand.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are traveling during a busy period, planning ahead becomes particularly important. Checking CouponsBit for available hotel coupons and discount codes can be another useful step in your booking process.
          </p>
        </div>

        {/* Major Shopping Events Can Mean Travel Savings Too */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Major Shopping Events Can Mean Travel Savings Too</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Black Friday and Cyber Monday aren't limited to electronics and fashion. Travel companies, hotels, and booking platforms may also participate in major promotional periods.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you're planning a future trip, these events can be worth watching. You may come across a hotel promo code, travel discount, accommodation deal, or limited-time offer that helps reduce the cost of a future stay.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Just remember to check the booking conditions carefully. Some promotional rates may have specific travel dates or advance-purchase requirements.
          </p>
        </div>

        {/* How to Use a Hotel Promo Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use a Hotel Promo Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using a hotel promo code is usually straightforward.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Select Your Offer", desc: "Select the accommodation provider and offer you want to use on CouponsBit." },
              { step: "2", title: "Step 2: Copy the Code", desc: "If the promotion includes a code, copy it and visit the provider's website." },
              { step: "3", title: "Step 3: Enter Travel Details", desc: "Enter your destination, travel dates, guests, and select your preferred room." },
              { step: "4", title: "Step 4: Enter Promo Code", desc: "At checkout, look for the Promo Code or Discount Code field and enter your code." },
              { step: "5", title: "Step 5: Apply & Review", desc: "Apply it and verify that the expected discount is reflected in your total before paying." },
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
          <p className="text-gray-500 text-xs leading-relaxed">
            Some offers may be limited to certain properties, room types, dates, destinations, or customer groups.
          </p>
        </div>

        {/* Pay Attention to the Total Booking Cost */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Pay Attention to the Total Booking Cost</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A discounted room rate doesn't necessarily mean you've found the cheapest overall booking. Hotels may charge taxes, resort fees, parking fees, service charges, or other additional costs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That doesn't automatically make the hotel a bad choice. It simply means you should compare the final amount rather than focusing on one advertised number.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A hotel discount code can still provide valuable savings, but the best deal is the one that offers the right combination of price, location, amenities, flexibility, and overall value.
          </p>
        </div>

        {/* Flexible Dates Can Help You Save */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Flexible Dates Can Help You Save</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your travel plans aren't fixed, experiment with different dates. Hotel rates can vary based on weekends, holidays, local events, conferences, school breaks, and seasonal demand.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Even shifting your trip by a day or two can sometimes change the available rates.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once you've identified dates that work, check CouponsBit for any relevant hotel coupon code or accommodation deal before booking.
          </p>
        </div>

        {/* Don't Forget About Cancellation Policies */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Don't Forget About Cancellation Policies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A cheap booking isn't much of a bargain if your plans change and you cannot recover the cost.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Always read the cancellation and refund conditions before confirming your reservation. Some promotional bookings may be non-refundable or may have stricter cancellation rules than standard rates.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Make sure you understand the conditions before using a discount or promotional offer.
          </p>
        </div>

        {/* Travel Smarter With CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Travel Smarter With CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Planning a trip involves plenty of decisions. Where will you go? When will you travel? Which hotel fits your plans? What room should you book?
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finding a way to save should not have to be complicated.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            CouponsBit helps make that part easier by bringing hotel and accommodation offers together in one category.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before you book, check for hotel coupon codes, discount codes, promo codes, vouchers, travel deals, and special offers. It takes only a few moments, and you may find an opportunity to reduce the cost of your stay.
          </p>
        </div>

        {/* Make Your Travel Budget Go Further */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Make Your Travel Budget Go Further</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saving on accommodation can give you more flexibility elsewhere in your trip. The money you don't spend on your hotel could go toward a memorable meal, an attraction, a rental car, souvenirs, activities, or simply staying within your original travel budget.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That doesn't mean you should always choose the cheapest available accommodation. Instead, aim for better value.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Compare hotels, look at the total booking cost, consider the amenities you actually need, read the terms, and check for a relevant promotion before paying.
          </p>
        </div>

        {/* Find Hotel Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Hotel Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're planning a family vacation, business trip, romantic getaway, road trip, weekend escape, or long-awaited holiday, CouponsBit can help you search for accommodation savings.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore the Hotels and Accommodations category to discover available hotel coupon codes, promo codes, discount codes, vouchers, deals, and special offers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your next trip should be remembered for the places you explored, the people you traveled with, and the experiences you had, not for how much you overpaid for your room. So before you confirm that reservation, check CouponsBit. Your future travel budget might thank you.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal Travel Periods */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Travel Event Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Plan ahead for big savings during these high-demand U.S. travel periods.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Summer Family Vacations", desc: "Resort packages, beach stays, and family suite discounts." },
              { title: "Holiday Long Weekends", desc: "Memorial Day, Labor Day, & 4th of July weekend hotel promos." },
              { title: "Black Friday Travel Sales", desc: "Unbeatable rate drops on future hotel stays and travel packages." },
              { title: "Off-Peak Shoulder Seasons", desc: "Spring & Fall deals with lower rates and fewer crowds." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Hotel Booking Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Booking Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Get maximum value on every hotel room with these quick tips.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Total Price Including Resort Fees",
              "Verify Breakfast & Parking Perks",
              "Review Cancellation & Refund Rules",
              "Compare Rates Across Flexible Dates",
              "Combine Promo Codes with Loyalty Points",
              "Look for Free Shuttle or Airport Perks"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Check CouponsBit CTA Card */}
        <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Booking?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Accommodation takes up a huge chunk of travel budgets—a quick code search saves real money.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Major Hotel Chains & OTAs:</strong> Promos for major travel platforms and hotel lines.</p>
            <p><strong>Extra Travel Perks:</strong> Discounts on upgrades, breakfast, and resort fees.</p>
            <p><strong>Road Trip & Getaway Savings:</strong> Easy savings for short weekend or multi-stop stays.</p>
            <p><strong>Verified Offers:</strong> Active, tested codes for USA and international travel booking.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>More Money For Experiences:</strong> Every dollar saved on accommodations gives you more to spend on dining, activities, and sight-seeing.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Find Hotel Deals Now →
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
