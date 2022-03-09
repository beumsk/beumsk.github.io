import Link from 'next/link';
import PropTypes from 'prop-types';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { nav } from '@data/nav';

export default function Header({ onClick, theme }) {
  return (
    <header>
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
          {theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
};
