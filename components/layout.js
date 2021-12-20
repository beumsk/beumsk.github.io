import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import MobileNav from 'components/mobileNav'
import { useEffect, useState } from 'react'

export default function Layout(props) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
      let localTheme = window.localStorage.getItem('theme');
      setTheme(localTheme);
  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  const fullImageUrl = props.img && (props.img.startsWith('http') ? props.img : `https://beumsk.github.io${props.img}`);

  return (
    <main className={theme}>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <meta property="og:image" content={fullImageUrl || "https://beumsk.github.io/images/rb.png"} />
        <meta property="og:image:secure_url" content={fullImageUrl || "https://beumsk.github.io/images/rb.png"} />
      </Head>
      <Header onClick={switchTheme} theme={theme} />
      <div className="over-x-h">
        {props.children}
      </div>
      <Footer />
      <MobileNav />
    </main>
  )
}