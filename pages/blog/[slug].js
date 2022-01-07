import Link from 'next/link';
import { getPostBySlug, getAllPosts } from "@api";
import Layout from '@components/layout';

export default function DynamicBlogPost(props){
  const date = props.data.date === '' ? 'No date' 
    : new Date(props.data.date).getDate() + '.' 
    + (new Date(props.data.date).getMonth()+1) + '.' 
    + new Date(props.data.date).getFullYear();

  const nextLink = props.posts[(props.posts.findIndex((x) => x.title === props.data.title))+1]?.link 
    || props.posts[0].link;

  return (
    <Layout title={props.data.title + ' | Blog | Rémy Beumier'} img={props.data.img} description={props.data.intro}>
      <div className="container narrow posts-shape"> 
        <div data-aos="fade-left">
          <article>
            <h1>{props.data.title}</h1>
            <img src={props.data.img} alt={props.data.title} width="300" height="150" className="post__img mb-5" />
            <p className="post__date pb-5">{date}</p>
            <div className="post__content mt-5 mb-10" dangerouslySetInnerHTML={{__html:props.data.content}}/>
            {/* TODO: add next/previous post link */}
            <div className="mb-16">
              <Link href={nextLink}><a className="btn mb-4 mr-4">Next blog post</a></Link>
              <Link href="/blog"><a className="btn">Back to blog listing</a></Link>
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