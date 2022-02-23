import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby(
    [
      'pages/*.js',
      '!pages/_*.js',
      '!pages/404.js',
      'public/remy-beumier-resume.pdf',
      'pages/projects/index.js',
      'public/images/projects/*.jpg',
      '!public/images/projects/*-screen.*',
      'pages/blog/index.js',
      'posts/*.md',
    ],
    { stats: true }
  );
  const baseUrl = 'https://remybeumier.be';

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

      ${pages
        .map((page) => {
          const path = page.path
            .replace('pages/', '')
            .replace('index', '')
            .replace('public/images/projects/', 'projects/')
            .replace('public/', '')
            .replace('posts', 'blog')
            .replace('.js', '')
            .replace('.jpg', '')
            .replace('.md', '');

          return `
            <url>
              <loc>${baseUrl}/${path}</loc>
              <lastmod>${lastmod(page.stats.mtime, '2021-11-1')}</lastmod>
              <changefreq>${changefreq(path)}</changefreq>
              <priority>${priority(path)}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();

function lastmod(chosenDate, fileDate) {
  const mDate = new Date(fileDate);
  const launchDate = new Date(chosenDate);
  return mDate > launchDate ? convertDate(mDate) : convertDate(launchDate);
}

function priority(path) {
  switch (path) {
    case '':
      return '1.0';
    case 'resume-remy-beumier':
    case 'remy-beumier-resume.pdf':
    case 'projects/':
    case 'blog/':
      return '0.8';
    default:
      return '0.6';
  }
}

function changefreq(path) {
  switch (path) {
    case '':
    case 'blog/':
      return 'weekly';
    case 'resume-remy-beumier':
    case 'remy-beumier-resume.pdf':
    case 'projects/':
      return 'monthly';
    default:
      return 'yearly';
  }
}

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s;
  }
  var d = new Date(inputFormat);
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-'); // yyyy-mm-dd
}
