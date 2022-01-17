---
title: 'Next.js dark mode'
intro: 'How to add a dark mode to your Next.js site'
img: '/images/posts/nextjs-dark-mode.jpg'
date: '01/15/2022'
categories: 'next.js, tutorial'
---

When I started listing the features I wanted for my new website, a dark mode toggle was in the top tier list as it's becoming a standard. Even though I'm not a big supporter of dark mode, I know people love it and I was willing to tackle this challenge.

## The CSS part
For this feature, I wanted to use CSS variables. I have a range of variables that will switch according to the color mode.
Here is a snippet example:

```css
main {
  --text: #000000;
  --text2: #333333;
  --bg2: #eeeeee;
  --bg: #ffffff;
}
```

Here the dark mode style if the `.dark` class is applied. We will see the JavaScript later:

```css
main.dark {
  --text: #ffffff;
  --text2: #eeeeee;
  --bg2: #333333;
  --bg: #000000;
}
```

To finalise the styling part, I use the `prefers-color-scheme` check to match users settings.
It needs to be overridden with the `.light` class.
This is done this way:

```css
@media (prefers-color-scheme: dark) {
  main {
    --text: #ffffff;
    --text2: #eeeeee;
    --bg2: #333333;
    --bg: #000000;
  }
  main.light {
    --text: #000000;
    --text2: #333333;
    --bg2: #eeeeee;
    --bg: #ffffff;
  }
}
```

## The JavaScript and Next.js part
Let's see how we can make this dark mode toggle with `useEffect` and `useState`.
First, let's create a button that will change the class of our `main` element.

When we click on the button we toggle the `theme` thanks to React hooks.

```js
import { useState } from 'react';

export default function Main(props) {
  const [theme, setTheme] = useState('');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main className={theme}>
      <button onClick={switchTheme} theme={theme}>
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </main>
  )
}
```

We have a functional button toggling between dark and light modes. However, it will not save anything and if we reload the page, we will face a light mode whatever we opted for. That's where we use `localStorage`.

In order to access the window object and therefore the localStorage, we must ensure the page has fully loaded. We do this with the `useEffect(() => {...}, [])`.
We can then check localStorage and if there is an entry for `theme` we apply it.

We also update the `switchTheme` to save our theme preference in localStorage.

```js
import { useEffect, useState } from 'react';

export default function Main(props) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
      let localTheme = window.localStorage.getItem('theme');
      setTheme(localTheme);
  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <main className={theme}>
      <button onClick={switchTheme} theme={theme}>
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </main>
  )
}
```

You should have a functional dark mode toggle in your Next.js app by now, otherwise check the steps again or click the full solution link below.

**TLDR**: [Codesandbox: Dark mode toggle in Next.js](https://codesandbox.io/s/darkmode-0ubir).

> I really wanted to share my solution for this, as I found it particularly difficult to make it run, especially with the `localStorage`. I hope it will make your coding easier.

Enjoy coding with Next.js!
