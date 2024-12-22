import { AiFillCaretRight } from 'react-icons/ai';
import { MdFileDownload } from 'react-icons/md';
import Grid from '@components/grid';
import HomeData from '@components/homeData';
import Layout from '@components/layout';
import Linkk from '@components/linkk';
import Logo from '@components/logo';
import Tech from '@components/tech';
import useIntersection from '@hooks/useIntersection';
import { PostType, ProjectType, SkillsType } from '@types';

type HomeProps = {
  title: string;
  description: string;
  projects: ProjectType[];
  posts: PostType[];
};

export default function Home({ title, description, projects, posts }: HomeProps) {
  const { isVisible, refs } = useIntersection();

  const skillsList = ['react', 'typescript', 'firebase', 'node.js', 'javascript', 'css'] as SkillsType[];

  return (
    <Layout title={title} description={description}>
      <section id="splash" className="splash">
        <div>
          <div className="container" data-aos="fade-up">
            <div className="t-center">
              <h1>Rémy Beumier</h1>
              <p>Front-end Dev</p>
              <Logo />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about svg-divider">
        <div className="home-shapes"></div>
        <div className="container" data-aos="fade-right">
          <div className="cols cols-lg">
            <div className="col">
              <h2>I'm Rémy, a Web Lover based in Brussels, specialising in Web & Software Development.</h2>

              <p>
                From a young age, I’ve always loved building things. My passion for <strong>creation</strong> began with
                Lego, grew with Minecraft, and ultimately led me to discover <strong>web development</strong>.
              </p>

              <p>
                Over the years, my journey has been about mastering foundational <strong>web technologies</strong> and
                continuously evolving in technical, communicational, and organisational skills.
              </p>

              <p>
                I’ve thrived in team-driven environments, leveraging industry-standard tools for{' '}
                <strong>front-end</strong> development, <strong>version control</strong>, workflow optimisation, design,
                and <strong>project collaboration</strong>.
              </p>

              <p className="mb-5">
                React is at the core of my development work, complemented by modern front-end libraries,{' '}
                <strong>cloud-based services</strong>, advanced <strong>styling</strong> techniques, and a small but
                expanding focus on <strong>back-end</strong> development.
              </p>
              <Linkk href="/resume-remy-beumier" target="_blank" className="btn mb-4 mr-4">
                Check out my resume
                <AiFillCaretRight className="ml-1" />
              </Linkk>
              <a className="btn mb-4" href="remy-beumier-resume.pdf" target="_blank" download>
                Download my resume
                <MdFileDownload className="ml-1" />
              </a>
            </div>

            <div className="col centered-v">
              <img
                src="/images/developer-thinking.svg"
                alt="developer thinking next to a computer"
                width="270"
                height="112"
                loading="lazy"
                className="about__img mt-5 mb-5"
              />
              <div className="about__languages my-2 mx-2">
                {skillsList.map((s) => (
                  <Linkk key={s} href={`/projects?tech=${s}`}>
                    <Tech name={s} color />
                  </Linkk>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pattern">
        <div className="container" data-aos="fade-left">
          <h2>Projects</h2>
          <p>I create projects both professionally and for fun. Here are some of my favourites.</p>
          <Grid data={projects.filter((x) => x.homepage).slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Linkk href="/projects" className="btn">
              Check all projects
              <AiFillCaretRight className="ml-1" />
            </Linkk>
          </div>
        </div>
      </section>

      <section id="blog" className="alt">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I occasionally write articles about coding and the web. Here are my latest posts.</p>
          <Grid data={posts.slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Linkk href="/blog" className="btn">
              Check all posts
              <AiFillCaretRight className="ml-1" />
            </Linkk>
          </div>
        </div>
      </section>

      <section id="data" className="data" ref={(el) => (refs.current.data = el)}>
        <div className="container" data-aos="fade-left">
          <h2>Data</h2>
          <p>Here is a detailed overview of my coding activity, made of various commit statistics on Github.</p>
          <HomeData isVisible={isVisible} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = require('@data/projects');
  const posts = require('@data/posts');

  return {
    props: {
      title: 'Rémy Beumier | Front-end Developer',
      description:
        "Rémy Beumier's portfolio website as a Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me.",
      projects: projects,
      posts: posts,
    },
  };
}
