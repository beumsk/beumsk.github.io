export type ProjectType = {
  slug: string;
  title: string;
  link: string;
  current: string;
  past: string;
  img: string;
  screens: string[];
  modified: string; // YYYY-MM-DD
  intro: string;
  tech: SkillsType[];
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

export type MonthCommitType = {
  name: string;
  commits: number;
};

export type YearCommitType = {
  first: string;
  latest: string;
  commits: number;
  repos: number;
  months: MonthCommitType[];
};

export type CommitType = {
  [year: number]: YearCommitType;
};

export type ThemeType = 'light' | 'dark' | '';

export type SkillsType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'jquery'
  | 'bootstrap'
  | 'sass'
  | 'angular'
  | 'react'
  | 'redux'
  | 'material-ui'
  | 'chakra-ui'
  | 'styled-components'
  | 'jest'
  | 'mdx'
  | 'i18n'
  | 'node.js'
  | 'firebase'
  | 'mongo-db'
  | 'c#'
  | 'umbraco'
  | 'next.js';
