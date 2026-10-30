import type { Metadata } from "next";
import ATTCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "AT&T Promo Code: Get 50% OFF + $1,200 OFF iPhone | Oct 2026",
  },
  description:
    "Use the latest AT&T Promo Code and AT&T Discount Code to save up to $1,200 OFF iPhone 18 Pro Max and 50% OFF Pixel accessories. Verified deals for October 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/att-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/att-promo-code",
      "x-default": "https://www.couponsbit.us/stores/att-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/att-promo-code",
    title: "AT&T Promo Code: Get 50% OFF + $1,200 OFF iPhone | Oct 2026",
    description:
      "Use the latest AT&T Promo Code and AT&T Discount Code to save up to $1,200 OFF iPhone 18 Pro Max and 50% OFF Pixel accessories. Verified deals for October 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/att_logo_xntyq0.webp",
        width: 1200,
        height: 630,
        alt: "AT&T Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AT&T Promo Code: Get 50% OFF + $1,200 OFF iPhone | Oct 2026",
    description:
      "Use the latest AT&T Promo Code and AT&T Discount Code to save up to $1,200 OFF iPhone 18 Pro Max and 50% OFF Pixel accessories. Verified deals for October 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789719709/att_logo_xntyq0.webp"],
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

const attSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/att-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/att-promo-code",
      name: "AT&T Promo Code: Get 50% OFF + $1,200 OFF iPhone | Oct 2026",
      description:
        "Use the latest AT&T Promo Code and AT&T Discount Code to save up to $1,200 OFF iPhone 18 Pro Max and 50% OFF Pixel accessories. Verified deals for October 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-06-15",
      dateModified: "2026-09-21",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".store-description", ".top-offers", ".faq-section"],
      },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/att-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/att-promo-code#offerlist",
      name: "AT&T Promo Codes & Coupon Codes",
      description: "Latest AT&T promo codes and offers on wireless plans and devices.",
      url: "https://www.couponsbit.us/stores/att-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/att-promo-code",
          seller: { "@type": "Organization", name: "AT&T", url: "https://www.att.com" },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/att-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "AT&T Coupons", item: "https://www.couponsbit.us/stores/att-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/att-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does AT&T offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T offers promotional deals and incentives that can vary by product, service, customer eligibility, and time of year. Check CouponsBit and AT&T's current promotions before making a purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find an AT&T promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available AT&T promo codes, coupon codes, and plan promotions before signing up or shopping. It's also a good idea to compare any code with the promotions currently offered directly by AT&T."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use an AT&T promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select your eligible plan or device, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my AT&T promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected plans or new customers."
      }
    },
    {
      "@type": "Question",
      "name": "Can an AT&T promo code be combined with another offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the specific promotion. Some AT&T offers may not be combinable with other discounts or promotions. Always review the terms before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Can existing AT&T customers use promotional offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some promotions are available to existing customers, while others may be designed specifically for new customers, new lines, upgrades, or qualifying purchases. Always check the individual offer's terms."
      }
    },
    {
      "@type": "Question",
      "name": "What does AT&T offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T offers wireless plans, home internet, and devices including smartphones, tablets, and accessories."
      }
    },
    {
      "@type": "Question",
      "name": "Does AT&T offer smartphone deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AT&T regularly promotes smartphones and device offers. Depending on the promotion, eligibility may involve a qualifying wireless plan, trade-in, new line, or other requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Does AT&T offer trade-in credit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T offers trade-in programs and may run additional promotional incentives or bill credits toward a new device. The value and terms depend on the phone being traded in and the promotion available at the time."
      }
    },
    {
      "@type": "Question",
      "name": "Does AT&T offer home internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AT&T provides home internet services, including AT&T Fiber in eligible locations. Availability and plan options depend on your address."
      }
    },
    {
      "@type": "Question",
      "name": "Does AT&T have bundle discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T may offer savings when you bundle internet and wireless plans together. Check current offers for details."
      }
    },
    {
      "@type": "Question",
      "name": "Does AT&T offer switch deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T may run promotions for customers switching from another wireless carrier. Check current offers for eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for AT&T deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promotions appear throughout the year, but major shopping periods such as Black Friday, Cyber Monday, the holiday season, and back-to-school often bring notable discounts."
      }
    }
  ]
},
  ],
};

export default function ATTStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attSchema) }} />
      <ATTCouponsContent />
    </>
  );
}
