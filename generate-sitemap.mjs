import { writeFileSync } from 'fs';
import prettier from 'prettier';
import projects from './data/projects.js';
import posts from './data/posts.js';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const baseUrl = 'https://remybeumier.be';
  const pages = [
    { link: '', modified: '2023-05-29', freq: 'yearly', prio: '1.0' },
    { link: '/resume-remy-beumier', modified: '2023-04-27', freq: 'monthly', prio: '0.8' },
    { link: '/remy-beumier-resume.pdf', modified: '2023-04-27', freq: 'monthly', prio: '0.8' },
    { link: '/projects', modified: '2023-05-29', freq: 'monthly', prio: '0.8' },
    { link: '/blog', modified: '2023-05-29', freq: 'monthly', prio: '0.8' },
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
