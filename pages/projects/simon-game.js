import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function SimonGame(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Simon Game</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="LWqpGM" />
      <a href="https://github.com/beumsk/Simon-game" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Simon Game Project',
      description: 'Simon Game Projects from RB'
    }
  }
}