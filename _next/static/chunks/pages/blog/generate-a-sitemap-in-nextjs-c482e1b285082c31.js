(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412],{3534:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/generate-a-sitemap-in-nextjs",function(){return r(9595)}])},3753:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(5893),s=r(7294),i=r(1163),a=r(1664),o=r(5697),c=r.n(o),l=r(4725),p=r.n(l),d=(r(9578),r(2427),r(8193)),h=r(3422),m=r(9095),u=r(4285);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}var x=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function w(e){var t=e.children,r=(0,i.useRouter)();(0,s.useEffect)((function(){p().highlightAll()}),[r]);var o=h.x.filter((function(e){return e.slug===r.asPath.replace("/blog/","")})),c=o[0],l=c.title,g=c.intro,w=c.img,j=c.published,b=c.modified,y=c.categories,v=(c.url,null===y||void 0===y?void 0:y.split(", ").filter((function(e){return e}))),N=h.x[h.x.findIndex((function(e){return e.title===l}))+1]||h.x[0],_=[h.x[h.x.findIndex((function(e){return e.title===l}))-1]||h.x[h.x.length-1],N];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m.Z,f({title:"".concat(l," | Blog | R\xe9my Beumier"),description:g,itemtype:"Article"},o[0],{children:(0,n.jsx)("div",{className:"container narrow posts-shape",children:(0,n.jsx)("div",{"data-aos":"fade-left",children:(0,n.jsxs)("article",{children:[(0,n.jsx)("h1",{itemProp:"headline name",children:l}),(0,n.jsx)("img",{src:w,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,n.jsxs)("div",{className:"space-between-x mb-10",children:[(0,n.jsx)("div",{className:"post__categories",children:null===v||void 0===v?void 0:v.map((function(e){return(0,n.jsx)(a.default,{href:"/blog?".concat(e),children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:x(j),dateTime:x(j),children:["Published on: ",x(j)]}),(0,n.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:x(b),dateTime:x(b),children:["Modified on: ",x(b)]})]})]}),(0,n.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,n.jsx)("div",{className:"mb-15",children:(0,n.jsx)(a.default,{href:"/blog",children:(0,n.jsxs)("a",{className:"btn",children:[(0,n.jsx)(d.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,n.jsx)(u.Z,{data:_,className:"mb-20"})]})]})})})}))})}w.propTypes={meta:c().object,children:c().node,posts:c().array}},9797:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),s=r(5697),i=r.n(s);function a(e){var t=e.className,r=e.sandbox,s=e.title;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"code-iframe-wrapper "+(t||""),children:(0,n.jsx)("iframe",{height:"300",title:s,view:"preview",loading:"lazy",src:"https://codesandbox.io/embed/"+r+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,n.jsx)("a",{href:"https://codesandbox.io/s/"+r,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by R\xe9my Beumier"})})})})}a.propTypes={className:i().string,sandbox:i().string,title:i().string}},9595:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(1151),i=r(3753),a=r(9797),o=function(e){var t=e.children;return(0,n.jsx)(i.Z,{children:t})};function c(e){var t=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sitemaps are important for web crawlers such as google bots, and therefore we need one to improve our site's SEO."}),"\n",(0,n.jsxs)(t.p,{children:["Sadly, Next.js does not provide a go-to option regarding sitemap and I find the external libraries too limited. I tested ",(0,n.jsx)(t.code,{children:"nextjs-sitemap-generator"}),", but I couldn't make it define the ",(0,n.jsx)(t.code,{children:"lastmod"})," or ",(0,n.jsx)(t.code,{children:"changefreq"})," with precision."]}),"\n",(0,n.jsxs)(t.p,{children:["I decided to create something custom and firstly tried to make something with a ",(0,n.jsx)(t.code,{children:"sitemap.xml.js"})," page. It wasn't a success because I couldn't make it an .xml file."]}),"\n",(0,n.jsxs)(t.p,{children:["I went a different way and built a ",(0,n.jsx)(t.code,{children:".mjs"})," file with the purpose of creating my ",(0,n.jsx)(t.code,{children:"sitemap.xml"}),". It uses Node's file creation, ",(0,n.jsx)(t.code,{children:"Globby"})," to crawl files and ",(0,n.jsx)(t.code,{children:"Prettier"})," to format it."]}),"\n",(0,n.jsx)(t.p,{children:"Let's walk through the steps of creating our custom sitemap generator together."}),"\n",(0,n.jsx)(t.h2,{children:"First version"}),"\n",(0,n.jsxs)(t.p,{children:["We want to make sure the ",(0,n.jsx)(t.code,{children:".mjs"})," script creates the sitemap.xml. We will achieve this with Node."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\r\n\r\nasync function generate() {\r\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\r\n  const pages = ['', 'about', 'contact'];\r\n  const baseUrl = 'https://your-url.com';\r\n  const sitemap = `\r\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\r\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\r\n      ${pages\r\n        .map((page) => {\r\n          return `\r\n            <url>\r\n              <loc>${baseUrl}/${path}</loc>\r\n              <changefreq>monthly</changefreq>\r\n            </url>\r\n          `;\r\n        })\r\n        .join('')}\r\n    </urlset>\r\n  `;\r\n\r\n  writeFileSync('public/sitemap.xml', formatted);\r\n}\r\n\r\ngenerate();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you don't know much about the topic, ",(0,n.jsx)("a",{href:"https://sitemaps.org/protocol.html",target:"_blank",children:"read more about the sitemap protocol"}),"."]}),"\n",(0,n.jsx)(t.h2,{children:"Focus on the files you want in the sitemap"}),"\n",(0,n.jsxs)(t.p,{children:["We now want something that actually represents our website content. We will do that with ",(0,n.jsx)(t.code,{children:"Globby"})," and we will fix the code format with ",(0,n.jsx)(t.code,{children:"Prettier"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\r\nimport { globby } from 'globby';\r\nimport prettier from 'prettier';\r\nasync function generate() {\r\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\r\n  const pages = await globby(\r\n    [\r\n      // we list all .js files under /pages\r\n      'pages/*.js',\r\n      // we could add more specific files to the list such as .md\r\n    ],\r\n    // this line gets us more data check the doc: https://nodejs.org/api/fs.html#class-fsstats\r\n    { stats: true }\r\n  );\r\n  const baseUrl = 'https://your-url.com';\r\n  const sitemap = `\r\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\r\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\r\n      ${pages\r\n        .map((page) => {\r\n          const path = page.path.replace('pages/', '').replace('index', '').replace('.js', '');\r\n\r\n          return `\r\n            <url>\r\n              <loc>${baseUrl}/${path}</loc>\r\n              <lastmod>${page.stats.mtime}</lastmod>\r\n              <changefreq>monthly</changefreq>\r\n            </url>\r\n          `;\r\n        })\r\n        .join('')}\r\n    </urlset>\r\n  `;\r\n\r\n  const formatted = prettier.format(sitemap, {\r\n    ...prettierConfig,\r\n    parser: 'html',\r\n  });\r\n\r\n  writeFileSync('public/sitemap.xml', formatted);\r\n}\r\n\r\ngenerate();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We have something working but still too generic, especially the ",(0,n.jsx)(t.code,{children:"changefreq"})," and the missing ",(0,n.jsx)(t.code,{children:"priority"}),"."]}),"\n",(0,n.jsx)(t.h2,{children:"Improve the logic based on your needs"}),"\n",(0,n.jsx)(t.p,{children:"From this point, we want every entry of our sitemap to reflect its content. Let's add some function logic for this purpose."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\r\nimport { globby } from 'globby';\r\nimport prettier from 'prettier';\r\n\r\nasync function generate() {\r\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\r\n  const pages = await globby(['pages/*.js'], { stats: true });\r\n  const baseUrl = 'https://your-url.com';\r\n\r\n  const sitemap = `\r\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\r\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\r\n\r\n      ${pages\r\n        .map((page) => {\r\n          const path = page.path.replace('pages/', '').replace('index', '').replace('.js', '');\r\n\r\n          return `\r\n            <url>\r\n              <loc>${baseUrl}/${path}</loc>\r\n              <lastmod>${convertDate(page.stats.mtime)}</lastmod>\r\n              <changefreq>${changefreq(path)}</changefreq>\r\n              <priority>${priority(path)}</priority>\r\n            </url>\r\n          `;\r\n        })\r\n        .join('')}\r\n    </urlset>\r\n    `;\r\n\r\n  const formatted = prettier.format(sitemap, {\r\n    ...prettierConfig,\r\n    parser: 'html',\r\n  });\r\n\r\n  writeFileSync('public/sitemap.xml', formatted);\r\n}\r\n\r\ngenerate();\r\n\r\nfunction priority(path) {\r\n  switch (path) {\r\n    case '':\r\n      return '1.0';\r\n    case 'about':\r\n      return '0.8';\r\n    default:\r\n      return '0.6';\r\n  }\r\n}\r\n\r\nfunction changefreq(path) {\r\n  switch (path) {\r\n    case '':\r\n      return 'weekly';\r\n    case 'about':\r\n      return 'monthly';\r\n    default:\r\n      return 'yearly';\r\n  }\r\n}\r\n\r\n// convert date to format yyyy-mm-dd\r\nfunction convertDate(inputFormat) {\r\n  function pad(s) {\r\n    return s < 10 ? '0' + s : s;\r\n  }\r\n  var d = new Date(inputFormat);\r\n  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');\r\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We have built a complete sitemap with specific URL, last modification date, change frequency and priority.\r\nCheck out ",(0,n.jsx)("a",{href:"https://github.com/sindresorhus/globby",target:"_blank",children:"the globby documentation for more possibilities"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TLDR"}),": ",(0,n.jsx)("a",{href:"https://codesandbox.io/s/custom-sitemap-i3jvko",target:"_blank",children:"Codesandbox: Custom sitemap in Next.js"}),"."]}),"\n",(0,n.jsx)(a.Z,{sandbox:"custom-sitemap-i3jvko",title:"Custom sitemap in Next.js"}),"\n",(0,n.jsx)(t.p,{children:"Would you improve this code or do it in another way? Don't hesitate to share your ideas!"}),"\n",(0,n.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(c,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return t=3534,e(e.s=t);var t}));var t=e.O();_N_E=t}]);