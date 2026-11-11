import type { Metadata } from "next";
import { Suspense } from "react";
import FeelGoodContactsCouponsContent from "./_components/StoreCouponsContent";
import { FEELGOOD_COUPONS } from "./_components/offers";

const TITLE = "Feel Good Contacts Discount Code: 70% OFF Glasses | Nov 2026";
const DESCRIPTION =
  "Get the latest Feel Good Contacts Discount Code and Feel Good Contacts Promo Code for November 2026. Save up to 70% OFF glasses, 50% OFF contact lenses, and more.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
    languages: {
      "en-GB": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-US": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-AL": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-IS": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-IL": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-MY": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-NL": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-NZ": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-NO": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-SA": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "en-ZA": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      "x-default": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_GB",
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793878984/feel_good_contact_logo.webp",
        width: 1200,
        height: 630,
        alt: "Feel Good Contacts Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1793878984/feel_good_contact_logo.webp"],
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

const feelgoodOffers = FEELGOOD_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Feel Good Contacts ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#${coupon.id}`,
  priceCurrency: "GBP",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Feel Good Contacts", url: "https://www.feelgoodcontacts.com" },
}));

const feelgoodSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Find verified coupon codes and discount deals for top brands worldwide.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.couponsbit.us/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://www.couponsbit.us/logo.png",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      about: { "@type": "Brand", name: "Feel Good Contacts" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-11",
      inLanguage: "en-GB",
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Feel Good Contacts Discount Code", item: "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#itemlist",
      name: "Feel Good Contacts Discount Codes & Offers",
      description: "Latest verified Feel Good Contacts coupon codes and promo deals for November 2026.",
      numberOfItems: FEELGOOD_COUPONS.length,
      itemListElement: feelgoodOffers,
    },
    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/feelgoodcontacts-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Feel Good Contacts promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can visit the Feel Good Contacts store page on CouponsBit to explore available discount codes and offers. Check the terms to make sure the promotion applies to your country and selected products."
      }
    },
    {
      "@type": "Question",
      "name": "Does Feel Good Contacts offer a first-order discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Its UK website advertises 10% off the first order of eligible contact lenses, solutions, and eye care products using code FEELGOOD. The offer is for new customers and cannot be combined with other discounts or third-party promotional links. Other regional websites may have different welcome offers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order contact lenses without uploading my prescription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The UK website states that customers do not need to upload their prescription when ordering, but they should have an updated contact lens prescription and use the correct details when purchasing. Follow the requirements of the relevant regional website and local regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Does Feel Good Contacts sell branded contact lenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Its product range includes lenses from established manufacturers such as Johnson & Johnson, Alcon, Bausch + Lomb, and CooperVision. Availability depends on the regional store and product."
      }
    },
    {
      "@type": "Question",
      "name": "Can I reorder my previous contact lenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The UK website provides a Reorder feature through the customer account, allowing customers to repeat previous purchases. Make sure your prescription and lens requirements are still current before placing another order."
      }
    },
    {
      "@type": "Question",
      "name": "Does Feel Good Contacts offer a price match?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The UK website has a Price Match Guarantee for eligible identical contact lenses sold by qualifying UK retailers. The offer has specific conditions, including product availability and retailer eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the same Feel Good Contacts promo code in every country?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Promotional codes can be restricted to a particular regional website, customer group, or product category. Always check the offer terms and use the code on the correct country website."
      }
    },
    {
      "@type": "Question",
      "name": "Does Feel Good Contacts offer discounts on glasses and sunglasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Its UK offers page lists discounts on prescription glasses and designer sunglasses, with offers changing over time. Check the regional website for current promotions and eligible products."
      }
    }
  ]
},
  ],
};

export default function FeelGoodContactsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(feelgoodSchema) }} />
      <Suspense fallback={null}>
        <FeelGoodContactsCouponsContent />
      </Suspense>
    </>
  );
}
