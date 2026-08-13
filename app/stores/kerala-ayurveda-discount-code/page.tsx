import type { Metadata } from "next";
import KeralaAyurvedaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Kerala Ayurveda Discount Code: Use COUNTNEW10 and Get 10% Off | Aug 2026",
  description:
    "Use Kerala Ayurveda discount code or promo code COUNTNEW10 & get 10% off your first order. Shop authentic Ayurvedic supplements & skincare from just $27. August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
      "x-default": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
    title: "Kerala Ayurveda Discount Code: Use COUNTNEW10 and Get 10% Off | Aug 2026",
    description:
      "Use Kerala Ayurveda discount code or promo code COUNTNEW10 & get 10% off your first order. Shop authentic Ayurvedic supplements & skincare from just $27. August 2026.",
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
    title: "Kerala Ayurveda Discount Code: Use COUNTNEW10 and Get 10% Off | Aug 2026",
    description:
      "Use Kerala Ayurveda discount code or promo code COUNTNEW10 & get 10% off your first order. Shop authentic Ayurvedic supplements & skincare from just $27. August 2026.",
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
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
      name: "Kerala Ayurveda Discount Code: Use COUNTNEW10 and Get 10% Off | Aug 2026",
      description:
        "Use Kerala Ayurveda discount code or promo code COUNTNEW10 & get 10% off your first order. Shop authentic Ayurvedic supplements & skincare from just $27. August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#offerlist",
      name: "Kerala Ayurveda Coupon Codes & Promo Codes",
      description:
        "Latest verified Kerala Ayurveda coupon codes and promo codes for Ayurvedic oils, supplements, skincare and wellness essentials.",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
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
            url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
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
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
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
