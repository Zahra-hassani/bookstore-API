import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.thalia.media",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.thuprai.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.commonsensemedia.org",
        port: "",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
