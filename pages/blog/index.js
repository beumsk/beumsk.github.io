import Layout from '@components/layout'
import Link from 'next/link'
import { getAllPosts } from '@api'

export default function Blog(props) {
  return (
    <Layout title={props.title} description={props.description}>
      <div className="container">
        <h1>Blog</h1>
        <ul>
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx}>
                <Link href={'/blog/' + post.slug}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
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
      title: 'Blog',
      description: 'Blog posts'
    }
  }
}