"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Car, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Baby, BedDouble, Glasses, Shirt
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
  { id: "outfitr-discount-code", name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg", coupons: 11, discount: "Up to 62% OFF" },
  { id: "budget-discount-code", name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp", coupons: 8, discount: "Up To 35% OFF" },
  { id: "avis-discount-code", name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp", coupons: 4, discount: "Up To 20% OFF" },
  { id: "carcovers-discount-code", name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", coupons: 10, discount: "Save $30 OFF" },
  { id: "discounttire-discount-code", name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", coupons: 10, discount: "Up To $130 OFF" },
  { id: "valvoline-discount-code", name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp", coupons: 5, discount: "Up To 50% OFF" },
  { id: "harbor-freight-discount-code", name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp", coupons: 6, discount: "Up To 50% OFF" }
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
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive", active: true },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function AutomotiveCouponsContent() {
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
          <span className="text-gray-700 font-medium">Automotive</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Automotive Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on car parts, accessories, tires, car rentals and maintenance services with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Car, val: "54", label: "Coupons" },
                        { icon: Store, val: "7", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#056bfa]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780435/automotive_nzxvup.png"
                      alt="Automotive Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Automotive</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#fff7ed] flex items-center justify-center mb-4">
                      <Car className="w-6 h-6 text-[#056bfa]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Automotive</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new automotive stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Automotive Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fff7ed] rounded-full flex items-center justify-center text-[#056bfa]"><badge.icon className="w-4 h-4" /></div>
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
            Automotive Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Owning a car gives you freedom, but it also comes with a never-ending list of expenses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tires need replacing, oil needs changing, wipers wear out, accessories break, and every once in a while, your car decides it needs something you definitely were not planning to buy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The good news is that you don't always have to pay full price.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Automotive category on CouponsBit helps shoppers across the USA find automotive coupon codes, promo codes, discount codes, deals, and special offers before making a purchase. Whether you're shopping for replacement parts, car accessories, tires, tools, maintenance products, or products for your next road trip, checking for an offer before checkout can help you get better value from your automotive budget.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From everyday drivers to DIY car enthusiasts, there is something useful about knowing where to look for savings. And when automotive purchases can range from small accessories to expensive parts and equipment, even a modest discount can make a difference.
          </p>
        </div>

        {/* Find Automotive Coupon Codes Before You Buy */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Automotive Coupon Codes Before You Buy</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            When you need something for your car, you probably want it quickly. You search for the product, compare a few options, add one to your cart, and move on.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            But there is one step worth adding to that routine: check for a coupon.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit makes it easier to search for available automotive coupon codes and promotional offers before you complete your purchase. Depending on the retailer, you may find a percentage-off discount, a fixed-value promotion, free shipping, a seasonal deal, a bundle offer, or another type of saving.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You may also come across offers that do not require a code at all. Some retailers automatically apply a promotion when you meet the required conditions.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The important thing is to check what is available before paying.
          </p>
        </div>

        {/* Shop for a Wide Range of Automotive Products */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop for a Wide Range of Automotive Products</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Automotive shopping covers far more than replacement parts. Modern drivers buy everything from practical maintenance products to technology and accessories that make driving more convenient. The Automotive category can help you discover offers across products such as:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Auto parts & components", desc: "Auto parts and replacement components for repairs and upgrades." },
              { title: "Tires and wheels", desc: "Deals on new tires, wheels, and tire accessories." },
              { title: "Car batteries", desc: "Reliable power options and battery maintenance products." },
              { title: "Motor oil & fluids", desc: "Motor oil, automotive fluids, and essential lubricants." },
              { title: "Brake & maintenance", desc: "Brake products and routine maintenance supplies." },
              { title: "Wiper blades", desc: "All-weather wiper blades for optimal road visibility." },
              { title: "Car cleaning supplies", desc: "Car cleaning supplies and vehicle wash products." },
              { title: "Detailing products", desc: "Premium interior and exterior detailing products." },
              { title: "Floor mats & covers", desc: "Floor mats, seat covers, and interior protective accessories." },
              { title: "Car organizers", desc: "Car organizers and trunk storage solutions." },
              { title: "Phone holders & chargers", desc: "Phone holders, chargers, and electronic accessories." },
              { title: "Dash cameras & GPS", desc: "Dash cameras, GPS, and navigation accessories." },
              { title: "Emergency equipment", desc: "Safety kits, jump starters, and emergency equipment." },
              { title: "Garage tools & equipment", desc: "Garage tools, jacks, and automotive equipment." },
              { title: "Road-trip accessories", desc: "Travel essentials and road-trip accessories." },
              { title: "Exterior & interior gear", desc: "A wide selection of exterior and interior accessories." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0 group-hover:bg-[#056bfa] transition-colors duration-300">
                  <LayoutGrid className="w-5 h-5 text-[#056bfa] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            The right product will always depend on your vehicle and your specific needs, but once you've found what you're looking for, checking for a discount code or promo code can help you lower the final cost.
          </p>
        </div>

        {/* Save on Car Maintenance */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Car Maintenance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Routine maintenance is part of being a responsible vehicle owner, but that doesn't mean every maintenance purchase needs to hurt your wallet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many drivers regularly purchase products such as oil, filters, wiper blades, bulbs, cleaning products, fluids, batteries, and other supplies. If you handle basic maintenance yourself, shopping online can give you access to a wider selection of products and retailers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before placing an order, search for an applicable auto parts coupon code or store promotion.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            However, don't choose a product simply because it has the biggest discount. Automotive products need to be compatible with your specific vehicle. Check the make, model, year, specifications, dimensions, and other relevant details before purchasing.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            A great discount on the wrong part is still a bad deal.
          </p>
        </div>

        {/* Automotive Accessories for Everyday Driving */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Automotive Accessories for Everyday Driving</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your vehicle does not have to be brand new to feel more comfortable or convenient.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A simple phone mount can make navigation easier. A trunk organizer can prevent your groceries from rolling around. New floor mats can refresh your interior, while a car charger can keep your devices powered during long drives.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These products may seem small individually, but the costs can add up when you're upgrading several parts of your vehicle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before adding accessories to your cart, check CouponsBit for an automotive promo code or available retailer offer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're purchasing multiple products from the same store, also look for storewide promotions or minimum-spend offers. Depending on the terms, buying several items together may help you qualify for a better promotion.
          </p>
        </div>

        {/* Find Deals on Tires and Wheels */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Deals on Tires and Wheels</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tires are among the most important purchases you make for your vehicle, so price is naturally an important consideration.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Online tire retailers frequently run promotions around seasonal changes, holidays, and major shopping periods. Some offers may apply to selected tire brands or sizes, while others may include shipping, installation, or additional services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When shopping for tires, compare the complete cost rather than looking only at the advertised discount.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A tire discount code may help reduce the purchase price, but you should also consider shipping, installation, warranties, taxes, and other applicable charges.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Most importantly, make sure the tires you select are appropriate for your vehicle and driving conditions.
          </p>
        </div>

        {/* Get Ready for Your Next Road Trip */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Get Ready for Your Next Road Trip</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Americans love road trips, and the right accessories can make a long drive much easier.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on your trip, you may want organizers, phone chargers, coolers, cleaning supplies, emergency equipment, luggage accessories, roof-storage products, or other travel essentials.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Summer travel, holiday road trips, and long weekends can create increased demand for automotive products, so retailers may introduce special promotions around these periods.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you know a road trip is coming up, make a list of what you need before shopping. Then check CouponsBit for relevant car accessory coupons, promo codes, and deals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Planning ahead can help you avoid buying everything at the last minute.
          </p>
        </div>

        {/* Seasonal Automotive Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Automotive Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Automotive shopping changes throughout the year.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Winter can be a good time to look for products designed for cold-weather driving, emergency supplies, and winter accessories. Spring may bring cleaning and maintenance promotions, while summer can feature road-trip products and outdoor travel accessories.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fall can be useful for preparing your vehicle for changing weather conditions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Major U.S. shopping events also deserve attention. Memorial Day, Labor Day, Black Friday, Cyber Monday, and holiday sales can all bring automotive promotions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're planning a larger purchase, it can be worth watching for these shopping periods instead of buying immediately.
          </p>
        </div>

        {/* Automotive Deals for DIY Enthusiasts */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Automotive Deals for DIY Enthusiasts</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For people who enjoy working on their own vehicles, automotive shopping can go far beyond basic maintenance.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tools, diagnostic equipment, garage storage, jacks, lighting, cleaning products, replacement components, and specialty equipment can quickly turn a garage into a full workshop.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you're building or upgrading your collection, look for a garage tool discount code or retailer promotion before making a purchase.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Buying quality equipment is important, particularly when you're working on a vehicle. A lower price should never be the only reason to choose a particular tool or component.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Compare specifications, compatibility, warranty coverage, and retailer policies alongside the available discount.
          </p>
        </div>

        {/* How to Use an Automotive Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use an Automotive Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using an automotive coupon on most online stores is simple.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Retailer & Offer", desc: "Choose the retailer and offer that matches your shopping needs on CouponsBit." },
              { step: "2", title: "Step 2: Copy Code", desc: "If the promotion provides a code, copy it before visiting the retailer's website." },
              { step: "3", title: "Step 3: Browse & Add to Cart", desc: "Browse the store, select your products, and add them to your shopping cart." },
              { step: "4", title: "Step 4: Locate Checkout Field", desc: "When you reach checkout, look for a field labeled Promo Code, Coupon Code, Discount Code, Promotional Code, or something similar." },
              { step: "5", title: "Step 5: Apply Code", desc: "Enter the code and apply it." },
              { step: "6", title: "Step 6: Review & Save", desc: "Before completing your purchase, check your order summary to make sure the promotion has been applied correctly." },
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
            Some offers may have specific requirements. A code could apply only to selected products, require a minimum purchase, exclude certain brands, or be available only for a limited period. Always review the terms before completing your order.
          </p>
        </div>

        {/* How to Get Better Value From Automotive Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Get Better Value From Automotive Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finding a coupon is only one part of smart automotive shopping.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Start by identifying exactly what you need. Then compare products and retailers rather than immediately choosing the first option.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Look at the final order cost, including shipping and any additional charges. Check product compatibility and specifications. If you're purchasing a replacement component, make sure it is designed for your vehicle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once you've narrowed down your choice, check CouponsBit for an applicable coupon code, discount code, promo code, voucher, or special offer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This approach keeps your focus on value rather than simply chasing the biggest percentage discount.
          </p>
        </div>

        {/* Don't Forget About Shipping */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Don't Forget About Shipping</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shipping can make a surprising difference when you're shopping for automotive products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some parts and equipment are heavy or oversized, which means shipping costs may be significant. A retailer offering a smaller product discount alongside free shipping could potentially provide better overall value than a larger discount with expensive delivery charges.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before checking out, compare the final total.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you find a free shipping offer or automotive promo code, check whether it applies to your specific order and location.
          </p>
        </div>

        {/* Automotive Shopping for Every Driver */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Automotive Shopping for Every Driver</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every driver has the same automotive needs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A commuter may care most about maintenance products and everyday accessories. A road-trip enthusiast may look for travel equipment and storage solutions. A DIY mechanic may need tools and replacement parts, while someone buying a first car may be interested in basic accessories and emergency supplies.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That is why CouponsBit's Automotive category is designed around a broad range of shopping needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can explore different retailers and look for promotions that match your purchase rather than limiting yourself to one type of automotive product.
          </p>
        </div>

        {/* Why Check CouponsBit Before Checkout? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Check CouponsBit Before Checkout?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The easiest way to save is often to check before you spend.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may already know which product you want and which retailer you plan to use. Checking CouponsBit adds one simple step to your shopping process: see whether a better offer is available.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You might find a coupon code, a seasonal promotion, a discount on selected products, a shipping offer, or another deal.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Not every purchase will have a promotion, and not every code will apply to every product. But checking takes very little time.
          </p>
        </div>

        {/* Find Automotive Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Automotive Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're replacing a worn-out part, preparing your car for a road trip, upgrading your interior, shopping for tires, or building your home garage, CouponsBit can help you search for ways to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore the Automotive category for automotive coupon codes, discount codes, promo codes, vouchers, deals, and special offers from participating retailers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before you hit that checkout button, take a second look. The right deal could help you keep your car running smoothly without putting unnecessary pressure on your budget.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Best Times to Find Automotive Deals & Discounts */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Major U.S. shopping events bring great automotive promotions throughout the year.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Winter Driving", desc: "Cold-weather driving products, emergency supplies, and winter accessories." },
              { title: "Spring Cleaning", desc: "Cleaning and vehicle maintenance promotions as warmer weather arrives." },
              { title: "Summer Travel", desc: "Road-trip products, outdoor travel gear, and car cooling accessories." },
              { title: "Fall Prep", desc: "Useful supplies for preparing your vehicle for changing weather conditions." },
              { title: "Major Holidays", desc: "Memorial Day, Labor Day, Black Friday, Cyber Monday, and holiday sales." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Better Value From Automotive Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Automotive Shopping</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Maximize your value by keeping these simple steps in mind.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Identify Exactly What You Need",
              "Compare Products & Retailers",
              "Check Total Order & Shipping Costs",
              "Verify Vehicle Compatibility",
              "Search CouponsBit for Promo Codes",
              "Focus on Value Over Percentage Off"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use CouponsBit? */}
        <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Checkout?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Checking CouponsBit adds one simple step to your shopping process: see whether a better offer is available.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Coupon Codes:</strong> Easily search for available percentage or dollar-off discount codes.</p>
            <p><strong>Free Shipping Offers:</strong> Reduce total delivery costs on heavy automotive products.</p>
            <p><strong>Seasonal Promotions:</strong> Catch holiday sales and limited-time automotive discounts.</p>
            <p><strong>Broad Retailer Range:</strong> Discover deals for maintenance, tools, accessories, and tires.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Keep Your Car Running Smoothly:</strong> Before you hit that checkout button, take a second look to help keep your vehicle maintained without straining your budget.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Find Automotive Deals Now →
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
