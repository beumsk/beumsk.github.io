(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412],{3534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/generate-a-sitemap-in-nextjs",function(){return n(9595)}])},3753:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var s=n(5893),r=n(7294),i=n(1163),a=n(1664),o=n(5697),c=n.n(o),l=n(4725),p=n.n(l),h=(n(9578),n(2427),n(8193)),d=n(3422),m=n(9095),u=n(4285);function g(e){var t=e.children,n=(0,i.useRouter)();(0,r.useEffect)((function(){p().highlightAll()}),[n]);var o=d.x.filter((function(e){return e.slug===n.asPath.replace("/blog/","")}))[0],c=o.title,l=o.intro,g=o.img,x=o.date,f=o.categories,w=o.url,j=""===x?"No date":"".concat(new Date(x).getDate(),".").concat(new Date(x).getMonth()+1,".").concat(new Date(x).getFullYear()),b=null===f||void 0===f?void 0:f.split(", ").filter((function(e){return e})),y=d.x[d.x.findIndex((function(e){return e.title===c}))+1]||d.x[0],v=[d.x[d.x.findIndex((function(e){return e.title===c}))-1]||d.x[d.x.length-1],y];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Z,{title:"".concat(c," | Blog | R\xe9my Beumier"),description:l,img:g,url:w,itemtype:"Article",children:(0,s.jsx)("div",{className:"container narrow posts-shape",children:(0,s.jsx)("div",{"data-aos":"fade-left",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{itemProp:"headline name",children:c}),(0,s.jsx)("img",{src:g,alt:c,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,s.jsxs)("div",{className:"space-between-x mb-10",children:[(0,s.jsx)("div",{className:"post__categories",children:null===b||void 0===b?void 0:b.map((function(e){return(0,s.jsx)(a.default,{href:"/blog?".concat(e),children:(0,s.jsx)("a",{children:(0,s.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,s.jsx)("time",{className:"post__date",itemProp:"datePublished",content:j,dateTime:j,children:j})]}),(0,s.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,s.jsx)("div",{className:"mb-15",children:(0,s.jsx)(a.default,{href:"/blog",children:(0,s.jsxs)("a",{className:"btn",children:[(0,s.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,s.jsx)(u.Z,{data:v,className:"mb-20"})]})]})})})})})}g.propTypes={meta:c().object,children:c().node,posts:c().array}},9797:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),r=n(5697),i=n.n(r);function a(e){var t=e.className,n=e.sandbox,r=e.title;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"code-iframe-wrapper "+(t||""),children:(0,s.jsx)("iframe",{height:"300",title:r,view:"preview",loading:"lazy",src:"https://codesandbox.io/embed/"+n+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,s.jsx)("a",{href:"https://codesandbox.io/s/"+n,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by R\xe9my Beumier"})})})})}a.propTypes={className:i().string,sandbox:i().string,title:i().string}},9595:function(e,t,n){"use strict";n.r(t);var s=n(5893),r=n(1151),i=n(3753),a=n(9797),o=function(e){var t=e.children;return(0,s.jsx)(i.Z,{children:t})};function c(e){var t=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Sitemaps are important for web crawlers such as google bots, and therefore we need one to improve our site's SEO."}),"\n",(0,s.jsxs)(t.p,{children:["Sadly, Next.js does not provide a go-to option regarding sitemap and I find the external libraries too limited. I tested ",(0,s.jsx)(t.code,{children:"nextjs-sitemap-generator"}),", but I couldn't make it define the ",(0,s.jsx)(t.code,{children:"lastmod"})," or ",(0,s.jsx)(t.code,{children:"changefreq"})," with precision."]}),"\n",(0,s.jsxs)(t.p,{children:["I decided to create something custom and firstly tried to make something with a ",(0,s.jsx)(t.code,{children:"sitemap.xml.js"})," page. It wasn't a success because I couldn't make it an .xml file."]}),"\n",(0,s.jsxs)(t.p,{children:["I went a different way and built a ",(0,s.jsx)(t.code,{children:".mjs"})," file with the purpose of creating my ",(0,s.jsx)(t.code,{children:"sitemap.xml"}),". It uses Node's file creation, ",(0,s.jsx)(t.code,{children:"Globby"})," to crawl files and ",(0,s.jsx)(t.code,{children:"Prettier"})," to format it."]}),"\n",(0,s.jsx)(t.p,{children:"Let's walk through the steps of creating our custom sitemap generator together."}),"\n",(0,s.jsx)(t.h2,{children:"First version"}),"\n",(0,s.jsxs)(t.p,{children:["We want to make sure the ",(0,s.jsx)(t.code,{children:".mjs"})," script creates the sitemap.xml. We will achieve this with Node."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\n\nasync function generate() {\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\n  const pages = ['', 'about', 'contact'];\n  const baseUrl = 'https://your-url.com';\n  const sitemap = `\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n      ${pages\n        .map((page) => {\n          return `\n            <url>\n              <loc>${baseUrl}/${path}</loc>\n              <changefreq>monthly</changefreq>\n            </url>\n          `;\n        })\n        .join('')}\n    </urlset>\n  `;\n\n  writeFileSync('public/sitemap.xml', formatted);\n}\n\ngenerate();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you don't know much about the topic, ",(0,s.jsx)("a",{href:"https://sitemaps.org/protocol.html",target:"_blank",children:"read more about the sitemap protocol"}),"."]}),"\n",(0,s.jsx)(t.h2,{children:"Focus on the files you want in the sitemap"}),"\n",(0,s.jsxs)(t.p,{children:["We now want something that actually represents our website content. We will do that with ",(0,s.jsx)(t.code,{children:"Globby"})," and we will fix the code format with ",(0,s.jsx)(t.code,{children:"Prettier"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\nimport { globby } from 'globby';\nimport prettier from 'prettier';\nasync function generate() {\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\n  const pages = await globby(\n    [\n      // we list all .js files under /pages\n      'pages/*.js',\n      // we could add more specific files to the list such as .md\n    ],\n    // this line gets us more data check the doc: https://nodejs.org/api/fs.html#class-fsstats\n    { stats: true }\n  );\n  const baseUrl = 'https://your-url.com';\n  const sitemap = `\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n      ${pages\n        .map((page) => {\n          const path = page.path.replace('pages/', '').replace('index', '').replace('.js', '');\n\n          return `\n            <url>\n              <loc>${baseUrl}/${path}</loc>\n              <lastmod>${page.stats.mtime}</lastmod>\n              <changefreq>monthly</changefreq>\n            </url>\n          `;\n        })\n        .join('')}\n    </urlset>\n  `;\n\n  const formatted = prettier.format(sitemap, {\n    ...prettierConfig,\n    parser: 'html',\n  });\n\n  writeFileSync('public/sitemap.xml', formatted);\n}\n\ngenerate();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We have something working but still too generic, especially the ",(0,s.jsx)(t.code,{children:"changefreq"})," and the missing ",(0,s.jsx)(t.code,{children:"priority"}),"."]}),"\n",(0,s.jsx)(t.h2,{children:"Improve the logic based on your needs"}),"\n",(0,s.jsx)(t.p,{children:"From this point, we want every entry of our sitemap to reflect its content. Let's add some function logic for this purpose."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { writeFileSync } from 'fs';\nimport { globby } from 'globby';\nimport prettier from 'prettier';\n\nasync function generate() {\n  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');\n  const pages = await globby(['pages/*.js'], { stats: true });\n  const baseUrl = 'https://your-url.com';\n\n  const sitemap = `\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n\n      ${pages\n        .map((page) => {\n          const path = page.path.replace('pages/', '').replace('index', '').replace('.js', '');\n\n          return `\n            <url>\n              <loc>${baseUrl}/${path}</loc>\n              <lastmod>${convertDate(page.stats.mtime)}</lastmod>\n              <changefreq>${changefreq(path)}</changefreq>\n              <priority>${priority(path)}</priority>\n            </url>\n          `;\n        })\n        .join('')}\n    </urlset>\n    `;\n\n  const formatted = prettier.format(sitemap, {\n    ...prettierConfig,\n    parser: 'html',\n  });\n\n  writeFileSync('public/sitemap.xml', formatted);\n}\n\ngenerate();\n\nfunction priority(path) {\n  switch (path) {\n    case '':\n      return '1.0';\n    case 'about':\n      return '0.8';\n    default:\n      return '0.6';\n  }\n}\n\nfunction changefreq(path) {\n  switch (path) {\n    case '':\n      return 'weekly';\n    case 'about':\n      return 'monthly';\n    default:\n      return 'yearly';\n  }\n}\n\n// convert date to format yyyy-mm-dd\nfunction convertDate(inputFormat) {\n  function pad(s) {\n    return s < 10 ? '0' + s : s;\n  }\n  var d = new Date(inputFormat);\n  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We have built a complete sitemap with specific URL, last modification date, change frequency and priority.\nCheck out ",(0,s.jsx)("a",{href:"https://github.com/sindresorhus/globby",target:"_blank",children:"the globby documentation for more possibilities"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"TLDR"}),": ",(0,s.jsx)("a",{href:"https://codesandbox.io/s/custom-sitemap-i3jvko",target:"_blank",children:"Codesandbox: Custom sitemap in Next.js"}),"."]}),"\n",(0,s.jsx)(a.Z,{sandbox:"custom-sitemap-i3jvko",title:"Custom sitemap in Next.js"}),"\n",(0,s.jsx)(t.p,{children:"Would you improve this code or do it in another way? Don't hesitate to share your ideas!"}),"\n",(0,s.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,Object.assign({},e,{children:(0,s.jsx)(c,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return t=3534,e(e.s=t);var t}));var t=e.O();_N_E=t}]);