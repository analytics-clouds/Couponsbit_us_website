import type { Metadata } from "next";
import { Suspense } from "react";
import ValvolineCouponsContent from "./_components/StoreCouponsContent";
import { VALVOLINE_COUPONS } from "./_components/offers";

const TITLE = "Valvoline Promo Code: Get 50% Off + $15 Off | Nov 2026";
const DESCRIPTION = "Use a Valvoline Promo Code and Valvoline Discount Code to get up to 50% off services plus $15 off an oil change. Verified Nov 2026. Save now.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/valvoline-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/valvoline-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/valvoline-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/valvoline-discount-code",
      "x-default": "https://www.couponsbit.us/stores/valvoline-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/valvoline-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp",
        width: 1200,
        height: 630,
        alt: "Valvoline Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp"],
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

const valvolineSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/valvoline-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#offerlist",
      name: "Valvoline Discount Codes & Coupon Codes",
      description: "Latest Valvoline discount codes and offers for oil changes, motor oil and fluid services.",
      url: "https://www.couponsbit.us/stores/valvoline-discount-code",
      numberOfItems: VALVOLINE_COUPONS.length,
      itemListElement: VALVOLINE_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/valvoline-discount-code",
          seller: { "@type": "Organization", name: "Valvoline", url: "https://www.valvoline.com" },
        },
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
      "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#brand",
      name: "Valvoline",
      url: "https://www.valvoline.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Valvoline Coupons", item: "https://www.couponsbit.us/stores/valvoline-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/valvoline-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Valvoline offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Valvoline Instant Oil Change locations offer various coupons and promotions. Current examples include discounts on premium, full synthetic, synthetic blend, and conventional oil changes. Offers vary by location."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Valvoline promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for current Valvoline promotions before visiting a service center. You should also check your local Valvoline location because offers can vary."
      }
    },
    {
      "@type": "Question",
      "name": "Does Valvoline have an oil change coupon for new customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Valvoline Instant Oil Change locations currently advertise $20 off a premium oil change for new customers. Eligibility and expiration dates vary by location."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Valvoline charge for an oil change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The price depends on the oil type, vehicle, location, and applicable promotions. Valvoline's current location pages display different coupons for conventional, synthetic blend, full synthetic, and premium services."
      }
    },
    {
      "@type": "Question",
      "name": "Does Valvoline offer synthetic oil changes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Valvoline Instant Oil Change locations offer full synthetic and synthetic blend oil change services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Valvoline oil change take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Valvoline says its Instant Oil Change service takes about 15 minutes. Actual wait times can vary depending on the location and customer traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an appointment at Valvoline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No appointment is generally required for Valvoline Instant Oil Change. The company promotes its service as a convenient, stay-in-your-car experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stay in my car during a Valvoline oil change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Valvoline Instant Oil Change is designed as a stay-in-your-car service, allowing customers to remain in their vehicles while technicians perform the oil change."
      }
    },
    {
      "@type": "Question",
      "name": "Does every Valvoline location offer the same services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Valvoline notes that products and services can vary by location. Check your local service center for the most accurate information."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Valvoline offers and other savings opportunities without paying a fee."
      }
    }
  ]
},
  ],
};

export default function ValvolineStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(valvolineSchema) }} />
      <Suspense fallback={null}>
        <ValvolineCouponsContent />
      </Suspense>
    </>
  );
}
