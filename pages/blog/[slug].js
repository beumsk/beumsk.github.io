import Layout from '@components/layout'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from "@api"

export default function Post(props){
  const date = props.data.date === '' ? 'No date' 
    : new Date(props.data.date).getDate() + '.' 
    + (new Date(props.data.date).getMonth()+1) + '.' 
    + new Date(props.data.date).getFullYear();

  const nextLink = props.posts[(props.posts.findIndex((x) => x.title === props.data.title))+1]?.link 
    || props.posts[0].link;

  return (
    <Layout title={props.data.title + ' | Rémy Beumier'} img={props.data.img} description={props.data.intro}>
      <div className="container narrow over-x-h"> 
        <div data-aos="fade-left">
          <article>
            <h1>{props.data.title}</h1>
            <img src={props.data.img} alt={props.data.title} className="post__img mb-5" />
            <p className="post__date pb-5">{date}</p>
            <div className="post__content mb-5" dangerouslySetInnerHTML={{__html:props.data.content}}/>
            {/* TODO: add next/previous post link */}
            <div>
              <Link href={nextLink}><a className="btn mb-2 mr-2">Next blog post</a></Link>
              <Link href='/blog'><a className="btn">Back to blog listing</a></Link>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context){
  let next = await getAllPosts()
  return {
    props: {
      posts: next,
      data: await getPostBySlug(context.params.slug)
    },
      // props: await getPostBySlug(context.params.slug)
  }
}

export async function getStaticPaths(){
  let paths = await getAllPosts()
  paths = paths.map(post => ({
    params: { slug:post.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
}