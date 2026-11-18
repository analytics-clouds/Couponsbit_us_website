import type { Metadata } from "next";
import { Suspense } from "react";
import { SNAPFISH_COUPONS } from "./_components/offers";
import SnapfishCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Snapfish Promo Code: Up to 77% OFF Photo Deals | Nov 2026",
  },
  description:
    "Snapfish Promo Code offers 77% off matte photo tiles and Buy 1 Get 2 Free Calendars. Save more with verified Snapfish discount Code deals in Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/snapfish-coupon-codes",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/snapfish-coupon-codes",
      "en-GB": "https://www.couponsbit.us/stores/snapfish-coupon-codes",
      "en-SG": "https://www.couponsbit.us/stores/snapfish-coupon-codes",
      "x-default": "https://www.couponsbit.us/stores/snapfish-coupon-codes",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/snapfish-coupon-codes",
    title: "Snapfish Promo Code: Up to 77% OFF Photo Deals | Nov 2026",
    description:
      "Snapfish Promo Code offers 77% off matte photo tiles and Buy 1 Get 2 Free Calendars. Save more with verified Snapfish discount Code deals in Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp",
        width: 1200,
        height: 630,
        alt: "Snapfish Coupon Codes & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Snapfish Promo Code: Up to 77% OFF Photo Deals | Nov 2026",
    description:
      "Snapfish Promo Code offers 77% off matte photo tiles and Buy 1 Get 2 Free Calendars. Save more with verified Snapfish discount Code deals in Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp"],
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
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const snapfishOffers = SNAPFISH_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Snapfish ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/snapfish-coupon-codes#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Snapfish", url: "https://www.snapfish.com" },
}));

const snapfishSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#webpage",
      url: "https://www.couponsbit.us/stores/snapfish-coupon-codes",
      name: "Snapfish Promo Code: Up to 77% OFF Photo Deals | Nov 2026",
      description:
        "Snapfish Promo Code offers 77% off matte photo tiles and Buy 1 Get 2 Free Calendars. Save more with verified Snapfish discount Code deals in Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#brand",
      name: "Snapfish",
      url: "https://www.snapfish.com",
      sameAs: ["https://www.facebook.com/Snapfish", "https://twitter.com/Snapfish"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#offerlist",
      "name": "Snapfish Coupon Codes & Promo Codes",
      "description": "Latest Snapfish coupon codes, promo codes, and photo printing deals.",
      "url": "https://www.couponsbit.us/stores/snapfish-coupon-codes",
      "numberOfItems": SNAPFISH_COUPONS.length,
      itemListElement: snapfishOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
      }))
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Snapfish Coupons", item: "https://www.couponsbit.us/stores/snapfish-coupon-codes" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/snapfish-coupon-codes#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a Snapfish coupon code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to browse available Snapfish coupon codes and promo codes. You can also subscribe to Snapfish emails to receive exclusive offers directly.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get 50 free photo prints from Snapfish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Snapfish users can claim 50 free photo prints by creating an account. You pay only applicable shipping charges. Check Snapfish.com for current new user offer details and conditions.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a Snapfish promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Add your photo products to the cart on Snapfish.com, proceed to checkout, and enter your promo code in the discount field. The discount applies if the code is valid and the order meets any minimum requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Does Snapfish offer free shipping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Snapfish offers free standard shipping on orders that meet a qualifying spend threshold. Check Snapfish.com for the current minimum order value and delivery timelines.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Snapfish offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Snapfish offers photo prints, photo books, canvas prints, wall art, phone cases, mugs, calendars, greeting cards, and other personalised photo gifts.",
          },
        },
      ],
    },
  ],
};

export default function SnapfishStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snapfishSchema) }}
      />
      <Suspense fallback={null}><SnapfishCouponsContent /></Suspense>
    </>
  );
}
