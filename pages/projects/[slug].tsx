import Link from 'next/link';
import { AiFillCaretLeft } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';
import Codepen from '@components/codepen';
import Codesandbox from '@components/codesandbox';
import Grid from '@components/grid';
import Layout from '@components/layout';
import Tech from '@components/tech';
import { ProjectType } from '@types';

type DynamicProjectProps = {
  project: ProjectType;
  relatedLinks: ProjectType[];
  img: string;
  url: string;
};
export default function DynamicProject({ project, relatedLinks, img, url }: DynamicProjectProps) {
  const isPro = project.type === 'pro';

  return (
    <Layout title={`${project.title} | Projects | Rémy Beumier`} description={project.intro} img={img} url={url}>
      <div className="container project-shape">
        <div data-aos="fade-left">
          <h1>{project.title}</h1>
          <p className="project__intro mb-8">{project.intro}</p>

          {project.tech.length > 0 ? (
            <>
              <h2>Technologies</h2>
              <ul className="mb-6 project__tech-list">
                {project.tech.map((t) => (
                  <li key={t}>
                    <Link href={`/projects?${t}`}>
                      <a className="btn">
                        <Tech name={t} color />
                        <span>{t.replace('-', ' ')}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {project.chall.length > 0 ? (
            <>
              <h2>Challenges and accomplishments</h2>
              <ul className="mb-8">
                {project.chall.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          ) : null}

          {!isPro && project.pen ? <Codepen pen={project.pen} title={project.title} /> : null}

          {!isPro && project.sandbox ? <Codesandbox sandbox={project.sandbox} title={project.title} /> : null}

          {isPro && project.screen ? (
            <figure className="project__screen">
              <img
                src={project.screen}
                alt={`Screenshot of ${project.current}`}
                width="300"
                height="400"
                loading="lazy"
              />
              <figcaption className="sr-only">{`Full size screenshot of ${project.title} website homepage`}</figcaption>
            </figure>
          ) : null}

          <div className="mb-15">
            <Link href="/projects">
              <a className="btn mb-4 mr-4" style={{ verticalAlign: 'bottom' }}>
                <AiFillCaretLeft className="mr-1" />
                Back to projects
              </a>
            </Link>

            {!isPro ? (
              <a
                href={`https://github.com/beumsk/${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mb-4 mr-4"
              >
                Github repository
                <FaGithub title="Github" aria-labelledby="Github" className="ml-1" />
              </a>
            ) : null}

            {isPro && project.current ? (
              <a href={project.current} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                Live website
                <MdPublic title="Live website" aria-labelledby="Live website" className="ml-1" />
              </a>
            ) : null}

            {isPro && project.past ? (
              <a href={project.past} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                Site as I left it
                <MdSettingsBackupRestore
                  title="Site as I left it"
                  aria-labelledby="Site as I left it"
                  className="ml-1"
                />
              </a>
            ) : null}
          </div>

          <div>
            <h2 className="mb-5">Suggested projects</h2>
            <Grid data={relatedLinks} className="mb-20" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const projects = require('@data/projects');
  const project = projects.find((p) => p.slug === context.params.slug);
  const personal = projects.filter((x) => x.type === 'perso');
  const professional = projects.filter((x) => x.type === 'pro');
  const previousLink =
    project.type === 'pro'
      ? professional[professional.findIndex((x) => x.slug === context.params.slug) - 1] ||
        professional[professional.length - 1]
      : personal[personal.findIndex((x) => x.slug === context.params.slug) - 1] || personal[personal.length - 1];
  const nextLink =
    project.type === 'pro'
      ? professional[professional.findIndex((x) => x.slug === context.params.slug) + 1] || professional[0]
      : personal[personal.findIndex((x) => x.slug === context.params.slug) + 1] || personal[0];
  const relatedLinks = [previousLink, nextLink];

  return {
    props: {
      project: project,
      relatedLinks: relatedLinks,
      img: `https://remybeumier.be${project.img}`,
      url: `https://remybeumier.be/projects/${context.params.slug}`,
    },
  };
}

export async function getStaticPaths() {
  const projects = require('@data/projects');
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
