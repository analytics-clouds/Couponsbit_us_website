import type { Metadata } from "next";
import { Suspense } from "react";
import IberiaCouponsContent from "./_components/StoreCouponsContent";
import { IBERIA_COUPONS } from "./_components/offers";

const TITLE = "Iberia Promo Code: Get 30% Off + Flights From $258 | Nov 2026";
const DESCRIPTION =
  "Use an Iberia promo code and Iberia discount code to book flights from $258 or save up to 30% on favorites. Verified Nov 2026 deals. Book your trip today.";
const CANONICAL = "https://www.couponsbit.us/stores/iberia-discount-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788248209/iberia-logo_ssnbjg.webp",
        width: 1200,
        height: 630,
        alt: "Iberia Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788248209/iberia-logo_ssnbjg.webp"],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const storeOffers = IBERIA_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": "https://www.iberia.com/#brand",
    },
  },
}));

const iberiaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Iberia Discount Codes & Coupon Codes",
      description: "Latest Iberia discount codes and offers for flights, business class and Avios rewards.",
      url: CANONICAL,
      numberOfItems: IBERIA_COUPONS.length,
      itemListElement: storeOffers,
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
      "@type": "Organization",
      "@id": "https://www.iberia.com/#brand",
      name: "Iberia",
      url: "https://www.iberia.com",
      logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248209/iberia-logo_ssnbjg.webp",
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Iberia Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Iberia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iberia is Spain's flag carrier airline, offering flights across Europe, Latin America and internationally as part of the IAG group.",
          },
        },
        {
          "@type": "Question",
          name: "Does Iberia offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia runs promotions such as Europe route deals, Latin America flight offers, travel packages, and site-wide promo codes.",
          },
        },
        {
          "@type": "Question",
          name: "What is an Iberia discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An Iberia discount code is a promotional code that can provide a discount on an eligible Iberia booking. The exact discount, eligible flights, booking dates, and conditions depend on the promotion.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Iberia discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available Iberia discount codes, promo codes, coupon offers, and flight deals before booking. Customers can also find promotional codes on Iberia's website, social media channels, newsletters, and Iberia Club communications.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use an Iberia discount code on any flight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Promotional codes can have specific terms and may apply only to selected flights, routes, travel dates, or fare classes.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I enter an Iberia promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iberia's payment page includes a designated field for vouchers, discount codes, or gift cards. Enter your eligible code there and select the option to apply it to your total.",
          },
        },
        {
          "@type": "Question",
          name: "Does Iberia offer flight deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia maintains an offers section featuring low-fare opportunities, monthly flight deals, travel packages, and its popular Madrid stopover program.",
          },
        },
        {
          "@type": "Question",
          name: "Does Iberia have a loyalty program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia Club is Iberia's loyalty program. Members can earn Avios and Elite Points to unlock travel perks, discounts, and exclusive promotions.",
          },
        },
        {
          "@type": "Question",
          name: "What are Avios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avios are the reward currency used by Iberia Club. Members can earn Avios through eligible flights and participating partners, and redeem them for flights, discounts, upgrades, hotels, car hire, and other travel rewards.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Avios to reduce the cost of an Iberia flight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia allows eligible members to redeem Avios for full flight bookings or partial discounts on ticket prices, as well as for cabin upgrades and extra travel services.",
          },
        },
        {
          "@type": "Question",
          name: "Can travelers in the USA use an Iberia discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, depending on the promotion. U.S. travelers should select the US regional store on Iberia's website and verify the terms of the individual discount code before booking.",
          },
        },
        {
          "@type": "Question",
          name: "Can travelers in Canada use an Iberia discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia maintains a dedicated Canadian platform and provides options for promotional codes, though individual offers may have specific regional terms.",
          },
        },
        {
          "@type": "Question",
          name: "Can travelers in the UK use an Iberia discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia offers a dedicated UK market store, but individual promotional codes may have specific restrictions. Always check the terms before applying a code to a UK booking.",
          },
        },
        {
          "@type": "Question",
          name: "Does Iberia offer Business Class?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia offers Business Class on eligible long-haul and short-haul routes, and Iberia Club members can use Avios for eligible cabin upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a hotel through Iberia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia's booking platform includes standalone hotel reservations as well as combined flight-plus-hotel packages.",
          },
        },
        {
          "@type": "Question",
          name: "Can I rent a car through Iberia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia provides car rental bookings and flight-plus-car package options. Iberia Club members can also earn Avios through participating rental partners.",
          },
        },
        {
          "@type": "Question",
          name: "Does Iberia fly to Latin America?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Iberia offers extensive flights to a wide range of Latin American destinations alongside its European and international routes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function IberiaStorePage() {
  return (
    <Suspense fallback={null}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iberiaSchema) }} />
      <IberiaCouponsContent />
    </Suspense>
  );
}
