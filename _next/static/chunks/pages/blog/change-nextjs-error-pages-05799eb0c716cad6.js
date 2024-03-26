(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{9682:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/change-nextjs-error-pages",function(){return n(5550)}])},4911:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1799),s=n(9396),o=n(5893),a=n(7294),i=n(1664),c=n.n(i),d=n(1163),l=n(4725),h=n.n(l),u=(n(9578),n(8674),n(7013),n(2427),n(8193)),p=n(3422),g=n.n(p),m=n(2362),j=n(6945),x=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function f(e){var t=e.children,n=(0,d.useRouter)();(0,a.useEffect)((function(){h().highlightAll()}),[n]);var i=g().find((function(e){return e.slug===n.asPath.replace("/blog/","")})),l=i.title,p=i.intro,f=i.img,w=i.published,v=i.modified,b=i.categories,N=null===b||void 0===b?void 0:b.split(", ").filter((function(e){return e})),_=g()[g().findIndex((function(e){return e.title===l}))+1]||g()[0],y=[g()[g().findIndex((function(e){return e.title===l}))-1]||g()[g().length-1],_];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(j.Z,(0,s.Z)((0,r.Z)({title:"".concat(l," | Blog | R\xe9my Beumier"),description:p,itemtype:"Article"},i),{children:(0,o.jsx)("div",{className:"container narrow post-shape",children:(0,o.jsx)("div",{"data-aos":"fade-left",children:(0,o.jsxs)("article",{children:[(0,o.jsx)("h1",{itemProp:"headline name",children:l}),(0,o.jsx)("img",{src:f,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,o.jsxs)("div",{className:"space-between-x mb-10",children:[(0,o.jsx)("div",{className:"post__categories",children:null===N||void 0===N?void 0:N.map((function(e){return(0,o.jsx)(c(),{href:"/blog?".concat(e),children:(0,o.jsx)("a",{children:(0,o.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:x(w),dateTime:x(w),children:["Published on: ",x(w)]}),(0,o.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:x(v),dateTime:x(v),children:["Modified on: ",x(v)]})]})]}),(0,o.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,o.jsx)("div",{className:"mb-15",children:(0,o.jsx)(c(),{href:"/blog",children:(0,o.jsxs)("a",{className:"btn",children:[(0,o.jsx)(u.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"mb-5",children:"Suggested articles"}),(0,o.jsx)(m.Z,{data:y,className:"mb-20"})]})]})})})}))})}},5550:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(1151),o=n(4911),a=function(e){var t=e.children;return(0,r.jsx)(o.Z,{children:t})};function i(e){var t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Next.js handles many aspects of our website out of the box but, sometimes we want to go a step extra and change what they decided. One of those times was to change the default error pages to have something in line with the whole website. Let's see how we can make those pages our playing ground!"}),"\n",(0,r.jsx)(t.h2,{children:"Error 404 page"}),"\n",(0,r.jsxs)(t.p,{children:["Modifying the error 404 page is one step that we can't overlook. Every wrong or dead link will point to that page and we must take that to our advantage. It's as simple as creating ",(0,r.jsx)(t.code,{children:"404.js"})," in the pages folder."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export default function Custom404() {\n  return <h1>404 - Page Not Found</h1>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Error 500 page"}),"\n",(0,r.jsxs)(t.p,{children:["Set up the error 500 page is another step that we should manage. In the same fashion as the 404, we create a ",(0,r.jsx)(t.code,{children:"500.js"})," file in the pages folder."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export default function Custom500() {\n  return <h1>500 - Server-side error occurred</h1>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Create the _error.js page"}),"\n",(0,r.jsxs)(t.p,{children:["This is the way to unlock the error page for customisation. We create a new file at the root of the pages folder with the name ",(0,r.jsx)(t.code,{children:"_error.js"})," and we can start with the code from the official documentation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"function Error({ statusCode }) {\n  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;\n}\n\nError.getInitialProps = ({ res, err }) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return { statusCode };\n};\n\nexport default Error;\n"})}),"\n",(0,r.jsx)(t.p,{children:"From there, we are now able to modify the wording on these pages, but not only. Almost everything that you can do with Next.js you, can do in this custom error page. Styling, adding components, and much more."}),"\n",(0,r.jsxs)(t.p,{children:["Sadly, as pointed in the ",(0,r.jsx)("a",{href:"https://nextjs.org/docs/advanced-features/custom-error-page",target:"_blank",children:"official Next.js documentation"}),", ",(0,r.jsx)(t.code,{children:"_error.js"})," does not currently support Next.js Data Fetching methods like ",(0,r.jsx)(t.code,{children:"getStaticProps"})," or ",(0,r.jsx)(t.code,{children:"getServerSideProps"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(i,e)}))}}},function(e){e.O(0,[228,415,445,617,949,734,311,774,888,179],(function(){return t=9682,e(e.s=t);var t}));var t=e.O();_N_E=t}]);