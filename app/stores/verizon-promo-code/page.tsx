import type { Metadata } from "next";
import { Suspense } from "react";
import VerizonCouponsContent from "./_components/StoreCouponsContent";
import { VERIZON_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Verizon Promo Code: Get 85% Off Accessories | Nov 2026",
  },
  description:
    "Save with Verizon Promo Code offers featuring 85% off phone accessories and $50/month off the Ultimate iPhone Plan. Get verified Verizon Voucher Code deals Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/verizon-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/verizon-promo-code",
      "x-default": "https://www.couponsbit.us/stores/verizon-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/verizon-promo-code",
    title: "Verizon Promo Code: Get 85% Off Accessories | Nov 2026",
    description:
      "Save with Verizon Promo Code offers featuring 85% off phone accessories and $50/month off the Ultimate iPhone Plan. Get verified Verizon Voucher Code deals Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789535820/verizon_promo_code_zdxzxp.webp",
        width: 1200,
        height: 630,
        alt: "Verizon Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Verizon Promo Code: Get 85% Off Accessories | Nov 2026",
    description:
      "Save with Verizon Promo Code offers featuring 85% off phone accessories and $50/month off the Ultimate iPhone Plan. Get verified Verizon Voucher Code deals Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789535820/verizon_promo_code_zdxzxp.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = VERIZON_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Verizon ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/verizon-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Verizon", url: "https://www.verizon.com" },
}));

const verizonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/verizon-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/verizon-promo-code",
      name: "Verizon Promo Code: Get 85% Off Accessories | Nov 2026",
      description:
        "Save with Verizon Promo Code offers featuring 85% off phone accessories and $50/month off the Ultimate iPhone Plan. Get verified Verizon Voucher Code deals Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/verizon-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/verizon-promo-code#brand",
      name: "Verizon",
      url: "https://www.verizon.com",
      sameAs: ["https://www.facebook.com/verizon", "https://twitter.com/verizon"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/verizon-promo-code#offerlist",
      name: "Verizon Promo Codes & Coupon Codes",
      description: "Latest Verizon promo codes and offers on plans and devices.",
      url: "https://www.couponsbit.us/stores/verizon-promo-code",
      numberOfItems: VERIZON_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
      })),
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
      "@id": "https://www.couponsbit.us/stores/verizon-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Verizon Coupons", item: "https://www.couponsbit.us/stores/verizon-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/verizon-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Verizon offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon offers various promotions, discounts, device deals, service incentives, and other savings opportunities. Not every promotion requires a traditional promo code."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Verizon promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Verizon promo codes, coupon codes, discount offers, device promotions, and other deals before shopping."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Verizon coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your promotion includes a coupon or promo code, follow the offer instructions and enter the code in the appropriate field during the purchase or sign-up process. Always confirm that the offer has been applied before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Verizon promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The promotion may have expired or your purchase may not meet its requirements. Verizon offers can require a specific plan, device, new line, trade-in, activation, location, or other qualifying condition."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer discounts on phones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon regularly promotes savings on selected smartphones and may offer device discounts, trade-in incentives, bill credits, or other promotional offers depending on the current campaign."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer iPhone deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon frequently features promotions on iPhones and other smartphones. Current eligibility and requirements vary by device and plan."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer Samsung Galaxy deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Samsung Galaxy devices can be included in Verizon's promotional offers. Check the current terms for the specific model you're considering."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer Google Pixel deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon may feature promotional offers on selected Google Pixel devices, depending on the current campaign."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer home internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon offers home internet services including Fios and 5G Home Internet in eligible areas, along with other home internet options. Availability varies by location."
          }
        },
        {
          "@type": "Question",
          "name": "Can I save by combining Verizon mobile and home internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligible customers may receive Mobile + Home benefits when they have qualifying Verizon mobile and home internet services. Current benefits can include a monthly home internet discount and, on certain plans, credits toward eligible perks."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verizon typically participates in major holiday shopping periods with device and service promotions. Check current offers around Black Friday to see which phones, plans, and services qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon have Cyber Monday offers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verizon may offer online promotions around Cyber Monday. Offers can change, so check the current terms before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does Verizon offer prepaid deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Verizon Prepaid offers can include device discounts, service credits, free-device promotions, and savings for multiple lines or bundled devices."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Verizon deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Black Friday, Cyber Monday, back-to-school season, major holidays, and smartphone launch periods can be useful times to compare available offers."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money at Verizon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Verizon promo code, then compare device promotions, trade-in offers, plan incentives, bundle savings, and home internet deals. Review the full terms and total cost before committing."
          }
        }
      ]
    },
  ],
};

export default function VerizonStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(verizonSchema) }} />
      <Suspense fallback={null}>
        <VerizonCouponsContent />
      </Suspense>
    </>
  );
}
