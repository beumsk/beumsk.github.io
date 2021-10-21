import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function SlidingPuzzle(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Sliding Puzzle</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="RjzGBO" />
      <a href="https://github.com/beumsk/Sliding-puzzle" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Sliding Puzzle Project',
      description: 'Sliding Puzzle Projects from RB'
    }
  }
}