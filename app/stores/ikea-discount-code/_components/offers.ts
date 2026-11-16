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
    value: "40% OFF",
    title: "IKEA Promo Code: Up to 40% Off Bedsheets, Cushions & More",
    desc: "Freshen up your home with IKEA essentials and save up to 40% for a limited time.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 40% off select bedsheets, cushions, and home accessories.",
      "Browse stylish essentials made to fit every room.",
      "Shop quality products at lower prices for a limited time.",
      "A budget-friendly way to add comfort and style."
    ]
  },
  {
    id: "c2",
    label: "UP TO",
    value: "40% OFF",
    title: "IKEA Discount Code: Up to 40% Off Curtains",
    desc: "Give your living spaces a makeover with IKEA curtains at up to 40% off.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 40% on select curtain styles and designs.",
      "Pick options that suit different rooms and décor.",
      "Update your windows with quality furnishings at lower prices.",
      "Limited-time savings make this a great moment to redecorate."
    ]
  },
  {
    id: "c3",
    label: "UP TO",
    value: "40% OFF",
    title: "IKEA Coupon Code: Up to 40% Off Storage & Organizers",
    desc: "Tidy up every corner of your home and save up to 40%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get up to 40% off select storage boxes, shelves, and organizers.",
      "Keep your space neat with practical storage solutions.",
      "Find options for bedrooms, kitchens, home offices, and more.",
      "Shop while this limited-time offer lasts."
    ]
  },
  {
    id: "c4",
    label: "SAVE",
    value: "22% OFF",
    title: "IKEA Voucher Code: Save 22% on the ANNONS 5-Piece Cookware Set",
    desc: "Upgrade your kitchen with the ANNONS cookware set and save 22%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 22% off the ANNONS 5-piece cookware set.",
      "Add dependable cookware for everyday meals.",
      "A smart pick for a new kitchen or a cookware refresh.",
      "Available while this verified deal lasts."
    ]
  },
  {
    id: "c5",
    label: "UP TO",
    value: "35% OFF",
    title: "IKEA Deals: Up to 35% Off Furniture",
    desc: "Bring home modern IKEA furniture and save up to 35%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 35% on select furniture across multiple categories.",
      "Find pieces made for bedrooms, living rooms, and dining areas.",
      "Update your home with functional, Scandinavian-inspired design.",
      "Take advantage of this limited-time furniture promotion."
    ]
  },
  {
    id: "c6",
    label: "UP TO",
    value: "30% OFF",
    title: "IKEA Promo Code: Up to 30% Off Outdoor Furniture",
    desc: "Create a cozy outdoor space and save up to 30%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get up to 30% off select outdoor furniture.",
      "Choose from seating, tables, and garden essentials.",
      "Upgrade your patio, balcony, or backyard for less.",
      "Shop before this seasonal offer ends."
    ]
  },
  {
    id: "c7",
    label: "UP TO",
    value: "25% OFF",
    title: "IKEA Offer Code: Up to 25% Off Bookcases & Shelving Units",
    desc: "Add extra storage to your home with IKEA shelving at lower prices.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 25% on select bookcases and shelving units.",
      "Keep books, décor, and daily essentials organized.",
      "Find storage solutions for homes of any size.",
      "Limited-time pricing helps you save on organization."
    ]
  },
  {
    id: "c8",
    label: "UP TO",
    value: "40% OFF",
    title: "IKEA Discount Code: Up to 40% Off Lighting",
    desc: "Light up every room with stylish IKEA lighting and save up to 40%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 40% off select lighting products.",
      "Discover lamps, ceiling lights, and decorative fixtures.",
      "Set the mood at home with modern lighting options.",
      "Shop while these limited-time discounts last."
    ]
  },
  {
    id: "c9",
    label: "FLAT",
    value: "15% OFF",
    title: "IKEA Coupon Code: 15% Off Bedroom Furniture with a Bed Purchase",
    desc: "Finish your bedroom setup and pick up extra savings.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Buy an eligible bed and get 15% off select bedroom furniture.",
      "Pair it with matching wardrobes, dressers, or bedside tables.",
      "Save more when you furnish the whole bedroom at once.",
      "Available for a limited time."
    ]
  },
  {
    id: "c10",
    label: "SAVE",
    value: "17% OFF",
    title: "IKEA Voucher Code: Save 17% on the FÄRGKLAR Side Plate",
    desc: "Add stylish tableware to your dining collection and save 17%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 17% off the FÄRGKLAR side plate.",
      "Give your table a modern IKEA touch.",
      "An easy way to expand your current dinnerware set.",
      "Limited-time savings while stocks last."
    ]
  },
  {
    id: "c11",
    label: "UP TO",
    value: "70% OFF",
    title: "IKEA Offers: Up to 70% Off Sitewide",
    desc: "Score big savings across IKEA with discounts of up to 70%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% on products throughout the store.",
      "Shop furniture, home décor, kitchenware, and more.",
      "Find deals across many popular categories.",
      "Grab this sitewide promotion before it ends."
    ]
  },
  {
    id: "c12",
    label: "UP TO",
    value: "70% OFF",
    title: "IKEA Deals: Up to 70% Off Select Products",
    desc: "Find big savings on a wide range of IKEA favorites.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% on select IKEA products.",
      "Browse marked-down items across different collections.",
      "A great chance to upgrade your home for less.",
      "Available for a limited time while supplies last."
    ]
  },
  {
    id: "c13",
    label: "UP TO",
    value: "70% OFF",
    title: "IKEA Bank Offer: Up to 70% Off During the IKEA Family Sale",
    desc: "Enjoy exclusive IKEA Family Sale savings on select collections.",
    verified: "Verified",
    userType: "IKEA Family Members",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% during the IKEA Family Sale.",
      "Get special member pricing on select products.",
      "Explore discounts on furniture and home essentials.",
      "Shop early for the best selection."
    ]
  },
  {
    id: "c14",
    label: "SAVE",
    value: "30% OFF",
    title: "IKEA Cashback Offer: Save 30% on Plants & Pots",
    desc: "Freshen up your home with indoor plants and decorative pots at 30% off.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 30% off select plants and pots.",
      "Bring greenery into your living spaces for less.",
      "Choose from a variety of indoor plants and planters.",
      "A limited-time offer that’s perfect for a home refresh."
    ]
  }
];