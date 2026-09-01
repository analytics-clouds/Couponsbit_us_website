import type { Metadata } from "next";
import BluettiCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
  },
  description:
    "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bluetti-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "x-default": "https://www.couponsbit.us/stores/bluetti-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bluetti-discount-code",
    title: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
    description:
      "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/bluetti-power-logo_osmets.webp",
        width: 1200,
        height: 630,
        alt: "Bluetti Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
    description:
      "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/bluetti-power-logo_osmets.webp"],
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

const bluettiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/bluetti-discount-code",
      name: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
      description:
        "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#offerlist",
      name: "Bluetti Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluetti coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/bluetti-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Elite 300 + Charger 2, Save $150",
            description: "Save $150 on the Elite 300 + Charger 2 bundle, the world's smallest 3kWh portable power station.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Apex 300 + 2×B300K, Save $200",
            description: "Get $200 OFF the Apex 300 expansion bundle with massive 8,294.4Wh expandable power capacity.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – FREE $249 Trolley With Apex 300 Bundle",
            description: "Buy a select Apex 300 bundle and receive a FREE trolley worth $249.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Elite 300 From $1,199",
            description: "The world's smallest 3kWh portable power station, starting at just $1,199.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Apex 300 From $1,699",
            description: "Delivers both 120V & 240V power simultaneously, starting from $1,699.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Elite 400 From $1,399",
            description: "An essential home backup solution with up to 4kWh capacity, from $1,399.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Apex 300 + 2×200W Solar Generator, Save $200",
            description: "Save $200 on this complete solar generator bundle, including two 200W solar panels.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Elite 200 V2 + Charger 2, Save $200",
            description: "Get $200 OFF on the Elite 200 V2 bundle, charging up to 13× faster than standard car outlets.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – AC200L + Charger 2, Save $150",
            description: "Save $150 on the AC200L + Charger 2 package with 2,400W output and 2,048Wh battery capacity.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@type": "Offer",
            name: "BLUETTI Power – Apex 300 Home Battery Backup From $1,699",
            description: "Best-selling home battery backup solution, starting from $1,699.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
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
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#breadcrumb",
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
          name: "Bluetti Coupons",
          item: "https://www.couponsbit.us/stores/bluetti-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BLUETTI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BLUETTI is a clean energy company that manufactures portable power stations, solar generators, solar panels, home backup power systems, and energy storage solutions.",
          },
        },
        {
          "@type": "Question",
          name: "What products does BLUETTI sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BLUETTI offers portable power stations, foldable solar panels, solar generators, expansion batteries, home energy storage systems, and charging accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Are BLUETTI power stations suitable for camping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. BLUETTI portable power stations are popular for camping, RV trips, outdoor events, and off-grid travel because they can power a wide variety of electronic devices and appliances.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a BLUETTI discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest BLUETTI discount code, BLUETTI voucher, BLUETTI promo code, and BLUETTI coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Can BLUETTI products be charged using solar panels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many BLUETTI portable power stations are compatible with solar panels, allowing users to recharge their batteries using renewable solar energy.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function BluettiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluettiSchema),
        }}
      />
      <BluettiCouponsContent />
    </>
  );
}