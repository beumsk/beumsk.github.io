import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import prettier from 'prettier';

const OUTPUT_FILE = `data/commits.js`;
// https://github.com/settings/tokens with repo access !!
const TOKEN = ''; // PUSH EMPTY!!

const START_YEAR = 2016;
const END_YEAR = 2024;

const header = TOKEN
  ? {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  : {};

// async function fetchCommitDetails(owner, repoName, sha) {
//   const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits/${sha}`, header);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch commit details for ${sha}: ${response.statusText}`);
//   }
//   return response.json();
// }

async function generate() {
  try {
    const allCommits = [];
    for (let year = START_YEAR; year <= END_YEAR; year++) {
      const fileName = `c${year}.js`;
      const filePath = `./data/${fileName}`;
      try {
        const module = await import(filePath);
        const commits = module.default;
        console.log(`File: ${fileName} / ${filePath}, Commits Length: ${commits.length}`);
        allCommits.push(...commits);
      } catch (error) {
        console.error(`Error reading file ${fileName}:`, error);
      }
    }

    // Uncomment this block to fetch details for each commit: linesAdded, linesDeleted, fileExtensions
    // for (const commit of allCommits) {
    //   try {
    //     const details = await fetchCommitDetails(commit.owner, commit.repo, commit.sha);
    //     commit.linesAdded = details.stats?.additions || 0;
    //     commit.linesDeleted = details.stats?.deletions || 0;
    //     commit.fileExtensions = details.files?.map((file) => file?.filename?.split('.')?.pop() || null) || null;

    //     console.log(`Commit: ${commit.owner}, ${commit.repo}`);
    //   } catch (error) {
    //     console.error(`Error fetching details for commit ${commit.sha}:`, error);
    //   }
    // }

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
