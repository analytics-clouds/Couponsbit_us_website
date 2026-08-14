import type { Metadata } from "next";
import BudgetCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Budget Coupon Codes – Save on Car Rentals",
  description:
    "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/budget-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/budget-discount-code",
      "x-default": "https://www.couponsbit.us/stores/budget-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/budget-discount-code",
    title: "Budget Coupon Codes – Save on Car Rentals",
    description:
      "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp",
        width: 1200,
        height: 630,
        alt: "Budget Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Budget Coupon Codes – Save on Car Rentals",
    description:
      "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp"],
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

const budgetSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/budget-discount-code",
      name: "Budget Coupon Codes – Save on Car Rentals",
      description:
        "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/budget-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#offerlist",
      name: "Budget Coupon Codes & Promo Codes",
      description:
        "Latest verified Budget coupon codes, promo codes and discount codes for car rentals.",
      url: "https://www.couponsbit.us/stores/budget-discount-code",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Budget Summer Sale – Up To 35% OFF",
            description: "Book your next rental and save up to 35% off when you pay now.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Budget Weekly Rental Deal – Up To 25% OFF",
            description: "Save up to 25% off on rentals of 5 days or more.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "Budget – Get $10 OFF Rentals Over $175",
            description: "Save $10 off when your rental is $175 or more.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "Budget Truck Rental – Cargo Vans From $29.99/Day",
            description: "Rent a cargo van from only $29.99 per day.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Offer",
            name: "Budget Young Driver Special – Up To 15% OFF",
            description: "Young travelers can save up to 15% off eligible rentals.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Offer",
            name: "Budget Pay Now & Save – Up To 15% OFF",
            description: "Choose the Pay Now option and save up to 15% off instantly.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Offer",
            name: "Budget Switzerland Deal – 7 Days For The Price Of 5",
            description: "Rent a vehicle for 7 days and pay for only 5.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Offer",
            name: "Budget Weekend Special – 3 Days For The Price Of 2",
            description: "Rent for 3 days and pay for only 2 on weekend bookings.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
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
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#breadcrumb",
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
          name: "Budget Coupons",
          item: "https://www.couponsbit.us/stores/budget-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budget is an international car rental company offering affordable vehicle rentals for business trips, vacations, airport transfers, and everyday transportation.",
          },
        },
        {
          "@type": "Question",
          name: "What types of vehicles does Budget offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budget offers economy cars, compact cars, sedans, SUVs, vans, premium vehicles, and luxury cars, depending on the rental location.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a Budget rental online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Budget allows customers to search, compare, and reserve rental vehicles through its online booking platform.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Budget coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Budget coupon codes, Budget promo codes, and exclusive car rental deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Budget offer airport rentals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Budget has rental locations at many major airports around the world, making it convenient for travelers to pick up and return vehicles.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promo offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function BudgetStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(budgetSchema),
        }}
      />
      <BudgetCouponsContent />
    </>
  );
}
