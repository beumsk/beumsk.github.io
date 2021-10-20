import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function Connect4(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Connect 4</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="bqWqGV" />
      <a href="https://github.com/beumsk/Connect-4" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Connect 4 Project',
      description: 'Connect 4 Projects from RB'
    }
  }
}