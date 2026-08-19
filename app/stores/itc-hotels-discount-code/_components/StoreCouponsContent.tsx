"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,ArrowRight, CheckCircle2,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck, Calendar, Clock, Sun, Coffee, Utensils, Sparkles, Compass, PartyPopper, Heart, Crown,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Hotel,
  UtensilsCrossed,
  Award,
  MapPin,
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
  { id: "d1", label: "UP TO", heading: "Member Exclusive Stay | UP TO 35% OFF", sub: "ITC Hotels" },
  { id: "d2", label: "UP TO", heading: "Exclusive Membership Savings | UP TO 50% OFF", sub: "ITC Hotels" },
  { id: "d3", label: "UP TO", heading: "All-In Getaway Package | SAVE UP TO 20%", sub: "ITC Hotels" },
  { id: "d4", label: "FLAT", heading: "Goa Vacation Deal | FLAT 33% OFF", sub: "ITC Hotels" },
  { id: "d5", label: "FLAT", heading: "All-In Stay Savings | FLAT 20% OFF", sub: "ITC Hotels" },
  { id: "d6", label: "TOP", heading: "Grand Golf Retreat", sub: "Luxury Golf Escape" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Inspiring Vacation", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/inspiring-vacation-logo_mokiew.webp", dealText: "Up To 50% OFF", href: "/stores/inspiring-vacation-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
];

const STORE_URL = "https://itchotels.pxf.io/c/4303217/3739377/47033?subId1=1015";

