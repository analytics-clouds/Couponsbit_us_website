"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  HeartPulse, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  Home, UtensilsCrossed, Gamepad2, Baby, Car, BedDouble, Glasses, Shirt
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
  { id: "ballboyz-discount-code", name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", coupons: 8, discount: "Up to 50% OFF" },
  { id: "ringconn-discount-code", name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", coupons: 5, discount: "Starting From $199" },
  { id: "kerala-ayurveda-discount-code", name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", coupons: 10, discount: "Flat 10% OFF" },
  { id: "merachfit-discount-code", name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", coupons: 8, discount: "Save Up To $260" },
  { id: "superrun-discount-code", name: "Superrun", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp", coupons: 4, discount: "Save $30 OFF" },
  { id: "signalring-discount-code", name: "SignalRing", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/singnalring_i9epcf.jpg", coupons: 4, discount: "Starting At $399" },
  { id: "goodrx-discount-code", name: "GoodRx", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp", coupons: 6, discount: "From $39/Month" },
  { id: "the-ayurveda-experience-discount-code", name: "The Ayurveda Experience", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp", coupons: 6, discount: "Flat 50% OFF" },
  { id: "kroger-discount-code", name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "lordhair-promo-code", name: "Lordhair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "philips-discount-code", name: "Philips", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp", coupons: 10, discount: "Save Up To £120" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics", count: "850+", color: "text-[#056bfa]", href: "/categories/electronics" },
  { icon: Plane, name: "Travel", count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv, name: "Entertainment", count: "210+", color: "text-[#056bfa]", href: "/categories/entertainment" },
  { icon: Code, name: "Software & Digital", count: "300+", color: "text-[#056bfa]", href: "/categories/software" },
  { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-[#056bfa]", href: "/categories/mobile" },
  { icon: HeartPulse, name: "Health & Wellness", count: "90+", color: "text-[#056bfa]", href: "/categories/health", active: true },
  { icon: Home, name: "Home & Lifestyle", count: "120+", color: "text-[#056bfa]", href: "/categories/home" },
  { icon: UtensilsCrossed, name: "Food & Dining", count: "150+", color: "text-[#056bfa]", href: "/categories/food" },
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming" },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function HealthCouponsContent() {
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
          <span className="text-gray-700 font-medium">Health & Wellness</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Health & Wellness Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on supplements, fitness gear, personal care and wellness essentials with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: HeartPulse, val: "73", label: "Coupons" },
                        { icon: Store, val: "11", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#16A34A]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780440/health_frbeyc.png"
                      alt="Health & Wellness Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Health & Wellness</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-4">
                      <HeartPulse className="w-6 h-6 text-[#16A34A]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Health & Wellness</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new health & wellness stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Health & Wellness Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#f0fdf4] rounded-full flex items-center justify-center text-[#16A34A]"><badge.icon className="w-4 h-4" /></div>
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
            Health and Wellness Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Taking care of yourself should feel good, and finding a better deal while doing it feels even better.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are shopping for vitamins, personal care products, fitness essentials, skincare, wellness products, or everyday health supplies, the right offer can help you get more value from every purchase.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Health and Wellness category on CouponsBit brings together savings opportunities from online stores that cater to your health, fitness, beauty, and personal wellness needs. Instead of visiting multiple websites and wondering whether there is a better offer available, you can use CouponsBit to discover coupon codes, promotional offers, discounts, and other ways to save before checking out.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From building a home workout routine to upgrading your skincare shelf, small savings can add up quickly. A good health and wellness coupon code can reduce the cost of products you already planned to buy, while seasonal promotions and storewide sales can make it easier to stock up on essentials.
          </p>
        </div>

        {/* Find Health and Wellness Coupon Codes in One Place */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Health and Wellness Coupon Codes in One Place</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Online shopping has made health and wellness products easier to access, but it has also created an overwhelming number of choices. You may find dozens of brands selling similar products, each offering different promotions, first-order discounts, bundles, subscriptions, or seasonal sales.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            That is where CouponsBit can help.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Our Health and Wellness category is designed for shoppers who want to compare available savings before making a purchase. You can explore participating stores, check their current offers, and look for a coupon code, discount code, promo code, or online deal that fits your shopping needs.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you are making a one-time purchase or regularly buying wellness products, checking for an offer before paying is a simple habit that can make your shopping budget go further.
          </p>
        </div>

        {/* What Can You Shop For? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">What Can You Shop For?</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Health and wellness covers much more than traditional healthcare products. Modern wellness shopping includes everything from fitness equipment and nutritional products to skincare, personal care, relaxation products, and everyday self-care essentials. Depending on the store, you may find offers on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Vitamins and nutritional products", desc: "Daily multivitamins, targeted supplements, and dietary formulas." },
              { title: "Fitness and workout equipment", desc: "Treadmills, dumbbells, yoga mats, and resistance gear." },
              { title: "Protein and sports nutrition products", desc: "Protein powders, pre-workout drinks, and energy bars." },
              { title: "Skincare and body care", desc: "Facial cleansers, moisturizers, serums, and body lotions." },
              { title: "Haircare and personal care", desc: "Shampoos, conditioners, scalp treatments, and grooming kits." },
              { title: "Wellness accessories", desc: "Water bottles, aromatherapy diffusers, and pill organizers." },
              { title: "Sleep and relaxation products", desc: "Weighted blankets, white noise machines, and sleep aids." },
              { title: "Home fitness essentials", desc: "Compact gym gear, yoga blocks, and cardio equipment." },
              { title: "Personal hygiene products", desc: "Oral care, natural deodorants, and body washes." },
              { title: "Health-focused food and beverages", desc: "Organic snacks, herbal teas, and superfood blends." },
              { title: "Massage and recovery products", desc: "Massage guns, foam rollers, and compression boots." },
              { title: "Outdoor and fitness accessories", desc: "Running belts, fitness trackers, and outdoor hydration packs." },
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
            The category is particularly useful when you are shopping for products that you purchase regularly. If you already know which brand or store you prefer, checking CouponsBit for a promo code before placing your order can help you avoid paying more than necessary.
          </p>
        </div>

        {/* Save More on Fitness and Active Lifestyle Products */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save More on Fitness and Active Lifestyle Products</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Getting fit does not necessarily mean spending a fortune. From resistance bands and yoga accessories to workout clothing and fitness equipment, there are plenty of products that can support an active lifestyle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before purchasing fitness products online, look for a fitness coupon code or store promotion. Some retailers may offer discounts during major shopping periods, while others may provide special promotions on selected categories.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            New Year promotions, summer sales, back-to-school periods, holiday events, and major U.S. shopping occasions can all be useful times to look for fitness deals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are building a home gym, buying several products at once can also make promotions more valuable. Just remember to compare the final deal rather than focusing only on the headline percentage.
          </p>
        </div>

        {/* Wellness Shopping Without Overspending */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Wellness Shopping Without Overspending</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wellness is personal. One shopper may be interested in fitness, while another may focus on skincare, sleep, relaxation, or nutrition.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That is why the Health and Wellness section on CouponsBit is designed to cover different types of shopping needs rather than focusing on a single product category.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can use a discount code when available, compare promotional offers, and look for storewide sales or category-specific deals. Combining smart shopping habits with available promotions can help you make more informed purchasing decisions.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Keep in mind that discounts, exclusions, minimum purchase requirements, and expiration dates can vary by retailer. Always check the terms of an offer before completing your purchase.
          </p>
        </div>

        {/* Seasonal Health and Wellness Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Health and Wellness Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Retailers frequently change their promotions throughout the year. Certain periods can be especially useful for finding wellness-related savings.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            January often brings fitness and wellness promotions as shoppers start the new year with fresh goals. Spring can bring outdoor fitness and personal-care campaigns, while summer may feature promotions around active lifestyles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Holiday shopping periods such as Black Friday, Cyber Monday, Memorial Day, Labor Day, and the holiday season can also bring discounts across a wide range of health and wellness stores.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit helps you keep an eye on these opportunities so you can shop when promotions are available.
          </p>
        </div>

        {/* How to Use a Health and Wellness Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use a Health and Wellness Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using an online coupon is usually straightforward.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Your Store", desc: "Start by choosing a store from the CouponsBit Health and Wellness category." },
              { step: "2", title: "Step 2: Select & Copy Code", desc: "Review the available promotions and select an offer. If a code is provided, copy it and visit the site." },
              { step: "3", title: "Step 3: Add Items to Cart", desc: "Add your desired products to your shopping cart and continue to checkout." },
              { step: "4", title: "Step 4: Enter Promo Code", desc: "Look for a field labeled “Promo Code,” “Coupon Code,” or “Discount Code.” Enter the code and apply it." },
              { step: "5", title: "Step 5: Confirm Your Savings", desc: "Before paying, make sure the expected discount has been reflected in your order total." },
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
            Some offers may be automatically applied, so you may not always need to enter a code manually.
          </p>
        </div>

        {/* Why Check CouponsBit Before Shopping? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Check CouponsBit Before Shopping?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Paying full price should not be your default when an offer may already be available.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            CouponsBit gives shoppers a convenient starting point for discovering online savings. Instead of searching randomly across the internet for a working health and wellness coupon, you can explore relevant offers by category and store.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The goal is simple: make it easier to discover deals before you buy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A few seconds spent checking for a promotion could help you save on a product you were already planning to purchase.
          </p>
        </div>

        {/* Shop Smarter With CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop Smarter With CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Health and wellness products can become a regular part of your household budget. Whether you are purchasing workout gear, personal care products, skincare, nutrition products, or wellness essentials, finding the right deal can make those purchases more affordable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore the Health and Wellness category on CouponsBit, compare available coupon codes, promo codes, discount offers, and deals, and choose the savings opportunity that works best for your order.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your wellness routine is worth investing in. That does not mean you have to overspend on it.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal & Holiday Health Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Health and wellness brands offer major savings during these key times of year.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "January New Year Sales", desc: "Huge discounts on fitness gear, supplements, and wellness plans." },
              { title: "Spring Outdoor Refresh", desc: "Promotions on outdoor fitness equipment, skincare, and sun care." },
              { title: "Summer Active Living", desc: "Deals on sports nutrition, hydration gear, and activewear." },
              { title: "Black Friday & Holiday Sales", desc: "Sitewide price drops on massage devices, home gym setups, and care sets." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Wellness Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Wellness Shopping Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Stretch your health and fitness budget with these simple habits.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Coupons Before Ordering",
              "Look for Subscription Bundle Discounts",
              "Compare Final Totals Across Brands",
              "Watch for First-Time Customer Codes",
              "Verify Minimum Spend Requirements",
              "Check Free Delivery Thresholds"
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
            Taking a moment to look for a discount code makes maintaining your wellness routine far more affordable.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Supplements & Vitamins:</strong> Reduce repetitive monthly costs on essential nutritional products.</p>
            <p><strong>Fitness & Recovery Gear:</strong> Save on larger investments like home gym equipment and massage tools.</p>
            <p><strong>Skincare & Personal Care:</strong> Get active codes for premium skincare and self-care brands.</p>
            <p><strong>Verified Promotions:</strong> Access updated, working coupons from trusted USA health retailers.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Prioritize Your Well-Being:</strong> Self-care is essential, but it shouldn't strain your wallet. Make checking CouponsBit a habit before every purchase.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Find Health Deals Now →
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
