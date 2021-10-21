import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function Memory(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Memory</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="xdoKjX" />
      <a href="https://github.com/beumsk/Memory" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Memory Project',
      description: 'Memory Projects from RB'
    }
  }
}