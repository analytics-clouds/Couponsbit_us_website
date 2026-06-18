"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Menu,
  Bell,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
  LayoutGrid,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NotificationPanel } from "./NotificationPanel";
import { allStores } from "@/lib/stores-data";



export const Logo = () => (
  <Image
    src="/logo.png"
    alt="Couponsbit Logo"
    width={1347}
    height={542}
    priority
    sizes="278px"
    className="h-16 w-auto"
  />
);

export const NavLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Categories", 
    href: "/categories", 
    hasDropdown: true,
    subLinks: [
      { name: "Electronics",         href: "/categories/electronics",   icon: Laptop },
      { name: "Travel",              href: "/categories/travel",         icon: Plane },
      { name: "Entertainment",       href: "/categories/entertainment",  icon: Tv },
      { name: "Software & Digital",  href: "/categories/software",      icon: Code },
      { name: "Mobile & Telecom",    href: "/categories/mobile",        icon: Zap },
      { name: "View All Categories", href: "/categories",               icon: LayoutGrid },
    ]
  },
  { name: "Stores", href: "/stores" },
  { name: "Deals", href: "/deals" },
  { name: "Deals of the Week", href: "/deals-of-the-week" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const notificationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const searchResults = isSearchOpen && searchQuery.length > 0
    ? allStores.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8)
    : [];

  const closeSearch = () => { setIsSearchOpen(false); setSearchQuery(''); };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b relative",
        isScrolled ? "shadow-md border-transparent py-2" : "border-brand-primary-light py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group/nav-item">
                <Link 
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors flex items-center gap-1 group py-4",
                    isActive ? "text-brand-primary font-semibold" : "text-black hover:text-brand-primary"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover/nav-item:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-300 transform translate-y-2 group-hover/nav-item:translate-y-0 z-50 overflow-hidden">
                    <div className="p-4 grid gap-1">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-primary/5 group/sub-link transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover/sub-link:bg-brand-primary/10 transition-colors">
                            <subLink.icon className="w-5 h-5 text-gray-500 group-hover/sub-link:text-brand-primary transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 group-hover/sub-link:text-brand-primary transition-colors">
                              {subLink.name}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">Browse best offers</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right side CTA & Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className={cn("text-black hover:text-brand-primary", isSearchOpen && "text-brand-primary")}
            onClick={() => { setIsSearchOpen(o => !o); setSearchQuery(''); }}
          >
            <Search className="w-5 h-5" />
          </Button>
          
          <Button 
            className="hidden md:flex bg-brand-primary hover:bg-brand-primary-dark text-white rounded-full px-6 font-bold transition-all duration-300"
            render={<Link href="/deals-of-the-day" />}
          >
            Deals of the Day
          </Button>

          <div className="relative" ref={notificationRef}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className={cn("text-black hover:text-brand-primary relative", isNotificationOpen && "text-brand-primary")}
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#ef4444] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </Button>

            <NotificationPanel isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="text-black hover:text-brand-primary">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left">
                    <Link href="/" onClick={handleLinkClick}>
                      <Logo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  {NavLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <div key={link.name} className="space-y-4">
                        <Link 
                          href={link.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "text-lg transition-colors flex items-center justify-between font-semibold",
                            isActive ? "text-brand-primary" : "text-black hover:text-brand-primary"
                          )}
                        >
                          {link.name}
                          {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </Link>
                        
                        {link.hasDropdown && (
                          <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-primary/10">
                            {link.subLinks?.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={handleLinkClick}
                                className="flex items-center gap-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
                              >
                                <subLink.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{subLink.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                  <Button 
                    className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-full py-6 text-lg font-bold"
                    render={<Link href="/deals-of-the-day" onClick={handleLinkClick} />}
                  >
                    Deals of the Day
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Panel */}
      {isSearchOpen && (
        <div ref={searchRef} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40">
          {/* Input row */}
          <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-3 border-b border-gray-100">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              ref={searchInputRef}
              autoFocus
              type="text"
              placeholder="Search stores..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 text-sm outline-none text-black placeholder:text-gray-400 font-medium bg-transparent"
            />
            <button
              onClick={closeSearch}
              aria-label="Close search"
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Results when typing */}
          {searchQuery.length > 0 && (
            <div className="container mx-auto px-4 md:px-6 py-2 max-h-[60vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <>
                  {searchResults.map(store => (
                    <Link
                      key={store.id}
                      href={`/stores/${store.id}`}
                      onClick={closeSearch}
                      className="flex items-center gap-3 py-2.5 px-2 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                        <img src={store.logo} alt={store.name} width={28} height={28} className="w-7 h-7 object-contain" />
                      </div>
                      <span className="text-sm font-semibold text-black flex-1">{store.name}</span>
                      <span className="text-xs text-gray-400 font-medium hidden sm:block">{store.discount}</span>
                    </Link>
                  ))}
                  <Link
                    href="/stores"
                    onClick={closeSearch}
                    className="flex items-center gap-1 mt-1 mb-1 py-2 px-2 text-xs font-bold text-brand-primary hover:underline"
                  >
                    View all stores →
                  </Link>
                </>
              ) : (
                <p className="text-sm text-gray-500 py-5 text-center">
                  No stores found for &ldquo;<span className="font-semibold text-black">{searchQuery}</span>&rdquo;
                </p>
              )}
            </div>
          )}

          {/* Popular stores shown before user types */}
          {searchQuery.length === 0 && (
            <div className="container mx-auto px-4 md:px-6 py-3">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Popular Stores</p>
              <div className="flex flex-wrap gap-2">
                {allStores.slice(0, 6).map(store => (
                  <Link
                    key={store.id}
                    href={`/stores/${store.id}`}
                    onClick={closeSearch}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-primary/5 border border-gray-200 transition-colors"
                  >
                    <img src={store.logo} alt={store.name} width={16} height={16} className="w-4 h-4 object-contain" />
                    <span className="text-xs font-semibold text-gray-700">{store.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
