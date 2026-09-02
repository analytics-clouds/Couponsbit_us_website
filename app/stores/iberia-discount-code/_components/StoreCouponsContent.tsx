"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,Briefcase, PackageCheck, Weight, Ruler, CreditCard, Trophy, ShieldAlert,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,UserCheck, Calendar, Package, Coins, Ticket,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Plane,
  Globe2,
  Award,
  Luggage,
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
  { id: "d1", label: "NEW", heading: "Madrid Getaway with Flight + 3-Night Hotel from $1,019", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Los Angeles to Barcelona from $865", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "Flights to Barcelona from $550", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Tenerife Flight + Hotel from $1,295", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "Madrid Flight + Car Rental from $889", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Etihad", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", dealText: "Up To 30% OFF", href: "/stores/etihad-discount-code" },
  { name: "Oman Air", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/oman-air-logo_ozwu2c.webp", dealText: "Up To 50% OFF", href: "/stores/oman-air-discount-code" },
  { name: "Malaysia Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp", dealText: "Up To 35% OFF", href: "/stores/malaysia-airlines-discount-code" },
  { name: "Latam Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp", dealText: "Up to 40% OFF", href: "/stores/latam-airlines-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 69% OFF", href: "/stores/agoda-discount-code" },
];

const STORE_URL = "https://dpbolvw.net/click-100938140-12120041?sid=1015";

