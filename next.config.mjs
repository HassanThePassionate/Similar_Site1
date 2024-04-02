/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "mmbiz.qpic.cn",
      },
      {
        protocol: "https",
        hostname: "d4.alternativeto.net",
      },
      {
        protocol: "https",
        hostname: "static.semrush.com",
      },
    ],
  },
};

export default nextConfig;
