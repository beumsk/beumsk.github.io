import Link from 'next/link';
import PropTypes from 'prop-types';
import { projects } from '@data/projects';
import Layout from '@components/layout';
import Tech from '@components/tech';
import Codepen from 'components/codepen';
import Codesandbox from 'components/codesandbox';

Tech.propTypes = {
  name: PropTypes.string,
};

export default function DynamicProject({ projectss, slug, title, description, img, url }) {
  const personal = projectss.filter((x) => x.type === 'perso');
  const professional = projectss.filter((x) => x.type === 'pro');
  const proj = projectss[projectss.findIndex((x) => x.title === slug)];
  const isPro = proj.type === 'pro';

  return (
    <Layout title={`${title} | Projects | Rémy Beumier`} description={description} img={img} url={url}>
      <div className="container project-shape">
        <div data-aos="fade-left">
          <h1>{title}</h1>
          <p className="mb-8">{description}</p>

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
              <h2>Challenges and learning</h2>
              <ul className="mb-8">
                {proj.chall.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          )}

          {!isPro && (
            <>
              {proj.pen && <Codepen pen={proj.pen} title={proj.title} />}

              {proj.sandbox && <Codesandbox sandbox={proj.sandbox} title={proj.title} />}

              <div className="mb-16">
                <a
                  href={`https://github.com/beumsk/${proj.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mb-4 mr-4"
                >
                  Github repository
                </a>

                <Link href={personal[personal.indexOf(proj) + 1]?.link || personal[0].link}>
                  <a className="btn mb-4 mr-4">Next project</a>
                </Link>

                <Link href="/projects">
                  <a className="btn">Back to projects</a>
                </Link>
              </div>
            </>
          )}

          {isPro && (
            <>
              {proj.screen && (
                <figure className="project-screen mb-8">
                  <img src={proj.screen} alt={`Screenshot of ${proj.current}`} width="300" height="400" />
                  <figcaption className="sr-only">{`Full size screenshot of ${title} website homepage`}</figcaption>
                </figure>
              )}

              <div className="mb-16">
                {proj.current && (
                  <a href={proj.current} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                    Live website
                  </a>
                )}
                {proj.past && (
                  <a href={proj.past} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                    Site as I left it
                  </a>
                )}

                <Link href={professional[professional.indexOf(proj) + 1]?.link || professional[0].link}>
                  <a className="btn mb-4 mr-4">Next project</a>
                </Link>

                <Link href="/projects">
                  <a className="btn">Back to projects</a>
                </Link>
              </div>
            </>
          )}
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
