---
title: 'Set up ESLint into Next.js'
intro: 'How to set up the ESLint linter into a Next.js project'
img: '/images/posts/set-up-eslint-into-nextjs.jpg'
date: '02/11/2022'
categories: 'next.js, tutorial'
---

Linters are so useful that when we end up in a project without one, we are totally frustrated. 
It happened to me with this very project and we will see how to set up a linter and leverage huge time benefits.

## Basic Next.js linter
The default Next.js linter isn't installed automatically, and we get noticed every time we build our application.
Following Next.js advice, we run `yarn lint` in the terminal to face another error. We must first install it.
*I had issues installing the linter with `npm`, so I will use yarn in this article, as advised by the Next team.*

1. Install ESLint `yarn add --dev eslint`
2. Run lint `yarn lint`
3. Follow the instructions to install `strict` or `base` Next.js linter
4. Run `yarn lint` again and this time it will scan the entire app and give back the potential linter errors
5. If there are errors, `yarn lint --fix` will fix everything automatically, but there is also a log of every error and their location to solve manually


## Extend the linter rules
Would we have more rules to our linter, there is a way to extend what Next.js set as linting.
1. We should have a `.eslintrc.json` file to open
Strict:
```js
{
  "extends": "next/core-web-vitals"
}
```
Basic: 
```js
{
  "extends": "next"
}
```
2. We make the `extends` an array of strings and add anything, for example `eslint-config-airbnb`
```js
{
  "extends": ["next/core-web-vitals", "eslint-config-airbnb"]
}
```
3. Install it with the command `yarn add --dev eslint-config-airbnb`
4. If we want to change any linter rule, here is the way
```js
{
  "extends": ["next/core-web-vitals", "eslint-config-airbnb"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off"
  }
}
```
5. We can check this [official link for more info on linters](https://nextjs.org/docs/basic-features/eslint)


## Format on save with Prettier
Another point I find close to linters are the formatters. They help us to have consistent syntax and spaces across all our files.
Let's see how their magic can happen on every save.

1. Install Prettier `yarn add --dev prettier eslint-config-prettier`
2. If there isn't one already, we create a `.prettierrc.json` file
3. Here are my usual settings:
```js
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```
4. Check out all [settings available](https://prettier.io/docs/en/options.html)
5. There is also a `.prettierignore` file to avoid formatting some files
6. Let's go to the editor settings and update 'default formatter' to Prettier
7. Let's save any file to see the magic happen


We are all set to code efficiently with the help of linters and formatters.

Enjoy coding with Next.js!
