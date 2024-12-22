import { writeFileSync } from 'fs';
import prettier from 'prettier';
import posts from './data/posts.js';
import projects from './data/projects.js';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const baseUrl = 'https://remybeumier.be';
  const today = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date()
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  const pages = [
    { link: '', modified: today, freq: 'weekly', prio: '1.0' },
    { link: '/resume-remy-beumier', modified: today, freq: 'weekly', prio: '0.8' },
    { link: '/remy-beumier-resume.pdf', modified: today, freq: 'weekly', prio: '0.8' },
    { link: '/projects', modified: today, freq: 'weekly', prio: '0.8' },
    { link: '/blog', modified: today, freq: 'weekly', prio: '0.8' },
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

      ${[...pages, ...projects, ...posts]
        .map((item) => {
          return `
            <url>
              <loc>${baseUrl}${item.link}</loc>
              <lastmod>${item.modified || '2021-11-1'}</lastmod>
              <changefreq>${item.freq || 'yearly'}</changefreq>
              <priority>${item.prio || '0.6'}</priority>
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
