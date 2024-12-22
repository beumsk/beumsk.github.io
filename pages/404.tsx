import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Grid from '@components/grid';
import Layout from '@components/layout';
import Linkk from '@components/linkk';
import useJavaScriptEnabled from '@hooks/useJavaScript';
import { PostType, ProjectType } from '@types';

type Custom404Props = {
  title: string;
  pro: ProjectType[];
  perso: ProjectType[];
  posts: PostType[];
};

export default function Custom404({ title, pro, perso, posts }: Custom404Props) {
  const isJavaScriptEnabled = useJavaScriptEnabled();
  const router = useRouter();
  const [random, setRandom] = useState([]);

  // fix for trailling slash URL error from Github pages
  useEffect(() => {
    if (router.asPath.endsWith('/')) {
      router.replace(router.asPath.replace(/\/$/, ''));
    }
  }, [router]);

  useEffect(() => {
    const randomPro = pro[Math.floor(Math.random() * pro.length)];
    const randomPerso = perso[Math.floor(Math.random() * perso.length)];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    setRandom([randomPro, randomPerso, randomPost]);
  }, []);

  const randomsk = [pro[0], perso[0], posts[0]];

  if (!router.asPath.endsWith('/')) {
    return (
      <Layout title={title}>
        <div className="container error-shape">
          <h1>404 - Page Not Found</h1>
          <div data-aos="fade-up">
            <Grid data={isJavaScriptEnabled ? random : randomsk} className="mt-10 mb-10" />
          </div>
          <div>
            <Linkk href="/" className="btn mb-20">
              Go back Home
            </Linkk>
          </div>
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
