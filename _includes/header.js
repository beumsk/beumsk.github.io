
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">RB</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  )
}