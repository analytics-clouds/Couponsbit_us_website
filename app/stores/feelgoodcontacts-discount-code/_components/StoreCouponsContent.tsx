"use client";

import { useState } from "react";
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
  Copy,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Eye,
  Calendar,
  Palette,
  Shield,
  Glasses,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, FEELGOOD_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
];

const STORE_URL = "https://feelgood.prf.hn/click/camref:1100l3B8Vq/pubref:1016b";

export default function FeelGoodContactsCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    const coupon = FEELGOOD_COUPONS.find((c) => c.code === code) || null;
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const faqs = [
    {
      q: "Does Feel Good Contacts offer discount codes?",
      a: "Yes, Feel Good Contacts regularly offers promo codes for first-time buyers and during seasonal promotions. All verified codes are listed on Couponsbit.",
    },
    {
      q: "How do I apply a Feel Good Contacts coupon code?",
      a: "At checkout on feelgoodcontacts.com, enter your promo code in the 'Discount Code' box and click Apply. The saving appears before payment confirmation.",
    },
    {
      q: "Does Feel Good Contacts offer free delivery?",
      a: "Yes, Feel Good Contacts offers free delivery on all UK orders with no minimum spend. International shipping charges may apply depending on destination.",
    },
    {
      q: "Can I return contact lenses to Feel Good Contacts?",
      a: "Yes. Unopened contact lenses in their original packaging can be returned within 100 days for a full refund or exchange. Opened or damaged items are not eligible.",
    },
    {
      q: "Is Feel Good Contacts a safe and legitimate retailer?",
      a: "Yes. Feel Good Contacts is a registered UK pharmacy (GPhC registration 9010837) and an authorised seller of all major contact lens brands including Acuvue, Dailies and Biofinity.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">

      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#056bfa] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl italic">F</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">Your coupon code has been copied!</p>
              <div className="bg-[#e6f4ff] border-2 border-dashed border-[#056bfa] rounded-xl px-6 py-3">
                <span className="text-[#056bfa] font-black text-xl tracking-widest">
                  {activeModalCoupon.code || "NO CODE NEEDED"}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center">{activeModalCoupon.description}</p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-full bg-[#056bfa] hover:bg-[#006aaa] text-white font-bold py-3.5 px-6 rounded-2xl text-center text-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Continue to Store <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      <Navbar />

      {/* Toast */}
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
              <span className="text-black font-extrabold">Feel Good Contacts</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[55%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793878984/feel_good_contact_logo.webp"
                        alt="Feel Good Contacts"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Feel Good Contacts Discount Code &amp; Promo Codes</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(6.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Feel Good Contacts Discount Code and Feel Good Contacts Promo Code for November 2026. Enjoy up to 70% OFF glasses, up to 60% OFF sunglasses, and contact lenses up to 50% cheaper than high street opticians. You can also shop 2-for-1 glasses from £35, glasses under £30, and sunglasses from just £8. Browse verified Feel Good Contacts offers to save on prescription glasses, contact lenses, designer eyewear, and eye care essentials.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#006aaa] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: `${FEELGOOD_COUPONS.length}`, label: "Offers" },
                    { icon: Percent, val: "15+", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Customers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#056bfa] to-[#006aaa] flex items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793878984/feel_good_contact_logo.webp"
                        alt="Feel Good Contacts Discount Code"
                        width={280}
                        height={120}
                        className="max-h-32 w-auto object-contain filter brightness-0 invert"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
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
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" },
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

              {/* Left: Coupons */}
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Feel Good Contacts Discount Codes &amp; Offers</h2>
                </div>
                {FEELGOOD_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        {/* Left panel */}
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006aaa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{coupon.mainValue}</div>
                            {coupon.offText && (
                              <p className="text-[8px] sm:text-sm font-bold mt-1 opacity-80">{coupon.offText}</p>
                            )}
                          </div>
                        </div>

                        {/* Right area */}
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{coupon.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{coupon.description}</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" /> {coupon.userType}
                              </span>
                              <span className="flex items-center gap-1">
                                <BadgeCheck className="w-3.5 h-3.5" /> {coupon.verified}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setExpandedCoupon(expandedCoupon === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1 focus:outline-none"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${expandedCoupon === coupon.id ? "rotate-180" : ""}`}
                              />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCoupon === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#056bfa]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Button column */}
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button
                                onClick={() => handleCopy(coupon.code)}
                                className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#e6f4ff] transition-colors"
                              >
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href={STORE_URL}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get Feel Good Contacts deal: ${coupon.title}`}
                              className="w-full bg-[#056bfa] hover:bg-[#006aaa] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                            >
                              Get Deal
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* Google Preferred Badge */}
                <div className="w-full flex justify-center mb-6">
                  <a href="https://www.google.com/preferences/source?q=couponsbit.us" target="_blank" rel="nofollow noopener noreferrer" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
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

                {/* What Is Feel Good Contacts? */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Feel Good Contacts?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Feel Good Contacts is an online retailer specialising in contact lenses, prescription glasses, sunglasses, contact lens solutions, and other eye care essentials. The company was established in 2008 and focuses on providing genuine branded eyewear and eye care products through its online stores.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its catalogue includes products from established optical manufacturers such as Acuvue, Alcon, Bausch + Lomb, and CooperVision, alongside its own product ranges. Customers can explore different lens types, eyewear styles, and accessories depending on their requirements.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Feel Good Contacts also provides features such as repeat ordering, promotional offers, and price matching in eligible markets. Its local websites provide market-specific shopping information, so product availability, delivery options, and discounts can vary by country. 

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Top Categories */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Eye, name: "Daily Lenses", count: "10+", color: "text-[#056bfa]", href: "/categories" },
                      { icon: Calendar, name: "Monthly Lenses", count: "10+", color: "text-blue-700", href: "/categories" },
                      { icon: Palette, name: "Coloured Lenses", count: "5+", color: "text-purple-500", href: "/categories" },
                      { icon: Shield, name: "Eye Care", count: "5+", color: "text-green-600", href: "/categories" },
                      { icon: Glasses, name: "Glasses & Frames", count: "5+", color: "text-gray-500", href: "/categories" },
                    ].map((cat, i) => (
                      <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                        </div>
                        <span className="bg-[#e6f4ff] text-[#056bfa] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                {/* Explore Popular Categories */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Ways to Save More at Feel Good Contacts
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A promo code is not the only way to find better value when shopping for eyewear. Consider these options before placing your order.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check first-order discounts:</strong> The UK website advertises a 10% welcome discount for eligible new customers using code FEELGOOD. This is a UK-specific offer and should not be assumed to work on other regional websites.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Explore app promotions:</strong> The UK offers page lists a 5% discount on eligible app orders with code APP5. Check the current conditions before using it.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Consider Auto-Reorder:</strong> The UK website advertises an additional 5% saving for eligible Auto-Reorder orders. This option can be useful if you regularly purchase the same contact lenses.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Look for student offers:</strong> Eligible students and graduates may find additional discounts through student discount programmes.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check key worker benefits:</strong> The UK offers page lists discounts for eligible frontline workers. Verification and offer conditions apply.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Use the Price Match Guarantee:</strong> Feel Good Contacts' UK website offers a price match on eligible identical contact lenses found at qualifying UK retailers. The product and retailer must meet its stated conditions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Explore seasonal promotions:</strong> Check the regional website for limited-time offers on contact lenses, glasses, sunglasses, and eye care essentials.</span>
      </p>
    </div>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* More Stores Section */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You&apos;ll Love</h2>
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
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        {/* Big Content Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Feel Good Contacts Promo Code: Save on Contact Lenses & Eyewear
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Discount Code – Up to 60% Off Sunglasses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 60% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Wide range of popular styles & quality sunglasses</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Selected Sunglasses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Discount Code – Up to 70% Off Glasses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 70% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time savings on newest frame collections</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Selected Glasses & Frames</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Promo Code – Contact Lenses Up to 50% Cheaper</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Trusted brands, daily, weekly & monthly lenses</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Contact Lenses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Promo Code – 2 for 1 Glasses from £35</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Buy 1 Get 1 FREE (From £35)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Buy qualifying pair £35+, get second frame free</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Glasses Frames</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Voucher Code – Glasses Under £30</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Under £30</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Prescription glasses with fast delivery options</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Prescription Glasses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Voucher Code – Sunglasses from £8</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From £8</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time offer on budget frame styles</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Select Sunglasses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Coupon Code – Lens Care Products from £0.85</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From £0.85</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lens cases, cleaning solutions & care products</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Lens Care Essentials</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Coupon Code – Eye Care Essentials from £4.70</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From £4.70</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Eye drops, eye masks & cleaning sprays</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eye Care Essentials</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Referral Code – Designer Glasses from £35</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From £35</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Brands like Ray-Ban, Oakley & Tommy Hilfiger</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Designer Eyewear</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Referral Code – Feel Good Collection from £8</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From £8</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Everyday low prices on modern frames for men & women</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Feel Good Collection Frames</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Discount Deal – Contact Lens Solutions</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Special Savings</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multi-purpose & conditioning solutions from top brands</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Contact Lens Solutions</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Feel Good Contacts Discount Deal – Eye Care Accessories</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Budget Pricing</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Eye masks, lens cases & cleaning basics</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eye Care Accessories</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Shopping for contact lenses, prescription glasses, or stylish sunglasses? Feel Good Contacts offers a range of eyewear and eye care products from recognised brands, giving customers an online place to shop for their vision needs. Before placing an order, visit CouponsBit to find a Feel Good Contacts promo code and explore available discounts.
          </p>
          <p>
            Whether you're restocking your regular contact lenses, looking for a new pair of glasses, or shopping for sunglasses, checking current offers can help you make your purchase more affordable.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            What Can You Buy at Feel Good Contacts?
          </h3>
          <p>
            Feel Good Contacts offers several categories of eyewear and eye care products. Here are some of the main options to explore.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            1. Contact Lenses
          </h3>
          <p>
            Contact lenses are one of the brand's main product categories. You can browse lenses from recognised manufacturers and explore options suited to different prescriptions and wearing schedules.
          </p>
          <p>
            Popular categories include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Daily disposable lenses: Single-use lenses designed to be replaced after each day of wear.</li>
            <li>Monthly contact lenses: Reusable lenses that follow a monthly replacement schedule, according to the manufacturer's instructions.</li>
            <li>Two-weekly lenses: Contact lenses designed for replacement every two weeks.</li>
            <li>Toric lenses: Specially designed lenses for people with astigmatism.</li>
            <li>Multifocal lenses: Options designed for people who need correction at different viewing distances.</li>
            <li>Coloured contact lenses: Cosmetic and prescription options, depending on the product.</li>
          </ul>
          <p>
            Always select lenses that match your current contact lens prescription and follow your eye care professional's guidance.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            2. Prescription Glasses
          </h3>
          <p>
            Explore different frame styles and lens options for everyday vision correction. Feel Good Contacts offers glasses in different designs, materials, and finishes.
          </p>
          <p>
            Depending on the selected product and market, shoppers can explore options such as standard prescription lenses, photochromic lenses, and other lens enhancements.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            3. Sunglasses
          </h3>
          <p>
            Looking for eyewear for sunny days or outdoor activities? Browse sunglasses in different shapes, colours, and styles. The collection also includes designer options and prescription sunglasses where available.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            4. Contact Lens Solutions
          </h3>
          <p>
            Proper lens care is an important part of wearing reusable contact lenses. Feel Good Contacts stocks contact lens solutions and related products designed for lens cleaning, rinsing, and storage.
          </p>
          <p>
            Choose a solution compatible with your contact lenses and follow the instructions provided by the manufacturer or your eye care professional.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            5. Eye Drops and Eye Care Essentials
          </h3>
          <p>
            The store also features selected eye drops and lubricating products for people looking for additional eye care essentials. Check the product information and suitability before purchasing.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            6. Accessories
          </h3>
          <p>
            You can also explore practical accessories such as lens cases, cleaning products, eyewear pouches, and other items that support your everyday eyewear routine.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find a Feel Good Contacts Promo Code on CouponsBit
          </h3>
          <p>
            Before buying your favourite lenses or eyewear, check CouponsBit for available Feel Good Contacts offers.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and open the Feel Good Contacts store page.</li>
            <li>Browse the available promo codes and discount offers.</li>
            <li>Select an offer that matches your planned purchase and shopping region.</li>
            <li>Read the conditions, including product exclusions, minimum spending requirements, and expiry dates.</li>
            <li>Copy the promo code if the offer requires one.</li>
            <li>Visit the relevant Feel Good Contacts website for your country.</li>
            <li>Add your selected products to the basket.</li>
            <li>Continue to checkout and enter the code in the promotional code section.</li>
            <li>Apply the code and check the revised order total before completing payment.</li>
          </ol>
          <p>
            Some discounts are automatically applied, while others require a promotional code or account eligibility. Always follow the instructions attached to the specific offer.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply a Feel Good Contacts Promo Code
          </h3>
          <p>
            Using a valid Feel Good Contacts discount code is straightforward.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open the relevant Feel Good Contacts website.</li>
            <li>Sign in to your account or create one if required.</li>
            <li>Select your contact lenses, glasses, sunglasses, or eye care products.</li>
            <li>Add the products to your basket.</li>
            <li>Open the basket or checkout page.</li>
            <li>Find the promotional code or Apply Promotions section.</li>
            <li>Enter your copied code and select Apply.</li>
            <li>Confirm that the discount has been deducted before paying.</li>
          </ol>
          <p>
            For the UK website, Feel Good Contacts directs customers to the basket's Apply Promotions / Rewards section to enter a promotional code. The exact checkout process may differ across regional websites.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Feel Good Contacts Promo Codes for Different Countries
          </h3>
          <p>
            Feel Good Contacts serves customers across multiple international markets through its affiliate programme and regional shopping operations. CouponsBit's store page can help shoppers in the following target locations discover relevant offers.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-sm">
              <thead>
                <tr className="bg-[#e8f6f8] text-[#056bfa] font-black text-sm uppercase tracking-widest border-b border-[#f0f0f0]">
                  <th className="p-4">Target country</th>
                  <th className="p-4">What to check before ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-gray-600 font-bold text-sm">
                <tr>
                  <td className="p-4 text-black">United Kingdom</td>
                  <td className="p-4">UK-specific promo codes, delivery and membership offers</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Albania</td>
                  <td className="p-4">Regional shipping availability and applicable discounts</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Australia</td>
                  <td className="p-4">Product availability, delivery charges and local terms</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Canada</td>
                  <td className="p-4">Eligible products, shipping and checkout offers</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Iceland</td>
                  <td className="p-4">International delivery eligibility and applicable fees</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">India</td>
                  <td className="p-4">India-specific website, offers and delivery conditions</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Israel</td>
                  <td className="p-4">Shipping eligibility and local checkout terms</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Malaysia</td>
                  <td className="p-4">Regional availability and promotional conditions</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Netherlands</td>
                  <td className="p-4">Applicable regional offers and delivery details</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">New Zealand</td>
                  <td className="p-4">Shipping availability and delivery charges</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Norway</td>
                  <td className="p-4">Regional checkout conditions and applicable fees</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Saudi Arabia</td>
                  <td className="p-4">Delivery eligibility and any applicable import charges</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">South Africa</td>
                  <td className="p-4">Product availability and international delivery terms</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">United States</td>
                  <td className="p-4">US shipping eligibility and available promotions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The brand's affiliate programme lists these countries among the markets it serves. However, this does not mean every product, promotion, or delivery service is available in every location.
          </p>
          <p>
            Check the relevant regional website and confirm your address at checkout before ordering.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Things to Check Before Buying from Feel Good Contacts
          </h3>
          <p>
            Before placing an order, keep these practical points in mind.
          </p>
          <p>
            <strong>Use an up-to-date prescription:</strong> Make sure your contact lens prescription is current and that the lens brand, power, base curve, and diameter match your prescribed requirements.
          </p>
          <p>
            <strong>Check the lens replacement schedule:</strong> Daily, fortnightly, and monthly lenses have different replacement instructions. Follow the manufacturer's guidance and your eye care professional's recommendations.
          </p>
          <p>
            <strong>Confirm product compatibility:</strong> Contact lens solutions and eye care products are not necessarily suitable for every lens type. Review the product description before purchasing.
          </p>
          <p>
            <strong>Check regional delivery terms:</strong> Shipping costs, delivery times, taxes, and product restrictions can differ between countries. The checkout page should confirm whether the selected products can be delivered to your address.
          </p>
          <p>
            <strong>Review the return policy:</strong> Contact lenses and other eye care products may have specific return conditions, particularly when packaging has been opened. Read the applicable regional policy before ordering.
          </p>
          <p>
            <strong>Compare the final price:</strong> Consider delivery charges and any applicable taxes alongside the product price and promotional discount.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop for Eyewear and Save with CouponsBit
          </h3>
          <p>
            From everyday contact lenses and prescription glasses to sunglasses and eye care essentials, Feel Good Contacts offers a variety of products for different vision and lifestyle needs.
          </p>
          <p>
            Before placing your next order, visit CouponsBit to explore the latest Feel Good Contacts promo codes, discount offers, and eyewear deals. Whether you're shopping from the UK, India, Australia, Canada, the United States, or another supported market, check the regional offer conditions and find a discount that works for your purchase.
          </p>
          <p>
            Compare available promotions, choose products that match your requirements, and apply an eligible code at checkout to make your eyewear shopping more affordable.
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
            Frequently Asked Questions About Feel Good Contacts Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find a Feel Good Contacts promo code?",
              a: "You can visit the Feel Good Contacts store page on CouponsBit to explore available discount codes and offers. Check the terms to make sure the promotion applies to your country and selected products."
            },
            {
              q: "2. Does Feel Good Contacts offer a first-order discount?",
              a: "Yes. Its UK website advertises 10% off the first order of eligible contact lenses, solutions, and eye care products using code FEELGOOD. The offer is for new customers and cannot be combined with other discounts or third-party promotional links. Other regional websites may have different welcome offers."
            },
            {
              q: "3. Can I order contact lenses without uploading my prescription?",
              a: "The UK website states that customers do not need to upload their prescription when ordering, but they should have an updated contact lens prescription and use the correct details when purchasing. Follow the requirements of the relevant regional website and local regulations."
            },
            {
              q: "4. Does Feel Good Contacts sell branded contact lenses?",
              a: "Yes. Its product range includes lenses from established manufacturers such as Johnson & Johnson, Alcon, Bausch + Lomb, and CooperVision. Availability depends on the regional store and product."
            },
            {
              q: "5. Can I reorder my previous contact lenses?",
              a: "Yes. The UK website provides a Reorder feature through the customer account, allowing customers to repeat previous purchases. Make sure your prescription and lens requirements are still current before placing another order."
            },
            {
              q: "6. Does Feel Good Contacts offer a price match?",
              a: "Yes. The UK website has a Price Match Guarantee for eligible identical contact lenses sold by qualifying UK retailers. The offer has specific conditions, including product availability and retailer eligibility."
            },
            {
              q: "7. Can I use the same Feel Good Contacts promo code in every country?",
              a: "Not necessarily. Promotional codes can be restricted to a particular regional website, customer group, or product category. Always check the offer terms and use the code on the correct country website."
            },
            {
              q: "8. Does Feel Good Contacts offer discounts on glasses and sunglasses?",
              a: "Yes. Its UK offers page lists discounts on prescription glasses and designer sunglasses, with offers changing over time. Check the regional website for current promotions and eligible products."
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
            Popular Feel Good Contacts Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Feel Good Contacts Promo Code",
              "10% Off First Order",
              "Branded Contact Lenses",
              "Price Match Guarantee",
              "Designer Sunglasses Sale",
              "Prescription Glasses Offers",
              "Daily Disposable Lenses",
              "Contact Lens Solutions"
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
            Today's Top Feel Good Contacts Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "10% OFF FIRST ORDER",
                sub: "Use code FEELGOOD on your initial order",
              },
              {
                heading: "PRICE MATCH GUARANTEE",
                sub: "Lowest price matched on identical UK contact lenses",
              },
              {
                heading: "DESIGNER SUNGLASSES",
                sub: "Save on Ray-Ban, Oakley & top eyewear brands",
              },
              {
                heading: "EASY REORDER FEATURE",
                sub: "Quick reorders directly from your customer account",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  F
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
                  aria-label={`Shop Feel Good Contacts: ${deal.heading}`}
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
