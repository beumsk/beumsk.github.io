import Layout from '@components/layout'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from "@api"

export default function Post(props){
    return (
      <Layout title={props.title + ' | Rémy Beumier'} img={props.img} description={props.intro}>
        <div className="container narrow" data-aos="fade-left">
          <article>
            <h1>{props.title}</h1>
            <img src={props.img} alt={props.title} className="post__img" />
            <div dangerouslySetInnerHTML={{__html:props.content}}/>
            {/* TODO: add next/previous post link */}
            <div><Link href='/blog'><a className="btn">Back to blog listing</a></Link></div> 
          </article>
        </div>
      </Layout>
    )
}

export async function getStaticProps(context){
    return {
        props: await getPostBySlug(context.params.slug)
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