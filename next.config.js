module.exports = {
  webpack5: false,
  target: 'serverless',
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: function (config) {
      config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
      config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
      return config
  },
}