import type { Metadata } from "next";
import { Suspense } from "react";
import PlanetFitnessCouponsContent from "./_components/StoreCouponsContent";
import { PLANET_FITNESS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Planet Fitness Promo Code: $1 Down + $10/Month | Nov 2026 ",
  },
  description:
    "Save with Planet Fitness Promo Code offers featuring $1 down with plans from $10/month and the first month free. Get a verified Planet Fitness Discount Code Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/planet-fitness-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/planet-fitness-promo-code",
      "x-default": "https://www.couponsbit.us/stores/planet-fitness-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/planet-fitness-promo-code",
    title: "Planet Fitness Promo Code: $1 Down + $10/Month | Nov 2026 ",
    description:
      "Save with Planet Fitness Promo Code offers featuring $1 down with plans from $10/month and the first month free. Get a verified Planet Fitness Discount Code Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/planet_fitness_promo_code_yaozty.webp",
        width: 1200,
        height: 630,
        alt: "Planet Fitness Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Planet Fitness Promo Code: $1 Down + $10/Month | Nov 2026 ",
    description:
      "Save with Planet Fitness Promo Code offers featuring $1 down with plans from $10/month and the first month free. Get a verified Planet Fitness Discount Code Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789535819/planet_fitness_promo_code_yaozty.webp"],
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

const storeOffers = PLANET_FITNESS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Planet Fitness ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/planet-fitness-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Planet Fitness", url: "https://www.planetfitness.com" },
}));

const planetFitnessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/planet-fitness-promo-code",
      name: "Planet Fitness Promo Code: $1 Down + $10/Month | Nov 2026 ",
      description:
        "Save with Planet Fitness Promo Code offers featuring $1 down with plans from $10/month and the first month free. Get a verified Planet Fitness Discount Code Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#brand",
      name: "Planet Fitness",
      url: "https://www.planetfitness.com",
      sameAs: ["https://www.facebook.com/planetfitness", "https://twitter.com/planetfitness"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#offerlist",
      name: "Planet Fitness Promo Codes & Coupon Codes",
      description: "Latest Planet Fitness promo codes and offers on gym memberships.",
      url: "https://www.couponsbit.us/stores/planet-fitness-promo-code",
      numberOfItems: PLANET_FITNESS_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Planet Fitness Coupons", item: "https://www.couponsbit.us/stores/planet-fitness-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/planet-fitness-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Planet Fitness offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planet Fitness offers promotional membership deals from time to time. Offers can vary by location and membership type, so check CouponsBit and your preferred club for current promotions."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Planet Fitness promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Planet Fitness promo codes, coupon offers, and membership deals before signing up."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Planet Fitness promo code at any location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Planet Fitness promotions can vary between locations, particularly because individual clubs may have different membership terms and offers. Always check whether a promotion applies to your selected club."
          }
        },
        {
          "@type": "Question",
          "name": "Does Planet Fitness have membership discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planet Fitness periodically offers promotional membership pricing and other signup incentives. The available savings depend on the club, membership type, and current promotion."
          }
        },
        {
          "@type": "Question",
          "name": "What is the PF Black Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PF Black Card is Planet Fitness's higher-tier membership option. Benefits can include access to participating Planet Fitness locations, guest privileges, and additional amenities. Exact benefits can vary by location and current membership terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring a guest to Planet Fitness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guest privileges are one of the benefits associated with the PF Black Card, subject to current membership terms and club policies."
          }
        },
        {
          "@type": "Question",
          "name": "Does Planet Fitness offer free fitness training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planet Fitness offers PE@PF fitness training at participating locations. The availability and format can vary by club."
          }
        },
        {
          "@type": "Question",
          "name": "Does Planet Fitness have an app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Planet Fitness has a mobile app that provides fitness and membership-related features. Current features can change as the app is updated."
          }
        },
        {
          "@type": "Question",
          "name": "Is Planet Fitness good for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planet Fitness is designed around an accessible, beginner-friendly gym environment. Its Judgement Free Zone® philosophy and available fitness resources can make it a comfortable option for people who are new to working out."
          }
        },
        {
          "@type": "Question",
          "name": "Does Planet Fitness have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planet Fitness may run promotional offers during different periods of the year, including around major shopping events. Promotions can vary by location, so check current offers before joining."
          }
        }
      ]
    },
  ],
};

export default function PlanetFitnessStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(planetFitnessSchema) }} />
      <Suspense fallback={null}>
        <PlanetFitnessCouponsContent />
      </Suspense>
    </>
  );
}
