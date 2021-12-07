import Link from 'next/link'
import { nav } from '@data/nav'

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {nav.map((n, i) => (<Link href={n.link} key={n+i}>{n.text}</Link>))}
    </nav>
  )
}