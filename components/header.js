
import Link from 'next/link'
import { useState } from 'react'

export default function Header({onClick, theme}) {
  // set theme to local storage

  return (
    <header>
      <div className="container">
        <Link href="/">RB</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={onClick} className="btn">{theme ? '🌙' : '🔆' }</button>
      </div>
    </header>
  )
}