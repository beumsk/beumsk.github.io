import Link from 'next/link';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { nav } from '@data/nav';

export default function Header({onClick, theme}) {
  return (
    <header>
      <div className="container">
        {nav.map((n, i) => (
          !i ? (
            <Link href={n.link} key={n+i}>
              <a className="logo">
                <img src="/images/logo.svg" alt="Rémy Beumier logo" title={n.text} width="30" height="30" />
              </a>
            </Link>
          )
          : <Link href={n.link} key={n+i}>{n.text}</Link>
        ))}
        <button 
          onClick={onClick} 
          className="btn m-2" 
          title={theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
          aria-label={theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <MdDarkMode /> : <MdLightMode /> }
        </button>
      </div>
    </header>
  )
}