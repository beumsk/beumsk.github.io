import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* TODO: test if script works! */}
          {/* TODO: test script with useEffect */}
          {/* <script>
            
              console.log('test script');
              window.goatcounter = {no_onload: true};

              window.addEventListener('hashchange', function(e) {
                window.goatcounter.count({
                  path: location.pathname + location.search + location.hash,
                })
              });
            
          </script> */}
          {/* <script data-goatcounter="https://MYCODE.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            id="goatcounter"
            strategy="lazyOnload"
            data-goatcounter="https://beumsk.goatcounter.com/count"
            src="//gc.zgo.at/count.js" 
          />
          <Script
            id="goatcounter-nextjs"
            strategy="lazyOnload"
            onLoad={() => {
              window.goatcounter = {no_onload: true};
              window.addEventListener('hashchange', function(e) {
                window.goatcounter.count({
                  path: location.pathname + location.search + location.hash,
                })
              })
              console.log("gc nextjs");
            }}
            onError={(e) => {
              console.error('Script failed to load', e)
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument