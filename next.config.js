// const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';/

module.exports = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    },
    basePath: '/rb',
    assetPrefix: '/rb',
  }