import type { Metadata } from "next";
import { Suspense } from "react";
import NuagewearCouponsContent from "./_components/StoreCouponsContent";
import { NUAGE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "NuageWears Promo Code: 39% Off Bras + Free Shipping | Nov 2026",
  },
  description:
    "Use a NuageWears promo code to get 39% off the Wireless Soft Stay-Put Bra and free shipping on $60+ orders. Find the latest discount code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nuage-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nuage-discount-code",
      "x-default": "https://www.couponsbit.us/stores/nuage-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nuage-discount-code",
    title: "NuageWears Promo Code: 39% Off Bras + Free Shipping | Nov 2026",
    description:
      "Use a NuageWears promo code to get 39% off the Wireless Soft Stay-Put Bra and free shipping on $60+ orders. Find the latest discount code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg",
        width: 1200,
        height: 630,
        alt: "Nuagewear Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NuageWears Promo Code: 39% Off Bras + Free Shipping | Nov 2026",
    description:
      "Use a NuageWears promo code to get 39% off the Wireless Soft Stay-Put Bra and free shipping on $60+ orders. Find the latest discount code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg"],
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

const nuagewearSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/nuage-discount-code",
      name: "NuageWears Promo Code: 39% Off Bras + Free Shipping | Nov 2026",
      description:
        "Use a NuageWears promo code to get 39% off the Wireless Soft Stay-Put Bra and free shipping on $60+ orders. Find the latest discount code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/nuage-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#offerlist",
      name: "Nuagewear Coupon Codes & Promo Codes",
      description:
        "Use a NuageWears promo code to get 39% off the Wireless Soft Stay-Put Bra and free shipping on $60+ orders. Find the latest discount code deals for Nov 2026.",
      url: "https://www.couponsbit.us/stores/nuage-discount-code",
      numberOfItems: NUAGE_COUPONS.length,
      itemListElement: NUAGE_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/nuage-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "NuageWears",
            url: "https://www.nuagewear.com",
          },
        },
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#brand",
      name: "NuageWears",
      url: "https://www.nuagewear.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#breadcrumb",
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
          name: "Nuagewear Coupons",
          item: "https://www.couponsbit.us/stores/nuage-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Nuagewear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuagewear is a women's underwear brand focused on seamless comfort, performance fabrics, and innovative fit technology.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Nuagewear sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand offers seamless underwear, performance briefs, shaping essentials, wireless bras, and everyday comfort collections.",
          },
        },
        {
          "@type": "Question",
          name: "Is Nuagewear suitable for workouts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Nuagewear products are designed to support active lifestyles, including fitness training, yoga, and everyday movement.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Nuagewear coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Nuagewear coupon codes, promo offers, and discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and helps shoppers discover valuable savings opportunities from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function NuagewearStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nuagewearSchema),
        }}
      />
      <Suspense fallback={null}><NuagewearCouponsContent /></Suspense>
    </>
  );
}