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

export type CommitType = {
  sha: string;
  message: string;
  date: string;
  url: string;
  repo: string;
  owner: string;
  // linesAdded: number;
  // linesDeleted: number;
  // fileExtensions: string[];
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
