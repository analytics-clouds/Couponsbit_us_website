import type { Metadata } from "next";
import ZenHotelsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "ZenHotels Coupon Code – Get $35 OFF Hotel Bookings",
  description:
    "Get the latest ZenHotels Coupon Code and save $35 on hotel bookings over $700. Find exclusive deals on luxury resorts, city breaks, and hotels worldwide.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "tr-TR": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "de-DE": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "en-PK": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
    title: "ZenHotels Coupon Code – Get $35 OFF Hotel Bookings",
    description:
      "Get the latest ZenHotels Coupon Code and save $35 on hotel bookings over $700. Find exclusive deals on luxury resorts, city breaks, and hotels worldwide.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["tr_TR", "en_IN", "de_DE", "en_GB", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp",
        width: 1200,
        height: 630,
        alt: "Zen Hotels Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZenHotels Coupon Code – Get $35 OFF Hotel Bookings",
    description:
      "Get the latest ZenHotels Coupon Code and save $35 on hotel bookings over $700. Find exclusive deals on luxury resorts, city breaks, and hotels worldwide.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp"],
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

const zenhotelsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      name: "ZenHotels Coupon Code – Get $35 OFF Hotel Bookings",
      description:
        "Get the latest ZenHotels Coupon Code and save $35 on hotel bookings over $700. Find exclusive deals on luxury resorts, city breaks, and hotels worldwide.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/zen-hotels-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-coupon-code#offerlist",
      name: "Zen Hotels Coupon Codes & Promo Codes",
      description:
        "Latest verified Zen Hotels coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Zen Hotels Coupon Code",
            description:
              "Latest Zen Hotels coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
            areaServed: [
              { "@type": "Country", name: "Turkey" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Pakistan" },
            ],
            seller: {
              "@type": "Organization",
              name: "Zen Hotels",
              url: "https://www.bluehost.com",
            },
          },
        },
      ],
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-coupon-code#breadcrumb",
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
          name: "Zen Hotels Coupons",
          item: "https://www.couponsbit.us/stores/zen-hotels-coupon-code",
        },
      ],
    },
  ],
};

export default function ZenHotelsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(zenhotelsSchema),
        }}
      />
      <ZenHotelsCouponsContent />
    </>
  );
}