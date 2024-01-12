/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    baseUrl: 'https://easy-gold-gosling-belt.cyclic.app/api',
    MAIL_HOST: 'smtp.gmail.com',
    MAIL_USER: 'thcodehelp@gmail.com',
    MAIL_PASS: 'lkxnumemavvfkmjf',
    GOOGLE_SHEET_WEB_APP_URL:
      'https://script.google.com/macros/s/AKfycbx_lbwA4DzrUCO3H3FWzfmyMH2ZvRWc_HyP-T6MDG1c5J42oF6fqajOKDpNdjNp5XSk/exec',
    OST_API_URL: 'https://support.thecodehelp.in/api/http.php/tickets.json',
    OST_API_KEY: '2F19C0AD020CF0755505A5B93BD95F09',
  },
  images: {
    domains: ['codehelp.s3.ap-south-1.amazonaws.com', 'cdn.thecodehelp.in', 'dgyugonj9a9mu.cloudfront.net'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
