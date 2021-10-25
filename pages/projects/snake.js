import ProjectLayout from 'components/project'
import Codepen from 'components/codepen'
import Link from 'next/link'

export default function Snake(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Snake</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="PmPxEo" />
      <a href="https://github.com/beumsk/Snake" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Snake Project',
      description: 'Snake Projects from RB'
    }
  }
}