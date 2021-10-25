import ProjectLayout from 'components/project'
import Codepen from 'components/codepen'
import Link from 'next/link'

export default function Calculator(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Calculator</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="dvdZjx" />
      <a href="https://github.com/beumsk/Calculator" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Calculator Project',
      description: 'Calculator Projects from RB'
    }
  }
}