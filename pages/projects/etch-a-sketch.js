import ProjectLayout from 'components/project'
import Codepen from 'components/codepen'
import Link from 'next/link'

export default function EtchASketch(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Etch a Sketch</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="dVWPOW" />
      <a href="https://github.com/beumsk/Etch-a-sketch" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Etch a Sketch Project',
      description: 'Etch a Sketch Projects from RB'
    }
  }
}