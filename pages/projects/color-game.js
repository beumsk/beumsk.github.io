import ProjectLayout from 'components/project'
import Codepen from 'components/codepen'
import Link from 'next/link'

export default function ColorGame(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Color Game</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="poyXqWZ" />
      <a href="https://github.com/beumsk/Color-game" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Color Game Project',
      description: 'Color Game Projects from RB'
    }
  }
}