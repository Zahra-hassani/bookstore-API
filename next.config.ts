import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pictures.abebooks.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.moviesanywhere.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.fnac-static.com",
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
