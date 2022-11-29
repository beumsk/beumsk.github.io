import Head from 'next/head';
import PropTypes from 'prop-types';
import { MdLaptop, MdMailOutline, MdOutlineArticle, MdOutlineSettings, MdPublic, MdWorkOutline } from 'react-icons/md';

export default function Resume({ title, description, url }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />

        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={url} key="og:url" />

        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta property="twitter:url" content={url} key="twitter:url" />
      </Head>

      <article className="resume">
        <section className="name">
          <h1>Rémy Beumier</h1>
          <p className="subtitle">Front-end Developer</p>
        </section>

        <section className="photo">
          <img src="/images/profile.png" alt="profile image Rémy Beumier" width="220" height="220" />
        </section>

        <section className="about">
          <p>I'm a web lover focused on front-end technologies.</p>
          <p>
            I code everyday for a living and a hobby in Brussels always looking to improve myself by searching,
            experimenting and learning.
          </p>
        </section>

        <section className="experience">
          <h2>
            Experience
            <span className="emoji">
              <MdWorkOutline title="Experience" aria-labelledby="Experience" />
            </span>
          </h2>

          <div className="item">
            <h3>Front-end Developer</h3>
            <p className="detail">BICS // August 2022 - December 2022</p>
            <ul>
              <li>React Component Library based on Figma and built with Ant Design, Less and Storybook.</li>
              <li>JavaScript Component Library based on Figma and built with JS, Sass and Storybook.</li>
            </ul>
          </div>

          <div className="item">
            <h3>Front-end Developer & Integrator</h3>
            <p className="detail">Positive Thinking Company // November 2020 - Now</p>
            <ul>
              <li>Paris Padel Major website built with React, Emotion and styled-system.</li>
              <li>African hotels website built with React, Emotion and styled-system.</li>
              <li>Canadian zoo website built with React, Emotion and styled-system.</li>
              <li>E-commerce project from scratch working with Angular, PrimeNG and Sass.</li>
              <li>Banking platform built in Angular with Sass and theming.</li>
            </ul>
          </div>

          <div className="item">
            <h3>Front-end Developer</h3>
            <p className="detail">KPMG Belgium // May 2017 - November 2020</p>
            <ul>
              <li>Umbraco CMS: Creation of websites with HTML, CSS, JS and C#.</li>
              <li>Sharepoint: Creation of custom web parts with HTML, CSS and JS.</li>
              <li>Adobe Experience Manager: Creation of custom pages with HTML, CSS and JS.</li>
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2>
            Projects
            <span className="emoji">
              <MdOutlineSettings title="Projects" aria-labelledby="Projects" />
            </span>
          </h2>
          <div className="item">
            <h3>Portfolio</h3>
            <p className="detail">Collection of professional and personal projects.</p>
            <p>
              <a href="https://remybeumier.be/projects" target="_blank" rel="noopener noreferrer">
                See collection
              </a>
              <span className="print-only"> (https://remybeumier.be/projects)</span>
            </p>
          </div>

          <div className="item">
            <h3>Codepen</h3>
            <p className="detail">Collection of web applications built on Codepen.</p>
            <p>
              <a href="https://codepen.io/beumsk/" target="_blank" rel="noopener noreferrer">
                See Codepen collection
              </a>
              <span className="print-only"> (https://codepen.io/beumsk/)</span>
            </p>
          </div>

          <div className="item">
            <h3>Codesandbox</h3>
            <p className="detail">Collection of web applications built on Codesandbox.</p>
            <p>
              <a href="https://codesandbox.io/u/beumsk" target="_blank" rel="noopener noreferrer">
                See Codesandbox collection
              </a>
              <span className="print-only"> (https://codesandbox.io/u/beumsk)</span>
            </p>
          </div>
        </section>

        <section className="articles">
          <h2>
            Articles
            <span className="emoji">
              <MdOutlineArticle title="Articles" aria-labelledby="Articles" />
            </span>
          </h2>
          <ul className="list-no">
            <li>
              <a href="https://remybeumier.be/blog" target="_blank" rel="noopener noreferrer">
                React and Next.js articles
              </a>
              <span className="print-only"> (https://remybeumier.be/blog)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk" target="_blank" rel="noopener noreferrer">
                JavaScript, CSS and HTML articles
              </a>
              <span className="print-only"> (https://dev.to/beumsk)</span>
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2>
            Skills
            <span className="emoji">
              <MdLaptop title="Skills" aria-labelledby="Skills" />
            </span>
          </h2>
          <ul className="list-block">
            <li>HTML5 - Accessibility</li>
            <li>CSS3 - Sass - Less - CSS-in-JS</li>
            <li>Bootstrap - Bulma - Tailwind</li>
            <li>Material UI - Ant Design</li>
            <li>JavaScript - ES6 - JSX - Typescript - jQuery</li>
            <li>React, Redux</li>
            <li>Git - Github</li>
          </ul>
        </section>

        <section className="languages">
          <h2>
            Languages
            <span className="emoji">
              <MdPublic title="Languages" aria-labelledby="Languages" />
            </span>
          </h2>
          <ul className="list-block">
            <li>French</li>
            <li>English</li>
          </ul>
        </section>

        <section className="contact">
          <h2>
            Contact
            <span className="emoji">
              <MdMailOutline title="Contacts" aria-labelledby="Contacts" />
            </span>
          </h2>
          <img className="qr print-only" src="/images/qr.png" alt="QR code link to my website" />
          <p className="cta">
            <a href="mailto:remybeumier@gmail.com" target="_blank" rel="noreferrer">
              remybeumier@gmail.com
            </a>
          </p>
          <p className="cta">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://remybeumier.be" target="_blank">
              remybeumier.be
            </a>
          </p>
        </section>
      </article>
    </>
  );
}

Resume.defaultProps = {
  title: 'Resume | Rémy Beumier',
};

Resume.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Resume | Rémy Beumier',
      description: "Rémy Beumier's resume as a Front-end Developer",
      url: 'https://remybeumier.be/resume-remy-beumier',
    },
  };
}
