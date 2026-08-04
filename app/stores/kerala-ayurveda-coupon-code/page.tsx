import type { Metadata } from "next";
import KeralaAyurvedaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "kerala ayurveda coupon code | Digi Eye Defense Deals from $31.95 | Aug 2026",
  description:
    "Get the latest Kerala Ayurveda Coupon Code and Kerala Ayurveda Promo Code. Use COUNTNEW10 for 10% OFF on Digi Eye Defense deals from $31.95 and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
    title: "kerala ayurveda coupon code | Digi Eye Defense Deals from $31.95 | Aug 2026",
    description:
      "Get the latest Kerala Ayurveda Coupon Code and Kerala Ayurveda Promo Code. Use COUNTNEW10 for 10% OFF on Digi Eye Defense deals from $31.95 and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala Ayurveda Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "kerala ayurveda coupon code | Digi Eye Defense Deals from $31.95 | Aug 2026",
    description:
      "Get the latest Kerala Ayurveda Coupon Code and Kerala Ayurveda Promo Code. Use COUNTNEW10 for 10% OFF on Digi Eye Defense deals from $31.95 and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg"],
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

const keralaAyurvedaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
      name: "kerala ayurveda coupon code | Digi Eye Defense Deals from $31.95 | Aug 2026",
      description:
        "Get the latest Kerala Ayurveda Coupon Code and Kerala Ayurveda Promo Code. Use COUNTNEW10 for 10% OFF on Digi Eye Defense deals from $31.95 and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code#offerlist",
      name: "Kerala Ayurveda Coupon Codes & Promo Codes",
      description:
        "Latest verified Kerala Ayurveda coupon codes and promo codes for Ayurvedic oils, supplements, skincare and wellness essentials.",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Kerala Ayurveda Coupon Code",
            description:
              "Latest Kerala Ayurveda coupon code for Ayurvedic wellness product discounts.",
            url: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Kerala Ayurveda",
              url: "https://keralaayurveda.store/",
            },
          },
        },
      ],
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
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code#breadcrumb",
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
          name: "Kerala Ayurveda Coupons",
          item: "https://www.couponsbit.us/stores/kerala-ayurveda-coupon-code",
        },
      ],
    },
  ],
};

export default function KeralaAyurvedaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(keralaAyurvedaSchema),
        }}
      />
      <KeralaAyurvedaCouponsContent />
    </>
  );
}
