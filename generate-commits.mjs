import { writeFileSync } from 'fs';
import prettier from 'prettier';
import commitsAll from './data/commits-all.js';

const OUTPUT_FILE = `data/commits.js`;

const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthMap = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

async function generate() {
  try {
    const commitsByYear = commitsAll.reduce(
      (acc, commit) => {
        const year = new Date(commit.date).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(commit);
        return acc;
      },
      { all: commitsAll }
    );

    const formattedData = Object.keys(commitsByYear).reduce((acc, year) => {
      const commits = commitsByYear[year];
      const firstCommitDate = commits[0]?.date;
      const latestCommitDate = commits[commits.length - 1]?.date;
      const commitsCount = commits.length;
      const reposCount = new Set(commits.map((commit) => commit.repo)).size;
      const months = commits
        .reduce((acc, commit) => {
          const monthFull = new Date(commit.date).toLocaleString('default', { month: 'long' });
          const month = monthMap[monthFull];
          const existingMonth = acc.find((item) => item.name === month);
          if (existingMonth) {
            existingMonth.commits += 1;
          } else {
            acc.push({ name: month, commits: 1 });
          }
          return acc;
        }, [])
        .sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));

      acc[year] = {
        first: firstCommitDate,
        latest: latestCommitDate,
        commits: commitsCount,
        repos: reposCount,
        months,
      };
      return acc;
    }, {});

    const formattedOutput = prettier.format(
      `const commits = ${JSON.stringify(formattedData, null, 2)}; module.exports = commits;`,
      {
        parser: 'babel',
      }
    );

    writeFileSync(OUTPUT_FILE, formattedOutput);
    console.log(`Commits data saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating GitHub data:', error);
  }
}

generate();
