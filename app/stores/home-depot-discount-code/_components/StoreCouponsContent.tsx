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
  Search,
  Sprout, 
  ShoppingBag, 
  Gift, 
  Receipt, 
  Boxes, 
  Briefcase,
  Paintbrush,
  Wrench,
  Refrigerator,
  Trees,
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
  { id: "d1", label: "UP TO", heading: "Appliance Sales | Up to $350 Extra + Free Delivery", sub: "Home Depot Promo Code" },
  { id: "d2", label: "UP TO", heading: "Select Tools | Up to $120 OFF", sub: "Home Depot Promo Code" },
  { id: "d3", label: "SAVE", heading: "RYOBI ONE+ Fan | 49% OFF", sub: "Home Depot Deal" },
  { id: "d4", label: "SAVE", heading: "M12 Crown Stapler Kit | 62% OFF", sub: "Home Depot Deal" },
  { id: "d5", label: "SAVE", heading: "eufy Video Doorbell 2K | 42% OFF", sub: "Home Depot Deal" },
  { id: "d6", label: "UP TO", heading: "Deals of the Day | Up to 35% OFF", sub: "Home Depot Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Lumibrick", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp", dealText: "From $56.99", href: "/stores/lumibrick-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.homedepot.com/";

export default function HomeDepotCouponsContent() {
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
              <span className="text-black font-extrabold">Home Depot</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp" alt="Home Depot" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Home Depot</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(76.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Home Depot discount codes, promo codes, and deals for Aug 2026. Save up to $350 on select appliances, $120 on tools, 49% on a RYOBI fan, and 62% on an M12 Crown Stapler Kit, plus furniture, bath, flooring, and security offers.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "3.3k", label: "Deals" },
                    { icon: Users, val: "28M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788258588/4_b7vmxu.webp" alt="Home Depot Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Home Depot Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "$350 EXTRA", title: "Home Depot Promo Code – Appliance Sales | Up to $350 Extra + Free Delivery", desc: "Save up to an extra $350 on select GE, GE Profile, Café & Hotpoint appliances in the USA.", bullets: ["Get free delivery when you buy two or more eligible appliances.", "Check for a Home Depot promo code to potentially save even more on qualifying purchases.", "Offer ends August 26; availability, shipping and pricing may vary."] },
          { label: "UP TO", value: "$120 OFF", title: "Home Depot Promo Code – Select Tools | Up to $120 OFF", desc: "Save up to $120 OFF select tools available to Home Depot shoppers in the USA.", bullets: ["Shop power tools, hand tools and equipment for DIY and home improvement projects.", "Check for a Home Depot promo code to potentially unlock additional savings.", "Offer availability, pricing and eligible products may vary."] },
          { label: "FROM", value: "$107.99", title: "Home Depot – Halloween Decorations | From $107.99", desc: "Get the 5 ft. Pre-Lit Jack and Zero Airblown Inflatable for $107.99 in the USA.", bullets: ["Find Halloween decorations for yards, porches, parties and seasonal displays.", "Shop seasonal décor while selected products are available.", "Pricing, shipping and availability may vary."] },
          { label: "SAVE", value: "49% OFF", title: "Home Depot – RYOBI ONE+ Fan | 49% OFF", desc: "Get the RYOBI ONE+ 18V Cordless Hybrid WHISPER SERIES Fan for $79.97.", bullets: ["Save $78.03 (49% OFF) on the selected fan kit in the USA.", "Includes a 2.0 Ah battery and charger for convenient cordless use.", "Product availability and pricing may vary."] },
          { label: "UP TO", value: "40% OFF", title: "Home Depot – Select Online Bath | Up to 40% OFF", desc: "Save up to 40% OFF select online bath products in the USA.", bullets: ["Shop bathroom fixtures, accessories and home improvement essentials.", "Upgrade your bathroom with limited-time promotional savings.", "Eligible products, pricing and availability may vary."] },
          { label: "UP TO", value: "35% OFF", title: "Home Depot – Deals of the Day | Up to 35% OFF", desc: "Save up to 35% OFF select Deals of the Day in the USA.", bullets: ["Discover limited-time discounts across home improvement and household products.", "Shop rotating offers while selected products are available.", "Deals, pricing and availability may change regularly."] },
          { label: "ONLY", value: "$249.99", title: "Home Depot – Nest Outdoor Security Camera | $249.99", desc: "Get the Nest Outdoor Smart Security Camera 2-Pack for $249.99 in the USA.", bullets: ["Upgrade your home with smart outdoor security and camera monitoring.", "Enjoy convenient protection for your home and outdoor spaces.", "Product availability, shipping and pricing may vary."] },
          { label: "FROM", value: "$29", title: "Home Depot – Truck Rentals | Starting at $29", desc: "Book Home Depot truck rentals in the USA with prices starting at $29.", bullets: ["Ideal for moving materials, large purchases and DIY project supplies.", "Choose a convenient rental option when you need extra hauling capacity.", "Rental pricing, availability and terms may vary by location."] },
          { label: "UP TO", value: "30% OFF", title: "Home Depot – Select Furniture | Up to 30% OFF", desc: "Save up to 30% OFF select furniture available in the USA.", bullets: ["Find furniture for living rooms, bedrooms, dining areas and more.", "Refresh your home with discounted furniture selections.", "Pricing, availability and eligible products may vary."] },
          { label: "SAVE", value: "62% OFF", title: "Home Depot – M12 Crown Stapler Kit | 62% OFF", desc: "Get the M12 12-Volt Lithium-Ion Cordless Crown Stapler Kit for $129.", bullets: ["Save $210 (62% OFF) from the regular $339 price in the USA.", "Includes a M12 Compact 2.0 Ah Battery and Charger.", "Limited-time pricing and product availability may vary."] },
          { label: "SAVE", value: "42% OFF", title: "Home Depot – eufy Video Doorbell 2K | 42% OFF", desc: "Get the eufy Video Doorbell 2K Wi-Fi Wireless Smart Video Camera for $104.99.", bullets: ["Save $75 (42% OFF) from the regular $179.99 price in the USA.", "Includes a chime for convenient smart-home security.", "Pricing, shipping and availability may vary."] },
          { label: "UP TO", value: "20% OFF", title: "Home Depot – Wood & Vinyl Flooring | Up to 20% OFF", desc: "Save up to 20% OFF select wood and vinyl flooring in the USA.", bullets: ["Shop flooring options for home renovations and interior upgrades.", "Find a variety of styles for different rooms and projects.", "Selected products, pricing and availability may vary."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Left Blue Badge */}
                <div className="relative w-[110px] sm:w-[150px] bg-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] font-bold text-white leading-tight">{c.label}</p>
                    <div className="text-sm sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">{c.value}</div>
                  </div>
                </div>

                {/* Content */}
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Home Depot: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is a Home Depot Discount Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Home Depot discount code is a promotional code that may reduce the price of eligible products or provide another promotional benefit.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            The availability and terms of Home Depot coupons can vary. Some promotions may apply only to selected products, while others may require a minimum purchase or specific customer eligibility.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Always check the terms before applying a code.

          </p>
          <h3 className="text-black font-black text-lg mb-6">What Is a Home Depot Coupon Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Home Depot coupon code is another commonly used term for a promotional code that shoppers can apply toward eligible purchases.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            However, Home Depot savings don't necessarily depend on coupon codes. Special Buy pricing, seasonal promotions, rebates, bulk discounts, credit-card offers, and clearance merchandise can also provide opportunities to save.

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
              { icon: Refrigerator, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Paintbrush, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-md mx-auto">
  <h3 className="text-black font-black text-lg mb-2">
    What Types of Home Depot Sales and Offers Are Available?
  </h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Home Depot regularly uses different promotional formats rather than relying on one type of discount.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Special Buy Offers",
        sub: "Special Buy promotions can provide reduced pricing on selected products for a limited period. These offers can cover tools, appliances, flooring, outdoor products, building supplies, and other categories."
      },
      {
        icon: Refrigerator,
        title: "Appliance Sales",
        sub: "Appliance promotions can appear throughout the year, particularly around major holiday shopping periods and home improvement events. Discounts may cover refrigerators, ranges, dishwashers, washers, dryers, and other appliances."
      },
      {
        icon: Wrench,
        title: "Tool Sales",
        sub: "Home Depot frequently promotes tools and tool collections, particularly around major shopping events and seasonal periods."
      },
      {
        icon: Sprout,
        title: "Spring Black Friday",
        sub: "Home Depot has historically used a spring promotional period around the start of the home improvement and gardening season, making it a useful period to watch for discounts on outdoor products, tools, appliances, and other home improvement merchandise."
      },
      {
        icon: ShoppingBag,
        title: "Black Friday",
        sub: "Black Friday can bring major promotions across tools, appliances, flooring, outdoor products, storage, and other categories."
      },
      {
        icon: Gift,
        title: "Holiday Sales",
        sub: "Holiday campaigns can feature both practical home improvement products and seasonal merchandise."
      },
      {
        icon: Percent,
        title: "Clearance",
        sub: "Clearance products can provide significant reductions on selected merchandise, although availability may be limited."
      },
      {
        icon: Receipt,
        title: "Rebate Offers",
        sub: "Certain products may qualify for manufacturer or retailer rebates, giving shoppers another potential way to lower the effective cost."
      },
      {
        icon: Boxes,
        title: "Bulk Pricing",
        sub: "Customers purchasing larger quantities of selected products may be able to access volume-based pricing. This can be particularly useful for contractors and customers completing larger projects."
      },
      {
        icon: ShieldCheck,
        title: "Military Discounts",
        sub: "Eligible military customers may qualify for Home Depot's military discount program, subject to the applicable rules and verification requirements."
      },
      {
        icon: Briefcase,
        title: "Pro Savings",
        sub: "Professional contractors and business customers can explore Home Depot's Pro-related programs, which can include account benefits, volume pricing, purchase tracking, and other tools for managing larger projects."
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
      
      {/* Left Column: Main Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Home Depot Discount Code, Coupon Code & Sale
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
            Appliance Sales &amp; Extra Savings
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to $350 Extra
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Free delivery on 2+ eligible items; ends Aug 26
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            GE, GE Profile, Café &amp; Hotpoint appliances
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Select Tools Discount
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to $120 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Promo code may apply; select items
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Power tools, hand tools &amp; equipment
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Halloween Decorations
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $107.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Seasonal availability
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Yard decor, inflatables &amp; seasonal displays
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            RYOBI ONE+ Cordless Fan
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            49% OFF ($79.97)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $78.03; includes 2.0 Ah battery &amp; charger
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            RYOBI ONE+ 18V Whisper Series Fan Kit
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Select Online Bath
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 40% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Online exclusive promotion
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Bathroom fixtures &amp; accessories
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Deals of the Day
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 35% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Rotating daily offers; limited time
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Home improvement &amp; household products
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Nest Outdoor Camera 2-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $249.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            2-pack promotional bundle
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Nest Outdoor Smart Security Cameras
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Truck Rentals
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Starting at $29
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Terms &amp; pricing vary by store location
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Home Depot moving &amp; hauling truck rentals
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Select Furniture Sale
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 30% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Selected styles &amp; items
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Living room, bedroom &amp; dining furniture
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            M12 Cordless Crown Stapler Kit
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            62% OFF ($129)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $210 (Reg. $339); includes battery/charger
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Milwaukee M12 12V Lithium-Ion Crown Stapler Kit
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            eufy Video Doorbell 2K
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            42% OFF ($104.99)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $75 (Reg. $179.99); includes chime
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            eufy 2K Wireless Smart Video Doorbell
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Wood &amp; Vinyl Flooring
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Select styles &amp; flooring options
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Hardwood, engineered wood &amp; vinyl flooring
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-500",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find a Home Depot Discount Code and Save on Your Next Order
            </h3>
            <p>
              Planning a home improvement project, replacing an old appliance, updating your outdoor space, or simply looking for tools and supplies? Before checking out, searching for a Home Depot discount code can help you find a better price on the products you need.
            </p>
            <p>
              Home Depot is a major U.S. home improvement retailer with products covering construction, tools, hardware, appliances, kitchen and bath, flooring, lighting, paint, lawn and garden, outdoor living, storage, décor, and more. Its broad catalog makes it useful for everything from small DIY jobs to larger renovation projects.
            </p>
            <p>
              At CouponsBit, you can check available Home Depot coupon code offers, promotions, and savings opportunities before shopping. It is also worth comparing coupon offers with the current Home Depot sale, seasonal promotions, special buys, and other retailer deals before placing an order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Shop at Home Depot?
            </h3>
            <p>
              Home Depot is designed for both DIY shoppers and customers working on larger home improvement projects. Its product selection covers everyday repair supplies as well as major renovation categories.
            </p>
            <p>You can shop for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tools</li>
              <li>Hardware</li>
              <li>Building materials</li>
              <li>Appliances</li>
              <li>Kitchen products</li>
              <li>Bathroom products</li>
              <li>Flooring</li>
              <li>Paint</li>
              <li>Lighting</li>
              <li>Electrical supplies</li>
              <li>Plumbing supplies</li>
              <li>Lawn and garden products</li>
              <li>Outdoor furniture</li>
              <li>Grills</li>
              <li>Décor</li>
              <li>Storage and organization</li>
              <li>Cleaning supplies</li>
              <li>Safety equipment</li>
              <li>Smart home products</li>
              <li>Seasonal merchandise</li>
            </ul>
            <p>
              Whether you're fixing one room or working on an entire property, Home Depot provides products across multiple stages of a project.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Home Depot Tools
            </h3>
            <p>
              Tools are one of Home Depot's biggest categories, with options for professional contractors, serious DIY users, and occasional home repairs.
            </p>
            <p>
              <strong>Power Tools:</strong> Home Depot carries drills, impact drivers, saws, sanders, grinders, nailers, routers, and other powered equipment. You can shop for individual tools as well as kits that combine several pieces of equipment.
            </p>
            <p>
              <strong>Hand Tools:</strong> The selection includes hammers, screwdrivers, wrenches, pliers, measuring tools, utility knives, levels, clamps, and other basic equipment.
            </p>
            <p>
              <strong>Tool Sets:</strong> Tool sets can be useful when you're starting a workshop or replacing several tools at once. Sets are available for different types of projects and experience levels.
            </p>
            <p>
              <strong>Outdoor Power Equipment:</strong> Home Depot also sells equipment for maintaining yards and outdoor areas, including lawn mowers, leaf blowers, chainsaws, trimmers, pressure washers, and related accessories.
            </p>
            <p>
              <strong>Tool Storage:</strong> Tool boxes, rolling cabinets, workbenches, organizers, and storage systems can help keep equipment accessible and organized.
            </p>
          </div>

          <div className="space-y-6">
  {/* Hardware */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Hardware
    </h3>
    <p>
      Hardware covers many of the small components needed for repairs, construction, furniture projects, and installations.
    </p>
    <p>Shoppers can find:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Screws</li>
      <li>Nails</li>
      <li>Bolts</li>
      <li>Nuts</li>
      <li>Washers</li>
      <li>Anchors</li>
      <li>Brackets</li>
      <li>Hinges</li>
      <li>Casters</li>
      <li>Hooks</li>
      <li>Locks</li>
      <li>Door hardware</li>
      <li>Cabinet hardware</li>
      <li>Fasteners</li>
    </ul>
    <p>
      If you're completing a DIY project, hardware is often one of the first categories worth checking alongside your main materials.
    </p>
  </div>

  {/* Building Materials */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Building Materials
    </h3>
    <p>
      Home Depot supplies materials for construction, renovation, repairs, and remodeling.
    </p>
    <p>
      <strong>Lumber:</strong> The lumber section includes boards, dimensional lumber, plywood, pressure-treated wood, and other materials used for construction and DIY projects.
    </p>
    <p>
      <strong>Drywall:</strong> Drywall and related products can be used for interior walls, ceilings, repairs, and remodeling.
    </p>
    <p>
      <strong>Insulation:</strong> Homeowners can find insulation materials designed to improve energy efficiency and indoor comfort.
    </p>
    <p>
      <strong>Roofing:</strong> Roofing products include shingles, underlayment, flashing, roofing tools, and related materials.
    </p>
    <p>
      <strong>Concrete and Cement:</strong> For outdoor construction and repair projects, shoppers can find concrete mixes, cement products, mortar, and related supplies.
    </p>
    <p>
      <strong>Doors and Windows:</strong> Home Depot also carries doors, windows, replacement components, screens, and installation-related products.
    </p>
  </div>

  {/* Appliances */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Appliances
    </h3>
    <p>
      Home Depot offers a broad selection of major and small appliances for kitchens, laundry rooms, and other areas of the home.
    </p>
    <p>
      <strong>Refrigerators:</strong> Options include French-door, side-by-side, top-freezer, bottom-freezer, and other refrigerator styles.
    </p>
    <p>
      <strong>Dishwashers:</strong> Dishwashers are available in different sizes, finishes, capacities, and feature sets.
    </p>
    <p>
      <strong>Ovens and Ranges:</strong> Shoppers can choose gas, electric, and induction cooking appliances depending on their kitchen requirements.
    </p>
    <p>
      <strong>Microwaves:</strong> The selection includes countertop, over-the-range, and built-in microwave options.
    </p>
    <p>
      <strong>Washers and Dryers:</strong> Home Depot carries washing machines, dryers, washer-dryer combinations, and laundry accessories.
    </p>
    <p>
      <strong>Small Appliances:</strong> You can also find smaller kitchen appliances and related products for everyday cooking and food preparation.
    </p>
  </div>

  {/* Kitchen */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Kitchen
    </h3>
    <p>
      Home Depot has a substantial kitchen section for both complete remodels and smaller updates.
    </p>
    <p>
      <strong>Kitchen Cabinets:</strong> Cabinets are available in different materials, colors, sizes, configurations, and styles.
    </p>
    <p>
      <strong>Countertops:</strong> Shoppers can explore countertop materials for new kitchens, replacements, and remodeling projects.
    </p>
    <p>
      <strong>Kitchen Sinks:</strong> The selection includes different sink styles and materials for a range of kitchen designs.
    </p>
    <p>
      <strong>Faucets:</strong> Kitchen faucets are available in multiple finishes and configurations, including pull-down and touchless options.
    </p>
    <p>
      <strong>Backsplash:</strong> Tile and backsplash products can be used to refresh kitchen walls without replacing the entire room.
    </p>
    <p>
      <strong>Kitchen Organization:</strong> Home Depot also sells drawer organizers, cabinet storage products, pantry solutions, and other organizational accessories.
    </p>
  </div>

  {/* Bathroom */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Bathroom
    </h3>
    <p>
      The bathroom section covers products for remodeling, repairs, upgrades, and everyday maintenance.
    </p>
    <p>You can shop for:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Bathroom vanities</li>
      <li>Toilets</li>
      <li>Bathtubs</li>
      <li>Showers</li>
      <li>Bathroom sinks</li>
      <li>Faucets</li>
      <li>Showerheads</li>
      <li>Mirrors</li>
      <li>Bathroom lighting</li>
      <li>Bathroom storage</li>
      <li>Accessories</li>
      <li>Plumbing products</li>
    </ul>
    <p>
      A bathroom renovation can involve several categories, making it useful to compare products and promotions before purchasing.
    </p>
  </div>

  {/* Flooring */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Flooring
    </h3>
    <p>
      Home Depot offers flooring for bedrooms, kitchens, bathrooms, living spaces, basements, and other areas.
    </p>
    <p>
      <strong>Hardwood Flooring:</strong> Hardwood flooring provides a traditional option for homeowners looking for a long-lasting floor finish.
    </p>
    <p>
      <strong>Laminate Flooring:</strong> Laminate can provide the appearance of wood or other materials while offering another option for renovation projects.
    </p>
    <p>
      <strong>Vinyl Flooring:</strong> Vinyl flooring includes planks, tiles, and sheet options and can be particularly useful for areas where moisture resistance is important.
    </p>
    <p>
      <strong>Tile:</strong> Home Depot sells ceramic, porcelain, stone, mosaic, and other tile products for floors, walls, backsplashes, and bathrooms.
    </p>
    <p>
      <strong>Carpet:</strong> Carpet is available in different colors, textures, patterns, and materials for bedrooms and living areas.
    </p>
    <p>
      <strong>Flooring Installation:</strong> Customers can also explore installation services and related flooring supplies.
    </p>
  </div>

  {/* Paint and Décor */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Paint and Décor
    </h3>
    <p>
      Paint is an easy way to change the appearance of a room without undertaking a complete renovation.
    </p>
    <p>
      <strong>Interior Paint:</strong> Interior paints are available in different finishes, colors, and formulations for walls, ceilings, trim, and other surfaces.
    </p>
    <p>
      <strong>Exterior Paint:</strong> Exterior coatings are designed for outdoor surfaces such as siding, doors, fences, and other structures.
    </p>
    <p>
      <strong>Paint Supplies:</strong> Home Depot also sells:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Paint brushes</li>
      <li>Rollers</li>
      <li>Paint trays</li>
      <li>Drop cloths</li>
      <li>Tape</li>
      <li>Scrapers</li>
      <li>Extension poles</li>
      <li>Paint sprayers</li>
      <li>Sandpaper</li>
      <li>Caulk</li>
    </ul>
    <p>
      <strong>Wall Décor:</strong> You can also browse mirrors, wall art, decorative accessories, and other products for refreshing your home's interior.
    </p>
  </div>

  {/* Lighting */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Lighting
    </h3>
    <p>
      Lighting can change both the functionality and appearance of a room.
    </p>
    <p>Home Depot offers products such as:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Ceiling lights</li>
      <li>Chandeliers</li>
      <li>Pendant lights</li>
      <li>Recessed lighting</li>
      <li>Wall sconces</li>
      <li>Vanity lights</li>
      <li>Table lamps</li>
      <li>Floor lamps</li>
      <li>Outdoor lighting</li>
      <li>Smart lighting</li>
      <li>Light bulbs</li>
      <li>Lighting accessories</li>
    </ul>
    <p>
      Different lighting categories can be used for kitchens, bedrooms, bathrooms, living rooms, offices, garages, patios, and outdoor areas.
    </p>
  </div>

  {/* Electrical */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Electrical
    </h3>
    <p>
      For electrical projects, Home Depot offers products and supplies including:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Electrical wire</li>
      <li>Outlets</li>
      <li>Switches</li>
      <li>Circuit breakers</li>
      <li>Electrical boxes</li>
      <li>Extension cords</li>
      <li>Surge protectors</li>
      <li>Cable management</li>
      <li>Smart switches</li>
      <li>Lighting controls</li>
    </ul>
    <p>
      Electrical work can involve safety considerations and, depending on the project, professional installation may be appropriate.
    </p>
  </div>

  {/* Plumbing */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Plumbing
    </h3>
    <p>
      The plumbing category includes products for repairs, replacements, and renovation projects.
    </p>
    <p>You can find:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Pipes</li>
      <li>Fittings</li>
      <li>Faucets</li>
      <li>Valves</li>
      <li>Water supply products</li>
      <li>Drain products</li>
      <li>Toilet repair parts</li>
      <li>Water heaters</li>
      <li>Sump pumps</li>
      <li>Plumbing tools</li>
      <li>Leak repair products</li>
    </ul>
  </div>

  {/* Lawn and Garden */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Lawn and Garden
    </h3>
    <p>
      Home Depot is also a major destination for outdoor maintenance and gardening supplies.
    </p>
    <p>
      <strong>Lawn Care:</strong> Products include lawn mowers, grass seed, fertilizer, weed control products, sprinklers, hoses, and lawn tools.
    </p>
    <p>
      <strong>Gardening:</strong> Gardeners can shop for:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Plants</li>
      <li>Seeds</li>
      <li>Planters</li>
      <li>Pots</li>
      <li>Garden soil</li>
      <li>Compost</li>
      <li>Fertilizer</li>
      <li>Gardening tools</li>
      <li>Raised garden beds</li>
    </ul>
    <p>
      <strong>Outdoor Power Equipment:</strong> For larger yards, shoppers can explore riding mowers, zero-turn mowers, trimmers, blowers, chainsaws, and other equipment.
    </p>
    <p>
      <strong>Pest Control:</strong> Home Depot also carries products designed to help manage common household and garden pests.
    </p>
  </div>

  {/* Outdoor Living */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Outdoor Living
    </h3>
    <p>
      Outdoor spaces can be furnished and upgraded with products from Home Depot's outdoor living category.
    </p>
    <p>
      <strong>Patio Furniture:</strong> Options can include outdoor chairs, tables, sofas, sectionals, benches, and dining sets.
    </p>
    <p>
      <strong>Grills:</strong> Home Depot sells gas grills, charcoal grills, electric grills, smokers, griddles, and related grilling accessories.
    </p>
    <p>
      <strong>Outdoor Storage:</strong> Sheds, deck boxes, storage cabinets, and other products can help organize outdoor equipment.
    </p>
    <p>
      <strong>Patio Décor:</strong> Outdoor rugs, cushions, umbrellas, lighting, planters, and decorative products can help personalize patios and decks.
    </p>
    <p>
      <strong>Fire Pits:</strong> Fire pits and outdoor heating products can make patios more useful during cooler evenings.
    </p>
  </div>

  {/* Storage and Organization */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Storage and Organization
    </h3>
    <p>
      Storage products can help organize garages, kitchens, bedrooms, closets, bathrooms, and utility areas.
    </p>
    <p>Shoppers can find:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Storage bins</li>
      <li>Shelving</li>
      <li>Garage cabinets</li>
      <li>Tool organizers</li>
      <li>Closet systems</li>
      <li>Utility storage</li>
      <li>Hooks</li>
      <li>Wall organization</li>
      <li>Racks</li>
      <li>Workbenches</li>
    </ul>
  </div>

  {/* Smart Home */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Smart Home
    </h3>
    <p>
      Home Depot also carries smart-home products that can improve convenience, security, lighting, and energy management.
    </p>
    <p>Depending on the current selection, you can shop for:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Smart locks</li>
      <li>Smart thermostats</li>
      <li>Security cameras</li>
      <li>Video doorbells</li>
      <li>Smart lighting</li>
      <li>Smart switches</li>
      <li>Sensors</li>
      <li>Home automation products</li>
    </ul>
  </div>

  {/* Seasonal Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">
      Home Depot Seasonal Products
    </h3>
    <p>
      Home Depot's product selection changes throughout the year, with seasonal merchandise becoming particularly important during major holidays and weather-related periods.
    </p>
    <p>
      <strong>Spring Sale:</strong> Spring is a major period for lawn, garden, outdoor living, plants, tools, and home improvement projects.
    </p>
    <p>
      <strong>Summer Sale:</strong> Summer promotions can focus on patio furniture, grills, outdoor equipment, cooling products, gardening supplies, and seasonal home projects.
    </p>
    <p>
      <strong>Fall Sale:</strong> Fall can bring offers on tools, storage, heating products, outdoor equipment, and seasonal home maintenance.
    </p>
    <p>
      <strong>Holiday Sales:</strong> Home Depot also runs promotions around major holidays, including seasonal décor and home improvement events.
    </p>
    <p>
      <strong>Black Friday:</strong> Black Friday is one of the most important sale periods for shoppers looking for tools, appliances, electronics, outdoor equipment, home improvement products, and other merchandise.
    </p>
  </div>
</div>

          {/* How to Save More Card */}
          <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa]">
              How to Save More at Home Depot
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Check CouponsBit Before Shopping:</strong> Before starting your project, check CouponsBit for an available Home Depot discount code or other promotion.
              </p>
              <p>
                <strong>Compare Coupons With Special Buy Prices:</strong> If a product is already marked down, compare the final price against any available coupon or promotional offer.
              </p>
              <p>
                <strong>Shop Clearance:</strong> Clearance can be useful if you're flexible about specific models, finishes, colors, or product variations.
              </p>
              <p>
                <strong>Buy During Major Sale Events:</strong> If your project isn't urgent, consider waiting for major promotional periods such as Black Friday, seasonal sales, or other home improvement events.
              </p>
              <p>
                <strong>Compare Appliance Offers:</strong> For major appliances, compare the product price alongside delivery, installation, haul-away, warranties, rebates, and other costs.
              </p>
              <p>
                <strong>Look for Rebates:</strong> Manufacturer rebates can sometimes make a product more affordable even when there isn't a traditional coupon code.
              </p>
              <p>
                <strong>Consider Bulk Purchases:</strong> If you're working on a large project, compare bulk or volume pricing before purchasing materials individually.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              How to Use a Home Depot Coupon Code
            </h3>
            <p>
              <strong>Step 1: Find an Offer —</strong> Check CouponsBit for current Home Depot discount codes, coupons, and promotional offers.
            </p>
            <p>
              <strong>Step 2: Choose Your Products —</strong> Browse tools, appliances, building materials, flooring, paint, garden products, or another Home Depot category.
            </p>
            <p>
              <strong>Step 3: Review the Promotion —</strong> Read the offer conditions carefully. Look for minimum purchase requirements, product exclusions, expiration dates, and other restrictions.
            </p>
            <p>
              <strong>Step 4: Copy the Code —</strong> If the promotion requires a coupon code, copy it before proceeding to checkout.
            </p>
            <p>
              <strong>Step 5: Add Your Products —</strong> Choose the required sizes, quantities, models, and other specifications and add them to your cart.
            </p>
            <p>
              <strong>Step 6: Apply the Code —</strong> Enter the Home Depot coupon code in the applicable promotional field during checkout.
            </p>
            <p>
              <strong>Step 7: Confirm the Final Price —</strong> Check your order summary to ensure the expected discount or promotional benefit has been applied before completing your purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Popular Home Depot Products to Explore
            </h3>
            <p>
              Home Depot can be useful for both small purchases and complete home projects.
            </p>
            <p>
              For DIY work, shoppers can explore power tools, hand tools, tool sets, hardware, lumber, drywall, fasteners, and building supplies.
            </p>
            <p>
              For renovation projects, major categories include kitchen cabinets, countertops, flooring, paint, lighting, bathroom vanities, faucets, toilets, doors, and windows.
            </p>
            <p>
              For household upgrades, Home Depot offers refrigerators, dishwashers, ovens, microwaves, washers, dryers, and other appliances.
            </p>
            <p>
              Outdoor shoppers can browse lawn mowers, gardening supplies, plants, patio furniture, grills, outdoor lighting, sheds, fire pits, and outdoor storage.
            </p>
            <p>
              The store also has products for storage, organization, smart homes, electrical work, plumbing, cleaning, and seasonal decorating.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Shop Home Depot With CouponsBit
            </h3>
            <p>
              From tools and building materials to appliances, flooring, paint, kitchen products, bathroom fixtures, lighting, gardening supplies, patio furniture, grills, storage, and smart-home products, Home Depot offers products for almost every type of home improvement project.
            </p>
            <p>
              Before placing your next order, check CouponsBit for a Home Depot discount code, Home Depot coupon code, or current Home Depot sale. Compare the available promotion with Special Buy pricing, clearance products, rebates, seasonal offers, and other available savings.
            </p>
            <p>
              Whether you're tackling a weekend DIY project, remodeling a kitchen, upgrading your appliances, preparing your garden, or working on a larger renovation, checking available deals before checkout can help you get more value from your Home Depot purchase.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Toggle */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Dynamic FAQ Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Home Depot Discount Codes
          </h3>
          {[
            {
              q: "Where Can I Find a Home Depot Discount Code?",
              a: "You can check CouponsBit for available Home Depot discount codes, coupon codes, deals, and promotional offers before placing an order.",
            },
            {
              q: "What Is a Home Depot Coupon Code?",
              a: "A Home Depot coupon code is a promotional code that may provide a discount on eligible products or orders, depending on the terms of the offer.",
            },
            {
              q: "Does Home Depot Always Have Coupon Codes?",
              a: "No. Coupon availability changes. Home Depot also provides savings through Special Buy offers, clearance pricing, seasonal promotions, rebates, bulk pricing, and other programs.",
            },
            {
              q: "Does Home Depot Have Sales?",
              a: "Yes. Home Depot runs various promotions throughout the year, including seasonal events, Special Buy offers, appliance promotions, tool sales, clearance events, and major shopping periods such as Black Friday.",
            },
            {
              q: "When Is the Best Time to Shop at Home Depot?",
              a: "The right time depends on what you're buying. Spring can be useful for gardening and outdoor projects, while major holiday events and Black Friday can bring promotions across tools, appliances, and home improvement categories.",
            },
            {
              q: "Does Home Depot Have a Black Friday Sale?",
              a: "Yes. Black Friday is an important promotional period for Home Depot, with deals typically spanning multiple categories.",
            },
            {
              q: "Does Home Depot Sell Appliances?",
              a: "Yes. Home Depot sells refrigerators, dishwashers, ranges, ovens, microwaves, washers, dryers, and other appliances.",
            },
            {
              q: "Does Home Depot Sell Tools?",
              a: "Yes. Tools are one of Home Depot's major categories, including power tools, hand tools, tool sets, outdoor power equipment, and storage.",
            },
            {
              q: "Does Home Depot Sell Furniture?",
              a: "Home Depot offers furniture and furnishings across categories such as patio and outdoor living, storage, home organization, and selected indoor spaces.",
            },
            {
              q: "Does Home Depot Sell Plants?",
              a: "Yes. Home Depot's garden selection includes plants, seeds, soil, planters, gardening tools, fertilizers, and other lawn and garden products.",
            },
            {
              q: "Can I Find Home Depot Deals on Appliances?",
              a: "Yes. Appliance promotions can appear during seasonal events, holiday campaigns, and other promotional periods. Check current offers before purchasing a major appliance.",
            },
            {
              q: "Does Home Depot Offer Military Discounts?",
              a: "Home Depot has a military discount program for eligible customers, subject to its current terms and verification requirements.",
            },
            {
              q: "Can I Use a Home Depot Discount Code on Sale Items?",
              a: "That depends on the individual promotion. Some offers may exclude clearance or already-discounted products, while others may apply only to selected merchandise.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors focus:outline-none"
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
                    ? "max-h-[500px] pb-8 opacity-100"
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

      {/* Right Column: Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Home Depot Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Power Tools",
              "Hand Tools",
              "Appliances",
              "Patio Furniture",
              "Lawn Mowers",
              "Paint & Stains",
              "Smart Home",
              "Home Depot Deals",
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

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Home Depot Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "EXCLUSIVE PROMO", sub: "Save up to 15% on Power Tools" },
              { heading: "APPLIANCE DEALS", sub: "Get up to $1,000 off major appliances" },
              { heading: "PATIO & GARDEN", sub: "Save up to 20% on outdoor living" },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  H
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
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
