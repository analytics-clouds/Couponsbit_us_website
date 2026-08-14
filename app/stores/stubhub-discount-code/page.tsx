import type { Metadata } from "next";
import StubHubCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
  description:
    "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/stubhub-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/stubhub-discount-code",
      "x-default": "https://www.couponsbit.us/stores/stubhub-discount-code",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/stubhub-discount-code",
    title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
    description:
      "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",
        width: 1200,
        height: 630,
        alt: "StubHub Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
    description:
      "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp"],
    site: "@couponsbit",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ JSON-LD Schema
const stubHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      name: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
      description:
        "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
      },
    },

    // ✅ ItemList — tells Google this page contains a list of offers
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#offerlist",
      name: "StubHub Coupon Codes & Promo Codes",
      description:
        "Latest verified StubHub coupon codes, promo codes and discount codes for tickets.",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      numberOfItems: 7, // ← update this to match actual coupon count on page
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Flat 10% OFF Sitewide On Orders Above $40",
            description: "Unlock instant savings on concerts, sports events, live shows and more.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "-NBA Playoffs Tickets – Western Conference Finals",
            description: "Book your NBA Playoffs tickets now for the Oklahoma City Thunder vs San Antonio Spurs clash.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "Rock Music Tickets – Starting From $30",
            description: "Enjoy electrifying live rock performances at affordable ticket prices.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "The Lion King New York Tickets – Starting At $171",
            description: "Experience the magic of The Lion King live in New York at special prices.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Offer",
            name: "Under The Big Sky Festival Tickets - Starting At $582",
            description: "Enjoy a 3-day music festival experience packed with entertainment and live performance",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Offer",
            name: "STUDENT DISCOUNT – Flat $25 OFF On Ticket Booking",
            description: "Students can unlock extra savings on event and concert tickets.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Offer",
            name: "NEW USER OFFER - Get $20 OFF On First Order",
            description: "Sign up today and enjoy an exclusive discount on your first booking.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
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
          name: "StubHub Coupons",
          item: "https://www.couponsbit.us/stores/stubhub-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does StubHub Have a Coupon Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub may offer promotional codes, discounts, and special offers at different times. Check CouponsBit for currently available StubHub coupon codes before purchasing tickets.",
          },
        },
        {
          "@type": "Question",
          name: "Where Can I Find a StubHub Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available StubHub promo codes, discount codes, and ticket offers before completing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Is There a Real StubHub Discount Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Available promotions can change, so check the current StubHub offers on CouponsBit and review the terms of each deal before using it.",
          },
        },
        {
          "@type": "Question",
          name: "What Can I Buy With StubHub Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub offers tickets for concerts, professional and college sports, theater, comedy, festivals, and other live entertainment events.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub World Cup Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub may have listings for major international sporting events, including World Cup-related events. Availability and pricing can vary significantly depending on the match and demand.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub NFL Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, StubHub features listings for NFL games. Search by team, matchup, location, or event date to find available tickets.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub Concert Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StubHub offers tickets for numerous concerts, tours, and music events. Availability depends on the artist, venue, date, and current listings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Sell Tickets on StubHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligible ticket holders may be able to list tickets they can no longer use through StubHub's marketplace, subject to the platform's applicable requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit Free to Use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use. You can browse available coupon codes, promotions, and deals across entertainment, travel, fashion, technology, and other categories.",
          },
        },
      ],
    },
  ],
};

export default function StubHubStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(stubHubSchema),
        }}
      />
      <StubHubCouponsContent />
    </>
  );
}