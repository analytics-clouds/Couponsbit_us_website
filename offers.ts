// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const UBER_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'RIDES',
    title: 'Get Up to 50% Off on Your Next Uber Ride',
    description: 'Save on UberGo, Premier, and Auto rides across your city with this limited-time ride discount.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'FIRST RIDE',
    title: 'Flat ₹100 Off on Your First Uber Ride',
    description: 'New to Uber? Get a flat discount on your first ride booked through the Uber app.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'UBER EATS',
    title: 'Up to 40% Off on Uber Eats Food Orders',
    description: 'Order from your favorite restaurants and get up to 40% off on select Uber Eats orders.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'AUTO & MOTO',
    title: 'Up to 30% Off on Uber Auto & Uber Moto Rides',
    description: 'Budget-friendly commutes with discounts on Uber Auto and Uber Moto rides in select cities.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FIRST 3 RIDES',
    title: 'Flat 50% Off on First 3 Uber Rides | Up to ₹100 Per Ride',
    description: '50% off on your first 3 ride bookings, up to ₹100 per ride.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF9900]',
    color: '#FF9900',
    type: 'UBER AUTO',
    title: 'Uber Auto: Flat 50% Off on First 3 Auto Bookings',
    description: 'Flat 50% off on your first 3 Uber Auto bookings, up to ₹100 per ride.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#222222]',
    color: '#222222',
    type: 'UBER MOTO',
    title: 'Uber Moto: Flat 50% Off on First 3 Bike Rides',
    description: 'Flat 50% off on Uber Moto — one of the most affordable ride options across metro cities. Valid on your first 3 bookings, up to ₹100 per ride.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'SOUTH INDIA',
    title: 'South India City Deals: Flat 50% Off in Hyderabad, Bengaluru & Chennai',
    description: 'Flat 50% off on rides across Hyderabad, Bengaluru, and Chennai — valid on the first 3 bookings for new users.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  }
];