export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "FROM",
    value: "$61.49",
    title: "Mavis Discount Code – All-Season Tires Starting at $61.49",
    desc: "Give your car new tires at a low price with all-season options from Mavis.",
    bullets: [
      "All-season tires start at $61.49.",
      "Sold in popular sizes, including 215/65/R16.",
      "Made for steady performance all year round.",
      "Good value for daily driving."
    ]
  },
  {
    id: "c2",
    label: "UP TO",
    value: "$150 OFF",
    title: "Mavis Discount Code – Up to $150 Off on Select Tire Sets",
    desc: "Use this short-time offer to save on top tire sets.",
    bullets: [
      "Save up to $150 on select sets of 4 tires.",
      "This includes up to $100 in mail-in savings.",
      "Get an extra $50 instant discount when you buy online.",
      "Available for a short time."
    ]
  },
  {
    id: "c3",
    label: "SAVE",
    value: "$160 OFF",
    title: "Mavis Coupon Code – $160 Off on Select Tire Purchases",
    desc: "Put new tires on your car and save even more.",
    bullets: [
      "Save up to $160 on eligible sets of 4 tires.",
      "This includes an $80 mail-in rebate.",
      "You also get a $30 instant rebate.",
      "Get an extra $50 off when you buy online."
    ]
  },
  {
    id: "c4",
    label: "UP TO",
    value: "$250 OFF",
    title: "Mavis Coupon Code – Up to $250 Off on Select Tire Sets",
    desc: "Get the most savings on top tire brands.",
    bullets: [
      "Save up to $250 on select sets of 4 tires.",
      "This includes a $100 instant rebate.",
      "You also get a $100 mail-in rebate.",
      "Get an extra $50 instant discount when you buy online."
    ]
  },
  {
    id: "c5",
    label: "REWARD",
    value: "$25 BACK",
    title: "Mavis Promo Code – $25 Back on Every Mavis Tire",
    desc: "Get rewarded when you buy Mavis-brand tires.",
    bullets: [
      "Earn a $25 statement credit on each eligible Mavis-brand tire.",
      "Works with the Mavis Tire Credit Card.",
      "A good way to save on your next buys.",
      "Promotional offer for a short time."
    ]
  },
  {
    id: "c6",
    label: "SPECIAL",
    value: "0% INTEREST",
    title: "Mavis Promo Code – 6 Months No Interest Financing",
    desc: "Spread out the cost of car care with easy financing.",
    bullets: [
      "Get 6 months of no-interest financing on purchases of $199 or more.",
      "Works with the Mavis Tire Credit Card.",
      "Makes bigger purchases easier to afford.",
      "Open to eligible customers."
    ]
  },
  {
    id: "c7",
    label: "SAVE",
    value: "$35 OFF",
    title: "Mavis Offer Code – $35 Off on Wheel Alignment",
    desc: "Keep your car running straight with a professional alignment.",
    bullets: [
      "Save $35 on a wheel alignment.",
      "A free alignment check is included.",
      "Comes with a 90-day warranty.",
      "Valid for most cars."
    ]
  },
  {
    id: "c8",
    label: "SAVE",
    value: "$20 OFF",
    title: "Mavis Offer Code – $20 Off on Oil Changes",
    desc: "Look after your engine and save on regular service.",
    bullets: [
      "Save $20 on eligible oil change services.",
      "Valvoline Motor Oil is included.",
      "A free tire rotation comes with it.",
      "A visual brake check is also included."
    ]
  },
  {
    id: "c9",
    label: "SAVE",
    value: "25% OFF",
    title: "Mavis Voucher Code – 25% Off on Mufflers & Exhaust Service",
    desc: "Take care of your exhaust system and pay less for repairs.",
    bullets: [
      "Save 25% on muffler and exhaust services.",
      "A free visual exhaust check is included.",
      "A warranty is included on eligible services.",
      "Valid for most vehicles."
    ]
  },
  {
    id: "c10",
    label: "UP TO",
    value: "$80 OFF",
    title: "Mavis Voucher Code – Up to $80 Off on Brake Service",
    desc: "Drive with peace of mind and save on brake care.",
    bullets: [
      "Save up to $80 on brake service.",
      "A free visual brake check is included.",
      "Covers front or rear brake pads (or shoes) and labor.",
      "Valid for most cars."
    ]
  },
  {
    id: "c11",
    label: "UP TO",
    value: "$150 OFF",
    title: "Mavis Discount Offer – More Savings on Select Tire Brands",
    desc: "Find good savings on top tire brands for your car.",
    bullets: [
      "Save up to $150 on eligible tire purchases.",
      "Extra savings are available when you buy online.",
      "Good deals on select sets of four tires.",
      "Promotion for a short time."
    ]
  },
  {
    id: "c12",
    label: "UP TO",
    value: "$250 OFF",
    title: "Mavis Discount Offer – Up to $250 Off on Premium Tire Sets",
    desc: "Get new tires and save as much as you can.",
    bullets: [
      "Get instant and mail-in rebates together.",
      "Extra discounts are available when you buy online.",
      "Applies to select premium tire brands.",
      "Available while the promotion lasts."
    ]
  },
  {
    id: "c13",
    label: "REWARD",
    value: "$25 BACK",
    title: "Mavis Bank Offer – Earn Rewards with the Mavis Credit Card",
    desc: "Save more each time you buy Mavis-brand tires.",
    bullets: [
      "Earn $25 back on every eligible Mavis tire you buy.",
      "A special perk for Mavis Credit Card holders.",
      "Financing options are available on eligible purchases.",
      "Handy for future tire changes."
    ]
  },
  {
    id: "c14",
    label: "SPECIAL",
    value: "FINANCING",
    title: "Mavis Bank Offer – Finance Purchases Over $199",
    desc: "Handle repair costs with easy financing.",
    bullets: [
      "Get 6 months of no-interest financing on purchases over $199.",
      "Works with the Mavis Tire Credit Card.",
      "Good for tires, maintenance, and repairs.",
      "Credit approval is required."
    ]
  },
  {
    id: "c15",
    label: "SAVE",
    value: "AUTO CARE",
    title: "Mavis Gift Voucher – Savings on Essential Auto Services",
    desc: "Keep your car in good shape with seasonal service savings.",
    bullets: [
      "Save on wheel alignments, oil changes, brake service, and more.",
      "Service is done by certified technicians.",
      "Available for most vehicle models.",
      "Maintenance offers for a short time."
    ]
  },
  {
    id: "c16",
    label: "EXPLORE",
    value: "TIRE DEALS",
    title: "Mavis Gift Voucher – Tire Deals & Auto Care Savings",
    desc: "Pick up special offers on tires and car care.",
    bullets: [
      "Browse discounts on tires and auto services.",
      "Save with seasonal deals all year long.",
      "Good value on regular maintenance.",
      "Offers valid for a short time."
    ]
  }
];