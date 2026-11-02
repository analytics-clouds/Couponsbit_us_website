import type { Metadata } from "next";
import IkeaCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "IKEA Discount Code: Up to 70% OFF Selected Products | Nov 2026",
  },
  description:
    "Get the latest IKEA Discount Code for November 2026 and save up to 70% OFF selected products or enjoy up to 40% OFF furniture, lighting, curtains, storage & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ikea-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ikea-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ikea-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ikea-discount-code",
    title: "IKEA Discount Code: Up to 70% OFF Selected Products | Nov 2026",
    description:
      "Get the latest IKEA Discount Code for November 2026 and save up to 70% OFF selected products or enjoy up to 40% OFF furniture, lighting, curtains, storage & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ikea-logo_suwglk.webp",
        width: 1200,
        height: 630,
        alt: "IKEA Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IKEA Discount Code: Up to 70% OFF Selected Products | Nov 2026",
    description:
      "Get the latest IKEA Discount Code for November 2026 and save up to 70% OFF selected products or enjoy up to 40% OFF furniture, lighting, curtains, storage & more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ikea-logo_suwglk.webp"],
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

const ikeaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ikea-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ikea-discount-code",
      name: "IKEA Discount Code: Up to 70% OFF Selected Products | Nov 2026",
      description:
        "Get the latest IKEA Discount Code for November 2026 and save up to 70% OFF selected products or enjoy up to 40% OFF furniture, lighting, curtains, storage & more.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-02",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/ikea-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ikea-discount-code#offerlist",
      name: "IKEA Discount Codes & Coupon Codes",
      description: "Latest IKEA discount codes and offers.",
      url: "https://www.couponsbit.us/stores/ikea-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/ikea-discount-code",
          seller: { "@type": "Organization", name: "IKEA", url: "https://www.ikea.com" },
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
      "@id": "https://www.couponsbit.us/stores/ikea-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "IKEA Coupons", item: "https://www.couponsbit.us/stores/ikea-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/ikea-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find an IKEA promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit CouponsBit to check available IKEA promo codes, coupons, and offers. You can also browse the official IKEA US offers page for current promotions and IKEA Family prices."
      }
    },
    {
      "@type": "Question",
      "name": "Does IKEA offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA offers promotional discounts, but not all of them use a coupon code. Some savings are available through IKEA Family member prices and apply automatically at checkout when you meet the offer requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Is IKEA Family free to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. IKEA Family membership is free in the US. Members can access selected product offers, workshops, store benefits, and other programme perks."
      }
    },
    {
      "@type": "Question",
      "name": "Does IKEA offer student discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA US has featured student-specific promotions through its verification programme. Availability, discount amounts, and eligible products can change, so check the official student discount page for current conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an IKEA promo code with IKEA Family offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Some IKEA Family offers specifically state that they cannot be combined with other coupons or promotions. Check the terms of both offers before trying to use them together."
      }
    },
    {
      "@type": "Question",
      "name": "What can I buy at IKEA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA sells furniture, mattresses, storage products, kitchenware, lighting, rugs, home décor, bathroom accessories, outdoor furniture, children's products, and selected home electronics."
      }
    }
  ]
},
  ],
};

export default function IkeaStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ikeaSchema) }} />
      <IkeaCouponsContent />
    </>
  );
}
