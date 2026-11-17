import type { Metadata } from "next";
import { Suspense } from "react";
import ZenniCouponsContent from "./_components/StoreCouponsContent";
import { ZENNI_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Zenni Optical Promo Code: Up to 75% Off Lenses | Nov 2026",
  },
  description:
    "Save with Zenni Optical Promo Code deals featuring 75% off Blokz lenses and eyeglasses under $30. Get a verified Zenni Optical Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/zenni-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/zenni-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/zenni-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/zenni-discount-code",
      "x-default": "https://www.couponsbit.us/stores/zenni-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/zenni-discount-code",
    title: "Zenni Optical Promo Code: Up to 75% Off Lenses | Nov 2026",
    description:
      "Save with Zenni Optical Promo Code deals featuring 75% off Blokz lenses and eyeglasses under $30. Get a verified Zenni Optical Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/zenni-logo_ktqkou.webp",
        width: 1200,
        height: 630,
        alt: "Zenni Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zenni Optical Promo Code: Up to 75% Off Lenses | Nov 2026",
    description:
      "Save with Zenni Optical Promo Code deals featuring 75% off Blokz lenses and eyeglasses under $30. Get a verified Zenni Optical Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788951742/zenni-logo_ktqkou.webp"],
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

const storeOffers = ZENNI_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Zenni Optical ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/zenni-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Zenni Optical", url: "https://www.zennioptical.com" },
}));

const zenniSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/zenni-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/zenni-discount-code",
      name: "Zenni Optical Promo Code: Up to 75% Off Lenses | Nov 2026",
      description:
        "Save with Zenni Optical Promo Code deals featuring 75% off Blokz lenses and eyeglasses under $30. Get a verified Zenni Optical Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/zenni-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/zenni-discount-code#brand",
      name: "Zenni Optical",
      url: "https://www.zennioptical.com",
      sameAs: ["https://www.facebook.com/zennioptical", "https://twitter.com/zennioptical"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/zenni-discount-code#offerlist",
      name: "Zenni Discount Codes & Promo Codes",
      description: "Latest Zenni discount codes and offers on eyewear.",
      url: "https://www.couponsbit.us/stores/zenni-discount-code",
      numberOfItems: ZENNI_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/zenni-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Zenni Coupons", item: "https://www.couponsbit.us/stores/zenni-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/zenni-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Zenni offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zenni may offer promotional codes, discounts, seasonal campaigns, and other savings opportunities. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Zenni promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Zenni promo codes, coupon codes, discount offers, vouchers, and eyewear promotions before shopping."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Zenni coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose your eyewear, add it to your cart, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the discount has been applied before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Zenni promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired, or your order may not meet the promotion's requirements. Some offers can be restricted to particular products, lens options, customers, or purchase amounts."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Zenni discount code on prescription glasses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some offers may apply to prescription eyewear, while others may exclude certain products or lens options."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenni sell prescription glasses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zenni offers prescription eyewear in a wide range of frame styles and lens options."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenni sell sunglasses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zenni offers sunglasses in different styles, including options that may be available with prescription lenses."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenni sell glasses for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zenni offers children's eyewear in different frame styles and sizes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy blue-light glasses from Zenni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zenni offers eyewear with options designed for digital-device use. Review the specific product details to understand the features available with each lens."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenni have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zenni may run promotions around Black Friday and the broader holiday shopping season. Check current offers to see which products and customers qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenni have Cyber Monday offers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zenni may offer online promotions around Cyber Monday. Availability and terms can change, so check the current offer before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Zenni deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Summer, back-to-school season, Black Friday, Cyber Monday, and holiday shopping periods can be useful times to check for eyewear offers."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on Zenni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Zenni promo code, then compare available discounts, sale offers, vouchers, and other promotions. Review the terms and confirm that the offer has been applied before completing your purchase."
          }
        }
      ]
    },
  ],
};

export default function ZenniStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zenniSchema) }} />
      <Suspense fallback={null}>
        <ZenniCouponsContent />
      </Suspense>
    </>
  );
}
