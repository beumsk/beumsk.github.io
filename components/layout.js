import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import Breadcrumb from 'components/breadcrumb';
// import MobileNav from 'components/mobileNav';

export default function Layout({ img, title, description, url, children }) {
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

  const fullImageUrl = img && (img.startsWith('http') ? img : `https://remybeumier.be${img}`);

  return (
    <main className={theme}>
      <Head>
        <title key="title">{title}</title>
        <meta name="title" content={title} key="title" />
        <meta name="description" content={description} key="description" />

        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={url || 'https://remybeumier.be'} key="og:url" />
        <meta property="og:image" content={fullImageUrl || "https://remybeumier.be/images/rb.png"} key="og:image" />

        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta property="twitter:url" content={url || 'https://remybeumier.be'} key="twitter:url" />
        <meta property="twitter:image" content={fullImageUrl || "https://remybeumier.be/images/rb.png"} key="twitter:image" />
      </Head>
      <Header onClick={switchTheme} theme={theme} />
      <div className="over-h">
        <Breadcrumb />
        {children}
      </div>
      <Footer />
      {/* <MobileNav /> */}
    </main>
  )
}