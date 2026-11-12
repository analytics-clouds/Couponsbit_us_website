import { Suspense } from "react";
import type { Metadata } from "next";
import StoreCouponsContent from "./_components/StoreCouponsContent";
import { CHEAPFLIGHTS_COUPONS } from "./_components/offers";

const TITLE = "CheapFlights Discount Code: Up to 60% Off Flights | Nov 2026";
const DESCRIPTION = "Save up to 60% with the latest CheapFlights discount code. Get up to 45% off Business Class flights and verified travel deals on flights, hotels, and more this Nov 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cheapflights discount code",
    "cheapflights promo code",
    "cheapflights coupon code",
    "cheapflights deals",
    "cheap airline tickets usa",
    "domestic flights under 99",
    "cheapflights student discount",
    "cheapflights travel credits",
    "cheapflights hotel coupons",
    "cheap car rentals usa"
  ],
  alternates: {
    canonical: "https://www.couponsbit.us/stores/cheapflights-discount-code",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.couponsbit.us/stores/cheapflights-discount-code",
    siteName: "Couponsbit USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Cheepflights-coupon-code_cbqikz.jpg",
        width: 1200,
        height: 630,
        alt: "CheapFlights Promo Codes & Travel Deals November 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Cheepflights-coupon-code_cbqikz.jpg"],
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

export default function CheapflightsPage() {
  const storeOffers = CHEAPFLIGHTS_COUPONS.map((coupon, idx) => ({
    "@type": "Offer",
    "@id": `https://www.couponsbit.us/stores/cheapflights-discount-code#offer-${coupon.id || idx + 1}`,
    name: coupon.title,
    description: coupon.description,
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Cheapflights",
      url: "https://www.cheapflights.com",
    },
    url: coupon.affiliateUrl || "https://www.anrdoezrs.net/click-100938140-15524726?sid=1015",
    validThrough: "2026-12-31",
    availability: "https://schema.org/InStock",
    category: "Travel & Flights",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/stores/cheapflights-discount-code#brand",
        name: "Cheapflights",
        url: "https://www.cheapflights.com",
        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Cheepflights-coupon-code_cbqikz.jpg",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.couponsbit.us/stores/cheapflights-discount-code#webpage",
        url: "https://www.couponsbit.us/stores/cheapflights-discount-code",
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
          "@id": "https://www.couponsbit.us/stores/cheapflights-discount-code#breadcrumb",
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
              name: "Cheapflights",
              item: "https://www.couponsbit.us/stores/cheapflights-discount-code",
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://www.couponsbit.us/stores/cheapflights-discount-code#itemlist",
          name: "Cheapflights Coupon Codes & Deals",
          description: "All verified Cheapflights promo codes, flight discounts, and travel deals for November 2026.",
          numberOfItems: CHEAPFLIGHTS_COUPONS.length,
          itemListElement: storeOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: offer,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.couponsbit.us/stores/cheapflights-discount-code#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is CheapFlights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "CheapFlights is an online travel agency that allows customers to book flights, hotels, rental cars, and vacation packages through a single platform.",
            },
          },
          {
            "@type": "Question",
            name: "What services does CheapFlights offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The platform offers flight bookings, hotel reservations, car rentals, and vacation packages for travelers worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book international flights through CheapFlights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. CheapFlights provides booking options for both domestic and international destinations.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I find CheapFlights coupon codes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can find the latest CheapFlights coupon codes, promo codes, and travel deals on Couponsbit.",
            },
          },
          {
            "@type": "Question",
            name: "Does CheapFlights provide customer support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The company offers customer support to assist travelers with bookings and travel-related inquiries.",
            },
          },
          {
            "@type": "Question",
            name: "Is Couponsbit free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Couponsbit is completely free and helps shoppers and travelers discover verified coupon codes, promo offers, and discounts from trusted brands.",
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
