import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function HigherOrLower(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Higher or Lower</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="bGbLzzE" />
      <a href="https://github.com/beumsk/Higher-or-lower" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Higher or Lower Project',
      description: 'Higher or Lower Projects from RB'
    }
  }
}