import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import MobileNav from 'components/mobileNav'
import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';

export default function Layout(props) {
  // fix local storage to be listened on page refresh
  // https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
  const [theme, setTheme] = useLocalStorage('theme');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main className={theme}>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <meta property="og:image" content={props.img || "https://beumsk.github.io/images/rb.png"} />
        <meta property="og:image:secure_url" content={props.img || "https://beumsk.github.io/images/rb.png"} />
      </Head>
      <Header onClick={switchTheme} theme={theme} />
      {props.children}
      <Footer />
      <MobileNav />
    </main>
  )
}