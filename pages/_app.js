import Head from 'next/head'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import 'public/styles/style.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://beumsk.github.io/images/rb.png" />
        <meta property="og:image:secure_url" content="https://beumsk.github.io/images/rb.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}