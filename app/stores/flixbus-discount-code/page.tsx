import { Suspense } from "react";
import type { Metadata } from "next";
import StoreCouponsContent from "./_components/StoreCouponsContent";
import { FLIXBUS_COUPONS } from "./_components/offers";

const TITLE = "FlixBus Discount Code: 50% Off + 20% Off with code | Nov 2026";
const DESCRIPTION = "Save up to 50% with the latest FlixBus discount code. Use code FLXAUGND for an extra 20% off app bookings and enjoy verified bus deals this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "flixbus discount code",
    "flixbus promo code",
    "flixbus coupon code",
    "flixbus voucher",
    "flixbus deals",
    "cheap coach travel",
    "sydney to thredbo bus",
    "flixbus australia discount",
    "long distance bus deals"
  ],
  alternates: {
    canonical: "https://www.couponsbit.us/stores/flixbus-discount-code",
    languages: {
      "en-AU": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "en-US": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "de-DE": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "fr-FR": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "pt-BR": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "tr-TR": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "it-IT": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "pl-PL": "https://www.couponsbit.us/stores/flixbus-discount-code",
      "x-default": "https://www.couponsbit.us/stores/flixbus-discount-code",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/flixbus-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit USA",
    locale: "en_AU",
    alternateLocale: ["en_US", "en_GB", "en_CA", "de_DE", "fr_FR", "pt_BR", "tr_TR", "it_IT", "pl_PL"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp",
        width: 1200,
        height: 630,
        alt: "FlixBus Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    'geo.region': 'US',
    'geo.country': 'US',
    language: 'en-US',
  },
};

export default function FlixBusPage() {
  const storeOffers = FLIXBUS_COUPONS.map((coupon, idx) => ({
    "@type": "Offer",
    "@id": `https://www.couponsbit.us/stores/flixbus-discount-code#offer-${coupon.id || idx + 1}`,
    name: coupon.title,
    description: coupon.description,
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "FlixBus",
      url: "https://www.flixbus.com.au/",
    },
    url: coupon.affiliateUrl || "https://www.flixbus.com.au/",
    validThrough: "2026-12-31",
    availability: "https://schema.org/InStock",
    category: "Travel & Bus Tickets",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/stores/flixbus-discount-code#brand",
        name: "FlixBus",
        url: "https://www.flixbus.com.au/",
        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.couponsbit.us/stores/flixbus-discount-code#webpage",
        url: "https://www.couponsbit.us/stores/flixbus-discount-code",
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.couponsbit.us/#website",
          url: "https://www.couponsbit.us",
          name: "Couponsbit USA",
          description: "Verified coupon codes, promo codes & discounts for top USA brands.",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          "@id": "https://www.couponsbit.us/stores/flixbus-discount-code#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.couponsbit.us",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Stores",
              item: "https://www.couponsbit.us/stores",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "FlixBus",
              item: "https://www.couponsbit.us/stores/flixbus-discount-code",
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://www.couponsbit.us/stores/flixbus-discount-code#itemlist",
          name: "FlixBus Coupon Codes & Deals",
          description: "All verified FlixBus promo codes, bus ticket discounts, and travel deals for November 2026.",
          numberOfItems: FLIXBUS_COUPONS.length,
          itemListElement: storeOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: offer,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.couponsbit.us/stores/flixbus-discount-code#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I find a FlixBus discount code?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can browse the latest FlixBus promotions on CouponsBit before making your booking.",
            },
          },
          {
            "@type": "Question",
            name: "How do I apply a FlixBus voucher code?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Simply enter the promotional code in the coupon or promo code field during checkout before completing your payment.",
            },
          },
          {
            "@type": "Question",
            name: "Does every booking qualify for a discount?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Eligibility depends on the terms of each promotion. Some offers may apply only to selected routes, travel dates, or minimum booking values.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use a FlixBus coupon code on the mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many promotions work across both the website and mobile app, although some offers may have specific conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Are there discounts for first-time users?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Occasionally, promotional campaigns may target new customers. Check CouponsBit regularly for the latest offers.",
            },
          },
          {
            "@type": "Question",
            name: "Can I change my booking later?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Booking modifications depend on the fare conditions selected at the time of purchase.",
            },
          },
          {
            "@type": "Question",
            name: "Does FlixBus offer digital tickets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. After completing your booking, you'll receive a digital ticket that can be presented during boarding.",
            },
          },
          {
            "@type": "Question",
            name: "Is Wi-Fi available during the journey?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many FlixBus services include complimentary onboard Wi-Fi, though availability may vary depending on the coach and route.",
            },
          },
          {
            "@type": "Question",
            name: "How much luggage can I bring?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luggage allowances vary by route and booking conditions. It's always a good idea to review the baggage policy before travelling.",
            },
          },
          {
            "@type": "Question",
            name: "Can families travel with FlixBus?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Families frequently choose FlixBus because it provides a convenient and affordable way to travel together.",
            },
          },
          {
            "@type": "Question",
            name: "Does CouponsBit charge for coupon codes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. All available deals and coupon codes on CouponsBit can be accessed free of charge.",
            },
          },
          {
            "@type": "Question",
            name: "How often are new FlixBus offers added?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "CouponsBit regularly updates its listings to include the latest available travel promotions whenever they become available.",
            },
          },
          {
            "@type": "Question",
            name: "Why should I check CouponsBit before booking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Because even a small saving with a valid FlixBus discount code can help reduce your overall travel expenses, making every trip more affordable.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <StoreCouponsContent />
      </Suspense>
    </>
  );
}
