import { LEGACY_NUMERIC_POST_REDIRECTS } from './src/app/data/legacy-post-redirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { unoptimized: true },
    
    compress: true,
    
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
        ];
    },
    
    async redirects() {
        const legacyPostRedirects = LEGACY_NUMERIC_POST_REDIRECTS.map(({ id, slug }) => ({
            source: `/post/${id}`,
            destination: `/post/${slug}`,
            permanent: true,
        }));

        return [
            ...legacyPostRedirects,
            { source: '/post/4', destination: '/post/burnt-pot-baking-soda-clean', permanent: true },
            { source: '/category/lookup', destination: '/category/services', permanent: true },
            { source: '/category/apply', destination: '/category/services', permanent: true },
            { source: '/category/tools', destination: '/category/services', permanent: true },
            { source: '/category/guide', destination: '/category/services', permanent: true },
            { source: '/category/strategy', destination: '/category/services', permanent: true },
            { source: '/category/review', destination: '/category/services', permanent: true },
        ];
    },

    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
};

export default nextConfig;
