import Layout from '@components/layout'
import Logo from '@components/logo'
import Grid from '@components/grid';
import Link from 'next/link'
import { getAllPosts } from '@api'
import { projects } from '@data/projects'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home(props) {
  return (
    <Layout title={props.title} description={props.description}>
      <section id="splash">
        <div className="container" data-aos="fade-up">
          {/* TODO: make it splash: big image, logo, animation */}
          <div className="title">
            <h1>Rémy Beumier</h1>
            <p>Front-end Dev</p>
            <Logo />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container" data-aos="fade-right" data-aos-delay="400">
          <div className="cols cols-lg">
            <div className="col">
              <h2>I'm Rémy, I am a Web Lover in Brussels and I focus on Front-end Development.</h2>
              <p>Since my first years, I have always enjoyed building things. I started developing my appetite for <strong>creation</strong> with Lego, continued with Minecraft and ultimately discovered <strong>Web development</strong>.</p>
              <p>It was a relief to find out what I really wanted to do as a living. I took full advantage of that motivation to start a long, difficult but passionate journey of learning <strong>front-end</strong> technologies as a self-taught.</p>
              <p>I now code everyday for a living and a hobby in Brussels with the powerful trio <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>, as well as some additional frameworks and libraries such as <strong>Bootstrap</strong>, <strong>Sass</strong> and <strong>jQuery</strong>.</p>
              <p>I recently started to code with both <strong>Angular</strong> and <strong>React</strong> and I discover their power and complexity.</p>
            </div>
            {/* TODO: add CV */}
            {/* TODO: full list of skills (+ soft ones?) */}
            <div className="col centered">
              <img src="/images/developer-thinking.svg" alt="developer thinking" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* TODO: make it sexy: full-width scroll? carousel? */}
      <section id="projects">
        <div className="container" data-aos="fade-left">
          <h2>Projects</h2>
          <p>I build projects as a living and as a hobby. Here is a list of my favorites.</p>
          <Grid data={projects.slice(0, 3)} />
          <Link href="/projects"><a className="btn">Check all projects</a></Link>
        </div>
      </section>

      {/* TODO: make it sexy: price/podium? tiles? */}
      <section id="blog">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I write some stuff about coding and the web in general. Here are the three latest posts.</p>
          <Grid data={props.posts.slice(0, 3)} />
          <Link href="/blog"><a className="btn">Check all posts</a></Link>
        </div>
      </section>

      <section id="contact">
        <div className="container" data-aos="fade-left">
          <h2>Contact</h2>
          <p>Feel free to get in touch and stay connected with me via these different channels.</p>
          <ul className="nodisc">
            <li className="list__link">
              <a href="https://codepen.io/beumsk/" target="_blank"><FaCodepen /><span>Codepen</span></a>
            </li>
            <li className="list__link">
              <a href="https://github.com/beumsk" target="_blank"><FaGithub /><span>Github</span></a>
            </li>
            <li className="list__link">
              <a href="https://www.linkedin.com/in/remybeumier/" target="_blank"><FaLinkedin /><span>LinkedIn</span></a>
            </li>
          </ul>
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
      title: 'RB site',
      description: 'This site is about RB'
    }
  }
}