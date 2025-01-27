import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import prettier from 'prettier';
import commitsAll from './data/commits-all.js';

const yearStart = 2016;
const yearEnd = 2025;
const update = true;
const GITHUB_USERNAME = 'beumsk';
const OUTPUT_FILE = yearStart === yearEnd ? `data/c${year}.js` : `data/commits-all.js`;
// https://github.com/settings/tokens with repo access !!
const TOKEN = ''; // PUSH EMPTY!!

const header = TOKEN
  ? {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  : {};

async function searchCommits() {
  let page = 1;
  const perPage = 100;
  let allCommits = [];
  let hasMore = true;

  let sinceDate = '';
  if (update && commitsAll?.length > 0) {
    const mostRecentCommit = commitsAll.reduce((latest, commit) => {
      return new Date(commit.date) > new Date(latest.date) ? commit : latest;
    });
    sinceDate = new Date(mostRecentCommit.date).toISOString();
  } else {
    sinceDate = `${yearStart}-01-01`;
  }

  while (hasMore) {
    const response = await fetch(
      `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}+committer-date:${sinceDate}..${yearEnd}-12-31&per_page=${perPage}&page=${page}`,
      {
        ...header,
        headers: {
          ...header.headers,
          Accept: 'application/vnd.github.cloak-preview',
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to search commits: ${response.statusText}`);
    }
    const data = await response.json();
    allCommits = allCommits.concat(data.items);
    hasMore = data.items.length === perPage;
    page += 1;
  }

  return allCommits;
}

async function generate() {
  try {
    const searchResults = await searchCommits();
    const newCommits = searchResults.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      date: commit.commit.author.date,
      url: commit.html_url,
      repo: commit.repository.name,
      owner: commit.repository.owner.login,
    }));
    const _allCommits = commitsAll?.length > 0 ? [...newCommits, ...commitsAll] : [...newCommits];
    const allCommits = _allCommits.sort((a, b) => new Date(a.date) - new Date(b.date));

    const formattedData = prettier.format(
      `const commits = ${JSON.stringify(allCommits, null, 2)}; module.exports = commits;`,
      {
        parser: 'babel',
      }
    );

    writeFileSync(OUTPUT_FILE, formattedData);
    console.log(`Commits data saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating GitHub data:', error);
  }
}

generate();
