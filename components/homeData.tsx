import { useMemo, useState } from 'react';
import { MdCommit, MdFolderOpen, MdOutlineDateRange } from 'react-icons/md';
import _commits from '@data/commits';
import ChartBars from '@components/chartBars';
import GrowingNumber from '@components/growingNumber';
import { CommitType } from '@types';

// https://github.com/sallar/github-contributions-chart
// Show trend: most active days of week, hours of day

const convertDate = (d: string) =>
  `${new Date(d).getDate()}.${new Date(d).getMonth() + 1}.${new Date(d).getFullYear()}`;

type HomeDataType = { isVisible: { [key: string]: boolean } };

export default function HomeData({ isVisible }: HomeDataType) {
  const [year, setYear] = useState<number | null>(new Date().getFullYear());

  const years = new Set(_commits.map((c) => new Date(c.date).getFullYear()));

  const sortedCommits: CommitType[] = useMemo(
    () => _commits.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [_commits]
  );

  const commits = useMemo(
    () => sortedCommits.filter((c) => (year ? new Date(c.date).getFullYear() === year : true)),
    [sortedCommits, year]
  );

  const firstCommitDate = convertDate(commits[0]?.date);
  const latestCommitDate = convertDate(commits[commits.length - 1]?.date);

  const commitsCount = commits.length;

  const allReposCount = new Set(commits.map((commit) => commit.repo)).size;

  const data = useMemo(
    () =>
      commits.reduce((acc: { name: string; commits: number }[], commit) => {
        const month = new Date(commit.date).toLocaleString('default', { month: 'short' });
        const existingMonth = acc.find((item) => item.name === month);
        if (existingMonth) {
          existingMonth.commits += 1;
        } else {
          acc.push({ name: month, commits: 1 });
        }
        return acc;
      }, []),
    [commits]
  );

  const tableData = useMemo(
    () =>
      data.sort((a, b) => {
        const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name);
      }),
    [commits]
  );

  return (
    <div className="data__body mt-10">
      <div className="centered my-5">
        <select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
          <option value={0}>All</option>
          {Array.from(years).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="data__numbers my-10">
        <div className="data__numbers__item">
          <MdCommit />
          {isVisible.data ? <GrowingNumber number={commitsCount} /> : 0}
          <span>Total commit</span>
        </div>

        <div className="data__numbers__item">
          <MdOutlineDateRange />
          <div className="centered">
            {isVisible.data ? <GrowingNumber number={parseInt(firstCommitDate.split('.')[0])} /> : 0}
            <span className="growing-number">.</span>
            {isVisible.data ? <GrowingNumber number={parseInt(firstCommitDate.split('.')[1])} /> : 0}
            <span className="growing-number">.</span>
            {isVisible.data ? <GrowingNumber number={parseInt(firstCommitDate.split('.')[2])} /> : 0}
          </div>
          <span>First commit</span>
        </div>

        <div className="data__numbers__item">
          <MdOutlineDateRange />
          <div className="centered">
            {isVisible.data ? <GrowingNumber number={parseInt(latestCommitDate.split('.')[0])} /> : 0}
            <span className="growing-number">.</span>
            {isVisible.data ? <GrowingNumber number={parseInt(latestCommitDate.split('.')[1])} /> : 0}
            <span className="growing-number">.</span>
            {isVisible.data ? <GrowingNumber number={parseInt(latestCommitDate.split('.')[2])} /> : 0}
          </div>
          <span>Latest commit</span>
        </div>

        <div className="data__numbers__item">
          <MdFolderOpen />
          {isVisible.data ? <GrowingNumber number={allReposCount} /> : 0}
          <span>Total Repositories</span>
        </div>
      </div>

      {tableData?.length && isVisible.data ? <ChartBars data={tableData} /> : 'Loading...'}

      <p className="t-center mt-5">
        <i>
          Note the results are limited because most of my professional work is not recorded under my Github profile.
        </i>
        <br />
        <i>Results are updated monthly.</i>
      </p>
    </div>
  );
}
