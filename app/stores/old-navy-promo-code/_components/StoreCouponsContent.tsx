"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search, Calendar,Ticket,
  ShoppingBag,
  Shirt,
  Baby,
  Heart,
  Dumbbell,
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
  { id: "d1", label: "NEW", heading: "New Women's Apparel", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Men's Apparel Deals", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "Kids' Collection", sub: "Style Picks" },
  { id: "d4", label: "TOP", heading: "Denim Deals", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "Maternity Picks", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Verified Deals", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Verified Deals", href: "/stores/hm-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://oldnavy.gap.com/";

export default function OldNavyCouponsContent() {
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
              <span className="text-black font-extrabold">Old Navy</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp" alt="Old Navy" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Old Navy</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(58.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover Old Navy deals and offers in Aug 2026. Browse women's apparel offers, men's apparel deals, kids' collection picks and denim deals on Old Navy.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "3.2k", label: "Deals" },
                    { icon: Users, val: "19M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp" alt="Old Navy Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Old Navy Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "WOMEN", title: "New Women's Apparel Offers", desc: "Discover the latest women's apparel offers from Old Navy.", bullets: ["Offers across tops, dresses and outerwear", "New arrivals updated regularly", "Available online and in participating stores"] },
                  { label: "SHOP", value: "MEN", title: "Men's Apparel Deals", desc: "Browse men's apparel deals and offers at Old Navy.", bullets: ["Deals across shirts, pants and outerwear", "Seasonal collections updated regularly", "Available online and in participating stores"] },
                  { label: "SHOP", value: "KIDS", title: "Kids' Collection Picks", desc: "Shop kids' collection picks from Old Navy.", bullets: ["Options across boys' and girls' apparel", "Seasonal styles updated regularly", "Available online and in participating stores"] },
                  { label: "TOP", value: "DENIM", title: "Denim Deals", desc: "Browse denim deals at Old Navy.", bullets: ["Deals across jeans and denim jackets", "Options for various fits and washes", "Available online and in participating stores"] },
                  { label: "BEST", value: "MATERNITY", title: "Maternity Picks", desc: "Explore maternity picks from Old Navy.", bullets: ["Options across tops, bottoms and dresses", "Designed for comfort throughout pregnancy", "Available online and in participating stores"] },
                  { label: "SHOP", value: "ACTIVE", title: "Activewear Offers", desc: "Find Old Navy's activewear offers.", bullets: ["Options across leggings, tops and sets", "Designed for workouts and everyday wear", "Available online and in participating stores"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[10px] sm:text-lg font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Old Navy: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Find an Old Navy Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    An Old Navy promo code can be useful when you are ready to purchase clothing or accessories and want to see whether an additional promotion is available. Old Navy frequently runs different types of promotions, with offers changing according to the season, product category, shopping event, or campaign.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Some promotions are entered as a code during checkout, while others may be applied automatically when the qualifying products are added to your cart. The brand also runs special savings events and programs that can provide another way to reduce the cost of a future purchase.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because promotions can have different conditions, it is always worth checking the details before placing an order. A code might apply only to selected merchandise, require a qualifying purchase, exclude certain products, or be available for a limited period.

                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    CouponsBit gives shoppers a convenient place to check for an Old Navy coupon code or other available offer before making their purchase.
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
                        { icon: Baby, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Heart, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Find the Best Old Navy Deals
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    The best savings opportunity depends on what you are buying, so it helps to approach Old Navy promotions strategically.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before completing your order, check CouponsBit for the latest Old Navy promo code, coupon opportunities, and other available offers. This gives you a chance to compare promotions before committing to your purchase."
      },
      {
        icon: Percent,
        title: "Browse the Sale Section",
        sub: "Don't limit your search to promotional codes. Old Navy maintains dedicated sale and clearance sections, and some products may already be discounted without requiring a code."
      },
      {
        icon: Calendar,
        title: "Shop Around Major US Retail Events",
        sub: "If your purchase is not urgent, major US shopping periods such as Black Friday, Cyber Monday, back-to-school season, Memorial Day, Labor Day, and end-of-season periods can be worth watching. Retailers often use these occasions to introduce limited-time promotions."
      },
      {
        icon: ShoppingBag,
        title: "Check Whether Your Cart Qualifies",
        sub: "A discount can depend on the products in your cart, the amount you spend, or the type of promotion being used. Review the conditions before assuming that a code applies to your entire order."
      },
      {
        icon: Ticket,
        title: "Consider Future Savings",
        sub: "Super Cash can be useful for shoppers who expect to return to Old Navy during a future redemption period. If you receive a Super Cash coupon, keep it available and check when it can be redeemed."
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
          Old Navy Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Old Navy is a well-known American fashion retailer offering affordable clothing, accessories, footwear, and everyday essentials for women, men, kids, toddlers, and babies. Its assortment covers everything from jeans, T-shirts, dresses, and activewear to workwear, swimwear, outerwear, pajamas, shoes, and accessories. The brand is particularly popular with shoppers who want versatile styles for everyday life without having to spend a fortune on their wardrobe.
          </p>
          <p>
            If you are planning to shop at Old Navy, checking for an Old Navy promo code before completing your purchase can be a smart way to look for additional savings. CouponsBit helps shoppers discover available coupon codes, promotional offers, sales, and other opportunities to save before they head to checkout.
          </p>
          <p>
            Whether you are updating your wardrobe with new denim, preparing the kids for a new school year, shopping for seasonal clothing, or simply looking for everyday basics, checking the latest Old Navy offers can help you make your shopping budget go further.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Ways to Save When Shopping at Old Navy</h3>
    <p>
      Old Navy does not rely on just one type of promotion. Its savings strategy includes a mix of everyday deals, seasonal campaigns, category-specific discounts, clearance events, promotional codes, and loyalty-related benefits.
    </p>
    <p>
      For example, shoppers may encounter an offer that reduces the cost of a particular category, while another promotion may provide savings across a wider selection. Old Navy also operates its Super Cash program, through which eligible purchases can earn a coupon for a later qualifying purchase during designated redemption periods. According to Old Navy's current terms, customers can earn Super Cash on qualifying purchases of $25 or more, with redemption levels tied to the amount spent during the redemption period.
    </p>
    <p className="font-medium text-gray-700">
      This means that the best way to save is not always to search for one particular type of code. Instead, compare the promotion available for your cart with the current sale, clearance selection, and any eligible rewards or Super Cash benefits.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Women's Clothing at Old Navy</h3>
    <p>
      Old Navy's women's collection covers a broad range of styles, making it possible to build an everyday wardrobe from one retailer. Shoppers can browse jeans, pants, tops, T-shirts, sweaters, dresses, skirts, shorts, jumpsuits, activewear, swimwear, jackets, coats, pajamas, shoes, and accessories.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Women's Jeans and Denim</h4>
    <p>
      Denim is one of Old Navy's major fashion categories. The brand carries different rises, fits, washes, lengths, and silhouettes, giving shoppers plenty of options for casual and everyday outfits.
    </p>
    <p>
      You can look for straight-leg, wide-leg, bootcut, flare, skinny, boyfriend, loose, and other denim styles, depending on the current assortment. Denim promotions are also frequently featured as individual category sales, so shoppers interested in jeans should check both the current sale section and any available Old Navy discount code before checking out.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tops and T-Shirts</h4>
    <p>
      Old Navy offers everyday tops ranging from basic T-shirts and tanks to blouses, sweaters, sweatshirts, button-down shirts, and fashion-focused styles. These pieces can be paired with the brand's denim, pants, shorts, skirts, or activewear for casual and work-ready outfits.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Dresses and Skirts</h4>
    <p>
      For shoppers looking for one-piece outfits, Old Navy carries casual dresses, occasion styles, maxi dresses, midi dresses, mini dresses, shirt dresses, sweater dresses, and other seasonal designs. Skirts are also available in different lengths and silhouettes.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Activewear</h4>
    <p>
      Old Navy's activewear collection is designed for workouts as well as everyday casual wear. Shoppers can find leggings, athletic tops, sports bras, shorts, sweatshirts, jackets, and other performance-inspired pieces.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Workwear and Everyday Essentials</h4>
    <p>
      Old Navy also caters to shoppers looking for clothing suitable for the workplace or everyday routines. Trousers, blouses, cardigans, button-down shirts, sweaters, polos, and other versatile pieces can be used to create practical outfits for different settings.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Old Navy Men's Clothing</h3>
    <p>
      Old Navy offers a substantial men's selection, including jeans, pants, shorts, T-shirts, shirts, polos, sweaters, hoodies, sweatshirts, jackets, activewear, swimwear, underwear, pajamas, shoes, and accessories.
    </p>
    <p>
      Men looking for wardrobe basics can shop for everyday denim and T-shirts, while seasonal collections provide options for warmer and colder weather. Shoppers can also look for category-specific promotions before purchasing several pieces.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are building a larger order, checking for an Old Navy coupon code or current store promotion before checkout can be particularly worthwhile.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Old Navy Kids' Clothing</h3>
    <p>
      Old Navy is also a popular destination for children's clothing, with collections for girls, boys, toddlers, and babies. The assortment includes everyday basics, jeans, tops, dresses, leggings, shorts, pajamas, jackets, sweaters, activewear, swimwear, shoes, and accessories.
    </p>
    <p>
      Parents can also find collections designed around specific shopping occasions, including back-to-school shopping and seasonal wardrobe changes.
    </p>
    <p>
      Old Navy regularly promotes kids' and baby merchandise through category-specific deals, making it useful to compare the current sale section with any available Old Navy promo code before completing a larger family order.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Old Navy Baby and Toddler Clothing</h3>
    <p>
      For babies and toddlers, Old Navy carries clothing designed around everyday comfort and practical dressing. Depending on the current collection, shoppers can find bodysuits, sleepers, dresses, tops, bottoms, pajamas, outerwear, accessories, and coordinated outfits.
    </p>
    <p>
      Because children quickly grow out of their clothes, promotions on basics and multipiece purchases can be especially useful for parents shopping for several items at once.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Old Navy Shoes and Accessories</h3>
    <p>
      Old Navy's assortment extends beyond clothing. Shoppers can also find shoes and accessories to complete their outfits.
    </p>
    <p>
      Depending on the season, the selection can include sneakers, sandals, flats, boots, slippers, bags, belts, socks, hats, sunglasses, jewelry, and other accessories.
    </p>
    <p>
      These products can sometimes appear in separate promotions or sale collections, so checking the latest offers before purchasing can uncover savings that may not be obvious from the main clothing categories.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Old Navy Sale: What Types of Sales Can Shoppers Expect?</h3>
    <p>
      If you shop with Old Navy regularly, you will notice that the retailer uses several different types of sales throughout the year. These promotions are designed around both shopping seasons and specific product categories.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Seasonal Sales</h5>
        <p className="text-sm">Promotions around spring, summer, fall, winter, swimwear, and outerwear transitions.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Back-to-School Sales</h5>
        <p className="text-sm">Dedicated event savings on uniforms, basic tees, denim, activewear, and backpacks.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Holiday & Black Friday</h5>
        <p className="text-sm">Sitewide doorbusters, limited-time single-day offers, and gift promotions.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Clearance Sales</h5>
        <p className="text-sm">Deep markdowns on end-of-season inventory, often stackable with Super Cash.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Category-Specific Sales</h5>
        <p className="text-sm">Targeted single-category discounts focusing purely on jeans, activewear, or kids' tees.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
        <h5 className="font-bold text-gray-900 mb-1">Flash & Limited-Time Deals</h5>
        <p className="text-sm">Urgency-driven short window sales, such as "Today Only" website promotions.</p>
      </div>
    </div>
  </div>

  <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-3">
    <h4 className="text-lg font-black text-[#056bfa]">Understanding Old Navy Super Cash</h4>
    <p className="text-sm text-gray-700 leading-relaxed font-medium">
      Super Cash allows eligible shoppers to earn coupons during specific periods (typically $10 off for every $25 spent). Rather than providing an instant rebate, these earned vouchers are saved for a designated future redemption period. 
    </p>
    <p className="text-sm text-gray-700 leading-relaxed font-medium">
      Keep in mind that Super Cash generally cannot be combined with standard promotional discount codes, though rewards program members (such as Encore cardholders) may combine eligible points with Super Cash vouchers.
    </p>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Old Navy Promo Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              Using an Old Navy promo code at checkout is generally simple:
            </p>
            <div className="space-y-6">
              {[
                "Find the Old Navy offer you want to use.",
                "Visit the Old Navy website through the relevant offer.",
                "Choose your clothing, accessories, or other products.",
                "Add the items to your shopping bag.",
                "Proceed to checkout.",
                "Enter the applicable promotional code in the designated field.",
                "Apply the code and check that the expected offer has been reflected.",
                "Review your order and complete the purchase.",
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
              If the promotion does not apply, check the offer's expiration date and eligibility requirements. Some codes may exclude specific merchandise or require a minimum qualifying purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Old Navy Offers?</h3>
            <p>
              CouponsBit is designed to help shoppers find savings without making the shopping process complicated. Instead of visiting Old Navy and immediately checking out, you can first look for available promotions and determine whether there is an opportunity to save.
            </p>
            <p>
              When searching for an Old Navy promo code, you may also find that the best option is not necessarily a traditional percentage-off coupon. Depending on your purchase, a sale, clearance event, category promotion, limited-time offer, or Super Cash opportunity may be more relevant.
            </p>
            <p>
              CouponsBit brings these possibilities together so shoppers can make a more informed decision before completing their order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Old Navy Shopping Trip</h3>
            <p>
              Old Navy gives shoppers plenty of ways to refresh their wardrobes, from everyday jeans and T-shirts to dresses, activewear, workwear, children's clothing, baby essentials, shoes, and accessories. Its promotional calendar also extends beyond standard coupon codes, with seasonal campaigns, clearance events, category-specific deals, holiday promotions, back-to-school savings, limited-time offers, and Super Cash.
            </p>
            <p>
              Before you complete your next order, check CouponsBit for the latest Old Navy promo code and compare it with the other savings opportunities available for your purchase. Taking a moment to check current offers can help you find a promotion that fits your cart and get more value from your Old Navy shopping experience.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Old Navy Promo Codes</h3>
          {[
            { q: "Does Old Navy offer promo codes?", a: "Yes. Old Navy regularly runs promotional campaigns that can include codes, category discounts, limited-time offers, and other savings opportunities. The exact promotions available can change frequently." },
            { q: "Where can I find an Old Navy promo code?", a: "You can check CouponsBit for available Old Navy promotional offers before shopping. It is also useful to compare a code with Old Navy's current sale and clearance selections." },
            { q: "How do I use an Old Navy coupon code?", a: "Add your selected products to your shopping bag, proceed to checkout, enter the applicable coupon code in the promotion field, and apply it. Make sure the offer has been accepted before completing your purchase." },
            { q: "Why is my Old Navy promo code not working?", a: "A code may not work because it has expired, applies only to certain products, requires a minimum purchase, has other eligibility restrictions, or cannot be combined with another promotion. Check the specific terms of the offer before trying again." },
            { q: "Can I use an Old Navy promo code on sale items?", a: "It depends on the individual promotion. Some Old Navy offers can apply to sale merchandise, while others have exclusions. Always read the terms of the specific offer before combining a code with a sale item." },
            { q: "What is Old Navy Super Cash?", a: "Super Cash is an Old Navy savings program in which eligible purchases can earn a coupon for use during a later designated redemption period. Old Navy's current terms explain that qualifying purchases can earn Super Cash and that redemption discounts depend on the qualifying purchase amount." },
            { q: "Can I combine Super Cash with another Old Navy coupon?", a: "Generally, no. Old Navy states that Super Cash cannot be redeemed with other coupons or promotions. However, eligible Encore members may redeem reward points in addition to Super Cash savings." },
            { q: "Does Old Navy have clearance sales?", a: "Yes. Old Navy maintains clearance merchandise alongside its regular sale offerings. Clearance can be particularly useful for shoppers looking for end-of-season styles or products being phased out." },
            { q: "When does Old Navy have its biggest sales?", a: "Old Navy promotions vary throughout the year. Major US shopping periods such as Black Friday, Cyber Monday, back-to-school season, holiday shopping, and end-of-season periods are worth watching, but Old Navy also runs shorter category-specific and limited-time promotions throughout the year." },
            { q: "Does Old Navy have sales for kids?", a: "Yes. Old Navy regularly promotes children's and baby merchandise through sales and category-specific deals. Its current shopping pages feature dedicated offers for kids and baby products." },
            { q: "How can I save more when shopping at Old Navy?", a: "Start by checking CouponsBit for an available Old Navy promo code, then compare it with the retailer's current sale, clearance, category promotions, and any Super Cash or other eligible savings. The best option will depend on what you are purchasing and the terms of each offer." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Old Navy Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Denim Deals", "Everyday Basics", "Activewear", "Old Navy Promo Code", "Kids & Baby", "Super Cash", "Clearance", "Seasonal Sales"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Old Navy Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">O</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Old Navy: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
