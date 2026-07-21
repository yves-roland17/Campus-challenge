import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      // si tu charges des images externes (avatars, uploads...)
      { protocol: "https", hostname: "**.exemple.com" }
    ]
  },
  experimental: {
    // si tu utilises des Server Actions avec des payloads volumineux
    serverActions: {
      bodySizeLimit: "2mb"
    }
  }
};

export default nextConfig;
