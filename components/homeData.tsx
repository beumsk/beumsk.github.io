import { useState } from 'react';
import { MdCommit, MdFolderOpen, MdOutlineDateRange } from 'react-icons/md';
import commits from '@data/commits';
import ChartBars from '@components/chartBars';
import GrowingNumber from '@components/growingNumber';
import { YearCommitType } from '@types';

// https://github.com/sallar/github-contributions-chart
// Show trend: most active days of week, hours of day

const convertDate = (d: string) =>
  `${new Date(d).getDate()}.${new Date(d).getMonth() + 1}.${new Date(d).getFullYear()}`;

type HomeDataType = { isVisible: { [key: string]: boolean } };

export default function HomeData({ isVisible }: HomeDataType) {
  const [year, setYear] = useState<number | null>(new Date().getFullYear());

  const years = Object.keys(commits)
    .map((c) => parseInt(c))
    .filter((c) => !isNaN(c))
    .sort((a, b) => b - a);

  const yearCommits = commits[year || 'all'] as YearCommitType;
  const firstCommitDate = convertDate(yearCommits?.first);
  const latestCommitDate = convertDate(yearCommits?.latest);

  const commitsCount = yearCommits?.commits;

  const allReposCount = yearCommits?.repos;
  const tableData = yearCommits?.months;

  return (
    <div className="data__body mt-10">
      <div className="centered my-5">
        <select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
          <option value={0}>All</option>
          {years?.map((y) => (
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
