import Link from "next/link";
import { Home, Search, Tag, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#0451c4] to-[#056bfa] overflow-hidden">
          <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
            <span className="inline-block px-6 py-2 bg-white rounded-full shadow-md mb-8">
              <span className="text-[#056bfa] font-bold text-sm tracking-wide">Error 404</span>
            </span>

            <h1 className="text-white font-black text-7xl md:text-9xl mb-4 leading-none">404</h1>

            <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-4">
              Oops! This Deal Has Expired
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              The page you are looking for does not exist or may have been moved. Do not worry, there are plenty of verified coupons and deals waiting for you on the homepage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="w-full sm:w-auto px-8 py-6 bg-white text-[#056bfa] rounded-full font-black text-base shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Homepage
                </Button>
              </Link>
              <Link href="/deals">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#056bfa] rounded-full font-black text-base transition-all flex items-center gap-2"
                >
                  <Tag className="w-5 h-5" />
                  Browse Deals
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white text-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-black text-black mb-2">Popular Pages</h3>
              <p className="text-gray-500">Here are some helpful links to get you back on track</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { href: "/", label: "Homepage", icon: Home },
                { href: "/stores", label: "All Stores", icon: Search },
                { href: "/deals", label: "Today's Deals", icon: Tag },
                { href: "/contact", label: "Contact Us", icon: ArrowRight },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-[#f0f0f0] rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-black font-bold text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
