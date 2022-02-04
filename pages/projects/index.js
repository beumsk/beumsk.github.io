import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { projects } from '@data/projects';
import Layout from '@components/layout';
import Grid from 'components/grid';

export default function Projects({ title, description, url }) {
  const router = useRouter();
  // the regex replace removes all characters before '?' to get only the query parameters
  const query = router.asPath.replace(/.*\?/g, '') === '/projects' ? '' : router.asPath.replace(/.*\?/g, '');
  const [pro, setPro] = useState(query.includes('personal') ? false : true);

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container projects-shape">
        <h1>Projects</h1>

        {/* TODO: add filters tech, pro/perso, etc. and order */}

        <div>
          <Link href={'?professional'}>
            <a onClick={() => setPro(true)} className={`btn mb-4 mr-4 ${pro && 'active'}`}>
              Professional projects
            </a>
          </Link>
          <Link href={'?personal'}>
            <a onClick={() => setPro(false)} className={`btn mb-4 ${!pro && 'active'}`}>
              Personal projects
            </a>
          </Link>
        </div>

        <div data-aos="fade-up">
          <Grid data={projects.filter((x) => (pro ? !x.pen : x.pen))} className="mt-6 mb-20" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects | Rémy Beumier',
      description: 'My personal and professional projects developed with HTML, CSS, JS, React, Angular and many more.',
      url: 'https://remybeumier.be/projects',
    },
  };
}
