/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'i.imgur.com',
            port: '',
            pathname: '/**.jpg',
          },
        ],
      },
};

export default nextConfig;
