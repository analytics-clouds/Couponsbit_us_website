import type { Metadata } from "next";
import AvisCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
  description:
    "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/avis-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/avis-discount-code",
      "x-default": "https://www.couponsbit.us/stores/avis-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/avis-discount-code",
    title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
    description:
      "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp",
        width: 1200,
        height: 630,
        alt: "Avis Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
    description:
      "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp"],
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

const avisSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      name: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
      description:
        "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#offerlist",
      name: "Avis Coupon Codes & Promo Codes",
      description:
        "Latest verified Avis coupon codes, promo codes and discount codes for car rentals.",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Avis Drive Gold Membership – Limited-Time Offer",
            description: "Join Avis Drive Gold for just $19 (regular price $39) for a limited time.",
            url: "https://www.couponsbit.us/stores/avis-discount-code",
            seller: {
              "@type": "Organization",
              name: "Avis",
              url: "https://www.avis.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Avis – Member Savings Across The USA",
            description: "Rent your favorite vehicle and save up to 20% off on eligible bookings.",
            url: "https://www.couponsbit.us/stores/avis-discount-code",
            seller: {
              "@type": "Organization",
              name: "Avis",
              url: "https://www.avis.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "Avis Drive Gold Annual Membership – Just $99",
            description: "Get Avis Drive Gold Annual Membership for only $99 for a full year of exclusive savings.",
            url: "https://www.couponsbit.us/stores/avis-discount-code",
            seller: {
              "@type": "Organization",
              name: "Avis",
              url: "https://www.avis.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "Avis – Save Up To 20% On Every Rental",
            description: "Save up to 20% off on every eligible car rental across the USA.",
            url: "https://www.couponsbit.us/stores/avis-discount-code",
            seller: {
              "@type": "Organization",
              name: "Avis",
              url: "https://www.avis.com",
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
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
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
          name: "Avis Coupons",
          item: "https://www.couponsbit.us/stores/avis-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Avis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avis is a global car rental company offering vehicles for business travel, vacations, airport transportation, road trips, and long-term rentals.",
          },
        },
        {
          "@type": "Question",
          name: "What types of vehicles does Avis offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avis provides economy cars, sedans, SUVs, luxury vehicles, pickup trucks, vans, and premium rental options, depending on the location.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book an Avis rental online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Customers can search for available vehicles, compare rental options, and complete reservations through the Avis website or mobile app.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Avis coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Avis coupon codes, Avis promo codes, and exclusive car rental deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Avis have airport rental locations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Avis operates at many major airports worldwide, making it easy for travelers to pick up and return rental vehicles.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promotional offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function AvisStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(avisSchema),
        }}
      />
      <AvisCouponsContent />
    </>
  );
}
