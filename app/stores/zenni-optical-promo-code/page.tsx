import type { Metadata } from "next";
import ZenniOpticalCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Zenni Optical Discount Code: Get 40% OFF + Extra 30% OFF | Nov 2026",
  },
  description:
    "Get the latest Zenni Optical Discount Code for November 2026 and enjoy Buy 1, Get 1 40% OFF or save up to 30% OFF on stylish prescription glasses & sunglasses.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/zenni-optical-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/zenni-optical-promo-code",
      "x-default": "https://www.couponsbit.us/stores/zenni-optical-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/zenni-optical-promo-code",
    title: "Zenni Optical Discount Code: Get 40% OFF + Extra 30% OFF | Nov 2026",
    description:
      "Get the latest Zenni Optical Discount Code for November 2026 and enjoy Buy 1, Get 1 40% OFF or save up to 30% OFF on stylish prescription glasses & sunglasses.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp",
        width: 1200,
        height: 630,
        alt: "Zenni Optical Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zenni Optical Discount Code: Get 40% OFF + Extra 30% OFF | Nov 2026",
    description:
      "Get the latest Zenni Optical Discount Code for November 2026 and enjoy Buy 1, Get 1 40% OFF or save up to 30% OFF on stylish prescription glasses & sunglasses.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp"],
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

const zenniSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/zenni-optical-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/zenni-optical-promo-code",
      name: "Zenni Optical Discount Code: Get 40% OFF + Extra 30% OFF | Nov 2026",
      description:
        "Get the latest Zenni Optical Discount Code for November 2026 and enjoy Buy 1, Get 1 40% OFF or save up to 30% OFF on stylish prescription glasses & sunglasses.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-02",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/zenni-optical-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/zenni-optical-promo-code#offerlist",
      name: "Zenni Optical Promo Codes & Coupon Codes",
      description: "Latest Zenni Optical promo codes and eyewear deals.",
      url: "https://www.couponsbit.us/stores/zenni-optical-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/zenni-optical-promo-code",
          seller: { "@type": "Organization", name: "Zenni Optical", url: "https://www.zennioptical.com" },
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
      "@id": "https://www.couponsbit.us/stores/zenni-optical-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Zenni Optical Coupons", item: "https://www.couponsbit.us/stores/zenni-optical-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/zenni-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Zenni promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Zenni store page on CouponsBit to check available promo codes and discounts. Review each offer's terms before using it."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zenni offer prescription glasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zenni offers prescription eyewear, including single-vision, bifocal, and progressive glasses. You can select compatible lens options while customizing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Zenni promo code with another discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Zenni's promotional terms generally do not allow multiple offers to be combined unless the specific promotion states otherwise. Check the conditions attached to your code."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zenni sell prescription sunglasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Selected Zenni frames can be customized with prescription sunglass lenses. Options include different tints and polarized lenses, depending on the frame and prescription."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zenni offer blue-light-blocking glasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zenni offers its Blokz range of blue-light-blocking lenses. These options are available for compatible frames and orders."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try on Zenni glasses before buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zenni offers a Virtual Try-On feature that lets shoppers preview selected frames using a video or image-based experience. This can help you compare styles before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my Zenni promo code does not work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check whether the code has expired, whether your selected products qualify, and whether the offer has a minimum purchase requirement. Also check whether the code is restricted to a specific customer or cannot be combined with another promotion."
      }
    }
  ]
},
  ],
};

export default function ZenniOpticalStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zenniSchema) }} />
      <ZenniOpticalCouponsContent />
    </>
  );
}
