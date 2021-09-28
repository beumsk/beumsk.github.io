import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <h1>BLOG</h1>
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
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}