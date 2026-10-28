import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // Admin project form uploads images through a server action.
    serverActions: { bodySizeLimit: "25mb" },
  },
};

export default nextConfig;
