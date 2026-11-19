export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const REST_COUPONS: Coupon[] = [
  {
    id: "rest1",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    title: "Rest Promo Code – Up to 30% Off Cooling Bedding",
    description: "Save up to 30% on selected Rest cooling bedding and sleepwear during the Rest sale.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Offers up to 30% off selected cooling bedding and sleep essentials.",
      "Covers bedding and sleepwear products.",
      "Available while the sale is running.",
      "The exact discount varies by product.",
    ],
  },
  {
    id: "rest2",
    topLabel: "FLAT",
    mainValue: "40%",
    offText: "OFF",
    title: "Rest Promo Code – Evercool Cooling Pajamas Shorts Set 40% Off",
    description: "Get 40% off the Rest Evercool Cooling Pajamas Shorts Set, now $77.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 40% off the Evercool Cooling Pajamas Shorts Set.",
      "The sale price is $77.",
      "A sleepwear set in a shorts style.",
      "Sizes and colors may sell out.",
    ],
  },
  {
    id: "rest3",
    topLabel: "FLAT",
    mainValue: "40%",
    offText: "OFF",
    title: "Rest Discount Code – Evercool Cooling Pajamas Pants Set 40% Off",
    description: "Get 40% off the Rest Evercool Cooling Pajamas Pants Set, starting at $83.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 40% off the Evercool Cooling Pajamas Pants Set.",
      "Prices start at $83.",
      "A sleepwear set in a full-length style.",
      "The final price depends on the size you choose.",
    ],
  },
  {
    id: "rest4",
    topLabel: "FLAT",
    mainValue: "25%",
    offText: "OFF",
    title: "Rest Discount Code – Evercool+ Cooling Starter Sheet Set 25% Off",
    description: "Get 25% off the Rest Evercool+ Cooling Starter Sheet Set, now $134.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 25% off the Evercool+ Cooling Starter Sheet Set.",
      "The sale price is $134.",
      "Includes sheets for your bed.",
      "Check the product page for sizes and what's in the set.",
    ],
  },
  {
    id: "rest5",
    topLabel: "FLAT",
    mainValue: "25%",
    offText: "OFF",
    title: "Rest Voucher Code – Evercool Cooling Comforter 25% Off",
    description: "Get 25% off the Rest Evercool Cooling Comforter.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 25% off the Evercool Cooling Comforter.",
      "Lowers the price of a seasonal bedding update.",
      "Available for a limited time.",
      "Check the product page for sizes and prices.",
    ],
  },
  {
    id: "rest6",
    topLabel: "FLAT",
    mainValue: "25%",
    offText: "OFF",
    title: "Rest Voucher Code – Evercool+ Cooling Starter Sheet Set 25% Off",
    description: "Get 25% off the Rest Evercool+ Cooling Starter Sheet Set, priced at $134.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 25% off the Evercool+ Cooling Starter Sheet Set.",
      "Priced at $134 during the offer.",
      "Adds cooling bedding to your setup.",
      "Available for a limited time.",
    ],
  },
  {
    id: "rest7",
    topLabel: "FLAT",
    mainValue: "15%",
    offText: "OFF",
    title: "Rest Coupon Code – Evercool Cooling Pillow 15% Off",
    description: "Get 15% off the Rest Evercool Cooling Pillow, now $169.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 15% off the Evercool Cooling Pillow.",
      "The sale price is $169.",
      "Adds a cooling pillow to your bedtime setup.",
      "Check the product page for sizes.",
    ],
  },
  {
    id: "rest8",
    topLabel: "FLAT",
    mainValue: "10%",
    offText: "OFF",
    title: "Rest Coupon Code – Evercool+ Cooling Pillowcases 10% Off",
    description: "Get 10% off the Rest Evercool+ Cooling Pillowcases, now $71.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 10% off the Evercool+ Cooling Pillowcases.",
      "The sale price is $71.",
      "Works with the rest of the Evercool+ bedding.",
      "Check the product page for sizes and what's included.",
    ],
  },
];