export default function ItcHotelsCouponsContent() {
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
              <span className="text-black font-extrabold">ITC Hotels</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp" alt="ITC Hotels" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">ITC Hotels</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(21.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find ITC Hotels promo codes, discount codes, and stay deals for Aug 2026. Members can save up to 50% on eligible stays, while Goa and extended stays offer 33% OFF. Enjoy up to 20% OFF dining, spa, beverages and hotel services.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "1.1k", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787136822/163_zywn34.webp" alt="ITC Hotels Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
        {/* Coupons + Sidebar */}
<section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">ITC Hotels Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "35% OFF", title: "ITC Hotels – Member Exclusive Stay | UP TO 35% OFF 🏨✨", desc: "Save UP TO 35% OFF on stays with the exclusive ITC Hotels Member Offer.", bullets: ["Members can earn 2X Green Points on eligible hotel bookings.", "Enjoy 20% OFF on selected dining, soft beverages and spa experiences.", "Ideal for USA travelers planning a luxury vacation or India getaway.", "Book By: May 3, 2026 | Stay Valid Through: October 31, 2026."] },
          { label: "UP TO", value: "50% OFF", title: "ITC Hotels – Exclusive Membership Savings | UP TO 50% OFF ⭐", desc: "Join the ITC Hotels membership program and unlock UP TO 50% OFF on eligible stays.", bullets: ["Access special member-only hotel rates and exclusive hospitality benefits.", "Enjoy premium rooms, dining experiences and luxury services at participating properties.", "A great option for USA visitors planning multiple stays across India.", "Limited-period membership savings may be subject to participating hotel terms."] },
          { label: "UP TO", value: "20% OFF", title: "ITC Hotels – All-In Getaway Package | SAVE UP TO 20% 🍽️🌴", desc: "Plan a relaxing luxury escape with the ITC Hotels All-In Getaway Experience.", bullets: ["Enjoy daily breakfast, lunch and dinner at the hotel's coffee shop.", "Save UP TO 20% OFF on food, soft beverages, spa, salon and laundry services.", "A convenient option for USA travelers looking for an all-inclusive-style hotel experience in India.", "Offer Valid Through: December 31, 2026, subject to availability."] },
          { label: "FLAT", value: "33% OFF", title: "ITC Hotels – Goa Vacation Deal | FLAT 33% OFF 🌴☀️", desc: "Plan your next Goa vacation and enjoy FLAT 33% OFF on eligible stays.", bullets: ["Perfect for USA travelers looking for a tropical beach escape in India.", "Extend your Goa vacation and enjoy luxury accommodation at a better value.", "Limited-period offer with availability based on participating properties."] },
          { label: "FLAT", value: "20% OFF", title: "ITC Hotels – All-In Stay Savings | FLAT 20% OFF 🍽️🧖", desc: "Enjoy FLAT 20% OFF on eligible food, beverages and hotel services.", bullets: ["Save on experiences including dining, spa and salon services during your stay.", "Designed for travelers who want to enjoy more amenities without stretching their vacation budget.", "A convenient luxury add-on for USA visitors staying at participating ITC Hotels.", "Offer applies to eligible guests and services."] },
          { label: "TOP", value: "GOLF ESCAPE", title: "ITC Hotels – Grand Golf Retreat | Luxury Golf Escape ⛳🏨", desc: "Experience a premium golf-focused getaway with the ITC Hotels Grand Golf Retreat.", bullets: ["Enjoy a complimentary golf round at Classic Golf & Country Club.", "Get 50% OFF on spa services for a relaxing post-golf experience.", "Complimentary buffet breakfast and dinner are included with the package.", "Ideal for USA golf enthusiasts seeking a luxury India vacation experience."] },
          { label: "FLAT", value: "33% OFF", title: "ITC Hotels – Extended Escape | FLAT 33% OFF 🛏️🌴", desc: "Stay longer at ITC Hotels and save FLAT 33% OFF on eligible stays.", bullets: ["Available for stays of 3 nights or more.", "Perfect for extended vacations, family trips and workcations in India.", "Enjoy premium accommodation and hospitality while getting more value from a longer stay.", "A smart choice for USA travelers planning an extended India itinerary."] },
          { label: "FLAT", value: "15% OFF", title: "ITC Hotels – Summer Vacation Offer | FLAT 15% OFF ☀️🏨", desc: "Make your summer travel plans with FLAT 15% OFF on eligible ITC Hotels bookings.", bullets: ["Available at participating ITC Hotels across India.", "Ideal for USA travelers planning summer holidays, family vacations or weekend escapes.", "Combine luxury accommodation with premium dining and hospitality experiences.", "Check participating properties and booking conditions before reserving your stay."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    <div className="text-[22px] sm:text-[32px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop ITC Hotels: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is an ITC Hotels Coupon Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           An ITC Hotels coupon code is another term travelers may use when searching for a promotional code that can be applied to an eligible hotel booking.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           However, not every hotel promotion requires a coupon code. ITC Hotels may also advertise special rates, packages, seasonal promotions, member benefits, or limited-period offers where the discount is reflected directly in the booking price.
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
               { icon: MapPin, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: UtensilsCrossed, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">What Types of ITC Hotels Offers Can You Find?</h3>
  
  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
    Hotel promotions can change frequently, particularly around holidays, seasonal travel periods, and special occasions. Depending on the property and booking dates, travelers may come across different types of offers.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Percent,
        title: "Room Rate Offers",
        sub: "Some promotions provide a reduced rate on selected rooms or dates. These can be useful for travelers who have flexible travel plans."
      },
      {
        icon: Calendar,
        title: "Stay Longer Offers",
        sub: "Hotels sometimes offer better value when guests extend their stay. A longer-stay promotion may reduce the effective nightly cost or include additional benefits."
      },
      {
        icon: Clock,
        title: "Early Booking Offers",
        sub: "Planning ahead can sometimes unlock special rates. Early-booking promotions are particularly useful when your travel dates are already fixed."
      },
      {
        icon: Sun,
        title: "Weekend Stay Offers",
        sub: "Selected properties may promote weekend packages aimed at leisure travelers looking for a short break."
      },
      {
        icon: Coffee,
        title: "Breakfast-Included Offers",
        sub: "Some room packages include breakfast, which can provide additional value compared with booking accommodation alone."
      },
      {
        icon: Utensils,
        title: "Dining Offers",
        sub: "Certain hotel packages may include dining credits, meals, restaurant benefits, or other food-and-beverage inclusions."
      },
      {
        icon: Sparkles,
        title: "Spa & Wellness Packages",
        sub: "Selected properties may combine accommodation with spa treatments, wellness experiences, or other relaxation-focused benefits."
      },
      {
        icon: Compass,
        title: "Seasonal Hotel Offers",
        sub: "Hotels can introduce promotions around periods such as summer holidays, festive seasons, long weekends, and other high-demand travel periods."
      },
      {
        icon: PartyPopper,
        title: "Festive Offers",
        sub: "During major festivals and holiday periods, hotels may introduce special accommodation or dining packages."
      },
      {
        icon: Users,
        title: "Family Stay Offers",
        sub: "Family-focused packages can sometimes combine accommodation with meals, activities, or additional benefits."
      },
      {
        icon: Heart,
        title: "Romantic Getaway Offers",
        sub: "Couples may find packages designed around anniversaries, honeymoons, Valentine's Day, or other romantic occasions."
      },
      {
        icon: Crown,
        title: "Member Offers",
        sub: "Hotel loyalty programs can provide members with special rates, benefits, or privileges. Eligibility and inclusions depend on the applicable program and booking conditions."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
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
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
      {/* Main Article Column */}
      <div className="prose max-w-none text-left">
        <h1 className="text-3xl lg:text-4xl font-black text-black mb-6 leading-tight tracking-tight">
          ITC Hotels Discount Code, Coupon Code & Offers
        </h1>

        <div className="my-12 overflow-x-auto rounded-[20px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[800px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-l-lg">Offer</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider whitespace-nowrap">Discount / Deal</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Key Highlights</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-r-lg">Details & Description</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-normal text-[13px] divide-y divide-gray-100">
      {[
        { label: "UP TO", value: "35% OFF", title: "ITC Hotels – Member Exclusive Stay 🏨✨", desc: "Save UP TO 35% OFF on stays with the exclusive ITC Hotels Member Offer.", bullets: ["Members can earn 2X Green Points on eligible hotel bookings.", "Enjoy 20% OFF on selected dining, soft beverages and spa experiences."] },
        { label: "UP TO", value: "50% OFF", title: "ITC Hotels – Exclusive Membership Savings ⭐", desc: "Join the ITC Hotels membership program and unlock UP TO 50% OFF on eligible stays.", bullets: ["Access special member-only hotel rates and exclusive hospitality benefits.", "Enjoy premium rooms, dining experiences and luxury services."] },
        { label: "UP TO", value: "20% OFF", title: "ITC Hotels – All-In Getaway Package 🍽️🌴", desc: "Plan a relaxing luxury escape with the ITC Hotels All-In Getaway Experience.", bullets: ["Enjoy daily breakfast, lunch and dinner at the hotel's coffee shop.", "Save UP TO 20% OFF on food, soft beverages, spa, salon and laundry."] },
        { label: "FLAT", value: "33% OFF", title: "ITC Hotels – Goa Vacation Deal 🌴☀️", desc: "Plan your next Goa vacation and enjoy FLAT 33% OFF on eligible stays.", bullets: ["Perfect for travelers looking for a tropical beach escape in India.", "Extend your Goa vacation and enjoy luxury accommodation at a better value."] },
        { label: "FLAT", value: "20% OFF", title: "ITC Hotels – All-In Stay Savings 🍽️🧖", desc: "Enjoy FLAT 20% OFF on eligible food, beverages and hotel services.", bullets: ["Save on experiences including dining, spa and salon services during your stay.", "Designed for travelers who want to enjoy more amenities."] },
        { label: "TOP", value: "GOLF ESCAPE", title: "ITC Hotels – Grand Golf Retreat ⛳🏨", desc: "Experience a premium golf-focused getaway with the ITC Hotels Grand Golf Retreat.", bullets: ["Enjoy a complimentary golf round at Classic Golf & Country Club.", "Get 50% OFF on spa services for a relaxing post-golf experience."] },
        { label: "FLAT", value: "33% OFF", title: "ITC Hotels – Extended Escape 🛏️🌴", desc: "Stay longer at ITC Hotels and save FLAT 33% OFF on eligible stays.", bullets: ["Available for stays of 3 nights or more.", "Perfect for extended vacations, family trips and workcations."] },
        { label: "FLAT", value: "15% OFF", title: "ITC Hotels – Summer Vacation Offer ☀️🏨", desc: "Make your summer travel plans with FLAT 15% OFF on eligible ITC Hotels bookings.", bullets: ["Available at participating ITC Hotels across India.", "Combine luxury accommodation with premium dining and hospitality."] },
      ].map((item, i) => (
        <tr key={i} className="hover:bg-gray-50/80 transition-colors">
          <td className="p-4 text-gray-900 font-semibold align-middle max-w-[280px]">
            {item.title}
          </td>
          <td className="p-4 text-[#056BFA] font-bold align-middle whitespace-nowrap">
            {item.label === "UP TO" ? `Up to ${item.value}` : item.label === "FLAT" ? `Flat ${item.value}` : item.value}
          </td>
          <td className="p-4 text-gray-500 align-middle whitespace-nowrap">
            {item.title.includes("Member") ? "Club Members" : "All Guests"}
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[220px]">
            {item.bullets[0]}
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[260px]">
            {item.desc}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Introductory Hero Banner / Card */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-[#056bfa] mb-4">
            Find an ITC Hotels Discount Code for Your Next Stay
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            Planning a luxury getaway, business trip, weekend break, or special occasion? Before booking your room, checking for an ITC Hotels discount code can help you find a better rate on your stay.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            ITC Hotels is known for luxury hospitality across India, with properties offering accommodation, restaurants, wellness experiences, business facilities, and leisure stays. Depending on the property, guests can choose from rooms and suites, club-level accommodation, distinctive dining experiences, spa facilities, swimming pools, and other hotel amenities.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed">
            At CouponsBit, you can check available ITC Hotels coupon code offers and hotel promotions before making a reservation. It is also worth comparing promotional rates with the latest ITC Hotels sale or limited-time stay offers, as hotel pricing can vary by destination, dates, room category, and booking conditions.
          </p>
        </div>

        {/* Collapsible Content Area */}
        <div
          className={cn(
            "relative transition-all duration-500 ease-in-out text-gray-600 font-medium space-y-8",
            !isReadMore && "max-h-[600px] overflow-hidden"
          )}
        >
          {/* Why Choose ITC Hotels? */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-black">Why Choose ITC Hotels?</h3>
            <p className="leading-relaxed">
              ITC Hotels is positioned around luxury hospitality, with properties located in major Indian cities, business destinations, heritage locations, and leisure markets.
            </p>
            <p className="font-bold text-gray-800">An ITC Hotels stay can suit different travel purposes, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
              {[
                "Luxury holidays",
                "Weekend getaways",
                "Business trips",
                "Family vacations",
                "Romantic stays",
                "Celebrations",
                "Weddings & occasions",
                "Spa & wellness breaks",
                "City stays",
                "Leisure holidays",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] p-3 rounded-2xl text-center text-xs font-bold text-gray-800 border border-gray-100"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="leading-relaxed pt-2">
              The experience can vary from one property to another, so it is worth checking the facilities, dining options, room categories, and experiences available at the hotel you plan to visit.
            </p>
          </div>

          {/* ITC Hotels Stays */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">ITC Hotels Stays</h3>
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143758/6_us5hav.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </div>
            
            <p className="leading-relaxed">
              The accommodation experience is one of the main reasons guests choose ITC Hotels. Depending on the property, room categories can range from comfortable guest rooms to larger suites designed for guests looking for additional space and amenities.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Luxury Rooms</h4>
                <p className="text-sm">Standard luxury rooms provide a comfortable base for both leisure and business travelers. Depending on the hotel, rooms may include modern furnishings, work areas, premium bedding, bathrooms, and other guest amenities.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Club Rooms</h4>
                <p className="text-sm">For guests looking for additional privileges, selected ITC Hotels properties offer club-level rooms. These may come with access to dedicated lounges and additional services, depending on the property and booking package.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Suites</h4>
                <p className="text-sm">Suites provide more space and can be particularly suitable for longer stays, celebrations, families, or travelers seeking a more elevated accommodation experience. Suite categories and included benefits differ between properties, so check the individual hotel's details before booking.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
  <h3 className="text-2xl font-black text-[#056bfa]">ITC Hotels Experience & Amenities</h3>
   <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143757/7_frs0yr.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="space-y-4">
    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Business Travel</h4>
      <p className="text-sm mb-3">ITC Hotels can be a practical option for business travelers visiting major Indian cities. Staying at a centrally located property can also make it easier to reach commercial districts, corporate offices, airports, and major transportation points.</p>
      <p className="font-bold text-xs text-gray-700 mb-2">Business facilities may include:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "Business centers",
          "Meeting rooms",
          "Conference facilities",
          "High-speed internet",
          "Workspaces",
          "Executive accommodation",
          "Club lounges",
          "Dining facilities",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100 text-xs font-semibold text-gray-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Leisure Travel</h4>
      <p className="text-sm mb-3">ITC Hotels also caters to travelers looking for a relaxing holiday rather than a business stay. The facilities available depend on the individual hotel, so compare properties before selecting your destination.</p>
      <p className="font-bold text-xs text-gray-700 mb-2">Leisure guests can look for:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "Spacious rooms & suites",
          "Swimming pools",
          "Spa facilities",
          "Fitness centers",
          "Fine dining",
          "Specialty restaurants",
          "Bars and lounges",
          "Family amenities",
          "Local experiences",
          "Recreational facilities",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100 text-xs font-semibold text-gray-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Weekend Getaways</h4>
      <p className="text-sm">A short stay can be a convenient way to take a break from a busy schedule. ITC Hotels properties in leisure destinations can be suitable for weekend trips, romantic breaks, family escapes, and short luxury holidays. When planning a weekend stay, compare room rates, meal packages, inclusions, and cancellation policies rather than looking only at the headline room price.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Couples</h4>
      <p className="text-sm mb-3">Couples can choose ITC Hotels for romantic holidays, anniversaries, birthdays, and other special occasions. Special packages may be offered at certain properties during particular seasons or occasions.</p>
      <p className="font-bold text-xs text-gray-700 mb-2">Couples may combine their stay with:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "Spa treatments",
          "Fine dining",
          "Premium room categories",
          "Suite stays",
          "Romantic dining",
          "Wellness facilities",
          "Leisure activities",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100 text-xs font-semibold text-gray-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Families</h4>
      <p className="text-sm">Families can also find accommodation options suitable for holidays and longer stays. Depending on the property, family-friendly facilities may include larger rooms or suites, swimming pools, restaurants, recreational areas, and nearby attractions. Before booking, check whether the selected room category accommodates your complete party and whether additional beds, meals, or child-related services carry extra charges.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels Spa & Wellness Stays</h4>
      <p className="text-sm mb-3">For travelers looking for relaxation, selected ITC Hotels properties offer spa and wellness facilities. If wellness is the main purpose of your trip, compare the spa facilities and available treatments at each property before booking.</p>
      <p className="font-bold text-xs text-gray-700 mb-2">Wellness-focused stays include:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "Spa treatments",
          "Fitness facilities",
          "Swimming pools",
          "Wellness programs",
          "Relaxation areas",
          "Beauty treatments",
          "Health-focused dining",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100 text-xs font-semibold text-gray-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels Dining</h4>
      <p className="text-sm mb-3">Dining can be an important part of the hotel experience. ITC Hotels properties feature restaurants and dining venues offering different cuisines and styles. Some hotel promotions may include breakfast or dining benefits, so check exactly what is included in the selected booking package.</p>
      <p className="font-bold text-xs text-gray-700 mb-2">Dining venues & options:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "Fine-dining restaurants",
          "Indian cuisine",
          "International cuisine",
          "Specialty restaurants",
          "Cafés & Bars",
          "Lounges",
          "Breakfast services",
          "In-room dining",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100 text-xs font-semibold text-gray-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">ITC Hotels for Special Occasions</h4>
      <p className="text-sm">Luxury hotels can be particularly useful when the stay itself is part of a celebration. Guests may book ITC Hotels for anniversaries, birthdays, honeymoons, romantic escapes, family celebrations, corporate events, weddings, and festive holidays. Depending on the property, event and celebration services may be available alongside accommodation.</p>
    </div>
  </div>
</div>

          {/* Information Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-2">
              <h3 className="text-xl font-black text-[#056bfa]">What Is an ITC Hotels Discount Code?</h3>
              <p className="leading-relaxed text-sm">
                An ITC Hotels discount code is a promotional code that may provide a reduced room rate or another booking benefit when applied to an eligible reservation.
              </p>
              <p className="leading-relaxed text-sm">
                The terms can differ between promotions. A discount may be restricted to certain properties, room categories, travel dates, booking periods, or customer groups.
              </p>
              <p className="leading-relaxed text-sm">
                Always check the offer conditions before relying on a discount code for your reservation.
              </p>
            </div>
          </div>

          {/* How to Save on an ITC Hotels Booking */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">How to Save on an ITC Hotels Booking</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Check for an ITC Hotels Discount Code</h4>
                <p className="text-sm">Before making a reservation, search CouponsBit for available ITC Hotels discount code offers. If a code is available, compare its terms with the room rate you are considering.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Compare the Total Booking Cost</h4>
                <p className="text-sm">The lowest advertised room rate is not always the best overall deal. Compare the final price after taxes, meals, additional services, and other applicable charges.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Look at Package Inclusions</h4>
                <p className="text-sm">A slightly higher room rate may offer better value if it includes breakfast, dining credits, spa treatments, transfers, or other benefits you would otherwise pay for separately.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Check Different Travel Dates</h4>
                <p className="text-sm">Hotel rates can vary considerably between weekdays, weekends, holidays, and peak travel periods. If your schedule is flexible, compare multiple dates before booking.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Consider Longer Stays</h4>
                <p className="text-sm">If you're already planning a multi-night trip, look for offers designed around extended stays.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Check Member Benefits</h4>
                <p className="text-sm">If you frequently stay with the hotel group, review any applicable membership or loyalty benefits before making a reservation.</p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-white p-8 lg:p-10 rounded-[36px] border border-gray-200 shadow-sm my-8 space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">How to Use an ITC Hotels Coupon Code</h3>
            <div className="space-y-4">
              {[
                { title: "Step 1: Search for an Available Offer", text: "Visit CouponsBit and check the current ITC Hotels promotions and coupon offers." },
                { title: "Step 2: Select Your Destination", text: "Choose the ITC Hotels property that matches your travel plans." },
                { title: "Step 3: Enter Your Travel Dates", text: "Add your check-in and check-out dates and select the number of guests." },
                { title: "Step 4: Compare Available Rates", text: "Review the available room categories and packages. Pay attention to what each rate includes." },
                { title: "Step 5: Check the Coupon Conditions", text: "If you have found an ITC Hotels coupon code, read the eligibility requirements, booking dates, travel dates, exclusions, and other restrictions." },
                { title: "Step 6: Apply the Code", text: "Enter the promotional code in the appropriate section if the booking requires one." },
                { title: "Step 7: Review Your Reservation", text: "Before confirming the booking, check the room type, dates, total price, taxes, inclusions, and cancellation conditions." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 shrink-0 bg-[#056bfa] text-white font-black rounded-xl flex items-center justify-center text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-black text-sm">{step.title}</h4>
                    <p className="text-gray-700 font-medium text-xs leading-relaxed mt-0.5">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for Finding the Best ITC Hotels Deal */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Tips for Finding the Best ITC Hotels Deal</h3>
            <p className="leading-relaxed text-sm">
              Hotel prices can change based on demand, destination, dates, and room availability. These simple checks can help you make a more informed booking decision.
            </p>
            <div className="space-y-3 pt-2">
              {[
                { title: "Book around your schedule", desc: "If your dates are flexible, compare weekdays and weekends." },
                { title: "Compare room categories", desc: "A promotional rate on a higher room category may sometimes offer better overall value than paying full price for a basic room." },
                { title: "Check inclusions", desc: "Breakfast, meals, spa treatments, transfers, and other extras can affect the true value of a package." },
                { title: "Review cancellation rules", desc: "A cheaper non-refundable rate may not be suitable if your plans could change." },
                { title: "Look for seasonal campaigns", desc: "Holiday periods, festivals, summer breaks, and long weekends may come with special hotel packages." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#f8fafc] p-3.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#056bfa] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 font-medium">
                    <strong className="text-black">{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Book Your ITC Hotels Stay With CouponsBit */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-3">
            <h3 className="text-xl font-black text-[#056bfa]">Book Your ITC Hotels Stay With CouponsBit</h3>
            <p className="leading-relaxed text-sm">
              Whether you're planning a luxury vacation, business trip, weekend escape, family holiday, or special celebration, ITC Hotels offers a range of properties and accommodation experiences to consider.
            </p>
            <p className="leading-relaxed text-sm">
              Before confirming your reservation, check CouponsBit for an ITC Hotels discount code, ITC Hotels coupon code, or current hotel promotion. Compare the room price, package inclusions, cancellation terms, and any available promotional benefits before choosing your booking.
            </p>
            <p className="leading-relaxed text-sm">
              A quick comparison before checkout can help you find a stay that offers the right combination of room, location, amenities, and overall value.
            </p>
          </div>

          {/* Gradient Overlay when Collapsed */}
          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-8 flex items-center gap-2 text-[#056bfa] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          <span>{isReadMore ? "Read Less" : "Read Full Stay Guide"}</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About ITC Hotels Discount Codes
          </h3>
          {[
            {
              q: "Where Can I Find an ITC Hotels Discount Code?",
              a: "You can check CouponsBit for available ITC Hotels discount codes, coupon codes, promotions, and hotel offers before booking your stay.",
            },
            {
              q: "What Is an ITC Hotels Coupon Code?",
              a: "An ITC Hotels coupon code is a promotional code that may provide a discount or additional benefit on an eligible hotel reservation.",
            },
            {
              q: "Does ITC Hotels Always Have a Discount Code?",
              a: "Not necessarily. Hotel promotions change regularly, and some offers are provided as special room rates or packages rather than traditional coupon codes.",
            },
            {
              q: "Does ITC Hotels Have Hotel Sales?",
              a: "ITC Hotels can run limited-period promotions and special accommodation offers. These may be based on travel dates, destinations, room categories, seasons, or specific packages.",
            },
            {
              q: "Can I Find Weekend Offers at ITC Hotels?",
              a: "Weekend packages may be available at selected properties and during certain promotional periods. Check the specific hotel's current offers when planning your trip.",
            },
            {
              q: "Does ITC Hotels Offer Breakfast Packages?",
              a: "Breakfast may be included in selected room rates or hotel packages. Always check the booking inclusions before completing your reservation.",
            },
            {
              q: "Does ITC Hotels Have Spa Packages?",
              a: "Selected properties offer spa and wellness facilities, and special packages may combine accommodation with wellness experiences.",
            },
            {
              q: "Can I Book an ITC Hotels Stay for a Family?",
              a: "Yes. ITC Hotels offers accommodation suitable for different types of travelers, including families. Check the individual property's room capacity and child policies before booking.",
            },
            {
              q: "Can Couples Book ITC Hotels for a Romantic Getaway?",
              a: "Yes. ITC Hotels properties can be suitable for honeymoons, anniversaries, birthdays, and romantic breaks. Selected properties may also offer special packages for couples.",
            },
            {
              q: "Can I Use an ITC Hotels Discount Code on a Promotional Rate?",
              a: "That depends on the individual promotion. Some rates may not be combined with additional discounts, while other offers may have specific eligibility requirements.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors focus:outline-none"
              >
                <span className="text-black font-black text-sm pr-4">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-300 shrink-0",
                    openFaq === i
                      ? "bg-[#056bfa] text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-6 bg-white",
                  openFaq === i
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-600 font-bold text-xs leading-relaxed pt-3 border-t border-gray-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Popular Searches Widget */}
        <div className="bg-[#e8f6f8] rounded-[36px] p-8 border border-[#056bfa]/10">
          <h3 className="text-black font-black text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#056bfa]" />
            Popular ITC Hotels Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Luxury Stay",
              "Weekend Getaway",
              "Business Hotels",
              "ITC Promo Code",
              "Spa & Wellness",
              "ITC Member Deals",
              "Seasonal Offers",
              "Hotel Packages",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-3.5 py-2 rounded-full text-[11px] font-black text-[#056bfa] uppercase tracking-wider shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Today's Top Deals Widget */}
        <div className="bg-white rounded-[36px] p-8 border border-gray-200 shadow-sm sticky top-8">
          <h3 className="text-black font-black text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
            <Percent className="w-4 h-4 text-[#056bfa]" />
            Today's Top ITC Hotels Deals
          </h3>
          <div className="space-y-5">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 group cursor-pointer pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <div className="w-10 h-10 bg-[#f8fafc] rounded-xl flex items-center justify-center text-[#056bfa] font-black text-lg italic shadow-inner shrink-0">
                  I
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-wider group-hover:text-[#056bfa] transition-colors truncate">
                    {deal.heading}
                  </p>
                  <p className="text-gray-500 font-medium text-[11px] truncate mt-0.5">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#056bfa] px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-[#056bfa] hover:text-white transition-all shrink-0 flex items-center gap-1"
                >
                  Deal <ArrowRight className="w-3 h-3" />
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
