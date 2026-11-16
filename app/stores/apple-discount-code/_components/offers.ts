export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "UP TO",
    value: "$150 GIFT CARD",
    title: "Apple Discount Code: Up to $150 Gift Card with Education Pricing",
    desc: "Students and educators can score a gift card worth $100 to $150 when they buy a qualifying Mac or iPad.",
    verified: "Verified",
    userType: "Students & Educators",
    validTill: "30 Nov 2026",
    bullets: [
      "Pick up a $100–$150 gift card with select Mac and iPad purchases.",
      "Education pricing applies to eligible devices.",
      "Browse a range of qualifying Mac and iPad models.",
      "This deal runs for a limited time only."
    ]
  },
  {
    id: "c2",
    label: "FROM",
    value: "$599",
    title: "Apple Promo Code: MacBook Neo Starting at $599",
    desc: "The newest MacBook Neo is now available at a starting price of $599.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "MacBook Neo pricing begins at $599.",
      "Dependable performance for work, school, and daily tasks.",
      "Applies to select configurations.",
      "Grab it before the offer ends."
    ]
  },
  {
    id: "c3",
    label: "FLAT",
    value: "20% OFF",
    title: "Apple Promo Code: Flat 20% Student Discount",
    desc: "Students can save big on select Apple products with this exclusive deal.",
    verified: "Verified",
    userType: "Students",
    validTill: "30 Nov 2026",
    bullets: [
      "Take a flat 20% off qualifying products.",
      "You may need to verify your student status to redeem it.",
      "Pay less on eligible Apple devices.",
      "Offer available for a short time only."
    ]
  },
  {
    id: "c4",
    label: "FROM",
    value: "$999",
    title: "Apple Discount Code: MacBook Air From $999",
    desc: "Step up to a MacBook Air with prices starting at $999.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "MacBook Air starts at $999.",
      "Slim, light build that suits work and study.",
      "Several eligible configurations to choose from.",
      "Special pricing for a limited time."
    ]
  },
  {
    id: "c5",
    label: "FROM",
    value: "$699",
    title: "Apple Discount Code: iPad Air From $699",
    desc: "The powerful iPad Air can be yours starting at $699.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "iPad Air begins at $699.",
      "Great for school, creative projects, and streaming.",
      "Choose from eligible storage sizes and colors.",
      "Available for a limited time."
    ]
  },
  {
    id: "c6",
    label: "FROM",
    value: "$1,899",
    title: "Apple Voucher Code: MacBook Pro From $1,899",
    desc: "Get pro-level power with a MacBook Pro starting at $1,899.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "MacBook Pro starts at $1,899.",
      "Built for heavy-duty creative and professional work.",
      "Multiple configurations to pick from.",
      "Deal valid for a limited period."
    ]
  },
  {
    id: "c7",
    label: "FROM",
    value: "$359",
    title: "Apple Voucher Code: Apple Watch Series 11 From $359",
    desc: "Apple Watch Series 11 is available at prices starting from $359.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Series 11 begins at $359.",
      "Easily monitor your fitness, health, and everyday activity.",
      "Offered in select models and finishes.",
      "Limited-time pricing in effect."
    ]
  },
  {
    id: "c8",
    label: "FROM",
    value: "$799",
    title: "Apple Referral Code: iPhone 16 From $799",
    desc: "Upgrade to the iPhone 16 with prices starting at $799.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "iPhone 16 starts at $799.",
      "Enjoy powerful camera and performance features.",
      "Select from eligible storage options.",
      "Available for a limited time."
    ]
  },
  {
    id: "c9",
    label: "FROM",
    value: "$199",
    title: "Apple Referral Code: Apple TV 4K From $199",
    desc: "Bring Apple TV 4K home for as little as $199.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Apple TV 4K begins at $199.",
      "Stream your favorite content in high quality.",
      "Works with supported Apple services.",
      "Available while this offer lasts."
    ]
  },
  {
    id: "c10",
    label: "FROM",
    value: "$1,099",
    title: "Apple Cashback Offers: iPhone 17 Pro From $1,099",
    desc: "Pick up the latest iPhone 17 Pro starting at $1,099.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "iPhone 17 Pro starts at $1,099.",
      "Pro-grade features and top-tier performance.",
      "Offered in select storage options.",
      "Limited-time pricing available."
    ]
  },
  {
    id: "c11",
    label: "DEAL",
    value: "$49",
    title: "Apple Cashback Offers: iPhone 17 Silicone Case for $49",
    desc: "Keep your phone safe with Apple’s MagSafe-compatible silicone case.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the iPhone 17 Silicone Case with MagSafe for $49.",
      "Made to fit compatible iPhone 17 models.",
      "Offers a soft, secure grip and dependable protection.",
      "Available in select colors."
    ]
  },
  {
    id: "c12",
    label: "FROM",
    value: "$39.95",
    title: "Apple Wallet Offers: Native Union Ultralight Sleeve From $39.95",
    desc: "Protect your MacBook with Native Union’s featherweight sleeve.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Native Union Ultralight Sleeve starts at $39.95.",
      "Fits 13-inch and 14-inch MacBook models.",
      "Slim design guards against everyday scratches and wear.",
      "Offered for a limited time."
    ]
  }
];
