import type { Metadata } from "next";
import { Suspense } from "react";
import McafeeCouponsContent from "./_components/StoreCouponsContent";
import { MCAFEE_COUPONS } from "./_components/offers";

const TITLE = "McAfee Discount Code: Up to 75% Off | Nov 2026";
const DESCRIPTION =
  "Save up to 75% with the latest McAfee discount code. Get verified deals on Total Protection, antivirus, identity protection, and online security this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/mcafee-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/mcafee-discount-code",
      "x-default": "https://www.couponsbit.us/stores/mcafee-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/mcafee-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp",
        width: 1200,
        height: 630,
        alt: "McAfee Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp"],
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

const storeOffers = MCAFEE_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: "https://www.couponsbit.us/stores/mcafee-discount-code",
    seller: {
      "@type": "Organization",
      name: "McAfee",
      url: "https://www.mcafee.com",
    },
  },
}));

const mcafeeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/mcafee-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#brand",
      name: "McAfee",
      url: "https://www.mcafee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#offerlist",
      name: "McAfee Coupon Codes & Promo Codes",
      description:
        "Latest verified McAfee coupon codes, promo codes and discount codes for antivirus, VPN, and identity protection plans.",
      url: "https://www.couponsbit.us/stores/mcafee-discount-code",
      numberOfItems: MCAFEE_COUPONS.length,
      itemListElement: storeOffers,
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
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#breadcrumb",
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
          name: "McAfee Coupons",
          item: "https://www.couponsbit.us/stores/mcafee-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is McAfee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "McAfee is a global cybersecurity company that provides antivirus software, identity protection, VPN services, password management, and multi-device security solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Does McAfee protect against viruses and malware?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. McAfee helps protect devices from viruses, malware, ransomware, spyware, phishing attacks, and other common online threats.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use McAfee on multiple devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many McAfee subscriptions support multiple devices, including Windows PCs, Macs, Android phones, and iPhones.",
          },
        },
        {
          "@type": "Question",
          name: "Does McAfee include a VPN?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many McAfee plans include a Secure VPN that helps protect your privacy while browsing online, especially on public Wi-Fi.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find McAfee coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promo offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function McafeeStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mcafeeSchema),
        }}
      />
      <Suspense fallback={null}>
        <McafeeCouponsContent />
      </Suspense>
    </>
  );
}
