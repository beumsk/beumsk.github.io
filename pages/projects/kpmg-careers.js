import ProjectLayout from '@layouts/project'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>KPMG Careers Site</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <figure>
        <img src="/images/careers-kpmg-be.png" alt="" className="scroll" />
      </figure>

      <a href="https://web.archive.org/web/20200803122755/https://careers.kpmg.be/" target="_blank">Site as I left it</a>
      <a href="https://careers.kpmg.be/" target="_blank">Live website</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'KPMG Careers Site',
      description: 'KPMG Careers Sites from RB'
    }
  }
}