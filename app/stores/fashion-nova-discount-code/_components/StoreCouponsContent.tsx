"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  FileText,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Dumbbell,
  Footprints,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "BOGO", heading: "Buy One, Get One Free", sub: "Jeans, Dresses & More" },
  { id: "d2", label: "SALE", heading: "Kissed By Nature Bikini Set 80% OFF", sub: "$1.98" },
  { id: "d3", label: "SALE", heading: "Kissmas Eve Lace Trim Chemise 80% OFF", sub: "$4.48" },
  { id: "d4", label: "SALE", heading: "Indigo Luxe Hoop Earrings 70% OFF", sub: "$2.98" },
  { id: "d5", label: "SALE", heading: "Catch Me Offline Sweater Dress 70% OFF", sub: "$9.98" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Verified Deals", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Verified Deals", href: "/stores/hm-promo-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
];

const STORE_URL = "https://www.fashionnova.com/";

export default function FashionNovaCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Toast Notification */}
      <div className={cn(
        "fixed top-20 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-3 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
      )}>
        <div className="bg-[#f0fdf4] p-2 rounded-full">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div>
          <p className="font-black text-black text-sm">Code Copied!</p>
          <p className="text-gray-500 text-xs font-bold font-mono">{toastCode}</p>
        </div>
      </div>

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Fashion Nova</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp" alt="Fashion Nova" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Fashion Nova</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(41.7k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Fashion Nova discount code? Explore verified Fashion Nova deals and save up to 80% OFF on selected women's fashion, swimwear, dresses, accessories, and loungewear. Enjoy Buy One, Get One Free on select jeans, dresses, matching sets, jumpsuits, and rompers, plus an additional $25 OFF orders of $99+ with code EXTRA25 on eligible purchases.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "13", label: "Offers" },
                    { icon: Percent, val: "2.9k", label: "Deals" },
                    { icon: Users, val: "14M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788349790/9_bafoj5.webp" alt="Fashion Nova Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4">
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">Fashion Nova Discount Codes & Offers</h2>
        </div>

        {[
          { label: "BOGO", value: "FREE", title: "Fashion Nova Discount Code – Buy One, Get One Free", desc: "Shop Buy One, Get One Free on select jeans, dresses, matching sets, jumpsuits, and rompers.", bullets: ["Get $25 OFF $99+ on eligible orders.", "Use Code: EXTRA25 to unlock the additional savings.", "Shop the latest women's fashion deals available in the USA."] },
          { label: "SALE", value: "80% OFF", title: "Fashion Nova Discount Code – Kissed By Nature Bikini Set 80% OFF", desc: "Get the Kissed By Nature 2 Piece Beaded Triangle Bikini Set for just $1.98, reduced from $39.99.", bullets: ["Enjoy approximately 80% OFF on this stylish women's swimwear.", "Apply the Fashion Nova Discount Code on eligible purchases for additional savings.", "Shop this Fashion Nova USA deal for summer, beach, and vacation styles."] },
          { label: "SALE", value: "80% OFF", title: "Fashion Nova – Kissmas Eve Lace Trim Chemise 80% OFF", desc: "Get the Kissmas Eve Lace Trim Chemise for only $4.48, down from $22.99.", bullets: ["Save up to 80% OFF on this festive women's style.", "Features adjustable straps, lace trim, side slits, bow detail, and stretch fabric.", "Shop this affordable Fashion Nova USA deal while available."] },
          { label: "SALE", value: "70% OFF", title: "Fashion Nova – Indigo Luxe Hoop Earrings 70% OFF", desc: "Shop the Indigo Luxe Hoop Earrings for just $2.98, reduced from $9.99.", bullets: ["Save up to 70% OFF on oversized statement hoop earrings.", "Features stylish denim detailing and a post-back closure.", "Grab this affordable Fashion Nova accessories deal in the USA."] },
          { label: "SALE", value: "70% OFF", title: "Fashion Nova – Catch Me Offline Sweater Dress 70% OFF", desc: "Get the Catch Me Offline Sweater Dress for only $9.98, down from $39.99.", bullets: ["Save up to 70% OFF on this striped sweater dress.", "Features an off-shoulder design, long sleeves, and stretch fit.", "Shop this Fashion Nova USA women's clothing deal at a discounted price."] },
          { label: "SALE", value: "70% OFF", title: "Fashion Nova – Quite Comfort Ribbed PJ Short Set 70% OFF", desc: "Get the Quite Comfort Ribbed PJ Short Set for just $5.98, reduced from $19.99.", bullets: ["Enjoy up to 70% OFF on comfortable women's loungewear.", "Perfect for sleepwear, relaxing at home, and casual comfort.", "Shop this Fashion Nova USA deal while stocks last."] },
          { label: "SALE", value: "70% OFF", title: "Fashion Nova – Up to 70% OFF Sitewide", desc: "Shop up to 70% OFF sitewide on selected Fashion Nova products.", bullets: ["Find savings across women's clothing, accessories, shoes, denim, and more.", "Discover trendy USA fashion styles at reduced prices.", "Shop the Fashion Nova sale and upgrade your wardrobe for less."] },
          { label: "SALE", value: "60–80%", title: "Fashion Nova – Women's Clothing Sale 60–80% OFF", desc: "Shop the Women's Clothing Sale with 60–80% OFF selected styles.", bullets: ["Save on dresses, denim, matching sets, tops, loungewear, and more.", "Find trendy women's fashion at budget-friendly sale prices.", "Take advantage of these Fashion Nova USA deals before they end."] },
          { label: "SALE", value: "60% OFF", title: "Fashion Nova – Track Star Sunglasses 60% OFF", desc: "Get the Track Star Sunglasses for only $2.98, down from $6.99.", bullets: ["Save up to 60% OFF on stylish square-frame sunglasses.", "Available in Black, Nude, and Tortoise.", "Shop this affordable Fashion Nova USA accessories deal."] },
          { label: "SHOP", value: "DENIM", title: "Fashion Nova – Vienna Denim Jorts Sale", desc: "Get the Vienna Denim Jorts for $20.99, reduced from $29.99.", bullets: ["Save on these trendy denim shorts with a 5-pocket design and ombre finish.", "Made from 100% cotton with an 11-inch rise and 13-inch inseam.", "Pair them with the matching denim jacket for a complete Fashion Nova look."] },
          { label: "SHOP", value: "JACKET", title: "Fashion Nova – Windsor Clasp Peplum Denim Jacket", desc: "Shop the Windsor Clasp Peplum Denim Jacket for $48.99, down from $69.99.", bullets: ["Save $21 on this fitted dark-wash denim jacket.", "Features functional clasps, zip front, peplum styling, and stretch denim.", "Available in plus sizes for Fashion Nova USA shoppers."] },
          { label: "SHOP", value: "SANDALS", title: "Fashion Nova – Nikia Heeled Sandals", desc: "Get the Nikia Heeled Sandals for $30.99, reduced from $44.99.", bullets: ["Save on stylish strappy women's heels with a 4.2-inch ultra-high heel.", "Available in Gold and Silver with a round-toe design.", "Plus sizes are available for this Fashion Nova USA shoe deal."] },
          { label: "SHOP", value: "JEANS", title: "Fashion Nova – San Diego Sculpting Flare Jeans", desc: "Get the San Diego Sculpting Stretch Flare Jeans for just $18.00, down from $34.99.", bullets: ["Save approximately 48% OFF on these women's denim jeans.", "Designed with a sculpting stretch fit and flattering flare silhouette.", "Shop this Fashion Nova USA denim deal for an affordable wardrobe upgrade."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold text-white leading-tight">{c.label}</p>
                    <div className="text-lg sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">{c.value}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                  <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                      <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                    </div>
                    <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                    <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                    <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                      View Details
                      <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                        {c.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Fashion Nova: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">

        <div className="w-full flex justify-center mb-6">
          <a
            href="https://www.google.com/preferences/source?q=couponsbit.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <Image
              src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
              alt="Add as a preferred source on Google"
              width={280}
              height={70}
              className="w-full max-w-[260px] h-auto object-contain"
              priority
            />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Fashion Nova Sale and Deals</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Fashion Nova sale can be another useful way to save, particularly when you are shopping for items already marked for promotion. Fashion Nova maintains dedicated sale sections covering categories such as dresses, jeans, activewear, pants, jumpsuits, rompers, shorts, skirts, swimwear, shoes, accessories, and other products.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Sale events can be especially useful when combined with careful shopping. However, a coupon code does not necessarily apply to every sale item. Some promotional codes may exclude already discounted products, so check the terms before applying a code.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Fashion Nova also runs limited-time promotions and seasonal campaigns. Because these offers can change, shoppers should check the current promotion rather than relying on an older Fashion Nova promo code.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
          <div className="space-y-1">
            {[
              { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
              { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
              { icon: Dumbbell, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Footprints, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
              { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                  <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                </div>
                <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
              </Link>
            ))}
          </div>
          <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-8">
            How to Get the Best Fashion Nova Discounts
          </h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
            Finding a Fashion Nova discount code is only one way to save. Smart shoppers can combine several strategies when appropriate.
          </p>
          <div className="space-y-8">
            {[
              {
                icon: Tag,
                title: "Check CouponsBit Before Shopping",
                sub: "Before starting your order, visit the Fashion Nova offers page on CouponsBit and check the available coupon codes, promo codes, vouchers, and deals. This can help you identify potential savings before you commit to a purchase."
              },
              {
                icon: Percent,
                title: "Look at the Sale Section",
                sub: "Fashion Nova maintains dedicated sale collections across many categories. Browsing these sections can help you find discounted products without needing a promotional code."
              },
              {
                icon: ShoppingBag,
                title: "Compare the Offer With Your Cart",
                sub: "The most useful promotion depends on what you are buying. A percentage-off Fashion Nova promo code may be more useful for one order, while a product-specific sale or other promotion may be better for another."
              },
              {
                icon: FileText,
                title: "Check the Terms",
                sub: "Always review the conditions before applying a coupon. Fashion Nova notes that certain products can be final sale and that promotional terms can vary. Its FAQ states that final-sale categories include items such as swimwear, bodysuits, lingerie and intimates, accessories, beauty products, party wear, and certain sale items."
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start text-justify">
                <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-black font-black text-sm leading-tight mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/stores" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Fashion Nova Discount Code, Coupon Code & Promo Codes
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Fashion Nova BOGO Free
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Buy 1, Get 1 FREE
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Use code: EXTRA25 ($25 OFF $99+)
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select jeans, dresses, matching sets, &amp; jumpsuits
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Kissed By Nature Bikini Set
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $1.98 <span className="text-xs text-gray-400 font-normal line-through">$39.99</span> (~80% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time discount deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            2-piece beaded triangle bikini set
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Kissmas Eve Lace Trim Chemise
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4.48 <span className="text-xs text-gray-400 font-normal line-through">$22.99</span> (~80% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited stock available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Lace trim chemise with adjustable straps
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Indigo Luxe Hoop Earrings
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $2.98 <span className="text-xs text-gray-400 font-normal line-through">$9.99</span> (70% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time accessories deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Oversized denim hoop earrings
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Catch Me Offline Sweater Dress
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $9.98 <span className="text-xs text-gray-400 font-normal line-through">$39.99</span> (70% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time clothing sale
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Off-shoulder striped sweater dress
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Quite Comfort Ribbed PJ Set
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $5.98 <span className="text-xs text-gray-400 font-normal line-through">$19.99</span> (70% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            While stocks last
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Women's ribbed PJ short set
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Up to 70% OFF Sitewide
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 70% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time sitewide sale
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Women's clothing, shoes, denim, &amp; accessories
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Women's Clothing Sale
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            60–80% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Select women's styles
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Dresses, denim, matching sets, &amp; tops
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Track Star Sunglasses
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $2.98 <span className="text-xs text-gray-400 font-normal line-through">$6.99</span> (60% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Available in Black, Nude, &amp; Tortoise
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Square-frame women's sunglasses
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Vienna Denim Jorts
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $20.99 <span className="text-xs text-gray-400 font-normal line-through">$29.99</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            100% Cotton, ombre finish
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            High-rise 5-pocket denim jorts
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Windsor Clasp Peplum Denim Jacket
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $48.99 <span className="text-xs text-gray-400 font-normal line-through">$69.99</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Plus sizes available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Fitted dark-wash peplum denim jacket
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Nikia Heeled Sandals
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $30.99 <span className="text-xs text-gray-400 font-normal line-through">$44.99</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Gold &amp; Silver, 4.2-inch heel
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Strappy round-toe heeled sandals
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            San Diego Sculpting Flare Jeans
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $18.00 <span className="text-xs text-gray-400 font-normal line-through">$34.99</span> (~48% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time denim deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Sculpting stretch flare jeans
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Fashion Nova is a popular fashion destination for shoppers looking for trend-focused clothing, statement pieces, everyday essentials, and outfits for almost every occasion. From women’s dresses and jeans to matching sets, activewear, shoes, accessories, and men’s and kids’ collections, the brand offers a broad selection of styles designed around current fashion trends. Fashion Nova with Fashion Nova discount code also has dedicated plus-size collections and more, making it easier for shoppers to find styles across a wide range of sizes.
          </p>
          <p>
            If you are planning to shop at Fashion Nova, checking for a Fashion Nova discount code before completing your order can be a simple way to look for additional savings. CouponsBit brings together Fashion Nova coupon codes, promo codes, discount offers, sale opportunities, and other available deals so shoppers can check their options before heading to checkout.
          </p>
          <p>
            Whether you are refreshing your wardrobe with new dresses, looking for Fashion Nova jeans, building a complete outfit with a matching set, or shopping for shoes and accessories, it is worth checking the latest Fashion Nova promo code and available offers before placing your order.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Fashion Nova Discount Code</h3>
    <p>
      Looking for a Fashion Nova discount code is one of the easiest ways to potentially save when shopping online. Fashion Nova regularly promotes different types of offers, and the available promotions can vary depending on the products, campaign, season, and terms attached to the offer.
    </p>
    <p>
      A Fashion Nova coupon code may provide a percentage discount, a special promotion, or another type of saving when entered during checkout. Some offers may be available for selected products or collections, while others can apply more broadly.
    </p>
  </div>

  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 text-[#056bfa] space-y-2">
    <h4 className="font-bold text-sm tracking-wide uppercase">Important Redemption Tip</h4>
    <p className="text-sm text-gray-700 leading-relaxed font-medium">
      Before using a code, always check its specific terms. Some promotional offers may have exclusions, minimum purchase requirements, expiration dates, or restrictions on combining promotions.
    </p>
  </div>

  <p>
    Couponsbit makes it easier to compare the available savings opportunities and find a Fashion Nova offer that matches what you are planning to purchase.
  </p>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Fashion Nova Coupon Code and Promo Code Options</h3>
            <p>
              A Fashion Nova coupon code can be useful when you already have items in your cart and want to see whether an additional promotion is available. Promo codes can change frequently, so checking the latest available offers before checkout is a good shopping habit.
            </p>
            <p>You may come across several types of Fashion Nova promotions, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fashion Nova discount codes</li>
              <li>Fashion Nova coupon codes</li>
              <li>Fashion Nova promo codes</li>
              <li>Fashion Nova promotional codes</li>
              <li>Fashion Nova voucher codes</li>
              <li>Fashion Nova discount vouchers</li>
              <li>Fashion Nova sale offers</li>
              <li>Fashion Nova online deals</li>
              <li>Fashion Nova seasonal promotions</li>
              <li>Fashion Nova shipping offers</li>
              <li>Fashion Nova clearance and sale events</li>
            </ul>
            <p>
              Not every promotion will apply to every order. Always read the conditions associated with a specific offer before relying on it.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Women's Fashion at Fashion Nova</h3>
    <p>
      Fashion Nova has a particularly extensive women's fashion selection. Its women's collections include dresses, tops, matching sets, jeans, pants, jumpsuits, skirts, shorts, jackets, sweaters, activewear, swimwear, lingerie, shoes, and accessories. The website also organizes products around occasions such as date nights, brunch, office wear, vacations, lounging, and streetwear.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Dresses</h4>
    <p>
      Fashion Nova dresses cover a wide range of styles, from casual everyday dresses to mini dresses, midi dresses, maxi dresses, formal dresses, and occasion-focused looks. Shoppers can find options for nights out, vacations, parties, weddings, brunches, and other events.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      <strong>Pro Tip:</strong> If you are planning a wardrobe refresh, checking for a Fashion Nova coupon code before purchasing multiple pieces can help you identify available promotions.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Jeans and Denim</h4>
    <p>
      Fashion Nova is also well known for its denim selection. Shoppers can explore skinny jeans, wide-leg styles, high-waisted jeans, low-rise and mid-rise options, ripped jeans, flare styles, boyfriend jeans, mom jeans, and other denim silhouettes. The brand also carries denim jackets and other denim-focused collections.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      Before buying your next pair of Fashion Nova jeans, check whether a Fashion Nova discount code or denim-related offer is available.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tops, Shirts and Blouses</h4>
    <p>
      The brand offers a wide selection of tops, including tees, tanks, sleeveless tops, shirts, blouses, corset-inspired styles, long-sleeve tops, graphic tops, and other fashion-forward designs. These pieces can be paired with jeans, skirts, pants, or matching bottoms to create different looks.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Matching Sets</h4>
    <p>
      Matching sets are another major part of the Fashion Nova assortment. Shoppers can find coordinated pants sets, skirt sets, short sets, and other two-piece outfits. Matching sets can make outfit planning easier while maintaining a coordinated appearance.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Jumpsuits and Rompers</h4>
    <p>
      Fashion Nova offers jumpsuits and rompers in a variety of silhouettes, including casual styles and more occasion-focused designs. These one-piece outfits can be particularly useful for shoppers looking for a complete outfit without having to coordinate separate tops and bottoms.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Activewear and Swimwear</h4>
    <p>
      For workout wardrobes, Fashion Nova offers women's activewear, while its swimwear collections include bikinis, one-piece swimsuits, cover-ups, and plus-size swim options. The brand also features sale categories for selected activewear and swimwear.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Fashion Nova Plus Size Fashion</h3>
    <p>
      Fashion Nova provides an extensive range of plus-size clothing and dedicated Curve collections. Shoppers can find plus-size dresses, jeans, tops, bottoms, jumpsuits, rompers, matching sets, activewear, swimwear, lingerie, jackets, and other wardrobe essentials.
    </p>
    <p>
      The availability of dedicated plus-size categories makes it possible to browse by product type rather than searching through the entire catalog. If you are shopping for plus-size fashion, checking a Fashion Nova promo code before placing your order can help you make the most of available promotions.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Fashion Nova Men's Clothing</h3>
    <p>
      Fashion Nova also caters to men's fashion with collections covering everyday clothing and trend-led outfits. Its men's selection includes tops, bottoms, jackets, swimwear, tracksuits, accessories, and coordinated looks.
    </p>
    <p>
      Men shopping for casual wardrobe staples, graphic shirts, denim, outerwear, or complete outfits can browse the relevant collections and then check Couponsbit for any applicable Fashion Nova coupon code or promotional offer.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Fashion Nova Kids' Clothing</h3>
    <p>
      Fashion Nova's wider shopping range also includes clothing for kids, with dedicated collections for girls and boys. These include matching sets, tops, jeans, graphic tops, bottoms, jackets, sweaters, dresses, skirts, pants, leggings, shoes, swimwear, and accessories, depending on the collection.
    </p>
    <p>
      For parents shopping for multiple items, checking for a Fashion Nova discount code or sale promotion before checkout can be worthwhile.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Fashion Nova Shoes and Accessories</h3>
    <p>
      Completing an outfit does not stop with clothing. Fashion Nova also offers shoes and accessories, including sneakers, sandals, pumps, wedges, boots, flats, handbags, jewelry, sunglasses, hats, belts, and other accessories.
    </p>
    <p>
      Whether you need shoes for an occasion or accessories to finish an everyday look, check for current Fashion Nova deals before adding the final pieces to your order.
    </p>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Fashion Nova Coupon Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              Using a Fashion Nova coupon code is generally straightforward. If you find a promotional code through CouponsBit, follow these steps:
            </p>
            <div className="space-y-6">
              {[
                "Select the Fashion Nova offer you want to use.",
                "Follow the offer to the Fashion Nova website.",
                "Browse the available products and add your preferred items to your shopping bag.",
                "Review your order before proceeding to payment.",
                "Enter the Fashion Nova coupon code in the applicable promo-code field during checkout.",
                "Apply the code and check whether the promotion has been reflected in your order.",
                "Complete your purchase after confirming that the order details are correct.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold leading-relaxed pt-4">
              If a code does not work, check whether it has expired or whether your cart contains excluded products. You should also verify any minimum purchase requirement or other conditions associated with the promotion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Fashion Nova Shipping and Promotion Considerations</h3>
            <p>
              Shipping promotions can also contribute to overall savings. Fashion Nova's shipping information explains that shipping promotions can have specific order-value requirements and that discounts and coupons may affect whether an order qualifies. Oversize orders can also be excluded from shipping-related promotional offers.
            </p>
            <p>
              For this reason, don't assume that every Fashion Nova voucher or discount automatically includes free shipping. Check the conditions of the individual promotion before completing your order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Fashion Nova Offers?</h3>
            <p>
              Shopping online can involve checking multiple promotions before finding the offer that works best for your order. CouponsBit is designed to make that process easier by bringing together discount codes, coupon codes, promo codes, vouchers, deals, and other savings opportunities in one place.
            </p>
            <p>
              Instead of immediately completing your Fashion Nova order, check CouponsBit first. You may find a Fashion Nova coupon code, sale offer, promotional deal, or other opportunity that could help reduce your overall shopping cost.
            </p>
            <p>
              CouponsBit focuses on helping shoppers make more informed purchasing decisions by highlighting available offers and explaining how they can be used.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Your Next Fashion Nova Order</h3>
            <p>
              Fashion Nova offers a wide range of clothing and accessories for women, men, kids, and plus-size shoppers, with categories spanning dresses, jeans, tops, matching sets, jumpsuits, activewear, swimwear, shoes, accessories, and more.
            </p>
            <p>
              Before completing your next order, take a moment to check CouponsBit for the latest Fashion Nova discount code, Fashion Nova coupon code, Fashion Nova promo code, voucher, sale, or other available offer. A quick check can help you discover a promotion that fits your purchase and makes your Fashion Nova shopping experience more rewarding.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Fashion Nova Coupon Codes</h3>
          {[
            { q: "Does Fashion Nova have coupon codes?", a: "Yes, Fashion Nova uses promotional codes and other offers as part of its marketing and sales campaigns. The availability and terms of individual codes can change, so check the latest offers before placing an order." },
            { q: "Where can I find a Fashion Nova discount code?", a: "You can check CouponsBit for available Fashion Nova discount codes, coupon codes, promo codes, vouchers, and other deals before shopping. Always review the terms of the specific offer before using it." },
            { q: "How do I use a Fashion Nova promo code?", a: "Add your chosen products to your Fashion Nova shopping bag, proceed to checkout, enter the applicable promo code in the designated field, and apply it. Confirm that the discount has been accepted before completing your purchase." },
            { q: "Why isn't my Fashion Nova coupon code working?", a: "A coupon may fail if it has expired, has already reached its usage limit, applies only to selected products, requires a minimum purchase, or cannot be combined with another promotion. Check the terms associated with the specific code." },
            { q: "Can I use a Fashion Nova coupon code on sale items?", a: "It depends on the individual promotion. Some Fashion Nova promotional codes may exclude sale or clearance merchandise. Always read the offer terms before assuming a code can be combined with a sale." },
            { q: "Does Fashion Nova offer sales?", a: "Yes. Fashion Nova maintains sale collections covering numerous product categories, including clothing, jeans, dresses, activewear, swimwear, shoes, and accessories." },
            { q: "Does Fashion Nova sell men's clothing?", a: "Yes. Fashion Nova has men's collections featuring tops, bottoms, jackets, swimwear, tracksuits, accessories, and other fashion items." },
            { q: "Does Fashion Nova offer plus-size clothing?", a: "Yes. Fashion Nova has dedicated plus-size collections covering categories such as dresses, jeans, tops, bottoms, activewear, swimwear, lingerie, jumpsuits, rompers, and matching sets." },
            { q: "Can I return a Fashion Nova purchase?", a: "Fashion Nova's FAQ states that eligible returns are generally accepted within 30 days of delivery, subject to its return conditions. Items generally need to be unworn, unwashed, in original condition, and have their original tags attached. Some product categories are final sale." },
            { q: "How can I find the best Fashion Nova deals?", a: "Start by checking CouponsBit for current Fashion Nova discount codes, coupon codes, promo codes, vouchers, and offers. Then compare those promotions with Fashion Nova's current sale collections to determine which available option best suits your shopping cart." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Fashion Nova Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Dress Deals", "Denim Deals", "Activewear", "Fashion Nova Discount Code", "Men's Apparel", "Accessories", "Shoes", "New Arrivals"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Fashion Nova Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">F</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Fashion Nova: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
