import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function Minesweeper(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Minesweeper</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="JJYqop" />
      <a href="https://github.com/beumsk/Minesweeper" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Minesweeper Project',
      description: 'Minesweeper Projects from RB'
    }
  }
}