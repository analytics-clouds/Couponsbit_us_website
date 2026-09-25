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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Zap,
  Gift,
  ShoppingBag,
  Truck,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Electric Scooter Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Accessory Bundle Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", dealText: "Up to 50% OFF", href: "/stores/reolink-discount-code" },
  { name: "Obsbot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg", dealText: "From $75", href: "/stores/obsbot-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "SignalRing", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/singnalring_i9epcf.jpg", dealText: "Starting At $399", href: "/stores/signalring-discount-code" },
  { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up to 69% OFF", href: "/stores/hp-discount-code" },
];

const STORE_URL = "https://isinwheel.pxf.io/c/4303217/1289264/15800?subId1=1015";

export default function IsinwheelCouponsContent() {
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
              <span className="text-black font-extrabold">iSinwheel</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789640583/isinwheel_logo_wwsdeo.webp" alt="iSinwheel" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">iSinwheel Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(5.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest iSinwheel Discount Code and iSinwheel Promo Code for September 2026 to save up to 50% OFF during the Autumn Ride Sale, get £120 OFF orders over £900, £50 OFF orders over £500, and £20 OFF orders over £300. Shop electric scooters, e-bikes, accessories, and commuter models at verified discounted prices.
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
                    { icon: Tag, val: "14", label: "Offers" },
                    { icon: Percent, val: "80+", label: "Deals" },
                    { icon: Users, val: "300K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789732193/47_arp1qd.webp" alt="iSinwheel Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">iSinwheel Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "£50 OFF", title: "iSinwheel Discount Code – GT4 S Save £50", desc: "Get the GT4 S for £599.99, reduced from £649.99.", bullets: ["Save £50 with the qualifying offer.", "Features a 50-mile stated range and 12-inch off-road tyres.", "A strong option for riders comparing an isinwheel s9 pro."] },
                  { label: "SAVE", value: "£50 OFF", title: "iSinwheel Discount Code – S-NOVA PRO Save £50", desc: "The S-NOVA PRO is now £389.99, down from £439.99.", bullets: ["Save £50 on the autumn offer.", "Includes a 1000W motor and up to 38 miles of stated range.", "A practical isin wheel scooter option for urban rides."] },
                  { label: "ONLY", value: "£649.99", title: "iSinwheel Discount Code – H7 PRO £649.99", desc: "The H7 PRO is available for £649.99.", bullets: ["It features a powerful 1200W motor.", "Comes with 16\" x 4.0\" wide pneumatic tyres and dual suspension.", "Check the latest offer on an isinwheel electric scooter before checkout."] },
                  { label: "ONLY", value: "£829.99", title: "iSinwheel Discount Code – GT4 DUAL £829.99", desc: "The GT4 DUAL is listed at £829.99, down from £1,299.", bullets: ["It features a 2400W dual-motor setup.", "Includes 12-inch tubeless off-road tyres.", "Check for an isinwheel s9pro electric scooter deal before buying."] },
                  { label: "ONLY", value: "£499.99", title: "iSinwheel Discount Code – GT1 DUAL £499.99", desc: "Get the GT1 DUAL for £499.99, reduced from £699.", bullets: ["It features a dual-motor off-road setup.", "Includes dual suspension and off-road tyres.", "Check the latest isinwheel s9max offers before checkout."] },
                  { label: "ONLY", value: "£1,199.99", title: "iSinwheel Discount Code – Dremax E-Bike £1,199.99", desc: "The Dremax Commuter E-Bike is now £1,199.99.", bullets: ["It includes a 720Wh Samsung battery.", "Offers up to 93 miles of stated range.", "Check for savings when shopping for an isinwheel e-bike."] },
                  { label: "ONLY", value: "£639.99", title: "iSinwheel Discount Code – M50 Electric Bike £639.99", desc: "The M50 Full Suspension Electric Bike costs £639.99.", bullets: ["Its previous listed price was £799.00.", "Features a 27.5\" full-suspension setup.", "Check for an isinwheel discount code before ordering."] },
                  { label: "ONLY", value: "£498.99", title: "iSinwheel Discount Code – EB3 Commuter Bike £498.99", desc: "The EB3 Commuter Electric Bike is £498.99.", bullets: ["It was previously listed at £709.99.", "Designed for practical everyday commuting.", "Look for an isinwheel discount code before checkout."] },
                  { label: "ONLY", value: "£39.99", title: "iSinwheel Discount Code – Cable Lock £39.99", desc: "The Cable Lock is available for £39.99.", bullets: ["Designed for electric scooters and bicycles.", "A useful accessory for everyday riders.", "Check for an isinwheel scooter charger or accessory offer when shopping."] },
                  { label: "ONLY", value: "£23.99", title: "iSinwheel Discount Code – 120cm Chain Lock £23.99", desc: "The 120cm Chain Lock is listed at £23.99.", bullets: ["Compatible with e-bikes and scooters.", "Designed as an additional security accessory.", "Check the latest isinwheel skateboard and accessory deals."] },
                  { label: "SAVE", value: "£20 OFF", title: "iSinwheel Promo Code – £20 Off £300+", desc: "Spend £300 or more during the Autumn Ride Sale.", bullets: ["Save £20 on qualifying purchases.", "Apply the available iSinwheel promo code at checkout.", "Useful for shoppers considering an isinwheel s8 electric scooter."] },
                  { label: "SAVE", value: "£50 OFF", title: "iSinwheel Promo Code – £50 Off £500+", desc: "Spend £500 or more to save £50.", bullets: ["The offer is part of the Autumn Ride Sale.", "Check the available iSinwheel promo code before payment.", "Compare models such as the isinwheel i11 electric scooter."] },
                  { label: "SAVE", value: "£120 OFF", title: "iSinwheel Promo Code – £120 Off £900+", desc: "Spend £900 or more and save £120.", bullets: ["Available as part of the Autumn Ride Sale.", "Apply an iSinwheel promo code where applicable.", "Consider options such as the isinwheel i9 electric scooter or isinwheel i9 pro e scooter."] },
                  { label: "SALE", value: "UP TO 50%", title: "iSinwheel Promo Code – Autumn Ride Sale Up to 50% Off", desc: "Selected products are featured in the Autumn Ride Sale.", bullets: ["The promotion advertises savings of up to 50% off.", "Check for an iSinwheel promo code before checkout.", "Popular searches include isinwheel v8 electric skateboard, isinwheel v8, isinwheel skateboard, isinwheel charger, isinwheel x1, isinwheel x1 review, isinwheel s9, isinwheel s9max electric scooter and isinwheel mini electric scooter."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop iSinwheel: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is iSinwheel?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    isinwheel is an international personal mobility brand founded in 2018 with a focus on intelligent short-distance transportation. Its brand philosophy, “Move Smart, Move Fun,” centres on making everyday mobility more convenient, technology-driven, and enjoyable. The company offers electric scooters, electric bikes, and other smart mobility products for different types of riders.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The official isinwheel UK website serves customers in the United Kingdom and offers products across categories including adult electric scooters, off-road scooters, kids' scooters, commuter e-bikes, mountain e-bikes, mobility products, and riding accessories.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand has developed several generations of electric mobility products since launching its first UK scooter models in 2019. It introduced electric bikes in 2023, while more recent scooter launches include models such as the S10MAX and GT4.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Zap, name: "Commuter Scooters", count: "15+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Off-Road Scooters", count: "10+", color: "text-purple-500", href: "/categories/electronics" },
                        { icon: Gift, name: "Kids' Scooters", count: "8+", color: "text-pink-500", href: "/categories/electronics" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/electronics" },
                        { icon: Search, name: "New Arrivals", count: "6+", color: "text-orange-500", href: "/categories/electronics" },
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
    Why Isn't My isinwheel Discount Code Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If your code isn't being accepted, don't immediately assume that the code itself is invalid.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      There could be several reasons why an isinwheel discount code doesn't apply to your order:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code has expired.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotion applies only to selected products.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Your chosen item is excluded.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>A minimum purchase requirement applies.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code is limited to a particular customer group.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotion cannot be combined with another offer.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code was entered incorrectly.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The offer is available only during a specified promotional period.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Start by checking the terms associated with the offer. If you're shopping during a major sale, also compare the promotional price or bundle offer with the code before deciding which deal applies to your order.
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
          isinwheel Discount Code, Promo Code & Discount Offers UK
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["GT4 S Off-Road Scooter", "£50 OFF (£599.99)", "All Users", "Was £649.99; features 50-mile range and 12-inch tyres", "GT4 S Electric Scooter"],
        ["S-NOVA PRO Urban Scooter", "£50 OFF (£389.99)", "All Users", "Was £439.99; includes 1000W motor and up to 38-mile range", "S-NOVA PRO Electric Scooter"],
        ["H7 PRO Electric Scooter", "£649.99", "All Users", "Features 1200W motor, 16\" x 4.0\" tyres, and dual suspension", "H7 PRO Electric Scooter"],
        ["GT4 DUAL Off-Road Scooter", "£829.99", "All Users", "Reduced from £1,299; features 2400W dual-motor setup", "GT4 DUAL Electric Scooter"],
        ["GT1 DUAL Off-Road Scooter", "£499.99", "All Users", "Reduced from £699; dual-motor setup with dual suspension", "GT1 DUAL Electric Scooter"],
        ["Dremax Commuter E-Bike", "£1,199.99", "All Users", "Includes 720Wh Samsung battery with up to 93-mile range", "Dremax Commuter E-Bike"],
        ["M50 Full Suspension E-Bike", "£639.99", "All Users", "Was £799.00; features 27.5\" full-suspension setup", "M50 Electric Bike"],
        ["EB3 Commuter Electric Bike", "£498.99", "All Users", "Was £709.99; practical design for daily commuting", "EB3 Commuter E-Bike"],
        ["Cable Lock Accessory", "£39.99", "All Users", "Security accessory designed for e-bikes and electric scooters", "Scooter & E-Bike Cable Lock"],
        ["120cm Chain Lock", "£23.99", "All Users", "Heavy-duty security chain lock compatible with scooters and bikes", "120cm Security Chain Lock"],
        ["Autumn Ride £20 Spend & Save", "£20 OFF", "Orders £300+", "Save £20 on qualifying orders during Autumn Ride Sale", "Sitewide Orders £300+"],
        ["Autumn Ride £50 Spend & Save", "£50 OFF", "Orders £500+", "Save £50 on qualifying orders during Autumn Ride Sale", "Sitewide Orders £500+"],
        ["Autumn Ride £120 Spend & Save", "£120 OFF", "Orders £900+", "Save £120 on qualifying orders during Autumn Ride Sale", "Sitewide Orders £900+"],
        ["Autumn Ride Sale", "Up to 50% OFF", "All Users", "Featured seasonal discounts across electric scooters, bikes, and skateboards", "Selected Scooters, E-Bikes & Gear"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 13 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for a more exciting way to get around, upgrade your daily commute, or explore electric mobility from home? isinwheel offers a growing range of electric scooters, e-bikes, and smart mobility products designed around convenience, technology, and everyday riding.
          </p>
          <p>
            If you're planning to order from the official UK store, checking for an isinwheel discount code before checkout can be a smart step. Along with coupon codes and promotional offers, isinwheel regularly features sale events, bundle deals, flash sales, and other ways to get more value from your order.
          </p>
          <p>
            Whether you're comparing an electric scooter for yourself, an e-bike for commuting, or accessories for an existing ride, this page can help you explore the isinwheel range and find the latest offers available to UK shoppers.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find an isinwheel Discount Code
        </h3>
        <p>
          Before placing an order, check whether there is a current isinwheel discount code that can be applied to your purchase.
        </p>
        <p>
          A code can be particularly useful when you're shopping for a higher-value product such as an electric scooter or e-bike. However, not every promotion works in exactly the same way. Some offers may apply only to selected products, while others may be connected to specific campaigns or shopping events.
        </p>
        <p>
          It's therefore worth comparing an available discount code with isinwheel's current sale prices, bundle promotions, flash sales, and other offers before completing your order.
        </p>
        <p>
          The official UK store currently separates its promotions into areas such as isinwheel Sale, Bundle Offers, Flash Sale, and Rewards, giving shoppers several ways to check for an active promotion.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          isinwheel Coupons, Deals &amp; Offers
        </h3>
        <p>
          A coupon code isn't the only way to find an attractive offer at isinwheel. Depending on when you shop, you may find different types of promotions across the UK website.
        </p>
        <p>
          These can include:
        </p>
        <p>isinwheel discount codes</p>
        <p>Promotional codes</p>
        <p>Product-specific offers</p>
        <p>Flash sales</p>
        <p>Bundle deals</p>
        <p>Seasonal sales</p>
        <p>Clearance offers</p>
        <p>Rewards and member benefits</p>
        <p>Accessory promotions</p>
        <p>Selected product discounts</p>
        <p>
          The exact promotions available can change, so it's worth checking the current offer alongside any isinwheel coupon code before ordering.
        </p>
        <p>
          For larger purchases, comparing the final eligible offer rather than focusing only on the percentage attached to a code can help you understand which promotion is actually relevant to your basket.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Electric Scooters from isinwheel
        </h3>
        <p>
          Electric scooters are one of isinwheel's main product categories, with options designed for different riding styles and experience levels.
        </p>
        <p>
          The UK range includes everyday electric scooters, off-road models, and kids' electric scooters, with different motor configurations, battery capacities, suspension systems, riding ranges, and designs depending on the model.
        </p>
        <p>
          <strong>Everyday Electric Scooters:</strong> For shoppers looking at personal mobility for everyday use, isinwheel offers models such as the S9PRO, S9MAX, and S10MAX. These models are positioned around practical electric transportation, with different combinations of motor power, range, speed, and overall design. When comparing scooters, consider where you intend to ride, the terrain, storage requirements, charging options, and the manufacturer's specifications rather than choosing solely on appearance.
        </p>
        <p>
          <strong>Off-Road Electric Scooters:</strong> If you're interested in recreational riding or more demanding terrain, isinwheel also offers off-road models. The GT1, GT2, GT4, H7PRO, and Landturbo Pro sit within the brand's more performance-focused range, with features and specifications aimed at riders looking for increased power, larger tyres, suspension, or longer-range capabilities. When considering an off-road model, look carefully at the intended riding environment and the manufacturer's specifications. A scooter designed for off-road use isn't automatically suitable for use on public roads.
        </p>
        <p>
          <strong>Kids' Electric Scooters:</strong> isinwheel also has electric scooters designed for younger riders, including models such as the S4 and S7. These products can be an option for families looking for recreational electric mobility, but parents should always check the product's recommended age, specifications, safety guidance, and the rules that apply to where the scooter will be used.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Electric Bikes from isinwheel
        </h3>
        <p>
          If an electric scooter isn't the right fit, isinwheel also has a growing electric bike range.
        </p>
        <p>
          The UK website divides its e-bikes into areas such as commuter and city bikes and mountain/trail bikes. Current models include options such as the EB1S commuter e-bike, U1 Mini e-bike, Ucity Cruiser, M10 e-MTB, M50 e-MTB, and other electric bike models.
        </p>
        <p>
          <strong>Commuter &amp; City E-Bikes:</strong> Commuter-focused electric bikes can be useful for riders looking for pedal-assisted transportation for everyday journeys. When choosing one, consider the riding position, battery capacity, expected range, frame design, wheel size, storage, and the type of roads or paths you normally use.
        </p>
        <p>
          <strong>Electric Mountain Bikes:</strong> For outdoor riding, isinwheel's electric mountain bike selection includes models designed around trail and recreational use. Features can vary considerably between models, so compare suspension, tyres, motor output, battery capacity, frame construction, and riding geometry before making a decision. If you're buying an e-bike, checking for an isinwheel discount code before checkout can be worthwhile, particularly when you're already comparing several models.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Smart Mobility Products
        </h3>
        <p>
          isinwheel's UK store extends beyond scooters and e-bikes.
        </p>
        <p>
          The current website also features smart mobility products such as electric suitcases, walking pads, and mobility scooters.
        </p>
        <p>
          An electric suitcase can appeal to frequent travellers looking for a more convenient way to move luggage, while a walking pad can be useful for people who want to add more movement to their home or work routine.
        </p>
        <p>
          This broader product range means isinwheel isn't limited to one type of electric vehicle. The brand is increasingly positioned around different forms of smart, convenient mobility.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          isinwheel Accessories &amp; Replacement Parts
        </h3>
        <p>
          Buying the right accessory can be just as important as choosing the vehicle itself.
        </p>
        <p>
          The UK store includes accessories such as helmets, locks, seats, add-ons, tyres, and replacement parts. It also provides model-specific parts sections for selected scooters, e-bikes, and kids' scooters.
        </p>
        <p>
          If you're already an isinwheel owner, checking compatibility is particularly important. Parts and accessories can vary between models, so make sure the item you're ordering is designed for your particular scooter or e-bike.
        </p>
        <p>
          This is another area where an available isinwheel coupon code or accessory promotion could be useful.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          isinwheel Rewards &amp; Other Ways to Get More Value
        </h3>
        <p>
          Beyond traditional discount codes, isinwheel also operates a rewards programme.
        </p>
        <p>
          The current programme includes benefits linked to membership levels, with features such as credits, rewards, delivery-related benefits, after-sales support, and other member perks depending on the customer's level and applicable terms.
        </p>
        <p>
          Because reward structures can change, check the current programme terms before relying on a particular benefit.
        </p>
        <p>
          For shoppers who purchase from isinwheel more than once, a loyalty programme can be worth considering alongside an isinwheel promo code.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Seasonal isinwheel Deals in the UK
        </h3>
        <p>
          Electric mobility products can attract attention during major UK shopping periods, particularly when people are planning lifestyle upgrades, commuting changes, or outdoor activities.
        </p>
        <p>
          Depending on the brand's promotional calendar, you may want to check for isinwheel offers around:
        </p>
        <p>New Year shopping</p>
        <p>Valentine's Day</p>
        <p>Easter</p>
        <p>Spring sales</p>
        <p>Bank Holiday promotions</p>
        <p>Summer shopping</p>
        <p>Back-to-school season</p>
        <p>Black Friday</p>
        <p>Cyber Monday</p>
        <p>Christmas</p>
        <p>Boxing Day</p>
        <p>New Year sales</p>
        <p>
          isinwheel's website also features dedicated promotional areas such as seasonal sales, flash sales, and bundle offers.
        </p>
        <p>
          Rather than waiting for one specific sale, check the available offers when you're ready to buy. A current isinwheel discount code may sometimes be relevant alongside a product promotion, while at other times a sale or bundle may be the more applicable offer.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Important: UK Electric Scooter Rules
        </h3>
        <p>
          If you're shopping for an electric scooter in the UK, it's important to understand how the law applies before purchasing.
        </p>
        <p>
          Under current UK rules, privately owned e-scooters generally cannot be ridden on public roads, pavements, cycle lanes, or other public land. They can be used on private land with the landowner's permission. The rules can change, so check the latest guidance from GOV.UK before using an e-scooter.
        </p>
        <p>
          This distinction matters when choosing an electric scooter. A product being sold in the UK does not automatically mean it can legally be ridden anywhere in public.
        </p>
        <p>
          For road use, always check the latest UK regulations and make sure you're using the appropriate type of vehicle for your intended journey.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Find Better isinwheel Deals</h3>
              <p>A little comparison can make a difference when you're purchasing an electric scooter or e-bike.</p>
              <p>Start by deciding what you actually need. A commuter may prioritise portability and everyday practicality, while an off-road rider may care more about suspension, tyres, motor performance, and battery capacity.</p>
              <p>Once you've narrowed down the right product, check the current product promotion, sale section, bundle offers, and available isinwheel discount code.</p>
              <p>Don't forget about accessories. If you're buying a scooter or e-bike, you may also need a helmet, lock, replacement parts, or another compatible accessory. Looking at these requirements together can make it easier to plan your complete purchase.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for isinwheel Offers?</h3>
              <p>Searching for a promotion shouldn't become another task on your shopping list.</p>
              <p>CouponsBit helps shoppers discover coupon codes, discount codes, promotional offers, deals, and other available savings opportunities before they complete an online purchase.</p>
              <p>When you're preparing to order from isinwheel, check CouponsBit for the latest isinwheel discount code and compare it with the offers already available on the official UK store.</p>
              <p>This gives you a simple way to check for an additional promotion before you commit to your purchase.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop isinwheel With a Discount Code</h3>
              <p>Whether you're looking for an electric scooter for recreational riding, an e-bike for everyday journeys, or accessories for an existing ride, isinwheel offers a broad selection of electric mobility products through its UK store.</p>
              <p>Before placing your order, check for an active isinwheel discount code, compare it with the current sale and promotional offers, and read the conditions attached to the deal. For electric scooters in particular, make sure you also understand the current UK rules governing where privately owned e-scooters can be used.</p>
              <p>With the right product, the right promotion, and a little research before checkout, you can make your isinwheel shopping experience more straightforward while choosing equipment that fits the way you plan to ride.</p>
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
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            FAQs About isinwheel Discount Codes
          </h3>
          {[
            { q: "Does isinwheel offer discount codes in the UK?", a: "Yes, isinwheel runs promotions and discount offers for UK shoppers. Available codes and their terms can change, so check the latest offer before placing your order." },
            { q: "What does isinwheel sell?", a: "isinwheel sells electric scooters, electric bikes, kids' scooters, off-road scooters, accessories, replacement parts, and other smart mobility products. The UK website also features products such as electric suitcases, walking pads, and mobility scooters." },
            { q: "Can I use an isinwheel discount code on any product?", a: "Not necessarily. Individual discount codes can have their own eligibility rules, product exclusions, or promotional conditions. Check the terms of the specific offer before checkout." },
            { q: "Does isinwheel sell electric bikes in the UK?", a: "Yes. The official UK store offers several types of electric bikes, including commuter/city models and electric mountain bikes." },
            { q: "Does isinwheel offer off-road electric scooters?", a: "Yes. isinwheel's UK range includes off-road models such as the GT1, GT2, GT4, H7PRO, and Landturbo Pro." },
            { q: "Can I use an isinwheel electric scooter on UK roads?", a: "Privately owned e-scooters are currently subject to restrictions in the UK and generally cannot be used on public roads, pavements, cycle lanes, or other public land. They can be used on private land with the landowner's permission. Always check the latest GOV.UK rules before riding." },
            { q: "Does isinwheel offer accessories?", a: "Yes. The UK store offers accessories including helmets, locks, seats, add-ons, tyres, and model-specific replacement parts." },
            { q: "How can I find an isinwheel coupon code?", a: "Check the latest isinwheel discount codes and promotional offers before checkout. It's also worth comparing them with the brand's current sale, flash sale, bundle, and rewards offers." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular isinwheel Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "isinwheel Discount Code",
              "UK E-Scooter Deals",
              "Commuter E-Bike Offers",
              "Off-Road Scooter Sales",
              "GT Series Discounts",
              "Kids Scooter Offers",
              "Mobility Accessories",
              "Flash Sale Deals"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top isinwheel Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Up to £250 OFF Off-Road E-Scooters" },
              { heading: "NEW CUSTOMER BONUS", sub: "Extra Discount on First E-Bike Order" },
              { heading: "BUNDLE SAVINGS", sub: "Save More when Buying Scooter + Helmet" },
              { heading: "FREE UK DELIVERY", sub: "Fast & Free UK Delivery on All Orders" }
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
                  href="https://www.isinwheel.co.uk"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop isinwheel: ${deal.heading}`}
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
