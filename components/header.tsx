import Link from 'next/link';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { nav } from '@data/nav';
import { ThemeType } from '@types';

type HeaderProps = {
  onClick: () => void;
  theme: ThemeType;
};

export default function Header({ onClick, theme }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        {nav.map((n, i) => (
          <Link href={n.link} key={n.text}>
            {!i ? (
              <a className="logo">
                <img src="/images/logo.svg" alt="Rémy Beumier logo" title={n.text} width="30" height="30" />
              </a>
            ) : (
              <a>{n.text}</a>
            )}
          </Link>
        ))}
        <button
          onClick={onClick}
          className="btn"
          title={theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <MdDarkMode title="Dark mode" aria-labelledby="Dark mode" />
          ) : (
            <MdLightMode title="Light mode" aria-labelledby="Light mode" />
          )}
        </button>
      </div>
    </header>
  );
}
