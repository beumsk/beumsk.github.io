import fs, { writeFileSync } from 'fs';
import path from 'path';
import prettier from 'prettier';
import matter from 'gray-matter';

export const getPosts = () => {
  const files = fs.readdirSync(path.join('pages/blog'));
  const allPostsData = files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const fileContents = fs.readFileSync(path.join(`pages/blog/${file}`), 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title,
        intro: data.intro || '',
        img: `/images/posts/${slug}.jpg`,
        date: data.date || '',
        categories: data.categories || '',
        link: `/blog/${slug}`,
        url: `https://remybeumier.be/blog/${slug}`,
      };
    })
    .filter((x) => x.title);
  return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
};

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const posts = getPosts();

  const fileContent = `export const posts = ${JSON.stringify(posts)}`;

  const formatted = prettier.format(fileContent, {
    ...prettierConfig,
    parser: 'babel',
  });

  writeFileSync('data/posts.js', formatted);
}

generate();
