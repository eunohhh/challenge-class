/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dnvefa72aowie.cloudfront.net",
            },
            {
                protocol: "https",
                hostname: "d1unjqcospf8gs.cloudfront.net",
            },
        ],
    },
};

export default nextConfig;
