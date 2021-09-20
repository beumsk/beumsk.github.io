import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'
import MobileNav from '@includes/mobileNav'

export default function ProjectLayout(props) {
  return (
    <main className="light">
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <MobileNav />
    </main>
  )
}