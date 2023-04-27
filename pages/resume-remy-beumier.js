import Head from 'next/head';
import PropTypes from 'prop-types';
import { MdLaptop, MdOutlineArticle, MdOutlineSettings, MdWorkOutline } from 'react-icons/md';

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
          <p className="subtitle">Frontend Developer</p>
        </section>

        <section className="contact">
          <p>
            <a href="mailto:remybeumier@gmail.com" target="_blank" rel="noreferrer">
              remybeumier@gmail.com
            </a>
          </p>
          <p>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://remybeumier.be" target="_blank">
              remybeumier.be
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/remybeumier/" target="_blank" rel="noopener noreferrer">
              linkedin.com
            </a>
          </p>
          <p>
            <a href="https://github.com/beumsk" target="_blank" rel="noopener noreferrer">
              github.com
            </a>
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
            <h3>Frontend Developer & Integrator</h3>
            <p className="detail">Positive Thinking Company // November 2020 - Now</p>
            <p className="intro">
              Frontend developer and integrator in the PTC Delivery Center, I worked on different projects, mostly in
              React, using industry standards such as Scrum agile, Git, Npm, Confluence, Jira and Figma.
            </p>

            <h4>Paris Padel Major: Padel tournament website.</h4>
            <ul>
              <li>Frontend development from Figma design using React and CSS-in-JS (Emotion & Styled-system)</li>
              <li>Used advanced CSS grid developed for the layout of the blog, image and video items</li>
              <li>Conducted tests with Jest and React Testing Library</li>
            </ul>

            <h4>Onomo: African hotels website</h4>
            <ul>
              <li>Integration and frontend development from Figma designs to React and CSS-in-JS coding</li>
              <li>
                Complete booking process with advanced forms such as a Date picker, phone numbers (regex) and custom
                select
              </li>
              <li>Improved the internal React Boilerplate</li>
            </ul>

            <h4>Omega: Canadian zoo website</h4>
            <ul>
              <li>Integration and frontend development from Figma designs to React and CSS-in-JS coding</li>
              <li>Complex components in the likes of a Swiper, a Carousel, Deep navigation bar and Filtering</li>
              <li>Used recent CSS features in the names of Image clip-path and CSS grids</li>
            </ul>

            <h4>Eli Paris: Jewellery e-commerce website</h4>
            <ul>
              <li>Integration development from InVision designs to Angular and Sass</li>
              <li>CSS from scratch with Sass leveraging Grids and Multi-columns layouts</li>
            </ul>

            <h4>iHub: Banking platform</h4>
            <ul>
              <li>Integration development from Sketch designs to Angular and Sass</li>
              <li>Added theming with CSS custom properties</li>
            </ul>
          </div>

          <div className="item">
            <h3>Frontend Developer</h3>
            <p className="detail">BICS // August 2022 - December 2022</p>
            <p className="intro">
              Front-end developer on a 5-month long mission to manage the development of two BICS Components libraries.
              Based on an internal design system (Figma), I engineered one for React projects and another for a
              JavaScript team.
            </p>

            <h4>React JS BICS Component Library</h4>
            <ul>
              <li>
                Developed 30+ components to be integrated on various web applications using React, Ant Design and Less
              </li>
              <li>Ensured theming capabilities to match projects color schemes with Less pre-processor</li>
              <li>Conducted functional, visual, accessibility and responsiveness tests through Storybook</li>
              <li>Documented development process and usage via Storybook</li>
            </ul>

            <h4>JavaScript Component Library</h4>
            <ul>
              <li>
                Developed 30+ components to be integrated on a crucial internal application using JavaScript and Sass
              </li>
              <li>Ensured CSS scalability and maintainability with Sass and CSS variables</li>
              <li>Conducted functional, visual, accessibility and responsiveness tests through Storybook</li>
              <li>Documented development process and usage via Storybook</li>
            </ul>
          </div>

          <div className="item">
            <h3>Frontend Developer</h3>
            <p className="detail">KPMG Belgium // May 2017 - November 2020</p>
            <p className="intro">
              Development and improvement of internal websites working with different frontend languages (e.g., HTML,
              CSS, JS) and transversal tools.
            </p>

            <h4>Umbraco CMS: Coding of websites</h4>
            <ul>
              <li>
                Development from base layout using HTML, CSS (Sass) and JavaScript to match business requirements for 3
                new sites: KPMG Careers, KPMG Law and KPMG Alumni
              </li>
              <li>
                Created new components with advanced features such as Splash video, Carousels, Custom map, Instagram
                feed, Events and Job fetching (JSON) to match extra needs from the departments
              </li>
              <li>SEO improvements and analytics setup working closely with marketing team</li>
              <li>
                Websites fully responsive and cross-browser compatibility down to Internet Explorer 9 implementing, for
                example, CSS media queries, Bootstrap and polyfills
              </li>
              <li>Documented development process and content creation</li>
            </ul>

            <h4>Sharepoint: Creation of custom web parts</h4>
            <ul>
              <li>
                Upgraded the intranet from SharePoint 2013 to 2016 by recreating, redesigning and improving the pages in
                line with the different departments using HTML, CSS and JS
              </li>
              <li>Created custom web parts for special cases</li>
              <li>Taught and documented how to use the intranet, create content and the basics of web development</li>
            </ul>

            <h4>AEM: Crafting of custom pages</h4>
            <ul>
              <li>Developed special pages for marketing campaigns using HTML, CSS and JS</li>
              <li>
                Built an internal promotional calendar and carousel inside Adobe Experience Manager with specific needs
                from a department
              </li>
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
            <p className="detail">remybeumier.be // version 2022</p>
            <p className="intro">Collection of professional and personal projects presented in a Next.js website.</p>
            <p>
              <a href="https://remybeumier.be/projects" target="_blank" rel="noopener noreferrer">
                See portfolio website
              </a>
              <span className="print-only"> (https://remybeumier.be/projects)</span>
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>
            Skills
            <span className="emoji">
              <MdLaptop title="Skills" aria-labelledby="Skills" />
            </span>
          </h2>
          <h4>Development skills</h4>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Npm</li>
            <li>Yarn</li>
            <li>JSON</li>
            <li>Jest</li>
            <li>React testing Library</li>
            <li>Storybook</li>
            <li>Sass</li>
            <li>Less</li>
            <li>CSS-in-JS</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Tailwind</li>
            <li>MUI</li>
            <li>Ant Design</li>
            <li>ES6</li>
            <li>JSX</li>
            <li>jQuery</li>
            <li>Git</li>
          </ul>
          <h4>Methodologies and Tools</h4>
          <ul>
            <li>Scrum Agile</li>
            <li>Responsiveness</li>
            <li>Accessibility</li>
            <li>Cross-browser compatibility</li>
            <li>BEM</li>
            <li>Atomic design</li>
            <li>SEO</li>
            <li>Confluence</li>
            <li>Jira</li>
            <li>Figma</li>
          </ul>
          <h4>Soft skills</h4>
          <ul>
            <li>Problem-solving</li>
            <li>Life-long learning</li>
            <li>Prioritisation and time management</li>
            <li>Open communication</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
          </ul>
          <h4>Languages</h4>
          <ul>
            <li>French</li>
            <li>English</li>
          </ul>
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
                React, Next.js, JS and CSS articles on remybeumier.be
              </a>
              <span className="print-only"> (https://remybeumier.be/blog)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk" target="_blank" rel="noopener noreferrer">
                JavaScript, CSS and HTML articles on Dev.to
              </a>
              <span className="print-only"> (https://dev.to/beumsk)</span>
            </li>
          </ul>
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
