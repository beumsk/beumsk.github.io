import Layout from '@components/layout'
import Grid from 'components/grid'
import Link from 'next/link'
import { getAllPosts } from '@api'

export default function Blog(props) {
  console.log(props.posts);
  return (
    <Layout title={props.title} description={props.description}>
      <div className="container">
        <h1>Blog</h1>
        <div data-aos="fade-up">
          <Grid data={props.posts} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  console.log(allPosts);

  return {
    props: {
      posts: allPosts,
      title: 'Blog | Rémy Beumier',
      description: 'My blog posts covering the web in general, especially the front-end development.'
    }
  }
}