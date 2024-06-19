import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import posts from '@data/posts';
import Grid from '@components/grid';
import Layout from '@components/layout';

type BlogProps = {
  title: string;
  description: string;
  url: string;
};

export default function Blog({ title, description, url }: BlogProps) {
  const router = useRouter();
  // the regex replace removes all characters before '?' to get only the query parameters
  const query = router.asPath.replace(/.*\?/g, '') === '/blog' ? '' : router.asPath.replace(/.*\?/g, '');
  const [cat, setCat] = useState(query ? posts.filter((x) => x.categories.includes(query)) : posts);

  useEffect(() => {
    if (!query) {
      setCat(posts);
    }
  }, [router, query]);

  const categoriesAllRaw = posts.map((x) => x.categories.split(', '));
  const categoriesAll = [].concat(...categoriesAllRaw).filter((x) => x);
  const categories = [...new Set(categoriesAll)];

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container blog-shape">
        <h1>Blog</h1>

        <p className="ch-80 ml-0 mb-8">
          I write blog articles I wish I could have come across while building and enhancing this website. They aim to
          cover topics like React and Next.js, but are not limited to those.
        </p>

        <div className="blog__categories">
          <Link href="/blog">
            <a className={`btn ${query === '' ? 'active' : ''}`} onClick={() => setCat(posts)}>
              All posts
            </a>
          </Link>
          {categories.map((c) => (
            <Link key={c} href={`?${c}`} scroll={false}>
              <a
                className={`btn ${query === c ? 'active' : ''}`}
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
  return {
    props: {
      title: 'Blog | Rémy Beumier',
      description: 'My blog posts covering the web in general, especially the front-end development.',
      url: 'https://remybeumier.be/blog',
    },
  };
}
