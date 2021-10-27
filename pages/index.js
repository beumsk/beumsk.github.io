import DefaultLayout from 'components/default'
import Link from 'next/link'
import { getAllPosts } from '@api'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <h1>WELCOME TO RB !</h1>

        <section>
          <h2>About</h2>
          <p>My name is Rémy, I am a Web Lover in Brussels and I focus myself on Front-end Development.</p>
          <p>Since my first years, I always enjoyed building things. I started developing my appetite for creation with Lego, continued with Minecraft and finally discovered Web development. It was a relief to find out what I really wanted to do as a living. I took full advantage of the motivation I had to start a long, difficult but passionate journey of learning front-end technologies as a self-taught.</p>
          <p>I now code everyday for a living and a hobby in Brussels with the powerful trio HTML, CSS and JavaScript, as well as some additional frameworks and libraries such as Bootstrap, Sass and jQuery.</p>
          <p>I recently started to code with both Angular and React and I discover their power and complexity.</p>
          {/* TODO: full list of skills (+ soft ones?) */}
        </section>

        <section>
          <h2>Projects</h2>
          <p>I build projects as living and as a hobby. Here is a list of my favorites.</p>
          <ul>
            <li><Link href="/projects/memory">Memory</Link></li>
            <li><Link href="/projects/kpmg-careers">KPMG Careers</Link></li>
          </ul>
          <Link href="/projects"><a className="btn">Check all projects</a></Link>
        </section>

        <section>
          <h2>Blog</h2>
          <p>I write some stuff about coding and the web in general. Here are the three latest posts.</p>
          <ul>
            {props.posts.filter((post, i) => i < 3).map(function (post, i) {
              return (
                <li key={i}>
                  <Link href={'/blog/' + post.slug}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link href="/blog"><a className="btn">Check all posts</a></Link>
        </section>

        <section>
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
        </section>
      </div>
    </DefaultLayout>
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