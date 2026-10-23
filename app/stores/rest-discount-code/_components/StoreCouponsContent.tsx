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
  Moon,
  Truck,
  Gift,
  Home,
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
  { id: "d3", label: "DEAL", heading: "Duvet Bundle Deal", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Seasonal Bedding Sale", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Nuagewear", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg", dealText: "Up to 39% OFF", href: "/stores/nuage-discount-code" },
  { name: "DeerValley", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg", dealText: "Up to 60% OFF", href: "/stores/deer-valley-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
];

const STORE_URL = "http://restduvetaffiliateprogram.sjv.io/c/6434050/1363307/16395?subId1=1015";

export default function RestCouponsContent() {
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
              <span className="text-black font-extrabold">Rest</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1791978343/restus-logo_qyvz2a.webp" alt="Rest" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Rest Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(2.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Rest Discount Code on premium cooling bedding and sleepwear. Enjoy 40% OFF Evercool® Cooling Pajamas or save up to 30% OFF during the End of Season Sale on selected sleep essentials. You can also use a Rest Promo Code to unlock extra savings on cooling comforters, sheet sets, pillows, and pillowcases. Shop award-winning products designed for hot sleepers and upgrade your sleep experience while these limited-time offers are available.
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
                    { icon: Percent, val: "30+", label: "Deals" },
                    { icon: Users, val: "500K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791978343/restus-logo_qyvz2a.webp" alt="Rest Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Rest Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "30%", title: "Rest End of Season Sale – Save Up to 30% on Cooling Bedding & Sleepwear", desc: "Give your bedroom a refreshing upgrade with Rest’s End of Season Sale on premium sleep essentials.", bullets: ["Explore award-winning bedding and cooling sleepwear designed with hot sleepers in mind.", "Discover special prices across selected products and save on your bedtime favourites.", "Shop the Rest sale collection to find your next sleep upgrade at a reduced price. T&C apply."] },
                  { label: "SAVE", value: "40%", title: "Rest Evercool® Cooling Pajamas Shorts Set – Save 40% at $77", desc: "Keep your nighttime wardrobe comfortable with the Rest Evercool® Cooling Pajamas Shorts Set.", bullets: ["Get this sleepwear set for $77, reduced from $129, for a 40% saving.", "Discover cooling-focused pajamas created for people who tend to sleep hot.", "Make the most of the End of Season Sale and refresh your sleepwear collection. T&C apply."] },
                  { label: "SAVE", value: "40%", title: "Rest Evercool® Cooling Pajamas Pants Set – Get 40% Off from $83", desc: "Enjoy a comfortable bedtime routine with the Rest Evercool® Cooling Pajamas Pants Set.", bullets: ["Shop from $83 instead of $139 and save 40% during the sale.", "Choose these cooling-focused pajamas for a relaxed nighttime wardrobe.", "Browse Rest’s sleepwear collection and find your favourite style for less. T&C apply."] },
                  { label: "SAVE", value: "25%", title: "Rest Evercool®+ Cooling Starter Sheet Set – Save 25% at $134", desc: "Refresh your bed with the Rest Evercool®+ Cooling Starter Sheet Set, made for hot sleepers.", bullets: ["Get this award-winning bedding set for $134 instead of $179.", "Enjoy a 25% discount while upgrading your bedroom with cooling-focused sheets.", "Shop the End of Season Sale to bring home this popular Rest bedding essential. T&C apply."] },
                  { label: "SAVE", value: "25%", title: "Rest Evercool® Cooling Comforter – Get 25% Off the Best Seller", desc: "Discover the Rest Evercool® Cooling Comforter, an award-winning choice for hot sleepers.", bullets: ["Save 25% during the End of Season Sale on this customer-favourite comforter.", "Add a cooling-focused layer to your bed for a more comfortable sleep setup.", "Explore the Rest collection and take advantage of the seasonal offer. T&C apply."] },
                  { label: "SAVE", value: "25%", title: "Rest Evercool®+ Cooling Starter Sheet Set – Get 25% Off at $134", desc: "Create a fresh, comfortable bed with the Rest Evercool®+ Cooling Starter Sheet Set.", bullets: ["Pay $134 instead of $179 and enjoy savings of 25%.", "This popular cooling sheet set has a listed rating of 4.8.", "Upgrade your bedding for less with Rest’s End of Season Sale. T&C apply."] },
                  { label: "SAVE", value: "15%", title: "Rest Evercool® Cooling Pillow – Save 15% at $169", desc: "Give your sleep setup an upgrade with the Rest Evercool® Cooling Pillow.", bullets: ["Get it for $169, down from $199, and save 15%.", "Add this cooling-focused pillow to your collection of comfortable sleep essentials.", "Shop the Rest End of Season Sale and enjoy savings on selected bedding. T&C apply."] },
                  { label: "SAVE", value: "10%", title: "Rest Evercool®+ Cooling Pillowcases – Get 10% Off at $71", desc: "Add a finishing touch to your bed with the Rest Evercool®+ Cooling Pillowcases.", bullets: ["Designed for hot sleepers, these award-winning pillowcases make a great addition to your cooling bedding setup.", "Buy them for $71 instead of $79 and enjoy a 10% saving.", "With a listed customer rating of 4.8, they’re a popular add-on for your sleep routine. HSA/FSA eligibility through Truemed and T&C apply."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Rest: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Rest?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Rest is a bedding brand known for its Evercool® cooling bedding collection, created with hot sleepers in mind. Its products focus on a cool-to-the-touch feel, moisture management and softness, combining functional materials with designs suited to everyday bedrooms. The collection includes cooling comforters, sheet sets, pillows, pillowcases and sleepwear. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Rest is particularly relevant to shoppers who want bedding that feels cool and comfortable without sacrificing softness. Whether you're refreshing your own <Link href="/stores/wayfair-discount-code" className="text-[#056bfa] hover:underline">bedroom</Link> or choosing bedding as a gift, its specialised range offers alternatives to conventional sleep essentials.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Moon, name: "Duvets", count: "15+", color: "text-blue-500", href: "/categories/home" },
                        { icon: Home, name: "Bedding Sets", count: "10+", color: "text-purple-500", href: "/categories/home" },
                        { icon: Gift, name: "Bundles", count: "8+", color: "text-pink-500", href: "/categories/home" },
                        { icon: Truck, name: "Free Shipping", count: "12+", color: "text-teal-500", href: "/categories/home" },
                        { icon: Search, name: "New Arrivals", count: "6+", color: "text-orange-500", href: "/categories/home" },
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
          Find a Rest Discount Code on CouponsBit
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
          "Rest End of Season Sale",
          "Up to 30% OFF",
          "All Users",
          "Discover special prices across selected products and save on bedtime favourites. T&C apply.",
          "Cooling Bedding & Sleepwear"
        ],
        [
          "Rest Evercool® Cooling Pajamas Shorts Set",
          "40% OFF ($77)",
          "All Users",
          "Reduced from $129 original price. Designed for people who tend to sleep hot. T&C apply.",
          "Evercool® Cooling Pajamas Shorts Set"
        ],
        [
          "Rest Evercool® Cooling Pajamas Pants Set",
          "40% OFF (From $83)",
          "All Users",
          "Reduced from $139 original price. Cooling-focused pajamas for hot sleepers. T&C apply.",
          "Evercool® Cooling Pajamas Pants Set"
        ],
        [
          "Rest Evercool®+ Cooling Starter Sheet Set",
          "25% OFF ($134)",
          "All Users",
          "Reduced from $179 original price. Award-winning bedding set made for hot sleepers. T&C apply.",
          "Evercool®+ Cooling Starter Sheet Set"
        ],
        [
          "Rest Evercool® Cooling Comforter",
          "25% OFF",
          "All Users",
          "Customer-favourite and award-winning cooling comforter for hot sleepers. T&C apply.",
          "Evercool® Cooling Comforter"
        ],
        [
          "Rest Evercool®+ Cooling Starter Sheet Set (Rating 4.8)",
          "25% OFF ($134)",
          "All Users",
          "Reduced from $179 original price with a listed rating of 4.8. T&C apply.",
          "Evercool®+ Cooling Starter Sheet Set"
        ],
        [
          "Rest Evercool® Cooling Pillow",
          "15% OFF ($169)",
          "All Users",
          "Reduced from $199 original price. Cooling-focused pillow for comfortable sleep. T&C apply.",
          "Evercool® Cooling Pillow"
        ],
        [
          "Rest Evercool®+ Cooling Pillowcases",
          "10% OFF ($71)",
          "All Users",
          "Reduced from $79 original price. HSA/FSA eligibility through Truemed. T&C apply.",
          "Evercool®+ Cooling Pillowcases"
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
            Before placing an order, browse CouponsBit for a Rest discount code, promo code or current bedding deal. Promotions can change throughout the year, and different offers may apply to different products or order conditions.
          </p>
          <p>
            A discount can be useful when you're replacing a single item, buying a new comforter or updating several parts of your bedding at once. Compare the available offers with any promotion displayed on Rest's official website, and read the terms carefully before choosing.
          </p>
          <p>
            Rest operates regional shopping experiences, including its US and Canadian websites. Product availability, delivery options and promotional eligibility may vary by market, so shoppers in the United States, Canada and the United Kingdom should confirm the relevant terms before ordering.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Explore Rest's Cooling Bedding Collection
          </h3>
          <p>
            <strong>Evercool® Cooling Comforter:</strong> A key product in Rest's range, this comforter features cooling fabric designed to feel cool to the touch and help manage moisture. It is worth considering if you want a softer, cooler-feeling layer for your bed.
          </p>
          <p>
            <strong>Evercool®+ Cooling Sheets:</strong> Refresh your sleeping setup with cooling sheets designed to complement the brand's comforters. Depending on the collection, shoppers can explore sheet sets, starter sets and individual pieces.
          </p>
          <p>
            <strong>Pillows and Pillowcases:</strong> Complete your bedding arrangement with coordinating accessories. These can also be a practical starting point if you want to try Rest products before changing your entire bed.
          </p>
          <p>
            <strong>Sleepwear:</strong> Rest's collection includes cooling-focused <Link href="/stores/nuage-discount-code" className="text-[#056bfa] hover:underline">sleepwear</Link>, giving shoppers another option for building a more comfortable bedtime routine.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Rest Promo Code
          </h3>
          <p>Follow these steps when a suitable offer is available:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and look for a current Rest discount code.</li>
            <li>Read the offer details, including eligible products and any minimum-spend conditions.</li>
            <li>Open the relevant Rest regional website and select your bedding.</li>
            <li>Add the items to your shopping cart and enter the promo code at checkout, if required.</li>
            <li>Review the final order summary to confirm whether the discount has been applied.</li>
          </ol>
          <p>
            If a code doesn't work, check its expiry date, regional restrictions and product eligibility. Some offers may not combine with other promotions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Shop Smarter at Rest
          </h3>
          <p>
            Start with the bedding you actually need. If overheating is your main concern, explore the cooling comforter and sheet collections first. If your current bedding is still in good condition, replacing one item may be a more practical choice than purchasing a complete set.
          </p>
          <p>
            Before ordering, compare product dimensions, materials, care instructions, delivery terms and the return policy applicable to your region. These details matter just as much as the promotional discount when choosing bedding for everyday use.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find Rest Deals With CouponsBit
          </h3>
          <p>
            A comfortable bedroom doesn't always require replacing everything at once. Identify the bedding that suits your needs, compare the available options and check CouponsBit for a Rest discount code, promo code and current deals before ordering. With the right product and a suitable offer, you can make your next bedding purchase a more considered one.
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
            FAQs About Rest Discount Codes
          </h3>
          {[
            {
              q: "Does Rest offer discount codes?",
              a: "Rest may feature promotional offers and seasonal deals. Check CouponsBit and the official regional website for currently available promotions."
            },
            {
              q: "Can I use a Rest promo code on every product?",
              a: "Not necessarily. Some codes may apply only to selected products, collections or qualifying orders. Review the offer terms before checkout."
            },
            {
              q: "Can shoppers in Canada and the UK order from Rest?",
              a: "Rest has a Canadian shopping website, but delivery options and product availability should be checked for your specific destination. UK shoppers should verify whether their address is supported before placing an order."
            },
            {
              q: "What is Rest best known for?",
              a: "Rest is best known for its Evercool® cooling bedding, including comforters and sheets designed for a cool-to-the-touch feel."
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
            Popular Rest Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Rest Discount Code",
              "Cooling Comforter Deals",
              "Evercool Sheets",
              "Bedding Promo Code",
              "Percentage Off Sitewide",
              "Cooling Sleepwear",
              "Seasonal Bedding Sale",
              "Free Delivery Offers"
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
            Today's Top Rest Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "EVERCOOL COMFORTER",
                sub: "Save on top-rated cooling bedding",
              },
              {
                heading: "SHEET SET BUNDLE",
                sub: "Special discounts on cooling sheet sets",
              },
              {
                heading: "COOLING PILLOWCASES",
                sub: "Up to 20% off selected accessories",
              },
              {
                heading: "SLEEPWEAR SPECIAL",
                sub: "Explore discounts on cooling loungewear",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  R
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
                  aria-label={`Shop Rest: ${deal.heading}`}
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
