import ProjectLayout from '@layouts/project'
import Codepen from '@includes/Codepen'
import Link from 'next/link'

export default function TicTacToe(props) {
  return (
    <ProjectLayout title={props.title} description={props.description}>
      <h1>Tic-Tac-Toe</h1>
      <p>Introduction text</p>

      <h2>Technologies</h2>
      <h2>Challenges, key lessons</h2>

      <Codepen pen="ZevLbx" />
      <a href="https://github.com/beumsk/Tic-Tac-Toe" target="_blank">Github repository</a>
      
      <Link href="/projects">Back to projects</Link>
    </ProjectLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Tic-Tac-Toe Project',
      description: 'Tic-Tac-Toe Projects from RB'
    }
  }
}