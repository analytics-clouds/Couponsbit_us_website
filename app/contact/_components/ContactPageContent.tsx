"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronDown, 
  MessageSquare, 
  User, 
  Send, 
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send as Telegram,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  agree: boolean;
  inquiryType: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  message?: string;
  agree?: string;
}

// --- Components ---

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border border-[#f0f0f0] rounded-2xl overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between cursor-pointer hover:bg-[#f9f9f9] transition-all duration-300 p-5 md:p-6"
      >
        <span className="text-base font-semibold text-black text-left">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-[#056bfa] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    agree: false,
    inquiryType: "General"
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    
    if (!formData.agree) {
      newErrors.agree = "You must agree to the privacy policy";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero Section */}
      <section className="relative w-full pt-20 pb-32 md:pt-20 md:pb-40 bg-gradient-to-br from-[#0451c4] to-[#056bfa] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8 animate-pulse"
          >
            <span className="text-[#056bfa] font-bold text-sm tracking-wide">We'd Love to Hear From You</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-4xl md:text-6xl mb-4"
          >
            Get in Touch With Couponsbit
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-5xl mx-auto mb-12 leading-relaxed"
          >
            Need coupon help? Have questions about promo codes, online shopping deals, discount codes, or brand partnerships? The Couponsbit team is here to help.
            We value user feedback and aim to provide quick support related to coupon issues, partnership inquiries, advertising opportunities, and general website assistance.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {[
              { icon: Mail, text: "support.couponsbit@gmail.com" },
              { icon: Phone, text: "+91 83682 16673" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-white px-5 py-2.5 rounded-full shadow-md flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-[#056bfa]" />
                <span className="text-black font-bold text-sm whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0] relative z-10">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Section 3: Contact Info Cards Row */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-black mb-2">How to Reach Us</h2>
            <p className="text-gray-500">Multiple ways to connect with the Couponsbit team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Email */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-[#f0f0f0] rounded-[32px] p-10 text-center shadow-sm hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-black mb-3">Email Us</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Send us an email and we will get back to you within 24 hours on business days
              </p>
              <p className="text-[#056bfa] font-bold text-base">support.couponsbit@gmail.com</p>
              <p className="text-gray-500 text-sm mt-1">support.couponsbit@gmail.com</p>
              <Button
                variant="outline"
                onClick={() => window.location.href = 'mailto:support.couponsbit@gmail.com'}
                className="mt-8 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-full px-8 font-bold transition-all"
              >
                Send Email
              </Button>
            </motion.div>

            {/* Card 2 — Phone */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-[#f0f0f0] rounded-[32px] p-10 text-center shadow-sm hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-black mb-3">Call Us</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Speak directly with our support team Monday to Saturday between 9AM and 6PM IST
              </p>
              <p className="text-[#056bfa] font-bold text-base">+91 83682 16673</p>
              <p className="text-gray-500 text-sm mt-1">Mon–Sat, 9AM–6PM IST</p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'tel:+918368216673'}
                className="mt-8 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-full px-8 font-bold transition-all"
              >
                Call Now
              </Button>
            </motion.div>

            {/* Card 3 — Address */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-[#f0f0f0] rounded-[32px] p-10 text-center shadow-sm hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-black mb-3">Visit Us</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Come say hello at our office anytime during business hours
              </p>
              <p className="text-[#056bfa] font-bold text-base">31 Windsor Avenue</p>
              <p className="text-gray-500 text-sm mt-1">Stoke Gifford, Bristol BS34 8BU</p>
              <Button
                variant="outline"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=31+Windsor+Avenue%2C+Stoke+Gifford%2C+Bristol+BS34+8BU', '_blank')}
                className="mt-8 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-full px-8 font-bold transition-all"
              >
                Get Directions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Contact Form + Google Map */}
      <section className="py-24 bg-[#f5f5f5]" ref={formRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left — Contact Form */}
            <div className="w-full lg:w-[55%]">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#f0f0f0] h-full">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black uppercase tracking-widest mb-4">SEND US A MESSAGE</span>
                      <h3 className="text-2xl font-black text-black mb-2">We Will Get Back to You Within 24 Hours</h3>
                      <p className="text-gray-500 text-sm mb-10">Fill out the form below and our team will respond as soon as possible</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-bold text-sm mb-2">Full Name</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#056bfa]" />
                              <input 
                                type="text"
                                placeholder="Enter your full name"
                                className={cn(
                                  "w-full h-14 pl-12 pr-4 bg-white border-2 rounded-2xl text-sm font-medium transition-all outline-none focus:ring-4 focus:ring-[#056bfa]/10",
                                  errors.fullName ? "border-[#ef4444]" : "border-[#e0e0e0] focus:border-[#056bfa]"
                                )}
                                value={formData.fullName}
                                onChange={(e) => {
                                  setFormData({...formData, fullName: e.target.value});
                                  if (errors.fullName) setErrors({...errors, fullName: undefined});
                                }}
                              />
                            </div>
                            {errors.fullName && <p className="text-[#ef4444] text-[10px] font-bold mt-1.5 px-2">{errors.fullName}</p>}
                          </div>
                          <div>
                            <label className="block text-gray-700 font-bold text-sm mb-2">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#056bfa]" />
                              <input 
                                type="email"
                                placeholder="Enter your email"
                                className={cn(
                                  "w-full h-14 pl-12 pr-4 bg-white border-2 rounded-2xl text-sm font-medium transition-all outline-none focus:ring-4 focus:ring-[#056bfa]/10",
                                  errors.email ? "border-[#ef4444]" : "border-[#e0e0e0] focus:border-[#056bfa]"
                                )}
                                value={formData.email}
                                onChange={(e) => {
                                  setFormData({...formData, email: e.target.value});
                                  if (errors.email) setErrors({...errors, email: undefined});
                                }}
                              />
                            </div>
                            {errors.email && <p className="text-[#ef4444] text-[10px] font-bold mt-1.5 px-2">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-bold text-sm mb-2">Phone Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#056bfa]" />
                              <input 
                                type="tel"
                                placeholder="+91 00000 00000"
                                className="w-full h-14 pl-12 pr-4 bg-white border-2 border-[#e0e0e0] rounded-2xl text-sm font-medium focus:border-[#056bfa] outline-none focus:ring-4 focus:ring-[#056bfa]/10 transition-all"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-700 font-bold text-sm mb-2">Country</label>
                            <div className="relative">
                              <select
                                className={cn(
                                  "w-full h-14 px-4 bg-white border-2 rounded-2xl text-sm font-medium appearance-none outline-none focus:ring-4 focus:ring-[#056bfa]/10 transition-all cursor-pointer",
                                  errors.country ? "border-[#ef4444]" : "border-[#e0e0e0] focus:border-[#056bfa]"
                                )}
                                value={formData.country}
                                onChange={(e) => {
                                  setFormData({...formData, country: e.target.value});
                                  if (errors.country) setErrors({...errors, country: undefined});
                                }}
                              >
                                <option value="" disabled>Select Country</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>India</option>
                                <option>Germany</option>
                                <option>France</option>
                                <option>Italy</option>
                                <option>Spain</option>
                                <option>Netherlands</option>
                                <option>Sweden</option>
                                <option>Norway</option>
                                <option>Denmark</option>
                                <option>Switzerland</option>
                                <option>Belgium</option>
                                <option>Austria</option>
                                <option>Portugal</option>
                                <option>Poland</option>
                                <option>Brazil</option>
                                <option>Mexico</option>
                                <option>Argentina</option>
                                <option>Colombia</option>
                                <option>Chile</option>
                                <option>South Africa</option>
                                <option>Nigeria</option>
                                <option>Kenya</option>
                                <option>Egypt</option>
                                <option>United Arab Emirates</option>
                                <option>Saudi Arabia</option>
                                <option>Israel</option>
                                <option>Turkey</option>
                                <option>Pakistan</option>
                                <option>Bangladesh</option>
                                <option>Sri Lanka</option>
                                <option>Nepal</option>
                                <option>Singapore</option>
                                <option>Malaysia</option>
                                <option>Indonesia</option>
                                <option>Philippines</option>
                                <option>Thailand</option>
                                <option>Vietnam</option>
                                <option>Japan</option>
                                <option>South Korea</option>
                                <option>China</option>
                                <option>Hong Kong</option>
                                <option>Taiwan</option>
                                <option>New Zealand</option>
                                <option>Other</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#056bfa] pointer-events-none" />
                            </div>
                            {errors.country && <p className="text-[#ef4444] text-[10px] font-bold mt-1.5 px-2">{errors.country}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-bold text-sm mb-2">Your Message</label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#056bfa]" />
                            <textarea 
                              rows={5}
                              placeholder="Tell us how we can help you..."
                              className={cn(
                                "w-full pl-12 pr-4 pt-4 bg-white border-2 rounded-2xl text-sm font-medium transition-all outline-none focus:ring-4 focus:ring-[#056bfa]/10 resize-none",
                                errors.message ? "border-[#ef4444]" : "border-[#e0e0e0] focus:border-[#056bfa]"
                              )}
                              value={formData.message}
                              onChange={(e) => {
                                setFormData({...formData, message: e.target.value});
                                if (errors.message) setErrors({...errors, message: undefined});
                              }}
                            />
                          </div>
                          {errors.message && <p className="text-[#ef4444] text-[10px] font-bold mt-1.5 px-2">{errors.message}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-bold text-sm mb-4">Inquiry Type:</label>
                          <div className="flex flex-wrap gap-3">
                            {["General", "Partnership", "Complaint"].map(type => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setFormData({...formData, inquiryType: type})}
                                className={cn(
                                  "px-6 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300",
                                  formData.inquiryType === type 
                                    ? "bg-[#056bfa] border-[#056bfa] text-white shadow-md" 
                                    : "bg-white border-[#e0e0e0] text-gray-500 hover:border-[#056bfa] hover:text-[#056bfa]"
                                )}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="relative w-5 h-5 mt-0.5">
                            <input 
                              type="checkbox"
                              className="peer absolute opacity-0 w-full h-full cursor-pointer z-10"
                              checked={formData.agree}
                              onChange={(e) => {
                                setFormData({...formData, agree: e.target.checked});
                                if (errors.agree) setErrors({...errors, agree: undefined});
                              }}
                            />
                            <div className={cn(
                              "w-5 h-5 rounded border-2 transition-all flex items-center justify-center",
                              formData.agree ? "bg-[#056bfa] border-[#056bfa]" : "bg-white border-[#e0e0e0] peer-hover:border-[#056bfa]"
                            )}>
                              {formData.agree && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                            </div>
                          </div>
                          <label className="text-sm text-gray-600 font-medium">
                            I agree to the Privacy Policy and consent to being contacted by the Couponsbit team
                          </label>
                        </div>
                        {errors.agree && <p className="text-[#ef4444] text-[10px] font-bold px-1">{errors.agree}</p>}

                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-2xl h-14 font-black transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 bg-[#f0fdf4] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-16 h-16 text-[#22c55e]" />
                      </div>
                      <h3 className="text-3xl font-black text-black mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-500 text-lg max-w-sm mb-10 leading-relaxed">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-[#056bfa] font-bold text-lg hover:underline flex items-center gap-2"
                      >
                        Send Another Message <ArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right — Google Map */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-[#f0f0f0] h-full flex flex-col min-h-[500px]">
                <div className="p-6 flex items-center justify-between border-b border-[#f0f0f0] bg-white">
                   <div className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-[#056bfa]" />
                     <span className="text-black font-black text-sm">Couponsbit HQ — Bristol, UK</span>
                   </div>
                   <a
                    href="https://www.google.com/maps/search/?api=1&query=31+Windsor+Avenue%2C+Stoke+Gifford%2C+Bristol+BS34+8BU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#056bfa] text-xs font-black hover:underline"
                   >
                    Open in Google Maps →
                   </a>
                </div>
                <div className="flex-1 w-full relative">
                  <iframe
                    src="https://www.google.com/maps?q=31+Windsor+Avenue%2C+Stoke+Gifford%2C+Bristol+BS34+8BU&output=embed"
                    width="100%"
                    height="100%"
                    className="border-none min-h-[440px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>





      {/* Section 7: Bottom CTA */}
      <section className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] py-24 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-6xl mb-8">💬</div>
          <h2 className="text-4xl font-black mb-4">Still Have Questions?</h2>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Our support team is just a message away and always ready to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-10 py-7 bg-white text-[#056bfa] rounded-full font-black text-lg shadow-xl hover:scale-105 hover:text-[#ffffff] transition-all text-center"
            >
              Send Us a Message
            </Button>
            <button 
              onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-3 border-2 border-white text-white rounded-full font-black text-lg hover:bg-white hover:text-[#056bfa] transition-all text-center"
            >
              Browse FAQs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
