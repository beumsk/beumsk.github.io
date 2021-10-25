import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <h1>WELCOME TO RB !</h1>

        <h2>About</h2>
        <p>My name is Rémy, I am a Web Lover in Brussels and I focus myself on Front-end Development.</p>
        <p>Since my first years, I always enjoyed building things. I started developing my appetite for creation with Lego, continued with Minecraft and finally discovered Web development. It was a relief to find out what I really wanted to do as a living. I took full advantage of the motivation I had to start a long, difficult but passionate journey of learning front-end technologies as a self-taught.</p>
        <p>I now code everyday for a living and a hobby in Brussels with the powerful trio HTML, CSS and JavaScript, as well as some additional frameworks and libraries such as Bootstrap, Sass and jQuery.</p>

        <h2>Projects</h2>
        <p>I build projects as living and as a hobby. Here is a list of my favorites.</p>
        <ul>
          <li><Link href="/projects/memory">Memory</Link></li>
          <li><Link href="/projects/kpmg-careers">KPMG Careers</Link></li>
        </ul>

        <h2>Blog</h2>
        <p>I write some stuff about coding and the web in general. Here is the latest of those posts.</p>
        <ul>
          <li>How to add Emoji's in your website, using HTML, CSS or JavaScript</li>
        </ul>

        <h2>Contact</h2>
        <p>Feel free to stay connected with me via these different channels.</p>
        <ul>
          <li><a href="https://codepen.io/beumsk/" target="_blank">Codepen</a></li>
          <li><a href="https://github.com/beumsk" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/remybeumier/" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/beumsk" target="_blank">Twitter</a></li>
        </ul>

        <button>button</button>
        <a className="btn">a.btn</a>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}