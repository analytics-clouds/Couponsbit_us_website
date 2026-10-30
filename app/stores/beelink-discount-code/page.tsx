import type { Metadata } from "next";
import BeelinkCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Beelink Discount Code – Save $450 & Up to 35% OFF Sept 2026",
  },
  description:
    "Use the latest Beelink Discount Code and Beelink promo Code to save $450 on the GTR9 Pro or get up to 35% OFF the ME Mini NAS PC. Shop now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/beelink-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/beelink-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/beelink-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/beelink-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/beelink-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/beelink-discount-code",
      "x-default": "https://www.couponsbit.us/stores/beelink-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/beelink-discount-code",
    title: "Beelink Discount Code – Save $450 & Up to 35% OFF Sept 2026",
    description:
      "Find the latest Beelink discount codes and deals for Oct 2026. Save $450 on GTR9 Pro AI Mini PC, get up to 35% off ME Mini NAS PC, 30% off SSD upgrades, and more AI Mini PC offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg",
        width: 1200,
        height: 630,
        alt: "Beelink Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Beelink Discount Code – Save $450 & Up to 35% OFF Sept 2026",
    description:
      "Find the latest Beelink discount codes and deals for Oct 2026. Save $450 on GTR9 Pro AI Mini PC, get up to 35% off ME Mini NAS PC, 30% off SSD upgrades, and more AI Mini PC offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg"],
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

const beelinkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/beelink-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/beelink-discount-code",
      name: "Beelink Discount Code – Save $450 & Up to 35% OFF Sept 2026",
      description:
        "Find the latest Beelink discount codes and deals for Oct 2026. Save $450 on GTR9 Pro AI Mini PC, get up to 35% off ME Mini NAS PC, 30% off SSD upgrades, and more AI Mini PC offers.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/beelink-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/beelink-discount-code#offerlist",
      name: "Beelink Coupon Codes & Promo Codes",
      description:
        "Find the latest Beelink discount codes and deals for Oct 2026. Save $450 on GTR9 Pro AI Mini PC, get up to 35% off ME Mini NAS PC, 30% off SSD upgrades, and more AI Mini PC offers.",
      url: "https://www.couponsbit.us/stores/beelink-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/beelink-discount-code",
          seller: { "@type": "Organization", name: "Beelink", url: "https://www.bee-link.com" },
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
      "@id": "https://www.couponsbit.us/stores/beelink-discount-code#breadcrumb",
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
          name: "Beelink Coupons",
          item: "https://www.couponsbit.us/stores/beelink-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/beelink-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Beelink?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beelink is a global technology brand that manufactures mini PCs, AI-ready workstations, Network Attached Storage (NAS) systems, laptop companions, docking stations, and other compact computing solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Beelink only known for mini PCs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While mini PCs remain its flagship products, Beelink has expanded its product lineup to include NAS servers, modular laptop companions like the EX Mate Pro, expand docks, and other hardware designed to improve productivity and connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "What can I use a Beelink mini PC for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beelink mini PCs are suitable for office work, home entertainment, programming, media streaming, content creation, business applications, software development, digital signage, virtualization, and everyday computing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Beelink sell NAS devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Beelink offers compact NAS solutions that allow users to create private cloud storage, manage backups, and centralize files for home or business use.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Beelink coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Beelink coupon codes, promo codes, and exclusive technology deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promotional offers, and discounts from trusted brands worldwide.",
          },
        },
      ],
    },
  ],
};

export default function BeelinkStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(beelinkSchema),
        }}
      />
      <BeelinkCouponsContent />
    </>
  );
}