import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function GiphySearch(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Giphy Search</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="EExyvQ" />
      <a href="https://github.com/beumsk/Giphy-search" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Giphy Search Project',
      description: 'Giphy Search Projects from RB'
    }
  }
}