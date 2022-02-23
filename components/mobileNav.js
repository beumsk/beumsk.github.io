import Link from 'next/link';
import { nav } from '@data/nav';

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {nav.map((n) => (
        <Link href={n.link} key={n.text}>
          {n.text}
        </Link>
      ))}
    </nav>
  );
}
