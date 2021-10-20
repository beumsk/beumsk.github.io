import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function Timer(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Timer</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="WpKWgG" />
      <a href="https://github.com/beumsk/Timer" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Timer Project',
      description: 'Timer Projects from RB'
    }
  }
}