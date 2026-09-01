import type { Metadata } from "next";
import VegasCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
  },
  description:
    "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vegas-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/vegas-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vegas-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vegas-discount-code",
    title: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
    description:
      "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp",
        width: 1200,
        height: 630,
        alt: "Vegas.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
    description:
      "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp"],
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

const vegasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
      name: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
      description:
        "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#offerlist",
      name: "Vegas.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Vegas.com coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Flamingo Las Vegas Hotel – SAVE UP TO 35%",
            description: "Book your stay at Flamingo Las Vegas from just $49 per night (Approx. $118 Total).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Cirque du Soleil Tickets – SAVE UP TO 30%",
            description: "Book Cirque du Soleil tickets from just $162 (Regular Price $232).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "Grand Canyon West Rim Bus Tour – SAVE 9%",
            description: "Book the Grand Canyon West Rim & Hoover Dam Bus Tour from just $146 (Regular Price $160).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "Michael Jackson ONE by Cirque du Soleil – SAVE UP TO 19%",
            description: "Get Michael Jackson ONE tickets from only $126 (Regular Price $156).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Offer",
            name: "Paris Las Vegas Hotel – SAVE 17%",
            description: "Stay at Paris Las Vegas from just $40 per night (Approx. $190 Total).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Offer",
            name: "Titanic: The Artifact Exhibition – SAVE 18%",
            description: "Get Titanic: The Artifact Exhibition tickets from just $36 (Regular Price $44).",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
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
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
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
          name: "Vegas.com Coupons",
          item: "https://www.couponsbit.us/stores/vegas-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "vegas is a Las Vegas-focused online travel platform that allows users to book hotels, vacation packages, show tickets, tours, attractions, dining experiences, and entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book Las Vegas hotels through vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. vegas offers reservations for a wide range of hotels and resorts located both on and off the Las Vegas Strip.",
          },
        },
        {
          "@type": "Question",
          name: "Does vegas sell show tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can purchase tickets for concerts, comedy shows, magic performances, theatrical productions, and many other Las Vegas entertainment experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a vegas discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest vegas discount code, voucher, promo code, and coupon code offers on CouponsBit before completing your booking.",
          },
        },
        {
          "@type": "Question",
          name: "Does vegas offer vacation packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform allows travelers to book vacation packages that may include hotels, flights, attractions, and entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified discount codes, vouchers, promo codes, and coupon codes from trusted travel and lifestyle brands.",
          },
        },
      ],
    },
  ],
};

export default function VegasStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vegasSchema),
        }}
      />
      <VegasCouponsContent />
    </>
  );
}