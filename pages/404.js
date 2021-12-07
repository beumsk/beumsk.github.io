import Layout from '@components/layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <div>
          <Link href="/" className="btn"><a>Go back Home</a></Link>
        </div>
      </div>
    </Layout>
  )
}