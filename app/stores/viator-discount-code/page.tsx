import type { Metadata } from "next";
import { Suspense } from "react";
import ViatorCouponsContent from "./_components/StoreCouponsContent";
import { VIATOR_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Viator Promo Code: 15% OFF Tours + Experiences From $39 | Nov 2026",
  },
  description:
    "Save with Viator Promo Code and Viator Discount Code. Get 15% off Valley of Fire tours and explore Las Vegas experiences from $39. Verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/viator-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/viator-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/viator-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/viator-discount-code",
      "x-default": "https://www.couponsbit.us/stores/viator-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/viator-discount-code",
    title: "Viator Promo Code: 15% OFF Tours + Experiences From $39 | Nov 2026",
    description:
      "Save with Viator Promo Code and Viator Discount Code. Get 15% off Valley of Fire tours and explore Las Vegas experiences from $39. Verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/viator-logo_tvu8qa.webp",
        width: 1200,
        height: 630,
        alt: "Viator Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Viator Promo Code: 15% OFF Tours + Experiences From $39 | Nov 2026",
    description:
      "Save with Viator Promo Code and Viator Discount Code. Get 15% off Valley of Fire tours and explore Las Vegas experiences from $39. Verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788951742/viator-logo_tvu8qa.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = VIATOR_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Viator ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/viator-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Viator", url: "https://www.viator.com" },
}));

const viatorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/viator-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/viator-discount-code",
      name: "Viator Promo Code: 15% OFF Tours + Experiences From $39 | Nov 2026",
      description:
        "Save with Viator Promo Code and Viator Discount Code. Get 15% off Valley of Fire tours and explore Las Vegas experiences from $39. Verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/viator-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/viator-discount-code#brand",
      name: "Viator",
      url: "https://www.viator.com",
      sameAs: ["https://www.facebook.com/viator", "https://twitter.com/viator"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/viator-discount-code#offerlist",
      name: "Viator Discount Codes & Promo Codes",
      description: "Latest Viator discount codes and offers on tours and activities.",
      url: "https://www.couponsbit.us/stores/viator-discount-code",
      numberOfItems: VIATOR_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
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
      "@id": "https://www.couponsbit.us/stores/viator-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Viator Coupons", item: "https://www.couponsbit.us/stores/viator-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/viator-discount-code#faq",
      mainEntity: [
        { "@type": "Question", name: "What is Viator?", acceptedAnswer: { "@type": "Answer", text: "Viator is an online marketplace for booking tours, activities and attraction tickets around the world." } },
        { "@type": "Question", name: "Does Viator offer discount codes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Viator runs promotions such as new customer offers, tour discounts and last-minute experience deals." } },
        { "@type": "Question", name: "Where can I find Viator discount codes?", acceptedAnswer: { "@type": "Answer", text: "You can find the latest Viator discount codes and offers on Couponsbit." } },
        { "@type": "Question", name: "Does Viator offer free cancellation?", acceptedAnswer: { "@type": "Answer", text: "Many Viator bookings offer free cancellation; exact terms vary by tour or activity." } },
        { "@type": "Question", name: "Can I book last-minute tours on Viator?", acceptedAnswer: { "@type": "Answer", text: "Yes. Viator offers select last-minute experience deals, though availability varies by destination." } },
        { "@type": "Question", name: "Is Couponsbit free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." } },
      ],
    },
  ],
};

export default function ViatorStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(viatorSchema) }} />
      <Suspense fallback={null}>
        <ViatorCouponsContent />
      </Suspense>
    </>
  );
}
