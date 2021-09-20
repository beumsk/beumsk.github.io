
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">RB</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </header>
  )
}