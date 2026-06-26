export interface StoreEntry {
  name: string;
  id: string;
  logo: string;
  category: string;
  coupons: number;
  discount: string;
  popular: boolean;
}

export const allStores: StoreEntry[] = [
  { name: "Stubhub",         id: "stubhub-coupon-code",         category: "More",        coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",        discount: "Flat 10% OFF",     popular: false },
  { name: "Viagogo",         id: "viagogo-coupon-code",         category: "More",        coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp",         discount: "Starting at $332", popular: false },
  { name: "Latam Airlines",  id: "latam-airlines-coupon-code",  category: "Travel",      coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp",  discount: "Up to 40% OFF",    popular: false },
  { name: "Rayneo",          id: "rayneo-coupon-code",          category: "Electronics", coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",          discount: "Save $130 OFF",    popular: false },
  { name: "Driffle",         id: "driffle-coupon-code",         category: "More",        coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",         discount: "Up to 95% OFF",    popular: false },
  { name: "Lyca Mobile",     id: "lyca-mobile-coupon-code",     category: "More",        coupons: 11, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",     discount: "Up to 69% OFF",    popular: false },
  { name: "Bluehost",        id: "bluehost-coupon-code",        category: "More",        coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",        discount: "Up to 69% OFF",    popular: false },
  { name: "Reolink",         id: "reolink-coupon-code",         category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp",         discount: "Up to 50% OFF",    popular: false },
  { name: "Envato Elements", id: "envato-elements-coupon-code", category: "More",        coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp",          discount: "Up to 50% OFF",    popular: false },
  { name: "Sintra",          id: "sintra-coupon-code",          category: "More",        coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp",          discount: "Up to 70% OFF",    popular: false },
  { name: "Fytoo",           id: "fytoo-coupon-code",           category: "Fashion",     coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp",                discount: "Frames From $1",   popular: false },
  { name: "TrainPal",        id: "trainpal-coupon-code",        category: "Travel",      coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp",             discount: "Up to 50% OFF",    popular: false },
  { name: "Emergent",        id: "emergent-coupon-code",        category: "More",        coupons: 2,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198036/emergent-coupon-code_oeaxoh.webp",       discount: "Up to 85% OFF",    popular: false },
  { name: "Unipin",          id: "unipin-coupon-code",          category: "More",        coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp",       discount: "Top-Ups From $0.94", popular: false },
  { name: "Zen Hotels",      id: "zen-hotels-coupon-code",      category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp",      discount: "$35 OFF Bookings", popular: false },
  { name: "Factor75",        id: "factor75-coupon-code",        category: "More",        coupons: 2,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp",        discount: "Up to $130 OFF",   popular: false },
  { name: "Openart.AI",      id: "openart-coupon-code",         category: "More",        coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", discount: "Up to 27% OFF",    popular: false },
  { name: "Talkpal.AI",      id: "talkpal-coupon-code",         category: "More",        coupons: 2,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp",        discount: "Save Up to 69%",   popular: false },
  { name: "Nuagewear",       id: "nuage-coupon-code",       category: "More",        coupons: 12, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg",          discount: "Up to 39% OFF",    popular: false },
  { name: "Ballboyz",        id: "ballboyz-coupon-code",        category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg",        discount: "Up to 50% OFF",    popular: false },
  { name: "Cariloha",        id: "cariloha-coupon-code",        category: "More",        coupons: 11, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg",        discount: "Up to 50% OFF",    popular: false },
  { name: "Obsbot",          id: "obsbot-coupon-code",          category: "More",        coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg",          discount: "From $75",         popular: false },
  { name: "Outfitr",         id: "outfitr-coupon-code",         category: "More",        coupons: 11, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg",        discount: "Up to 62% OFF",    popular: false },
  { name: "DeerValley",      id: "deer-valley-coupon-code",     category: "More",        coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg",     discount: "Up to 60% OFF",    popular: false },
];





