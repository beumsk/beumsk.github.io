import { nav } from '@data/nav';
import Linkk from './linkk';

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {nav.map((n) => (
        <Linkk href={n.link} key={n.text}>
          {n.text}
        </Linkk>
      ))}
    </nav>
  );
}
