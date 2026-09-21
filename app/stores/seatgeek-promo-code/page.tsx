import type { Metadata } from "next";
import SeatgeekCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "SeatGeek Promo Code: Get $20 OFF First Order + Get 10% OFF | Sept 2026",
  },
  description:
    "Find the latest SeatGeek promo code and SeatGeek discount code at Maxiku Offers. Get $20 OFF your first $100+ order, save 10% on concert tickets, and enjoy 10% OFF eligible orders over $50.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/seatgeek-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "x-default": "https://www.couponsbit.us/stores/seatgeek-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
    title: "SeatGeek Promo Code: Get $20 OFF First Order + Get 10% OFF | Sept 2026",
    description:
      "Find the latest SeatGeek promo code and SeatGeek discount code at Maxiku Offers. Get $20 OFF your first $100+ order, save 10% on concert tickets, and enjoy 10% OFF eligible orders over $50.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp",
        width: 1200,
        height: 630,
        alt: "SeatGeek Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SeatGeek Promo Code: Get $20 OFF First Order + Get 10% OFF | Sept 2026",
    description:
      "Find the latest SeatGeek promo code and SeatGeek discount code at Maxiku Offers. Get $20 OFF your first $100+ order, save 10% on concert tickets, and enjoy 10% OFF eligible orders over $50.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp"],
    site: "@couponsbit",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const seatgeekSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
      name: "SeatGeek Promo Code: Get $20 OFF First Order + Get 10% OFF | Sept 2026",
      description:
        "Find the latest SeatGeek promo code and SeatGeek discount code at Maxiku Offers. Get $20 OFF your first $100+ order, save 10% on concert tickets, and enjoy 10% OFF eligible orders over $50.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#offerlist",
      name: "SeatGeek Promo Codes & Coupon Codes",
      description: "Latest SeatGeek promo codes and offers on event tickets.",
      url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
      numberOfItems: 15,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "SeatGeek Promo Code – $20 Off Your First $100+ Order", description: "Sign up for SeatGeek emails and get $20 off your first ticket order of $100 or more.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "SeatGeek Offers – Up to $20 Off Tickets", description: "Save up to $20 on eligible SeatGeek ticket purchases with this available offer.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "SeatGeek Deals – $10 Off First Purchase of $150+", description: "Get $10 off your first SeatGeek purchase of $150 or more when you meet the offer requirements.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "SeatGeek Discount – 10% Off Concert Tickets", description: "Save 10% on eligible concert tickets with this SeatGeek promotion.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "SeatGeek Offers – 10% Off Orders Over $50", description: "Get 10% off eligible orders over $50 when the promotion requirements are met.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "SeatGeek Deals – $20 Off Tickets", description: "Save $20 on eligible SeatGeek ticket purchases with this available discount.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 7, item: { "@type": "Offer", name: "SeatGeek Tickets – NBA Deals", description: "Browse NBA tickets on SeatGeek and compare available listings for upcoming games.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 8, item: { "@type": "Offer", name: "SeatGeek Tickets – Taylor Swift Events", description: "Shop Taylor Swift tickets on SeatGeek and compare available listings for upcoming events.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 9, item: { "@type": "Offer", name: "SeatGeek Deals – Save Up to $5 on Select Tickets", description: "Save up to $5 on tickets with select SeatGeek offers.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 10, item: { "@type": "Offer", name: "SeatGeek Ticket Deals – Find Lower-Priced Listings", description: "Compare multiple ticket listings on SeatGeek to find competitive prices for live events.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 11, item: { "@type": "Offer", name: "SeatGeek Offers – Track Ticket Price Drops", description: "Set up price alerts to receive notifications when ticket prices change.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 12, item: { "@type": "Offer", name: "SeatGeek Deals – Sports Tickets", description: "Browse sports tickets on SeatGeek for MLB, NFL, NBA, and other major sporting events.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 13, item: { "@type": "Offer", name: "SeatGeek Deals – Concert Tickets", description: "Find concert tickets on SeatGeek and compare listings from different sellers.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 14, item: { "@type": "Offer", name: "SeatGeek Offers – Live Event Tickets", description: "Shop live event tickets on SeatGeek for sports, concerts, theater, and more.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
        { "@type": "ListItem", position: 15, item: { "@type": "Offer", name: "SeatGeek Discount – Find the Best Ticket Value", description: "Compare available listings to find better-value tickets for your favorite events.", url: "https://www.couponsbit.us/stores/seatgeek-promo-code", seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" } } },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "SeatGeek Coupons", item: "https://www.couponsbit.us/stores/seatgeek-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does SeatGeek offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SeatGeek may offer promotional codes and other ticket-related promotions. Availability, eligibility, and terms can vary by offer."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a SeatGeek promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available SeatGeek promo codes, coupon codes, discount offers, vouchers, and ticket promotions before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a SeatGeek coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select your event and tickets, proceed to checkout, and enter the applicable coupon or promotional code in the designated field. Confirm that the offer has been applied before completing your purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my SeatGeek promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code may have expired, or your purchase may not meet the promotion's requirements. Some offers can also be limited to particular customers, events, ticket types, or purchase conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a SeatGeek discount code on any event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Promotional codes can have specific eligibility requirements. Check the terms of the individual offer before purchasing your tickets."
      }
    },
    {
      "@type": "Question",
      "name": "Does SeatGeek sell sports tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SeatGeek offers tickets for various sporting events, including professional and college sports, subject to availability."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy concert tickets through SeatGeek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fans can browse available concert and live-music events and compare ticket listings."
      }
    },
    {
      "@type": "Question",
      "name": "Does SeatGeek have comedy and theater tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Depending on location and availability, SeatGeek features tickets for comedy shows, theater, performing arts, and other live entertainment."
      }
    },
    {
      "@type": "Question",
      "name": "Are SeatGeek ticket fees included in the advertised price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ticket pricing and fees can vary depending on the event and purchase. Always review the complete checkout total before completing your transaction."
      }
    },
    {
      "@type": "Question",
      "name": "Does SeatGeek have Black Friday deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SeatGeek may feature promotions around major shopping periods, although availability can change. Check current offers around Black Friday and Cyber Monday."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for SeatGeek deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There isn't one guaranteed time when every ticket will be cheapest. However, checking around major shopping periods, seasonal events, concert seasons, and major sporting occasions can help you discover available promotions."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save money on SeatGeek tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking CouponsBit for a SeatGeek promo code, then compare ticket listings, seating sections, event dates, and applicable promotions. Always consider the complete purchase total when deciding which ticket provides the best value."
      }
    }
  ]
},
  ],
};

export default function SeatgeekStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seatgeekSchema) }} />
      <SeatgeekCouponsContent />
    </>
  );
}
