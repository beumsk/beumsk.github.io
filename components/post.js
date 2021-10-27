import DefaultLayout from 'components/default'
import Link from 'next/link'

export default function PostLayout(props){
  return (
    <DefaultLayout title={props.title}>
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