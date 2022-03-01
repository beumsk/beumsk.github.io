import { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { projects } from '@data/projects';
import { getAllPosts } from '@api';
import Layout from '@components/layout';
import Grid from 'components/grid';

// import Image from 'next/image';

export default function Custom404({ posts, title }) {
  const pro = projects.filter((x) => !x.pen);
  const perso = projects.filter((x) => x.pen);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const randomPro = pro[Math.floor(Math.random() * pro.length)];
    const randomPerso = perso[Math.floor(Math.random() * perso.length)];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    setRandom([randomPro, randomPerso, randomPost]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={title}>
      <div className="container error-shape">
        <h1>404 - Page Not Found</h1>
        <div data-aos="fade-up">
          <Grid data={random} className="mt-10 mb-10" />
        </div>
        <div>
          <Link href="/">
            <a className="btn mb-20">Go back Home</a>
          </Link>
        </div>
        {/* <div style={{ position: 'relative', aspectRatio: '1200/630' }}>
          <Image src="/images/posts/generate-a-sitemap-in-nextjs.jpg" alt="img" layout="fill" />
        </div> */}
      </div>
    </Layout>
  );
}

Custom404.defaultProps = {
  title: '404 - Page Not Found | Rémy Beumier',
};

Custom404.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array,
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: '404 - Page Not Found | Rémy Beumier',
    },
  };
}
