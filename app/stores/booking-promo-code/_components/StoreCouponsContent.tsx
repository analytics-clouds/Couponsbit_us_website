"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,Calendar, Calculator, MapPin,
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
  Search,
  ShoppingBag,
  Hotel,
  Plane,
  Car,
  Award,
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
  { id: "d1", label: "SALE", heading: "Save at Least 15% on Select Stays", sub: "Hotel Deals" },
  { id: "d2", label: "SALE", heading: "Flat 20% OFF Hotel Bookings", sub: "Selected Hotels" },
  { id: "d3", label: "NEW", heading: "Get 10% OFF Your First Booking", sub: "New Customers" },
  { id: "d4", label: "SALE", heading: "Save Up To 40% on Las Vegas Stays", sub: "Las Vegas" },
  { id: "d5", label: "FLIGHT", heading: "Miami to London Flights From $567.51", sub: "International Flights" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
  { name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", dealText: "$35 OFF Bookings", href: "/stores/zen-hotels-discount-code" },
  { name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", dealText: "Up To 50% OFF", href: "/stores/itc-hotels-discount-code" },
];

const STORE_URL = "https://www.booking.com/";

export default function BookingCouponsContent() {
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
              <span className="text-black font-extrabold">Booking</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp" alt="Booking" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Booking</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(61.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find verified Booking promo codes and discount codes for hotels, flights, cruises, and vacation stays. Save 20% on hotel bookings, 15% on select stays, 10% on your first booking, and enjoy exclusive travel savings throughout Sep 2026.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "5.1k", label: "Deals" },
                    { icon: Users, val: "24M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788349789/16_trzzmv.webp" alt="Booking Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Booking Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "15% OFF", title: "Booking Promo Code – Save at Least 15% on Select Stays 🏨", desc: "Save at least 15% OFF selected hotel stays with eligible Booking deals.", bullets: ["Use a Booking Promo Code when available to unlock additional savings.", "Find discounted accommodation for your next vacation or getaway.", "Choose from hotels and stays across popular travel destinations.", "Book your stay at a better price and save more on your next trip."] },
                  { label: "SALE", value: "20% OFF", title: "Booking Promo Code – Flat 20% OFF Hotel Bookings 🔥", desc: "Enjoy Flat 20% OFF on eligible hotel bookings.", bullets: ["Apply a Booking Promo Code where applicable to save on your reservation.", "Discover hotels and accommodation at discounted prices.", "Choose from a wide range of destinations and available properties.", "Book your preferred stay and enjoy bigger savings on hotel reservations."] },
                  { label: "NEW", value: "10% OFF", title: "Booking Promo Code – Get 10% OFF Your First Booking 🎁", desc: "Sign up and get 10% OFF your first eligible Booking reservation.", bullets: ["Use a Booking Promo Code if required for additional promotional savings.", "Book hotels and flights at competitive prices and start saving.", "Your discount may be applied automatically on eligible bookings.", "A great way for new customers to save on their first Booking reservation."] },
                  { label: "SALE", value: "40% OFF", title: "Booking – Save Up To 40% on Las Vegas Stays 🎰", desc: "Save Up To 40% OFF selected stays in Las Vegas.", bullets: ["Use a Booking Promo Code where eligible to maximize your hotel savings.", "Find discounted hotels across popular Las Vegas locations.", "Selected properties may offer free cancellation for added flexibility.", "Book your Las Vegas trip at a lower price and enjoy more travel savings."] },
                  { label: "FLIGHT", value: "$567.51", title: "Booking  – Miami to London Flights From $567.51 ✈️", desc: "Book Miami to London flights starting from $567.51 on eligible offers.", bullets: ["Use a Booking Promo Code when available to save more on your flight.", "Compare flight options and choose suitable travel dates.", "Discover competitive airfares for international travel.", "Book early and secure your preferred Miami to London flight at a great price."] },
                  { label: "FLIGHT", value: "$67.47", title: "Booking Promo Code – Las Vegas Flights From $67.47 ✈️", desc: "Find flights to Las Vegas starting from $67.47", bullets: ["Use a Booking Promo Code where applicable for additional flight savings.", "Discover affordable fares for travel to Las Vegas.", "Book your flight at a competitive price and save more on your journey."] },
                  { label: "STAY", value: "$86/NIGHT", title: "Booking Promo Code – Guest Home Stays From $86 Per Night 🏠", desc: "Enjoy comfortable guest home stays starting from $86 per night.", bullets: ["Use a Booking Promo Code on eligible accommodation offers to save more.", "Discover budget-friendly rooms and guest homes in popular destinations.", "Selected properties may include free cancellation for added flexibility.", "Some packages may also offer breakfast, lunch and dinner options."] },
                  { label: "CRUISE", value: "40% OFF", title: "Booking Promo Code – Carnival Cruise Line Up To 40% OFF 🚢", desc: "Save Up To 40% OFF eligible Carnival Cruise Line bookings.", bullets: ["Use a Booking Promo Code where applicable to unlock additional savings.", "Take advantage of early booking offers and limited-time cruise deals.", "Plan your cruise vacation while securing a discounted booking price.", "Book early to access available offers before the limited deals end."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-2xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Booking: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Booking.com Genius Discounts and Member Savings</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   One of the notable ways Booking.com provides savings is through its Genius loyalty program. Eligible travelers can receive member benefits and discounts on participating properties depending on their Genius level and the current program terms.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Genius benefits can be especially useful for travelers who book accommodations regularly. Instead of relying solely on a Booking.com coupon code, frequent travelers may find that their eligible member benefits provide another way to reduce the cost of accommodation.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Always check the specific property and reservation details because not every accommodation participates in every Genius benefit.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Hotel, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Plane, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Find the Best Booking.com Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Booking",
        sub: "Before completing your reservation, visit CouponsBit to check for the latest Booking.com promo codes, coupon offers, discount opportunities, vouchers, and other available deals."
      },
      {
        icon: Calculator,
        title: "Compare the Final Booking Price",
        sub: "Don't focus only on the headline discount. Compare the final amount payable after taxes, fees, and applicable charges where shown."
      },
      {
        icon: Award,
        title: "Check Genius Eligibility",
        sub: "If you have access to Booking.com's Genius program, compare the member rate with other available offers to determine which option provides the better overall value."
      },
      {
        icon: Calendar,
        title: "Be Flexible With Travel Dates",
        sub: "Changing your travel dates by even a few days can sometimes affect accommodation availability and rates. If your schedule allows, compare different dates before booking."
      },
      {
        icon: MapPin,
        title: "Compare Nearby Properties",
        sub: "A hotel in the city center may cost more than a comparable property a short distance away. Consider transportation costs alongside the accommodation rate before deciding."
      },
      {
        icon: ShieldCheck,
        title: "Check Cancellation Policies",
        sub: "A cheaper non-refundable reservation may not be the best choice if your plans could change. Compare cancellation terms before choosing an accommodation."
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
          Booking.com Promo Code, Coupon Code & Discount Offers
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
            Booking Promo Code 🏨
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save at Least 15% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Use code when available, unlock additional savings
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select hotel stays &amp; accommodation
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Hotel Bookings Deal 🔥
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Apply promo code where applicable
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible hotel bookings worldwide
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            First Booking Discount 🎁
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            10% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Sign up required, applied automatically on eligible bookings
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First eligible hotel or flight reservation
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Las Vegas Stays 🎰
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 40% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Selected properties offer free cancellation
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select Las Vegas hotels &amp; stays
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Miami to London Flights ✈️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $567.51
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Early booking offer, compare travel dates
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Miami (MIA) to London (LON) flight bookings
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Las Vegas Flights ✈️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $67.47
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Competitive fares, limited availability
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Flights to Las Vegas
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Guest Home Stays 🏠
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $86 / night
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Select properties include free cancellation &amp; meal options
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Guest homes &amp; budget-friendly rooms
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Carnival Cruise Line 🚢
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 40% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Early booking &amp; limited-time offers
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible Carnival Cruise Line packages
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Booking.com is one of the world's best-known online travel platforms, helping travelers search and book accommodation, flights, rental cars, attractions, airport taxis, and other travel-related services. From hotels and resorts to apartments, vacation homes, hostels, guesthouses, and unique stays, the platform gives travelers a broad range of options for planning trips in the United States and around the world.
          </p>
          <p>
            Whether you are planning a weekend getaway, a family vacation, a business trip, or an international adventure, checking for a Booking.com promo code before completing your reservation can be a smart way to look for savings.
          </p>
          <p>
            CouponsBit helps travelers discover available Booking.com coupon codes, discount offers, vouchers, deals, and other promotional opportunities before they make a booking. Since travel promotions can vary by destination, property, travel dates, and booking conditions, checking the latest available offer can help you make a more informed decision.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Booking.com Promo Code</h3>
    <p>
      A Booking.com promo code may help travelers reduce the cost of an eligible reservation or access a special promotional benefit. However, travel offers work differently from ordinary retail discounts because eligibility can depend on the property, destination, dates, room type, and other booking conditions.
    </p>
    <p>
      Some Booking.com promotions may be automatically reflected in the listed price, while others can require a code or be connected to a particular campaign or user eligibility.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before relying on a promotion, check the terms carefully. Look at the travel dates, cancellation conditions, property eligibility, minimum requirements, and expiration date if one is provided.
    </p>
    <p className="font-medium text-gray-700">
      If you are preparing to make a reservation, checking CouponsBit for a current Booking.com promo code before completing the booking can help you see whether an applicable offer is available.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Booking.com Coupon Code and Discount Offers</h3>
    <p>
      When searching for a Booking.com coupon code, it is useful to consider all the different ways travel savings can appear on the platform.
    </p>
    <p>
      A hotel may already have a reduced rate, while another property may participate in a special promotional campaign. Depending on the destination and booking, travelers can encounter member pricing, seasonal promotions, property-specific discounts, mobile offers, or other deals.
    </p>
    <p>
      This means that the best option is not necessarily a traditional coupon code. Compare the available offer with the final price and booking conditions before deciding.
    </p>
    <p className="font-medium text-gray-700">
      CouponsBit makes it easier to check for Booking.com promotional opportunities before you finalize your travel plans.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">What Can You Book on Booking.com?</h3>
    <p>
      Booking.com has grown beyond traditional hotel reservations and offers travelers access to a broad range of travel products and services.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Hotels</h4>
      <p>
        Hotels remain one of the most popular booking categories on the platform. Travelers can compare properties based on location, room type, amenities, guest reviews, cancellation policies, and other factors.
      </p>
      <p>
        Whether you are looking for a budget-friendly hotel, a business property, a luxury stay, or a family-friendly accommodation, Booking.com provides a wide range of options.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        Before making your reservation, check for a Booking.com promo code that may be applicable to your selected stay.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Resorts</h4>
      <p>
        Resorts can be a popular choice for vacations where travelers want accommodation, dining, leisure facilities, and other amenities in one destination.
      </p>
      <p>
        Depending on the property, travelers can find beach resorts, family resorts, wellness properties, luxury resorts, and other accommodation types.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Apartments and Vacation Homes</h4>
      <p>
        For longer stays or family trips, apartments and vacation homes can provide more space and additional amenities compared with a traditional hotel room.
      </p>
      <p>
        These accommodations may include kitchens, living areas, multiple bedrooms, washing facilities, and other features that can be useful for extended stays.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Hostels and Guesthouses</h5>
        <p className="text-sm">Budget-conscious options in major cities and tourist hubs, ideal for solo travelers, backpackers, and students.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Unique Stays</h5>
        <p className="text-sm">Distinctive properties like villas, cabins, chalets, boats, farm stays, and country houses.</p>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Booking.com Flights</h4>
      <p>
        Booking.com also allows travelers to search for flights, making it possible to compare travel arrangements alongside accommodation.
      </p>
      <p>
        When planning a trip, comparing the total travel cost is important. A lower hotel rate may not necessarily mean a cheaper trip if transportation costs are significantly higher.
      </p>
      <p>
        If you are booking multiple components of a trip, check available promotions and terms carefully to understand which services qualify for a particular offer.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Booking.com Car Rentals</h4>
      <p>
        Rental cars are another travel option available through Booking.com. Travelers can compare vehicles based on pickup location, vehicle category, rental conditions, and other requirements.
      </p>
      <p>
        Car rentals can be particularly useful for road trips, family vacations, business travel, or destinations where public transportation is limited.
      </p>
      <p>
        Before confirming a rental, review the fuel policy, mileage conditions, deposit requirements, insurance details, pickup instructions, and cancellation terms.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        A Booking.com discount code may not apply to every rental, so check the eligibility of the individual promotion.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Booking.com Attractions and Activities</h5>
        <p className="text-sm">Discover and pre-book sightseeing tours, museum tickets, food experiences, excursions, and guided activities.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Booking.com Airport Taxis</h5>
        <p className="text-sm">Arrange convenient airport transfers to accommodation with transparent vehicle types and passenger capacities.</p>
      </div>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Booking.com Seasonal and Major US Travel Promotions</h3>
            <p>
              Travel companies use the US holiday and vacation calendar to create promotional campaigns throughout the year. If your travel dates are flexible, certain periods can be useful for monitoring accommodation and travel deals.
            </p>
            <p><strong>Memorial Day Travel</strong></p>
            <p>
              Memorial Day weekend is an important travel period in the United States. Travelers often use the long weekend for beach trips, city breaks, road trips, and family vacations. Booking early can be helpful because popular destinations can become more competitive around holiday weekends.
            </p>
            <p><strong>Fourth of July Travel</strong></p>
            <p>
              Independence Day is another major US travel period. Hotels and vacation accommodations in destinations hosting fireworks, festivals, beach events, and other celebrations can see increased demand. If you are planning a July 4th getaway, compare accommodation options and check for a Booking.com promo code before finalizing your stay.
            </p>
            <p><strong>Labor Day Weekend</strong></p>
            <p>
              Labor Day marks another popular long weekend for domestic travel. Travelers may use the occasion for short vacations before the summer season comes to an end. Depending on the destination, travelers can find city hotels, resorts, vacation homes, and other accommodations suited to a long weekend.
            </p>
            <p><strong>Summer Vacation Deals</strong></p>
            <p>
              Summer is one of the busiest travel seasons in the US. Families often travel during school holidays, while couples and groups plan beach vacations, road trips, and international journeys. Travelers can compare properties and monitor seasonal promotions to find accommodation that fits their budget.
            </p>
            <p><strong>Back-to-School Travel</strong></p>
            <p>
              While back-to-school season is not traditionally a major vacation period, it can create opportunities for travelers who have flexibility after the peak summer period. Some destinations become less crowded after schools return, potentially giving travelers more accommodation choices.
            </p>
            <p><strong>Thanksgiving Travel</strong></p>
            <p>
              Thanksgiving is one of the busiest travel periods in the United States. Travelers visiting family or taking advantage of the long weekend should consider booking accommodation and transportation early.
            </p>
            <p><strong>Christmas and New Year Travel</strong></p>
            <p>
              The holiday period can be another major travel season, particularly for ski destinations, warm-weather resorts, major cities, and international travel. Prices and availability can vary significantly during the holidays, so compare options carefully and review cancellation policies before booking.
            </p>
            <p><strong>Black Friday and Cyber Monday Travel Deals</strong></p>
            <p>
              Black Friday and Cyber Monday are increasingly associated with travel promotions as well as traditional retail discounts. Travel companies and accommodation providers may use these shopping events to promote special rates, member offers, or limited-time campaigns. If you are searching for a Booking.com promotional code during this period, check the specific terms and validity dates before booking.
            </p>
          </div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Booking.com Promo Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a Booking.com promo code through CouponsBit, follow the instructions associated with the specific offer. Depending on the promotion, the redemption process can vary. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Check CouponsBit website and select the Booking.com offer you want to use.",
                "Visit Booking.com through the relevant offer.",
                "Search for your destination and travel dates.",
                "Select an eligible property, flight, rental car, or other travel service.",
                "Review the booking conditions carefully.",
                "Enter the applicable promotional code if the offer requires one.",
                "Apply the code and confirm that the promotion has been accepted.",
                "Review the final reservation details before completing payment.",
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
              If a code does not work, check whether the booking meets the promotion's requirements. The offer may be limited by destination, travel dates, property, room type, booking channel, or customer eligibility.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Booking.com Offers?</h3>
            <p>
              Travel costs can quickly add up when accommodation, transportation, activities, and other expenses are combined. CouponsBit helps travelers look for savings before they finalize their plans.
            </p>
            <p>
              When you search for a Booking.com promo code, you may discover that several different types of savings are available. A member discount could be more useful for one traveler, while a seasonal property promotion could provide better value for another.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check available promotional opportunities before making their reservation.
            </p>
            <p>
              Whether you are booking a hotel for a business trip, planning a family vacation, reserving a vacation home, or organizing an international getaway, checking current offers can be a useful final step before completing your booking.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Booking.com Reservation</h3>
            <p>
              Whether you are searching for a hotel in a major US city, booking a family vacation, reserving a vacation home, renting a car, finding an airport transfer, or planning activities for your next trip, Booking.com provides a broad range of travel options.
            </p>
            <p>
              Because travel promotions can vary by destination, property, dates, and booking conditions, checking for savings before completing your reservation is always worthwhile.
            </p>
            <p>
              Before you book your next trip, visit CouponsBit to look for the latest Booking.com promo code, coupon code, discount offer, voucher, or other available deal. Compare the promotion with the total cost and booking conditions, and choose the option that best suits your travel plans.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Booking.com Promo Codes</h3>
          {[
            { q: "Does Booking.com have promo codes?", a: "Booking.com offers various promotional opportunities, although the availability and format can differ by property, destination, travel dates, and customer eligibility. Some offers may use a code, while others are automatically applied." },
            { q: "Where can I find a Booking.com promo code?", a: "You can check CouponsBit for available Booking.com promo codes, coupon codes, discount offers, vouchers, and other travel deals before completing your reservation." },
            { q: "How do I use a Booking.com coupon code?", a: "The redemption process depends on the specific promotion. If a code is required, follow the offer's instructions and enter it at the appropriate point during the booking process. Always confirm that the promotion has been applied before completing the reservation." },
            { q: "Why isn't my Booking.com promo code working?", a: "A promotion may not apply if your selected property, travel dates, room type, destination, or booking method does not meet the offer's conditions. The code may also have expired or have customer eligibility requirements." },
            { q: "Can I use a Booking.com discount code on any hotel?", a: "Not necessarily. Travel promotions can be restricted to participating properties, destinations, dates, or room types. Check the individual offer's conditions before booking." },
            { q: "What is Booking.com's Genius program?", a: "Genius is Booking.com's loyalty program that provides eligible customers with discounts and other benefits at participating properties. The benefits available depend on the customer's Genius level and the applicable property." },
            { q: "Does Booking.com offer hotel discounts?", a: "Yes. Accommodation prices and promotional offers can vary by property, destination, travel dates, and booking conditions. Travelers can also find member pricing and other promotional opportunities on participating properties." },
            { q: "Does Booking.com offer flight deals?", a: "Booking.com allows travelers to search for flights and compare available options. Pricing and promotions depend on the route, airline, travel dates, and other conditions." },
            { q: "Can I find vacation homes on Booking.com?", a: "Yes. Booking.com offers a broad range of accommodation types, including vacation homes, apartments, villas, cabins, guesthouses, and other stays, depending on the destination." },
            { q: "Does Booking.com offer car rental deals?", a: "Yes. Travelers can search for rental cars through Booking.com, with available vehicles and pricing varying by location, dates, rental company, and vehicle type." },
            { q: "When is the best time to look for Booking.com deals?", a: "Travel deals can appear throughout the year, but it is useful to watch major travel periods, seasonal transitions, holiday weekends, Black Friday, Cyber Monday, and destination-specific promotional periods. Flexible travel dates can also provide more options." },
            { q: "How can I save more when booking with Booking.com?", a: "Start by checking CouponsBit for a Booking.com promo code, then compare it with available member discounts, property promotions, seasonal offers, and other deals. Review the total booking cost and cancellation terms before selecting your reservation." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Booking.com Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Hotel Deals", "Genius Rewards", "Vacation Homes", "Booking.com Promo Code", "Car Rentals", "Flight Deals", "Seasonal Offers", "Last Minute Stays"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Booking.com Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Booking.com: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
