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

## TODO

- new projects (todolist?)
- figure out why the github ci doesn't build properly -> /gh-pages doesn't get the commit

1.4
- metrics animation? Number of projects/sites/hours/languages/experience/soft-skills
- back to top button

X.X
- trailing slash urls not working (only prod)
- add more images of features/pages?
- low res images (automate without next-optimized-images)
- rethink scss structure (BEM?)

Blog posts
- css posts: switch button, accordion, dropdown, css-only?
- use prism in your nextjs markdown (+scss)
- use mdx with nextjs
- local ssg site with python
- props to parent/child
- md to html
- SSG vs SSR
- dev.to

## DEPLOY

```
npm run lint
yarn lint
npm run deploy
yarn deploy
```

Commit and Push your changes to master.
This will trigger Github Action and deploy the changes to gh-pages.

## ANALYTICS

Easy web analytics without tracking of personal data at https://beumsk.goatcounter.com/
