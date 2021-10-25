import DefaultLayout from 'components/default'
import Grid from 'components/grid'
import {personal} from 'data/personalProjects'
import {professional} from 'data/professionalProjects'
import { useState } from 'react'

export default function Projects(props) {
  const [pro, setPro] = useState(false);

  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <h1>PROJECTS</h1>

        {/* TODO: tab/switch to go from perso to pro projects */}
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