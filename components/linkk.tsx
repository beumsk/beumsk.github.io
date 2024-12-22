import { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type LinkType = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Linkk({ href, children, ...props }: LinkType) {
  return href.startsWith('http') ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
