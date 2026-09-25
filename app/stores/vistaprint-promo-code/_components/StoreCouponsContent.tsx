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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Truck,
  Building2,
  CreditCard,
  Heart,
  Megaphone,
  Package,
  Paintbrush,
  Shirt,
  Sticker,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Shutterfly", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1788783181/shutterfly-logo_wvvske.webp", dealText: "Up To 50% OFF", href: "/stores/shutterfly-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
];

const STORE_URL = "https://www.vistaprint.com";

export default function VistaprintContent() {
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
              <span className="text-black font-extrabold">Vistaprint</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/vista-logo_xyfgde.webp" alt="Vistaprint" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Vistaprint Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(2,100 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Vistaprint offers custom-printed business cards, marketing materials, apparel, and design services for individuals and small businesses.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "35K+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/vista-logo_xyfgde.webp" alt="Vistaprint Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Vistaprint Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "New", title: "Vistaprint – New Customer Offer", desc: "Check for savings available to new Vistaprint customers on their first order.", bullets: ["Browse available products before ordering.", "Enter the code at checkout if prompted.", "Confirm the discount before completing your order."] },
                  { label: "SAVE", value: "%", title: "Vistaprint – Percentage Off Sitewide", desc: "Look for a Vistaprint promo offering a percentage off eligible products.", bullets: ["Applies to select products.", "Enter the code at checkout if prompted.", "Confirm the discount before completing your order."] },
                  { label: "FREE", value: "Shipping", title: "Vistaprint – Free Shipping Offer", desc: "Check for free shipping on qualifying Vistaprint orders.", bullets: ["May require a minimum order amount.", "Availability varies by product.", "Check the offer terms at checkout."] },
                  { label: "SAVE", value: "Cards", title: "Vistaprint – Business Card Deal", desc: "Look for discounted pricing on custom business cards.", bullets: ["Pricing varies by quantity and design.", "Check the offer terms before ordering.", "Confirm the discount before checkout."] },
                  { label: "SAVE", value: "Bundle", title: "Vistaprint – Marketing Bundle Discount", desc: "Check for savings on bundled marketing material orders.", bullets: ["Bundling may offer better per-item value.", "Availability varies by product mix.", "Confirm pricing before ordering."] },
                  { label: "SAVE", value: "Seasonal", title: "Vistaprint – Seasonal Clearance Sale", desc: "Check for seasonal clearance pricing on select products.", bullets: ["Availability varies by season.", "Items may be limited in stock.", "Check the website regularly for new offers."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Vistaprint: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="nofollow noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Vistaprint?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    VistaPrint is an online custom printing and design platform that helps individuals, entrepreneurs, small businesses, organizations, and event planners create personalized products.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform started with a strong focus on printed business materials, but its range has expanded considerably. Today, customers can create everything from business cards and flyers to signs, banners, clothing, packaging, promotional merchandise, invitations, stationery, photo products, and other personalized items.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    VistaPrint also offers design and business services alongside its physical products. Customers can work with professional designers, use tools such as its AI Logomaker, create social media assets, and explore other services designed to help businesses build and promote their brands.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    That combination makes VistaPrint useful whether you already have a finished design or need help turning an idea into something ready to print.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Tag, name: "Business Cards", count: "40+", color: "text-blue-500", href: "/categories/home-lifestyle" },
                        { icon: Percent, name: "Marketing Materials", count: "35+", color: "text-purple-500", href: "/categories/home-lifestyle" },
                        { icon: Truck, name: "Free Shipping Deals", count: "20+", color: "text-pink-500", href: "/categories/home-lifestyle" },
                        { icon: Gift, name: "Custom Apparel", count: "15+", color: "text-teal-500", href: "/categories/home-lifestyle" },
                        { icon: Calendar, name: "Seasonal Prints", count: "10+", color: "text-orange-500", href: "/categories/home-lifestyle" },
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
    Why Is My VistaPrint Promo Code Not Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A code not applying does not necessarily mean that the website is malfunctioning.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      VistaPrint promotions can have restrictions, including product exclusions, minimum order requirements, expiration dates, or customer eligibility conditions.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Before trying another code, check:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the promo code has expired</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code was entered correctly</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether your products are included</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether a minimum order requirement applies</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the promotion is limited to new customers</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code can be combined with another offer</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the promotion applies to your selected shipping option</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the terms have changed since the code was published</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If one code does not work, compare it with the current offers shown by VistaPrint and CouponsBit.
    </p>
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          VistaPrint Promo Code, Coupon Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Need business cards for a new venture? Planning an upcoming event? Want branded T-shirts, custom packaging, stickers, signs, or personalized gifts? VistaPrint makes it possible to turn your ideas into professionally printed products without having to manage the entire design and printing process separately.
          </p>
          <p>
            Before placing your order, checking for a VistaPrint promo code can be a smart part of the process. VistaPrint regularly features promotional offers across categories, including business cards, apparel, invitations, marketing materials, promotional products, and more. Its official offers page also lists current codes and category-specific promotions, so the available deal can vary depending on what you are ordering.
          </p>
          <p>
            If you are already planning a larger print order, browse the latest VistaPrint coupons and offers on CouponsBit before heading to checkout.
          </p>

          <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">
      
      {/* Hero / Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
          VistaPrint Offers &amp; Guide
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Find a VistaPrint Promo Code
        </h1>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
          <p>
            Looking for a VistaPrint promo code before ordering? Start by checking the latest offers available for the products you actually need.
          </p>
          <p>
            VistaPrint frequently publishes promotional codes directly on its offers page, along with category-specific discounts and shipping promotions. Current offers can have different eligibility requirements, expiration dates, and product exclusions, so it is important to check the terms before applying a code.
          </p>
          <p>
            CouponsBit can also be a convenient starting point when you want to check whether a VistaPrint coupon, promo code, discount code, or other deal is available before checkout.
          </p>
          <p>
            Rather than assuming that the first offer you find is applicable, compare the available promotion with the products in your cart. A code designed for apparel may not apply to business cards, while an invitation promotion may have completely different conditions.
          </p>
        </div>
      </section>

      {/* Coupons, Deals & Offers */}
      <section>
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
              <Tag className="w-6 h-6" /> VistaPrint Coupons, Deals &amp; Offers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              VistaPrint uses several types of promotions throughout the year. Some are percentage-based discounts, while others apply to particular product categories or order conditions.
            </p>
            <p>
              The brand's official offers page currently lists promotions covering areas such as first purchases, invitations and announcements, apparel, promotional products, and shipping. VistaPrint also states that its offers page is updated with new deals, making it worth checking when you are ready to order.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">Depending on the promotion, you may come across:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "VistaPrint promo codes",
                  "Category-specific coupons",
                  "Percentage-off offers",
                  "Spend-based discounts",
                  "New-customer promotions",
                  "Product-specific deals",
                  "Shipping promotions",
                  "Seasonal offers"
                ].map((item, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <p>
              Because promotions change, always check the current terms rather than relying on an old coupon description.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Primary Products Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#056bfa]">Popular Printing Categories</h2>
          <p className="text-gray-600">Explore essential print and marketing materials for your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business Cards */}
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#056bfa]" /> Business Cards for a Professional First Impression
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                Business cards remain one of VistaPrint's best-known products. Whether you are launching a business, attending networking events, meeting clients, or building a personal brand, a well-designed card gives people something tangible to remember you by.
              </p>
              <p>
                VistaPrint offers different business card styles, papers, finishes, shapes, and design options, allowing customers to create cards that match their brand identity.
              </p>
              <p>
                You can start with your own artwork or choose from professionally designed templates and customize the details. VistaPrint's current bestseller collection includes several business card formats, including standard, rounded-corner, glossy, matte, embossed, foil-accent, and other options.
              </p>
              <p>
                If business cards are on your shopping list, check for a VistaPrint promo code before completing the order.
              </p>
            </CardContent>
          </Card>

          {/* Marketing Materials */}
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-[#056bfa]" /> Marketing Materials for Small Businesses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                A business often needs more than a business card to create a consistent customer experience.
              </p>
              <p>
                VistaPrint offers a variety of marketing materials, including postcards, flyers, brochures, rack cards, presentation folders, and other printed materials. These products can be used for direct marketing, local promotions, event handouts, customer communications, and promotional campaigns.
              </p>
              <p>
                For a new business, these materials can also help create a consistent visual identity across different customer touchpoints.
              </p>
            </CardContent>
          </Card>

          {/* Signs, Banners & Posters */}
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#056bfa]" /> Signs, Banners &amp; Posters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                If you need something designed to be seen from a distance, VistaPrint's signs, banners, and posters can help put your message in front of customers.
              </p>
              <p>
                These products can work for storefronts, events, trade shows, promotional campaigns, open houses, community activities, and temporary announcements.
              </p>
              <p>
                VistaPrint offers options such as vinyl banners, retractable banners, posters, yard signs, and other signage products.
              </p>
              <p>
                When preparing for an event or business launch, consider checking whether a current VistaPrint discount code applies to the products you are ordering.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clothing, Merchandise & Packaging */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Custom Clothing & Bags */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Shirt className="w-5 h-5" /> Custom Clothing &amp; Bags
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Custom apparel gives businesses, teams, organizations, and individuals another way to display a logo, message, illustration, or design.
            </p>
            <p>
              VistaPrint offers customizable T-shirts, hoodies, hats, jackets, bags, and other apparel products. The platform also features products from recognizable brands, including Nike, Carhartt, New Era, The North Face, and others in its branded promotional collection.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">Custom clothing can be useful for:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Employee uniforms",
                  "Team apparel",
                  "Business merchandise",
                  "Events",
                  "Fundraisers",
                  "Clubs and organizations",
                  "Promotional campaigns",
                  "Personal projects"
                ].map((item, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <p>
              If you are ordering multiple pieces, check for a current apparel offer or VistaPrint coupon code before submitting your order.
            </p>
          </CardContent>
        </Card>

        {/* Promotional Products */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Gift className="w-5 h-5" /> Promotional Products &amp; Branded Merchandise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Promotional products are another major part of VistaPrint's catalog. Businesses can customize everyday products with logos, names, messages, and other branding elements.
            </p>
            <p>
              The selection includes drinkware, pens, notebooks, bags, technology accessories, clothing, hats, snacks, and other branded merchandise. VistaPrint also highlights promotional products for trade shows, employee welcome kits, customer gifts, loyalty campaigns, and other marketing activities.
            </p>
            <p>
              One useful feature is that VistaPrint says its promotional products are available with no minimum order quantity on eligible products, while samples are also available for selected items.
            </p>
            <p>
              This gives smaller businesses more flexibility when they do not need to place a large bulk order.
            </p>
          </CardContent>
        </Card>

        {/* Custom Packaging */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Package className="w-5 h-5" /> Custom Packaging for Your Brand
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Packaging is part of the customer experience, especially for e-commerce businesses and product-based brands.
            </p>
            <p>
              VistaPrint offers customized packaging products that can help businesses add their branding to mailers, boxes, bags, labels, tape, and other packaging materials.
            </p>
            <p>
              For a growing online store, branded packaging can create a more consistent look from the moment an order arrives. It can also help small businesses present their products more professionally without having to source every packaging component from a different supplier.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stickers, Personal Stationery & Gifts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stickers & Labels */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Sticker className="w-5 h-5" /> Stickers &amp; Labels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Custom stickers and labels can serve both practical and promotional purposes.
            </p>
            <p>
              You can use them on product packaging, shipping boxes, retail products, notebooks, promotional materials, laptops, bottles, event giveaways, and more.
            </p>
            <p>
              VistaPrint offers different sticker formats, including die-cut stickers and sheet stickers. Its current bestseller selection also includes multiple sticker and label products.
            </p>
            <p>
              For small brands, stickers can be an easy way to extend branding across packaging and customer touchpoints.
            </p>
          </CardContent>
        </Card>

        {/* Invitations, Cards & Stationery */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Heart className="w-5 h-5" /> Invitations, Cards &amp; Stationery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              VistaPrint isn't limited to business-related printing.
            </p>
            <p>
              The platform also offers invitations, announcements, save-the-date cards, RSVP cards, wedding stationery, thank-you cards, note cards, and other personalized products.
            </p>
            <p>
              This makes VistaPrint useful for weddings, birthdays, celebrations, family occasions, holidays, and other events where personalized stationery can make an invitation or announcement feel more distinctive.
            </p>
            <p>
              The brand's current offers page regularly features promotions for invitations and announcements, although eligibility and promotion dates can change.
            </p>
          </CardContent>
        </Card>

        {/* Personalized Gifts */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Personalized Gifts &amp; Home Products
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              VistaPrint also extends into personalized products for the home and gifting occasions.
            </p>
            <p>
              Depending on the current catalog, customers can explore personalized photo products, wall art, calendars, mugs, cards, and other items that can be customized with photographs, artwork, names, or messages.
            </p>
            <p>
              These products can work well for birthdays, weddings, anniversaries, holidays, family celebrations, and thoughtful personalized gifts.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Services & New Businesses Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Paintbrush className="w-5 h-5" /> VistaPrint Design Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Not everyone has a finished design ready to upload. VistaPrint offers professional design services for customers who want additional help.
            </p>
            <p>
              Its design service covers projects such as business cards, flyers, brochures, banners, packaging, labels, clothing, wedding stationery, and other printed products. Customers can submit a brief, review the proposed design, provide feedback, and approve the final version.
            </p>
            <p>
              VistaPrint also offers an AI Logomaker for customers who want to create a logo themselves, along with other business and design tools.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
              <Building2 className="w-5 h-5" /> VistaPrint for New Businesses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Starting a business often means creating several branded items at the same time.
            </p>
            <p>
              You might need a logo, business cards, packaging, labels, social media graphics, signage, promotional merchandise, and marketing materials before you even make your first major sale.
            </p>
            <p>
              VistaPrint brings many of these needs together under one platform. Its business-focused services include printing, design assistance, promotional products, packaging, marketing materials, logo creation, and additional tools for growing businesses.
            </p>
            <p>
              That makes it particularly relevant for entrepreneurs who want to build a consistent brand identity across physical and digital touchpoints.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* When to Check Section */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Calendar className="w-6 h-6" /> When to Check for VistaPrint Offers
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            You do not necessarily need to wait for a major shopping holiday to look for a VistaPrint deal.
          </p>
          <p>
            VistaPrint regularly runs product-specific and seasonal promotions, and its official offers page encourages shoppers to check back for new deals.
          </p>
          <p>
            That said, promotional printing can become especially relevant around certain occasions.
          </p>
          <p>
            Businesses may need new materials before the holiday shopping season, while wedding stationery becomes important around wedding-planning periods. Schools, teams, organizations, and event planners may also order custom products around the start of a new season or before major events.
          </p>
          <p>
            The best time to look for a promotion is therefore usually before you place the order, rather than assuming that a particular holiday will automatically bring the offer you need.
          </p>
        </div>
      </section>

    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a VistaPrint Promo Code
              </h3>
              <p>
                Once you find an eligible VistaPrint promo code, applying it during checkout is generally straightforward.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>Visit VistaPrint and select the products you want.</li>
                <li>Customize your design and choose the available product options.</li>
                <li>Add the finished product to your cart.</li>
                <li>Review your order carefully, including quantities and shipping details.</li>
                <li>Look for the field where a promotional or coupon code can be entered.</li>
                <li>Enter your VistaPrint promo code and apply it.</li>
                <li>Confirm that the promotion has been reflected in your order before completing checkout.</li>
              </ul>
              <p>
                Always read the promotion's terms first. Some codes apply only to specific categories, order values, customer types, or dates.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Find Better VistaPrint Deals
              </h3>
              <p>
                A little preparation can make it easier to find an appropriate offer.
              </p>
              <p>
                First, decide what you actually need. If you are ordering business cards, there is little benefit in focusing on an apparel promotion. Likewise, if you need branded merchandise for an event, look specifically at promotional-product offers.
              </p>
              <p>
                Next, compare the current VistaPrint sale with any available VistaPrint promo code. Sometimes a category promotion may be more relevant than a general code.
              </p>
              <p>
                It is also worth checking shipping conditions. VistaPrint currently advertises free economy shipping on qualifying U.S. orders of $100 or more before taxes and after discounts, excluding Alaska, Hawaii, and Puerto Rico. Shipping terms can change, so verify the current conditions before ordering.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for VistaPrint?
              </h3>
              <p>
                A custom-printing order can involve multiple products, especially when you are preparing for a business launch, wedding, event, trade show, or seasonal campaign.
              </p>
              <p>
                That is why checking for a VistaPrint promo code before checkout can be useful. CouponsBit gives shoppers a place to check available coupon codes, discount offers, deals, and promotional opportunities before visiting the merchant.
              </p>
              <p>
                Instead of committing to the first offer you see, compare the available promotion with your specific products and order requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Create Something That Looks Like Your Brand
              </h3>
              <p>
                From a simple stack of business cards to an entire collection of branded packaging, apparel, promotional merchandise, signs, and marketing materials, VistaPrint gives businesses and individuals plenty of ways to turn an idea into something tangible.
              </p>
              <p>
                Whether you are launching a business, preparing for an event, refreshing your branding, or creating personalized products for a special occasion, start by exploring the products you need and then check for a current VistaPrint promo code.
              </p>
              <p>
                Before checkout, compare the latest VistaPrint coupons, deals, and offers on CouponsBit and make sure the promotion you choose matches the products and terms of your order.
              </p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About VistaPrint Promo Codes
          </h3>
          {[
            {
              q: "Does VistaPrint offer promo codes?",
              a: "Yes. VistaPrint regularly offers promotional codes and other discounts. Its official offers page currently lists multiple codes and category-specific promotions, with individual terms and expiration dates.",
            },
            {
              q: "Can I use a VistaPrint promo code on any product?",
              a: "Not necessarily. Promo codes can have product, category, customer, order-value, or date restrictions. Always check the terms associated with the specific offer.",
            },
            {
              q: "Does VistaPrint offer discounts on business cards?",
              a: "VistaPrint regularly features promotions on business cards and other marketing materials. Available offers can change, so check the current deals before placing an order.",
            },
            {
              q: "Can I get custom promotional products from VistaPrint?",
              a: "Yes. VistaPrint offers customizable promotional merchandise including drinkware, writing products, bags, clothing, technology products, hats, and other branded items.",
            },
            {
              q: "Does VistaPrint offer custom apparel?",
              a: "Yes. You can customize products such as T-shirts, hoodies, hats, jackets, and bags, including selected products from well-known apparel brands.",
            },
            {
              q: "Does VistaPrint offer design services?",
              a: "Yes. VistaPrint offers professional design services across areas such as business cards, packaging, marketing materials, signage, clothing, stationery, and other projects.",
            },
            {
              q: "Can I order personalized invitations from VistaPrint?",
              a: "Yes. VistaPrint offers invitations, announcements, save-the-date cards, RSVP cards, wedding stationery, and other personalized event products.",
            },
            {
              q: "Does VistaPrint have offers for new customers?",
              a: "VistaPrint currently advertises a first-purchase promotion on its offers page. Because eligibility and expiration dates can change, check the current offer before ordering.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-60 pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular VistaPrint Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "VistaPrint Promo Code",
              "Business Cards Discount",
              "Custom Apparel Offer",
              "Free Shipping Deal",
              "Custom Packaging",
              "VistaPrint New Customer",
              "CouponsBit VistaPrint",
              "Marketing Materials",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top VistaPrint Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FIRST PURCHASE OFFER",
                sub: "Exclusive Discount For New Customers",
              },
              {
                heading: "FREE ECONOMY SHIPPING",
                sub: "On Qualifying U.S. Orders $100+",
              },
              {
                heading: "BUSINESS CARDS DEALS",
                sub: "Save Big On Custom Business Card Printing",
              },
              {
                heading: "CUSTOM APPAREL & MERCH",
                sub: "Promotional Discounts On T-Shirts & Bags",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="https://www.vistaprint.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
                >
                  Get Deal
                </a>
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
