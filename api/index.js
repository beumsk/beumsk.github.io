import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const localLink = href.startsWith(`http`);
  const html = linkRenderer.call(renderer, href, title, text);
  return localLink ? html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `) : html;
};

// https://marked.js.org/using_pro#extensions
// or
// https://mdxjs.com/docs/getting-started/

const defaultImage = 'https://via.placeholder.com/400x200';

export const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.md`), 'utf8');
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
  });
  return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPost = (slug) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.md`), 'utf8');
  const { data, content } = matter(fileContents);
  const markedContent = marked.parse(content, { renderer });
  return {
    title: data.title,
    intro: data.intro || '',
    img: data.img || defaultImage,
    content: markedContent || '',
    date: data.date || '',
    categories: data.categories || '',
  };
};
