"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronRight,
  Store,
  Tag,
  Users,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
  Target,
  Eye,
  CheckCircle,
  RefreshCw,
  Crown,
  Heart,
  Bell,
  Search,
  Clock,
  Shield,
  Star,
  Quote,
  Linkedin,
  Twitter
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Components ---

/**
 * Animated Count component that increments from 0 to target when in view
 */
const CountUp = ({ end, duration = 2000, suffix = "" }: { end: string, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Parse the number from the string (e.g., "2,000+" -> 2000)
  const target = parseInt(end.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endVal = target;
      if (start === endVal) return;

      let totalMiliseconds = duration;
      let incrementTime = (totalMiliseconds / endVal) * 5; // Adjustment for smooth step
      if (incrementTime < 10) incrementTime = 10;

      const timer = setInterval(() => {
        start += Math.ceil(endVal / (duration / 50)); // Step based on duration
        if (start >= endVal) {
          setCount(endVal);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  // Format with commas
  const formatted = count.toLocaleString();
  const displayValue = end.includes("+") ? `${formatted}+` : end.includes("Cr") ? `₹${formatted} Cr+` : end.includes("%") ? `${formatted}%` : formatted;

  return <span ref={ref}>{displayValue}</span>;
};

// --- Main Page ---

export default function AboutUsContent() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero Section */}
      <section className="relative w-full pt-[100px] pb-[100px] md:pt-[100px] md:pb-[100px] bg-gradient-to-br from-[#0451c4] via-[#056bfa] to-[#1a9db5] overflow-hidden mt-[64px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-[#e8f6f8]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8 animate-pulse"
          >
            <span className="text-[#056bfa] font-bold text-sm tracking-wide">The Most Trusted Coupon Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-4xl md:text-7xl mb-2 drop-shadow-sm"
          >
            Making online shopping lighter on your wallet. 
          </motion.h1>
          

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl max-w-[650px] mx-auto mb-16 leading-relaxed"
          >
            Couponsbit helping the world discover smarter ways to shop, save and enjoy more with verified deals from brands they love. 

          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: "2000+ Stores", value: "2000+", icon: Store },
              { label: "15,000+ Coupons", value: "15000+", icon: Tag },
              { label: "500K+ Shoppers", value: "500000+", icon: Users },
              { label: "100% Verified", value: "100%", icon: BadgeCheck }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center relative group overflow-hidden"
              >
                <stat.icon className="absolute top-4 right-4 w-5 h-5 text-[#056bfa] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                <span className="text-[#056bfa] font-black text-2xl md:text-4xl mb-1">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label.split(' ').slice(1).join(' ')}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">About Us</span>
          </nav>
        </div>
      </div>

      {/* Section 3: Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Image/Illustration */}
            <div className="w-full lg:w-1/2">
              <img
                src="/about-us.webp"
                alt="About Couponsbit"
                className="w-full h-[400px] md:h-[520px] rounded-[48px] object-cover"
              />
              <p className="text-center text-gray-500 text-sm italic mt-8">Trusted by 500,000+ shoppers across India</p>
            </div>

            {/* Right Column: Story Text */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">We Were Tired of Fake Coupons Too - So We Built Couponsbit</h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  Online shopping should feel exciting - not frustrating. But with so many expired promo codes and misleading deals floating around online, finding real savings became harder than it should be. That’s why we created Couponsbit: a smarter way for shoppers to discover verified promo codes, exclusive offers, and trending deals from brands they already love.
                </p>
                <p>
                  Today, Couponsbit is growing into a trusted destination for online savings across fashion, electronics, travel, lifestyle, and more. We help shoppers save money effortlessly while helping brands connect with deal-conscious customers who are ready to shop. Our goal is simple: make every purchase feel smarter, easier, and more rewarding.
                </p>
                
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission & Vision */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">WHAT DRIVES US</span>
            <h2 className="text-4xl md:text-5xl font-black text-black">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[48px] border border-[#f0f0f0] shadow-sm flex flex-col items-center group transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#056bfa] rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4">Our Mission</h3>
              <div className="w-10 h-1.5 bg-[#056bfa] rounded-full mb-8" />
              <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Our mission is to help shoppers worldwide make informed purchasing decisions while saving money through trusted discount codes and online deals.

              </p>

               <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
                We also aim to help brands increase visibility, customer engagement, and conversions through strategic promotional partnerships.
              </p>
          
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[48px] border border-[#f0f0f0] shadow-sm flex flex-col items-center group transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#0451c4] rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4">Our Vision</h3>
              <div className="w-10 h-1.5 bg-[#0451c4] rounded-full mb-8" />
              <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Couponsbit envisions becoming a trusted global destination for online shopping deals, promo codes, and digital savings opportunities.
              </p>
               <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
                We continuously work toward improving deal accuracy, user experience, and brand partnerships to deliver better value to both shoppers and businesses.
              </p>

             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">WHY COUPONS CLOUDS</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">What Makes Couponsbit Different?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We are not just another coupon site — here is what sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Verified Deals You Can Actually Use", 
                icon: BadgeCheck, 
                bg: "bg-[#056bfa]", 
                desc: "We manually review and update our promo codes daily so you spend less time testing expired coupons and more time saving money." 
              },
              { 
                title: "Savings From Brands People Love", 
                icon: RefreshCw, 
                bg: "bg-[#0451c4]", 
                desc: "From fashion and tech to travel and food delivery, Couponsbit brings together deals from popular U.S. and international brands in one place." 
              },
              { 
                title: "No Clutter. No Fake Discounts.", 
                icon: Store, 
                bg: "bg-[#1a9db5]", 
                desc: "We focus on real savings, clean browsing, and easy-to-use deals without overwhelming users with outdated or misleading offers." 
              },
              { 
                title: "Smarter Way to Shop Online", 
                icon: Crown, 
                bg: "bg-[#FF6B9D]", 
                desc: "Whether you’re looking for a quick promo code or the best deal of the day, Couponsbit makes online shopping easier, faster, and more rewarding." 
              },
              { 
                title: "Fresh Deals Added Daily", 
                icon: Heart, 
                bg: "bg-[#22c55e]", 
                desc: "Our team constantly updates offers so shoppers always have access to the latest discounts, seasonal sales, and exclusive savings opportunities." 
              },
              { 
                title: "100% Free for Shoppers", 
                icon: Bell, 
                bg: "bg-[#F39C12]", 
                desc: "No memberships. No hidden fees. Just verified coupons, cash back opportunities, and better online deals every day." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[40px] border border-[#f0f0f0] flex flex-col group transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform", feature.bg)}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-black mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{feature.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-[#056bfa] text-xs font-black uppercase tracking-widest">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-24 bg-[#e8f6f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-white text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">HOW IT WORKS</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Save Money in 3 Simple Steps</h2>
          </div>

          <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 md:gap-0 max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px border-t-2 border-dashed border-[#056bfa]/30 -z-0" />

            {[
              { 
                step: "1", 
                title: "Find Your Store", 
                desc: "Search for your favorite store or browse by category to find the best available deals", 
                icon: Search 
              },
              { 
                step: "2", 
                title: "Grab the Coupon", 
                desc: "Click Show Code, copy your verified coupon code with one tap and view the deal details", 
                icon: Tag 
              },
              { 
                step: "3", 
                title: "Save Money!", 
                desc: "Paste the code at checkout on the store's website and enjoy your instant discount", 
                icon: BadgeCheck 
              }
            ].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10 w-full">
                <div className="w-20 h-20 bg-[#056bfa] rounded-full flex items-center justify-center text-white font-black text-4xl shadow-xl mb-8 border-8 border-white">
                  {step.step}
                </div>
                <h3 className="text-2xl font-black text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center max-w-[240px] leading-relaxed mb-8">{step.desc}</p>
                <step.icon className="w-12 h-12 text-[#056bfa] opacity-20" />
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button asChild className="bg-[#056bfa] hover:bg-[#0451c4] text-white px-12 py-7 rounded-full text-xl font-black shadow-xl hover:shadow-2xl transition-all active:scale-95">
              <Link href="/stores">Start Saving Now →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Our Numbers */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">BY THE NUMBERS</span>
            <h2 className="text-4xl md:text-5xl font-black text-black">Coupons Clouds in Numbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, value: "2,000+", label: "Partner Stores", sub: "And growing every day" },
              { icon: Tag, value: "15,000+", label: "Active Coupons", sub: "Updated in real time" },
              { icon: Users, value: "500,000+", label: "Happy Shoppers", sub: "Across all of India" },
              { icon: BadgeCheck, value: "100%", label: "Verified Deals", sub: "No fake codes ever" },
              { icon: Clock, value: "24/7", label: "Deal Updates", sub: "Never miss a saving" },
              { icon: TrendingUp, value: "50 Cr+", label: "Saved by Users", sub: "And counting daily" },
              { icon: Star, value: "4.8/5", label: "User Rating", sub: "From 10,000+ reviews" },
              { icon: Shield, value: "4+", label: "Years of Trust", sub: "Since 2020" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.03, border: "2px solid #056bfa" }}
                className="bg-white p-8 md:p-10 rounded-[40px] border border-[#f0f0f0] text-center shadow-sm group transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#e8f6f8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#056bfa]" />
                </div>
                <div className="text-[#056bfa] font-black text-4xl md:text-5xl mb-2">
                  <CountUp end={item.value} />
                </div>
                <p className="text-black font-extrabold text-sm mb-1">{item.label}</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Meet The Team */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">OUR TEAM</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">The People Behind Coupons Clouds</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A passionate team of deal hunters, developers and designers working to save India money</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Rahul Kumar", role: "Founder & CEO", initials: "RK", 
                grad: "from-[#056bfa] to-[#0451c4]", bio: "Deal hunter by passion, entrepreneur by choice. Building India's best coupon platform." 
              },
              { 
                name: "Priya Sharma", role: "Head of Deals", initials: "PS", 
                grad: "from-[#FF6B9D] to-[#C44B8A]", bio: "Personally verifies every coupon before it goes live. Saved users over ₹10 crore." 
              },
              { 
                name: "Arjun Verma", role: "Tech Lead", initials: "AV", 
                grad: "from-[#4A90E2] to-[#1a5fb4]", bio: "Built the platform from scratch. Makes sure deals load in milliseconds." 
              },
              { 
                name: "Sneha Mehta", role: "Marketing Head", initials: "SM", 
                grad: "from-[#F39C12] to-[#d35400]", bio: "Tells the world about Coupons Clouds and grows our community of savers." 
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, border: "2px solid #056bfa" }}
                className="bg-white p-8 rounded-[48px] text-center border border-[#f0f0f0] shadow-sm flex flex-col items-center group transition-all duration-500"
              >
                <div className={cn("w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br", member.grad)}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-black text-black mb-1">{member.name}</h3>
                <p className="text-[#056bfa] font-bold text-sm mb-4 uppercase tracking-tighter">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mb-8">{member.bio}</p>
                <div className="flex gap-3 justify-center">
                   {[Linkedin, Twitter].map((Icon, idx) => (
                     <button key={idx} className="w-10 h-10 rounded-full border border-[#f0f0f0] flex items-center justify-center text-gray-400 hover:border-[#056bfa] hover:text-[#056bfa] transition-all">
                       <Icon className="w-4 h-4" />
                     </button>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-6">WHAT PEOPLE SAY</span>
            <h2 className="text-4xl md:text-5xl font-black text-black">Loved by 500,000+ Shoppers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Amit Kumar", role: "Shopaholic from Delhi", initials: "AK", grad: "from-[#056bfa] to-[#0451c4]",
                quote: "Coupons Clouds saved me over ₹8,000 last month alone! Every coupon I tried actually worked. I will never shop online without checking here first." 
              },
              { 
                name: "Riya Patel", role: "Fashion Lover from Mumbai", initials: "RP", grad: "from-[#FF6B9D] to-[#C44B8A]",
                quote: "Finally a coupon site where the codes actually work! I saved ₹3,500 on my Myntra order and ₹2,000 on MakeMyTrip. Absolutely love Coupons Clouds!" 
              },
              { 
                name: "Vikram Singh", role: "Tech Enthusiast from Bangalore", initials: "VS", grad: "from-[#4A90E2] to-[#1a5fb4]",
                quote: "I was skeptical at first but Coupons Clouds blew me away. The deals are real, the codes work and the website is super easy to use. Highly recommended!" 
              }
            ].map((ts, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, border: "2px solid #056bfa" }}
                className="bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm relative group transition-all duration-300"
              >
                <div className="absolute top-6 left-6 text-[#e8f6f8] -z-0">
                  <Quote className="w-16 h-16 fill-current rotate-180 opacity-50" />
                </div>
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                
                <p className="text-gray-700 text-lg italic leading-relaxed mb-10 relative z-10">
                  "{ts.quote}"
                </p>
                
                <div className="h-px bg-gray-100 w-full mb-8" />
                
                <div className="flex items-center gap-4">
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 bg-gradient-to-br", ts.grad)}>
                    {ts.initials}
                  </div>
                  <div>
                    <h4 className="text-black font-black text-base">{ts.name}</h4>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{ts.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Partners / Trusted By Marquee */}
      <section className="py-20 bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-black">Trusted by India's Biggest Brands</h3>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear"
            }}
            className="flex gap-6 px-6 py-4"
          >
            {[
              "Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Nike", "Puma", "Adidas", 
              "MakeMyTrip", "Goibibo", "Zomato", "Swiggy", "Samsung", "Dell", "HP", "Lenovo", 
              "BookMyShow", "Uber", "Redbus", "Healthkart"
            ].map((store, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-sm border border-[#f0f0f0] group-hover:border-[#056bfa] transition-all shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#056bfa]" />
                <span className="text-black font-black text-base uppercase tracking-tighter">{store}</span>
              </div>
            ))}
            {/* Duplicated for smooth loop */}
            {[
              "Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Nike", "Puma", "Adidas", 
              "MakeMyTrip", "Goibibo", "Zomato", "Swiggy", "Samsung", "Dell", "HP", "Lenovo", 
              "BookMyShow", "Uber", "Redbus", "Healthkart"
            ].map((store, i) => (
              <div key={`dup-${i}`} className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-sm border border-[#f0f0f0] group-hover:border-[#056bfa] transition-all shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#056bfa]" />
                <span className="text-black font-black text-base uppercase tracking-tighter">{store}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 11: Bottom CTA */}
      <section className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] py-24 text-center text-white relative overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#e8f6f8]/5 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          <h2 className="text-4xl md:text-6xl font-black mb-4">Ready to Start Saving?</h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-6xl mx-auto mb-12 leading-relaxed">
           Find the best promo codes, exclusive discounts, and trending online deals from brands you love, and save more every time you shop. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/deals" className="w-full sm:w-auto px-12 py-6 bg-white text-[#056bfa] rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all text-center">
              Browse All Deals
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-12 py-6 border-2 border-white text-white rounded-full font-black text-xl hover:bg-white hover:text-[#056bfa] transition-all text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
