import type { Metadata } from "next";
import { Suspense } from "react";
import { WISH_COUPONS } from "./_components/offers";
import WishCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Wish Promo Code: Save Up to 67% on Trending Products | Nov 2026";
const DESCRIPTION = "Save with the latest Wish promo code and discount code. Get up to 67% off the Flower Bee Fidget Ring and 60% off Daily Deals this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/wish-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/wish-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/wish-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/wish-discount-code",
      "x-default": "https://www.couponsbit.us/stores/wish-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/wish-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/wish-logo_n1dypa.webp",
        width: 1200,
        height: 630,
        alt: "Wish.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/wish-logo_n1dypa.webp"],
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

const wishSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/wish-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/wish-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#offerlist",
      name: "Wish.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Wish.com coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/wish-discount-code",
      numberOfItems: WISH_COUPONS.length,
      itemListElement: WISH_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/wish-discount-code",
          seller: {
            "@type": "Organization",
            name: "Wish.com",
            url: "https://www.wish.com",
          },
        },
      })),
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#brand",
      name: "Wish.com",
      url: "https://www.wish.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#breadcrumb",
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
          name: "Wish.com Coupons",
          item: "https://www.couponsbit.us/stores/wish-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Wish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wish is a global online marketplace that offers affordable products across categories such as fashion, electronics, home goods, beauty, toys, pet supplies, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Does Wish sell electronics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wish offers a wide selection of electronics, including smartphones, smartwatches, accessories, headphones, charging devices, and other gadgets.",
          },
        },
        {
          "@type": "Question",
          name: "Can I shop on Wish using a mobile app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wish provides both a website and a mobile app, allowing customers to browse products, place orders, and track deliveries conveniently.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Wish discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Wish discount code, Wish voucher, Wish promo code, and Wish coupon code offers on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Wish offer seasonal sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wish regularly runs flash sales, holiday promotions, and special shopping events where customers can save on a wide range of products.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted online retailers.",
          },
        },
      ],
    },
  ],
};

export default function WishStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wishSchema),
        }}
      />
      <Suspense fallback={null}>
        <WishCouponsContent />
      </Suspense>
    </>
  );
}
