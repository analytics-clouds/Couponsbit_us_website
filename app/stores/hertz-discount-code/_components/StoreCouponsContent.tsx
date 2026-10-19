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
  Car,
  Fuel,
  MapPin,
  Shield,
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
  { id: "d2", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Weekly Rental Discount", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "SUV & Van Rental Deal", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Free Cancellation Offer", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp", dealText: "Up To 35% OFF", href: "/stores/budget-discount-code" },
  { name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp", dealText: "Up To 20% OFF", href: "/stores/avis-discount-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp", dealText: "Up To 50% OFF", href: "/stores/valvoline-discount-code" },
  { name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp", dealText: "Up To 50% OFF", href: "/stores/harbor-freight-discount-code" },
];

const STORE_URL = "https://hertzuk.sjv.io/c/4303217/2995822/35985?subId1=1015";

export default function HertzCouponsContent() {
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
              <span className="text-black font-extrabold">Hertz</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1791974650/hertz-logo_geobmi.webp" alt="Hertz" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Hertz Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(8.1k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on your next journey with the latest Hertz Discount Code. Enjoy up to 25% OFF eligible car rentals and $50 OFF weekly SUV and minivan rentals. Use a Hertz Promo Code to unlock verified savings on business trips, holidays, and everyday travel while booking with confidence.
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
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791974650/hertz-logo_geobmi.webp" alt="Hertz Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Hertz Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "10%", title: "Hertz Gold+ – Save Up to 10% on Car Rentals All Year", desc: "Enjoy year-round savings on Hertz car rentals with Hertz Gold+ membership.", bullets: ["Get up to 10% off the base rate in the UK, France, Germany, Spain, Italy, Belgium, the Netherlands and Luxembourg.", "Save 5% on the base rate for rentals in other eligible countries worldwide.", "Book your next ride with Hertz and enjoy more value on your travels. Taxes and additional charges are excluded; T&C apply."] },
                  { label: "SAVE", value: "10%", title: "Hertz Partner Offer – Save 10% on Global Car Hire for ICAEW Members", desc: "ICAEW members can enjoy exclusive savings on car rentals with Hertz.", bullets: ["Get 10% off global car hire through this partner offer.", "Choose from a range of vehicles for business trips, holidays and everyday travel.", "Book with Hertz to make your next journey more affordable. Eligibility and T&C apply."] },
                  { label: "FROM", value: "£349", title: "Hertz Rent2Buy – Volkswagen ID.7 Pro S Match Plus from £349", desc: "Explore the Volkswagen ID.7 Pro S Match Plus (86kWh) through Hertz Rent2Buy.", bullets: ["Discover an electric vehicle offering a stated range of up to 434 miles.", "Available Rent2Buy pricing starts from £349, with a listed £500 figure and multiple agreement term options.", "Move towards vehicle ownership with an affordable upfront cost and weekly payment options. Availability and T&C apply."] },
                  { label: "GET", value: "PCO Car", title: "Hertz Rent2Buy – Get a PCO-Ready Car with Affordable Weekly Payments", desc: "Get on the road in London with a PCO-ready vehicle through Hertz Rent2Buy.", bullets: ["Choose a suitable car with a low upfront cost and manageable weekly payments.", "Earn while driving and work towards owning your vehicle at the end of the Rent2Buy agreement.", "Visit the new Uber Greenlight Hub to explore vehicle options and learn more about the programme. Eligibility and T&C apply."] },
                  { label: "SAVE", value: "$50", title: "Hertz – Save $50 on Weekly SUV and Minivan Rentals", desc: "Save $50 on eligible weekly SUV and minivan rentals with Hertz.", bullets: ["Choose a spacious vehicle for family trips, group outings and longer journeys.", "Enjoy extra room for passengers and luggage while travelling together.", "Check eligible rental options and book your next group adventure with Hertz. T&C apply."] },
                  { label: "UP TO", value: "25%", title: "Hertz – Save Up to 25% on Your Next Car Rental", desc: "Plan your next trip and save up to 25% on your next eligible Hertz rental.", bullets: ["Explore new destinations with a rental car suited to your travel plans.", "Take advantage of this limited promotional saving on qualifying bookings.", "Book your next ride with Hertz and enjoy more value on the road. T&C apply."] },
                  { label: "SAVE", value: "20%", title: "Hertz – Get 20% Off Your Next Car Rental", desc: "Save 20% on the best available rate for your next eligible Hertz car rental.", bullets: ["Make travel easier for campus visits, orientation, moving days or graduation celebrations.", "Choose from Hertz’s vehicle fleet to suit your travel needs.", "Reserve your car and enjoy savings on your next journey. Eligibility and T&C apply."] },
                  { label: "UP TO", value: "15%", title: "Hertz Mastercard Offer – Save Up to 15% on Global Car Hire", desc: "Mastercard Standard, Gold and Business credit or debit cardholders can access a Hertz partner offer.", bullets: ["Save up to 15% on eligible global car hire bookings.", "Explore rental options for holidays, business travel and trips abroad.", "Check the offer terms and eligible locations before booking with Hertz. T&C apply."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Hertz: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Hertz?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Hertz is a global car rental company serving leisure travellers, business customers and people who need temporary transportation. Its rental network includes airport locations and other pickup points, with vehicle availability varying by destination. Customers can search for cars suited to different journeys, from everyday city travel to family holidays and longer road trips.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Hertz also operates its Gold+ loyalty programme, which allows eligible members to earn points on qualifying rentals and access benefits such as member discounts and faster pickup services at participating locations. Programme benefits and eligibility depend on the market and applicable terms. 

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Car, name: "Economy Cars", count: "20+", color: "text-blue-500", href: "/categories/automotive" },
                        { icon: MapPin, name: "SUV Rentals", count: "15+", color: "text-purple-500", href: "/categories/automotive" },
                        { icon: Fuel, name: "Van Rentals", count: "10+", color: "text-pink-500", href: "/categories/automotive" },
                        { icon: Shield, name: "Insurance Add-Ons", count: "8+", color: "text-teal-500", href: "/categories/automotive" },
                        { icon: Search, name: "Weekly Deals", count: "12+", color: "text-orange-500", href: "/categories/automotive" },
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
    Explore Hertz Car Rental Options
  </h3>
  <div className="space-y-6">
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Airport Car Hire:</strong> Pick up a vehicle after arriving at your destination and continue your journey without relying entirely on public transport. Check the selected airport's pickup arrangements and opening hours before booking.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Family and Leisure Travel:</strong> Choose a vehicle that suits the number of passengers, luggage and planned activities. For longer journeys, consider comfort, luggage space and fuel requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>City Breaks:</strong> A rental car can help you explore attractions outside the city centre or visit nearby towns at your own pace. Check local parking rules and driving restrictions before setting off.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Business Travel:</strong> Arrange transportation for meetings, client visits and work trips. Booking in advance can make it easier to compare vehicle categories and rental conditions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Longer Road Trips:</strong> If your itinerary includes multiple stops, compare rental durations, mileage conditions and return arrangements before confirming the reservation.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Vehicle categories and availability differ by location, so use the destination-specific Hertz booking page to check your options.
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
          Hertz Discount Code, Car Rental Promo Codes & Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "Hertz Gold+ Membership Offer",
          "Up to 10% OFF",
          "Hertz Gold+ Members",
          "10% off base rates in select EU countries; 5% off base rates worldwide. Excludes taxes and charges. T&C apply.",
          "Car Rentals Worldwide"
        ],
        [
          "Hertz ICAEW Partner Offer",
          "10% OFF",
          "ICAEW Members",
          "Exclusive partner savings for business trips, holidays, and everyday travel. T&C apply.",
          "Global Car Hire"
        ],
        [
          "Hertz Rent2Buy – Volkswagen ID.7",
          "From £349",
          "All Users",
          "Includes £500 listed figure with multiple agreement terms. Electric EV range up to 434 miles. T&C apply.",
          "VW ID.7 Pro S Match Plus"
        ],
        [
          "Hertz Rent2Buy – PCO-Ready Car",
          "Weekly Payments",
          "PCO / Ride-Share Drivers",
          "Low upfront cost with weekly payments towards ownership. Visit Uber Greenlight Hub for details. T&C apply.",
          "PCO-Ready Vehicles (London)"
        ],
        [
          "Hertz SUV & Minivan Savings",
          "$50 OFF",
          "All Users",
          "Save $50 on qualifying weekly rentals. Ideal for family and group trips. T&C apply.",
          "Weekly SUV & Minivan Rentals"
        ],
        [
          "Hertz Travel Savings Offer",
          "Up to 25% OFF",
          "All Users",
          "Limited time promotional savings on qualifying bookings. T&C apply.",
          "Eligible Hertz Car Rentals"
        ],
        [
          "Hertz Best Available Rate Offer",
          "20% OFF",
          "All Users",
          "Save 20% on the best available rate for campus visits, graduations, or travel. T&C apply.",
          "Eligible Hertz Car Rentals"
        ],
        [
          "Hertz Mastercard Partner Offer",
          "Up to 15% OFF",
          "Mastercard Cardholders",
          "Valid for Standard, Gold, and Business credit/debit cardholders on eligible global bookings. T&C apply.",
          "Global Car Hire"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Planning a holiday, organising a business trip or arranging transport after landing at the airport? Having the right rental car can make your journey more flexible. But before confirming your reservation, take a moment to look for a Hertz discount code on CouponsBit. Comparing available promotions can help you find a rental option that suits your travel plans and budget.
          </p>
          <p>
            From weekend drives to longer international trips, Hertz offers vehicle rental services across numerous destinations. Whether you're travelling in the UK, US, France, Spain, Italy, Germany, the Czech Republic, the Netherlands or Belgium, checking the booking terms before you reserve can help you make a more informed choice.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find a Hertz Discount Code on CouponsBit
          </h3>
          <p>
            Before booking, visit CouponsBit to look for a Hertz discount code, car rental promo code or special offer. Promotions may vary according to the pickup location, destination, rental dates, vehicle category and booking conditions.
          </p>
          <p>
            A Hertz promo code may be useful when arranging an airport pickup, reserving a car for a holiday or planning a business journey. However, don't compare offers on the discount alone. Check the total rental cost, included mileage, insurance options, fuel policy, taxes and any additional fees before deciding which booking offers the best overall value.
          </p>
          <p>
            If you're renting across different countries, confirm that the promotion applies to the country where you'll collect the vehicle. A code available for a UK rental may not necessarily apply to a reservation in the United States or continental Europe.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Get More From Hertz Gold+
          </h3>
          <p>
            If you rent cars regularly, it may be worth looking at Hertz Gold+ alongside any available promo code. The programme is free to join and offers eligible members benefits such as earning points towards rental rewards, member rates and expedited services at participating locations.
          </p>
          <p>
            Hertz's UK programme information advertises savings of up to 10% on the base rate in selected European countries, including the UK, France, Germany, Spain, Italy and Benelux. The discount excludes taxes and certain other charges, and restrictions apply to affiliated or already-discounted rates. Always verify the current terms for your booking country.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Hertz Promo Code
          </h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and look for an available Hertz discount code or rental offer.</li>
            <li>Read the terms to confirm eligible destinations, dates and vehicle categories.</li>
            <li>Open Hertz and enter your pickup location, rental dates and return details.</li>
            <li>Choose a suitable vehicle and enter the promotional code or offer details where required.</li>
            <li>Review the total price and confirm that any applicable discount appears before completing your reservation.</li>
          </ol>
          <p>
            If the code doesn't work, check the expiry date, destination restrictions, booking conditions and whether the offer can be combined with other discounts.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find Better Hertz Deals
          </h3>
          <p>
            Planning ahead gives you more time to compare rental durations, pickup points and vehicle types. Airport and city-centre locations may have different availability, while prices can change according to demand and travel dates.
          </p>
          <p>
            Compare the full booking details rather than focusing only on the advertised rate. Check the deposit, fuel policy, mileage allowance, cancellation terms, driver requirements and optional extras. If you expect to rent more than once, compare eligible Gold+ membership benefits with any one-time promotional offer.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Book Your Next Rental With CouponsBit
          </h3>
          <p>
            Whether you're planning a holiday in Europe, a road trip across the US or a weekend away in the UK, comparing rental options before booking can help you avoid surprises. Check CouponsBit for a Hertz discount code, car rental promo code and current deals, then review the conditions and total rental cost before confirming your vehicle.
          </p>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            FAQs About Hertz Discount Codes
          </h3>
          {[
            {
              q: "Does Hertz offer discount codes?",
              a: "Hertz promotions and special rates can vary by country and booking conditions. Check CouponsBit for available offers before reserving."
            },
            {
              q: "Can I use the same Hertz promo code in every country?",
              a: "No guarantee applies across all markets. Check the terms for your specific rental location and destination."
            },
            {
              q: "Is Hertz Gold+ free to join?",
              a: "Yes. Hertz describes Gold+ as a free membership programme, with benefits subject to eligibility and location."
            },
            {
              q: "Can I use a discount code with Hertz Gold+ benefits?",
              a: "That depends on the specific offer and rate conditions. Some promotions exclude already-discounted or affiliated rates, so compare the terms before booking."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
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
            Popular Hertz Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Hertz Discount Code",
              "Car Rental Deals",
              "SUV Rental",
              "Van Rental",
              "Percentage Off Sitewide",
              "Weekly Rental Discount",
              "Seasonal Sale",
              "Free Cancellation"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Hertz Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "GOLD+ MEMBERSHIP",
                sub: "Save up to 10% on car rentals all year",
              },
              {
                heading: "RENT2BUY VW ID.7",
                sub: "From £349 through Hertz Rent2Buy",
              },
              {
                heading: "WEEKLY SUV & MINIVAN",
                sub: "Save $50 on eligible weekly rentals",
              },
              {
                heading: "MASTERCARD OFFER",
                sub: "Save up to 15% on global car hire",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  H
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
                  href={STORE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Hertz: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
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
