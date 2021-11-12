
import Link from 'next/link'

export default function Header({onClick, theme}) {
  return (
    <header>
      <div className="container">
        <Link href="/">RB</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={onClick} className="btn">{theme === 'dark' ? '🌙' : '🔆' }</button>
      </div>
    </header>
  )
}