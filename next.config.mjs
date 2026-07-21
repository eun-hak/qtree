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
            // 예전 카테고리 URL → 홈으로 통합 (청소 시절 분류 포함)
            { source: '/category/services', destination: '/', permanent: true },
            { source: '/category/kitchen', destination: '/', permanent: true },
            { source: '/category/bathroom', destination: '/', permanent: true },
            { source: '/category/laundry', destination: '/', permanent: true },
            { source: '/category/appliance', destination: '/', permanent: true },
            { source: '/category/living', destination: '/', permanent: true },
            { source: '/category/safety', destination: '/', permanent: true },
            { source: '/category/lookup', destination: '/', permanent: true },
            { source: '/category/apply', destination: '/', permanent: true },
            { source: '/category/tools', destination: '/', permanent: true },
            { source: '/category/guide', destination: '/', permanent: true },
            { source: '/category/strategy', destination: '/', permanent: true },
            { source: '/category/review', destination: '/', permanent: true },
        ];
    },

    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
};

export default nextConfig;
