"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{4911:function(e,t,i){i.d(t,{Z:function(){return x}});var s=i(6042),n=i(9396),r=i(5893),o=i(7294),l=i(1163),a=i(4725),c=i.n(a),d=(i(9578),i(8674),i(7013),i(2427),i(7771)),m=i(3422),u=i.n(m),h=i(2362),g=i(6945),p=i(9786),b=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function x(e){var t=e.children,i=(0,l.useRouter)();(0,o.useEffect)((function(){c().highlightAll()}),[i]);var a=u().find((function(e){return e.slug===i.asPath.replace("/blog/","")})),m=a.title,x=a.intro,j=a.img,f=a.published,w=a.modified,y=a.categories,k=null===y||void 0===y?void 0:y.split(", ").filter((function(e){return e})),v=u()[u().findIndex((function(e){return e.title===m}))+1]||u()[0],N=[u()[u().findIndex((function(e){return e.title===m}))-1]||u()[u().length-1],v];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(g.Z,(0,n.Z)((0,s.Z)({title:"".concat(m," | Blog | R\xe9my Beumier"),description:x,itemtype:"Article"},a),{children:(0,r.jsx)("div",{className:"container narrow post-shape",children:(0,r.jsx)("div",{"data-aos":"fade-left",children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{itemProp:"headline name",children:m}),(0,r.jsx)("img",{src:j,alt:m,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,r.jsxs)("div",{className:"space-between-x mb-10",children:[(0,r.jsx)("div",{className:"post__categories",children:null===k||void 0===k?void 0:k.map((function(e){return(0,r.jsx)(p.Z,{href:"/blog?cat=".concat(e),children:(0,r.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})},e)}))}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:b(f),dateTime:b(f),children:["Published on: ",b(f)]}),(0,r.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:b(w),dateTime:b(w),children:["Modified on: ",b(w)]})]})]}),(0,r.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,r.jsx)("div",{className:"mb-15",children:(0,r.jsxs)(p.Z,{href:"/blog",className:"btn",children:[(0,r.jsx)(d.FtK,{className:"mr-1"}),"Back to blog listing"]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"mb-5",children:"Suggested articles"}),(0,r.jsx)(h.Z,{data:N,className:"mb-20"})]})]})})})}))})}},2362:function(e,t,i){i.d(t,{Z:function(){return c}});var s=i(5893),n=i(2091),r=i(80),o=i(9715),l=i(9786);function a(e){var t=e.item;return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsxs)("div",{className:"card__behind",children:[(0,s.jsx)(l.Z,{href:t.link||"",className:"card__title",title:t.title,children:(0,s.jsx)("h2",{className:"t-ellipsis",children:t.title})}),"perso"===t.type?(0,s.jsxs)("div",{className:"card__links",children:[t.pen?(0,s.jsx)(l.Z,{href:"https://codepen.io/beumsk/pen/"+t.pen,title:"Codepen link",children:(0,s.jsx)(n.q25,{title:"Codepen","aria-labelledby":"Codepen"})}):null,t.sandbox?(0,s.jsx)(l.Z,{href:"https://codesandbox.io/s/"+t.sandbox,title:"Codesandbox link",children:(0,s.jsx)(o.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}):null,(0,s.jsx)(l.Z,{href:"https://github.com/beumsk/"+t.title.replace(/ /g,"-"),title:"Github repository",children:(0,s.jsx)(n.hJX,{title:"Github","aria-labelledby":"Github"})})]}):null,"pro"===t.type?(0,s.jsxs)("div",{className:"card__links",children:[t.current?(0,s.jsx)(l.Z,{href:t.current,title:"Live website",children:(0,s.jsx)(r.zNX,{title:"Live website","aria-labelledby":"Live website"})}):null,t.past?(0,s.jsx)(l.Z,{href:t.past,title:"Site as I left it",children:(0,s.jsx)(r._4_,{title:"Site as I left it","aria-labelledby":"Site as I left it"})}):null]}):null]}),(0,s.jsx)(l.Z,{href:t.link||"",title:t.title,tabIndex:-1,children:(0,s.jsx)("div",{className:"card__img",children:(0,s.jsx)("img",{src:t.img,alt:t.title,width:"260",height:"146",loading:"lazy"})})})]})}function c(e){var t=e.data,i=e.className;return(0,s.jsx)("div",{className:"grid "+(i||""),children:t.map((function(e){return(0,s.jsx)(a,{item:e},e.title)}))})}},6945:function(e,t,i){i.d(t,{Z:function(){return j}});var s=i(5893),n=i(7294),r=i(9008),o=i.n(r),l=i(1163),a=i(7771),c=i(9786);function d(){var e=(0,l.useRouter)(),t=e.asPath.replace(/\?.*/g,"$'").split("/").filter((function(e){return e}));return"/"!==e.route?(0,s.jsx)("div",{className:"breadcrumb",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(c.Z,{href:"/",children:"Home"})}),t.map((function(e,i){return(0,s.jsx)("li",{children:i===t.length-1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.rYR,{}),e.replace(/-/g," ")]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.rYR,{}),(0,s.jsx)(c.Z,{href:"/".concat(e),children:e.replace(/-/g," ")})]})},e)}))]})})}):null}var m=i(2091),u=i(9715),h=[{link:"https://github.com/beumsk",text:"Github",icon:m.hJX},{link:"https://codepen.io/beumsk/",text:"Codepen",icon:m.q25},{link:"https://codesandbox.io/u/beumsk",text:"Codesandbox",icon:u.hY9},{link:"https://www.linkedin.com/in/remybeumier/",text:"LinkedIn",icon:m.ltd},{link:"/resume-remy-beumier",text:"Resume",icon:m.jw0}];function g(){return(0,s.jsx)("footer",{id:"contact",className:"contact over-h svg-divider",children:(0,s.jsxs)("div",{className:"container","data-aos":"fade-left",children:[(0,s.jsx)("p",{className:"mb-5",children:"Feel free to get in touch and stay connected with me via these different channels."}),(0,s.jsx)("div",{className:"mb-10",children:h.map((function(e){var t=e.icon;return(0,s.jsxs)(c.Z,{href:e.link,target:e.link.startsWith("http")||"Resume"===e.text?"_blank":"_self",className:"btn mb-4 mr-4",children:[(0,s.jsx)(t,{title:e.text,"aria-labelledby":e.text}),(0,s.jsx)("span",{className:"ml-1",children:e.text})]},e.link)}))}),(0,s.jsxs)("p",{className:"contact__copy",children:["\xa9 ",(new Date).getFullYear()," |"," ",(0,s.jsx)("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person",children:(0,s.jsx)("span",{itemProp:"name",children:"R\xe9my Beumier"})})]})]})})}var p=i(80),b=[{text:"Home",link:"/#"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Resume",link:"/resume-remy-beumier"}];function x(e){var t=e.onClick,i=e.theme;return(0,s.jsx)("header",{className:"header",children:(0,s.jsxs)("div",{className:"container",children:[b.map((function(e,t){return(0,s.jsx)(c.Z,{href:e.link,className:t?"":"logo",target:"Resume"===e.text?"_blank":"_self",children:t?e.text:(0,s.jsx)("img",{src:"/images/logo.svg",alt:"R\xe9my Beumier logo",title:e.text,width:"30",height:"30"})},e.text)})),(0,s.jsx)("button",{onClick:t,className:"btn",title:"dark"==i?"Switch to light mode":"Switch to dark mode","aria-label":"dark"==i?"Switch to light mode":"Switch to dark mode",children:"dark"===i?(0,s.jsx)(p.Dq,{title:"Dark mode","aria-labelledby":"Dark mode"}):(0,s.jsx)(p.EWX,{title:"Light mode","aria-labelledby":"Light mode"})})]})})}function j(e){var t=e.title,i=e.description,r=e.img,l=e.url,a=e.children,c=e.itemtype,m=e.published,u=e.modified,h=(0,n.useState)(""),p=h[0],b=h[1];(0,n.useEffect)((function(){var e=window.localStorage.getItem("theme");b(e)}),[]);var j=r?r.startsWith("http")?r:"https://remybeumier.be".concat(r):null;return(0,s.jsxs)("main",{className:p,itemScope:!!c||void 0,itemType:c?"http://schema.org/"+c:void 0,children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:t},"title"),(0,s.jsx)("meta",{name:"description",content:i},"description"),(0,s.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,s.jsx)("meta",{property:"og:description",content:i},"og:description"),(0,s.jsx)("meta",{property:"og:url",content:l||"https://remybeumier.be"},"og:url"),(0,s.jsx)("meta",{property:"og:image",content:j||"https://remybeumier.be/images/rb.jpg"},"og:image"),(0,s.jsx)("meta",{property:"twitter:title",content:t},"twitter:title"),(0,s.jsx)("meta",{property:"twitter:description",content:i},"twitter:description"),(0,s.jsx)("meta",{property:"twitter:url",content:l||"https://remybeumier.be"},"twitter:url"),(0,s.jsx)("meta",{property:"twitter:image",content:j||"https://remybeumier.be/images/rb.jpg"},"twitter:image"),m?(0,s.jsx)("meta",{property:"article:published_time",content:m}):null,u?(0,s.jsx)("meta",{property:"article:modified_time",content:u}):null]}),(0,s.jsx)(x,{onClick:function(){var e="light"===p?"dark":"light";window.localStorage.setItem("theme",e),b(e)},theme:p}),(0,s.jsxs)("div",{className:"over-h",children:[(0,s.jsx)(d,{}),a]}),(0,s.jsx)(g,{}),(0,s.jsx)("div",{id:"ie-banner",children:"Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs."})]})}},9786:function(e,t,i){i.d(t,{Z:function(){return c}});var s=i(6042),n=i(9396),r=i(9534),o=i(5893),l=i(1664),a=i.n(l);function c(e){var t=e.href,i=e.children,l=(0,r.Z)(e,["href","children"]);return t.startsWith("http")?(0,o.jsx)("a",(0,n.Z)((0,s.Z)({href:t,target:"_blank",rel:"noopener noreferrer"},l),{children:i})):(0,o.jsx)(a(),{href:t,children:(0,o.jsx)("a",(0,n.Z)((0,s.Z)({},l),{children:i}))})}},3422:function(e){e.exports=[{slug:"css-only-modal",title:"CSS only modal",intro:"How to design a CSS only and accessible modal",img:"/images/posts/css-only-modal.jpg",published:"2024-12-16",modified:"2024-12-16",categories:"css, tutorial",link:"/blog/css-only-modal",url:"https://remybeumier.be/blog/css-only-modal"},{slug:"set-up-sass-in-the-best-way",title:"Set up Sass in the best way",intro:"How to set up Sass with the best compiling settings and start developing with it",img:"/images/posts/set-up-sass-in-the-best-way.jpg",published:"2023-04-06",modified:"2023-11-27",categories:"sass, css, tutorial",link:"/blog/set-up-sass-in-the-best-way",url:"https://remybeumier.be/blog/set-up-sass-in-the-best-way"},{slug:"css-only-accordion",title:"CSS only accordion",intro:"How to design a CSS only and accessible accordion",img:"/images/posts/css-only-accordion.jpg",published:"2023-01-29",modified:"2023-01-29",categories:"css, tutorial",link:"/blog/css-only-accordion",url:"https://remybeumier.be/blog/css-only-accordion"},{slug:"css-only-toggle-switch-button",title:"CSS only toggle switch button",intro:"How to design a CSS only and accessible toggle switch button",img:"/images/posts/css-only-toggle-switch-button.jpg",published:"2023-01-03",modified:"2023-01-29",categories:"css, tutorial",link:"/blog/css-only-toggle-switch-button",url:"https://remybeumier.be/blog/css-only-toggle-switch-button"},{slug:"css-only-responsive-navbar",title:"CSS only responsive Navbar",intro:"How to build a CSS responsive navigation bar menu without JavaScript",img:"/images/posts/css-only-responsive-navbar.jpg",published:"2022-10-31",modified:"2023-01-29",categories:"css, tutorial",link:"/blog/css-only-responsive-navbar",url:"https://remybeumier.be/blog/css-only-responsive-navbar"},{slug:"change-nextjs-error-pages",title:"Change Next.js error pages",intro:"How to change the default Next.js error pages and make it your own",img:"/images/posts/change-nextjs-error-pages.jpg",published:"2022-08-17",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/change-nextjs-error-pages",url:"https://remybeumier.be/blog/change-nextjs-error-pages"},{slug:"get-web-analytics-in-nextjs-with-goatcounter",title:"Get web analytics in Next.js with Goatcounter",intro:"How to track your Next.js web analytics without tracking of personal data with Goatcounter",img:"/images/posts/get-web-analytics-in-nextjs-with-goatcounter.jpg",published:"2022-04-07",modified:"2022-11-08",categories:"next.js, tutorial, analytics",link:"/blog/get-web-analytics-in-nextjs-with-goatcounter",url:"https://remybeumier.be/blog/get-web-analytics-in-nextjs-with-goatcounter"},{slug:"generate-a-sitemap-in-nextjs",title:"Generate a sitemap in Next.js",intro:"How to generate an automatic and custom sitemap in your Next.js build?",img:"/images/posts/generate-a-sitemap-in-nextjs.jpg",published:"2022-02-25",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/generate-a-sitemap-in-nextjs",url:"https://remybeumier.be/blog/generate-a-sitemap-in-nextjs"},{slug:"set-up-eslint-into-nextjs",title:"Set up ESLint into Next.js",intro:"How to set up the ESLint linter into a Next.js project",img:"/images/posts/set-up-eslint-into-nextjs.jpg",published:"2022-02-11",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/set-up-eslint-into-nextjs",url:"https://remybeumier.be/blog/set-up-eslint-into-nextjs"},{slug:"fix-the-window-is-not-defined-error",title:"Fix the Window is not defined error",intro:"How to fix the error Window is not defined in Next.js",img:"/images/posts/fix-the-window-is-not-defined-error.jpg",published:"2022-01-22",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/fix-the-window-is-not-defined-error",url:"https://remybeumier.be/blog/fix-the-window-is-not-defined-error"},{slug:"nextjs-dark-mode",title:"Next.js dark mode",intro:"How to add a dark mode to your Next.js site",img:"/images/posts/nextjs-dark-mode.jpg",published:"2022-01-15",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/nextjs-dark-mode",url:"https://remybeumier.be/blog/nextjs-dark-mode"},{slug:"markdown-tutorial",title:"Markdown Tutorial",intro:"Introduction tutorial to the Markdown language",img:"/images/posts/markdown-tutorial.jpg",published:"2021-12-28",modified:"2022-11-08",categories:"tutorial",link:"/blog/markdown-tutorial",url:"https://remybeumier.be/blog/markdown-tutorial"},{slug:"set-nextjs-lang",title:"Set Next.js lang",intro:"Specify HTML lang attribute in a Next.js site",img:"/images/posts/set-nextjs-lang.jpg",published:"2021-12-27",modified:"2022-11-08",categories:"next.js, tutorial",link:"/blog/set-nextjs-lang",url:"https://remybeumier.be/blog/set-nextjs-lang"}]}}]);