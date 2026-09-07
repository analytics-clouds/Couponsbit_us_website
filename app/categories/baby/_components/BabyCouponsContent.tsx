"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Baby as BabyIcon, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Car, BedDouble, Glasses, Shirt
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
  { id: "lumibrick-discount-code", name: "Lumibrick", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp", coupons: 8, discount: "From $56.99" },
  { id: "old-navy-promo-code", name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", coupons: 6, discount: "Up To 50% OFF" }
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
  { icon: BabyIcon, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby", active: true },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function BabyCouponsContent() {
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
          <span className="text-gray-700 font-medium">Baby & Maternity</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Baby & Maternity Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on baby gear, maternity wear, nursery essentials and everyday parenting products with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: BabyIcon, val: "14", label: "Coupons" },
                        { icon: Store, val: "2", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#EC4899]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780441/maternity_dvzwsd.png"
                      alt="Baby & Maternity Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Baby & Maternity</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-4">
                      <BabyIcon className="w-6 h-6 text-[#EC4899]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Baby & Maternity</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new baby & maternity stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Baby & Maternity Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fdf2f8] rounded-full flex items-center justify-center text-[#EC4899]"><badge.icon className="w-4 h-4" /></div>
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
            Baby and Maternity Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Preparing for a baby comes with excitement, anticipation, and a surprisingly long shopping list.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From maternity clothing and nursery furniture to diapers, feeding supplies, baby clothes, toys, strollers, car seats, and everyday essentials, new and expecting parents have plenty to buy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And because many of these products are necessities rather than occasional purchases, finding ways to save can make a real difference.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Baby and Maternity category on CouponsBit helps shoppers across the USA discover coupon codes, promo codes, discounts, offers, and deals from baby and maternity retailers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are preparing for your first baby, shopping for a growing family, or buying a thoughtful gift for new parents, checking for a baby coupon code before purchasing can help you make your budget go further.
          </p>
        </div>

        {/* Find Baby and Maternity Coupon Codes */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Baby and Maternity Coupon Codes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Baby shopping can quickly become expensive because there are so many products to consider.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit helps simplify the savings side of shopping by bringing promotional opportunities together in one category.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Depending on the retailer, you may find offers on clothing, nursery products, feeding accessories, diapers, toys, maternity products, and more.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Offers can appear as a discount code, coupon code, promo code, voucher, sale, bundle, or automatic promotion.
          </p>
        </div>

        {/* Shop for Baby Essentials */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop for Baby Essentials</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Every family has different needs, but certain products appear on many baby shopping lists. You may find savings on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Baby clothing", desc: "Everyday onesies, sleepwear, and adorable outfits." },
              { title: "Diapers and wipes", desc: "Recurring savings on diapering supplies and wet wipes." },
              { title: "Feeding supplies", desc: "Nursing pillows, high chairs, and mealtime accessories." },
              { title: "Bottles", desc: "Baby bottles, warmers, sterilizers, and accessories." },
              { title: "Baby blankets", desc: "Soft swaddles, receiving blankets, and quilts." },
              { title: "Nursery furniture", desc: "Cribs, dressers, changing tables, and gliders." },
              { title: "Baby monitors", desc: "Video, audio, and smart nursery monitors." },
              { title: "Strollers", desc: "Full-size, lightweight, jogger, and travel strollers." },
              { title: "Car seats", desc: "Infant car seats, convertible models, and boosters." },
              { title: "Baby carriers", desc: "Ergonomic wraps, slings, and structured carriers." },
              { title: "Toys", desc: "Developmental toys, rattles, activity gyms, and teethers." },
              { title: "Bath products", desc: "Baby tubs, tear-free washes, towels, and bath toys." },
              { title: "Baby bedding", desc: "Crib sheets, mattress protectors, and wearable blankets." },
              { title: "Maternity clothing", desc: "Bump-friendly dresses, tops, leggings, and denim." },
              { title: "Nursing products", desc: "Breast pumps, nursing bras, pads, and storage bags." },
              { title: "Postpartum essentials", desc: "Recovery gear, comfortable loungewear, and care supplies." },
              { title: "Baby gifts", desc: "Thoughtful gift sets for baby showers and newborns." },
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
            Because many of these products are purchased repeatedly, even modest discounts can become valuable over time.
          </p>
        </div>

        {/* Save on Maternity Products */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Maternity Products</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pregnancy can bring changing clothing needs, comfort requirements, and new shopping priorities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Maternity clothing retailers often offer promotions on dresses, tops, leggings, jeans, activewear, sleepwear, and other essentials.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you are preparing a maternity wardrobe, look for an applicable maternity coupon code before checking out.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can also watch for seasonal promotions and clearance events when shopping for clothing you may only need for a limited period.
          </p>
        </div>

        {/* Nursery Shopping on a Budget */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Nursery Shopping on a Budget</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Creating a nursery is exciting, but furniture and accessories can become one of the larger parts of a baby-preparation budget.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cribs, dressers, changing tables, storage, bedding, lighting, and décor all add up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before making larger nursery purchases, check CouponsBit for a relevant nursery furniture discount code or retailer promotion.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            When shopping for baby products, always prioritize safety, suitability, and current product information over price alone.
          </p>
        </div>

        {/* Everyday Baby Purchases */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Everyday Baby Purchases</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some baby products are purchased once. Others need to be replaced or replenished regularly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Diapers, wipes, feeding products, clothing, and hygiene essentials can become recurring expenses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That makes promotional offers particularly useful.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a retailer offers a coupon for products you already planned to purchase, using it can help lower your recurring shopping costs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Always review product details and offer restrictions before ordering.
          </p>
        </div>

        {/* Baby Gifts and Registries */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Baby Gifts and Registries</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shopping for a baby does not always mean preparing for your own child.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Friends and family often shop for baby showers, birthdays, newborn arrivals, and other celebrations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A baby gift coupon code can help you save when purchasing clothing, toys, nursery accessories, or practical gifts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are building a registry or shopping from one, compare the retailer's available promotions and any applicable registry benefits.
          </p>
        </div>

        {/* Seasonal Baby Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Baby Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Baby retailers run promotions throughout the year.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Back-to-school season may bring children's clothing offers, while holidays can bring promotions on toys and gifts. Black Friday and Cyber Monday can also be useful periods for shopping for larger baby products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Parents may also find seasonal clearance events when retailers make room for new collections.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Checking CouponsBit during these periods can help you spot relevant offers.
          </p>
        </div>

        {/* How to Use a Baby Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use a Baby Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Redeeming a discount on baby and maternity essentials is quick and simple.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Your Offer", desc: "Choose a retailer and offer from the CouponsBit Baby and Maternity category." },
              { step: "2", title: "Step 2: Copy the Code", desc: "If a code is available, copy it and visit the merchant's website." },
              { step: "3", title: "Step 3: Add Items to Cart", desc: "Add your eligible products to the shopping cart and proceed to checkout." },
              { step: "4", title: "Step 4: Enter Promo Code", desc: "Enter the coupon or promotional code into the appropriate field and apply it." },
              { step: "5", title: "Step 5: Confirm Your Discount", desc: "Before completing the order, confirm that the discount has been reflected." },
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
            Some offers may require a minimum order, apply only to first-time customers, or exclude certain products.
          </p>
        </div>

        {/* Make Baby Shopping More Budget-Friendly */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Make Baby Shopping More Budget-Friendly</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Baby shopping can feel overwhelming because there are so many recommendations, products, and opinions competing for your attention.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You do not need to buy everything at once.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Create a list based on your actual needs, compare products, and check for available promotions before purchasing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit can be one useful part of that process by helping you discover baby coupons, maternity promo codes, discount codes, and online deals.
          </p>
        </div>

        {/* Discover Baby and Maternity Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Discover Baby and Maternity Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are expecting, parenting a newborn, shopping for a toddler, or buying a gift for new parents, CouponsBit helps you look for savings before you buy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore the Baby and Maternity category, compare available coupon codes, promotional offers, discounts, and deals, and choose the option that fits your purchase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because preparing for a little one is already a big enough adventure. Your shopping budget does not need to make it harder.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal & Holiday Baby Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Retailers run promotions across these major shopping periods throughout the year.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Back-to-School", desc: "Great promotions on toddler clothing, footwear, and day-care gear." },
              { title: "Holiday Sales", desc: "Special offers on toys, books, stocking stuffers, and baby gifts." },
              { title: "Black Friday & Cyber Monday", desc: "Deep discounts on strollers, car seats, nursery gear, and monitors." },
              { title: "Seasonal Clearance", desc: "End-of-season sales on maternity wear and seasonal baby apparel." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Baby Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Parent Shopping Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Keep your family budget in check with these easy practices.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Prioritize Actual Needs First",
              "Compare Prices Across Retailers",
              "Watch for Recurring Item Coupons",
              "Check Registry Benefit Programs",
              "Review Minimum Order Requirements",
              "Check CouponsBit Before Checkout"
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
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Checkout?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Adding one quick check before buying helps stretch your family shopping budget further.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Baby & Maternity Codes:</strong> Find active promo codes for leading baby brands.</p>
            <p><strong>Recurring Essentials:</strong> Lower repetitive costs on diapers, wipes, and formulas.</p>
            <p><strong>Nursery & Gear Deals:</strong> Save on major investments like strollers, cribs, and seats.</p>
            <p><strong>Registry Perks:</strong> Pair coupons with baby registry rewards and discounts.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Parenting Made Affordable:</strong> Preparing for a little one is a major milestone—let us help you stretch your budget so you can focus on what matters most.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Baby Deals Now →
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
