import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function DrumMachine(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Drum Machine</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="dwmoyE" />
      <a href="https://github.com/beumsk/Drum-machine" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Drum Machine Project',
      description: 'Drum Machine Projects from RB'
    }
  }
}