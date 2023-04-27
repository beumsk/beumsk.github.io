import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { projects } from '@data/projects';
import Layout from '@components/layout';
import Grid from '@components/grid';
import Tech from '@components/tech';

export default function Projects({ title, description, url }) {
  const router = useRouter();
  // the regex replace removes all characters before '?' to get only the query parameters
  const query = router.asPath.replace(/.*\?/g, '') === '/projects' ? '' : router.asPath.replace(/.*\?/g, '');
  const [filter, setFilter] = useState(query);

  useEffect(() => {
    if (!query) {
      setFilter('');
    }
  }, [router, query]);

  const skillsList = ['react', 'javascript', 'html', 'css', 'sass', 'jquery', 'angular'];
  // const skillsList = [...new Set(projects.map((p) => p.tech).flat())];

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container projects-shape">
        <h1>Projects</h1>

        <p className="ch-80 mb-8">
          This project list is a collection of work I have been able to build over the years. You can find here the
          codes I am most proud of, whether they are professional or personal.
        </p>

        <div className="tech-list mb-4">
          <Link href={'?professional'}>
            <a onClick={() => setFilter('professional')} className={`btn ${filter === 'professional' ? 'active' : ''}`}>
              Professional projects
            </a>
          </Link>
          <Link href={'?personal'}>
            <a onClick={() => setFilter('personal')} className={`btn ${filter === 'personal' ? 'active' : ''}`}>
              Personal projects
            </a>
          </Link>
        </div>

        <div className="tech-list">
          {skillsList.map((s) => (
            <Link key={s} href={`?${s}`}>
              <a onClick={() => setFilter(s)} className={`btn ${filter === s ? 'active' : ''}`}>
                <Tech name={s} />
                <span>{s.replace('-', ' ')}</span>
              </a>
            </Link>
          ))}
        </div>

        <div data-aos="fade-up">
          {filter === '' && <Grid data={projects} className="mt-5 mb-20" />}
          {filter === 'personal' || filter === 'professional' ? (
            <Grid
              data={projects.filter((x) => (filter === 'professional' ? x.type === 'pro' : x.type === 'perso'))}
              className="mt-5 mb-20"
            />
          ) : (
            <Grid
              data={projects.filter((x) => x.tech[x.tech.findIndex((t) => t.toLowerCase() === filter)] === filter)}
              className="mt-5 mb-20"
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

Projects.defaultProps = {
  title: 'Projects | Rémy Beumier',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects | Rémy Beumier',
      description: 'My personal and professional projects developed with HTML, CSS, JS, React, Angular and many more.',
      url: 'https://remybeumier.be/projects',
    },
  };
}
