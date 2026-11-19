import type { Metadata } from "next";
import { Suspense } from "react";
import ItcHotelsCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "ITC Hotels Promo Code: Up to 50% Off Stays | Nov 2026",
  },
  description:
    "ITC Hotels Promo Code and ITC Hotels Discount Code offer 50% membership savings plus 33% off Goa stays. Get verified Nov 2026 deals now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/itc-hotels-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/itc-hotels-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/itc-hotels-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/itc-hotels-discount-code",
      "x-default": "https://www.couponsbit.us/stores/itc-hotels-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/itc-hotels-discount-code",
    title: "ITC Hotels Promo Code: Up to 50% Off Stays | Nov 2026",
    description:
      "ITC Hotels Promo Code and ITC Hotels Discount Code offer 50% membership savings plus 33% off Goa stays. Get verified Nov 2026 deals now.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp",
        width: 1200,
        height: 630,
        alt: "ITC Hotels Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ITC Hotels Promo Code: Up to 50% Off Stays | Nov 2026",
    description:
      "ITC Hotels Promo Code and ITC Hotels Discount Code offer 50% membership savings plus 33% off Goa stays. Get verified Nov 2026 deals now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp"],
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

const itcHotelsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/itc-hotels-discount-code",
      name: "ITC Hotels Promo Code: Up to 50% Off Stays | Nov 2026",
      description:
        "ITC Hotels Promo Code and ITC Hotels Discount Code offer 50% membership savings plus 33% off Goa stays. Get verified Nov 2026 deals now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#offerlist",
      name: "ITC Hotels Discount Codes & Coupon Codes",
      description: "Latest ITC Hotels discount codes and offers for luxury stays, dining and loyalty rewards.",
      url: "https://www.couponsbit.us/stores/itc-hotels-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/itc-hotels-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "ITC Hotels", url: "https://www.itchotels.com" },
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
      "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#brand",
      name: "ITC Hotels",
      url: "https://www.itchotels.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "ITC Hotels Coupons", item: "https://www.couponsbit.us/stores/itc-hotels-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/itc-hotels-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find an ITC Hotels Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available ITC Hotels discount codes, coupon codes, promotions, and hotel offers before booking your stay."
      }
    },
    {
      "@type": "Question",
      "name": "What Is an ITC Hotels Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An ITC Hotels coupon code is a promotional code that may provide a discount or additional benefit on an eligible hotel reservation."
      }
    },
    {
      "@type": "Question",
      "name": "Does ITC Hotels Always Have a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Hotel promotions change regularly, and some offers are provided as special room rates or packages rather than traditional coupon codes."
      }
    },
    {
      "@type": "Question",
      "name": "Does ITC Hotels Have Hotel Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ITC Hotels can run limited-period promotions and special accommodation offers. These may be based on travel dates, destinations, room categories, seasons, or specific packages."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Find Weekend Offers at ITC Hotels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weekend packages may be available at selected properties and during certain promotional periods. Check the specific hotel's current offers when planning your trip."
      }
    },
    {
      "@type": "Question",
      "name": "Does ITC Hotels Offer Breakfast Packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Breakfast may be included in selected room rates or hotel packages. Always check the booking inclusions before completing your reservation."
      }
    },
    {
      "@type": "Question",
      "name": "Does ITC Hotels Have Spa Packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selected properties offer spa and wellness facilities, and special packages may combine accommodation with wellness experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Book an ITC Hotels Stay for a Family?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ITC Hotels offers accommodation suitable for different types of travelers, including families. Check the individual property's room capacity and child policies before booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can Couples Book ITC Hotels for a Romantic Getaway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ITC Hotels properties can be suitable for honeymoons, anniversaries, birthdays, and romantic breaks. Selected properties may also offer special packages for couples."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use an ITC Hotels Discount Code on a Promotional Rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the individual promotion. Some rates may not be combined with additional discounts, while other offers may have specific eligibility requirements."
      }
    }
  ]
},
  ],
};

export default function ItcHotelsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itcHotelsSchema) }} />
      <Suspense fallback={null}>
        <ItcHotelsCouponsContent />
      </Suspense>
    </>
  );
}
