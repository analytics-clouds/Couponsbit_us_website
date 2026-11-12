import { Suspense } from "react";
import type { Metadata } from "next";
import StoreCouponsContent from "./_components/StoreCouponsContent";
import { QATAR_HOLIDAYS_COUPONS } from "./_components/offers";

const TITLE = "Qatar Holidays Discount Code: 40% Off + Doha from $76 | Nov 2026";
const DESCRIPTION = "Save up to 40% with the latest Qatar Holidays discount code. Book Doha stopover packages from just $76 and enjoy verified holiday deals this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "qatar holidays discount code",
    "qatar holidays promo code",
    "qatar holidays coupon code",
    "qatar airways holidays voucher",
    "doha holiday packages",
    "doha stopover deals",
    "maldives holiday packages",
    "qatar airways avios deals",
    "dubai city breaks",
    "qatar grand prix packages"
  ],
  alternates: {
    canonical: "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
      "x-default": "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit USA",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg",
        width: 1200,
        height: 630,
        alt: "Qatar Holidays Promo Codes & Vacation Deals November 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg"],
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

export default function QatarHolidaysPage() {
  const storeOffers = QATAR_HOLIDAYS_COUPONS.map((coupon, idx) => ({
    "@type": "Offer",
    "@id": `https://www.couponsbit.us/stores/qatar-holidays-discount-code#offer-${coupon.id || idx + 1}`,
    name: coupon.title,
    description: coupon.description,
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Qatar Holidays",
      url: "https://www.qatarholidays.com",
    },
    url: coupon.affiliateUrl || "https://www.tkqlhce.com/click-100938140-15736270?sid=1015",
    validThrough: "2026-12-31",
    availability: "https://schema.org/InStock",
    category: "Travel & Vacation Packages",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/stores/qatar-holidays-discount-code#brand",
        name: "Qatar Holidays",
        url: "https://www.qatarholidays.com",
        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.couponsbit.us/stores/qatar-holidays-discount-code#webpage",
        url: "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
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
          "@id": "https://www.couponsbit.us/stores/qatar-holidays-discount-code#breadcrumb",
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
              name: "Qatar Holidays",
              item: "https://www.couponsbit.us/stores/qatar-holidays-discount-code",
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://www.couponsbit.us/stores/qatar-holidays-discount-code#itemlist",
          name: "Qatar Holidays Coupon Codes & Deals",
          description: "All verified Qatar Holidays promo codes, vacation package discounts, and travel deals for November 2026.",
          numberOfItems: QATAR_HOLIDAYS_COUPONS.length,
          itemListElement: storeOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: offer,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.couponsbit.us/stores/qatar-holidays-discount-code#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Qatar Airways Holidays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Qatar Airways Holidays is the official vacation package platform of Qatar Airways, offering travelers bundled bookings that can include flights, hotels, airport transfers, and selected travel experiences.",
            },
          },
          {
            "@type": "Question",
            name: "What can I book through Qatar Airways Holidays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book vacation packages, flights, hotels, airport transfers, and selected tours or activities for destinations around the world.",
            },
          },
          {
            "@type": "Question",
            name: "Does Qatar Airways Holidays offer luxury vacations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The platform features a variety of premium hotels, luxury resorts, and curated vacation packages for travelers seeking upscale experiences.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I find Qatar Airways Holidays promo codes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can find the latest Qatar Airways Holidays promo codes, coupon codes, and exclusive vacation deals on Couponsbit.",
            },
          },
          {
            "@type": "Question",
            name: "Can I earn Avios when booking through Qatar Airways Holidays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Eligible travelers may earn or redeem Avios through the Qatar Airways Privilege Club on qualifying bookings, subject to the program's current terms and conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Is Couponsbit free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promo offers, and discounts from trusted global brands.",
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
