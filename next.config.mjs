import remarkFrontmatter from 'remark-frontmatter';

// Notice that we use the ES2015 import and export statement because we can only import remark-frontmatter, instead of using the require statement. So with that, you can rename next.config.js to next.config.mjs.
const conf = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default conf;
