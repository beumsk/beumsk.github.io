module.exports = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
  }