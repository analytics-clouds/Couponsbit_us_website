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

export const EDIBLE_COUPONS: Coupon[] = [
  {
    id: "c-1",
    topLabel: "SAVE",
    mainValue: "$15",
    offText: "FRUIT BOX",
    title: "Edible Arrangements Discount Code: Save on the Key Lime Cheesecake & Chocolate Dipped Fruit Box",
    description: "Surprise someone special with a tasty dessert and fruit gift box for just $29.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $15 and pay $29.99 for the Key Lime Cheesecake & Chocolate Dipped Fruit Box, down from $44.99.",
      "Eligible orders can arrive with 1-hour delivery.",
      "Comes with creamy key lime cheesecake and hand-dipped chocolate-covered fruit.",
      "A thoughtful gift for birthdays, celebrations, or last-minute surprises."
    ]
  },
  {
    id: "c-2",
    topLabel: "SAVE",
    mainValue: "$20",
    offText: "FRUIT PLATTER",
    title: "Edible Arrangements Discount Code: Save on the Key Lime Meet Sunshine Fruit Platter",
    description: "Add some brightness to any party with the fresh Key Lime Meet Sunshine Fruit Platter, just $34.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $20 and pay $34.99 instead of the regular $54.99.",
      "1-hour delivery is offered at participating locations.",
      "Packed with fresh fruit that is easy to share with family and friends.",
      "Great for parties, office get-togethers, and weekend celebrations."
    ]
  },
  {
    id: "c-3",
    topLabel: "SAVE",
    mainValue: "$25",
    offText: "BAKE PLATTER",
    title: "Edible Arrangements Promo Code: Save on the Best of the Bake Key Lime Cheesecake Platter",
    description: "Treat your guests to a sweet dessert spread with the Best of the Bake Key Lime Cheesecake Platter for just $49.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $25 and pay $49.99 instead of the regular $74.99.",
      "1-hour delivery makes gifting quick and easy.",
      "Features an assortment of sweet treats, including rich key lime cheesecake.",
      "A great centerpiece for holidays, birthdays, and family gatherings."
    ]
  },
  {
    id: "c-4",
    topLabel: "FROM",
    mainValue: "$31.98",
    offText: "GIFT BUNDLES",
    title: "Edible Arrangements Promo Code: Gift Bundles Starting at $31.98",
    description: "Mark life's special moments with a gift bundle that includes a fruit bouquet, a cupcake, and a balloon, starting at $31.98.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Bundles start at just $31.98.",
      "Pick from six sizes to match any occasion.",
      "Each bundle has fresh fruit, a tasty cupcake, and a festive balloon.",
      "An easy gift idea for birthdays, congratulations, or a simple thank-you."
    ]
  },
  {
    id: "c-5",
    topLabel: "UNLOCK",
    mainValue: "15%",
    offText: "OFF ORDER",
    title: "Edible Arrangements Discount Deals: Unlock 15% Off Your Order",
    description: "Add more to your cart at checkout and save even more.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Spend $50 more to unlock 15% off your eligible order.",
      "Stack the extra savings with select seasonal gift collections.",
      "Browse fruit arrangements, desserts, chocolate treats, and gift bundles.",
      "A smart way to get more value when sending gifts to family or friends."
    ]
  },
  {
    id: "c-6",
    topLabel: "FAST",
    mainValue: "1-HR",
    offText: "DELIVERY",
    title: "Edible Arrangements Discount Deals: Enjoy Fast 1-Hour Delivery",
    description: "Get fresh gifts to the door fast with same-day delivery options.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Select arrangements can be delivered within 1 hour.",
      "Ideal for last-minute birthdays, anniversaries, and celebrations.",
      "Fresh fruit gifts arrive nicely arranged and ready to enjoy.",
      "A handy choice when you need a thoughtful gift in a hurry."
    ]
  },
  {
    id: "c-7",
    topLabel: "SPECIAL",
    mainValue: "DEALS",
    offText: "FRUIT & DESSERTS",
    title: "Edible Arrangements Sale: Save on Fresh Fruit Gifts & Desserts",
    description: "Find limited-time deals on handcrafted fruit arrangements and gourmet desserts.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Shop marked-down fruit boxes, platters, cheesecakes, and gift bundles.",
      "Enjoy high-quality fruit paired with delicious sweet treats.",
      "Find gifts for birthdays, holidays, thank-yous, and other special occasions.",
      "Great for sharing with family, friends, or coworkers."
    ]
  },
  {
    id: "c-8",
    topLabel: "SAVE ON",
    mainValue: "SEASONAL",
    offText: "FAVORITES",
    title: "Edible Arrangements Sale: Shop Seasonal Favorites for Less",
    description: "Mark every occasion with seasonal gifts and limited-time online deals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Browse special savings on popular seasonal gift collections.",
      "Pick from fruit platters, chocolate-dipped treats, and bakery favorites.",
      "Choose delivery or pickup at participating locations.",
      "A great way to surprise loved ones without overspending."
    ]
  },
  {
    id: "c-9",
    topLabel: "SAVE ON",
    mainValue: "GOURMET",
    offText: "GIFTS",
    title: "Edible Arrangements Discount Offers: Save on Gourmet Gift Collections",
    description: "Discover fresh fruit gifts and handcrafted treats at special prices for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save across fruit arrangements, desserts, and celebration gifts.",
      "Customize your order with balloons, sweets, and thoughtful add-ons.",
      "Send a memorable gift with easy local delivery options.",
      "Perfect for birthdays, holidays, anniversaries, and everyday celebrations."
    ]
  },
  {
    id: "c-10",
    topLabel: "SEND",
    mainValue: "SWEET",
    offText: "GIFTS",
    title: "Edible Arrangements Discount Offers: Send Sweet Gifts for Less",
    description: "Make any celebration special with tasty gifts at friendly prices.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Check out special offers on fresh fruit, chocolate treats, and desserts.",
      "Order online for fast delivery or easy store pickup.",
      "Find gifts for every budget without giving up quality.",
      "A wonderful way to celebrate life's special moments and save more."
    ]
  }
];
