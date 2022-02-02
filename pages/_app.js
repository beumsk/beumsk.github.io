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

        <title key="title">Rémy Beumier | Front-end Developer</title>
        <meta property="og:title" content="Rémy Beumier | Front-end Developer" key="og:title" />
        <meta name="description" content="Rémy Beumier's portfolio website as a Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me." key="description" />
        <meta property="og:url" content="https://remybeumier.be" key="og:url" />
        <meta property="og:image" content="https://remybeumier.be/images/rb.png" key="og:image" />
        <meta property="og:image:secure_url" content="https://remybeumier.be/images/rb.png" key="og:image:secure_url" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="theme-color" content="#009688" key="theme-color" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}