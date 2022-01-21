import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* add "allow_local": true to data-goatcounter-settings to test in local env */}
          <script data-goatcounter="https://beumsk.goatcounter.com/count" data-goatcounter-settings='{"no_onload": true}' async src="/scripts/goatcounter.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument