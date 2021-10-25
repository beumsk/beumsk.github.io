import DefaultLayout from 'components/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props){
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="container">
              <article>
                  <h1>{props.title}</h1>
                  <div dangerouslySetInnerHTML={{__html:props.content}}/>
                  <div><Link href='/blog'><a>Back to blog listing</a></Link></div> 
              </article>
            </div>
        </DefaultLayout>
    )
}