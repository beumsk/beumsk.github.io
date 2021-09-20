import DefaultLayout from '@layouts/default'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h1>MEMORY</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="xdoKjX" />
      <a href="https://beumsk.github.io/Memory/" target="_blank">Github repository</a>
      

      <Link href="/projects">Back to projects</Link>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Memory Project',
      description: 'Memory Projects from RB'
    }
  }
}