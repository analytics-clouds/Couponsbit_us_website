import { Suspense } from "react";
import type { Metadata } from "next";
import StoreCouponsContent from "./_components/StoreCouponsContent";
import { KINGUIN_COUPONS } from "./_components/offers";

const TITLE = "Kinguin Discount Code: Get up to 97% Off | Nov 2026";
const DESCRIPTION = "Save up to 97% with the latest Kinguin discount code. Shop verified deals on PC games, gift cards, software, and digital keys with instant delivery this Nov 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kinguin discount code",
    "kinguin promo code",
    "kinguin coupon code",
    "kinguin voucher",
    "kinguin deals",
    "pc game keys discount",
    "steam gift card deals",
    "software license coupons",
    "kings pass discount",
    "cheap pc games usa"
  ],
  alternates: {
    canonical: "https://www.couponsbit.us/stores/kinguin-discount-code",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.couponsbit.us/stores/kinguin-discount-code",
    siteName: "Couponsbit USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/kinguin-coupon-code_ugjj9s.jpg",
        width: 1200,
        height: 630,
        alt: "Kinguin Promo Codes & Gaming Deals November 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/kinguin-coupon-code_ugjj9s.jpg"],
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

export default function KinguinPage() {
  const storeOffers = KINGUIN_COUPONS.map((coupon, idx) => ({
    "@type": "Offer",
    "@id": `https://www.couponsbit.us/stores/kinguin-discount-code#offer-${coupon.id || idx + 1}`,
    name: coupon.title,
    description: coupon.description,
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Kinguin",
      url: "https://www.kinguin.net",
    },
    url: coupon.affiliateUrl || "https://kinguin.sjv.io/c/4303217/3827272/50048?subId1=1015",
    validThrough: "2026-12-31",
    availability: "https://schema.org/InStock",
    category: "Gaming & Software",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/stores/kinguin-discount-code#brand",
        name: "Kinguin",
        url: "https://www.kinguin.net",
        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/kinguin-coupon-code_ugjj9s.jpg",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.couponsbit.us/stores/kinguin-discount-code#webpage",
        url: "https://www.couponsbit.us/stores/kinguin-discount-code",
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
          "@id": "https://www.couponsbit.us/stores/kinguin-discount-code#breadcrumb",
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
              name: "Kinguin",
              item: "https://www.couponsbit.us/stores/kinguin-discount-code",
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://www.couponsbit.us/stores/kinguin-discount-code#itemlist",
          name: "Kinguin Coupon Codes & Deals",
          description: "All verified Kinguin promo codes, game key discounts, and digital deals for November 2026.",
          numberOfItems: KINGUIN_COUPONS.length,
          itemListElement: storeOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: offer,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.couponsbit.us/stores/kinguin-discount-code#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Kinguin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kinguin is a global digital marketplace where customers can purchase game keys, software licenses, gift cards, gaming subscriptions, and other digital products from independent sellers.",
            },
          },
          {
            "@type": "Question",
            name: "What products are available on Kinguin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kinguin offers PC game keys, console games, software licenses, operating systems, office software, antivirus programs, gaming gift cards, downloadable content (DLC), and digital subscriptions.",
            },
          },
          {
            "@type": "Question",
            name: "How does Kinguin work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kinguin connects buyers with independent sellers offering digital products. Customers can compare available listings, complete their purchase, and receive digital activation codes based on the seller's delivery process.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I find Kinguin coupon codes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can find the latest Kinguin coupon codes, promo codes, and exclusive gaming deals on Couponsbit.",
            },
          },
          {
            "@type": "Question",
            name: "Does Kinguin sell software licenses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. In addition to games, Kinguin offers digital licenses for operating systems, office software, security applications, and other productivity tools.",
            },
          },
          {
            "@type": "Question",
            name: "Is Couponsbit free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promotional offers, and discounts from trusted brands worldwide.",
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
