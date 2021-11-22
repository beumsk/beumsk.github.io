
import Link from 'next/link'

export default function Header({onClick, theme}) {
  return (
    <header>
      <div className="container">
        <Link href="/">RB</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/error">Error</Link>
        <button onClick={onClick} className="btn m-2">{theme === 'dark' ? '🌙' : '🔆' }</button>
      </div>
    </header>
  )
}