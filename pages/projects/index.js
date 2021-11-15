import Layout from '@components/layout'
import Grid from 'components/grid'
import { projects } from '@data/projects'
import { useState } from 'react'

export default function Projects(props) {
  const [pro, setPro] = useState(false);
  const personal = projects.filter(x => x.pen)
  const professional = projects.filter(x => !x.pen)

  return (
    <Layout title={props.title} description={props.description}>
      <div className="container">
        <h1>Projects</h1>

        {/* TODO: add filters tech, pro/perso, etc. and order */}

        <div className="projects__switch">
          <button onClick={() => setPro(!pro)} className={!pro ? 'active btn' : 'btn'}>Personal projects</button>
          <button onClick={() => setPro(!pro)} className={pro ? 'active btn' : 'btn'}>Professional projects</button>
        </div>

        <div data-aos="fade-up">
          {!pro && <Grid data={personal} />}
          {pro && <Grid data={professional} />}
        </div>
        
      </div>
    </Layout>
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