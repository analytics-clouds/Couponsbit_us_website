"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Shirt, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Baby, Car, BedDouble, Glasses
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
  { id: "fytoo-discount-code", name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", coupons: 7, discount: "Frames From $1" },
  { id: "nuage-discount-code", name: "Nuagewear", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg", coupons: 12, discount: "Up to 39% OFF" },
  { id: "cariloha-discount-code", name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", coupons: 11, discount: "Up to 50% OFF" },
  { id: "wiskii-discount-code", name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", coupons: 10, discount: "Up To 60% OFF" },
  { id: "spirit-halloween-discount-code", name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", coupons: 9, discount: "Up To 75% OFF" },
  { id: "wish-discount-code", name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", coupons: 10, discount: "Up To 60% OFF" },
  { id: "aporro-discount-code", name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", coupons: 9, discount: "Save Up To 45% OFF" },
  { id: "blue-cypress-discount-code", name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", coupons: 9, discount: "20% OFF First Order" },
  { id: "dore-and-rose-promo-code", name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", coupons: 10, discount: "Up To 65% OFF" },
  { id: "macys-promo-code", name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", coupons: 8, discount: "Up To 75% OFF" },
  { id: "shein-coupon-code", name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", coupons: 10, discount: "Up To 90% OFF" },
  { id: "nike-discount-code", name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", coupons: 11, discount: "Up To 60% OFF" },
  { id: "zara-discount-code", name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", coupons: 10, discount: "Up To 80% OFF" },
  { id: "hm-promo-code", name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", coupons: 18, discount: "Up To 77% OFF" },
  { id: "bamboocool-discount-code", name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", coupons: 10, discount: "Up To 25% OFF" },
  { id: "etsy-coupon-code", name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", coupons: 8, discount: "Flat 75% OFF" },
  { id: "fashion-nova-discount-code", name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "old-navy-promo-code", name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "abercrombie-discount-code", name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "jcpenney-discount-code", name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", coupons: 6, discount: "Up To 50% OFF" },
  { id: "oglmove-discount-code", name: "OGLmove", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788434147/ogl-logo_p8i400.webp", coupons: 13, discount: "Up To 13% OFF" }
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
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion", active: true },
];

export default function FashionCouponsContent() {
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
          <span className="text-gray-700 font-medium">Fashion</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Fashion Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on clothing, shoes, accessories and everyday fashion essentials with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Shirt, val: "199", label: "Coupons" },
                        { icon: Store, val: "21", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#E11D48]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780435/clothing_qsvqci.png"
                      alt="Fashion Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Fashion</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#fff1f2] flex items-center justify-center mb-4">
                      <Shirt className="w-6 h-6 text-[#E11D48]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Fashion</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new fashion stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Fashion Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fff1f2] rounded-full flex items-center justify-center text-[#E11D48]"><badge.icon className="w-4 h-4" /></div>
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
            Fashion Promo Codes, Clothing Coupon Codes & Apparel Deals Online
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Fashion is constantly evolving, but looking stylish doesn't have to come with a high price tag.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you're searching for the latest fashion promo codes, you're in the right place. At Couponsbit, we help shoppers discover exciting savings on clothing, footwear, accessories, and fashion essentials from popular brands and online retailers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're refreshing your wardrobe, shopping for seasonal trends, investing in timeless pieces, or searching for everyday essentials, finding the right deal can make your shopping experience even better. That's why Couponsbit brings together verified clothing coupon codes, exclusive offers, and the latest apparel deals online to help fashion lovers save more on every purchase.
          </p>
        </div>

        {/* Explore the Latest Fashion Deals and Discounts */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Explore the Latest Fashion Deals and Discounts</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Fashion shopping is no longer limited to local stores. Today's consumers have access to thousands of brands and styles from around the world, all available at the click of a button. From luxury labels and contemporary brands to affordable everyday fashion, online shopping offers endless possibilities.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            At Couponsbit, we make it easier to find savings opportunities across a wide range of fashion categories, including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Women's clothing", desc: "Dresses, tops, denim, activewear, and outerwear." },
              { title: "Men's clothing", desc: "Shirts, suits, casual tees, jackets, and trousers." },
              { title: "Kids' fashion", desc: "Durable schoolwear, playwear, and shoes for all ages." },
              { title: "Shoes and footwear", desc: "Sneakers, boots, heels, sandals, and formal shoes." },
              { title: "Handbags and accessories", desc: "Purses, backpacks, belts, hats, and scarves." },
              { title: "Activewear and athleisure", desc: "Leggings, sports bras, hoodies, and performance gear." },
              { title: "Designer fashion", desc: "High-end luxury labels and runway-inspired apparel." },
              { title: "Streetwear", desc: "Trendy urban fashion, graphic tees, and limited drops." },
              { title: "Seasonal collections", desc: "Spring wear, summer swimwear, fall coats, and winter knits." },
              { title: "Jewelry and watches", desc: "Fine jewelry, fashion pieces, and luxury timepieces." },
              { title: "Outerwear and jackets", desc: "Puffers, trench coats, leather jackets, and parkas." },
              { title: "Formal and occasion wear", desc: "Evening gowns, tuxedos, cocktail dresses, and suits." },
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
            Before checking out, it's always worth exploring available fashion promo codes that can help reduce the cost of your order.
          </p>
        </div>

        {/* Popular Fashion Brands You Can Save On */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Fashion Brands You Can Save On</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fashion shoppers have more choices than ever before. Whether you're looking for everyday basics, premium apparel, or trend-driven collections, many leading brands regularly offer promotions and discounts.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Popular fashion retailers often featured on coupon and deal platforms include:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              "Nike", "Adidas", "Levi's", "H&M",
              "Zara", "ASOS", "GAP", "Old Navy",
              "Nordstrom", "Macy's", "American Eagle", "Forever 21",
              "Calvin Klein", "Tommy Hilfiger", "Michael Kors", "Coach"
            ].map((brand, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-3 text-center bg-gray-50/50 font-bold text-gray-700 text-xs">
                {brand}
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            From wardrobe staples to statement pieces, shoppers can often find valuable savings opportunities throughout the year.
          </p>
        </div>

        {/* Why Online Fashion Shopping Continues to Grow */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Online Fashion Shopping Continues to Grow</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Online fashion shopping has transformed the way people discover and purchase clothing. Consumers can browse thousands of products, compare styles, and find deals without leaving home.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { title: "Greater Product Selection", desc: "Online retailers often carry larger inventories than physical stores, giving shoppers access to more sizes, colors, and styles." },
              { title: "Easy Price Comparison", desc: "Comparing products and pricing across multiple brands is simple when shopping online." },
              { title: "Access to Exclusive Promotions", desc: "Many retailers offer online-only discounts, promotional offers, and clothing coupon codes." },
              { title: "Convenience", desc: "Shop anytime, anywhere, using your computer, tablet, or smartphone." },
              { title: "Fast Delivery Options", desc: "Many fashion retailers offer expedited shipping, making it easier to receive your purchases quickly." },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#056bfa] pl-4 py-1">
                <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use Fashion Promo Codes */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use Fashion Promo Codes</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Saving money on fashion purchases is easier than many shoppers realize.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Browse Available Deals", desc: "Explore the latest fashion promo codes and apparel discounts available on Couponsbit." },
              { step: "2", title: "Choose an Offer", desc: "Select the deal that best matches your shopping needs." },
              { step: "3", title: "Copy the Promo Code", desc: "Reveal and copy the available discount code." },
              { step: "4", title: "Visit the Retailer", desc: "Add your desired items to your shopping cart." },
              { step: "5", title: "Apply the Discount", desc: "Enter the promo code during checkout and verify that the savings have been applied." },
              { step: "6", title: "Complete Your Purchase", desc: "Finalize your order and enjoy your fashion finds while spending less." },
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

        {/* Best Times to Find Clothing Coupon Codes */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Best Times to Find Clothing Coupon Codes</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            While fashion deals can appear throughout the year, certain shopping periods often offer particularly strong savings opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Black Friday", desc: "Many retailers launch some of their biggest discounts during Black Friday sales." },
              { title: "Cyber Monday", desc: "Online shoppers can often find exclusive promotions and apparel deals online during Cyber Monday events." },
              { title: "End-of-Season Sales", desc: "Retailers frequently clear inventory at the end of each season, creating excellent opportunities for savings." },
              { title: "Back-to-School Shopping", desc: "Students and families can often find discounts on clothing, footwear, and accessories." },
              { title: "Holiday Sales", desc: "Major holidays often bring special promotions and limited-time offers." },
              { title: "Clearance Events", desc: "Many retailers maintain clearance sections where shoppers can find reduced prices year-round." },
            ].map((event, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="text-[#056bfa] font-extrabold text-sm mb-1">{event.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Ways to Save More on Fashion Purchases */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Smart Ways to Save More on Fashion Purchases</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Finding a discount code is only one way to maximize savings. Consider these additional strategies.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { title: "Check Couponsbit Before Shopping", desc: "Always search for available fashion promo codes before placing an order." },
              { title: "Join Brand Email Lists", desc: "Many fashion retailers reward subscribers with exclusive offers and early access to sales." },
              { title: "Shop Seasonal Sales", desc: "Planning purchases around major sales events can often result in substantial savings." },
              { title: "Compare Multiple Retailers", desc: "The same item may be available at different prices across various stores." },
              { title: "Watch for Free Shipping Offers", desc: "Shipping costs can add up, making free shipping promotions especially valuable." },
              { title: "Create a Wishlist", desc: "Monitoring favorite products can help you purchase when prices drop or promotions become available." },
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-bold text-xs mr-1">{point.title}:</span>
                  <span className="text-gray-600 text-xs">{point.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use Couponsbit for Fashion Savings? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Use Couponsbit for Fashion Savings?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Couponsbit, our goal is to help shoppers discover genuine opportunities to save.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Updated Offers", desc: "We regularly update available promotions and discounts from leading fashion brands." },
              { title: "Wide Brand Coverage", desc: "Find deals from a variety of apparel retailers, footwear brands, and fashion marketplaces." },
              { title: "Easy-to-Use Platform", desc: "Quickly browse, copy, and use coupon codes without unnecessary steps." },
              { title: "Completely Free", desc: "Couponsbit is free to use and designed to help consumers shop smarter." },
            ].map((feature, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
                <h3 className="text-black font-extrabold text-sm mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            <strong>Savings Across Every Style:</strong> Whether you're shopping for casual wear, activewear, luxury fashion, or everyday essentials, you'll find opportunities to save.
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-6">Frequently Asked Questions</h2>

          <div className="flex flex-col gap-4">
            {[
              { q: "What are fashion promo codes?", a: "Fashion promo codes are discount codes that can help reduce the cost of clothing, footwear, accessories, and other fashion-related purchases." },
              { q: "Where can I find clothing coupon codes?", a: "Couponsbit regularly features clothing coupon codes from popular fashion retailers and apparel brands." },
              { q: "Are fashion promo codes free to use?", a: "Yes. Fashion promo codes are completely free and can provide savings on eligible purchases." },
              { q: "What types of apparel deals online can I find?", a: "You may find discounts on clothing, shoes, handbags, accessories, activewear, designer products, and seasonal collections." },
              { q: "When is the best time to shop for fashion deals?", a: "Black Friday, Cyber Monday, holiday sales, and end-of-season clearance events often provide some of the best fashion discounts." },
              { q: "Does Couponsbit verify deals?", a: "We regularly review and update promotions to help users discover relevant savings opportunities." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50/80 rounded-xl p-5 border border-gray-100">
                <h3 className="text-black font-black text-sm mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade Your Style for Less */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Upgrade Your Style for Less</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Looking fashionable doesn't have to mean paying full price. Whether you're shopping for everyday outfits, workplace essentials, seasonal trends, or premium designer pieces, smart savings can help you get more value from every purchase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse the latest fashion promo codes, clothing coupon codes, and apparel deals online on Couponsbit and discover how easy it can be to refresh your wardrobe while staying within budget.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal Fashion Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Major Fashion Events</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Shop during these peak periods for the biggest apparel price drops.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Black Friday & Cyber Monday", desc: "Huge sitewide deals across luxury, fast fashion, and footwear." },
              { title: "End-of-Season Clearances", desc: "Deep discounts as stores clear inventory for incoming collections." },
              { title: "Back-to-School Sales", desc: "Savings on shoes, backpacks, denim, and daily wardrobe basics." },
              { title: "Holiday & Flash Promotions", desc: "Limited-time promo codes during major holiday weekends." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Fashion Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Fashion Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Simple habits to stretch your wardrobe and apparel budget further.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Couponsbit Before Placing Orders",
              "Sign Up for Email First-Order Discounts",
              "Look for Free Delivery Minimums",
              "Compare Prices Across Multiple Stores",
              "Save Items to Wishlists for Price Drops",
              "Combine Clearance Items with Promo Codes"
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
          <h3 className="font-black text-lg mb-2">Why Use Couponsbit for Fashion?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Refresh your personal style without blowing your monthly shopping budget.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Top Retail Coverage:</strong> Promos for popular brands like Nike, Zara, ASOS, and Levi's.</p>
            <p><strong>Every Style Category:</strong> Deals across streetwear, activewear, luxury, and shoes.</p>
            <p><strong>Updated Offers:</strong> Verified coupon codes regularly updated for hassle-free checkout.</p>
            <p><strong>100% Free Access:</strong> Browse and use discount codes completely free anytime.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Upgrade Your Wardrobe:</strong> Looking stylish doesn't have to be expensive. Find active promo codes on Couponsbit before you buy.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Fashion Deals Now →
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
