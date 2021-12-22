import Layout from '@components/layout'
import Grid from 'components/grid'
import { projects } from '@data/projects'
import { useState } from 'react'

export default function Projects(props) {
  const [pro, setPro] = useState(false);

  return (
    <Layout title={props.title} description={props.description}>
      <div className="container projects-shape">
        <h1>Projects</h1>

        {/* TODO: add filters tech, pro/perso, etc. and order */}

        <div>
          <button onClick={() => setPro(!pro)} className="btn">
            {pro ? 'Professional projects' : 'Personal projects'}
          </button>
        </div>

        <div data-aos="fade-up">
          <Grid data={projects.filter(x => pro ? !x.pen : x.pen)} className="mt-10 mb-10" />
        </div>
        
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects | Rémy Beumier',
      description: 'My personal and professional projects developed with HTML, CSS, JS, React, Angular and many more.'
    }
  }
}