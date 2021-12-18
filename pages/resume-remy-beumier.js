import Head from 'next/head'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Rémy Beumier</title>
        <meta name='description' content="Rémy Beumier's resume as a Front-end Developer" />
        <meta property="og:image" content="https://beumsk.github.io/images/rb.png" />
        <meta property="og:image:secure_url" content="https://beumsk.github.io/images/rb.png" />
      </Head>

      <article class="resume">
        <section class="name">
          <h1>Rémy Beumier</h1>
          <p class="subtitle">Front-end Developer</p>
        </section>
        
        <section class="photo">
          <img src="https://remybeumier.be/img/profile.jpg" alt="profile image Rémy Beumier" />
        </section>

        <section class="about">
          {/* quote it? */}
          <p>I'm a web lover focused on front-end technologies.</p>
          <p>I code everyday for a living and a hobby in Brussels always looking to improve myself by searching, experimenting and learning.</p>
        </section>

        <section class="experience">
          <h2>Experience <span class="emoji">💼</span></h2>
          <div class="item">
            <h3>Integrator</h3>
            <p class="detail">Positive Thinking Company // November 2020 - Now</p>
            <ul>
              <li>React integration: African Hotels website, Canadian Zoo website</li>
              <li>Angular integration: Jewelry e-commerce website, Banking tool</li>
              <li>Improving internal boilerplates</li>
            </ul>
          </div>

          <div class="item">
            <h3>Front-end Developer</h3>
            <p class="detail">KPMG Belgium // May 2017 - November 2020</p>
            <ul>
              <li>Umbraco CMS: Creation of websites with HTML, CSS, JS and C#.</li>
              <li>Sharepoint: Creation of custom web parts with HTML, CSS and JS.</li>
              <li>AEM: Creation of custom pages with HTML, CSS and JS.</li>
            </ul>
          </div>
          
          <div class="item">
            <h3>Front-end Developer</h3>
            <p class="detail">FreeCodeCamp.org // December 2016 - Now</p>
            <ul>
              <li>HTML: HTML5 and Accessibility.</li>
              <li>CSS: CSS3, Responsiveness, Sass and Bootstrap.</li>
              <li>Javascript: ES6, React, jQuery and Json.</li>
              <li>Git: Github.</li>
            </ul>
          </div>
        </section>
        
        <section class="projects">
          <h2>Projects <span class="emoji">⚙️</span></h2>
          <div class="item">
            <h3>Games</h3>
            <p class="detail">Collection of micro application games built with HTML, CSS and Javascript.</p>
            <p>
              <a href="https://codepen.io/collection/nZpVKb" target="_blank">See games collection</a>
              <span class="print-only"> (https://codepen.io/collection/nZpVKb)</span>
            </p>
          </div>
          
          <div class="item">
            <h3>API</h3>
            <p class="detail">Collection of micro applications based on API's.</p>
            <p>
              <a href="https://codepen.io/collection/DZrGGj" target="_blank">See API collection</a>
              <span class="print-only"> (https://codepen.io/collection/DZrGGj)</span>
            </p>
          </div>

          <div class="item">
            <h3>Tools</h3>
            <p class="detail">Collection of micro application tools built with HTML, CSS and Javascript.</p>
            <p>
              <a href="https://codepen.io/collection/AZKOYW" target="_blank">See tools collection</a>
              <span class="print-only"> (https://codepen.io/collection/AZKOYW)</span>
            </p>
          </div>
        </section>
        
        <section class="articles">
          <h2>Articles <span class="emoji">📰</span></h2>
          <ul class="list-no">
            <li>
              <a href="https://24days.in/umbraco-cms/2019/responsive-hybrid-navigation" target="_blank">Create a Responsive and Hybrid Navigation in Umbraco 7</a>
              <span class="print-only"> (https://24days.in/umbraco-cms/2019/responsive-hybrid-navigation)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g" target="_blank">How to add Emoji's in your website, using HTML, CSS or JavaScript</a>
              <span class="print-only"> (https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk/google-maps-show-multiple-markers-and-add-your-event-on-click-226i" target="_blank">Google Maps: Show multiple markers and add your event on click</a>
              <span class="print-only"> (https://dev.to/beumsk/google-maps-show-multiple-markers-and-add-your-event-on-click-226i)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk/how-to-show-code-in-a-page-prism-code-highlighter-3hcc" target="_blank">How to show code in a page; Prism code highlighter</a>
              <span class="print-only"> (https://dev.to/beumsk/how-to-show-code-in-a-page-prism-code-highlighter-3hcc)</span>
            </li>
            <li>
              <a href="https://dev.to/beumsk/add-animations-on-scroll-with-aos-3o3n" target="_blank">Add Animations On Scroll with AOS</a>
              <span class="print-only"> (https://dev.to/beumsk/add-animations-on-scroll-with-aos-3o3n)</span>
            </li>
          </ul>
        </section>

        <section class="skills">
          <h2>Skills <span class="emoji">💻</span></h2>
          <ul class="list-block">
            <li>HTML5 - Pug</li>
            <li>CSS3 - Sass - Bootstrap</li>
            <li>ES6 - jQuery</li>
            <li>React</li>
            <li>Angular</li>
            <li>Git - Github</li>
          </ul>
        </section>

        <section class="languages">
          <h2>Languages <span class="emoji">🌍</span></h2>
          <ul class="list-block">
            <li>French</li>
            <li>English</li>
          </ul>
        </section>

        <section class="contact">
          <h2>Contact <span class="emoji">📧</span></h2>
          <p class="cta"><a href="mailto:remybeumier@gmail.com" target="_blank">remybeumier@gmail.com</a></p>
          <p class="cta"><a href="https://remybeumier.be" target="_blank">remybeumier.be</a></p>
        </section>
      </article>
    </>
  )
}