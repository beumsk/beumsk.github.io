import { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from "aos";

import "aos/dist/aos.css";
import 'public/styles/style.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    window.goatcounter.count({
      path: router.asPath
      // path: location.pathname + location.search + location.hash
    })
  }, [router]);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta property="og:locale" content="en_GB" key="og:locale" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content="https://remybeumier.be" key="og:url" />
        <meta name="theme-color" content="#009688" key="theme-color" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <title key="title">Rémy Beumier | Front-end Developer</title>
        <meta name="author" content="Rémy Beumier" key="author" />
        <meta name="description" content="Rémy Beumier's portfolio we /bsite as a Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me." key="description" />
        <meta property="og:image" content="https://remybeumier.be/images/rb.png" key="og:image" />
        <meta property="og:image:secure_url" content="https://remybeumier.be/images/rb.png" key="og:image:secure_url" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}