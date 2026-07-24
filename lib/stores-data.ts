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
  { name: "Lumibrick",       id: "lumibrick-coupon-code",       category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp",            discount: "From $56.99",      popular: false },
  { name: "Krisp.AI",        id: "krisp-coupon-code",           category: "More",        coupons: 4,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp",               discount: "Save 50% OFF",     popular: false },
  { name: "Kiwi.com",        id: "kiwi-coupon-code",            category: "More",        coupons: 4,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp",                discount: "Up to $580 Rewards", popular: false },
  { name: "HP",              id: "hp-coupon-code",              category: "Electronics", coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp",           discount: "Up to 69% OFF",    popular: false },
  { name: "Dell",            id: "dell-coupon-code",            category: "Electronics", coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp",         discount: "Up to 69% OFF",    popular: false },
  { name: "Agoda",           id: "agoda-coupon-code",           category: "Travel",      coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg",          discount: "Up to 69% OFF",    popular: false },
  { name: "Beelink",         id: "beelink-coupon-code",         category: "Electronics", coupons: 9, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg",       discount: "Up to 35% OFF",    popular: false },
  { name: "Kinguin",         id: "kinguin-coupon-code",         category: "More",        coupons: 13, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg",       discount: "Up to 97% OFF",    popular: false },
  { name: "Cheapflights",    id: "cheapflights-coupon-code",    category: "Travel",      coupons: 11, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg", discount: "Up to 25% OFF",    popular: false },
  { name: "Expedia",         id: "expedia-coupon-code",         category: "Travel",      coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg",     discount: "Up to 40% OFF",    popular: false },
  { name: "Qatar Holidays",  id: "qatar-holidays-coupon-code",  category: "Travel",      coupons: 8, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg",       discount: "Up to 40% OFF",    popular: false },
  { name: "FlixBus Australia", id: "flixbus-australia-discount-code", category: "Travel",  coupons: 3, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp", discount: "Up to 50% OFF",    popular: false },
  { name: "McAfee",          id: "mcafee-discount-code",        category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp",              discount: "Up To 75% OFF",    popular: false },
  { name: "Budget",          id: "budget-discount-code",        category: "Travel",      coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp",               discount: "Up To 35% OFF",    popular: false },
  { name: "Avis",            id: "avis-discount-code",          category: "Travel",      coupons: 4,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp",                 discount: "Up To 20% OFF",    popular: false },
  { name: "RingConn",        id: "ringconn-discount-code",      category: "Electronics", coupons: 5,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp",             discount: "Starting From $199", popular: false },
  { name: "Oman Air",        id: "oman-air-discount-code",      category: "Travel",      coupons: 5,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/oman-air-logo_ozwu2c.webp",             discount: "Up To 50% OFF",    popular: false },
  { name: "UltaHost",        id: "ultahost-discount-code",      category: "More",        coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/ultahost-logo_zsnpu7.webp",             discount: "Up To 62% OFF",    popular: false },
  { name: "Wiskii",          id: "wiskii-discount-code",        category: "Fashion",     coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp",              discount: "Up To 60% OFF",    popular: false },
  { name: "Spirit Halloween", id: "spirit-halloween-discount-code", category: "More",     coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp",              discount: "Up To 75% OFF",    popular: false },
  { name: "Vooglam",         id: "vooglam-discount-code",       category: "Fashion",     coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp",              discount: "Eyeglasses From $65", popular: false },
  { name: "Geekbuying",      id: "geekbuying-discount-code",    category: "Electronics", coupons: 8,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp",           discount: "Up To 56% OFF",    popular: false },
  { name: "vegas",           id: "vegas-discount-code",         category: "Travel",      coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp",                discount: "Up To 35% OFF",    popular: false },
  { name: "Wish.com",        id: "wish-discount-code",          category: "More",        coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp",                discount: "Up To 60% OFF",    popular: false },
  { name: "Fireflyz",        id: "fireflyz-discount-code",      category: "Travel",      coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/firefly-logo_ju6n0p.webp",              discount: "One-Way Fares From $29", popular: false },
  { name: "Etihad",          id: "etihad-discount-code",        category: "Travel",      coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp",               discount: "Up To 30% OFF",    popular: false },
  { name: "Malaysia Airlines", id: "malaysia-airlines-discount-code", category: "Travel", coupons: 6,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp",             discount: "Up To 35% OFF",    popular: false },
  { name: "Oppo",            id: "oppo-discount-code",          category: "Electronics", coupons: 9,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/oppo-logo_umnpx7.webp",                 discount: "From $39",         popular: false },
  { name: "Inspiring Vacation", id: "inspiring-vacation-discount-code", category: "Travel", coupons: 9, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/inspiring-vacation-logo_mokiew.webp",  discount: "Up To 50% OFF",    popular: false },
  { name: "Radisson",        id: "radisson-discount-code",      category: "Travel",      coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp",             discount: "Up To 40% OFF",    popular: false },
  { name: "Philips",         id: "philips-discount-code",       category: "Electronics", coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp",              discount: "Save Up To £120",  popular: false },
  { name: "Airalo",          id: "airalo-discount-code",        category: "Travel",      coupons: 7,  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp",               discount: "USA eSIM From $4.50", popular: false },
  { name: "CarCovers",       id: "carcovers-discount-code",     category: "More",        coupons: 10, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp",             discount: "Save $30 OFF",     popular: false },
  { name: "Cheapflightsfares", id: "cheapflightsfares-discount-code", category: "Travel", coupons: 11, logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895741/chepflights-logo_wm46ul.webp",          discount: "Flights Under $99", popular: false },
];











