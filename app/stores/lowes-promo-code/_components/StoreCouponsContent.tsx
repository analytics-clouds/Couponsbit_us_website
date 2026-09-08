"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck, ShoppingCart,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Wrench,
  Home,
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
  { id: "d1", label: "SALE", heading: "Holland Pavers 50% OFF", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Vanities & Bathroom Faucets Up to 50% OFF", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Same-Day Delivery + Save Up to $150", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Power Tools & Accessories Up to 50% OFF", sub: "Featured Picks" },
  { id: "d5", label: "NEW", heading: "Halloween Skeleton – Haunted Living 5-ft Animatronic for $199", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp", dealText: "Up To 50% OFF", href: "/stores/harbor-freight-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
];

const STORE_URL = "https://www.lowes.com";

export default function LowesCouponsContent() {
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
              <span className="text-black font-extrabold">Lowe's</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788783184/lowes-logo_q6mswa.webp" alt="Lowe's" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lowe's</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(8.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Lowe's promo codes and Lowe's discount codes at Maxiku Offers. Save up to $600 OFF major appliances, get up to 50% OFF patio furniture, power tools and bathroom vanities, plus enjoy FREE same-day delivery on eligible products for your next home improvement project.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "400+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788783184/lowes-logo_q6mswa.webp" alt="Lowe's Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lowe's Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "50% OFF", title: "Lowe’s – Holland Pavers 50% OFF", desc: "Save 50% OFF on selected Holland Pavers at Lowe’s.", bullets: ["Upgrade your outdoor spaces with stylish and durable paving solutions.", "Shop eligible Holland Pavers at a discounted price for your next home improvement project.", "Limited-time offer available on selected products while supplies last."] },
                  { label: "DEAL", value: "50% OFF", title: "Lowe’s – Vanities & Bathroom Faucets Up to 50% OFF", desc: "Get up to 50% OFF selected vanities and bathroom faucets at Lowe’s.", bullets: ["Refresh your bathroom with vanities, taps, faucets, cabinets and other essentials.", "Bathroom furniture is also available across selected products.", "Limited-time offer valid on eligible products and selections."] },
                  { label: "DEAL", value: "$150", title: "Lowe’s – Same-Day Delivery + Save Up to $150", desc: "Get FREE same-day delivery on selected power tools, equipment and accessories.", bullets: ["Save up to $150 on eligible Lowe’s products.", "Find a wide selection of tools and equipment for home improvement projects.", "Shop eligible items and enjoy convenient same-day delivery where available."] },
                  { label: "SALE", value: "50% OFF", title: "Lowe’s – Power Tools & Accessories Up to 50% OFF", desc: "Grab up to 50% OFF selected power tools and accessories at Lowe’s.", bullets: ["Find tools and accessories for DIY projects, repairs and professional tasks.", "Upgrade your tool collection while taking advantage of these limited-time savings.", "Visit the offer page to check eligible products and availability."] },
                  { label: "NEW", value: "$199", title: "Lowe’s Halloween Skeleton – Haunted Living 5-ft Animatronic for $199", desc: "Add a spooky touch to your Halloween setup with the Haunted Living 5-ft Motion Activated Talking Lighted Skeleton.", bullets: ["Get this freestanding animatronic decoration for $199.", "Features motion activation, talking effects and lighting for an eye-catching display.", "Perfect for creating an impressive Halloween display at home."] },
                  { label: "DEAL", value: "$99", title: "Lowe’s HomeCare+ – 7 Home Services for $99", desc: "Get Lowe’s HomeCare+ with 7 home maintenance services and 2 annual visits.", bullets: ["Services include dryer vent cleaning, HVAC air filter replacement and refrigerator water filter replacement.", "Additional services include water heater flushing, garage door lubrication and detector battery replacement.", "Get professional home upkeep handled by a trained Lowe’s Associate for $99."] },
                  { label: "SALE", value: "35% OFF", title: "Lowe’s Ceiling Fans – Up to 35% OFF", desc: "Save up to 35% OFF selected ceiling fans and related items at Lowe’s.", bullets: ["Shop eligible ceiling fan options starting from $56.", "Find practical and stylish fans to improve airflow and comfort throughout your home.", "Limited-time offer available to all users on selected products."] },
                  { label: "DEAL", value: "$600 OFF", title: "Lowe’s Major Appliances – Up to $600 OFF", desc: "Get up to $600 OFF selected major appliances at Lowe’s.", bullets: ["Shop refrigerators, microwaves, ovens, dishwashers, washing machines, dryers and more.", "Selected appliance prices start from $149.", "Offer is available to all users on eligible major appliance purchases."] },
                  { label: "DEAL", value: "$300 OFF", title: "Lowe’s Hisense Counter-Depth Refrigerator – Save $300", desc: "Shop the Hisense Counter-Depth 18-cu. ft. Top-Freezer Refrigerator at Lowe’s.", bullets: ["Save $300 on this selected refrigerator deal.", "Upgrade your kitchen with a spacious counter-depth refrigerator and top-freezer design.", "Limited-time promotional pricing is available while the offer lasts."] },
                  { label: "SALE", value: "$300 OFF", title: "Lowe’s Kitchen & Laundry Appliances – Up to $300 OFF", desc: "Save up to $300 OFF selected kitchen and laundry appliances at Lowe’s.", bullets: ["Shop products across kitchen, dining, laundry and other home appliance categories.", "Selected discounted products start from $86.", "Available to all users on eligible purchases for a limited time."] },
                  { label: "SALE", value: "50% OFF", title: "Lowe’s Select Patio Furniture – Up to 50% OFF", desc: "Save up to 50% OFF selected patio furniture and accessories during the Lowe’s clearance sale.", bullets: ["Refresh your outdoor living area with discounted patio furniture and outdoor essentials.", "Explore clearance products for your backyard, deck or patio.", "Limited-time clearance offer available on selected products while supplies last."] },
                  { label: "DEAL", value: "40% OFF", title: "Lowe’s Select Kitchen Faucets – Up to 40% OFF + FREE Shipping", desc: "Save up to 40% OFF selected kitchen faucets at Lowe’s.", bullets: ["Upgrade your kitchen with stylish and functional faucet options.", "Enjoy FREE shipping on eligible kitchen faucet purchases.", "Limited-time offer available on selected products while supplies last."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lowe's: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find a Lowe’s Discount Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Home improvement purchases can quickly add up, especially when you’re buying several products for the same project. A valid Lowe’s discount code can make a difference when you’re shopping for tools, appliances, décor, flooring, outdoor products, or other home essentials.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   CouponsBit makes it easier to look for current Lowe’s savings before you check out. Instead of paying full price automatically, take a moment to compare available offers with Lowe’s current promotions. Depending on the product and promotion, you may find a coupon code, special offer, sale price, free delivery promotion, rebate, or another opportunity to reduce your overall spending.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Remember that Lowe’s promotions can come with product, category, membership, or purchase restrictions. Always check the offer terms before applying a code.

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
                        { icon: Search, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Home, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
  <h3 className="text-black font-black text-lg mb-4">
    How to Use a Lowe’s Discount Code
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Using a Lowe’s discount code is generally straightforward.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Search,
        title: "Find and Review Your Offer",
        sub: "Start by finding an eligible offer on CouponsBit and reviewing its terms. Pay attention to expiration dates, minimum purchase requirements, eligible products, exclusions, and any restrictions on combining promotions.",
      },
      {
        icon: ShoppingCart,
        title: "Follow the Checkout Steps",
        sub: (
          <>
            Then:
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li>Visit Lowe’s and select the products you want to purchase.</li>
              <li>Add eligible items to your cart.</li>
              <li>Continue to checkout.</li>
              <li>Look for the applicable promo or coupon-code field.</li>
              <li>Enter or paste your Lowe’s discount code.</li>
              <li>Apply the code and check that the promotion has been reflected.</li>
              <li>Complete your order once everything looks correct.</li>
            </ul>
          </>
        ),
      },
      {
        icon: CheckCircle,
        title: "Troubleshoot If Needed",
        sub: "If the code doesn’t work, don’t assume you have to abandon the purchase. Check whether the offer has expired, whether your products qualify, or whether another promotion is already applied.",
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
          <div className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </div>
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
          Lowe’s Discount Code, Coupon Code & Deals
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Whether you’re refreshing one room, tackling a weekend DIY project, upgrading your appliances, or working on a major home renovation, Lowe’s is one of the go-to destinations for home improvement in the USA. From power tools and building supplies to kitchen appliances, flooring, lighting, outdoor furniture, and lawn care products, Lowe’s has products for projects of almost every size.
          </p>
          <p>
            Before placing an order, it’s worth checking CouponsBit for a Lowe’s discount code that can help you save on eligible purchases. Along with coupon codes, Lowe’s regularly features sales, special promotions, online deals, rebates, member benefits, and other ways to keep your home improvement budget under control.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Coupon Code and Promotional Offers</h3>
    <p>A coupon isn’t the only way to save at Lowe’s. The retailer provides several different types of savings throughout the year, giving shoppers multiple opportunities to find a better deal.</p>
    <p>Lowe’s currently highlights everyday deals, Deals of the Day, its Weekly Ad, rebates, bulk savings, subscriptions, and other promotional opportunities on its savings pages.</p>
    <p>That means you don’t necessarily have to wait for a traditional Lowe’s coupon code. If a code isn’t available for what you need, compare the current sale offers and other promotions before completing your purchase.</p>
    <p>For larger projects, this approach can be particularly useful. You might find that a product is already discounted, while another category has a separate promotion running at the same time.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Lowe’s for Every Home Improvement Project</h3>
    <p>One of Lowe’s biggest advantages is the sheer range of products available. Its online store covers everything from basic household supplies to materials for large-scale renovation projects.</p>
    <p><strong>Appliances:</strong> Planning a kitchen or laundry-room upgrade? Lowe’s carries refrigerators, dishwashers, ranges, microwaves, cooktops, wall ovens, freezers, washers, dryers, and other major appliances.</p>
    <p>You can also explore appliance packages and appliance-specific savings when planning a larger upgrade. If you’re buying several appliances together, compare the current promotions before checking out.</p>
    <p><strong>Tools and Hardware:</strong> For DIY enthusiasts, contractors, and anyone who likes handling home projects themselves, Lowe’s offers a huge selection of tools and hardware.</p>
    <p>You’ll find power tools, hand tools, drills, drivers, ladders, tool storage, measuring equipment, welding supplies, hardware, fasteners, electrical products, and more.</p>
    <p>Popular tool brands and Lowe’s private-label brands give shoppers plenty of options depending on the project and budget.</p>
    <p><strong>Building Supplies:</strong> Taking on a bigger renovation? Lowe’s carries building materials for projects ranging from small repairs to major construction work.</p>
    <p>Shop for lumber, drywall, insulation, roofing supplies, concrete and masonry products, decking, fencing, siding, doors, windows, and other building essentials.</p>
    <p>For larger quantities, it can be useful to look for bulk savings or project-specific promotions before placing your order.</p>
    <p><strong>Kitchen and Bathroom:</strong> A kitchen or bathroom makeover can involve dozens of individual products, making savings especially valuable.</p>
    <p>Lowe’s offers kitchen cabinets, countertops, sinks, faucets, backsplashes, lighting, hardware, vanities, toilets, showers, bathtubs, bathroom accessories, and other remodeling essentials.</p>
    <p>If you’re planning a complete renovation rather than buying a single item, explore Lowe’s installation and design services as well as product promotions.</p>
    <p><strong>Flooring:</strong> Give your home a new look with hardwood, laminate, vinyl flooring, tile, carpet, rugs, and related installation supplies.</p>
    <p>Lowe’s also offers flooring samples and project resources that can help you compare materials before committing to a larger purchase.</p>
    <p><strong>Lawn and Garden:</strong> Your outdoor space can get just as much attention as the inside of your home. Lowe’s offers lawn mowers, plants, soil, fertilizer, garden tools, hoses, irrigation products, landscaping supplies, outdoor storage, and other lawn and garden essentials.</p>
    <p>Seasonal promotions can make this category particularly interesting for shoppers preparing their yards for spring and summer.</p>
    <p><strong>Outdoor Living:</strong> Planning a backyard upgrade? Explore patio furniture, grills, outdoor cooking equipment, fire pits, patio heaters, gazebos, pergolas, sheds, pools, and other outdoor products.</p>
    <p>Lowe’s outdoor selection also includes landscaping and hardscaping supplies for customers taking on larger backyard projects.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More With Lowe’s Sales and Seasonal Promotions</h3>
    <p>Lowe’s runs different promotions throughout the year, and the best opportunity to save often depends on what you’re buying and when you’re shopping.</p>
    <p>For example, spring is a popular time for lawn care, gardening, landscaping, outdoor furniture, and home maintenance purchases. Summer can bring attention to grills, patio products, outdoor living, fans, and cooling solutions.</p>
    <p>Back-to-school season can also be a useful time to watch for storage, organization, lighting, home office, and household deals.</p>
    <p>As the year moves toward fall and winter, shoppers may find promotions around Halloween, Thanksgiving, Black Friday, Cyber Monday, Christmas, and end-of-year shopping. Holiday decorations, appliances, tools, home décor, and giftable products may feature prominently during these periods.</p>
    <p>Major US shopping events such as Labor Day, Black Friday, Cyber Monday, and Christmas are especially worth watching if you have a larger purchase planned. However, promotions change frequently, so it’s smart to compare the available Lowe’s deals rather than waiting for a specific event automatically.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Weekly Ad and Deals of the Day</h3>
    <p>If you’re shopping without a particular coupon code in mind, Lowe’s Weekly Ad is another useful place to look for savings.</p>
    <p>The Weekly Ad can feature promotions across categories such as appliances, tools, paint, lighting, home décor, lawn and garden, and other home improvement products. Lowe’s also promotes Deals of the Day, which can include online-only offers available for a limited period and while supplies last.</p>
    <p>Checking these offers before shopping can help you identify a discount even when a traditional coupon isn’t available.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Rewards and Member Savings</h3>
    <p>Regular Lowe’s shoppers can also explore MyLowe’s Rewards for additional benefits. Lowe’s offers member-only opportunities, including exclusive offers and gifts, while its rewards ecosystem is designed to provide benefits to customers who shop with the retailer regularly.</p>
    <p>If you frequently purchase supplies for home projects, creating an account can make it easier to keep track of orders and take advantage of eligible member benefits.</p>
    <p>Lowe’s also offers a MyLowe’s Rewards Credit Card with an advertised 5% everyday savings benefit on eligible purchases, subject to credit approval and exclusions. Because credit-related promotions have specific terms, shoppers should review the current conditions before applying.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Military Discount</h3>
    <p>Eligible military members, veterans, and qualifying spouses can also access Lowe’s Military Discount after completing the required verification. Lowe’s currently states that verified participants receive 10% off eligible purchases, with exclusions and other terms applying.</p>
    <p>The military discount generally cannot be combined with certain other discounts or applied to various excluded products and services, so check Lowe’s current terms before relying on it for a particular purchase.</p>
  </div>
</div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Get the Best Lowe’s Deals</h3>
            <p>
              Getting a good Lowe’s deal isn’t always about finding the biggest-looking coupon. A smarter strategy is to compare several types of savings.
            </p>
            <p>
              Start by checking CouponsBit for an available Lowe’s discount code. Then compare it with Lowe’s current sale prices, Weekly Ad, Deals of the Day, rebates, bulk savings, and other applicable promotions.
            </p>
            <p>
              For bigger projects, consider buying during major seasonal sales when the products you need are likely to be promoted. You can also keep an eye on clearance sections and category-specific offers.
            </p>
            <p>
              If you’re purchasing several identical products, check whether bulk pricing could provide better value. Lowe’s also offers subscription savings on eligible products, which may be useful for items you regularly need around the house.
            </p>
            <p>
              Most importantly, compare the final eligible savings rather than choosing a coupon simply because it has a larger advertised percentage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Lowe’s Savings?</h3>
            <p>
              Finding a Lowe’s offer can take time when you’re already busy planning a home project. CouponsBit gives shoppers a convenient place to look for available savings before heading to checkout.
            </p>
            <p>
              Instead of searching across multiple websites, you can check for a Lowe’s promo code, coupon code, discount offer, or other deal in one place. You can then compare the available promotion with Lowe’s own sale offers to decide which option makes the most sense for your purchase.
            </p>
            <p>
              Whether you’re buying a new appliance, stocking up on tools, remodeling a bathroom, improving your backyard, or simply picking up a few supplies, checking for savings first can become an easy part of your shopping routine.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Smarter With Lowe’s Deals</h3>
            <p>
              A home improvement project doesn’t have to mean paying full price for everything on your shopping list. From appliances and tools to flooring, paint, building supplies, lawn equipment, and outdoor furniture, Lowe’s offers plenty of ways to shop for your home while keeping an eye on savings.
            </p>
            <p>
              Before you place your next order, check CouponsBit for a Lowe’s discount code and compare it with the retailer’s current promotions. A few extra minutes of checking available offers could help you keep more room in your budget for the next project on your list.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Lowe’s Discount Codes</h3>
          {[
            { q: "Does Lowe’s offer discount codes?", a: "Yes. Lowe’s provides coupons, promotional offers, and other savings opportunities. Available promotions vary by product, customer, and promotional period, so check the current offers before purchasing." },
            { q: "Where can I find a Lowe’s discount code?", a: "You can check CouponsBit for available Lowe’s discount codes and compare them with Lowe’s current sales and promotions." },
            { q: "Can I use a Lowe’s coupon code on sale items?", a: "It depends on the specific offer. Some promotions have exclusions or cannot be combined with other discounts. Always review the terms associated with the coupon before applying it." },
            { q: "Does Lowe’s have seasonal sales?", a: "Yes. Lowe’s regularly promotes seasonal and holiday-related offers. Shopping periods such as spring, summer, Labor Day, Black Friday, Cyber Monday, and Christmas can be useful times to watch for special promotions." },
            { q: "Does Lowe’s offer military discounts?", a: "Yes. Lowe’s has a Military Discount Program for eligible verified service members, veterans, and qualifying spouses. The current program provides 10% off eligible purchases, subject to exclusions and terms." },
            { q: "Does Lowe’s offer free delivery?", a: "Lowe’s promotes free delivery offers on eligible products and orders, but availability and terms can vary. Check the current delivery conditions before ordering." },
            { q: "How can I save money on a large Lowe’s project?", a: "Compare a Lowe’s discount code with current sales, rebates, bulk savings, and other promotions. For larger projects, also check whether installation services, project-specific offers, or seasonal promotions can provide additional value." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lowe’s Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Lowe’s Discount Code", "Power Tools", "Appliance Sale", "Military Discount", "Free Delivery", "Clearance", "Patio Furniture", "Weekly Ad"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lowe’s Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lowe's: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
