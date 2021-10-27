import DefaultLayout from 'components/default'
import Grid from 'components/grid'
import {projects} from '@data/projects'
import { useState } from 'react'

export default function Projects(props) {
  const [pro, setPro] = useState(false);
  const personal = projects.filter(x => x.pen)
  const professional = projects.filter(x => !x.pen)

  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <h1>PROJECTS</h1>

        {/* TODO: add filters tech, pro/perso, etc. and order */}

        <div className="projects__switch">
          <h2 onClick={() => setPro(!pro)} className={!pro && 'active'}>Personal projects</h2>
          <h2 onClick={() => setPro(!pro)} className={pro && 'active'}>Professional projects</h2>
        </div>

        {!pro && <Grid data={personal} />}
        {pro && <Grid data={professional} />}
        
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects',
      description: 'Projects from RB'
    }
  }
}