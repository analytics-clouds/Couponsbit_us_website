"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Home as HomeIcon, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, UtensilsCrossed, Gamepad2, Baby, Car, BedDouble, Glasses, Shirt
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
  { id: "reolink-discount-code", name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", coupons: 8, discount: "Up to 50% OFF" },
  { id: "cariloha-discount-code", name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", coupons: 11, discount: "Up to 50% OFF" },
  { id: "deer-valley-discount-code", name: "DeerValley", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg", coupons: 9, discount: "Up to 60% OFF" },
  { id: "philips-discount-code", name: "Philips", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp", coupons: 10, discount: "Save Up To £120" },
  { id: "bluetti-discount-code", name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", coupons: 10, discount: "Save Up To $200" },
  { id: "dreame-discount-code", name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", coupons: 10, discount: "Up To 45% OFF" },
  { id: "amazon-discount-code", name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", coupons: 11, discount: "Up To 52% OFF" },
  { id: "chewy-promo-code", name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", coupons: 9, discount: "Up To 50% OFF" },
  { id: "wish-discount-code", name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", coupons: 10, discount: "Up To 60% OFF" },
  { id: "dore-and-rose-promo-code", name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", coupons: 10, discount: "Up To 65% OFF" },
  { id: "macys-promo-code", name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", coupons: 8, discount: "Up To 75% OFF" },
  { id: "hm-promo-code", name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", coupons: 18, discount: "Up To 77% OFF" },
  { id: "walmart-promo-code", name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", coupons: 6, discount: "Up To 65% OFF" },
  { id: "target-discount-code", name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", coupons: 8, discount: "Save Up To $100" },
  { id: "wayfair-discount-code", name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", coupons: 9, discount: "Up To 80% OFF" },
  { id: "etsy-coupon-code", name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", coupons: 8, discount: "Flat 75% OFF" },
  { id: "home-depot-discount-code", name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", coupons: 12, discount: "Up To $350 Extra" },
  { id: "harbor-freight-discount-code", name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "jcpenney-discount-code", name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", coupons: 6, discount: "Up To 50% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics", count: "850+", color: "text-[#056bfa]", href: "/categories/electronics" },
  { icon: Plane, name: "Travel", count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv, name: "Entertainment", count: "210+", color: "text-[#056bfa]", href: "/categories/entertainment" },
  { icon: Code, name: "Software & Digital", count: "300+", color: "text-[#056bfa]", href: "/categories/software" },
  { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-[#056bfa]", href: "/categories/mobile" },
  { icon: HeartPulse, name: "Health & Wellness", count: "90+", color: "text-[#056bfa]", href: "/categories/health" },
  { icon: HomeIcon, name: "Home & Lifestyle", count: "120+", color: "text-[#056bfa]", href: "/categories/home", active: true },
  { icon: UtensilsCrossed, name: "Food & Dining", count: "150+", color: "text-[#056bfa]", href: "/categories/food" },
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming" },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function HomeLifestyleCouponsContent() {
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
          <span className="text-gray-700 font-medium">Home & Lifestyle</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Home & Lifestyle Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on furniture, home decor, kitchenware and everyday lifestyle essentials with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: HomeIcon, val: "179", label: "Coupons" },
                        { icon: Store, val: "19", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#D97706]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780440/home_dxotow.png"
                      alt="Home & Lifestyle Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Home & Lifestyle</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#fffbeb] flex items-center justify-center mb-4">
                      <HomeIcon className="w-6 h-6 text-[#D97706]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Home & Lifestyle</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new home & lifestyle stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Home & Lifestyle Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fffbeb] rounded-full flex items-center justify-center text-[#D97706]"><badge.icon className="w-4 h-4" /></div>
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
            Home and Lifestyle Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Your home is where everyday life happens, so naturally, you want it to look good, feel comfortable, and work for the way you live.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From furniture and décor to kitchen essentials, cleaning products, bedding, organization solutions, and lifestyle accessories, online stores make it easier than ever to upgrade your space.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The only problem? Those upgrades can add up quickly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That is why smart shoppers look for savings before they click “Place Order.” The Home and Lifestyle category on CouponsBit helps you discover coupon codes, promo codes, discounts, deals, and special offers from online retailers serving shoppers across the USA.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are furnishing a new apartment, refreshing your living room, organizing your kitchen, or simply looking for something that makes everyday life a little easier, checking for a home and lifestyle coupon code can help you shop more strategically.
          </p>
        </div>

        {/* Discover Home and Lifestyle Coupon Codes */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Discover Home and Lifestyle Coupon Codes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Home shopping is rarely limited to one type of product. One day you might be looking for a new lamp, and the next you might need storage containers, cookware, furniture, or bedding.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit brings these shopping opportunities together in one category, making it easier to find relevant savings.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You can explore retailers offering home goods, furniture, décor, household essentials, lifestyle products, and more. Depending on the store and promotion, you may find a discount code, percentage-off deal, free-shipping offer, seasonal promotion, or other incentive.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Checking before you purchase takes little time and can make a noticeable difference, especially when you are making a larger home-related purchase.
          </p>
        </div>

        {/* Shop for Everything From Décor to Essentials */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop for Everything From Décor to Essentials</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Home and lifestyle shopping covers a huge range of products. You may find savings opportunities on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Furniture and home furnishings", desc: "Sofas, dining sets, dressers, and accent furniture." },
              { title: "Living room décor", desc: "Wall art, mirrors, vases, curtains, and throw pillows." },
              { title: "Bedroom essentials", desc: "Bed frames, nightstands, and cozy room accents." },
              { title: "Bedding and mattresses", desc: "Sheets, comforters, pillows, and mattress toppers." },
              { title: "Kitchenware and cookware", desc: "Pots, pans, bakeware, and small kitchen appliances." },
              { title: "Dining accessories", desc: "Dinnerware, glassware, flatware, and table linens." },
              { title: "Home organization products", desc: "Closet systems, bins, and entryway organizers." },
              { title: "Storage solutions", desc: "Pantry bins, under-bed storage, and shelving units." },
              { title: "Lighting", desc: "Floor lamps, table lamps, chandeliers, and outdoor lights." },
              { title: "Rugs and carpets", desc: "Area rugs, runners, and durable outdoor mats." },
              { title: "Bathroom accessories", desc: "Towel sets, shower curtains, bath mats, and vanity storage." },
              { title: "Cleaning supplies", desc: "Eco-friendly cleaners, vacuums, and laundry essentials." },
              { title: "Outdoor living products", desc: "Patio sets, outdoor heating, grills, and garden décor." },
              { title: "Home office essentials", desc: "Ergonomic chairs, desks, lighting, and cable storage." },
              { title: "Lifestyle accessories", desc: "Aromatherapy, candles, tech gear, and personal care." },
              { title: "Seasonal home décor", desc: "Festive decorations for holidays and seasonal shifts." },
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
            Whether you are decorating from scratch or making small improvements, a good home decor coupon code or storewide promotion can make your budget stretch further.
          </p>
        </div>

        {/* Make Your Home Feel More Like You */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Make Your Home Feel More Like You</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A home does not need a complete makeover to feel different. Sometimes a new rug, lighting fixture, bedding set, wall decoration, or piece of furniture can completely change a room.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Online retailers frequently run promotions around new collections, seasonal changes, holidays, and major U.S. shopping events.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That makes it worthwhile to check CouponsBit before purchasing home products.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Instead of buying immediately, take a moment to see whether the retailer has an available promo code or discount offer. If you are already planning a purchase, there is little downside to checking.
          </p>
        </div>

        {/* Save on Furniture and Bigger Purchases */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Furniture and Bigger Purchases</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Furniture purchases require a little more planning because the total order value can be significantly higher than an everyday purchase.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before buying a sofa, dining table, bed, desk, dresser, or other major item, look for available promotional offers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A percentage-based furniture discount code can sometimes make a meaningful difference, while free-shipping promotions may be particularly useful for bulky products.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Always review the terms carefully. Some furniture promotions may apply only to selected products, exclude certain brands, or require a minimum order.
          </p>
        </div>

        {/* Seasonal Home Shopping */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Home Shopping</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Home retailers are constantly changing their promotional calendars.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Spring can bring cleaning and organization campaigns. Summer may feature outdoor furniture and patio promotions. Fall often brings seasonal décor and home-refresh offers, while the holiday season can introduce promotions on gifts, decorations, kitchen products, and furnishings.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Major U.S. shopping events such as Memorial Day, Labor Day, Black Friday, Cyber Monday, and Christmas can also create opportunities for home shoppers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit makes it easier to keep these savings opportunities on your radar.
          </p>
        </div>

        {/* Home Office and Everyday Lifestyle Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Home Office and Everyday Lifestyle Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The modern home often doubles as a workspace, entertainment area, gym, and personal retreat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That means Home and Lifestyle shopping can include office furniture, desk accessories, lighting, organization products, electronics accessories, décor, and comfort-focused products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you are upgrading your home office, look for an applicable office furniture promo code or retailer-wide offer. If you are organizing your home, compare discounts across storage and organization stores before buying.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Small improvements can have a surprisingly big effect on how your space works.
          </p>
        </div>

        {/* How to Apply a Home Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Apply a Home Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using a coupon is generally simple.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Select Your Offer", desc: "Select the retailer and offer you want to use on CouponsBit." },
              { step: "2", title: "Step 2: Copy the Code", desc: "If the promotion includes a code, copy it before visiting the store's website." },
              { step: "3", title: "Step 3: Add Items & Proceed", desc: "Choose your products, add them to your cart, and proceed to checkout." },
              { step: "4", title: "Step 4: Enter Promo Code", desc: "Look for the promotional code field and enter your code." },
              { step: "5", title: "Step 5: Apply & Confirm", desc: "Apply it and confirm that the discount has been reflected before completing payment." },
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
            Some promotions may not require a code and may activate automatically. Always check the offer conditions, expiration date, eligible products, and other restrictions.
          </p>
        </div>

        {/* Why Smart Home Shoppers Use Coupons */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Smart Home Shoppers Use Coupons</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Home purchases can range from small everyday items to major investments. Even modest savings can become meaningful when you shop frequently.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            CouponsBit helps you make checking for discounts part of your normal shopping routine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead of assuming the listed price is the final price, look for a coupon code, voucher code, promo offer, or sale that could reduce your total.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You do not need to become an extreme couponer. You simply need to develop the habit of checking before you buy.
          </p>
        </div>

        {/* Refresh Your Space for Less */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Refresh Your Space for Less</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your home should reflect your personality and make everyday life easier. Whether you are searching for a new piece of furniture, refreshing your bedroom, organizing your kitchen, or adding a few decorative touches, CouponsBit can help you discover ways to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore Home and Lifestyle offers, compare available discount codes and coupons, and find an offer that suits your purchase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A better home does not always require a bigger budget. Sometimes, it just requires smarter shopping.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal Home Shopping */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Home retailers feature huge promotional campaigns during these key annual periods.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Spring Refresh", desc: "Cleaning essentials, storage systems, and closet organizers." },
              { title: "Memorial & Labor Day", desc: "Major sales on furniture, mattresses, outdoor patio sets, and grills." },
              { title: "Fall & Holiday Season", desc: "Festive décor, entertaining items, kitchenware, and gift offers." },
              { title: "Black Friday & Cyber Monday", desc: "Storewide price drops on high-end appliances, bedding, and furniture." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Home Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Home Shopping Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Maximize your home improvement budget with these simple habits.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Coupons Before Checkout",
              "Look for Free Freight Shipping",
              "Measure Room & Furniture First",
              "Compare Storewide Percent-Off Deals",
              "Watch for Minimum Purchase Rules",
              "Check Clearance & Open-Box Sections"
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
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Buying?</h3>
          <p className="text-white font-bold text-xs mb-4">
            A quick check before buying large home items or daily goods can save real dollars.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Big Furniture Discounts:</strong> Save significant amounts on sofas, desks, and mattresses.</p>
            <p><strong>Everyday Essentials:</strong> Reduce costs on cleaning supplies, kitchenware, and storage.</p>

            <p><strong>Free Shipping Offers:</strong> Avoid high freight fees on oversized and bulky home items.</p>
            <p><strong>Verified Retailers:</strong> Get active, reliable codes for popular USA home goods brands.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Upgrade Your Space Effortlessly:</strong> Creating a home you love shouldn't mean overspending. Check CouponsBit before every purchase to make your budget go further.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Home Deals Now →
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
