(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{276:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/change-nextjs-error-pages",function(){return r(5550)}])},3753:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(5893),s=r(7294),a=r(1163),o=r(1664),i=r(5697),c=r.n(i),d=r(4725),l=r.n(d),h=(r(9578),r(2427),r(8193)),u=r(3422),p=r(9095),g=r(4285);function x(e){var t=e.children,r=(0,a.useRouter)();(0,s.useEffect)((function(){l().highlightAll()}),[r]);var i=u.x.filter((function(e){return e.slug===r.asPath.replace("/blog/","")}))[0],c=i.title,d=i.intro,x=i.img,m=i.date,j=i.categories,f=i.url,w=""===m?"No date":"".concat(new Date(m).getDate(),".").concat(new Date(m).getMonth()+1,".").concat(new Date(m).getFullYear()),v=null===j||void 0===j?void 0:j.split(", ").filter((function(e){return e})),b=u.x[u.x.findIndex((function(e){return e.title===c}))+1]||u.x[0],N=[u.x[u.x.findIndex((function(e){return e.title===c}))-1]||u.x[u.x.length-1],b];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{title:"".concat(c," | Blog | R\xe9my Beumier"),description:d,img:x,url:f,itemtype:"Article",children:(0,n.jsx)("div",{className:"container narrow posts-shape",children:(0,n.jsx)("div",{"data-aos":"fade-left",children:(0,n.jsxs)("article",{children:[(0,n.jsx)("h1",{itemProp:"headline name",children:c}),(0,n.jsx)("img",{src:x,alt:c,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,n.jsxs)("div",{className:"space-between-x mb-10",children:[(0,n.jsx)("div",{className:"post__categories",children:null===v||void 0===v?void 0:v.map((function(e){return(0,n.jsx)(o.default,{href:"/blog?".concat(e),children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,n.jsx)("time",{className:"post__date",itemProp:"datePublished",content:w,dateTime:w,children:w})]}),(0,n.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,n.jsx)("div",{className:"mb-15",children:(0,n.jsx)(o.default,{href:"/blog",children:(0,n.jsxs)("a",{className:"btn",children:[(0,n.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,n.jsx)(g.Z,{data:N,className:"mb-20"})]})]})})})})})}x.propTypes={meta:c().object,children:c().node,posts:c().array}},5550:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(1151),a=r(3753),o=function(e){var t=e.children;return(0,n.jsx)(a.Z,{children:t})};function i(e){var t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Next.js handles many aspects of our website out of the box but, sometimes we want to go a step extra and change what they decided. One of those times was to change the default error pages to have something in line with the whole website. Let's see how we can make those pages our playing ground!"}),"\n",(0,n.jsx)(t.h2,{children:"Error 404 page"}),"\n",(0,n.jsxs)(t.p,{children:["Modifying the error 404 page is one step that we can't overlook. Every wrong or dead link will point to that page and we must take that to our advantage. It's as simple as creating ",(0,n.jsx)(t.code,{children:"404.js"})," in the pages folder."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export default function Custom404() {\r\n  return <h1>404 - Page Not Found</h1>;\r\n}\n"})}),"\n",(0,n.jsx)(t.h2,{children:"Error 500 page"}),"\n",(0,n.jsxs)(t.p,{children:["Set up the error 500 page is another step that we should manage. In the same fashion as the 404, we create a ",(0,n.jsx)(t.code,{children:"500.js"})," file in the pages folder."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export default function Custom500() {\r\n  return <h1>500 - Server-side error occurred</h1>;\r\n}\n"})}),"\n",(0,n.jsx)(t.h2,{children:"Create the _error.js page"}),"\n",(0,n.jsxs)(t.p,{children:["This is the way to unlock the error page for customisation. We create a new file at the root of the pages folder with the name ",(0,n.jsx)(t.code,{children:"_error.js"})," and we can start with the code from the official documentation."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"function Error({ statusCode }) {\r\n  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;\r\n}\r\n\r\nError.getInitialProps = ({ res, err }) => {\r\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\r\n  return { statusCode };\r\n};\r\n\r\nexport default Error;\n"})}),"\n",(0,n.jsx)(t.p,{children:"From there, we are now able to modify the wording on these pages, but not only. Almost everything that you can do with Next.js you, can do in this custom error page. Styling, adding components, and much more."}),"\n",(0,n.jsxs)(t.p,{children:["Sadly, as pointed in the ",(0,n.jsx)("a",{href:"https://nextjs.org/docs/advanced-features/custom-error-page",target:"_blank",children:"official Next.js documentation"}),", ",(0,n.jsx)(t.code,{children:"_error.js"})," does not currently support Next.js Data Fetching methods like ",(0,n.jsx)(t.code,{children:"getStaticProps"})," or ",(0,n.jsx)(t.code,{children:"getServerSideProps"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(i,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return t=276,e(e.s=t);var t}));var t=e.O();_N_E=t}]);