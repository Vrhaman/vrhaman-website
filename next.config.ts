import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/vendor/:vendorId",
        destination: "https://app.vrhaman.com/vendor/:vendorId",
        permanent: false, // 307 — keeps it flexible to change later
      },
    ];
  },
};

export default nextConfig;

