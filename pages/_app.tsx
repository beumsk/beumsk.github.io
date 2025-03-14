import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AOS from 'aos';

import 'public/styles/font-import.css';
import 'aos/dist/aos.css';
import 'public/styles/style.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window['goatcounter']) {
      window['goatcounter'].count({
        path: router.asPath,
        // path: location.pathname + location.search + location.hash
      });
    }
  }, [router]);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
    });
  }, [router]);

  const title = 'Rémy Beumier | Senior Front-end Developer';
  const desc =
    "Rémy Beumier's portfolio website as a Senior Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me.";
  const url = 'https://remybeumier.be';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta property="og:locale" content="en_GB" key="og:locale" />
        <meta property="og:type" content="website" key="og:type" />

        <title key="title">{title}</title>
        <meta name="description" content={desc} key="description" />
        <meta name="author" content="Rémy Beumier" key="author" />

        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={desc} key="og:description" />
        <meta property="og:url" content={url} key="og:url" />
        <meta property="og:image" content={`${url}/images/rb.jpg`} key="og:image" />

        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={desc} key="twitter:description" />
        <meta property="twitter:url" content={url} key="twitter:url" />
        <meta property="twitter:image" content={`${url}/images/rb.jpg`} key="twitter:image" />

        <meta name="theme-color" content="#009688" key="theme-color" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
