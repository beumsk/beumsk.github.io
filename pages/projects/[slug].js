import Head from 'next/head'
import DefaultLayout from 'components/default'
import Codepen from 'components/codepen'
import Link from 'next/link'
import { projects } from '@data/projects'
import { useRouter } from 'next/router'

export default function DynamicPage(props) {
  const personal = projects.filter(x => x.pen)
  const professional = projects.filter(x => !x.pen)
  const router = useRouter()
  const slug = router.query.slug
  const proj = projects[projects.findIndex(x => x.title === slug)]
  const isPro = !proj.pen;
  const slugTitle = proj.title.replace("-", " ").toUpperCase();

  return (
    <DefaultLayout>
      <Head>
        <title>{slugTitle}</title>
        <meta name='description' content={proj.intro} />
      </Head>
      
      <div className="container">
        <h1>{slugTitle}</h1>
        <p>{proj.intro}</p>

        {proj.tech.length > 0 && (
          <>
            <h2>Technologies</h2>
            <ul>
              {proj.tech.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </>
        )}

        {proj.chall.length > 0 && (
          <>
            <h2>Challenges, key lessons</h2>
            <ul>
              {proj.chall.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </>
        )}

        {!isPro && (
          <>
            <Codepen pen={proj.pen} />

            <a href={"https://github.com/beumsk/" + proj.title} target="_blank" className="btn">Github repository</a>

            <Link href={'/' + (personal[personal.indexOf(proj) + 1]?.link || personal[0].link)}>
              <a className="btn">Next project</a>
            </Link>
          </>
        )}
        
        {isPro && (
          <>
            {proj.screen && (
              <figure className="wrapper">
                <img src={proj.screen} alt={"Screenshot of " + proj.current} className="scroll" />
              </figure>
            )}

            {proj.current && <a href={proj.current} target="_blank" className="btn">Live website</a>}
            {proj.past && <a href={proj.past} target="_blank" className="btn">Site as I left it</a>}
            
            <Link href={'/' + (professional[professional.indexOf(proj) + 1]?.link || professional[0].link)}>
              <a className="btn">Next project</a>
            </Link>
          </>
        )}
        
        <Link href="/projects"><a className="btn">Back to projects</a></Link>
      </div>
    </DefaultLayout>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}
  };
}

export async function getStaticPaths() {
  const posts = projects.map(x => x.title);
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return { paths, fallback: false };
}