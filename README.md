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

Ensure you updated the sitemap with `npm run sitemap` or `yarn sitemap`

Also make sure your linter is error-free with `npm run lint` or `yarn lint`

Deployment should be managed by the pipeline (`npm run deploy` or `yarn deploy`)

Commit and Push your changes to master.
This will trigger Github Action and deploy the changes to gh-pages.

## TODO

- add new projects (todolist?)
- review images (avoid bg-img, use different resolutions: https://dev.to/builderio/optimal-images-in-html-5bg9)
- review design: https://anthonyhobday.com/sideprojects/saferules/

1.4
- rework sitemap: basing on modified date of item is wrong with github pipeline -> use real dates
- metrics animation? Number of projects/sites/hours/languages/experience/soft-skills
- back to top button

X.X
- trailing slash urls not working (issue with github)
- add more images of features/pages?
- low res images (automate without next-optimized-images)
- rethink scss structure (BEM?)

Blog posts
- use prism in your nextjs markdown (+scss)
- css posts: dropdown, input with label animation
- use mdx with nextjs
- local ssg site with python
- props to parent/child
- md to html
- SSG vs SSR
- dev.to

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
- Create blog post image: https://codepen.io/beumsk/full/wvjYygY

## PROJECTS

### PRO

- Add en entry in data/projects.js
  ```
  {
    title: 'project title',
    link: '/projects/project-title',
    intro: 'Project intro text',
    current: 'https://www.current-link.com/',
    past: 'https://web.archive.org/web/xxxxxxxxxxx/https://past-link.com/',
    img: '/images/projects/project-title.jpg',
    screen: '/images/projects/project-title-screen.png',
    tech: ['tech1', 'tech2'],
    chall: [
      'First challenge',
      'Second challenge',
    ],
    homepage: true,
    type: 'pro',
  },
  ```
- Add an miniature image
- Add a full size screenshot of live version if it's a professional project

### PERSO

- Add en entry in data/projects.js
  ```
  {
    title: 'project title',
    link: '/projects/project-title',
    intro: 'Project intro text',
    img: '/images/projects/project-title.jpg',
    pen: 'xxxxxx',
    sandbox: 'sandbox-title-xxxxxx',
    tech: ['tech1', 'tech2'],
    chall: [
      'First challenge',
      'Second challenge',
    ],
    homepage: true,
    type: 'perso',
  }
  ```
- Add an miniature image

## ANALYTICS

Easy web analytics without tracking of personal data at https://beumsk.goatcounter.com/
