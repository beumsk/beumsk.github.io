import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import MobileNav from 'components/mobileNav'

export default function Layout(props) {
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