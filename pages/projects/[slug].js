import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiFillCaretLeft } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';
import projects from '@data/projects';
import Layout from '@components/layout';
import Tech from '@components/tech';
import Codepen from '@components/codepen';
import Codesandbox from '@components/codesandbox';
import Grid from '@components/grid';

Tech.propTypes = {
  name: PropTypes.string,
};

export default function DynamicProject({ projectss, slug, title, description, img, url }) {
  const personal = projectss.filter((x) => x.type === 'perso');
  const professional = projectss.filter((x) => x.type === 'pro');
  const proj = projectss[projectss.findIndex((x) => x.title === slug)];
  const isPro = proj.type === 'pro';

  const nextLink = isPro
    ? professional[professional.findIndex((x) => x.title === slug) + 1] || professional[0]
    : personal[personal.findIndex((x) => x.title === slug) + 1] || personal[0];
  const previousLink = isPro
    ? professional[professional.findIndex((x) => x.title === slug) - 1] || professional[professional.length - 1]
    : personal[personal.findIndex((x) => x.title === slug) - 1] || personal[personal.length - 1];
  const relatedLinks = [previousLink, nextLink];

  return (
    <Layout title={`${title} | Projects | Rémy Beumier`} description={description} img={img} url={url}>
      <div className="container project-shape">
        <div data-aos="fade-left">
          <h1>{title}</h1>
          <p className="intro mb-8">{description}</p>

          {proj.tech.length > 0 && (
            <>
              <h2>Technologies</h2>
              <ul className="mb-6 tech-list">
                {proj.tech.map((t) => (
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
          )}

          {proj.chall.length > 0 && (
            <>
              <h2>Challenges and accomplishments</h2>
              <ul className="mb-8">
                {proj.chall.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          )}

          {!isPro && proj.pen && <Codepen pen={proj.pen} title={proj.title} />}

          {!isPro && proj.sandbox && <Codesandbox sandbox={proj.sandbox} title={proj.title} />}

          {isPro && proj.screen && (
            <figure className="project-screen">
              <img src={proj.screen} alt={`Screenshot of ${proj.current}`} width="300" height="400" loading="lazy" />
              <figcaption className="sr-only">{`Full size screenshot of ${title} website homepage`}</figcaption>
            </figure>
          )}

          <div className="mb-15">
            <Link href="/projects">
              <a className="btn mb-4 mr-4" style={{ verticalAlign: 'bottom' }}>
                <AiFillCaretLeft className="mr-1" />
                Back to projects
              </a>
            </Link>

            {!isPro && (
              <a
                href={`https://github.com/beumsk/${proj.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mb-4 mr-4"
              >
                Github repository
                <FaGithub title="Github" aria-labelledby="Github" className="ml-1" />
              </a>
            )}

            {isPro && proj.current && (
              <a href={proj.current} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                Live website
                <MdPublic title="Live website" aria-labelledby="Live website" className="ml-1" />
              </a>
            )}

            {isPro && proj.past && (
              <a href={proj.past} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                Site as I left it
                <MdSettingsBackupRestore
                  title="Site as I left it"
                  aria-labelledby="Site as I left it"
                  className="ml-1"
                />
              </a>
            )}
          </div>

          <div>
            <p className="related-title mb-5">Suggested projects</p>
            <Grid data={relatedLinks} className="mb-20" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

DynamicProject.defaultProps = {
  title: 'Project | Rémy Beumier',
};

DynamicProject.propTypes = {
  projectss: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
};

export async function getStaticProps(context) {
  const proj = projects[projects.findIndex((p) => p.title === context.params.slug)];
  let slugTitle = proj.title.replace(/-/g, ' ');
  slugTitle = slugTitle.charAt(0).toUpperCase() + slugTitle.slice(1);
  return {
    props: {
      projectss: projects,
      slug: context.params.slug,
      title: slugTitle,
      description: proj.intro,
      img: `https://remybeumier.be${proj.img}`,
      url: `https://remybeumier.be/projects/${context.params.slug}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { slug: p.title },
  }));
  return {
    paths,
    fallback: false,
  };
}
