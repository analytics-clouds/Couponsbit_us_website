export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText?: string;
  title: string;
  description: string;
  code?: string;
  points: string[];
  affiliateUrl: string;
  verified?: boolean;
  userType?: string;
  validTill?: string;
}

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=4774&pub_id=1015";

export const RINGCONN_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "Starting From",
    mainValue: "$299",
    offText: "",
    title: "RingConn Discount Code – RingConn Gen 2 Smart Ring from $299",
    description: "Get the RingConn Gen 2 Smart Ring starting at just $299.",
    affiliateUrl: STORE_URL,
    points: [
      "Buy the RingConn Gen 2 Smart Ring from only $299.",
      "Track your sleep, wellness, and daily activity.",
      "Enjoy a light design with long battery life.",
      "Great for everyday health tracking.",
    ],
  },
  {
    id: "c2",
    topLabel: "Starting From",
    mainValue: "$349",
    offText: "",
    title: "RingConn Discount Code – RingConn Gen 3 Smart Ring from $349",
    description: "Move up to the newest RingConn Gen 3 Smart Ring, starting at $349.",
    affiliateUrl: STORE_URL,
    points: [
      "Get the RingConn Gen 3 Smart Ring from $349.",
      "Get advanced health and sleep tracking features.",
      "Made for all-day comfort and durability.",
      "Perfect for fitness and wellness fans.",
    ],
  },
  {
    id: "c3",
    topLabel: "Starting From",
    mainValue: "$199",
    offText: "",
    title: "RingConn Promo Code – RingConn Gen 2 Air from $199",
    description: "Pick up the lightweight RingConn Gen 2 Air, starting at just $199.",
    affiliateUrl: STORE_URL,
    points: [
      "Buy the RingConn Gen 2 Air from only $199.",
      "Enjoy a slim, comfortable design.",
      "Keep an eye on your daily health and sleep data.",
      "Ideal for first-time smart ring users.",
    ],
  },
  {
    id: "c4",
    topLabel: "Gift Card",
    mainValue: "$369",
    offText: "",
    title: "RingConn Promo Code – RingConn Gen 3 Gift Card for $369",
    description: "Give the newest RingConn Gen 3 as a gift with a $369 gift card.",
    affiliateUrl: STORE_URL,
    points: [
      "Buy a RingConn Gen 3 Gift Card for $369.",
      "A great gift for health and fitness lovers.",
      "Use it toward the newest smart ring.",
      "Great for birthdays, holidays, and special occasions.",
    ],
  },
  {
    id: "c5",
    topLabel: "Only",
    mainValue: "$39.90",
    offText: "",
    title: "RingConn Voucher Code – Charging Dock for Only $39.90",
    description: "Keep your smart ring charged with the RingConn Charging Dock.",
    affiliateUrl: STORE_URL,
    points: [
      "Buy the RingConn Charging Dock for just $39.90.",
      "Made just for RingConn smart rings.",
      "Small and easy to take along when you travel.",
      "A handy accessory for everyday charging.",
    ],
  },
  {
    id: "c6",
    topLabel: "SAVE",
    mainValue: "20%",
    offText: "OFF",
    title: "RingConn Voucher Code – 20% Off on Select Items",
    description: "Save 20% on select RingConn products.",
    affiliateUrl: STORE_URL,
    points: [
      "Get 20% off eligible RingConn products.",
      "Applied to your order at checkout.",
      "Available on select smart rings and accessories.",
      "Great for saving more on your purchase.",
    ],
  },
  {
    id: "c7",
    topLabel: "GET",
    mainValue: "10%",
    offText: "OFF",
    title: "RingConn Coupon Code – 10% Off Storewide",
    description: "Get 10% off your whole RingConn order.",
    affiliateUrl: STORE_URL,
    points: [
      "Save 10% storewide.",
      "Valid on eligible RingConn products.",
      "The discount is applied at checkout.",
      "Perfect for first-time and returning customers.",
    ],
  },
];

