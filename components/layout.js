import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import MobileNav from 'components/mobileNav'
import { useState } from 'react'

export default function Layout(props) {
  const [theme, setTheme] = useState(false);
  // get theme from local cookies ?

  return (
    <main className={theme ? 'dark' : 'light'}>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <Header onClick={() => setTheme(!theme)} theme={theme} />
      {props.children}
      <Footer />
      <MobileNav />
    </main>
  )
}