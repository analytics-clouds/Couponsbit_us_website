import type { Metadata } from "next";
import { Suspense } from "react";
import KeralaAyurvedaCouponsContent from "./_components/StoreCouponsContent";
import { KERALA_COUPONS } from "./_components/offers";

const TITLE = "Kerala Ayurveda Discount Code: Up to 20% Off + Extra 10% Off | Nov 2026";
const DESCRIPTION =
  "Use the latest Kerala Ayurveda discount code and promo code to get up to 20% off and use COUNTNEW10 to get extra 10% off. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

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
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
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

  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const keralaAyurvedaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#brand",
      name: "Kerala Ayurveda",
      url: "https://keralaayurveda.store/",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#offerlist",
      name: "Kerala Ayurveda Coupon Codes & Promo Codes",
      description:
        "Latest verified Kerala Ayurveda coupon codes and promo codes for Ayurvedic oils, supplements, skincare and wellness essentials.",
      url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
      numberOfItems: KERALA_COUPONS.length,
      itemListElement: KERALA_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code",
          seller: {
            "@type": "Organization",
            name: "Kerala Ayurveda",
            url: "https://keralaayurveda.store/",
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

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/kerala-ayurveda-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kerala Ayurveda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kerala Ayurveda is an Indian Ayurvedic wellness brand offering herbal products, Ayurvedic medicines, personal care essentials, and wellness solutions inspired by traditional Ayurvedic practices.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Kerala Ayurveda offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand offers Ayurvedic medicines, herbal supplements, immunity support products, skincare, haircare, personal care items, wellness kits, and other Ayurvedic essentials.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kerala Ayurveda only sell wellness products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. In addition to wellness products, Kerala Ayurveda is also associated with Ayurvedic consultations, wellness centers, and educational initiatives focused on Ayurveda.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Kerala Ayurveda coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Kerala Ayurveda coupon codes, promo codes, and verified wellness deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Are Kerala Ayurveda products based on traditional Ayurvedic principles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The brand develops its products using Ayurvedic knowledge and carefully selected herbal ingredients while following modern quality standards.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes and exclusive offers from hundreds of leading brands.",
          },
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
      <Suspense fallback={null}>
        <KeralaAyurvedaCouponsContent />
      </Suspense>
    </>
  );
}
