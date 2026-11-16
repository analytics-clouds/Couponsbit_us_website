import type { Metadata } from "next";
import { Suspense } from "react";
import WayfairCouponsContent from "./_components/StoreCouponsContent";
import { WAYFAIR_COUPONS } from "./_components/offers";

const storeOffers = WAYFAIR_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/wayfair-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Wayfair", url: "https://www.wayfair.com/" },
}));

export const metadata: Metadata = {
  title: {
    absolute: "Wayfair Promo Code: Up to 80% Off + Extra 10% Off | Nov 2026",
  },
  description:
    "Use a Wayfair promo code and Wayfair coupon code to save up to 80% on closeout items plus an extra 10% off for new subscribers. Verified Nov 2026. Shop now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/wayfair-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/wayfair-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/wayfair-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/wayfair-discount-code",
      "x-default": "https://www.couponsbit.us/stores/wayfair-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/wayfair-discount-code",
    title: "Wayfair Promo Code: Up to 80% Off + Extra 10% Off | Nov 2026",
    description:
      "Use a Wayfair promo code and Wayfair coupon code to save up to 80% on closeout items plus an extra 10% off for new subscribers. Verified Nov 2026. Shop now.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp",
        width: 1200,
        height: 630,
        alt: "Wayfair Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wayfair Promo Code: Up to 80% Off + Extra 10% Off | Nov 2026",
    description:
      "Use a Wayfair promo code and Wayfair coupon code to save up to 80% on closeout items plus an extra 10% off for new subscribers. Verified Nov 2026. Shop now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp"],
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
};

const wayfairSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/wayfair-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/wayfair-discount-code",
      name: "Wayfair Promo Code: Up to 80% Off + Extra 10% Off | Nov 2026",
      description:
        "Use a Wayfair promo code and Wayfair coupon code to save up to 80% on closeout items plus an extra 10% off for new subscribers. Verified Nov 2026. Shop now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/wayfair-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/wayfair-discount-code#offerlist",
      name: "Wayfair Discount Codes & Coupon Codes",
      description: "Latest Wayfair discount codes and offers for furniture, home decor and Wayfair Professional.",
      url: "https://www.couponsbit.us/stores/wayfair-discount-code",
      numberOfItems: WAYFAIR_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/wayfair-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Wayfair Coupons", item: "https://www.couponsbit.us/stores/wayfair-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/wayfair-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find a Wayfair Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Wayfair discount codes, coupon codes, deals, and promotions before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "What Is a Wayfair Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Wayfair coupon code is a promotional code that may provide a discount or another benefit on qualifying purchases, depending on the offer's conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Always Have a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Wayfair runs different types of promotions throughout the year, and some savings are automatically applied rather than requiring a code."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Have a Sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wayfair regularly runs sales and promotional events covering furniture, décor, mattresses, appliances, rugs, lighting, outdoor products, and other categories."
      }
    },
    {
      "@type": "Question",
      "name": "What Is Way Day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Way Day is Wayfair's major promotional shopping event, featuring offers across a broad range of home products."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Have a Black Friday Sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Black Friday is a major promotional period for Wayfair, with deals across multiple home categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Sell Furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Furniture is one of Wayfair's core categories, including sofas, beds, dining furniture, desks, chairs, cabinets, storage, and outdoor furniture."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Sell Mattresses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wayfair offers mattresses, mattress toppers, pillows, bedding, bed frames, and other bedroom products."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Sell Rugs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can find area rugs, runners, outdoor rugs, washable rugs, and rugs in different sizes, patterns, and materials."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Sell Outdoor Furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Outdoor products include patio seating, dining sets, loungers, umbrellas, outdoor rugs, fire pits, and storage solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use a Wayfair Discount Code on Sale Items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the specific promotion. Some offers may exclude already-discounted merchandise or selected categories, so review the coupon terms before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wayfair Sell Appliances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wayfair offers various major and small appliances, including refrigerators, dishwashers, ranges, microwaves, washers, dryers, and other home appliances."
      }
    }
  ]
},
  ],
};

export default function WayfairStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wayfairSchema) }} />
      <Suspense fallback={null}>
        <WayfairCouponsContent />
      </Suspense>
    </>
  );
}
