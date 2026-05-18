/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.realtor.ca',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
        {
          protocol: 'https',
          hostname: 'youriguide.com',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
        },
        {
          protocol: 'https',
          hostname: 'i.ytimg.com',
        },
        {
          protocol: 'https',
          hostname: 'youtu.be',
        },
        {
          protocol: 'https',
          hostname: 'findcalgaryhome.ca',
        }

    ],
  },
};

export default nextConfig;
