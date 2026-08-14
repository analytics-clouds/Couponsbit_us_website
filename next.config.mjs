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
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/stores/nuagewear-coupon-code',
        destination: '/stores/nuage-discount-code',
        permanent: true,
      }
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
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com https://translate.google.com https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://www.gstatic.com",
      "img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com https://www.google.com https://www.gstatic.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://translate.googleapis.com https://translate.google.com https://vitals.vercel-insights.com",
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