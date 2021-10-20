import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function Pokemon(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Pokemon</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="rjBWWR" />
      <a href="https://github.com/beumsk/Pokemon" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Pokemon Project',
      description: 'Pokemon Projects from RB'
    }
  }
}