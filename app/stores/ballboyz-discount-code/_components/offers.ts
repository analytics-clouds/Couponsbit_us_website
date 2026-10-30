export interface Offer {
  id: string;
  label: string;
  value: string;
  sub?: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "SAVE",
    value: "$60",
    sub: "OFF",
    title: "BallBoyz Full Body Acne Gameplan – Save $60",
    desc: "Tackle face and body acne with BallBoyz's complete skincare system from head to toe.",
    bullets: [
      "Includes Body Scrub, Face Scrub, Moisturizer, Face Wipes and Pimple Patches",
      "Sale Price: $99.99 (Regular Price: $160.00) — Save $60 OFF",
      "Limited-time offer for USA customers",
    ],
  },
  {
    id: "c2",
    label: "SAVE",
    value: "50%",
    sub: "OFF",
    title: "BallBoyz BOYZ Face Acne Gameplan – #1 Seller",
    desc: "Take control of breakouts with BallBoyz's bestselling acne-fighting skincare bundle.",
    bullets: [
      "Includes Moisturizer, Face Scrub, Face Wipes & Pimple Patches for a complete routine",
      "Sale Price: $55.99 (Regular Price: $110.00) — Save 50% OFF",
      "Backed by BallBoyz's confidence guarantee for clearer-looking skin",
    ],
  },
  {
    id: "c3",
    label: "UP TO",
    value: "40%",
    sub: "OFF",
    title: "BallBoyz Summer Acne Sale – Up to 40% OFF",
    desc: "Beat summer breakouts with BallBoyz's acne-fighting essentials.",
    bullets: [
      "Shop bestselling pimple patches, face scrubs and skincare bundles",
      "Enjoy Up to 40% OFF during the Summer Acne Sale",
      "Limited-time promotion while supplies last",
    ],
  },
  {
    id: "c4",
    label: "TODAY ONLY",
    value: "$40",
    sub: "OFF",
    title: "BallBoyz Pimple Pack – $40 OFF Today Only",
    desc: "Get everything you need for clearer skin in one convenient acne-fighting bundle.",
    bullets: [
      "Includes Pimple Patches, Face Scrub and Skincare Essentials",
      "Sale Price: $29.99 (Regular Price: $69.99) — Save $40 OFF",
      "Perfect for targeting pimples, excess oil and clogged pores",
    ],
  },
  {
    id: "c5",
    label: "SPECIAL",
    value: "$69.99",
    title: "BallBoyz Face Acne Gameplan – Today Only Special",
    desc: "Upgrade your skincare routine with BallBoyz's top-rated acne solution.",
    bullets: [
      "Includes Moisturizer, Face Scrub, Face Wipes and Pimple Patches",
      "Sale Price: $69.99 (Regular Price: $110.00)",
      "Built to help reduce breakouts and support healthier-looking skin",
    ],
  },
  {
    id: "c6",
    label: "EXTRA",
    value: "20%",
    sub: "OFF",
    title: "BallBoyz Build Your Own Bundle – Extra 20% OFF",
    desc: "Customize your skincare routine with your favorite BallBoyz products.",
    bullets: [
      "Mix and match face scrubs, body scrubs, moisturizers and pimple patches",
      "Enjoy 20% OFF when you build your own bundle",
      "Available for a limited time only",
    ],
  },
  {
    id: "c7",
    label: "ESSENTIAL",
    value: "NEW",
    title: "BallBoyz Activated Charcoal Face Scrub",
    desc: "Deep-clean your skin with BallBoyz Activated Charcoal Face Scrub.",
    bullets: [
      "Helps remove dirt, oil and impurities for a refreshed feel",
      "Ideal for daily skincare and acne-prone skin",
      "Pair it with other BallBoyz products for maximum results",
    ],
  },
  {
    id: "c8",
    label: "ESSENTIAL",
    value: "NEW",
    title: "BallBoyz Zit Destroyer Body Scrub",
    desc: "Target body breakouts with the powerful BallBoyz Zit Destroyer Body Scrub.",
    bullets: [
      "Formulated to exfoliate and cleanse deeply for smoother-looking skin",
      "Great for chest, back and shoulder acne concerns",
      "A must-have addition to your grooming routine",
    ],
  },
];
