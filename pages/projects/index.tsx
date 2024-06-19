import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Grid from '@components/grid';
import Layout from '@components/layout';
import Tech from '@components/tech';
import { ProjectType } from '@types';

type ProjectsProps = {
  title: string;
  description: string;
  url: string;
  projects: ProjectType[];
};

export default function Projects({ title, description, url, projects }: ProjectsProps) {
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

        <p className="ch-80 ml-0 mb-8">
          This project list is a collection of work I have been able to build over the years. You can find here the
          codes I am most proud of, whether they are professional or personal.
        </p>

        <div className="project__tech-list mb-4">
          <Link href={'?professional'} scroll={false}>
            <a onClick={() => setFilter('professional')} className={`btn ${filter === 'professional' ? 'active' : ''}`}>
              Professional projects
            </a>
          </Link>
          <Link href={'?personal'} scroll={false}>
            <a onClick={() => setFilter('personal')} className={`btn ${filter === 'personal' ? 'active' : ''}`}>
              Personal projects
            </a>
          </Link>
        </div>

        <div className="project__tech-list">
          {skillsList.map((s) => (
            <Link key={s} href={`?${s}`} scroll={false}>
              <a onClick={() => setFilter(s)} className={`btn ${filter === s ? 'active' : ''}`}>
                <Tech name={s} />
                <span>{s.replace('-', ' ')}</span>
              </a>
            </Link>
          ))}
        </div>

        <div data-aos="fade-up">
          {filter === '' ? <Grid data={projects} className="mt-5 mb-20" /> : null}
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

export async function getStaticProps() {
  const projects = require('@data/projects');
  return {
    props: {
      title: 'Projects | Rémy Beumier',
      description: 'My personal and professional projects developed with HTML, CSS, JS, React, Angular and many more.',
      url: 'https://remybeumier.be/projects',
      projects: projects,
    },
  };
}
