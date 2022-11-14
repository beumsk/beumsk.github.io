(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{6217:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/nextjs-dark-mode",function(){return n(4748)}])},3753:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),s=n(7294),a=n(1163),i=n(1664),o=n(5697),l=n.n(o),c=n(4725),h=n.n(c),d=(n(9578),n(2427),n(8193)),m=n(3422),u=n(9095),g=n(4285);function x(e){var t=e.children,n=(0,a.useRouter)();(0,s.useEffect)((function(){h().highlightAll()}),[n]);var o=m.x.filter((function(e){return e.slug===n.asPath.replace("/blog/","")}))[0],l=o.title,c=o.intro,x=o.img,f=o.date,p=o.categories,j=o.url,w=""===f?"No date":"".concat(new Date(f).getDate(),".").concat(new Date(f).getMonth()+1,".").concat(new Date(f).getFullYear()),b=null===p||void 0===p?void 0:p.split(", ").filter((function(e){return e})),k=m.x[m.x.findIndex((function(e){return e.title===l}))+1]||m.x[0],v=[m.x[m.x.findIndex((function(e){return e.title===l}))-1]||m.x[m.x.length-1],k];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.Z,{title:"".concat(l," | Blog | R\xe9my Beumier"),description:c,img:x,url:j,itemtype:"Article",children:(0,r.jsx)("div",{className:"container narrow posts-shape",children:(0,r.jsx)("div",{"data-aos":"fade-left",children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{itemProp:"headline name",children:l}),(0,r.jsx)("img",{src:x,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,r.jsxs)("div",{className:"space-between-x mb-10",children:[(0,r.jsx)("div",{className:"post__categories",children:null===b||void 0===b?void 0:b.map((function(e){return(0,r.jsx)(i.default,{href:"/blog?".concat(e),children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,r.jsx)("time",{className:"post__date",itemProp:"datePublished",content:w,dateTime:w,children:w})]}),(0,r.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,r.jsx)("div",{className:"mb-15",children:(0,r.jsx)(i.default,{href:"/blog",children:(0,r.jsxs)("a",{className:"btn",children:[(0,r.jsx)(d.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,r.jsx)(g.Z,{data:v,className:"mb-20"})]})]})})})})})}x.propTypes={meta:l().object,children:l().node,posts:l().array}},9797:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(5697),a=n.n(s);function i(e){var t=e.className,n=e.sandbox,s=e.title;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"code-iframe-wrapper "+(t||""),children:(0,r.jsx)("iframe",{height:"300",title:s,view:"preview",loading:"lazy",src:"https://codesandbox.io/embed/"+n+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,r.jsx)("a",{href:"https://codesandbox.io/s/"+n,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by R\xe9my Beumier"})})})})}i.propTypes={className:a().string,sandbox:a().string,title:a().string}},4748:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(1151),a=n(3753),i=n(9797),o=function(e){var t=e.children;return(0,r.jsx)(a.Z,{children:t})};function l(e){var t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When I started listing the features I wanted for my new website, a dark mode toggle was in the top tier list as it's becoming a standard. Even though I'm not a big supporter of dark mode, I know people love it and I was willing to tackle this challenge."}),"\n",(0,r.jsx)(t.h2,{children:"The CSS part"}),"\n",(0,r.jsx)(t.p,{children:"For this feature, we want to use CSS variables. We have a range of variables that will switch according to the color mode.\r\nHere is a snippet example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"main {\r\n  --text: #000000;\r\n  --text2: #333333;\r\n  --bg2: #eeeeee;\r\n  --bg: #ffffff;\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here the dark mode style if the ",(0,r.jsx)(t.code,{children:".dark"})," class is applied. We will see the JavaScript later:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"main.dark {\r\n  --text: #ffffff;\r\n  --text2: #eeeeee;\r\n  --bg2: #333333;\r\n  --bg: #000000;\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To finalise the styling part, we use the ",(0,r.jsx)(t.code,{children:"prefers-color-scheme"})," check to match users settings.\r\nIt needs to be overridden with the ",(0,r.jsx)(t.code,{children:".light"})," class.\r\nThis is done this way:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:"@media (prefers-color-scheme: dark) {\r\n  main {\r\n    --text: #ffffff;\r\n    --text2: #eeeeee;\r\n    --bg2: #333333;\r\n    --bg: #000000;\r\n  }\r\n  main.light {\r\n    --text: #000000;\r\n    --text2: #333333;\r\n    --bg2: #eeeeee;\r\n    --bg: #ffffff;\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"The JavaScript and Next.js part"}),"\n",(0,r.jsxs)(t.p,{children:["Let's see how we can make this dark mode toggle with ",(0,r.jsx)(t.code,{children:"useEffect"})," and ",(0,r.jsx)(t.code,{children:"useState"}),".\r\nFirst, let's create a button that will change the class of our ",(0,r.jsx)(t.code,{children:"main"})," element."]}),"\n",(0,r.jsxs)(t.p,{children:["When we click on the button we toggle the ",(0,r.jsx)(t.code,{children:"theme"})," thanks to React hooks."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { useState } from 'react';\r\n\r\nexport default function Main(props) {\r\n  const [theme, setTheme] = useState('');\r\n\r\n  const switchTheme = () => {\r\n    const newTheme = theme === 'light' ? 'dark' : 'light';\r\n    setTheme(newTheme);\r\n  };\r\n\r\n  return (\r\n    <main className={theme}>\r\n      <button onClick={switchTheme} theme={theme}>\r\n        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}\r\n      </button>\r\n    </main>\r\n  );\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We have a functional button toggling between dark and light modes. However, it will not save anything and if we reload the page, we will face a light mode whatever we opted for. That's where we use ",(0,r.jsx)(t.code,{children:"localStorage"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In order to access the window object and therefore the localStorage, we must ensure the page has fully loaded. We do this with the ",(0,r.jsx)(t.code,{children:"useEffect(() => {...}, [])"}),".\r\nWe can then check localStorage and if there is an entry for ",(0,r.jsx)(t.code,{children:"theme"})," we apply it."]}),"\n",(0,r.jsxs)(t.p,{children:["We also update the ",(0,r.jsx)(t.code,{children:"switchTheme"})," to save our theme preference in localStorage."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { useEffect, useState } from 'react';\r\n\r\nexport default function Main(props) {\r\n  const [theme, setTheme] = useState('');\r\n\r\n  useEffect(() => {\r\n    let localTheme = window.localStorage.getItem('theme');\r\n    setTheme(localTheme);\r\n  }, []);\r\n\r\n  const switchTheme = () => {\r\n    const newTheme = theme === 'light' ? 'dark' : 'light';\r\n    window.localStorage.setItem('theme', newTheme);\r\n    setTheme(newTheme);\r\n  };\r\n\r\n  return (\r\n    <main className={theme}>\r\n      <button onClick={switchTheme} theme={theme}>\r\n        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}\r\n      </button>\r\n    </main>\r\n  );\r\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"We have a functional dark mode toggle in your Next.js app by now. In case of struggle, check the steps again or click the full solution link below."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TLDR"}),": ",(0,r.jsx)("a",{href:"https://codesandbox.io/s/darkmode-0ubir",target:"_blank",children:"Codesandbox: Dark mode toggle in Next.js"}),"."]}),"\n",(0,r.jsx)(i.Z,{sandbox:"darkmode-0ubir",title:"Dark mode toggle in Next.js"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["I really wanted to share my solution for this, as I found it particularly difficult to make it run, especially with the ",(0,r.jsx)(t.code,{children:"localStorage"}),". I hope it will make your coding easier."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(l,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return t=6217,e(e.s=t);var t}));var t=e.O();_N_E=t}]);