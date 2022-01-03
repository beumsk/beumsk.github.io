import { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from "aos";

import "aos/dist/aos.css";
import 'public/styles/style.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    window.goatcounter.count({
      path: router.asPath
    //   path: location.pathname + location.search + location.hash
    })
  }

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#009688" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}