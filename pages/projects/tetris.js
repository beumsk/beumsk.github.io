import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function Tetris(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Tetris</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="eYpxowj" />
      <a href="https://github.com/beumsk/Tetris" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Tetris Project',
      description: 'Tetris Projects from RB'
    }
  }
}