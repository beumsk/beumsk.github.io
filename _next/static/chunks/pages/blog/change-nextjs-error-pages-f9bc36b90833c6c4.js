(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{276:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/change-nextjs-error-pages",function(){return n(5550)}])},3753:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),s=n(7294),o=n(1163),a=n(1664),i=n(5697),c=n.n(i),d=n(4725),l=n.n(d),h=(n(9578),n(8674),n(7013),n(2427),n(8193)),u=n(3422),p=n(9095),g=n(4285);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}var j=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function x(e){var t=e.children,n=(0,o.useRouter)();(0,s.useEffect)((function(){l().highlightAll()}),[n]);var i=u.x.filter((function(e){return e.slug===n.asPath.replace("/blog/","")})),c=i[0],d=c.title,m=c.intro,x=c.img,w=c.published,b=c.modified,v=c.categories,y=(c.url,null===v||void 0===v?void 0:v.split(", ").filter((function(e){return e}))),N=u.x[u.x.findIndex((function(e){return e.title===d}))+1]||u.x[0],_=[u.x[u.x.findIndex((function(e){return e.title===d}))-1]||u.x[u.x.length-1],N];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,f({title:"".concat(d," | Blog | R\xe9my Beumier"),description:m,itemtype:"Article"},i[0],{children:(0,r.jsx)("div",{className:"container narrow posts-shape",children:(0,r.jsx)("div",{"data-aos":"fade-left",children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{itemProp:"headline name",children:d}),(0,r.jsx)("img",{src:x,alt:d,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,r.jsxs)("div",{className:"space-between-x mb-10",children:[(0,r.jsx)("div",{className:"post__categories",children:null===y||void 0===y?void 0:y.map((function(e){return(0,r.jsx)(a.default,{href:"/blog?".concat(e),children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:j(w),dateTime:j(w),children:["Published on: ",j(w)]}),(0,r.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:j(b),dateTime:j(b),children:["Modified on: ",j(b)]})]})]}),(0,r.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,r.jsx)("div",{className:"mb-15",children:(0,r.jsx)(a.default,{href:"/blog",children:(0,r.jsxs)("a",{className:"btn",children:[(0,r.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,r.jsx)(g.Z,{data:_,className:"mb-20"})]})]})})})}))})}x.propTypes={meta:c().object,children:c().node,posts:c().array}},5550:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(1151),o=n(3753),a=function(e){var t=e.children;return(0,r.jsx)(o.Z,{children:t})};function i(e){var t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Next.js handles many aspects of our website out of the box but, sometimes we want to go a step extra and change what they decided. One of those times was to change the default error pages to have something in line with the whole website. Let's see how we can make those pages our playing ground!"}),"\n",(0,r.jsx)(t.h2,{children:"Error 404 page"}),"\n",(0,r.jsxs)(t.p,{children:["Modifying the error 404 page is one step that we can't overlook. Every wrong or dead link will point to that page and we must take that to our advantage. It's as simple as creating ",(0,r.jsx)(t.code,{children:"404.js"})," in the pages folder."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export default function Custom404() {\n  return <h1>404 - Page Not Found</h1>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Error 500 page"}),"\n",(0,r.jsxs)(t.p,{children:["Set up the error 500 page is another step that we should manage. In the same fashion as the 404, we create a ",(0,r.jsx)(t.code,{children:"500.js"})," file in the pages folder."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export default function Custom500() {\n  return <h1>500 - Server-side error occurred</h1>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Create the _error.js page"}),"\n",(0,r.jsxs)(t.p,{children:["This is the way to unlock the error page for customisation. We create a new file at the root of the pages folder with the name ",(0,r.jsx)(t.code,{children:"_error.js"})," and we can start with the code from the official documentation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"function Error({ statusCode }) {\n  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;\n}\n\nError.getInitialProps = ({ res, err }) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return { statusCode };\n};\n\nexport default Error;\n"})}),"\n",(0,r.jsx)(t.p,{children:"From there, we are now able to modify the wording on these pages, but not only. Almost everything that you can do with Next.js you, can do in this custom error page. Styling, adding components, and much more."}),"\n",(0,r.jsxs)(t.p,{children:["Sadly, as pointed in the ",(0,r.jsx)("a",{href:"https://nextjs.org/docs/advanced-features/custom-error-page",target:"_blank",children:"official Next.js documentation"}),", ",(0,r.jsx)(t.code,{children:"_error.js"})," does not currently support Next.js Data Fetching methods like ",(0,r.jsx)(t.code,{children:"getStaticProps"})," or ",(0,r.jsx)(t.code,{children:"getServerSideProps"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(i,e)}))}}},function(e){e.O(0,[228,415,445,617,417,136,127,774,888,179],(function(){return t=276,e(e.s=t);var t}));var t=e.O();_N_E=t}]);