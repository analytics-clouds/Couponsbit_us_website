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

export const SNAPFISH_COUPONS: Coupon[] = [
  {
    "id": "c-1",
    "topLabel": "SAVE",
    "mainValue": "70%",
    "offText": "CUSTOM CARDS",
    "title": "Snapfish Discount Code: 70% Off Custom Cards",
    "description": "Make personalized holiday cards with Snapfish and save 70% for a limited time.",
    "points":[
      "Take 70% off custom cards and share holiday cheer for less.",
      "Pick from many card designs for any occasion.",
      "Printed on thick, high-quality cardstock for a polished look.",
      "A thoughtful way to send warm wishes to family and friends."
    ]
  },
  {
    "id": "c-2",
    "topLabel": "SAVE",
    "mainValue": "65%",
    "offText": "PHOTO BOOKS",
    "title": "Snapfish Discount Code: 65% Off Photo Books",
    "description": "Turn your favorite memories into lasting keepsakes with photo books at 65% off.",
    "points":[
      "Save 65% on custom photo books for any special occasion.",
      "Choose your own layouts, covers, and pages, and fill them with your photos.",
      "Rich printing gives you bright colors and sharp images.",
      "Ideal for saving vacations, weddings, and family milestones."
    ]
  },
  {
    "id": "c-3",
    "topLabel": "B1G2",
    "mainValue": "FREE",
    "offText": "CALENDARS",
    "title": "Snapfish Promo Code: Buy 1, Get 2 FREE Calendars",
    "description": "Make a custom calendar and get two more at no extra cost.",
    "points":[
      "Buy 1 calendar and get 2 FREE for a limited time.",
      "Add your favorite photos to every month.",
      "A great gift for family, friends, and coworkers.",
      "A handy way to stay organized while showing off your best memories."
    ]
  },
  {
    "id": "c-4",
    "topLabel": "JUST",
    "mainValue": "1¢",
    "offText": "4X6 PRINTS",
    "title": "Snapfish Promo Code: 4x6 Prints for Just 1¢ Each",
    "description": "Print your favorite moments for less with 4x6 photo prints at just $0.01 each.",
    "points":[
      "Order 4x6 prints for only 1¢ each.",
      "Quality printing keeps every detail and color crisp.",
      "Great for vacation shots, family memories, and special events.",
      "An affordable way to start or refresh your photo collection."
    ]
  },
  {
    "id": "c-5",
    "topLabel": "SAVE",
    "mainValue": "70%",
    "offText": "5X7 CARDS",
    "title": "Snapfish Discount Deals: 70% Off 5x7 Standard Cardstock Cards",
    "description": "Create custom 5x7 cardstock cards for as little as $0.75 each.",
    "points":[
      "Save 70% and pay from $0.75 per card instead of the regular $2.50.",
      "Sturdy cardstock gives your cards a clean, professional feel.",
      "Add your own photos and a personal message.",
      "Great for holiday cards, invitations, and announcements."
    ]
  },
  {
    "id": "c-6",
    "topLabel": "FROM",
    "mainValue": "$1.99",
    "offText": "PHOTO MUGS",
    "title": "Snapfish Discount Deals: Photo Mugs From Just $1.99",
    "description": "Design your own coffee mug for only $1.99 and save big.",
    "points":[
      "Get an 11 oz. photo mug for $1.99 instead of the regular $15.99.",
      "Save 87% on custom mugs for home or the office.",
      "Add your favorite photos, artwork, or your own design.",
      "A thoughtful gift for birthdays, holidays, and other special days."
    ]
  },
  {
    "id": "c-7",
    "topLabel": "SAVE",
    "mainValue": "73%",
    "offText": "HARDCOVER BOOKS",
    "title": "Snapfish Sale: 73% Off Hardcover Photo Books",
    "description": "Keep your favorite memories safe in a hardcover photo book for just $11.99.",
    "points":[
      "Save 73% and pay $11.99 for an 8x11 hardcover photo book, down from $44.99.",
      "The sturdy hardcover protects your memories for years.",
      "Customize every page with photos and your own captions.",
      "Great for family albums, weddings, vacations, and celebrations."
    ]
  },
  {
    "id": "c-8",
    "topLabel": "SAVE",
    "mainValue": "77%",
    "offText": "PHOTO TILES",
    "title": "Snapfish Sale: 77% Off Matte Photo Tiles",
    "description": "Brighten up your walls with custom matte photo tiles from just $1.99.",
    "points":[
      "Save 77% and pay $1.99 for 8x8 matte photo tiles, down from $8.99.",
      "The lightweight tiles are easy to arrange and move around.",
      "Show off family photos, travel memories, or artwork.",
      "An affordable way to add personal touches to your home."
    ]
  },
  {
    "id": "c-9",
    "topLabel": "UP TO",
    "mainValue": "72%",
    "offText": "CANVAS PRINTS",
    "title": "Snapfish Discount Offers: Up to 72% Off Canvas Prints",
    "description": "Turn your favorite photos into eye-catching canvas wall art and save up to 72%.",
    "points":[
      "Pay $13.99 for an 8x10, $19.99 for an 11x14, or $29.99 for a 16x20.",
      "Save up to 72% on quality unframed canvas prints.",
      "Sharp printing brings out vivid colors and fine detail.",
      "Perfect for decorating your home or making a personal gift."
    ]
  },
  {
    "id": "c-10",
    "topLabel": "SAVE",
    "mainValue": "60%",
    "offText": "SMS ALERTS",
    "title": "Snapfish Discount Offers: 60% Off When You Sign Up for SMS",
    "description": "Join Snapfish text alerts today and unlock special savings.",
    "points":[
      "Sign up for SMS and get 60% off your next eligible order.",
      "Hear about exclusive promotions and limited-time deals first.",
      "Stay up to date on seasonal sales and offers made for you.",
      "An easy way to save more on photo gifts, prints, and home decor."
    ]
  }
];
