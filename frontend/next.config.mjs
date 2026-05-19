/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 静的HTMLとして出力する
    images: {
        unoptimized: true, // 画像最適化をオフ
    },
};

export default nextConfig;