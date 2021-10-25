import ProjectLayout from 'components/project'
import Codepen from 'components/codepen'
import Link from 'next/link'
import {personal} from 'data/personalProjects'

export default function Memory(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Memory</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <h2>Challenges, key lessons</h2>
      <ul>
        <li>array.splice</li>
        <li>setInterval & clearInterval</li>
        <li>click event listener on parent</li>
        <li>linear-gradient</li>
      </ul>

      <Codepen pen="xdoKjX" />

      <a href="https://github.com/beumsk/Memory" target="_blank" className="btn">Github repository</a>

      <Link href={'/' + personal[personal.findIndex(x => x.title === 'Memory') + 1].link}>
        <a className="btn">Next projects</a>
      </Link>
      
      <Link href="/projects"><a className="btn">Back to projects</a></Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Memory | RB',
      description: 'Memory from RB'
    }
  }
}