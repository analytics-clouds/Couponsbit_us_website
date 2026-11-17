import type { Metadata } from "next";
import { Suspense } from "react";
import PandoraCouponsContent from "./_components/StoreCouponsContent";
import { PANDORA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Pandora Promo Code: Marvel Spider-Man Mask Charm 50% OFF | Nov 2026",
  },
  description:
    "Use Pandora Promo Code and Pandora Discount Code to save 50% on Spider-Man charms and 30% on rings. Verified Nov 2026 jewelry deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/pandora-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/pandora-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/pandora-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/pandora-promo-code",
      "x-default": "https://www.couponsbit.us/stores/pandora-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/pandora-promo-code",
    title: "Pandora Promo Code: Marvel Spider-Man Mask Charm 50% OFF | Nov 2026",
    description:
      "Use Pandora Promo Code and Pandora Discount Code to save 50% on Spider-Man charms and 30% on rings. Verified Nov 2026 jewelry deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/pandora-logo_gnbedt.webp",
        width: 1200,
        height: 630,
        alt: "Pandora Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pandora Promo Code: Marvel Spider-Man Mask Charm 50% OFF | Nov 2026",
    description:
      "Use Pandora Promo Code and Pandora Discount Code to save 50% on Spider-Man charms and 30% on rings. Verified Nov 2026 jewelry deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788951742/pandora-logo_gnbedt.webp"],
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

const storeOffers = PANDORA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Pandora ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/pandora-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Pandora", url: "https://www.pandora.net" },
}));

const pandoraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/pandora-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/pandora-promo-code",
      name: "Pandora Promo Code: Marvel Spider-Man Mask Charm 50% OFF | Nov 2026",
      description:
        "Use Pandora Promo Code and Pandora Discount Code to save 50% on Spider-Man charms and 30% on rings. Verified Nov 2026 jewelry deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/pandora-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/pandora-promo-code#brand",
      name: "Pandora",
      url: "https://www.pandora.net",
      sameAs: ["https://www.facebook.com/pandorajewelry", "https://twitter.com/pandorajewelry"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/pandora-promo-code#offerlist",
      name: "Pandora Promo Codes & Coupon Codes",
      description: "Latest Pandora promo codes and offers on jewelry.",
      url: "https://www.couponsbit.us/stores/pandora-promo-code",
      numberOfItems: PANDORA_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/pandora-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Pandora Coupons", item: "https://www.couponsbit.us/stores/pandora-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/pandora-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Pandora offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pandora may offer promotional codes, discounts, seasonal promotions, and other savings opportunities. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Pandora promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Pandora promo codes, coupon codes, discount offers, vouchers, and sale promotions before shopping."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Pandora coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add eligible jewelry to your shopping bag, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the offer has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Pandora promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products, collections, customers, or promotional periods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Pandora discount code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes may have product exclusions or other restrictions. Check the terms of the individual offer before using it."
          }
        },
        {
          "@type": "Question",
          "name": "What is Pandora best known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pandora is particularly known for its customizable charm jewelry, including charm bracelets and individual charms that can represent personal memories, interests, and milestones."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pandora sell jewelry besides charms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pandora offers a range of jewelry including bracelets, rings, necklaces, pendants, earrings, and other accessories."
          }
        },
        {
          "@type": "Question",
          "name": "Is Pandora jewelry suitable for gifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pandora offers jewelry across a variety of styles and occasions, making it a popular choice for birthdays, anniversaries, Valentine's Day, Mother's Day, graduations, holidays, and other celebrations."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pandora have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pandora may run promotions around Black Friday and other major shopping periods. Check current offers to see what is available and whether specific products qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pandora have Cyber Monday offers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online promotions may be available around Cyber Monday, although offers and eligibility can change from year to year."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Pandora deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Major gifting occasions and shopping periods such as Valentine's Day, Mother's Day, Black Friday, Cyber Monday, and Christmas can be useful times to check."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money when shopping at Pandora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Pandora promo code, then compare available discounts, sale promotions, vouchers, and other offers. Make sure you review the terms and confirm the promotion has been applied before completing your purchase."
          }
        }
      ]
    },
  ],
};

export default function PandoraStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pandoraSchema) }} />
      <Suspense fallback={null}>
        <PandoraCouponsContent />
      </Suspense>
    </>
  );
}
