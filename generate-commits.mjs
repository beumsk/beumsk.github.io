import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import prettier from 'prettier';

const yearStart = 2016;
const yearEnd = 2024;
const GITHUB_USERNAME = 'beumsk';
const OUTPUT_FILE = yearStart === yearEnd ? `data/c${year}.js` : `data/commits.js`;
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

  while (hasMore) {
    const response = await fetch(
      `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}+committer-date:${yearStart}-01-01..${yearEnd}-12-31&per_page=${perPage}&page=${page}`,
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
    const allCommits = searchResults.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      date: commit.commit.author.date,
      url: commit.html_url,
      repo: commit.repository.name,
      owner: commit.repository.owner.login,
    }));

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
