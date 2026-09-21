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
  ExternalLink, CheckSquare, Calendar,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  MapPin,
  Ticket,
  Compass,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Tour & Activity Discounts", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Sightseeing Pass Savings", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Skip-the-Line Ticket Deals", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Free Cancellation Offer", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 50% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 30% OFF", href: "/stores/expedia-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
  { name: "Yas Island", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp", dealText: "Up To 50% OFF", href: "/stores/yas-island-promo-code" },
  { name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", dealText: "Up To 25% OFF", href: "/stores/zen-hotels-discount-code" },
];

const STORE_URL = "https://www.viator.com";

export default function ViatorCouponsContent() {
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
              <span className="text-black font-extrabold">Viator</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/viator-logo_tvu8qa.webp" alt="Viator" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Viator Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(19.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Viator promo codes to book tours from $39 and save 15% on select experiences. Explore Las Vegas, Charleston, London, Barcelona, and Key West, plus enjoy Sagrada Familia tours from $63.68 and Montserrat wine experiences from $58 in Sept 2026.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "500+", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789642719/44_orfufu.webp" alt="Viator Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Viator Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "15% OFF", title: "Viator – Promo Code for Valley of Fire & Seven Magic Mountains | 15% OFF", desc: "Save 15% OFF on a Valley of Fire & Seven Magic Mountains day tour from Las Vegas.", bullets: ["Enjoy convenient hotel pickup from downtown Las Vegas or the Vegas Strip, with free cancellation up to 24 hours before the tour.", "Use Promo Code: Check Viator checkout for any applicable promotional savings and reserve now with the option to pay later."] },
                  { label: "FROM", value: "$39", title: "Viator – Promo Code for Las Vegas Tours & Excursions | From $39", desc: "Explore Las Vegas tours and excursions starting from just $39 per person and discover exciting experiences across the city.", bullets: ["Choose from a variety of destinations and activities, making it easy to plan your next Las Vegas adventure.", "Use Promo Code: Check for applicable Viator promotional offers and book your preferred experience at an attractive price."] },
                  { label: "FROM", value: "$33", title: "Viator – Promo Code for Charleston Tours & Tickets | From $33", desc: "Discover the charm of Charleston with top tours and tickets starting from just $33 on Viator.", bullets: ["Explore historic landmarks, elegant architecture, Lowcountry cuisine, and scenic coastal experiences with knowledgeable guides.", "Use Promo Code: Check Viator for available promotional savings and choose an experience that matches your travel plans."] },
                  { label: "FROM", value: "$79", title: "Viator – Promo Code for Key West Tour Tickets | From $79", desc: "Experience the tropical beauty of Key West with tour tickets starting from just $79.", bullets: ["Enjoy activities ranging from snorkeling and sightseeing to historic landmarks and relaxing beach experiences.", "Use Promo Code: Check Viator for applicable promotional offers and book your Key West experience at a great price."] },
                  { label: "FROM", value: "$99", title: "Viator – Las Vegas Helicopter Night Flight | From $99", desc: "Take an unforgettable Las Vegas helicopter night flight starting from just $99 per person.", bullets: ["Enjoy an approximately 10–12 minute aerial experience with optional VIP transportation and taxes and fees included.", "Cancel up to 3 days in advance and secure your memorable Las Vegas experience with Viator."] },
                  { label: "FROM", value: "$55", title: "Viator – Top Places to Visit in London | From $55", desc: "Explore some of the top places to visit in London with experiences starting from just $55 per person.", bullets: ["Discover famous attractions, sightseeing experiences, and memorable activities while planning your London adventure.", "Browse Viator experiences and book your preferred London tour at an attractive starting price."] },
                  { label: "FROM", value: "$63.68", title: "Viator – Barcelona Sagrada Familia Guided Tour | From $63.68", desc: "Visit Barcelona’s iconic Sagrada Familia with a skip-the-line guided tour starting from $63.68 per person.", bullets: ["Enjoy an informative guided experience while exploring one of Spain’s most famous architectural landmarks.", "Book through Viator and secure your preferred tour time while availability lasts."] },
                  { label: "FROM", value: "$58", title: "Viator – Montserrat Wine Tasting & Tapas Tour | From $58", desc: "Enjoy a 7–8 hour Montserrat experience featuring a cogwheel train journey, gourmet wine tasting, and tapas or lunch.", bullets: ["Get the experience from $58, reduced from $70, with free cancellation available.", "Explore the stunning surroundings of Montserrat while enjoying local food and wine experiences."] },
                  { label: "SALE", value: "10% OFF", title: "Viator – Flamenco Show at Dalmases Palace | 10% Savings", desc: "Experience an authentic Flamenco show at Dalmases Palace in Barcelona with 10% savings.", bullets: ["Enjoy a captivating evening of traditional Spanish music, dance, and culture in a historic palace setting.", "Tickets start from $32, making it an exciting cultural experience to add to your travel itinerary."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Viator: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Viator?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Viator is an online travel experiences marketplace where travelers can discover and book tours, activities, attractions, excursions, and experiences in destinations around the world.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is part of Tripadvisor and focuses specifically on things travelers can do at their destination. Instead of limiting your planning to flights and accommodation, Viator lets you explore activities that can fill your itinerary once you arrive.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its marketplace covers a wide range of experiences, including sightseeing tours, walking tours, food and drink experiences, cultural activities, outdoor adventures, day trips, cruises, attraction tickets, and private excursions.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Travelers can browse experiences based on their destination and preferences, read reviews, look at photos, compare options, and book activities online.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For someone visiting a new city, Viator can make it easier to discover experiences they might not have found on their own. You can book a guided tour to see major landmarks, take a food tour to explore local cuisine, join an outdoor adventure, or plan a day trip beyond the city.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is useful for different types of travelers because there isn't one way to explore a destination. Some people want a structured sightseeing itinerary, while others prefer hands-on activities, nature experiences, or local cultural encounters.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Compass, name: "Tours & Activities", count: "500+", color: "text-blue-500", href: "/categories/travel" },
                        { icon: Ticket, name: "Skip-the-Line Tickets", count: "220+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: MapPin, name: "Sightseeing Passes", count: "140+", color: "text-teal-500", href: "/categories/travel" },
                        { icon: Sparkles, name: "Day Trips", count: "180+", color: "text-green-500", href: "/categories/travel" },
                        { icon: Search, name: "Travel Experiences", count: "300+", color: "text-orange-500", href: "/categories/travel" },
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
    How to Find Better Viator Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Booking",
        sub: "Before reserving an activity, check CouponsBit for the latest Viator promo code, coupon codes, discounts, vouchers, and travel offers.",
      },
      {
        icon: Compass,
        title: "Compare Similar Experiences",
        sub: "Don't automatically book the first tour you see. Compare similar experiences based on duration, itinerary, group size, inclusions, reviews, and cancellation policies.",
      },
      {
        icon: Star,
        title: "Read Recent Reviews",
        sub: "Reviews can provide useful insight into the actual experience. Pay attention to comments about guides, organization, transportation, meeting points, and whether the experience matched its description.",
      },
      {
        icon: CheckSquare,
        title: "Check What's Included",
        sub: "A lower advertised price may not include transportation, meals, entrance fees, equipment, or other extras. Read the experience details carefully so you know what you're actually paying for.",
      },
      {
        icon: MapPin,
        title: "Book Around Your Itinerary",
        sub: "Think about travel time between activities. Booking several experiences close together may look efficient but can create unnecessary stress if one runs late.",
      },
      {
        icon: ShieldCheck,
        title: "Consider Free-Cancellation Options",
        sub: "Where available, flexible cancellation policies can provide additional peace of mind when your travel plans aren't completely fixed.",
      },
      {
        icon: Calendar,
        title: "Check Seasonal Promotions",
        sub: "Summer vacations, spring break, holiday travel, and major shopping periods can all be useful times to check for travel experience promotions.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
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
          Viator Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Offer
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Discount / Price
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Eligibility
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Key Conditions
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Applicable On
        </th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      {[
        {
          title: "Viator – Promo Code for Valley of Fire & Seven Magic Mountains",
          discount: "15% OFF",
          eligibility: "All Users",
          conditions: "Hotel pickup from downtown/Strip; free cancellation up to 24 hrs before tour",
          applicableOn: "Valley of Fire & Seven Magic Mountains Tour"
        },
        {
          title: "Viator – Promo Code for Las Vegas Tours & Excursions",
          discount: "From $39",
          eligibility: "All Users",
          conditions: "Choose from various city destinations; reserve now & pay later options available",
          applicableOn: "Las Vegas Tours & Excursions"
        },
        {
          title: "Viator – Promo Code for Charleston Tours & Tickets",
          discount: "From $33",
          eligibility: "All Users",
          conditions: "Includes historic landmarks, food, and coastal tours with guides",
          applicableOn: "Charleston Tours & Tickets"
        },
        {
          title: "Viator – Promo Code for Key West Tour Tickets",
          discount: "From $79",
          eligibility: "All Users",
          conditions: "Covers snorkeling, sightseeing, landmarks, and beach experiences",
          applicableOn: "Key West Tour Tickets"
        },
        {
          title: "Viator – Las Vegas Helicopter Night Flight",
          discount: "From $99",
          eligibility: "All Users",
          conditions: "10–12 min flight; optional VIP transport; cancel up to 3 days in advance; taxes included",
          applicableOn: "Las Vegas Helicopter Night Flight"
        },
        {
          title: "Viator – Top Places to Visit in London",
          discount: "From $55",
          eligibility: "All Users",
          conditions: "Covers top attractions, sightseeing tours, and activities",
          applicableOn: "London Tours & Experiences"
        },
        {
          title: "Viator – Barcelona Sagrada Familia Guided Tour",
          discount: "From $63.68",
          eligibility: "All Users",
          conditions: "Includes skip-the-line guided entrance; book early for availability",
          applicableOn: "Sagrada Familia Guided Tour"
        },
        {
          title: "Viator – Montserrat Wine Tasting & Tapas Tour",
          discount: "From $58 (Was $70)",
          eligibility: "All Users",
          conditions: "7–8 hr tour; includes cogwheel train, wine tasting & tapas/lunch; free cancellation",
          applicableOn: "Montserrat Wine Tasting & Tapas Tour"
        },
        {
          title: "Viator – Flamenco Show at Dalmases Palace",
          discount: "10% OFF (From $32)",
          eligibility: "All Users",
          conditions: "Live traditional Spanish music and dance performance in a historic setting",
          applicableOn: "Dalmases Palace Flamenco Tickets"
        }
      ].map((item, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0"
        >
          <td className="max-w-[220px] p-5 align-middle font-black text-black">
            {item.title}
          </td>
          <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
            {item.discount}
          </td>
          <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
            {item.eligibility}
          </td>
          <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
            {item.conditions}
          </td>
          <td className="max-w-[180px] p-5 align-middle text-gray-500">
            {item.applicableOn}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            A great trip is about more than booking a flight and finding a hotel. The experiences you have once you arrive are often what turn a vacation into a story worth remembering. From guided city tours and food experiences to outdoor adventures, cultural activities, day trips, and sightseeing excursions, Viator helps travelers discover things to do in destinations around the world.
          </p>
          <p>
            Planning your next adventure? Before booking an activity, check CouponsBit for a Viator promo code. You can also explore Viator coupon codes, discount offers, vouchers, tour deals, activity promotions, and other opportunities to make your travel experiences more affordable.
          </p>
          <p>
            Whether you're planning a family vacation, a romantic getaway, a solo trip, or a weekend escape, comparing available offers before booking can help you get more from your travel budget.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Viator Promo Code</h3>
    <p>A Viator promo code can provide savings on an eligible experience when the promotion's terms are met.</p>
    <p>If you've already chosen an activity, check CouponsBit before completing your booking. You may find a promotional code that applies to your experience or another offer that provides better value.</p>
    <p>Viator promotions can vary based on the activity, destination, customer eligibility, booking period, and other conditions. Some offers may be limited to selected experiences or require specific booking criteria.</p>
    <p>Always read the terms of the promotion before applying it. Check the expiration date, eligibility requirements, and any restrictions associated with the offer.</p>
    <p>If one code doesn't apply to your booking, compare it with other available Viator deals rather than assuming there are no savings available.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Viator Coupon Code and Discount Offers</h3>
    <p>A Viator coupon code isn't the only way to look for travel savings.</p>
    <p>Depending on the current promotions, you may find discounts on selected experiences, destination-specific offers, limited-time promotions, or other booking incentives.</p>
    <p>The best offer depends on your itinerary.</p>
    <p>A discount on a single attraction may work well for a short city break, while a percentage-based offer could provide greater value when you're booking several activities for a family or group.</p>
    <p>Before confirming your reservation, compare the available promotion with the complete booking cost and make sure the offer applies to the experience you've selected.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Can You Book on Viator?</h3>
    <p>Viator covers a huge range of travel experiences, so your options can look very different depending on your destination.</p>
    <p><strong>Sightseeing Tours:</strong> If you're visiting a city for the first time, a sightseeing tour can be an easy way to see major landmarks without planning every detail yourself.</p>
    <p>Options can include guided walking tours, bus tours, private tours, hop-on hop-off experiences, and other ways to explore popular attractions.</p>
    <p><strong>Food and Drink Experiences:</strong> Food is one of the best ways to experience a destination.</p>
    <p>Travelers can discover food tours, cooking classes, tastings, market visits, winery experiences, brewery tours, and other culinary activities.</p>
    <p>Whether you're exploring local street food or learning how to prepare regional dishes, these experiences can add something memorable to your trip.</p>
    <p><strong>Outdoor Adventures:</strong> For travelers who would rather spend their vacation outdoors, Viator offers access to experiences such as hiking, kayaking, snorkeling, cycling, rafting, ziplining, and other adventures depending on the destination.</p>
    <p>Availability, age requirements, physical requirements, and safety conditions can vary, so review the activity details before booking.</p>
    <p><strong>Day Trips:</strong> Sometimes the best part of a vacation happens outside the city you're staying in.</p>
    <p>Day trips can take travelers to nearby towns, natural attractions, historical sites, national parks, beaches, or other destinations.</p>
    <p>A guided day trip can also save you the hassle of planning transportation and an itinerary yourself.</p>
    <p><strong>Cultural Experiences:</strong> Travelers interested in local history and culture can explore experiences such as museum visits, historical tours, traditional performances, cultural workshops, and neighborhood tours.</p>
    <p>These activities can provide more context about the destination than simply visiting its most famous landmarks.</p>
    <p><strong>Attraction Tickets:</strong> Viator can also help travelers find tickets and admission options for popular attractions.</p>
    <p>Depending on the destination, you may find experiences involving museums, observation decks, theme parks, historic sites, monuments, and other attractions.</p>
    <p><strong>Cruises and Water Experiences:</strong> Water-based experiences can be another great way to explore a destination.</p>
    <p>Options can include sightseeing cruises, dinner cruises, boat tours, snorkeling trips, sailing experiences, and other activities depending on the location.</p>
    <p><strong>Private Tours:</strong> If you prefer a more personalized itinerary, private tours can provide a different experience from joining a large group.</p>
    <p>Private options may allow greater flexibility around timing, interests, and itinerary depending on the tour operator.</p>
    <p><strong>Family Experiences:</strong> Traveling with children can require a little more planning. Family-friendly tours, attractions, interactive activities, and outdoor experiences can help keep different age groups entertained.</p>
    <p>Always check age restrictions and activity requirements before booking.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Viator Travel Deals</h3>
    <p>Travel experiences don't have to be expensive to be memorable, but choosing the right activity can make a difference to your overall trip budget.</p>
    <p>When browsing Viator, compare similar experiences rather than automatically choosing the first result.</p>
    <p>Two tours covering similar attractions may differ in duration, group size, inclusions, meeting points, transportation, and cancellation terms.</p>
    <p>A Viator discount code can help reduce the eligible cost, but the cheapest experience isn't necessarily the best one. Reviews, itinerary details, inclusions, and operator information should also factor into your decision.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular US Destinations to Explore With Viator</h3>
    <p>Viator's marketplace covers destinations worldwide, including many popular locations across the US.</p>
    <p><strong>New York City:</strong> From Manhattan sightseeing and food tours to museums, cruises, and day trips, New York offers an enormous variety of experiences.</p>
    <p>Travelers can explore famous landmarks, neighborhoods, cultural attractions, and culinary experiences.</p>
    <p><strong>Las Vegas:</strong> Las Vegas isn't only about casinos. Visitors can explore shows, helicopter tours, desert adventures, food experiences, attractions, and day trips to surrounding destinations.</p>
    <p><strong>Orlando:</strong> Orlando is a popular destination for families, with attractions, theme-park experiences, wildlife activities, and other entertainment options.</p>
    <p><strong>Los Angeles:</strong> Travelers can explore Hollywood, celebrity-focused tours, beaches, food experiences, museums, and day trips around Southern California.</p>
    <p><strong>San Francisco:</strong> San Francisco offers sightseeing tours, bay cruises, food experiences, neighborhood walks, and trips to nearby attractions.</p>
    <p><strong>Miami:</strong> From boat tours and water activities to food experiences and cultural excursions, Miami offers plenty of ways to explore beyond the beach.</p>
    <p><strong>Washington, DC:</strong> History and culture are major attractions in Washington, DC. Travelers can explore monuments, museums, historical sites, guided tours, and other experiences.</p>
    <p>These are just examples. Viator's selection changes by destination and availability.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Viator Seasonal Promotions and Major US Travel Occasions</h3>
    <p>Certain times of the year are especially popular for travel. Planning your activities early can help you build an itinerary while keeping an eye on available promotions.</p>
    <p><strong>Spring Break:</strong> Spring break is a popular period for travel, particularly among families, students, and younger travelers.</p>
    <p>Depending on the destination, popular activities can include beach excursions, boat trips, sightseeing tours, outdoor adventures, and cultural experiences.</p>
    <p><strong>Easter:</strong> Easter weekend can be a good opportunity for a short family getaway or city break.</p>
    <p>Travelers can explore sightseeing tours, food experiences, attraction tickets, and family-friendly activities.</p>
    <p><strong>Memorial Day Weekend:</strong> Memorial Day often marks the beginning of the busy summer travel season.</p>
    <p>Travelers may use the long weekend for road trips, city breaks, outdoor adventures, and day trips.</p>
    <p>Check for a Viator coupon code before booking activities for your trip.</p>
    <p><strong>Fourth of July:</strong> Independence Day is a popular travel period in the US, with travelers heading to cities, beaches, national parks, and other destinations.</p>
    <p>Sightseeing tours, cruises, outdoor activities, and attraction tickets can all be part of a Fourth of July itinerary.</p>
    <p><strong>Summer Vacation:</strong> Summer is one of the busiest travel periods of the year.</p>
    <p>Families and groups can explore everything from theme parks and sightseeing tours to hiking excursions, cruises, food tours, and day trips.</p>
    <p>If you're booking multiple experiences, compare available promotions before confirming your itinerary.</p>
    <p><strong>Labor Day Weekend:</strong> Labor Day provides another opportunity for a late-summer getaway.</p>
    <p>Whether you're visiting a new city or planning an outdoor adventure, check current Viator offers before booking activities.</p>
    <p><strong>Fall Travel:</strong> Fall is an excellent time for city breaks, scenic excursions, food experiences, and seasonal activities.</p>
    <p>Some destinations also offer foliage tours and other experiences designed around the changing season.</p>
    <p><strong>Halloween:</strong> Halloween can be a fun time to explore themed attractions, ghost tours, haunted experiences, and other seasonal activities.</p>
    <p>If you're traveling during October, check what's available at your destination.</p>
    <p><strong>Thanksgiving Weekend:</strong> Thanksgiving weekend can be a busy travel period, with families visiting relatives and others taking short vacations.</p>
    <p>If you're traveling during this time, consider booking popular experiences ahead of time.</p>
    <p><strong>Black Friday and Cyber Monday:</strong> Black Friday and Cyber Monday are traditionally associated with retail shopping, but travelers can also keep an eye out for promotions on travel experiences.</p>
    <p>If you're planning future trips, checking for a Viator promo code around major promotional periods may be worthwhile.</p>
    <p><strong>Christmas and Holiday Season:</strong> Holiday travel can include Christmas markets, festive tours, seasonal attractions, light displays, food experiences, and other activities.</p>
    <p>Booking popular holiday experiences early can help you secure the dates and times you want.</p>
    <p><strong>New Year's Eve:</strong> Travelers celebrating New Year's Eve in a new city can find cruises, sightseeing experiences, dinner events, shows, and other activities depending on the destination.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Viator Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Viator promo code through CouponsBit, follow the instructions provided with the individual offer. A typical process may look like this:
            </p>
            <div className="space-y-6">
              {[
                "Find the Viator offer you want to use.",
                "Visit Viator and search for your destination or preferred activity.",
                "Browse the available experiences.",
                "Review the itinerary, inclusions, ratings, and cancellation information.",
                "Select your preferred date and number of travelers.",
                "Proceed to the booking or checkout stage.",
                "Enter the applicable promo code where requested.",
                "Apply the code and confirm that the promotion has been reflected.",
                "Review the complete booking total.",
                "Complete your reservation."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check the offer's expiration date and eligibility requirements. Some promotions may be limited to specific experiences, destinations, customers, or booking periods.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Viator Offers?
            </h3>
            <p>
              Travel experiences can quickly add up, especially when you're booking for a family or group.
            </p>
            <p>
              CouponsBit gives travelers a convenient place to check for a Viator promo code before booking. You can also discover coupon codes, discount offers, vouchers, tour deals, activity promotions, and other potential savings.
            </p>
            <p>
              The most valuable offer isn't always the one with the biggest advertised discount. It should also fit your itinerary, destination, preferred activity, and travel plans.
            </p>
            <p>
              By checking CouponsBit before booking, you can compare available promotions and make your travel budget work a little harder.
            </p>
          </div>

          {/* Section: Make Your Next Trip More Memorable */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Make Your Next Trip More Memorable
            </h3>
            <p>
              A vacation isn't complete when you arrive at your hotel. The tours you take, food you try, landmarks you discover, and experiences you share can become the highlights of your entire trip.
            </p>
            <p>
              Viator makes it easier to discover those experiences by bringing tours, activities, attractions, excursions, and other things to do together in one marketplace.
            </p>
            <p>
              Before booking your next adventure, check CouponsBit for the latest Viator promo code, along with coupon codes, discount offers, vouchers, tour deals, activity promotions, and other travel savings. Compare the available offers with your plans, check the terms, and choose the experience that fits your trip and your budget.
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
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Viator Promo Codes
          </h3>
          {[
            { q: "Does Viator offer promo codes?", a: "Yes. Viator offers promotional campaigns and discounts from time to time. Availability and eligibility can vary by promotion, experience, destination, and customer." },
            { q: "Where can I find a Viator promo code?", a: "You can check CouponsBit for available Viator promo codes, coupon codes, discount offers, vouchers, and travel deals before booking an experience." },
            { q: "How do I use a Viator coupon code?", a: "Select your experience, choose the applicable date and number of travelers, proceed to checkout, and enter the coupon or promotional code in the designated field. Confirm that the discount has been applied before completing your booking." },
            { q: "Why isn't my Viator promo code working?", a: "The code may have expired, or the experience you're booking may not meet the promotion's requirements. Other restrictions may include destination, activity, customer eligibility, booking period, or minimum purchase requirements." },
            { q: "Can I use a Viator discount code on any activity?", a: "Not necessarily. Some promotions may apply only to selected experiences or bookings. Always check the individual offer's terms." },
            { q: "What types of activities can I book through Viator?", a: "Viator offers a broad range of experiences, including sightseeing tours, food tours, outdoor adventures, day trips, cruises, attraction tickets, cultural activities, private tours, and family-friendly experiences." },
            { q: "Can I book Viator experiences in the US?", a: "Yes. Viator features experiences in destinations across the US as well as international destinations." },
            { q: "Does Viator offer family-friendly activities?", a: "Yes. Depending on the destination, travelers can find family-friendly tours, attractions, outdoor activities, and other experiences. Check the individual activity for age restrictions and requirements." },
            { q: "Does Viator offer seasonal deals?", a: "Viator promotions can change throughout the year. Major travel periods and holidays can be useful times to check for available offers." },
            { q: "Does Viator have Black Friday deals?", a: "Viator may feature promotions around major shopping periods such as Black Friday and Cyber Monday. Available offers can change, so check the latest promotions before booking." },
            { q: "When is the best time to look for Viator deals?", a: "There isn't one guaranteed time when every activity will have a discount. However, checking before major travel seasons, holidays, and promotional shopping periods can help you discover available offers." },
            { q: "How can I save money on Viator?", a: "Start by checking CouponsBit for a Viator promo code, then compare it with activity-specific promotions and different tour options. Look at the complete booking cost, inclusions, reviews, and cancellation terms before choosing an experience." }
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
            Popular Viator Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Viator Promo Code",
              "Day Trips & Tours",
              "City Sightseeing",
              "Food & Wine Tours",
              "Outdoor Adventures",
              "Museum Tickets",
              "Free Cancellation Tours",
              "App Promo Deals"
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
            Today's Top Viator Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "15% OFF", sub: "Valley of Fire & Seven Magic Mountains | 15% OFF" },
              { heading: "FROM $39", sub: "Las Vegas Tours & Excursions | From $39" },
              { heading: "FROM $33", sub: "Charleston Tours & Tickets | From $33" },
              { heading: "FROM $79", sub: "Key West Tour Tickets | From $79" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  V
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
                  href="https://www.viator.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Viator: ${deal.heading}`} 
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
