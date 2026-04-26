import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "frame-src https://www.google.com https://maps.google.com https://maps.googleapis.com",
              "connect-src 'self' https:",
            ].join("; "),
          },
          // ✅ Good for SEO and security
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // ✅ When you add your domain, add it here so Next.js Image works across domains
  images: {
    domains: [],
    // Add "growthrealtech.com" here when domain is ready
  },

  // ✅ Redirects old Vercel URL to custom domain once connected
  async redirects() {
    const vUrl = process.env.VERCEL_URL;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!vUrl || !siteUrl) return [];
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: vUrl }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;