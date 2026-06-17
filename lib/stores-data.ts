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
  { name: "Stubhub",         id: "stubhub-coupon-code",         category: "More",        coupons: 7,  logo: "/stubhub-coupon-code.webp",        discount: "Flat 10% OFF",     popular: false },
  { name: "Viagogo",         id: "viagogo-coupon-code",         category: "More",        coupons: 6,  logo: "/viagogo-coupon-code.webp",         discount: "Starting at $332", popular: false },
  { name: "Latam Airlines",  id: "latam-airlines-coupon-code",  category: "Travel",      coupons: 6,  logo: "/latam-airlines-coupon-code.webp",  discount: "Up to 40% OFF",    popular: false },
  { name: "Rayneo",          id: "rayneo-coupon-code",          category: "Electronics", coupons: 8,  logo: "/reyneo-coupon-code.webp",          discount: "Save $130 OFF",    popular: false },
  { name: "Driffle",         id: "driffle-coupon-code",         category: "More",        coupons: 9,  logo: "/driffle-coupon-code.webp",         discount: "Up to 95% OFF",    popular: false },
  { name: "Lyca Mobile",     id: "lyca-mobile-coupon-code",     category: "More",        coupons: 11, logo: "/lyca-mobile-coupon-code.webp",     discount: "Up to 69% OFF",    popular: false },
  { name: "Bluehost",        id: "bluehost-coupon-code",        category: "More",        coupons: 10, logo: "/bluehost-coupon-code.webp",        discount: "Up to 69% OFF",    popular: false },
  { name: "Reolink",         id: "reolink-coupon-code",         category: "More",        coupons: 8,  logo: "/Reolink-coupon-code.webp",         discount: "Up to 50% OFF",    popular: false },
  { name: "Envato Elements", id: "envato-elements-coupon-code", category: "More",        coupons: 7,  logo: "/envato-coupon-code.webp",          discount: "Up to 50% OFF",    popular: false },
  { name: "Sintra",          id: "sintra-coupon-code",          category: "More",        coupons: 6,  logo: "/sintra-coupon-code.webp",          discount: "Up to 70% OFF",    popular: false },
];
