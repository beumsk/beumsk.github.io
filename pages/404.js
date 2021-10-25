import DefaultLayout from 'components/default'
import Head from 'next/head'

export default function Custom404() {
  return (
    <DefaultLayout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="container">
        <h1>404 - Page Not Found</h1>
      </div>
    </DefaultLayout>
  )
}