import Head from 'next/head'
import DefaultLayout from '@layouts/default'

export default function ProjectLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </DefaultLayout>
  )
}