"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  UtensilsCrossed, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, Gamepad2, Baby, Car, BedDouble, Glasses, Shirt
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
  { id: "factor75-discount-code", name: "Factor75", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp", coupons: 2, discount: "Up to $130 OFF" },
  { id: "doordash-promo-code", name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", coupons: 9, discount: "Up To 30% OFF" },
  { id: "lovejurky-discount-code", name: "LovesJerkyCo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp", coupons: 7, discount: "From $10" },
  { id: "uber-eats-promo-code", name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", coupons: 10, discount: "Up To 60% OFF" },
  { id: "subway-discount-code", name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", coupons: 8, discount: "Up To 20% OFF" },
  { id: "little-caesars-promo-code", name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp", coupons: 6, discount: "Up To 20% OFF" },
  { id: "burger-king-promo-code", name: "Burger King", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "kroger-discount-code", name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", coupons: 6, discount: "Up To 50% OFF" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics", count: "850+", color: "text-[#056bfa]", href: "/categories/electronics" },
  { icon: Plane, name: "Travel", count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv, name: "Entertainment", count: "210+", color: "text-[#056bfa]", href: "/categories/entertainment" },
  { icon: Code, name: "Software & Digital", count: "300+", color: "text-[#056bfa]", href: "/categories/software" },
  { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-[#056bfa]", href: "/categories/mobile" },
  { icon: HeartPulse, name: "Health & Wellness", count: "90+", color: "text-[#056bfa]", href: "/categories/health" },
  { icon: Home, name: "Home & Lifestyle", count: "120+", color: "text-[#056bfa]", href: "/categories/home" },
  { icon: UtensilsCrossed, name: "Food & Dining", count: "150+", color: "text-[#056bfa]", href: "/categories/food", active: true },
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming" },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function FoodCouponsContent() {
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
          <span className="text-gray-700 font-medium">Food & Dining</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Food & Dining Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on restaurants, food delivery, meal kits and grocery essentials with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: UtensilsCrossed, val: "54", label: "Coupons" },
                        { icon: Store, val: "8", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#DC2626]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780441/food_ku2xz5.png"
                      alt="Food & Dining Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Food & Dining</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#fef2f2] flex items-center justify-center mb-4">
                      <UtensilsCrossed className="w-6 h-6 text-[#DC2626]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Food & Dining</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new food & dining stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Food & Dining Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fef2f2] rounded-full flex items-center justify-center text-[#DC2626]"><badge.icon className="w-4 h-4" /></div>
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
            Food and Dining Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Good food has a way of bringing people together.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether it is a quick lunch between meetings, dinner with family, takeout on a busy evening, or a weekend meal with friends, food is one of those everyday expenses that can quietly add up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The good news? You do not always have to pay full price.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Food and Dining category on CouponsBit helps shoppers across the USA discover restaurant coupons, food delivery promotions, dining deals, promo codes, discount codes, and other offers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are ordering online, picking up dinner, shopping for groceries, or looking for a dining experience, checking for a deal before placing an order can help you save.
          </p>
        </div>

        {/* Find Food and Dining Coupon Codes */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Food and Dining Coupon Codes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Food-related savings come in many forms. You might find a percentage discount, a promotional code for your first order, a free-delivery offer, a meal deal, a limited-time promotion, or a restaurant-specific coupon.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit brings these opportunities together so you can check available savings before ordering.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you frequently use food delivery services or order from restaurants online, even a small discount can add up over several purchases.
          </p>
        </div>

        {/* What Can You Find in This Category? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">What Can You Find in This Category?</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Food and Dining is a broad category because Americans shop and spend on food in many different ways. Depending on available retailers and promotions, you may find deals on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Restaurants", desc: "Discounts and specials at favorite local and national dining spots." },
              { title: "Food delivery services", desc: "Promotions on doorstep food delivery platforms." },
              { title: "Takeout", desc: "Savings on quick pickup and casual takeout orders." },
              { title: "Grocery shopping", desc: "Discounts on supermarket items and online grocery orders." },
              { title: "Meal kits", desc: "Introductory offers and savings on meal subscription boxes." },
              { title: "Snacks and beverages", desc: "Deals on specialty snacks, soft drinks, and beverages." },
              { title: "Specialty foods", desc: "Savings on gourmet items, artisan foods, and imported goods." },
              { title: "Bakery products", desc: "Discounts on fresh bread, pastries, cakes, and desserts." },
              { title: "Restaurant gift cards", desc: "Promotions and bonus deals on dining gift cards." },
              { title: "Kitchen and dining products", desc: "Deals on essential kitchenware and dining accessories." },
              { title: "Online food stores", desc: "Savings when purchasing food staples directly online." },
              { title: "Catering services", desc: "Discounts on party platters and event food catering." },
              { title: "Dining experiences", desc: "Special offers on tasting menus and culinary experiences." },
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
            A food delivery promo code can be especially useful when ordering online, while grocery promotions can help reduce the cost of your regular shopping list.
          </p>
        </div>

        {/* Save on Food Delivery */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Food Delivery</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Food delivery has become part of everyday life for many households. It is convenient, but convenience can sometimes come with additional costs such as delivery fees, service charges, and higher menu prices.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That makes promotions worth checking.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before placing your order, look for an available food delivery coupon code or promotional offer. New customers may find introductory promotions, while existing customers may find seasonal or restaurant-specific deals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Always check whether the offer applies to your location, restaurant, order value, or customer account.
          </p>
        </div>

        {/* Restaurant Deals for Every Occasion */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Restaurant Deals for Every Occasion</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every meal happens at home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Birthdays, date nights, family dinners, celebrations, work lunches, and casual get-togethers all provide opportunities to dine out.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Restaurant chains and dining platforms frequently introduce promotions around holidays and special occasions. Some offers may provide discounts on selected meals, while others may include rewards, free items, or limited-time menu promotions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Checking CouponsBit before ordering can help you discover what is available.
          </p>
        </div>

        {/* Grocery and Food Shopping Savings */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Grocery and Food Shopping Savings</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Food expenses are a regular part of most household budgets, which means grocery savings can have a long-term impact.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Online grocery stores, specialty food retailers, meal-kit companies, and food brands may offer promotions throughout the year.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may find a grocery coupon code, subscription offer, free-delivery promotion, or discount on selected products.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            When comparing deals, consider the final cost rather than the headline discount. A promotion is useful when it genuinely lowers the amount you spend on products you need.
          </p>
        </div>

        {/* Seasonal Food Promotions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Food Promotions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Food retailers and restaurants frequently align promotions with holidays and events.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Super Bowl season can bring food and snack deals. Valentine's Day often brings restaurant and dessert promotions. Summer may feature outdoor dining and beverage offers, while Thanksgiving and Christmas can bring grocery, catering, and meal-related promotions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Major U.S. shopping events can also include food and dining offers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By checking CouponsBit regularly, you can discover promotions when they are most relevant.
          </p>
        </div>

        {/* How to Use a Food Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use a Food Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using a food or dining coupon usually takes only a few steps.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Your Offer", desc: "Choose a restaurant, food retailer, or service on CouponsBit and review the available offer." },
              { step: "2", title: "Step 2: Copy the Code", desc: "If the promotion includes a code, copy it and visit the merchant's website or app." },
              { step: "3", title: "Step 3: Select Items & Checkout", desc: "Select your food, add it to your cart, and continue to checkout." },
              { step: "4", title: "Step 4: Apply Discount Code", desc: "Enter the promo code or discount code in the appropriate field and apply it." },
              { step: "5", title: "Step 5: Verify Your Total", desc: "Make sure the discount has been applied before completing your order." },
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
            Some deals may be automatically applied, while others may require a minimum purchase or specific payment method.
          </p>
        </div>

        {/* Dining Without Breaking the Budget */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Dining Without Breaking the Budget</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saving money does not mean giving up the foods you enjoy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead, it can mean being more intentional about when and where you order. If you already plan to eat out or order delivery, checking for a coupon before paying is an easy way to look for better value.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can also compare promotions across restaurants and services rather than choosing the first offer you see.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit is designed to make that process easier.
          </p>
        </div>

        {/* Make Coupons Part of Your Food Routine */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Make Coupons Part of Your Food Routine</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you order food regularly, small savings can become significant over time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A few dollars saved on one delivery may not seem like much. Multiply that across several orders each month, and the difference becomes more noticeable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That is why checking for a coupon, voucher, promotional code, or dining deal before placing an order is a useful shopping habit.
          </p>
        </div>

        {/* Discover Food Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Discover Food Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are craving pizza, planning dinner, ordering groceries, stocking up on snacks, or looking for a special dining experience, CouponsBit can help you find ways to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore Food and Dining offers, check available coupon codes, promo codes, discount offers, and restaurant deals, and choose the promotion that works for your order.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because enjoying good food is even better when you know you got a good deal.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal Food Promotions */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Restaurants and food services offer major savings around key seasonal periods.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Super Bowl Season", desc: "Game-day discounts on pizza, wings, snacks, and party platters." },
              { title: "Valentine's Day", desc: "Special restaurant dining deals, multi-course menus, and dessert promos." },
              { title: "Summer Season", desc: "Outdoor dining offers, cold beverage discounts, and BBQ deals." },
              { title: "Thanksgiving & Christmas", desc: "Promotions on holiday grocery items, meal kits, and catering." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Dining Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Food Shopping Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Maximize your dining budget with these simple habits.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Coupons Before Ordering",
              "Compare Food Delivery Platforms",
              "Look for First-Time Customer Codes",
              "Watch for Free Delivery Thresholds",
              "Evaluate Final Total After Fees",
              "Sign Up for Loyalty Rewards"
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
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Ordering?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Taking a few seconds to check for a promo code can turn a routine meal into extra savings.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Restaurant Savings:</strong> Discover discount codes for top national chains and dining spots.</p>
            <p><strong>Delivery Discounts:</strong> Offset service fees and delivery charges with valid codes.</p>
            <p><strong>Grocery & Meal Kits:</strong> Lower weekly spending on grocery orders and meal plans.</p>
            <p><strong>Updated Regularly:</strong> Find active, verified dining offers updated for smart shoppers.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Eat Well for Less:</strong> A few dollars saved on every takeout order adds up quickly over time. Make checking CouponsBit a part of your mealtime routine.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Find Food Deals Now →
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
