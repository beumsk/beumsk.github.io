import { useMemo, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { MdCommit, MdFileDownload, MdFolderOpen, MdOutlineDateRange } from 'react-icons/md';
import ChartBars from '@components/chartBars';
import Grid from '@components/grid';
import GrowingNumber from '@components/growingNumber';
import Layout from '@components/layout';
import Linkk from '@components/linkk';
import Logo from '@components/logo';
import Tech from '@components/tech';
import { CommitType, PostType, ProjectType, SkillsType } from '@types';
import useIntersection from 'hooks/useIntersection';

const convertDate = (d: string) =>
  `${new Date(d).getDate()}.${new Date(d).getMonth() + 1}.${new Date(d).getFullYear()}`;

type HomeProps = {
  title: string;
  description: string;
  projects: ProjectType[];
  posts: PostType[];
  _commits: CommitType[];
};

export default function Home({ title, description, projects, posts, _commits }: HomeProps) {
  const { isVisible, refs } = useIntersection();
  const [year, setYear] = useState<number | null>(null);

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

  const skillsList = ['react', 'typescript', 'firebase', 'node.js', 'javascript', 'css'] as SkillsType[];

  return (
    <Layout title={title} description={description}>
      <section id="splash" className="splash">
        <div>
          <div className="container" data-aos="fade-up">
            <div className="t-center">
              <h1>Rémy Beumier</h1>
              <p>Front-end Dev</p>
              <Logo />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about svg-divider">
        <div className="home-shapes"></div>
        <div className="container" data-aos="fade-right">
          <div className="cols cols-lg">
            <div className="col">
              <h2>I'm Rémy, a Web Lover based in Brussels, specialising in Web & Software Development.</h2>

              <p>
                From a young age, I’ve always loved building things. My passion for <strong>creation</strong> began with
                Lego, grew with Minecraft, and ultimately led me to discover <strong>web development</strong>.
              </p>

              <p>
                Over the years, my journey has been about mastering foundational <strong>web technologies</strong> and
                continuously evolving in technical, communicational, and organisational skills.
              </p>

              <p>
                I’ve thrived in team-driven environments, leveraging industry-standard tools for{' '}
                <strong>front-end</strong> development, <strong>version control</strong>, workflow optimisation, design,
                and <strong>project collaboration</strong>.
              </p>

              <p className="mb-5">
                React is at the core of my development work, complemented by modern front-end libraries,{' '}
                <strong>cloud-based services</strong>, advanced <strong>styling</strong> techniques, and a small but
                expanding focus on <strong>back-end</strong> development.
              </p>
              <Linkk href="/resume-remy-beumier" target="_blank" className="btn mb-4 mr-4">
                Check out my resume
                <AiFillCaretRight className="ml-1" />
              </Linkk>
              <a className="btn mb-4" href="remy-beumier-resume.pdf" target="_blank" download>
                Download my resume
                <MdFileDownload className="ml-1" />
              </a>
            </div>

            <div className="col centered-v">
              <img
                src="/images/developer-thinking.svg"
                alt="developer thinking next to a computer"
                width="270"
                height="112"
                loading="lazy"
                className="about__img mt-5 mb-5"
              />
              <div className="about__languages my-2 mx-2">
                {skillsList.map((s) => (
                  <Linkk key={s} href={`/projects?tech=${s}`}>
                    <Tech name={s} color />
                  </Linkk>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pattern">
        <div className="container" data-aos="fade-left">
          <h2>Projects</h2>
          <p>I create projects both professionally and for fun. Here are some of my favourites.</p>
          <Grid data={projects.filter((x) => x.homepage).slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Linkk href="/projects" className="btn">
              Check all projects
              <AiFillCaretRight className="ml-1" />
            </Linkk>
          </div>
        </div>
      </section>

      <section id="blog" className="alt">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I occasionally write articles about coding and the web. Here are my latest posts.</p>
          <Grid data={posts.slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Linkk href="/blog" className="btn">
              Check all posts
              <AiFillCaretRight className="ml-1" />
            </Linkk>
          </div>
        </div>
      </section>

      <section id="data" className="data" ref={(el) => (refs.current.data = el)}>
        <div className="container" data-aos="fade-left">
          <h2>Data</h2>
          <p>Here is a detailed overview of my coding activity, made of various commit statistics on Github.</p>
          {/* https://github.com/sallar/github-contributions-chart */}
          {/* Show trend: most active days of week, hours of day */}

          <div className="data__body mt-10">
            <div className="centered my-5">
              <select onChange={(e) => setYear(parseInt(e.target.value))}>
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
                Note the results are limited because most of my professional work is not recorded under my Github
                profile.
              </i>
              <br />
              <i>Results are updated monthly.</i>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = require('@data/projects');
  const posts = require('@data/posts');
  const _commits = require('@data/commits');

  return {
    props: {
      title: 'Rémy Beumier | Front-end Developer',
      description:
        "Rémy Beumier's portfolio website as a Front-end Developer in Brussels. Discover a bit about myself, my projects, my posts and how to contact me.",
      projects: projects,
      posts: posts,
      _commits: _commits,
    },
  };
}
