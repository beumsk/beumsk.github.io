import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import MobileNav from 'components/mobileNav'
import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';

export default function Layout(props) {
  // let [theme, setTheme] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     return localStorage.getItem('theme') || false;
  //   }
  // });
  // const test = () => {
  //   setTheme(!theme);
  //   localStorage.setItem('theme', !theme);
  //   console.log(localStorage.getItem('theme'), !theme);
  // }
  // let defaultDark;
  // if (typeof window !== 'undefined') {
  // defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // }
  let localTheme;
  const [theme, setTheme] = useLocalStorage('theme', localTheme || 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <Header onClick={switchTheme} theme={theme} />
      {/* <Header onClick={() => test()} theme={theme} /> */}
      {props.children}
      <Footer />
      <MobileNav />
    </main>
  )
}