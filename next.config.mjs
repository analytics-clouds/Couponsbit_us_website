/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com", "res.cloudinary.com"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480, 600],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },

      // coupon-code → discount-code redirects
      { source: '/stores/stubhub-coupon-code', destination: '/stores/stubhub-discount-code', permanent: true },
      { source: '/stores/viagogo-coupon-code', destination: '/stores/viagogo-discount-code', permanent: true },
      { source: '/stores/latam-airlines-coupon-code', destination: '/stores/latam-airlines-discount-code', permanent: true },
      { source: '/stores/rayneo-coupon-code', destination: '/stores/rayneo-discount-code', permanent: true },
      { source: '/stores/driffle-coupon-code', destination: '/stores/driffle-discount-code', permanent: true },
      { source: '/stores/lyca-mobile-coupon-code', destination: '/stores/lyca-mobile-discount-code', permanent: true },
      { source: '/stores/bluehost-coupon-code', destination: '/stores/bluehost-discount-code', permanent: true },
      { source: '/stores/reolink-coupon-code', destination: '/stores/reolink-discount-code', permanent: true },
      { source: '/stores/envato-elements-coupon-code', destination: '/stores/envato-elements-discount-code', permanent: true },
      { source: '/stores/sintra-coupon-code', destination: '/stores/sintra-discount-code', permanent: true },
      { source: '/stores/fytoo-coupon-code', destination: '/stores/fytoo-discount-code', permanent: true },
      { source: '/stores/trainpal-coupon-code', destination: '/stores/trainpal-discount-code', permanent: true },
      { source: '/stores/emergent-coupon-code', destination: '/stores/emergent-discount-code', permanent: true },
      { source: '/stores/unipin-coupon-code', destination: '/stores/unipin-discount-code', permanent: true },
      { source: '/stores/zen-hotels-coupon-code', destination: '/stores/zen-hotels-discount-code', permanent: true },
      { source: '/stores/factor75-coupon-code', destination: '/stores/factor75-discount-code', permanent: true },
      { source: '/stores/openart-coupon-code', destination: '/stores/openart-discount-code', permanent: true },
      { source: '/stores/talkpal-coupon-code', destination: '/stores/talkpal-discount-code', permanent: true },
      { source: '/stores/nuagewear-coupon-code', destination: '/stores/nuage-discount-code', permanent: true },
      { source: '/stores/ballboyz-coupon-code', destination: '/stores/ballboyz-discount-code', permanent: true },
      { source: '/stores/cariloha-coupon-code', destination: '/stores/cariloha-discount-code', permanent: true },
      { source: '/stores/obsbot-coupon-code', destination: '/stores/obsbot-discount-code', permanent: true },
      { source: '/stores/outfitr-coupon-code', destination: '/stores/outfitr-discount-code', permanent: true },
      { source: '/stores/deer-valley-coupon-code', destination: '/stores/deer-valley-discount-code', permanent: true },
      { source: '/stores/lumibrick-coupon-code', destination: '/stores/lumibrick-discount-code', permanent: true },
      { source: '/stores/krisp-coupon-code', destination: '/stores/krisp-discount-code', permanent: true },
      { source: '/stores/kiwi-coupon-code', destination: '/stores/kiwi-discount-code', permanent: true },
      { source: '/stores/hp-coupon-code', destination: '/stores/hp-discount-code', permanent: true },
      { source: '/stores/dell-coupon-code', destination: '/stores/dell-discount-code', permanent: true },
      { source: '/stores/agoda-coupon-code', destination: '/stores/agoda-discount-code', permanent: true },
      { source: '/stores/beelink-coupon-code', destination: '/stores/beelink-discount-code', permanent: true },
      { source: '/stores/kinguin-coupon-code', destination: '/stores/kinguin-discount-code', permanent: true },
      { source: '/stores/cheapflights-coupon-code', destination: '/stores/cheapflights-discount-code', permanent: true },
      { source: '/stores/expedia-coupon-code', destination: '/stores/expedia-discount-code', permanent: true },
      { source: '/stores/qatar-holidays-coupon-code', destination: '/stores/qatar-holidays-discount-code', permanent: true },
      { source: '/stores/flixbus-coupon-code', destination: '/stores/flixbus-discount-code', permanent: true },
      { source: '/stores/mcafee-coupon-code', destination: '/stores/mcafee-discount-code', permanent: true },
      { source: '/stores/budget-coupon-code', destination: '/stores/budget-discount-code', permanent: true },
      { source: '/stores/avis-coupon-code', destination: '/stores/avis-discount-code', permanent: true },
      { source: '/stores/ringconn-coupon-code', destination: '/stores/ringconn-discount-code', permanent: true },
      { source: '/stores/oman-air-coupon-code', destination: '/stores/oman-air-discount-code', permanent: true },
      { source: '/stores/ultahost-coupon-code', destination: '/stores/ultahost-discount-code', permanent: true },
      { source: '/stores/wiskii-coupon-code', destination: '/stores/wiskii-discount-code', permanent: true },
      { source: '/stores/spirit-halloween-coupon-code', destination: '/stores/spirit-halloween-discount-code', permanent: true },
      { source: '/stores/vooglam-coupon-code', destination: '/stores/vooglam-discount-code', permanent: true },
      { source: '/stores/geekbuying-coupon-code', destination: '/stores/geekbuying-discount-code', permanent: true },
      { source: '/stores/vegas-coupon-code', destination: '/stores/vegas-discount-code', permanent: true },
      { source: '/stores/wish-coupon-code', destination: '/stores/wish-discount-code', permanent: true },
      { source: '/stores/fireflyz-coupon-code', destination: '/stores/fireflyz-discount-code', permanent: true },
      { source: '/stores/etihad-coupon-code', destination: '/stores/etihad-discount-code', permanent: true },
      { source: '/stores/malaysia-airlines-coupon-code', destination: '/stores/malaysia-airlines-discount-code', permanent: true },
      { source: '/stores/oppo-coupon-code', destination: '/stores/oppo-discount-code', permanent: true },
      { source: '/stores/inspiring-vacation-coupon-code', destination: '/stores/inspiring-vacation-discount-code', permanent: true },
      { source: '/stores/radisson-coupon-code', destination: '/stores/radisson-discount-code', permanent: true },
      { source: '/stores/philips-coupon-code', destination: '/stores/philips-discount-code', permanent: true },
      { source: '/stores/airalo-coupon-code', destination: '/stores/airalo-discount-code', permanent: true },
      { source: '/stores/carcovers-coupon-code', destination: '/stores/carcovers-discount-code', permanent: true },
      { source: '/stores/sungait-coupon-code', destination: '/stores/sungait-discount-code', permanent: true },
      { source: '/stores/bluetti-coupon-code', destination: '/stores/bluetti-discount-code', permanent: true },
      { source: '/stores/dreame-coupon-code', destination: '/stores/dreame-discount-code', permanent: true },
      { source: '/stores/upwork-coupon-code', destination: '/stores/upwork-discount-code', permanent: true },
      { source: '/stores/hostinger-coupon-code', destination: '/stores/hostinger-discount-code', permanent: true },
      { source: '/stores/kerala-ayurveda-coupon-code', destination: '/stores/kerala-ayurveda-discount-code', permanent: true },
      { source: '/stores/klook-coupon-code', destination: '/stores/klook-discount-code', permanent: true },
      { source: '/stores/amazon-coupon-code', destination: '/stores/amazon-discount-code', permanent: true },

      // nuage location page redirects
      { source: '/stores/nuage-coupon-code', destination: '/stores/nuage-discount-code', permanent: true },
      { source: '/stores/nuage-coupon-code/new-york', destination: '/stores/nuage-discount-code/new-york', permanent: true },
      { source: '/stores/nuage-coupon-code/atlanta', destination: '/stores/nuage-discount-code/atlanta', permanent: true },
      { source: '/stores/nuage-coupon-code/austin', destination: '/stores/nuage-discount-code/austin', permanent: true },
      { source: '/stores/nuage-coupon-code/boston', destination: '/stores/nuage-discount-code/boston', permanent: true },
      { source: '/stores/nuage-coupon-code/dallas', destination: '/stores/nuage-discount-code/dallas', permanent: true },
      { source: '/stores/nuage-coupon-code/los-angeles', destination: '/stores/nuage-discount-code/los-angeles', permanent: true },
      { source: '/stores/nuage-coupon-code/miami', destination: '/stores/nuage-discount-code/miami', permanent: true },
      { source: '/stores/nuage-coupon-code/san-francisco', destination: '/stores/nuage-discount-code/san-francisco', permanent: true },
      { source: '/stores/nuage-coupon-code/seattle', destination: '/stores/nuage-discount-code/seattle', permanent: true },
      { source: '/stores/nuagewear-coupon-code/new-york', destination: '/stores/nuage-discount-code/new-york', permanent: true },
      { source: '/stores/nuagewear-coupon-code/atlanta', destination: '/stores/nuage-discount-code/atlanta', permanent: true },
      { source: '/stores/nuagewear-coupon-code/austin', destination: '/stores/nuage-discount-code/austin', permanent: true },
      { source: '/stores/nuagewear-coupon-code/boston', destination: '/stores/nuage-discount-code/boston', permanent: true },
      { source: '/stores/nuagewear-coupon-code/dallas', destination: '/stores/nuage-discount-code/dallas', permanent: true },
      { source: '/stores/nuagewear-coupon-code/los-angeles', destination: '/stores/nuage-discount-code/los-angeles', permanent: true },
      { source: '/stores/nuagewear-coupon-code/miami', destination: '/stores/nuage-discount-code/miami', permanent: true },
      { source: '/stores/nuagewear-coupon-code/san-francisco', destination: '/stores/nuage-discount-code/san-francisco', permanent: true },
      { source: '/stores/nuagewear-coupon-code/seattle', destination: '/stores/nuage-discount-code/seattle', permanent: true },
    ];
  },
  async headers() {
    // Origin inventory (why each host is here):
    // - res.cloudinary.com        -> all product/store images
    // - images.unsplash.com       -> notification-panel fallback image
    // - www.googletagmanager.com  -> Google Analytics loader script
    // - www.google-analytics.com / analytics.google.com / *.google-analytics.com
    //                             -> GA beacon/collect requests
    // - www.google.com            -> reCAPTCHA script + checkbox iframe,
    //                                Google Translate script, Google Maps
    //                                iframe embed on /contact
    // - translate.google.com      -> Google Translate widget script
    // - translate.googleapis.com  -> Google Translate's actual translation calls
    // - www.gstatic.com           -> internal resources both reCAPTCHA and
    //                                Google Translate load themselves (not
    //                                referenced directly in our code, but
    //                                required by those two Google widgets)
    // - vitals.vercel-insights.com -> @vercel/speed-insights reporting
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com https://translate.google.com https://www.gstatic.com https://www.clarity.ms",
      "style-src 'self' 'unsafe-inline' https://www.gstatic.com",
      "img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com https://www.google.com https://www.gstatic.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://translate.googleapis.com https://translate.google.com https://vitals.vercel-insights.com https://www.clarity.ms https://*.clarity.ms",
      "frame-src https://www.google.com",
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
          // Report-Only for now — logs violations to the browser console
          // without blocking anything. Flip to `Content-Security-Policy`
          // once confirmed clean (see report back to user).
          { key: 'Content-Security-Policy-Report-Only', value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;