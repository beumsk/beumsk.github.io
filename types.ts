export type ProjectType = {
  slug: string;
  title: string;
  link: string;
  current: string;
  past: string;
  img: string;
  screen: string;
  modified: string; // YYYY-MM-DD
  intro: string;
  tech: string[];
  chall: string[];
  homepage: boolean;
  type: 'pro' | 'perso';
  pen?: string;
  sandbox?: string;
};

export type PostType = {
  slug: string;
  title: string;
  intro: string;
  img: string;
  published: string; // YYYY-MM-DD
  modified: string; // YYYY-MM-DD
  categories: string; // '', '', ''
  link: string;
  url: string;
};

export type ThemeType = 'light' | 'dark' | '';
