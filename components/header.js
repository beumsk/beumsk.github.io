import Link from 'next/link'
import { nav } from '@data/nav'

export default function Header({onClick, theme}) {
  return (
    <header>
      <div className="container">
        {nav.map((n, i) => (<Link href={n.link} key={n+i}>{n.text}</Link>))}
        <button onClick={onClick} className="btn m-2">{theme === 'dark' ? '🌙' : '🔆' }</button>
      </div>
    </header>
  )
}