"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon,
  ShoppingBag,
  Home,
  Utensils,
  Sparkles,
  Tag,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function ArticleInteractive() {
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const sections = [
    { id: "dress-up", title: "1. Dress Up as Anyone You Want!" },
    { id: "trick-or-treating", title: "2. Trick-or-Treating Is Back!" },
    { id: "haunted-house", title: "3. Turn Your Home Into a Haunted House!" },
    { id: "halloween-party", title: "4. Throw a Halloween Party Your Friends Won't Forget!" },
    { id: "pumpkin-season", title: "5. Make the Most of Pumpkin Season!" },
    { id: "furry-friends", title: "6. Don't Forget Your Furry Friends!" },
    { id: "halloween-night", title: "7. Plan a Halloween Night Full of Surprises!" },
    { id: "last-minute-shopping", title: "8. Last-Minute Halloween Shopping?" },
  ];


  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#056bfa] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      <main>
        {/* Breadcrumb Section */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
            <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Halloween Fun Ideas</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">HALLOWEEN GUIDE</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">October 30, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Halloween Is Here! Get Ready for a Spooktacular Time
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1793359590/halloween-fun-ideas-costumes-parties_ywte6e.webp"
                    alt="Halloween fun ideas for costumes, parties, trick-or-treating and decorations"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Fun Halloween ideas for costumes, parties, trick-or-treating, and last-minute shopping
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "A great Halloween isn't about spending the most money. It's about having the most fun!"
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Halloween is here, and the countdown to spooky fun is officially ON!
                </p>
                <p className="mb-5">
                  Get ready for creepy costumes, buckets of candy, glowing pumpkins, haunted houses, and parties filled with laughter. Whether you love dressing up as your favorite character or enjoy scaring your friends with the perfect jump scare, Halloween gives everyone a reason to have fun.
                </p>
                <p className="mb-5">
                  And the best part? You don't need an elaborate plan to enjoy it. Grab your friends, put on a costume, decorate your space, and let the Halloween magic begin!
                </p>
                <p className="mb-5">
                  So, what makes Halloween such a fun time of the year? Let's find out!
                </p>

                <h2 id="dress-up" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Dress Up as Anyone You Want!
                </h2>
                <p className="mb-5">
                  Ever wanted to be a vampire, a superhero, a movie villain, or a giant walking pumpkin? Halloween gives you the perfect excuse!
                </p>
                <p className="mb-5">
                  You can wear a spooky costume, recreate a famous movie character, dress like your favorite celebrity, or invent something completely silly. Want to coordinate outfits with your best friends? Go for a matching theme! Planning a family costume? Even better!
                </p>
                <p className="mb-5">
                  You can also create a last-minute look with clothes you already own. Add some face paint, grab a few accessories, and you're ready to go.
                </p>
                <p className="mb-5">
                  <strong>The golden rule of Halloween: The more creative, the better!</strong>
                </p>
                <p className="mb-5">
                  Still searching for a last-minute costume or spooky accessories? Check out the <Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline">Spirit Halloween coupon page on CouponsBit</Link> to explore available offers before shopping.
                </p>

                <h2 id="trick-or-treating" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Trick-or-Treating Is Back!
                </h2>
                <p className="mb-5">
                  Who says collecting candy is just for kids? Halloween makes everyone excited about sweet treats!
                </p>
                <p className="mb-5">
                  Children dress up, knock on doors, shout "Trick or treat!" and fill their bags with chocolates, gummies, lollipops, and other goodies. Parents get to enjoy the excitement, too, while neighbors turn their homes into spooky stops along the way.
                </p>
                <p className="mb-2">Want to make the tradition even more fun? Try these ideas:</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><strong className="text-black">Create a candy trail:</strong> Decorate your walkway with pumpkins, lights, and friendly ghosts.</li>
                  <li><strong className="text-black">Host a candy swap:</strong> Let everyone trade their favorite treats after trick-or-treating.</li>
                  <li><strong className="text-black">Make a spooky snack table:</strong> Add Halloween-themed cookies, cupcakes, and chocolate treats.</li>
                  <li><strong className="text-black">Give out surprise treats:</strong> Prepare small treat bags for visiting trick-or-treaters.</li>
                </ul>
                <p className="mb-5">
                  Just remember to check treats before eating them and stick to safe, well-lit trick-or-treating routes.
                </p>

                <h2 id="haunted-house" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Turn Your Home Into a Haunted House!
                </h2>
                <p className="mb-5">
                  You don't need a giant mansion to create a creepy Halloween atmosphere. A few decorations can transform an ordinary room into a spooky wonderland!
                </p>
                <p className="mb-5">
                  Hang fake spiderwebs, place pumpkins near the entrance, add ghost decorations, and switch on some eerie lighting. Want to take things up a notch? Play spooky background sounds or hide a motion-activated decoration near the door to surprise your guests.
                </p>
                <p className="mb-5">
                  You can even turn decorating into a fun activity with friends or family. Give everyone a small area to decorate and vote for the spookiest setup.
                </p>
                <p className="mb-5">
                  If you enjoy DIY projects, reuse old sheets to make ghosts, paint empty jars to create lanterns, or turn cardboard boxes into haunted-house props.
                </p>
                <p className="mb-5">
                  Planning a bigger display? Browse <Link href="/stores/home-depot-discount-code" className="text-[#056bfa] hover:underline">Halloween decorations and seasonal offers at Home Depot</Link> and look for ways to save on eligible purchases.
                </p>
                <p className="mb-5">
                  <strong>Pro tip:</strong> You don't need to spend a fortune to impress your guests. A little creativity can make even the simplest decorations look amazing!
                </p>

                <h2 id="halloween-party" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Throw a Halloween Party Your Friends Won't Forget!
                </h2>
                <p className="mb-5">
                  Halloween and parties go together like pumpkins and jack-o'-lanterns!
                </p>
                <p className="mb-5">
                  Invite your friends over, create a spooky playlist, prepare themed snacks, and plan a few games. You don't need a fancy venue or an expensive setup. A living room, some decorations, and a group of enthusiastic friends can do the trick.
                </p>
                <p className="mb-2">Here are a few party ideas to try:</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><strong className="text-black">Costume Contest:</strong> Ask everyone to dress up and award prizes for the scariest, funniest, and most creative costumes.</li>
                  <li><strong className="text-black">Pumpkin Decorating:</strong> Set up a decorating station and let everyone design their own pumpkin. Use paint and stickers if you want a mess-free activity.</li>
                  <li><strong className="text-black">Halloween Movie Marathon:</strong> Pick your favorite spooky movies, grab some popcorn, and settle in for a fright-filled evening.</li>
                  <li><strong className="text-black">Mystery Game:</strong> Hide clues around the house and challenge your guests to solve a Halloween mystery.</li>
                  <li><strong className="text-black">Spooky Snack Challenge:</strong> Divide your guests into teams and ask them to create the funniest or creepiest Halloween treat.</li>
                </ul>
                <p className="mb-5">
                  You can even give your party a theme, such as a haunted carnival, a classic monster night, or a favorite horror-movie universe. Let your imagination run wild!
                </p>

                <h2 id="pumpkin-season" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Make the Most of Pumpkin Season!
                </h2>
                <p className="mb-5">
                  Pumpkins aren't just for carving. They can become the stars of your Halloween celebration!
                </p>
                <p className="mb-5">
                  Carve a funny face, create a classic jack-o'-lantern, or paint a pumpkin to match your costume. If carving feels too messy, decorate small pumpkins with stickers, markers, or colorful paint.
                </p>
                <p className="mb-5">
                  And don't forget the food! Pumpkin-shaped cookies, spooky cupcakes, themed popcorn, and Halloween candy can make your party table look fantastic.
                </p>
                <p className="mb-5">
                  Want a simple activity for everyone? Hold a pumpkin-decorating contest and let guests vote for their favorite design.
                </p>
                <p className="mb-5">
                  The best part is that everyone gets to participate, regardless of age or artistic talent. Sometimes, the funniest pumpkin wins!
                </p>

                <h2 id="furry-friends" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  6. Don't Forget Your Furry Friends!
                </h2>
                <p className="mb-5">
                  Halloween can be fun for pets, too!
                </p>
                <p className="mb-5">
                  Dress your dog or cat in a comfortable costume if they enjoy wearing one. Think adorable pumpkins, tiny superheroes, or cute little ghosts. You can also take festive pictures with your pet beside your decorations.
                </p>
                <p className="mb-5">
                  However, keep your furry friends comfortable. Choose outfits that allow easy movement, avoid small parts they could swallow, and never force a pet to wear a costume if it causes stress.
                </p>
                <p className="mb-5">
                  Keep candy, chocolate, and other potentially harmful treats out of their reach. Give them pet-safe treats instead!
                </p>
                <p className="mb-5">
                  After all, Halloween memories feel even sweeter when the whole family stays safe.
                </p>

                <h2 id="halloween-night" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  7. Plan a Halloween Night Full of Surprises!
                </h2>
                <p className="mb-5">
                  You don't have to spend the entire evening at home. Check out local Halloween events, haunted attractions, costume parades, or themed activities in your area.
                </p>
                <p className="mb-5">
                  Love a good scare? Visit a haunted attraction with friends. Prefer something less spooky? Look for family-friendly festivals, pumpkin patches, or community events.
                </p>
                <p className="mb-5">
                  You can also plan a Halloween photo walk around your neighborhood to admire the decorations. Some people turn their front yards into incredible displays, complete with skeletons, glowing pumpkins, giant spiders, and spooky sound effects.
                </p>
                <p className="mb-5">
                  Before heading out, check event timings, ticket availability, age recommendations, and local safety guidelines.
                </p>
                <p className="mb-5">
                  Whatever you choose, make time to enjoy the atmosphere. Halloween only comes once a year, so make those memories count!
                </p>

                <h2 id="last-minute-shopping" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  8. Last-Minute Halloween Shopping? There's Still Time to Get Creative!
                </h2>
                <p className="mb-5">
                  The countdown is on, but don't panic if you haven't finished preparing!
                </p>
                <p className="mb-5">
                  You can still pull together a fun celebration with a few smart choices. Start by listing what you actually need. Maybe it's a costume accessory, a spooky decoration, party snacks, or a few finishing touches for your Halloween look.
                </p>
                <p className="mb-5">
                  Before placing an order, compare prices and check delivery dates. Since Halloween is close, confirm that any online purchase can arrive in time. You can also explore local stores for items you need immediately.
                </p>
                <p className="mb-5">
                  If you're shopping online, make one quick stop at <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> before checkout.
                </p>
                <p className="mb-2">Here are a few places to start:</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline font-semibold">Spirit Halloween coupon codes</Link>: Explore costumes, decorations, accessories, and other Halloween essentials.</li>
                  <li><Link href="/stores/home-depot-discount-code" className="text-[#056bfa] hover:underline font-semibold">Home Depot discount codes and deals</Link>: Check available offers on selected home and seasonal decoration products.</li>
                  <li><Link href="/blog/upcoming-sales-2026" className="text-[#056bfa] hover:underline font-semibold">CouponsBit's 2026 shopping guide</Link>: Discover seasonal shopping tips and learn how to look for savings during major retail events.</li>
                </ul>
                <p className="mb-5">
                  Offers, product availability, and delivery times can change, so check the details before you buy.
                </p>
                <p className="mb-5">
                  And remember, <strong>a great Halloween isn't about spending the most money. It's about having the most fun!</strong>
                </p>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Let the Halloween Fun Begin!
                </h2>
                <p className="mb-5">
                  Halloween brings people together through costumes, candy, creative decorations, silly games, and unforgettable memories. You can spend the evening exploring a haunted attraction, throwing a costume party, watching spooky movies, or simply handing out candy to excited trick-or-treaters.
                </p>
                <p className="mb-5">
                  The possibilities are endless, and that's what makes Halloween so special!
                </p>
                <p className="mb-5">
                  Haven't finished your Halloween shopping yet? Don't worry. Explore <Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline">Spirit Halloween deals on CouponsBit</Link>, check out available offers, and look for the essentials you still need. You can also browse <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> for coupon codes, promo codes, and deals from other popular brands.
                </p>
                <p className="mb-5">
                  So, grab your costume, prepare your treats, switch on those spooky lights, and get ready to make this Halloween a memorable one!
                </p>
                <div className="my-8 rounded-2xl overflow-hidden bg-gradient-to-r from-[#1a0a00] via-[#3d1a00] to-[#1a0a00] border border-orange-500/30 shadow-lg shadow-orange-900/20">
                  <div className="flex items-center justify-center gap-3 px-6 py-5">
                    <span className="text-3xl select-none">🎃</span>
                    <p className="text-center font-extrabold text-lg md:text-xl leading-snug">
                      <span className="text-orange-400">Happy Halloween!</span>{" "}
                      <span className="text-white">Stay spooky, stay safe, and have a</span>{" "}
                      <span className="text-orange-300">frightfully fantastic time!</span>
                    </p>
                    <span className="text-3xl select-none">👻</span>
                  </div>
                </div>

              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "Halloween", "Halloween Costumes", "Halloween Party", "Trick or Treat", "Halloween Decorations", "CouponsBit"
                ].map((tag, i) => (
                  <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Share this article:</span>
                <button className="bg-[#25D366] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <MessageCircle className="w-4 h-4 fill-white" /> Share on WhatsApp
                </button>
                <button className="bg-black text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Twitter className="w-3.5 h-3.5 fill-white" /> Share on Twitter
                </button>
                <button className="bg-[#1877F2] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Facebook className="w-4 h-4 fill-white" /> Share on Facebook
                </button>
                <button onClick={() => copyToClipboard(window.location.href)} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                  <LinkIcon className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>

            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* Box 1: TOC */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>📋</span> Table of Contents
                </h4>
                <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
                  {sections.map((section, i) => (
                    <a
                      key={i}
                      href={`#${section.id}`}
                      className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}
                    >
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Box 2: Popular Halloween Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🎃</span> Popular Halloween Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
                    { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
                    { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
                    { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Sephora", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp", dealText: "Up To 50% OFF", href: "/stores/sephora-promo-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      <div className="w-10 h-10 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={40} height={40} loading="lazy" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-bold text-[15px] truncate group-hover:text-[#056bfa] transition-colors">{store.name}</p>
                        <p className="text-[#056bfa] text-[13px] font-semibold truncate">{store.dealText}</p>
                      </div>
                      <span className="text-[#056bfa] text-[12px] font-bold uppercase tracking-wide shrink-0">View →</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Box 3: Shop By Category */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🗂️</span> Shop By Category
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: ShoppingBag, name: "Fashion",       count: "900+", color: "text-blue-500",   href: "/categories/fashion" },
                    { icon: Home,        name: "Home",          count: "260+", color: "text-teal-500",   href: "/categories/home" },
                    { icon: Utensils,    name: "Food & Dining", count: "180+", color: "text-orange-500", href: "/categories/food" },
                    { icon: Sparkles,    name: "Entertainment", count: "150+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Tag,         name: "Gaming",        count: "90+",  color: "text-green-500",  href: "/categories/gaming" }
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
            </aside>
          </div>
        </div>

        {/* Continue Reading Section */}
        <section className="bg-white py-20 border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
                Continue <span className="text-[#056bfa]">Reading</span>
              </h2>
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
            </div>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
              Discover more shopping guides, coupon tips, and seasonal savings from CouponsBit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp",
                  date: "October 9, 2026",
                  readTime: "5 MIN READ",
                  title: "Halloween Shopping Guide 2026: Spooky Deals You Can't Miss",
                  desc: "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, and party supplies.",
                  href: "/blog/halloween-shopping-guide-2026",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp",
                  date: "October 23, 2026",
                  readTime: "6 MIN READ",
                  title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
                  desc: "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
                  href: "/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
                  date: "July 9, 2026",
                  readTime: "10 MIN READ",
                  title: "Holiday Shopping Calendar 2026: The Best Times to Shop & Save Money",
                  desc: "Discover the complete Holiday Shopping Calendar 2026 for the USA — the best time to buy electronics, fashion, furniture and more while saving with coupon codes.",
                  href: "/blog/holiday-shopping-calendar-2026",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group flex flex-col"
                >
                  <div className="w-full h-[200px] shrink-0 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-[#056bfa] font-extrabold text-lg leading-tight mb-2.5 group-hover:text-[#0451c4] transition-all line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.desc}
                    </p>
                    <span className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300">
                      READ MORE <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
