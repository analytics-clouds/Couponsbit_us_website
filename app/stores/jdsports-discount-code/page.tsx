import type { Metadata } from "next";
import JDSportsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "JD Sports Discount Code – Coupons & Deals | Couponsbit",
  },
  description:
    "Find the latest JD Sports discount codes, coupons, and deals on Couponsbit. Save on sneakers, sportswear, and accessories.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/jdsports-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/jdsports-discount-code",
      "x-default": "https://www.couponsbit.us/stores/jdsports-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/jdsports-discount-code",
    title: "JD Sports Discount Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest JD Sports discount codes, coupons, and deals on Couponsbit. Save on sneakers, sportswear, and accessories.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1791446502/jD-logo_lfuzxu.webp",
        width: 1200,
        height: 630,
        alt: "JD Sports Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JD Sports Discount Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest JD Sports discount codes, coupons, and deals on Couponsbit. Save on sneakers, sportswear, and accessories.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1791446502/jD-logo_lfuzxu.webp"],
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

const jdsportsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/jdsports-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/jdsports-discount-code",
      name: "JD Sports Discount Code – Coupons & Deals | Couponsbit",
      description:
        "Find the latest JD Sports discount codes, coupons, and deals on Couponsbit. Save on sneakers, sportswear, and accessories.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-10-09",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/jdsports-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/jdsports-discount-code#offerlist",
      name: "JD Sports Discount Codes & Coupon Codes",
      description: "Latest JD Sports discount codes and offers.",
      url: "https://www.couponsbit.us/stores/jdsports-discount-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "JD Sports – New Customer Offer", description: "Sign up and check for savings on your first JD Sports order.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "JD Sports – Percentage Off Sitewide", description: "Check for a JD Sports discount code offering a percentage off eligible products.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "JD Sports – Sneaker Deal", description: "Save on selected sneakers and trainers at JD Sports.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "JD Sports – Free Shipping Offer", description: "Check for free shipping on qualifying JD Sports orders.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "JD Sports – Sportswear Bundle Deal", description: "Save on sportswear and accessory bundles at JD Sports.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "JD Sports – Seasonal Clearance Sale", description: "Check for seasonal clearance pricing on select JD Sports products.", url: "https://www.couponsbit.us/stores/jdsports-discount-code", seller: { "@type": "Organization", name: "JD Sports", url: "https://www.jdsports.com" } } },
      ],
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
      "@id": "https://www.couponsbit.us/stores/jdsports-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "JD Sports Coupons", item: "https://www.couponsbit.us/stores/jdsports-discount-code" },
      ],
    },
{
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/jdsports-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find a JD Sports discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the JD Sports page on CouponsBit to check for available discount codes, coupons, and promotional offers. Choose an eligible deal and follow its redemption instructions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a JD Sports discount code on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on the individual promotion. Some coupon codes may exclude sale products or selected brands, while others may have broader eligibility. Check the terms of the offer before using it."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my JD Sports promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A promo code may not work if it has expired, has usage restrictions, applies only to selected products, or isn't valid for your order. Check the promotion's conditions and make sure the code has been entered correctly."
      }
    },
    {
      "@type": "Question",
      "name": "Does JD Sports offer deals without a discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shoppers may find sale products and other promotional offers where the discount is already reflected in the listed price and no code is required."
      }
    },
    {
      "@type": "Question",
      "name": "Should I check CouponsBit before shopping at JD Sports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Checking CouponsBit before checkout lets you see whether a JD Sports discount code or another promotional offer is available for your purchase."
      }
    }
  ]
},
  ],
};

export default function JDSportsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jdsportsSchema) }} />
      <JDSportsContent />
    </>
  );
}
