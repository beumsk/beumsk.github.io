import Link from 'next/link'

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      <Link href="/">RB</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}