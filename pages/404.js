import DefaultLayout from '@layouts/default'
import Head from 'next/head'

export default function Custom404() {
  return (
    <DefaultLayout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </DefaultLayout>
  )
}