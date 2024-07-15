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

Also make sure your linter is error-free with `npm run lint` or `yarn lint`

Deployment should be managed by the pipeline (`npm run deploy` or `yarn deploy`)

Commit and Push your changes to master.
This will trigger Github Action and deploy the changes to gh-pages.

## TODO

- add new projects (kineval, todolist?)
- shorten cv old web experience? + add senior dev? + new skills to filter?
- optimize images with script
- review images (avoid bg-img, use different resolutions: https://dev.to/builderio/optimal-images-in-html-5bg9)
- review design: https://anthonyhobday.com/sideprojects/saferules/

1.5
- metrics animation? Number of projects/sites/hours/languages/experience/soft-skills
- back to top button

X.X
- add more images of features/pages?

Blog posts
- firebase series: rules, cloud fx, diff env., backup
- react advanced?
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
- Create blog post image: https://codepen.io/beumsk/full/wvjYygY and upload in /public/images/posts

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
- Create an optimized full size screenshot of live version and upload in /public/images/projects

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

## ANALYTICS

Easy web analytics without tracking of personal data at https://beumsk.goatcounter.com/
