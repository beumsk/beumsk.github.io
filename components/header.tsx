import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { nav } from '@data/nav';
import { ThemeType } from '@types';
import Linkk from './linkk';

type HeaderProps = {
  onClick: () => void;
  theme: ThemeType;
};

export default function Header({ onClick, theme }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        {nav.map((n, i) => (
          <Linkk
            key={n.text}
            href={n.link}
            className={!i ? 'logo' : ''}
            target={n.text === 'Resume' ? '_blank' : '_self'}
          >
            {!i ? <img src="/images/logo.svg" alt="Rémy Beumier logo" title={n.text} width="30" height="30" /> : n.text}
          </Linkk>
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
