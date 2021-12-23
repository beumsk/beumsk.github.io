import Link from 'next/link'
import Layout from '@components/layout'

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
      <div className="container error-shape">
        <h1>404 - Page Not Found</h1>
        {/* TODO: add random project / post ? */}
        <div>
          <Link href="/"><a className="btn">Go back Home</a></Link>
        </div>
      </div>
    </Layout>
  )
}