import { getAllPosts } from '@api';
import Layout from '@components/layout';
import Grid from 'components/grid';

export default function Blog(props) {
  return (
    <Layout title={props.title} description={props.description}>
      <div className="container blog-shape">
        <h1>Blog</h1>

        {/* TODO: create category buttons */}

        {/* <div>
          <button className="btn mr-4 mb-4">
            Category 1
          </button>
          <button className="btn">
            Category 2
          </button>
        </div> */}

        <div data-aos="fade-up">
          <Grid data={props.posts} className="mt-10 mb-20" />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
      title: 'Blog | Rémy Beumier',
      description: 'My blog posts covering the web in general, especially the front-end development.'
    }
  }
}