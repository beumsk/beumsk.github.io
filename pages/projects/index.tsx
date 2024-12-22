import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdRefresh } from 'react-icons/md';
import Grid from '@components/grid';
import Layout from '@components/layout';
import Tech from '@components/tech';
import { ProjectType, SkillsType } from '@types';

type ProjectsProps = {
  title: string;
  description: string;
  url: string;
  projects: ProjectType[];
};

export default function Projects({ title, description, url, projects }: ProjectsProps) {
  const router = useRouter();
  const [typ, setTyp] = useState<'pro' | 'perso' | ''>('');
  const [tec, setTec] = useState<SkillsType[]>([]);

  const skillsList = ['react', 'typescript', 'firebase', 'node.js', 'javascript', 'css'] as SkillsType[];
  // const skillsList = [...new Set(projects.map((p) => p.tech).flat())];

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
    setTyp(router.query.type as 'pro' | 'perso');
    setTec(((router.query.tech as string)?.split(',') || []) as SkillsType[]);
  }, [router.query.type, router.query.tech]);

  const updateType = (_type: 'pro' | 'perso') => {
    setTyp(typ === _type ? '' : _type);
    const rQuery = { ...router.query };
    delete rQuery.type;
    updateRouter(typ === _type ? { ...rQuery } : { ...rQuery, type: _type });
  };

  const updateTech = (_tech: SkillsType) => {
    let newTech = [...tec];
    if (newTech.includes(_tech)) {
      newTech = newTech.filter((t) => t !== _tech);
    } else {
      newTech.push(_tech);
    }
    setTec(newTech);
    const rQuery = { ...router.query };
    delete rQuery.tech;
    updateRouter(newTech?.length === 0 ? { ...rQuery } : { ...rQuery, tech: newTech.join(',') });
  };

  const filteredProjects = projects.filter((project) => {
    const matchesType = typ ? project.type === typ : true;
    const matchesTech = tec.length > 0 ? tec.every((t) => project.tech.includes(t)) : true;
    return matchesType && matchesTech;
  });

  return (
    <Layout title={title} description={description} url={url}>
      <div className="container projects-shape">
        <h1>Projects</h1>

        <p className="ch-80 ml-0 mb-8">
          This project list is a collection of work I have been able to build over the years. You can find here the
          codes I am most proud of, whether they are professional or personal.
        </p>

        <div className="project__tech-list mb-4">
          <button onClick={() => updateType('pro')} className={`btn ${typ === 'pro' ? 'active' : ''}`}>
            Professional projects
          </button>
          <button onClick={() => updateType('perso')} className={`btn mr-4 ${typ === 'perso' ? 'active' : ''}`}>
            Personal projects
          </button>

          {skillsList.map((s) => (
            <button key={s} onClick={() => updateTech(s)} className={`btn ${tec.includes(s) ? 'active' : ''}`}>
              <Tech name={s} />
              <span>{s.replace('-', ' ')}</span>
            </button>
          ))}
          <button className="btn ml-2" onClick={() => updateRouter({})} title="Reset filters">
            <MdRefresh className="m-0" />
          </button>
        </div>

        <div data-aos="fade-up">
          <Grid data={filteredProjects} className="mt-5 mb-20" />
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
