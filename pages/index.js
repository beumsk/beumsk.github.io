import Link from 'next/link';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap, SiSass, SiAngular, SiReact } from 'react-icons/si';
import { getAllPosts } from '@api';
import { projects } from '@data/projects';
import Layout from '@components/layout';
import Logo from '@components/logo';
import Grid from '@components/grid';

export default function Home(props) {
  return (
    <Layout title={props.title} description={props.description}>
      <section id="splash">
        <div>
          <div className="container" data-aos="fade-up">
            <div className="title">
              <h1>Rémy Beumier</h1>
              <p>Front-end Dev</p>
              <Logo />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="svg-divider">
        <div className="back-shapes"></div>
        <div className="container" data-aos="fade-right">
          <div className="cols cols-lg">
            <div className="col">
              <h2>I'm Rémy, I am a Web Lover in Brussels and I focus on Front-end Development.</h2>
              <p>Since my first years, I have always enjoyed building things. I started developing my appetite for <strong>creation</strong> with Lego, continued with Minecraft and ultimately discovered <strong>Web development</strong>.</p>
              <p>It was a relief to find out what I really wanted to do as a living. I took full advantage of that motivation to start a long, difficult but passionate journey of learning <strong>front-end</strong> technologies as a self-taught.</p>
              <p>I now code everyday for a living and a hobby in Brussels with the powerful trio <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>, as well as some additional frameworks and libraries such as <strong>Bootstrap</strong>, <strong>Sass</strong> and <strong>jQuery</strong>.</p>
              <p className="mb-5">I recently started to code with both <strong>Angular</strong> and <strong>React</strong> and I discover their power and complexity.</p>
              <Link href="/resume-remy-beumier">
                <a className="btn mb-4 mr-4" target="_blank">Check out my resume</a>
              </Link>
              <a className="btn" href="remy-beumier-resume.pdf" target="_blank" download>Download my resume</a>
            </div>
            {/* TODO: full list of skills (+ soft ones?) */}
            <div className="col centered">
              <div className="languages mx-2">
                <SiHtml5 title="HTML5" />
                <SiCss3 title="CSS3" />
                <SiJavascript title="JavaScript" />
                <SiJquery title="jQuery" />
                <SiBootstrap title="Bootstrap" />
                <SiSass title="Sass" />
                <SiAngular title="Angular" />
                <SiReact title="React" />
              </div>
              <img src="/images/developer-thinking.svg" alt="developer thinking next to a computer" width="270" height="112" loading="lazy" className="mt-5 mb-5" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pattern">
        <div className="container" data-aos="fade-left">
          <h2>Projects</h2>
          <p>I build projects as a living and as a hobby. Here is a list of my favorites.</p>
          <Grid data={projects.filter(x => x.homepage).slice(0, 3)} className="mt-10 mb-10" />
          <Link href="/projects"><a className="btn">Check all projects</a></Link>
        </div>
      </section>

      <section id="blog">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I write some stuff about coding and the web in general. Here are the latest posts.</p>
          <Grid data={props.posts.slice(0, 3)} className="mt-10 mb-10" />
          <Link href="/blog"><a className="btn">Check all posts</a></Link>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
      title: 'Rémy Beumier | Front-end Developer',
      description: 'Rémy Beumier\'s portfolio website as a Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me.'
    }
  }
}