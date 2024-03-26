import { useEffect, useState } from 'react';
import Head from 'next/head';
import Breadcrumb from '@components/breadcrumb';
import Footer from '@components/footer';
import Header from '@components/header';
import { ThemeType } from '@types';
// import MobileNav from '@components/mobileNav';

type LayoutProps = {
  title: string;
  description?: string;
  img?: string;
  url?: string;
  children: React.ReactNode;
  itemtype?: string;
  published?: string;
  modified?: string;
};

export default function Layout({ title, description, img, url, children, itemtype, published, modified }: LayoutProps) {
  const [theme, setTheme] = useState<ThemeType>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let localTheme = window.localStorage.getItem('theme');
      setTheme(localTheme as ThemeType);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const fullImageUrl = img ? (img.startsWith('http') ? img : `https://remybeumier.be${img}`) : null;

  return (
    <main
      className={theme}
      itemScope={!!itemtype ? true : undefined}
      itemType={itemtype ? 'http://schema.org/' + itemtype : undefined}
    >
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={description} key="description" />

        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={url || 'https://remybeumier.be'} key="og:url" />
        <meta property="og:image" content={fullImageUrl || 'https://remybeumier.be/images/rb.jpg'} key="og:image" />

        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta property="twitter:url" content={url || 'https://remybeumier.be'} key="twitter:url" />
        <meta
          property="twitter:image"
          content={fullImageUrl || 'https://remybeumier.be/images/rb.jpg'}
          key="twitter:image"
        />

        {published ? <meta property="article:published_time" content={published} /> : null}
        {modified ? <meta property="article:modified_time" content={modified} /> : null}
      </Head>
      <Header onClick={switchTheme} theme={theme} />
      <div className="over-h">
        <Breadcrumb />
        {children}
      </div>
      <Footer />
      {/* <MobileNav /> */}
      <div id="ie-banner">
        Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs.
      </div>
    </main>
  );
}
