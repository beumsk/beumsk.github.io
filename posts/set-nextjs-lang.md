---
title: 'Set Next.js lang'
intro: 'Specify HTML lang attribute in a Next.js site'
img: '/images/posts/set-nextjs-lang.jpg'
date: '12/27/2021'
categories: 'next.js, tutorial'
---

It is advised to define the language of your site, even if you offer a single one. It's very straightforward in plain HTML, but it isn't so intuitive in Next.js. Let's see how we can do so.

## Static Site Generation
In Next.js, if you want to modify the `<head>` you import Head from next/Head, but what if you want to pass a property to the `<html>` tag? Next provides an option to add another JS file – in the pages folder – called `_document.js` allowing you to be in control of the upper HTML.

Here is the default content of it:

```html
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

Make sure the above `_document.js` is in the pages folder.
You can now add the `lang` property on HTML `<html lang="en">` and have the language defined for your website.

## Server Side Rendering
If your site works with SSR, you can use another solution.
In `next.config.js` at the root of your project, define the following `i18n` object:

```js
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
```

Note this solution only works in Next.js version 10 and newer.

Enjoy coding with Next.js!
