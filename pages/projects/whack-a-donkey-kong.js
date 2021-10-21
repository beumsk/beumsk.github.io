import ProjectLayout from '@layouts/project'
import Codepen from '@includes/codepen'
import Link from 'next/link'

export default function WhackADonkeyKong(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Whack a Donkey Kong</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="YabyJJ" />
      <a href="https://github.com/beumsk/whack-a-donkey-kong" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Whack a Donkey Kong Project',
      description: 'Whack a Donkey Kong Projects from RB'
    }
  }
}