/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s.gravatar.com",
        // その他のパターンを追加する場合はここに追加します
      },
    ],
  },
};

module.exports = nextConfig;
