import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function DateCounter(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Date Counter</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="oWYVYj" />
      <a href="https://github.com/beumsk/Date-counter" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Date Counter Project',
      description: 'Date Counter Projects from RB'
    }
  }
}