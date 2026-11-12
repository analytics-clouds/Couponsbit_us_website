import { Suspense } from "react";
import type { Metadata } from "next";
import StoreCouponsContent from "./_components/StoreCouponsContent";
import { EXPEDIA_COUPONS } from "./_components/offers";

const TITLE = "Expedia USA Discount Code: 40% Off + $464 Off | Nov 2026";
const DESCRIPTION = "Save up to 40% with the latest Expedia USA discount code. Get up to $464 off hotels, plus verified deals on flights, car rentals, and vacation packages this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "expedia discount code",
    "expedia promo code",
    "expedia coupon code",
    "expedia voucher",
    "expedia deals",
    "cheap hotels expedia",
    "expedia vacation packages",
    "expedia car rentals",
    "one key rewards discount",
    "expedia flights discount"
  ],
  alternates: {
    canonical: "https://www.couponsbit.us/stores/expedia-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/expedia-discount-code",
      "x-default": "https://www.couponsbit.us/stores/expedia-discount-code",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/expedia-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit USA",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg",
        width: 1200,
        height: 630,
        alt: "Expedia Promo Codes & Travel Deals November 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg"],
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

export default function ExpediaPage() {
  const storeOffers = EXPEDIA_COUPONS.map((coupon, idx) => ({
    "@type": "Offer",
    "@id": `https://www.couponsbit.us/stores/expedia-discount-code#offer-${coupon.id || idx + 1}`,
    name: coupon.title,
    description: coupon.description,
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Expedia",
      url: "https://www.expedia.com",
    },
    url: coupon.affiliateUrl || "https://www.dpbolvw.net/click-100938140-13852770?sid=1015",
    validThrough: "2026-12-31",
    availability: "https://schema.org/InStock",
    category: "Travel & Hotels",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/stores/expedia-discount-code#brand",
        name: "Expedia",
        url: "https://www.expedia.com",
        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.couponsbit.us/stores/expedia-discount-code#webpage",
        url: "https://www.couponsbit.us/stores/expedia-discount-code",
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
          "@id": "https://www.couponsbit.us/stores/expedia-discount-code#breadcrumb",
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
              name: "Expedia",
              item: "https://www.couponsbit.us/stores/expedia-discount-code",
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://www.couponsbit.us/stores/expedia-discount-code#itemlist",
          name: "Expedia Coupon Codes & Deals",
          description: "All verified Expedia promo codes, hotel discounts, and travel deals for November 2026.",
          numberOfItems: EXPEDIA_COUPONS.length,
          itemListElement: storeOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: offer,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.couponsbit.us/stores/expedia-discount-code#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Expedia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Expedia is a global online travel platform that allows travelers to book flights, hotels, vacation rentals, car rentals, cruises, activities, and vacation packages through one website.",
            },
          },
          {
            "@type": "Question",
            name: "What can I book on Expedia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book flights, hotels, vacation rentals, vacation packages, rental cars, cruises, airport transportation, and travel activities.",
            },
          },
          {
            "@type": "Question",
            name: "What is One Key™?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "One Key™ is Expedia's loyalty and rewards program that allows eligible members to earn and redeem rewards across participating travel brands.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I find Expedia coupon codes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can find the latest Expedia coupon codes, Expedia promo codes, and exclusive travel deals on Couponsbit.",
            },
          },
          {
            "@type": "Question",
            name: "Does Expedia offer vacation packages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Expedia allows travelers to bundle flights, hotels, rental cars, and other travel services into vacation packages that may provide additional savings.",
            },
          },
          {
            "@type": "Question",
            name: "Is Couponsbit free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promo offers, and discounts from trusted brands worldwide.",
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
