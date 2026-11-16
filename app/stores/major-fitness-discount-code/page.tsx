import type { Metadata } from "next";
import { Suspense } from "react";
import MajorFitnessCouponsContent from "./_components/StoreCouponsContent";
import { MAJOR_FITNESS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Major Fitness Promo Code: $250 Off B52 PRO + $50 Off | Nov 2026",
  },
  description:
    "Unlock bigger savings with a Major Fitness Promo Code and Major Fitness Discount Code. Save $250 on the B52 PRO plus $50 off your first order with verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/major-fitness-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/major-fitness-discount-code",
      "x-default": "https://www.couponsbit.us/stores/major-fitness-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/major-fitness-discount-code",
    title: "Major Fitness Promo Code: $250 Off B52 PRO + $50 Off | Nov 2026",
    description:
      "Unlock bigger savings with a Major Fitness Promo Code and Major Fitness Discount Code. Save $250 on the B52 PRO plus $50 off your first order with verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789640583/major-fitness_aum53e.webp",
        width: 1200,
        height: 630,
        alt: "Major Fitness Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Major Fitness Promo Code: $250 Off B52 PRO + $50 Off | Nov 2026",
    description:
      "Unlock bigger savings with a Major Fitness Promo Code and Major Fitness Discount Code. Save $250 on the B52 PRO plus $50 off your first order with verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789640583/major-fitness_aum53e.webp"],
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
  other: {
    "geo.region": "US",
    "geo.country": "US",
    language: "en-US",
  },
};

const majorFitnessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/major-fitness-discount-code",
      name: "Major Fitness Promo Code: $250 Off B52 PRO + $50 Off | Nov 2026",
      description:
        "Unlock bigger savings with a Major Fitness Promo Code and Major Fitness Discount Code. Save $250 on the B52 PRO plus $50 off your first order with verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#offerlist",
      name: "Major Fitness Discount Codes & Coupon Codes",
      description: "Latest Major Fitness discount codes and offers on home gym equipment.",
      url: "https://www.couponsbit.us/stores/major-fitness-discount-code",
      numberOfItems: MAJOR_FITNESS_COUPONS.length,
      itemListElement: MAJOR_FITNESS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/major-fitness-discount-code", seller: { "@type": "Organization", name: "Major Fitness", url: "https://www.majorfitness.com" } },
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
      "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#brand",
      name: "Major Fitness",
      url: "https://www.majorfitness.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Major Fitness Coupons", item: "https://www.couponsbit.us/stores/major-fitness-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/major-fitness-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Major Fitness offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Fitness offers promotional codes, discounts, and seasonal offers from time to time. Available offers can vary, so check for current discount codes and compare them with active site deals before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Major Fitness discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Major Fitness discount codes, coupon codes, and sale promotions before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a Major Fitness discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add eligible items to your cart, proceed to checkout, and enter the applicable discount code in the promotional-code field. Confirm the discount has been applied before completing your purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Major Fitness discount code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or promotional periods."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Major Fitness discount code on all products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Discount codes can have individual terms, exclusions, or product restrictions. Always review the conditions associated with the specific offer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Major Fitness offer student discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Fitness highlights an education discount program. Eligibility and terms can change, so students should check current requirements before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "Does Major Fitness offer military or first-responder discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Major Fitness lists discount programs for military personnel and first responders, subject to applicable verification and requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What equipment does Major Fitness sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Fitness sells a broad range of home gym equipment, including Smith machines, power racks, adjustable weight benches, barbells, dumbbells, weight plates, specialty machines, attachments, and fitness accessories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Major Fitness sell all-in-one home gyms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Major Fitness offers all-in-one Smith machines and power cages designed for full-body workouts at home."
      }
    },
    {
      "@type": "Question",
      "name": "Is Major Fitness good for a small home gym?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Fitness offers space-conscious equipment, including folding and wall-mounted systems. The right choice depends on your available space, workout goals, ceiling height, and equipment needs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Major Fitness offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major Fitness may offer free shipping on qualifying orders. Check current offers for minimum order requirements."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for Major Fitness deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promotions appear throughout the year. Major shopping periods such as Black Friday, Cyber Monday, and the New Year's fitness season are prime times to check for deals."
      }
    }
  ]
},
  ],
};

export default function MajorFitnessStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(majorFitnessSchema) }} />
      <Suspense fallback={null}>
        <MajorFitnessCouponsContent />
      </Suspense>
    </>
  );
}
