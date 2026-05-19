/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 👇 GitHub Pagesのリポジトリ名に合わせてパスを調整する設定
  // 本番環境（GitHub Pages）のときだけ「/リポジトリ名」を頭に付与する
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-web/' : '',
};

export default nextConfig;