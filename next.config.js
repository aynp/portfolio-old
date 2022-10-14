/** @type {import('next').NextConfig} */

const mdx = require('@next/mdx');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: { images: { allowFutureImage: true } },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://raw.githubusercontent.com/aynp/resume/main/resume.pdf',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/aynp',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/aryanpathania03/',
        permanent: true,
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  }),
};
