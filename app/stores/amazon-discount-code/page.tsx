import type { Metadata } from "next";
import AmazonCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
  },
  description:
    "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Oct 2026",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/amazon-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/amazon-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/amazon-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/amazon-discount-code",
      "x-default": "https://www.couponsbit.us/stores/amazon-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/amazon-discount-code",
    title: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
    description:
      "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Oct 2026",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
    description:
      "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Oct 2026",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp"],
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

const amazonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/amazon-discount-code",
      name: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
      description:
        "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Oct 2026",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/amazon-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#offerlist",
      name: "Amazon Coupon Codes & Promo Codes",
      description:
        "Latest verified Amazon coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/amazon-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/amazon-discount-code",
          seller: { "@type": "Organization", name: "Amazon", url: "https://www.amazon.com" },
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
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#brand",
      name: "Amazon",
      url: "https://www.amazon.com",
      sameAs: ["https://en.wikipedia.org/wiki/Amazon_(company)"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#breadcrumb",
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
          name: "Amazon Coupons",
          item: "https://www.couponsbit.us/stores/amazon-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a verified Amazon discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Amazon discount code, Amazon promo code, Amazon coupon code, and exclusive shopping offers on CouponsBit. We regularly update available promotions to help shoppers save on eligible Amazon purchases.",
          },
        },
        {
          "@type": "Question",
          name: "Does Amazon offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Amazon occasionally offers promotional codes for eligible products, brands, and shopping events. In addition, many products feature digital coupons that can be activated directly on the product page before checkout.",
          },
        },
        {
          "@type": "Question",
          name: "How do Amazon digital coupons work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital coupons can usually be redeemed by selecting the \"Apply Coupon\" option on eligible product pages. The discount is automatically applied during checkout, provided your purchase meets the promotion's requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I combine an Amazon discount code with other offers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the promotion. Some offers may be combined with existing discounts or Lightning Deals, while others may have restrictions. Always review the offer terms before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Amazon Prime help you save money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Prime members can enjoy benefits such as fast shipping, exclusive shopping events, Prime Day access, and member-only deals that may help reduce overall shopping costs.",
          },
        },
        {
          "@type": "Question",
          name: "What are Amazon Lightning Deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lightning Deals are limited-time promotions available on selected products for a short period or until inventory runs out. These offers are updated throughout the day and often feature significant discounts.",
          },
        },
        {
          "@type": "Question",
          name: "Does Amazon have sales throughout the year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to Prime Day, Amazon hosts major shopping events during Black Friday, Cyber Monday, Big Spring Sale, Back-to-School season, and various holiday promotions, along with year-round daily deals.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, promo codes, vouchers, and deals from Amazon and hundreds of other leading brands.",
          },
        },
      ],
    },
  ],
};

export default function AmazonStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amazonSchema),
        }}
      />
      <AmazonCouponsContent />
    </>
  );
}