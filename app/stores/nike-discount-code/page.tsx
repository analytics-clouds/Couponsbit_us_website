import type { Metadata } from "next";
import { Suspense } from "react";
import NikeCouponsContent from "./_components/StoreCouponsContent";
import { NIKE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Nike Promo Code: Save 60% Off on Leggings | Nov 2026",
  },
  description:
    "Grab a Nike Promo Code with 60% off Nike One Women’s High-Rise Leggings and 29% off Sportswear Women’s Track Shorts. Verified deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nike-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nike-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/nike-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/nike-discount-code",
      "x-default": "https://www.couponsbit.us/stores/nike-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nike-discount-code",
    title: "Nike Promo Code: Save 60% Off on Leggings | Nov 2026",
    description:
      "Grab a Nike Promo Code with 60% off Nike One Women’s High-Rise Leggings and 29% off Sportswear Women’s Track Shorts. Verified deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp",
        width: 1200,
        height: 630,
        alt: "Nike Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nike Promo Code: Save 60% Off on Leggings | Nov 2026",
    description:
      "Grab a Nike Promo Code with 60% off Nike One Women’s High-Rise Leggings and 29% off Sportswear Women’s Track Shorts. Verified deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp"],
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

const nikeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/nike-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/nike-discount-code",
      name: "Nike Promo Code: Save 60% Off on Leggings | Nov 2026",
      description:
        "Grab a Nike Promo Code with 60% off Nike One Women’s High-Rise Leggings and 29% off Sportswear Women’s Track Shorts. Verified deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/nike-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nike-discount-code#offerlist",
      name: "Nike Discount Codes & Coupon Codes",
      description: "Latest Nike discount codes and offers for footwear, apparel and accessories.",
      url: "https://www.couponsbit.us/stores/nike-discount-code",
      numberOfItems: NIKE_COUPONS.length,
      itemListElement: NIKE_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/nike-discount-code", seller: { "@type": "Organization", name: "Nike", url: "https://www.nike.com" } },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/nike-discount-code#brand",
      name: "Nike",
      url: "https://www.nike.com",
      sameAs: ["https://en.wikipedia.org/wiki/Nike,_Inc."],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/nike-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Nike Coupons", item: "https://www.couponsbit.us/stores/nike-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/nike-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Nike offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nike occasionally provides promotional codes for eligible products and customers. Nike also offers member-only promotions and other discounts."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Nike promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Nike offers and promo codes. Nike also recommends becoming a Nike Member to receive updates about exclusive promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nike have a student discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Eligible U.S. high school, college, and university students can receive 10% off most items on Nike.com and in the Nike App after verification."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nike offer a military discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nike lists a 10% military discount among its official savings options in the U.S."
      }
    },
    {
      "@type": "Question",
      "name": "Can teachers get a Nike discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nike lists a 10% discount for eligible educators on most items on Nike.com and in the Nike App."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nike offer a discount for first responders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Eligible first responders and medical professionals can receive 10% off most items through Nike's discount program."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply a Nike discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add your eligible products to your bag, select the promo code option, enter your code, and click Apply. Nike says the discount will appear if the code is valid and the products qualify."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use more than one Nike promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nike's promo terms determine whether codes can be combined. Some promotional codes cannot be combined with other offers, so check the specific terms before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nike have a sale section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nike has dedicated sale categories covering shoes, clothing, best sellers, and other products."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Nike discounts, promo codes, and other savings opportunities without paying a fee."
      }
    }
  ]
},
  ],
};

export default function NikeStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nikeSchema) }} />
      <Suspense fallback={null}>
        <NikeCouponsContent />
      </Suspense>
    </>
  );
}
