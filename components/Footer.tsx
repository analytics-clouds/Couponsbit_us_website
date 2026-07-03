import React from "react";
import Link from "next/link";
import {
  ShoppingBag, 
  Ticket, 
  Users, 
  BadgeCheck, 
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  Linkedin,
  Gift,
  Headset,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Navbar";

export const Footer = () => {
  const currentYear = 2026;

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/coupons_bit26/", name: "Instagram" },
    { icon: Twitter, href: "https://x.com/Couponsbit26", name: "Twitter" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCr9e22fOvzGJQ4HG7lsKYyg", name: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/couponsbit/", name: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Stores", href: "/stores" },
    { name: "Deals of the Day", href: "/deals-of-the-day" },
    { name: "Deals of the Week", href: "/deals-of-the-week" },
    { name: "Partner With Us", href: "/partner" }
  ];

  const topCategories = [
    { name: "Electronics",        href: "/categories/electronics" },
    { name: "Travel",             href: "/categories/travel" },
    { name: "Entertainment",      href: "/categories/entertainment" },
    { name: "Software & Digital", href: "/categories/software" },
    { name: "Mobile & Telecom",   href: "/categories/mobile" },
  ];
  const topStores = [
    { name: "StubHub",        href: "/stores/stubhub-coupon-code" },
    { name: "Viagogo",        href: "/stores/viagogo-coupon-code" },
    { name: "LATAM Airlines", href: "/stores/latam-airlines-coupon-code" },
    { name: "Driffle",        href: "/stores/driffle-coupon-code" },
    { name: "Bluehost",       href: "/stores/bluehost-coupon-code" },
    { name: "Lyca Mobile",    href: "/stores/lyca-mobile-coupon-code" },
    { name: "Reolink",        href: "/stores/reolink-coupon-code" },
    { name: "Sintra",         href: "/stores/sintra-coupon-code" },
  ];
  
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" }
  ];

  const stats = [
    { icon: ShoppingBag, value: "2000+", label: "Stores" },
    { icon: Ticket, value: "15K+", label: "Coupons" },
    { icon: Users, value: "500K+", label: "Shoppers" },
    { icon: BadgeCheck, value: "100%", label: "Verified" },
    { icon: Headset, value: "24/7", label: "Support" },
  ];

  return (
    <footer className="w-full">
      {/* Layer 1: Newsletter Banner Strip */}
      {/* <div className="bg-brand-primary py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex p-4 bg-white/10 rounded-2xl">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Never Miss a Great Deal!</h3>
                <p className="text-white/90 mt-1 font-medium max-w-lg">
                  Subscribe to get the latest coupons, deals & exclusive offers straight to your inbox.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                  <Input 
                    placeholder="Enter your email address" 
                    className="h-14 pl-12 pr-40 rounded-full bg-white border-transparent focus-visible:ring-offset-0 focus-visible:ring-brand-primary-dark text-black font-medium"
                  />
                  <Button className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full bg-black hover:bg-zinc-900 text-white px-6 font-bold transition-all shadow-lg active:scale-95">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-white/90 text-xs font-semibold text-center lg:text-left pl-2">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Layer 2: Main Footer Body */}
      <div className="bg-[#051a33] pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Column 1: Brand */} 
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start leading-none gap-0 mb-6">
                 <Link href="/" className="flex flex-col items-start leading-none gap-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-2xl tracking-tighter text-white">COUPONSBIT</span>
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">
                Striving to make the world a better place to shop with great savings!
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                We may earn a commission if you buy through links on Couponsbit.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex flex-col gap-2">
                Quick Links
                <span className="w-10 h-0.5 bg-brand-primary rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 font-medium hover:text-brand-primary transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Top Categories */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex flex-col gap-2">
                Top Categories
                <span className="w-10 h-0.5 bg-brand-primary rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-3">
                {topCategories.map((cat) => (
                  <li key={cat.name}>
                    <Link href={cat.href} className="text-gray-400 font-medium hover:text-brand-primary transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Top Stores */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex flex-col gap-2">
                Top Stores
                <span className="w-10 h-0.5 bg-brand-primary rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-3">
                {topStores.map((store) => (
                  <li key={store.name}>
                    <Link href={store.href} className="text-gray-400 font-medium hover:text-brand-primary transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                      {store.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex flex-col gap-2">
                Company
                <span className="w-10 h-0.5 bg-brand-primary rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 font-medium hover:text-brand-primary transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Bottom Stats Bar */}
      <div className="bg-[#0a2545] py-8 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
            {stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="flex items-center justify-center gap-4 group">
                  <div className="p-2.5 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-extrabold text-xl leading-none">{stat.value}</span>
                    <span className="text-gray-400 text-[13px] font-bold mt-1 uppercase tracking-wider">{stat.label}</span>
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block w-px h-10 bg-white/10" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Layer 4: Copyright Bar */}
      <div className="bg-[#030f20] py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-300 text-sm font-semibold tracking-wide">
            © {currentYear} Couponsbit. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/privacy-policy" className="text-sm font-bold hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms-of-use" className="text-sm font-bold hover:text-brand-primary transition-colors">Terms of Use</Link>
            <span className="text-gray-500">|</span>
            <Link href="/faqs" className="text-sm font-bold hover:text-brand-primary transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
