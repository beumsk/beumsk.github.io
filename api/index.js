import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const defaultImage = 'https://via.placeholder.com/400x200';

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
        img: data.img || defaultImage,
        date: data.date || '',
        categories: data.categories || '',
        link: `/blog/${slug}`,
      };
    })
    .filter((x) => x.title);
  return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
};
