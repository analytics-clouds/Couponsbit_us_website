import type { Metadata } from "next";
import AriatCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Ariat Promo Code – Get 20% Off + Extra 25% Off  | Nov 2026",
  },
  description:
    "Find the latest Ariat promo code and Ariat discount code to get 25% OFF your cart and 20% OFF sale styles. Verified November 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ariat-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ariat-promo-code",
      "x-default": "https://www.couponsbit.us/stores/ariat-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ariat-promo-code",
    title: "Ariat Promo Code – Get 20% Off + Extra 25% Off  | Nov 2026",
    description:
      "Find the latest Ariat promo code and Ariat discount code to get 25% OFF your cart and 20% OFF sale styles. Verified November 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp",
        width: 1200,
        height: 630,
        alt: "Ariat Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ariat Promo Code – Get 20% Off + Extra 25% Off  | Nov 2026",
    description:
      "Find the latest Ariat promo code and Ariat discount code to get 25% OFF your cart and 20% OFF sale styles. Verified November 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp"],
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

const ariatSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ariat-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/ariat-promo-code",
      name: "Ariat Promo Code – Get 20% Off + Extra 25% Off  | Nov 2026",
      description:
        "Find the latest Ariat promo code and Ariat discount code to get 25% OFF your cart and 20% OFF sale styles. Verified November 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-02",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/ariat-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ariat-promo-code#offerlist",
      name: "Ariat Promo Codes & Coupon Codes",
      description: "Latest Ariat promo codes and offers.",
      url: "https://www.couponsbit.us/stores/ariat-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/ariat-promo-code",
          seller: { "@type": "Organization", name: "Ariat", url: "https://www.ariat.com" },
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
      "@id": "https://www.couponsbit.us/stores/ariat-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Ariat Coupons", item: "https://www.couponsbit.us/stores/ariat-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/ariat-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find an Ariat promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Ariat page on CouponsBit to check available promo codes and discounts. You can also explore Ariat's official promotions page for current offers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ariat offer a first-order discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ariat offers new email subscribers 10% off their first order. The offer is limited to new subscribers, excludes clearance products, and is valid for US orders."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ariat offer a military discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Eligible US military personnel and veterans can receive 10% off after verifying their status through SheerID."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple Ariat promo codes on one order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Ariat allows only one promo code per order. Its first-order email discount also cannot be combined with other offers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ariat offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ariat offers free ground shipping on domestic US orders. Ariat Insider members also receive free shipping without an order minimum, subject to programme terms."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to return an Ariat order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ariat.com offers free returns within 90 days of purchase for US orders, subject to the return policy and product conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I enter an Ariat promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add your selected products to your shopping bag and proceed to the My Bag page. Enter your promo code in the box below the order summary and select Apply."
      }
    }
  ]
},
  ],
};

export default function AriatStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ariatSchema) }} />
      <AriatCouponsContent />
    </>
  );
}