export default function IberiaCouponsContent() {
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
              <span className="text-black font-extrabold">Iberia</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788248209/iberia-logo_ssnbjg.webp" alt="Iberia" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Iberia</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(19.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Iberia promo codes and discount codes for Sep 2026. Save on flights to Barcelona, Paris, New York, and Madrid, plus flight and hotel packages, car rental deals, and affordable international airfare with the latest Iberia travel offers.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "1.8k", label: "Deals" },
                    { icon: Users, val: "6M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788248209/iberia-logo_ssnbjg.webp" alt="Iberia Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Iberia Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "PACKAGE", value: "$1,019", title: "Iberia Discount Code – Madrid Getaway with Flight + 3-Night Hotel from $1,019", desc: "Enjoy a flight + hotel package to Madrid from $1,019.", bullets: ["Package includes 3 nights of hotel accommodation.", "Enjoy a convenient round-trip travel package for your Madrid getaway.", "Book now and explore the attractions, culture, and cuisine of Madrid."] },
                  { label: "FLIGHT", value: "$865", title: "Iberia Discount Code – Los Angeles to Barcelona from $865", desc: "Fly from Los Angeles to Barcelona from just $865.", bullets: ["Travel dates: October 20 to October 27, 2026.", "Enjoy a convenient round-trip flight to Barcelona.", "Book your Iberia flight now and plan your Spanish getaway."] },
                  { label: "FLIGHT", value: "$550", title: "Iberia Discount Code – Flights to Barcelona from $550", desc: "Find round-trip flights to Barcelona from $550.", bullets: ["Plan your next Spanish adventure with affordable flight fares.", "Explore Barcelona's architecture, beaches, food, and culture.", "Book your flight and travel to Barcelona for less."] },
                  { label: "PACKAGE", value: "$1,295", title: "Iberia Discount Code – Tenerife Flight + Hotel from $1,295", desc: "Enjoy flights + 4 days / 3 nights hotel in Tenerife from $1,295.", bullets: ["Discover volcanic-sand beaches and spectacular island landscapes.", "Experience Tenerife's colonial architecture and pleasant weather.", "Enjoy a memorable Spanish island getaway with Iberia."] },
                  { label: "PACKAGE", value: "$889", title: "Iberia – Madrid Flight + Car Rental from $889", desc: "Get a Madrid flight + 6 days car rental package from $889.", bullets: ["Explore Madrid before driving to destinations including **Toledo and Segovia.", "Visit Salamanca's Plaza Mayor and the Hanging Houses of Cuenca.", "Package includes 1 checked bag up to 23 kg, carry-on bag, and personal item per person."] },
                  { label: "FLIGHT", value: "$258", title: "Iberia – Cheap Flights by Month from $258", desc: "Find monthly Iberia flight deals starting from $258.", bullets: ["Explore affordable fares for your upcoming travel plans.", "Choose from flight offers available across different months.", "Book your preferred Iberia flight and save on airfare."] },
                  { label: "FLIGHT", value: "€87", title: "Iberia  – Flights to Paris from €87", desc: "Find round-trip flights to Paris from €87.", bullets: ["Enjoy affordable fares for your next trip to France.", "Explore Paris attractions, landmarks, food, and culture for less.", "Book your Iberia flight and plan your Paris getaway."] },
                  { label: "FLIGHT", value: "€328", title: "Iberia – Flights to New York from €328", desc: "Get round-trip flights to New York starting from €328.", bullets: ["Take advantage of competitive fares for transatlantic travel.", "Explore New York's iconic attractions and vibrant city life.", "Book your Iberia flight and enjoy great value on your trip."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[8px] text-[15px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Iberia: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
  <h3 className="text-black font-black text-lg mb-6">
    Iberia Baggage
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
    Baggage is an important part of your overall flight cost.
  </p>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    Iberia provides separate information for cabin baggage and checked baggage, with allowances depending on factors such as fare, cabin, route, and other conditions. The airline also provides options to add additional checked baggage when applicable.
  </p>
  <p className="text-black font-black text-sm leading-relaxed mb-6">
    Before purchasing a flight, check:
  </p>
  <div className="space-y-8 mb-8">
    {[
      {
        icon: Luggage,
        title: "Carry-on allowance",
        sub: "Verify standard cabin bag limits (typically 56 x 40 x 25 cm up to 10 kg–14 kg depending on cabin class)."
      },
      {
        icon: Briefcase,
        title: "Personal item requirements",
        sub: "Ensure your under-seat item meets size specifications (max 30 x 40 x 15 cm)."
      },
      {
        icon: PackageCheck,
        title: "Checked baggage allowance",
        sub: "Review whether your fare tier (Basic vs. Classic/Comfort) includes checked bags in the base fare."
      },
      {
        icon: Weight,
        title: "Maximum weight",
        sub: "Standard luggage is limited to 23 kg per piece, with a hard cutoff limit at 32 kg per bag."
      },
      {
        icon: Ruler,
        title: "Maximum dimensions",
        sub: "Standard checked bags must not exceed a combined total dimension of 158 cm (H + W + L)."
      },
      {
        icon: CreditCard,
        title: "Additional baggage costs",
        sub: "Purchasing additional 15 kg, 23 kg, or 32 kg bag options online before heading to the airport saves fees."
      },
      {
        icon: Trophy,
        title: "Sports equipment rules",
        sub: "Check policy guidelines for oversized gear such as skis, golf bags, or bicycles."
      },
      {
        icon: ShieldAlert,
        title: "Special baggage requirements",
        sub: "Review conditions for medical gear, musical instruments, and restricted cabin items."
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
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-4 text-justify">
    This can prevent unexpected costs at the airport.
  </p>
  <p className="text-gray-500 font-bold text-sm leading-relaxed text-justify">
    Remember that a flight's advertised fare isn't always the same as your final travel cost if you need additional services.
  </p>
</div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Plane, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Globe2, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Award, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-6">
    Ways to Save on Iberia Flights
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    Finding an Iberia discount code is one option, but smart booking can involve several strategies.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Plane,
        title: "Check Iberia Offers",
        sub: "Iberia maintains an offers section featuring flight deals, monthly opportunities, travel packages, and other promotions."
      },
      {
        icon: Tag,
        title: "Use a Valid Iberia Coupon Code",
        sub: "If you have a qualifying coupon or promotional code, apply it during the payment stage and confirm that the discount appears before completing the purchase."
      },
      {
        icon: UserCheck,
        title: "Join Iberia Club",
        sub: "Membership is free and provides access to Avios, exclusive promotions, and other travel benefits."
      },
      {
        icon: Calendar,
        title: "Compare Flexible Dates",
        sub: "If your travel dates aren't fixed, search different departure and return combinations to find more suitable fares."
      },
      {
        icon: Package,
        title: "Consider Flight Packages",
        sub: "If you need accommodation or a rental car, compare Iberia's package options alongside separate bookings."
      },
      {
        icon: Coins,
        title: "Use Avios",
        sub: "If you've accumulated Avios, check whether redeeming them or using them toward a booking can reduce your cash expense."
      },
      {
        icon: Ticket,
        title: "Check CouponsBit Before Checkout",
        sub: "Before paying, check CouponsBit for the latest Iberia discount codes and promotional offers that may apply to your market."
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
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Iberia Discount Code & Flight Deals
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
            Madrid Getaway Deal ✈️🏨
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $1,019
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes round-trip flights and 3 nights of hotel accommodation
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Madrid flight + hotel vacation packages
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Los Angeles to Barcelona Fare 🌴
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $865
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid for travel dates: Oct 20 – Oct 27, 2026; round-trip fare
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Direct &amp; connecting flights from LAX to BCN
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Barcelona Round-Trip Special 🏖️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $550
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Promotional round-trip airfare based on seat availability
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select Iberia flights to Barcelona
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Tenerife Island Escape 🌋
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $1,295
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes round-trip flights + 4 days / 3 nights hotel stay
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tenerife flight + hotel package bookings
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Madrid Flight + Car Rental 🚗
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $889
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes 6-day car rental, 1 checked bag (23kg max), carry-on, and personal item
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Madrid flight + car fly-drive packages
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Cheap Monthly Flight Fares 📅
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $258
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Fares vary by selected travel month and route availability
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected low-season Iberia flight routes
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Paris Round-Trip Flight 🥐
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From €87
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Round-trip promotional fare on select European departure routes
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Iberia flights to Paris (CDG/ORY)
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            New York Transatlantic Deal 🗽
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From €328
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Transatlantic round-trip fare on select direct and connecting flights
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Iberia flights to New York (JFK)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Expandable Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <div className="space-y-4">
            <p>
              Planning your next European getaway, business trip, or long-haul adventure? Before booking your next flight, checking for an Iberia discount code can be a simple way to look for additional savings on an eligible fare.
            </p>
            <p>
              Iberia is Spain's flag carrier and offers flights connecting Spain with destinations across Europe, the Americas, and other international markets. Through its website, travelers can search for flights as well as flight-and-hotel and flight-and-car options. Iberia also operates the Iberia Club loyalty program, through which members can earn and redeem Avios for flights, discounts, upgrades, hotels, car hire, and other travel-related experiences.
            </p>
            <p>
              Whether you're flying from the USA, Canada, or UK, CouponsBit can help you check available Iberia promotions before completing your booking. Since airline offers, fares, routes, and promotional conditions can change, always review the terms of an Iberia discount code before applying it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an Iberia Discount Code and Save on Flights</h3>
            <p>
              Airfare can vary considerably depending on your destination, travel dates, cabin, availability, and other booking conditions. That's why finding an eligible Iberia promo code isn't the only way to save—you can also compare available fares, look at Iberia's featured offers, consider flexible travel dates, and make use of Iberia Club benefits.
            </p>
            <p>
              Iberia's official website provides a dedicated area for promotional discount codes. The airline explains that its promotional codes can be entered during the payment stage of a booking, with the applicable discount reflected in the amount payable when the code is valid for the selected purchase.
            </p>
            <p>On CouponsBit, you can look for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Iberia discount codes</li>
              <li>Iberia promo codes</li>
              <li>Iberia coupon codes</li>
              <li>Flight offers</li>
              <li>Seasonal flight deals</li>
              <li>Iberia Club promotions</li>
              <li>Avios-related savings</li>
              <li>Travel package offers</li>
              <li>Hotel and flight deals</li>
              <li>Car rental offers</li>
            </ul>
            <p>
              The availability and conditions of each promotion can vary, so check the individual offer before booking.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* Book Iberia Flights */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Book Iberia Flights</h3>
    <p>
      The core of Iberia's website is its flight booking platform, where travelers can search for routes based on their departure city, destination, travel dates, and passenger requirements.
    </p>
    <p>
      You can generally compare different journey options before selecting the flight and fare that fits your plans.
    </p>
    <p>
      Iberia's booking platform also allows travelers to explore options beyond standard round trips, including one-way and multiple-journey bookings.
    </p>
    <p>This can be useful if you're:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Planning a European vacation",
        "Visiting family abroad",
        "Taking a business trip",
        "Building a multi-city itinerary",
        "Connecting through Spain",
        "Planning a long-haul holiday",
        "Combining several destinations into one trip"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before paying, check whether your Iberia discount code can be applied to the selected booking.
    </p>
  </div>

  {/* Iberia Flights from the USA */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Flights from the USA</h3>
    <p>
      For travelers in the United States, Iberia provides access to international routes connecting the country with Spain and other destinations through its broader network.
    </p>
    <p>
      Travelers can use the U.S. version of the Iberia website to search for available flights, manage bookings, access Iberia Club, and review country-specific promotions.
    </p>
    <p>
      If you're booking from the USA, remember that an offer shown on another Iberia regional website may not necessarily have the same eligibility or terms.
    </p>
    <p>Before booking, compare:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Your travel dates",
        "Departure airport",
        "Destination",
        "Cabin",
        "Fare conditions",
        "Baggage requirements",
        "Available promotions",
        "Iberia discount code eligibility",
        "Avios redemption options"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      This can help you determine the most suitable booking option rather than choosing a fare based only on the headline price.
    </p>
  </div>

  {/* Iberia Flights from Canada */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Flights from Canada</h3>
    <p>
      Canadian travelers can use Iberia's Canada website to search for flights and manage their travel plans. The Canadian site also provides access to flight-plus-hotel, flight-plus-car, hotel, car rental, and stopover options.
    </p>
    <p>
      If you're traveling from Canada, make sure you select the Canadian market before checking promotions or completing your purchase.
    </p>
    <p>
      A Canada-eligible Iberia discount code may have different conditions from an offer available to customers in the USA or UK.
    </p>
    <p>
      It's also worth checking Iberia Club if you regularly travel with Iberia or its partner airlines. Members can earn Avios from flights and participating partners and redeem them for flights and other benefits.
    </p>
  </div>

  {/* Iberia Flights from the UK */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Flights from the UK</h3>
    <p>
      UK travelers can use Iberia's dedicated UK website to search flights, explore destinations, manage reservations, and access current offers.
    </p>
    <p>
      The UK site currently highlights destinations including Ibiza, Palma de Mallorca, Seville, New York, Bilbao, Tenerife, and Miami, among others. Availability and fares naturally depend on the dates and route selected.
    </p>
    <p>
      The UK offers section also includes cheap-flight opportunities, monthly flight deals, travel packages, and the Hola Madrid Stopover option.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before booking, check CouponsBit for an available Iberia discount code that matches your market and travel plans.
    </p>
  </div>

  {/* Explore Iberia Destinations */}
  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Explore Iberia Destinations</h3>
    <p>
      Iberia can be particularly interesting for travelers planning trips to Spain and Europe, but its network extends well beyond Spain.
    </p>
    <p>
      Depending on your departure point and travel dates, you can use Iberia to explore destinations for:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Spain</h5>
        <p className="text-sm">
          Plan trips to popular Spanish cities and holiday destinations such as Madrid, Barcelona, Seville, Valencia, Málaga, Bilbao, Palma de Mallorca, Ibiza, and Tenerife.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Europe</h5>
        <p className="text-sm">
          Use Iberia to plan European city breaks, cultural trips, beach holidays, and multi-destination itineraries.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">North America</h5>
        <p className="text-sm">
          Travelers can search Iberia routes connecting Spain with destinations in the United States and other parts of North America.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Latin America</h5>
        <p className="text-sm">
          Iberia has a strong presence between Spain and Latin American destinations, making it an option for travelers planning trips across the Atlantic.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 md:col-span-2">
        <h5 className="font-bold text-gray-900">Other International Destinations</h5>
        <p className="text-sm">
          Depending on current schedules and connections, travelers can explore destinations beyond Europe and the Americas.
        </p>
      </div>
    </div>

    <p>
      Because routes and schedules change, always search your exact departure and destination combination on Iberia before making travel plans.
    </p>
  </div>

  {/* Iberia Flight + Hotel Packages */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Flight + Hotel Packages</h3>
    <p>Don't you just need a flight?</p>
    <p>
      Iberia also provides options to combine flights with accommodation.
    </p>
    <p>
      Flight-and-hotel packages can be useful when you're planning a complete vacation rather than booking each component separately.
    </p>
    <p>
      Instead of searching independently for airfare and accommodation, you can compare package options and choose a combination that fits your itinerary.
    </p>
    <p>When evaluating a package, consider:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Flight schedule",
        "Hotel location",
        "Hotel category",
        "Number of nights",
        "Cancellation conditions",
        "Included services",
        "Total booking terms",
        "Available Iberia promotions"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      A Iberia promo code may have specific conditions depending on whether you're booking a flight alone or a travel package, so check the promotion carefully.
    </p>
  </div>

  {/* Iberia Flight + Car */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Flight + Car</h3>
    <p>Planning a road trip after landing?</p>
    <p>
      Iberia also provides flight-and-car booking options, allowing travelers to arrange transportation alongside their flights.
    </p>
    <p>This can be useful for:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Spanish road trips",
        "Family vacations",
        "Multi-city holidays",
        "Island trips",
        "Business travel",
        "Rural getaways",
        "Airport-to-destination travel"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Bundling travel components can also make trip planning more convenient because you can manage more of your itinerary in one place.
    </p>
  </div>

  {/* Iberia Hotels */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Hotels</h3>
    <p>
      Iberia's booking ecosystem extends beyond flights.
    </p>
    <p>
      Travelers can also explore hotel options through the airline's website, making it possible to arrange accommodation alongside air travel.
    </p>
    <p>
      If you're comparing hotel options, consider the location carefully. A slightly more convenient hotel may be worthwhile if it reduces transportation time between the airport, attractions, and other destinations on your itinerary.
    </p>
    <p>
      You can also check whether any current Iberia offer or Iberia Club benefit applies to your hotel booking.
    </p>
  </div>

  {/* Iberia Car Rental */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Car Rental</h3>
    <p>
      For travelers who need their own transportation, Iberia provides access to car rental options.
    </p>
    <p>
      A rental car can be especially useful when your itinerary includes destinations that aren't well connected by public transport.
    </p>
    <p>Before booking, compare:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Rental period",
        "Pickup location",
        "Drop-off location",
        "Vehicle type",
        "Mileage conditions",
        "Insurance",
        "Fuel policy",
        "Driver requirements",
        "Cancellation terms"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      If you're an Iberia Club member, check whether the relevant car rental partner provides an opportunity to earn Avios.
    </p>
    <p>
      Iberia states that its loyalty program has more than 90 partners, with members able to earn Avios through participating brands and travel services.
    </p>
  </div>

  {/* Iberia Stopover in Madrid */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Stopover in Madrid</h3>
    <p>
      If your journey takes you through Madrid, Iberia's Hola Madrid Stopover can give travelers an opportunity to incorporate Madrid into their itinerary.
    </p>
    <p>
      The airline currently promotes its stopover program as one of its travel offers, allowing travelers to plan a stop in Madrid as part of their journey.
    </p>
    <p>
      This can be particularly appealing if you want to turn a connection into an additional city visit.
    </p>
    <p>
      Instead of simply passing through Madrid, you can potentially build a longer stop into your travel plans and explore the Spanish capital before continuing to your final destination.
    </p>
  </div>

  {/* Iberia Club and Avios */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Club and Avios</h3>
    <p>
      Frequent Iberia travelers should also explore Iberia Club.
    </p>
    <p>
      The program allows members to earn Avios when flying and through participating partners. Those Avios can then be redeemed for flights, discounts, upgrades, hotel stays, car hire, leisure activities, and other options.
    </p>
    <p>Iberia Club has two types of points:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Avios</h5>
        <p className="text-sm">
          Avios are used as the program's reward currency.
        </p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Elite Points</h5>
        <p className="text-sm">
          Elite Points help members progress through Iberia Club levels and unlock additional benefits.
        </p>
      </div>
    </div>
    <p>
      For regular travelers, combining an Iberia discount code with loyalty-program benefits where permitted can be an effective way to maximize the value of a booking.
    </p>
  </div>

  {/* How to Earn Iberia Avios */}
  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">How to Earn Iberia Avios</h3>
    <p>
      Iberia Club members can earn Avios in multiple ways.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Fly With Iberia</h5>
        <p className="text-sm">
          Members can earn Avios when traveling on eligible Iberia flights.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Fly With Partner Airlines</h5>
        <p className="text-sm">
          The program works with affiliated airlines, including airlines within the oneworld network.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Use Partner Brands</h5>
        <p className="text-sm">
          Iberia Club has more than 90 partners through which members can earn Avios in everyday life and travel-related purchases.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Use Travel Partners</h5>
        <p className="text-sm">
          Hotel, car rental, and other participating partners can provide additional opportunities to collect Avios.
        </p>
      </div>
    </div>

    <p>
      This makes Iberia Club useful beyond simply booking flights.
    </p>
  </div>

  {/* How to Redeem Iberia Avios */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">How to Redeem Iberia Avios</h3>
    <p>
      Once you've accumulated enough Avios, you can use them toward eligible travel and other rewards.
    </p>
    <p>Iberia currently allows members to use Avios for:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Iberia flights",
        "Partner airline flights",
        "Flight discounts",
        "Cabin upgrades",
        "Hotels",
        "Car hire",
        "Experiences",
        "Other partner rewards"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Iberia also provides members with access to seats specifically reserved for Avios redemptions.
    </p>
    <p>
      If you regularly fly Iberia, it's worth checking the Avios redemption options before paying entirely with cash.
    </p>
  </div>

  {/* Iberia Cabin Classes */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Iberia Cabin Classes</h3>
    
    {/* Business Class */}
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Iberia Business Class</h4>
      <p>
        For travelers looking for a more premium experience, Iberia offers Business Class on eligible routes.
      </p>
      <p>Business Class can be relevant for:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
        {[
          "Long-haul business trips",
          "Overnight flights",
          "Special occasions",
          "Travelers who prioritize additional comfort",
          "Travelers looking for premium airport services"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>
        Iberia Club members can also use Avios for eligible cabin upgrades, allowing frequent travelers to explore ways of improving their journey without necessarily paying the entire premium fare difference in cash.
      </p>
    </div>

    {/* Premium Economy */}
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Iberia Premium Economy</h4>
      <p>
        Premium Economy provides another option between standard Economy and Business Class on eligible flights.
      </p>
      <p>
        It can be worth comparing when you want additional comfort but don't necessarily need the complete Business Class experience.
      </p>
      <p>
        When comparing cabins, consider the overall value rather than simply the fare difference. Check what is included with your selected fare, including baggage, seating, flexibility, and other services.
      </p>
    </div>

    {/* Economy Class */}
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Iberia Economy Class</h4>
      <p>
        The economy is suitable for travelers who prioritize getting to their destination while keeping the booking straightforward.
      </p>
      <p>
        However, Economy fares can have different conditions, so read the fare details before booking.
      </p>
      <p>Pay attention to:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
        {[
          "Baggage allowance",
          "Seat selection",
          "Changes",
          "Cancellation conditions",
          "Refundability",
          "Boarding conditions",
          "Included services"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>
        This is particularly important when comparing multiple fares that initially appear similar.
      </p>
    </div>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Iberia Discount Code</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Find an Eligible Discount Code", text: "Visit CouponsBit and find an available Iberia discount code." },
                { title: "Step 2: Check the Conditions", text: "Read the offer carefully. Check the eligible routes, travel dates, booking dates, passenger requirements, and any other restrictions." },
                { title: "Step 3: Search for Your Flight", text: "Visit Iberia and enter your departure city, destination, travel dates, and passenger information." },
                { title: "Step 4: Select Your Flight", text: "Choose the flight and fare that best suits your travel requirements." },
                { title: "Step 5: Continue to Payment", text: "Proceed through the booking process until you reach the payment stage." },
                { title: "Step 6: Enter Your Code", text: "Iberia's Canadian discount-code page states that the promotional code can be entered in the box labeled “Do you have a voucher, discount code or gift card?” before completing payment." },
                { title: "Step 7: Apply the Code", text: "Enter the code exactly as provided, including uppercase or lowercase characters and any special characters where applicable." },
                { title: "Step 8: Confirm the Discount", text: "Make sure the revised amount reflects the applicable promotion before completing your purchase." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <strong className="text-gray-900 font-black block">{step.title}</strong>
                    <p className="text-gray-700 font-bold leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Iberia Discount Code Tips</h3>
            <p>A few simple checks can help prevent problems when using an Iberia coupon code:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Check the expiration date:</strong> Airline promotions can be available for a limited booking period.</li>
              <li><strong>Read the fare restrictions:</strong> Some offers may apply only to selected flights or routes.</li>
              <li><strong>Check the travel window:</strong> The booking date and travel date may both matter.</li>
              <li><strong>Confirm the market:</strong> Make sure you're using the Iberia website for your country.</li>
              <li><strong>Enter the code correctly:</strong> Iberia specifically advises users to enter promotional codes exactly as shown.</li>
              <li><strong>Check the final amount:</strong> Always verify that the discount has been applied before paying.</li>
              <li><strong>Review combination rules:</strong> Some promotional codes may not be combined with other discounts.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an Iberia Discount Code Before You Fly</h3>
            <p>
              Whether you're planning a short European break, visiting family overseas, arranging a business trip, or building a multi-city international itinerary, comparing your options before booking can help you get more from your travel budget.
            </p>
            <p>
              Iberia gives travelers several ways to plan their journey, from standard flights and premium cabins to flight-and-hotel packages, flight-and-car bookings, hotel reservations, car rentals, and the Hola Madrid Stopover. Frequent travelers can also use Iberia Club to collect Avios and unlock additional travel benefits.
            </p>
            <p>
              If you're booking from the USA, Canada, or UK, check CouponsBit before completing your reservation to look for an Iberia discount code, promo code, coupon, or current flight offer.
            </p>
            <p>
              Compare the available fares, check the baggage and fare conditions, apply any eligible promotional code at payment, and review the final booking total before confirming your trip.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQs */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Iberia Discount Codes</h3>
          {[
            { q: "Where can I find an Iberia discount code?", a: "You can check CouponsBit for available Iberia discount codes, promo codes, coupon offers, and flight deals before booking. Iberia also states that customers can learn about its latest promotional codes through its website, social media channels, newsletters, and Iberia Club promotions." },
            { q: "What is an Iberia discount code?", a: "An Iberia discount code is a promotional code that can provide a discount on an eligible Iberia booking. The exact discount, eligible flights, booking dates, and conditions depend on the promotion." },
            { q: "Can I use an Iberia discount code on any flight?", a: "Not necessarily. Promotional codes can have specific terms and may apply only to selected flights, routes, dates, or fares." },
            { q: "Where do I enter an Iberia promo code?", a: "Iberia's payment page includes a field for vouchers, discount codes, or gift cards. Enter your eligible code there and select the option to apply it." },
            { q: "Does Iberia offer flight deals?", a: "Yes. Iberia maintains an offers section featuring cheap-flight opportunities, monthly flight deals, travel packages, and its Madrid stopover offer." },
            { q: "Does Iberia have a loyalty program?", a: "Yes. Iberia Club is Iberia's loyalty program. Members can earn Avios and Elite Points and receive access to various benefits and promotions." },
            { q: "What are Avios?", a: "Avios are the reward currency used by Iberia Club. Members can earn Avios through eligible flights and participating partners and redeem them for flights, discounts, upgrades, hotels, car hire, and other rewards." },
            { q: "Can I use Avios to reduce the cost of an Iberia flight?", a: "Yes. Iberia allows eligible members to redeem Avios for flights and discounts on tickets, as well as for upgrades and other travel-related rewards." },
            { q: "Can travelers in the USA use an Iberia discount code?", a: "Potentially, depending on the promotion. U.S. travelers should use the relevant Iberia USA website and check the terms of the individual discount code before booking." },
            { q: "Can travelers in Canada use an Iberia discount code?", a: "Potentially. Iberia maintains a Canadian website and specifically provides guidance on using promotional discount codes. However, individual offers can have their own eligibility conditions." },
            { q: "Can travelers in the UK use an Iberia discount code?", a: "Yes, Iberia offers a dedicated UK market, but individual promotional codes may have specific restrictions. Always check the terms before applying a code to a UK booking." },
            { q: "Does Iberia offer Business Class?", a: "Yes. Iberia offers Business Class on eligible routes, and Iberia Club members can use Avios for eligible cabin upgrades." },
            { q: "Can I book a hotel through Iberia?", a: "Yes. Iberia's booking platform includes hotel options as well as flight-and-hotel packages." },
            { q: "Can I rent a car through Iberia?", a: "Yes. Iberia provides car rental and flight-plus-car booking options. Iberia Club members may also earn Avios through participating partners." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Iberia Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Iberia Promo Code", "Flight Deals", "Avios Rewards", "Iberia Club", "Madrid Stopover", "Flight + Hotel", "Car Rental", "Business Class"].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
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
