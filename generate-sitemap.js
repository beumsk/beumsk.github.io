const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://beumsk.github.io',
  pagesDirectory: path.resolve(__dirname, 'out/'),
  targetDirectory: path.resolve(__dirname, 'out/'),
  ignoredPaths: ['styles', 'images', '404', 'index'],
  extraPaths: ['/'],
  ignoredExtensions: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'xml'],
  pagesConfig: {
    '/': {
      priority: '1'
    },
    '/projects': {
      priority: '0.8'
    },
    '/blog': {
      priority: '0.6'
    }
  }
});