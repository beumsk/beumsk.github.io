import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Grid from '@components/grid';
import Layout from '@components/layout';
import { PostType, ProjectType } from '@types';
// import Image from 'next/image';

type Custom404Props = {
  title: string;
  pro: ProjectType[];
  perso: ProjectType[];
  posts: PostType[];
};

export default function Custom404({ title, pro, perso, posts }: Custom404Props) {
  const router = useRouter();

  // fix for trailling slash URL error from Github pages
  useEffect(() => {
    if (router.asPath.endsWith('/')) {
      router.replace(router.asPath.replace(/\/$/, ''));
    }
  }, [router]);

  const [random, setRandom] = useState([]);

  useEffect(() => {
    const randomPro = pro[Math.floor(Math.random() * pro.length)];
    const randomPerso = perso[Math.floor(Math.random() * perso.length)];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    setRandom([randomPro, randomPerso, randomPost]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!router.asPath.endsWith('/')) {
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

  return null;
}

export async function getStaticProps() {
  const projects = require('@data/projects');
  const posts = require('@data/posts');

  const pro = projects.filter((x) => x.type === 'pro');
  const perso = projects.filter((x) => x.type === 'perso');

  return {
    props: {
      title: '404 - Page Not Found | Rémy Beumier',
      pro: pro,
      perso: perso,
      posts: posts,
    },
  };
}
