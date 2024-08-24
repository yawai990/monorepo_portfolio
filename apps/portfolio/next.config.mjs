/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui', "@turbo-with-tailwind/design-system",
        "@turbo-with-tailwind/ui",]
};

export default nextConfig;
