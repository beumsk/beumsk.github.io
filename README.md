# Rémy Beumier's portfolio site

Website built with React and Nextjs.

Sass for styling.

React icons for icons.

MDX turn .mdx files into html.

Gray-matter gets the meta data out of .mdx files

## INSTALL

```
npm install
yarn install
npm run dev
yarn dev
```

needs node v14

## DEPLOY

Make sure your linter is error-free with `npm run lint` or `yarn lint`

Deployment to gh-page should be managed by Github Action (`npm run deploy` or `yarn deploy`)

Trigger it with Commit and Push to master.

## TODO

- add new commits for 2025 !
- add new projects (kineval, tarava?, todolist?)
- shorten cv old web experience? + add senior dev? + new skills to filter?
- review images (avoid bg-img, use different resolutions: https://dev.to/builderio/optimal-images-in-html-5bg9)
- review design: https://anthonyhobday.com/sideprojects/saferules/

X.X
- advertisements in blog posts ?
- back to top button
- site search ??

Blog posts
- husky pre-commit hooks !!
- github actions cicd
- firebase series: rules, cloud fx, diff env., backup
- use prism in your nextjs markdown (+scss)
- css posts: dropdown, input with label animation
- use mdx with nextjs
- md to html
- SSG vs SSR

## BLOG POSTS

- Create a new .mdx file under `/pages/blog`
- Give it a powerful name
- Add the meta data at the very top
  ```
  ---
  title: 'Post title'
  intro: 'Post longer title or intro'
  published: '2022-12-30'
  modified: '2022-12-31'
  categories: 'next.js, css, tutorial, analytics'
  ---
  ```
- Write the post with keywords, speaking with we, code examples and a final result on codepen or codesandbox
- Review spell on https://languagetool.org/
- Create blog post image and upload in /public/images/posts 
  - Dimensions of 1200x630px reduced to 600x315px in .jpg
  - `yarn screen:bm <file-name.extension>` (eg. `yarn screen:bm article.jpg`)
  - OR https://codepen.io/beumsk/full/wvjYygY
- Create blog content image and upload in /public/images/content
  - TODO: create script to optimize blog content images

## PROJECTS

### PRO

- Add en entry in data/projects.js
  ```
  {
    slug: 'project-title',
    title: 'Project title',
    link: '/projects/project-title',
    intro: 'Project intro text',
    current: 'https://www.current-link.com/',
    past: 'https://web.archive.org/web/xxxxxxxxxxx/https://past-link.com/',
    img: '/images/projects/project-title.jpg',
    screen: '/images/projects/project-title-screen.png',
    modified: '2022-12-31',
    tech: ['tech1', 'tech2'],
    chall: [
      'First challenge',
      'Second challenge',
    ],
    homepage: true,
    type: 'pro',
  },
  ```
- Create an optimized miniature image and upload in /public/images/projects
  - Dimensions of 1366x768px reduced to 683x384px in .jpg (or 1200x630px & 600x315px)
  - `yarn screen:pm <project-url> <project-name.extension>` (eg. `yarn screen:pm https://remybeumier.be remybeumier.jpg`)
- Create one or more optimized full size screenshots of live version and upload in /public/images/projects
  - Dimensions of 1200x100% (reduced?) in .jpg
  - `yarn screen:pf <project-url> <project-name-screen.extension>` (eg. `yarn screen:pf https://remybeumier.be remybeumier-screen.jpg`)
  - `yarn screen:pf <project-url> <project-name-screen-index.extension>` (eg. `yarn screen:pf https://remybeumier.be remybeumier-screen-1.jpg`)

### PERSO

- Add en entry in data/projects.js
  ```
  {
    slug: 'project-title',
    title: 'Project title',
    link: '/projects/project-title',
    intro: 'Project intro text',
    img: '/images/projects/project-title.jpg',
    pen: 'xxxxxx',
    sandbox: 'sandbox-title-xxxxxx',
    modified: '2022-12-31',
    tech: ['tech1', 'tech2'],
    chall: [
      'First challenge',
      'Second challenge',
    ],
    homepage: true,
    type: 'perso',
  }
  ```
- Create an optimized miniature image and upload in /public/images/projects
  - Dimensions of 1366x768px reduced to 683x384px in .jpg (or 1200x630px & 600x315px)
  - `yarn screen:pm <project-url> <project-name.extension>` (eg. `yarn screen:pm https://remybeumier.be rb.jpg`)

## DATA (COMMITS)

- `yarn commits:a` to fetch all of my commits
<!-- - `yarn commits:d` to fetch more info details about all commits -->
- `yarn commits` to rework the commits data to keep only useful information

## ANALYTICS

Easy web analytics without tracking of personal data at https://beumsk.goatcounter.com/
