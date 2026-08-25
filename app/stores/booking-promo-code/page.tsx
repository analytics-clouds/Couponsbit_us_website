import type { Metadata } from "next";
import BookingCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Booking Promo Code: Hotel & Travel Booking Offers | Aug 2026",
  description:
    "Find the latest Booking promo codes for Aug 2026. Discover hotel stay offers, apartment deals, flight picks and car rental offers with Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/booking-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/booking-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/booking-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/booking-promo-code",
      "x-default": "https://www.couponsbit.us/stores/booking-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/booking-promo-code",
    title: "Booking Promo Code: Hotel & Travel Booking Offers | Aug 2026",
    description:
      "Find the latest Booking promo codes for Aug 2026. Discover hotel stay offers, apartment deals, flight picks and car rental offers with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp",
        width: 1200,
        height: 630,
        alt: "Booking Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Booking Promo Code: Hotel & Travel Booking Offers | Aug 2026",
    description:
      "Find the latest Booking promo codes for Aug 2026. Discover hotel stay offers, apartment deals, flight picks and car rental offers with Couponsbit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp"],
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

const bookingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/booking-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/booking-promo-code",
      name: "Booking Promo Code: Hotel & Travel Booking Offers | Aug 2026",
      description:
        "Find the latest Booking promo codes for Aug 2026. Discover hotel stay offers, apartment deals, flight picks and car rental offers with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/booking-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/booking-promo-code#offerlist",
      name: "Booking Promo Codes & Coupon Codes",
      description: "Latest Booking promo codes and offers for hotels, apartments, flights and car rentals.",
      url: "https://www.couponsbit.us/stores/booking-promo-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Offer", name: "New Hotel Stay Offers", description: "Discover the latest hotel stay offers from Booking.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Offer", name: "Apartment & Home Deals", description: "Browse apartment and home deals and offers at Booking.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Offer", name: "Flight Picks", description: "Shop flight picks from Booking.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
        {
          "@type": "ListItem", position: 4,
          item: { "@type": "Offer", name: "Car Rental Offers", description: "Browse car rental offers at Booking.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
        {
          "@type": "ListItem", position: 5,
          item: { "@type": "Offer", name: "Attraction & Experience Picks", description: "Explore attraction and experience picks from Booking.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
        {
          "@type": "ListItem", position: 6,
          item: { "@type": "Offer", name: "Genius Loyalty Offers", description: "Find Booking's Genius loyalty program offers.", url: "https://www.couponsbit.us/stores/booking-promo-code", seller: { "@type": "Organization", name: "Booking", url: "https://www.booking.com" } },
        },
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
      "@id": "https://www.couponsbit.us/stores/booking-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Booking Coupons", item: "https://www.couponsbit.us/stores/booking-promo-code" },
      ],
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/booking-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Booking.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking.com is a travel booking platform offering hotel stays, apartments, flights, car rentals and attractions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Booking.com offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking.com offers various promotional opportunities, including hotel stay offers and Genius loyalty program deals. Availability and format can differ by property, destination, travel dates, and customer eligibility, with some offers using codes while others are applied automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Booking.com promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find the latest Booking.com promo codes, coupon codes, discount offers, vouchers, and other travel deals on Couponsbit before completing your reservation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a Booking.com coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The redemption process depends on the specific promotion. If a code is required, follow the offer's instructions and enter it at the appropriate point during the booking process. Always confirm that the promotion has been applied before completing the reservation."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Booking.com promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A promotion may not apply if your selected property, travel dates, room type, destination, or booking method does not meet the offer's conditions. The code may also have expired or have customer eligibility requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Booking.com discount code on any hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Travel promotions can be restricted to participating properties, destinations, dates, or room types. Check the individual offer's conditions before booking."
      }
    },
    {
      "@type": "Question",
      "name": "What is Booking.com's Genius loyalty program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Genius is Booking.com's loyalty program that provides rewards and eligible customers with discounts and other benefits at participating properties depending on their Genius level."
      }
    },
    {
      "@type": "Question",
      "name": "Does Booking.com offer hotel discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Accommodation prices and promotional offers can vary by property, destination, travel dates, and booking conditions. Travelers can also find member pricing and other promotional opportunities on participating properties."
      }
    },
    {
      "@type": "Question",
      "name": "Does Booking.com offer flight deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking.com offers flight options alongside its hotel stays, allowing travelers to search for flights and compare available options where pricing and promotions depend on the route, airline, and travel dates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I find vacation homes on Booking.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking.com offers a broad range of accommodation types, including vacation homes, apartments, villas, cabins, guesthouses, and other stays, depending on the destination."
      }
    },
    {
      "@type": "Question",
      "name": "Does Booking.com offer car rental deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Travelers can search for rental cars through Booking.com, with available vehicles and pricing varying by location, dates, rental company, and vehicle type."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for Booking.com deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Travel deals can appear throughout the year, but it is useful to watch major travel periods, seasonal transitions, holiday weekends, Black Friday, Cyber Monday, and destination-specific promotional periods. Flexible travel dates can also provide more options."
      }
    },
    {
      "@type": "Question",
      "name": "Is Couponsbit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save more when booking with Booking.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking CouponsBit for a Booking.com promo code, then compare it with available member discounts, property promotions, seasonal offers, and other deals. Review the total booking cost and cancellation terms before selecting your reservation."
      }
    }
  ]
},
  ],
};

export default function BookingStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }} />
      <BookingCouponsContent />
    </>
  );
}
