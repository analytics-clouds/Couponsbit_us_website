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
  CheckCircle,MapPin, Layers, UserPlus,
  LayoutGrid,
  Search,
  ShoppingBag,
  Home,
  Droplet,
  Wrench,
  Thermometer,
  CircleDot,
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
  { id: "d1", label: "UP TO", heading: "Up to 50% OFF Vehicle Maintenance Services", sub: "Valvoline Discount Code" },
  { id: "d2", label: "FLAT", heading: "Flat 30% OFF Service Offers", sub: "Valvoline Discount Code" },
  { id: "d3", label: "SAVE", heading: "$15 OFF Synthetic Blend Oil Change", sub: "Limited-Time Offer" },
  { id: "d4", label: "SAVE", heading: "$10 OFF Full-Service Conventional Oil Change", sub: "Limited-Time Offer" },
  { id: "d5", label: "UP TO", heading: "Up to 40% OFF Radiator Services", sub: "Valvoline Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp", dealText: "Up To 20% OFF", href: "/stores/avis-discount-code" },
  { name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp", dealText: "Up To 35% OFF", href: "/stores/budget-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
];

const STORE_URL = "https://www.valvoline.com/";

export default function ValvolineCouponsContent() {
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
              <span className="text-black font-extrabold">Valvoline</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp" alt="Valvoline" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Valvoline</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(38.7k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Valvoline discount codes, promo codes, and vehicle maintenance deals for Sep 2026. Save up to 50% on eligible services, get 30% OFF select maintenance, $15 OFF Synthetic Blend Oil Changes, $10 OFF Conventional Oil Changes, and up to 40% OFF radiator services.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "5", label: "Offers" },
                    { icon: Percent, val: "1.2k", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787056225/154_eyplgd.webp" alt="Valvoline Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Valvoline Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "50% OFF", title: "Valvoline Discount Code – Up to 50% OFF Vehicle Maintenance Services", desc: "Get up to 50% OFF on eligible Valvoline vehicle maintenance services", bullets: ["Save on essential car care and routine maintenance services", "Available for customers looking to keep their vehicles road-ready for less", "Book your service appointment and claim the available savings"] },
          { label: "FLAT", value: "30% OFF", title: "Valvoline Discount Code – Flat 30% OFF Service Offers", desc: "Enjoy Flat 30% OFF on eligible Valvoline services", bullets: ["Save on air filter changes, fuel system cleaning and tire rotation", "Get discounts on air conditioning and other available vehicle services", "Schedule your service and reduce your vehicle maintenance costs"] },
          { label: "SAVE", value: "$15 OFF", title: "Valvoline – $15 OFF Synthetic Blend Oil Change", desc: "Get $15 OFF a Valvoline Synthetic Blend Oil Change service", bullets: ["Save on routine oil maintenance with this limited-time offer", "Ideal for drivers looking for affordable vehicle maintenance", "Book an eligible Valvoline service appointment and enjoy the savings"] },
          { label: "SAVE", value: "$10 OFF", title: "Valvoline – $10 OFF Full-Service Conventional Oil Change", desc: "Save $10 on an eligible Valvoline Full-Service Conventional Oil Change", bullets: ["Get professional oil change service at a lower price", "A convenient way to stay on top of regular vehicle maintenance", "Schedule your service and take advantage of the available discount"] },
          { label: "UP TO", value: "40% OFF", title: "Valvoline – Up to 40% OFF Radiator Services", desc: "Enjoy up to 40% OFF on eligible Valvoline radiator services", bullets: ["Save on important cooling-system maintenance for your vehicle", "Explore available radiator and vehicle care services at participating locations", "Book your appointment and make your car maintenance more affordable"] },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Valvoline: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Valvoline Oil Change Discount Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Valvoline oil change discount code can help you save on eligible oil change services at participating Valvoline Instant Oil Change locations. Unlike an online shopping coupon, Valvoline offers are generally location-specific and may have different expiration dates or eligibility requirements.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Current Valvoline Instant Oil Change location pages show offers such as $20 off a premium oil change for new customers, $15 off a full synthetic or synthetic blend oil change, and $10 off a conventional oil change. Offers and expiration dates can vary by location. 
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           Before heading to a service center, check the offer's terms and confirm that it applies to your vehicle and the service you need. 
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Wrench, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Droplet, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">Best Ways to Save at Valvoline</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    An oil change is routine maintenance, so finding a lower price can make a difference over time.
  </p>
  
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check Coupons Before Every Oil Change",
        sub: "Don't assume that the price or promotion you received during your previous visit is still available. Check for current offers before each service."
      },
      {
        icon: Wrench,
        title: "Compare Different Oil Change Offers",
        sub: "If your vehicle is compatible with more than one oil type, compare the available service prices and promotions. However, always follow the oil specification recommended by your vehicle manufacturer."
      },
      {
        icon: UserPlus,
        title: "Look for New-Customer Deals",
        sub: "New customers may have access to promotions that aren't available to returning customers. Some current locations advertise a $20 discount on premium oil changes for new customers."
      },
      {
        icon: MapPin,
        title: "Check Your Local Valvoline Location",
        sub: "Promotions aren't necessarily identical across all locations. Current location pages show different expiration dates, so checking your specific service center is important."
      },
      {
        icon: Layers,
        title: "Bundle Maintenance When Appropriate",
        sub: "Valvoline Instant Oil Change locations offer services beyond oil changes, including batteries, air filters, tire rotations, wiper blades, fuel system cleaning, radiator service, transmission service, and more. If your vehicle needs additional maintenance, ask about the applicable service and pricing rather than waiting until the problem becomes more expensive."
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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
        {/* SEO Text Section */}
<section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Valvoline Discount Codes, Promo Codes & Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[20px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[800px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-l-lg">Offer</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider whitespace-nowrap">Discount / Price</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-r-lg">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-normal text-[13px] divide-y divide-gray-100">
      {[
        ["Valvoline Discount Code – Vehicle Maintenance Services", "Up to 50% OFF", "All Users", "Save on essential car care and routine maintenance", "Vehicle maintenance services"],
        ["Valvoline Discount Code – Service Offers", "Flat 30% OFF", "All Users", "Air filter, fuel system cleaning, tire rotation & AC", "Eligible Valvoline services"],
        ["Valvoline – Synthetic Blend Oil Change", "$15 OFF", "All Users", "Limited-time oil maintenance offer", "Synthetic Blend Oil Change"],
        ["Valvoline – Full-Service Conventional Oil Change", "$10 OFF", "All Users", "Professional oil change service", "Full-Service Conventional Oil Change"],
        ["Valvoline – Radiator Services", "Up to 40% OFF", "All Users", "Cooling-system maintenance", "Radiator services"],
      ].map((row, i) => (
        <tr key={i} className="hover:bg-gray-50/80 transition-colors">
          <td className="p-4 text-gray-900 font-semibold align-middle max-w-[280px]">{row[0]}</td>
          <td className="p-4 text-[#056BFA] font-bold align-middle whitespace-nowrap">{row[1]}</td>
          <td className="p-4 text-gray-500 align-middle whitespace-nowrap">{row[2]}</td>
          <td className="p-4 text-gray-500 align-middle max-w-[220px]">{row[3]}</td>
          <td className="p-4 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Collapsible Text Container */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          <p>
            Looking for a Valvoline oil change discount code to save on your next vehicle service? CouponsBit helps drivers find current Valvoline offers, oil change coupons, and automotive service deals before visiting a participating Valvoline Instant Oil Change location.
          </p>
          <p>
            Valvoline Instant Oil Change provides drive-through, stay-in-your-car vehicle maintenance at more than 1,900 locations across the U.S. Its service centers offer oil changes without an appointment, and Valvoline says a typical oil change takes about 15 minutes and includes an 18-point maintenance check.
          </p>
          <p>
            Whether your car needs conventional oil, synthetic blend, or full synthetic oil, checking for an available offer before your visit can help reduce your service bill.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Valvoline Promo Code Offers</h3>
            <p>
              Searching for a Valvoline promo code? CouponsBit can help you find available promotions before scheduling or visiting a Valvoline location.
            </p>
            <p>
              Valvoline Instant Oil Change coupons can typically be accessed through participating location pages, where customers may be able to email, text, or print the offer.
            </p>
            <p>
              Because promotions can vary between locations, don't assume that an offer available at one service center will have the same expiration date or terms at another.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Valvoline Oil Change Services</h3>
            <p>
              Valvoline offers several oil change options designed for different vehicle requirements and driving needs.
            </p>
            <p><strong>Valvoline Full Synthetic Oil Change</strong></p>
            <p>
              Full synthetic oil is designed for vehicles that require or recommend synthetic motor oil. It can offer advantages such as improved performance across a wide range of temperatures and enhanced protection against engine wear.
            </p>
            <p>
              If your vehicle manufacturer recommends full synthetic oil, look for Valvoline offers specifically covering this service. Current Valvoline Instant Oil Change locations advertise discounts on full synthetic oil changes, although the amount and expiration date can vary.
            </p>
            <p><strong>Valvoline Synthetic Blend Oil Change</strong></p>
            <p>
              Synthetic blend oil combines synthetic and conventional base oils. It can be an option for drivers whose vehicles allow or recommend a blend.
            </p>
            <p>
              Valvoline's current location coupons commonly group full synthetic and synthetic blend services under the same promotional offer.
            </p>
            <p>
              Always follow your vehicle manufacturer's recommended oil type and viscosity rather than choosing an oil solely because it has the largest discount.
            </p>
            <p><strong>Valvoline Conventional Oil Change</strong></p>
            <p>
              Conventional motor oil is another option available at Valvoline Instant Oil Change locations for eligible vehicles.
            </p>
            <p>
              Current location-specific promotions include discounts on conventional oil changes, with some locations advertising $10 off.
            </p>
            <p>
              The right oil depends on your vehicle's specifications, age, driving conditions, and manufacturer's recommendations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Is Included With a Valvoline Oil Change?</h3>
            <p>
              A Valvoline oil change is more than simply replacing the oil.
            </p>
            <p>
              Valvoline Instant Oil Change says its full-service oil changes are performed by certified technicians while customers remain in their vehicles. The service generally takes around 15 minutes and includes an 18-point maintenance check.
            </p>
            <p>Depending on the service and vehicle, technicians may check items such as:</p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-600">
              <li>Engine oil</li>
              <li>Oil filter</li>
              <li>Fluid levels</li>
              <li>Tire condition</li>
              <li>Vehicle lights</li>
              <li>Battery condition</li>
              <li>Air filters</li>
              <li>Wiper blades</li>
            </ul>
            <p>
              Specific services and checks can vary by location and vehicle.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Valvoline Oil Change Services Near You</h3>
            <p>
              Valvoline has more than 1,900 Instant Oil Change locations, making it possible for many drivers to find a service center close to home or work.
            </p>
            <p>
              The official Valvoline location finder lets you search by city, state, or ZIP code.
            </p>
            <p><strong>Stay-in-Your-Car Oil Change</strong></p>
            <p>
              One of the main conveniences of Valvoline Instant Oil Change is that you generally don't have to leave your vehicle during the service.
            </p>
            <p>
              Valvoline describes its service as a stay-in-your-car experience, with no appointment necessary for its standard oil change service.
            </p>
            <p>
              This can make an oil change particularly convenient for drivers with busy schedules who don't want to spend an hour or more sitting inside a traditional repair shop.
            </p>
            <p><strong>No Appointment Oil Change</strong></p>
            <p>
              Valvoline says appointments aren't required for its Instant Oil Change service. Drivers can visit a participating location and receive service while remaining in their vehicles.
            </p>
            <p>
              Wait times can still vary depending on the location and how busy the service center is.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Valvoline Oil Change Coupon</h3>
            <p>
              A Valvoline oil change coupon can provide a straightforward way to lower the price of routine maintenance.
            </p>
            <p>
              Location pages currently display different coupon offers. For example, one Valvoline location lists $20 off a premium oil change for new customers, $15 off synthetic or synthetic blend service, and $10 off conventional oil changes.
            </p>
            <p>
              Other locations display the same basic discount structure but with different expiration dates.
            </p>
            <p><strong>Valvoline Coupon for New Customers</strong></p>
            <p>
              If you're visiting Valvoline Instant Oil Change for the first time, look specifically for new-customer promotions.
            </p>
            <p>
              Some current location pages advertise $20 off a premium oil change for new customers.
            </p>
            <p>
              New-customer offers typically have specific eligibility requirements, so check the fine print before relying on the discount.
            </p>
          </div>

          {/* Styled How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Valvoline Discount Code</h3>
            <p className="text-gray-700 font-bold">
              Using a Valvoline offer is generally simple, although the exact process can depend on the promotion.
            </p>
            <div className="space-y-6">
              {[
                { step: "Step 1: Find a Valvoline Offer", desc: "Visit CouponsBit and look for available Valvoline oil change discounts and promotions." },
                { step: "Step 2: Check the Terms", desc: "Review the expiration date, service requirements, location restrictions, and customer eligibility." },
                { step: "Step 3: Save the Coupon", desc: "Depending on the offer, you may be able to copy, print, text, or email the coupon." },
                { step: "Step 4: Find a Valvoline Location", desc: "Use the Valvoline location finder to identify a participating service center near you." },
                { step: "Step 5: Show the Offer", desc: "Present the applicable coupon to the service center according to its instructions." },
                { step: "Step 6: Complete Your Oil Change", desc: "Once the discount has been applied, complete the service and pay the adjusted amount." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <p className="text-black font-black text-base">{item.step}</p>
                    <p className="text-gray-700 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Other Valvoline Services</h3>
            <p>
              Valvoline Instant Oil Change isn't limited to oil changes. Depending on the location, service centers can provide several preventive maintenance services.
            </p>
            <p><strong>Battery Replacement:</strong> Some Valvoline locations offer battery replacement services. A technician can check the condition of your vehicle's battery and recommend replacement when necessary.</p>
            <p><strong>Air Filter Replacement:</strong> A clogged or dirty air filter can affect engine performance. Valvoline locations may offer air filter replacement as part of their maintenance services.</p>
            <p><strong>Tire Rotation:</strong> Some service centers also provide tire rotation, helping drivers maintain more even tire wear.</p>
            <p><strong>Wiper Blade Replacement:</strong> Worn windshield wipers can reduce visibility in rain and snow. Valvoline lists wiper blade replacement among the services offered at participating locations.</p>
            <p><strong>Transmission and Fluid Services:</strong> Participating locations may offer transmission services, radiator services, differential service, and fuel system cleaning. Services vary by location.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Valvoline Instant Oil Change?</h3>
            <p>
              Valvoline Instant Oil Change focuses on making routine vehicle maintenance quick and convenient.
            </p>
            <p><strong>Fast Service:</strong> Valvoline says its full-service oil changes take about 15 minutes, although actual wait and service times can vary.</p>
            <p><strong>Stay in Your Vehicle:</strong> Customers can generally remain in their cars while technicians perform the service.</p>
            <p><strong>No Appointment Necessary:</strong> Valvoline's Instant Oil Change service doesn't require an appointment, making it easier to fit routine maintenance into a busy schedule.</p>
            <p><strong>Certified Technicians:</strong> Valvoline says its oil changes are performed by certified technicians.</p>
            <p><strong>Preventive Maintenance:</strong> In addition to oil changes, participating locations offer various maintenance services that can help drivers keep up with routine vehicle care.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Valvoline Oil Change</h3>
            <p>
              Regular oil changes are an important part of routine vehicle maintenance, but that doesn't mean you have to pay full price every time. Valvoline Instant Oil Change combines oil changes with convenient preventive maintenance services, and its stay-in-your-car format can make routine servicing easier to fit into a busy day.
            </p>
            <p>
              Before your next visit, check CouponsBit for a Valvoline oil change discount code and compare it with the offers available at your local service center. Since promotions can vary by location and service type, checking the details beforehand can help you find the most suitable saving.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Dynamic FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Valvoline Discount Code FAQs</h3>
          {[
            { q: "Does Valvoline offer discount codes?", a: "Yes. Valvoline Instant Oil Change locations offer various coupons and promotions. Current examples include discounts on premium, full synthetic, synthetic blend, and conventional oil changes. Offers vary by location." },
            { q: "Where can I find a Valvoline promo code?", a: "You can check CouponsBit for current Valvoline promotions before visiting a service center. You should also check your local Valvoline location because offers can vary." },
            { q: "Does Valvoline have an oil change coupon for new customers?", a: "Some Valvoline Instant Oil Change locations currently advertise $20 off a premium oil change for new customers. Eligibility and expiration dates vary by location." },
            { q: "How much does Valvoline charge for an oil change?", a: "The price depends on the oil type, vehicle, location, and applicable promotions. Valvoline's current location pages display different coupons for conventional, synthetic blend, full synthetic, and premium services." },
            { q: "Does Valvoline offer synthetic oil changes?", a: "Yes. Valvoline Instant Oil Change locations offer full synthetic and synthetic blend oil change services." },
            { q: "How long does a Valvoline oil change take?", a: "Valvoline says its Instant Oil Change service takes about 15 minutes. Actual wait times can vary depending on the location and customer traffic." },
            { q: "Do I need an appointment at Valvoline?", a: "No appointment is generally required for Valvoline Instant Oil Change. The company promotes its service as a convenient, stay-in-your-car experience." },
            { q: "Can I stay in my car during a Valvoline oil change?", a: "Yes. Valvoline Instant Oil Change is designed as a stay-in-your-car service, allowing customers to remain in their vehicles while technicians perform the oil change." },
            { q: "Does every Valvoline location offer the same services?", a: "Not necessarily. Valvoline notes that products and services can vary by location. Check your local service center for the most accurate information." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is free to use. You can browse Valvoline offers and other savings opportunities without paying a fee." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Valvoline", "Promo Code", "Discount Code", "Oil Change Coupons", "Full Synthetic", "Synthetic Blend", "Conventional Oil", "New Customer Deal"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
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
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Valvoline: ${deal.heading}`} 
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
