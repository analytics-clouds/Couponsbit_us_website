import type { Metadata } from "next";
import UnipinCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Top-Ups from $0.94 | UniPin Coupon Code & Gaming Deals",
  description:
    "Get the latest UniPin Coupon Code and save on PUBG UC, Fortnite V-Bucks, Roblox Gift Cards, PSN credits, and game top-ups with instant delivery.",

  alternates: {
    canonical: "https://couponsbit.us/stores/unipin-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/unipin-coupon-code",
      "en-ID": "https://couponsbit.us/stores/unipin-coupon-code",
      "x-default": "https://couponsbit.us/stores/unipin-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/unipin-coupon-code",
    title: "Top-Ups from $0.94 | UniPin Coupon Code & Gaming Deals",
    description:
      "Get the latest UniPin Coupon Code and save on PUBG UC, Fortnite V-Bucks, Roblox Gift Cards, PSN credits, and game top-ups with instant delivery.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp",
        width: 1200,
        height: 630,
        alt: "Unipin Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top-Ups from $0.94 | UniPin Coupon Code & Gaming Deals",
    description:
      "Get the latest UniPin Coupon Code and save on PUBG UC, Fortnite V-Bucks, Roblox Gift Cards, PSN credits, and game top-ups with instant delivery.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp"],
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

const unipinSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/unipin-coupon-code#webpage",
      url: "https://couponsbit.us/stores/unipin-coupon-code",
      name: "Top-Ups from $0.94 | UniPin Coupon Code & Gaming Deals",
      description:
        "Get the latest UniPin Coupon Code and save on PUBG UC, Fortnite V-Bucks, Roblox Gift Cards, PSN credits, and game top-ups with instant delivery.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/unipin-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/unipin-coupon-code#offerlist",
      name: "Unipin Coupon Codes & Promo Codes",
      description:
        "Latest verified Unipin coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://couponsbit.us/stores/unipin-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Unipin Coupon Code",
            description:
              "Latest Unipin coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://couponsbit.us/stores/unipin-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Unipin",
              url: "https://www.unipin.com/",
            },
          },
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
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
      "@id": "https://couponsbit.us/stores/unipin-coupon-code#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Unipin Coupons",
          item: "https://couponsbit.us/stores/unipin-coupon-code",
        },
      ],
    },
  ],
};

export default function UnipinStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unipinSchema),
        }}
      />
      <UnipinCouponsContent />
    </>
  );
}