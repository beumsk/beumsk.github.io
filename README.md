# New version of portfolio site

Website built with React and Nextjs.

- Home: about (text & image), projects (carousel? random >< favorites), Blog #V2 (latest 3 price? podium? tiles?), Contact (socials)
- Projects: work & personal (intro, Technologies, challenges, lessons learned, codepen, link to repo)
- Blog #V2 (import Dev.to or link?)
- Contact (dedicated page or home is enough?)

## How to install?

```
npm install
npm run dev
```

## TODO

- homepage layout
- add cv
- add list of skills
- create my own AOS (to avoid overflow issues)
- fill in all projects data (+add more images of features/pages?)
- add SEO info (title, desc, images)
- save time machine when bee/eli paris goes live
- low res images (automate without next-optimized-images)
- update nextjs and react
- create real blog posts (next js, )
- add 404 content (random proj+post)
- rethink scss structure (BEM?)
- add project filter and order

## DEPLOY

npm run build & npm run export (npm run deploy)
Commit and Push your changes to master.
This will trigger Github Action and deploy the changes to gh-pages.
Check the result at https://beumsk.github.io
