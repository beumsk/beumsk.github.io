import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdRefresh } from 'react-icons/md';
import Grid from '@components/grid';
import Layout from '@components/layout';
import { PostType } from '@types';

type BlogProps = {
  title: string;
  description: string;
  url: string;
  posts: PostType[];
};

export default function Blog({ title, description, url, posts }: BlogProps) {
  const router = useRouter();
  const [catt, setCatt] = useState<string[]>([]);

  const categoriesAllRaw = posts.map((x) => x.categories.split(', '));
  const categoriesAll = [].concat(...categoriesAllRaw).filter((x) => x);
  const categories = [...new Set(categoriesAll)];

  const updateRouter = (obj) =>
    router.push(
      {
        pathname: router.pathname,
        query: obj,
      },
      undefined,
      { scroll: false }
    );

  useEffect(() => {
    setCatt((router.query.cat as string)?.split(',') || []);
  }, [router.query.cat]);

  const updateCat = (_cat: string) => {
    let newCat = [...catt];
    if (newCat.includes(_cat)) {
      newCat = newCat.filter((t) => t !== _cat);
    } else {
      newCat.push(_cat);
    }
    setCatt(newCat);
    const rQuery = { ...router.query };
    delete rQuery.cat;
    updateRouter(newCat?.length === 0 ? { ...rQuery } : { ...rQuery, cat: newCat.join(',') });
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCat = catt.length > 0 ? catt.every((c) => post.categories.includes(c)) : true;
    return matchesCat;
  });

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container blog-shape">
        <h1>Blog</h1>

        <p className="ch-80 ml-0 mb-8">
          I write blog articles I wish I could have come across while building and enhancing this website. They aim to
          cover topics like React and Next.js, but are not limited to those.
        </p>

        <div className="blog__categories mb-4">
          {categories.map((c) => (
            <button key={c} onClick={() => updateCat(c)} className={`btn ${catt.includes(c) ? 'active' : ''}`}>
              <span>{c.replace('-', ' ')}</span>
            </button>
          ))}
          <button className="btn ml-2" onClick={() => updateRouter({})} title="Reset filters">
            <MdRefresh className="m-0" />
          </button>
        </div>

        <div data-aos="fade-up">
          <Grid data={filteredPosts} className="mt-6 mb-20" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = require('@data/posts');

  return {
    props: {
      title: 'Blog | Rémy Beumier',
      description: 'My blog posts covering the web in general, especially the front-end development.',
      url: 'https://remybeumier.be/blog',
      posts: posts,
    },
  };
}
