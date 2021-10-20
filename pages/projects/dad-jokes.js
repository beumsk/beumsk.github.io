import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function DadJokes(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Dad Jokes</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="LKXvrq" />
      <a href="https://github.com/beumsk/Dad-jokes" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Dad Jokes Project',
      description: 'Dad Jokes Projects from RB'
    }
  }
}