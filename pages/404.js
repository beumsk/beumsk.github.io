import Link from 'next/link';
import { projects } from '@data/projects';
import { getAllPosts } from '@api';
import Layout from '@components/layout';
import Grid from 'components/grid';

// import Image from 'next/image';

export default function Custom404({ posts, title }) {
  const pro = projects.filter(x => !x.pen);
  const perso = projects.filter(x => x.pen);
  const randomPro = pro[Math.floor(Math.random() * pro.length)];
  const randomPerso = perso[Math.floor(Math.random() * perso.length)];
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return (
    <Layout title={title}>
      <div className="container error-shape">
        <h1>404 - Page Not Found</h1>
        <div data-aos="fade-up">
          <Grid data={[randomPro, randomPerso, randomPost]} className="mt-10 mb-10" />
        </div>
        <div>
          <Link href="/"><a className="btn mb-20">Go back Home</a></Link>
        </div>
        {/* <div style={{position: 'relative', aspectRatio: '1200/630'}}>
          <Image src="/images/posts/fix-the-window-is-not-defined-error.jpg" layout="fill" />
        </div> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: '404 - Page Not Found | Rémy Beumier',
    }
  }
}