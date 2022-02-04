import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAllPosts } from '@api';
import Layout from '@components/layout';
import Grid from 'components/grid';

export default function Blog({ posts, title, description, url }) {
  const router = useRouter();
  // the regex replace removes all characters before '?' to get only the query parameters
  const query = router.asPath.replace(/.*\?/g, '') === '/blog' ? '' : router.asPath.replace(/.*\?/g, '');
  const [cat, setCat] = useState(query ? posts.filter((x) => x.categories.includes(query)) : posts);

  const categoriesAllRaw = posts.map((x) => x.categories.split(', '));
  const categoriesAll = [].concat(...categoriesAllRaw).filter((x) => x);
  const categories = [...new Set(categoriesAll)];

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container blog-shape">
        <h1>Blog</h1>

        <div className="blog__categories">
          <Link href="/blog">
            <a className={`btn ${query === '' && 'active'}`} onClick={() => setCat(posts)}>
              All posts
            </a>
          </Link>
          {categories.map((c) => (
            <Link key={c} href={`?${c}`}>
              <a
                className={`btn ${query === c && 'active'}`}
                onClick={() => setCat(posts.filter((x) => x.categories.includes(c)))}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </a>
            </Link>
          ))}
        </div>

        <div data-aos="fade-up">
          <Grid data={cat} className="mt-6 mb-20" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: 'Blog | Rémy Beumier',
      description: 'My blog posts covering the web in general, especially the front-end development.',
      url: 'https://remybeumier.be/blog',
    },
  };
}
