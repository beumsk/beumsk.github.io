_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/yi9":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t),r.d(t,"__N_SSG",(function(){return j})),r.d(t,"default",(function(){return b}));var a=r("q1tI"),i=r("20a2"),s=r("YFqc"),l=r.n(s),o=r("CafY"),u=r("KtBt"),d=r("nKUr"),j=!0;function b(e){var t,r=e.posts,n=e.title,s=e.description,j=e.url,b=Object(i.useRouter)(),h="/blog"===b.asPath.replace(/.*\?/g,"")?"":b.asPath.replace(/.*\?/g,""),f=Object(a.useState)(h?r.filter((function(e){return e.categories.includes(h)})):r),p=f[0],m=f[1],O=r.map((function(e){return e.categories.split(", ")})),g=(t=[]).concat.apply(t,c(O)).filter((function(e){return e})),x=c(new Set(g));return Object(d.jsx)(o.a,{title:n,description:s,url:j,children:Object(d.jsxs)("div",{className:"container blog-shape",children:[Object(d.jsx)("h1",{children:"Blog"}),Object(d.jsxs)("div",{className:"blog__categories",children:[Object(d.jsx)(l.a,{href:"/blog",children:Object(d.jsx)("a",{className:"btn ".concat(""===h&&"active"),onClick:function(){return m(r)},children:"All posts"})}),x.map((function(e){return Object(d.jsx)(l.a,{href:"?".concat(e),children:Object(d.jsx)("a",{className:"btn ".concat(h===e&&"active"),onClick:function(){return m(r.filter((function(t){return t.categories.includes(e)})))},children:e.charAt(0).toUpperCase()+e.slice(1)})},e)}))]}),Object(d.jsx)("div",{"data-aos":"fade-up",children:Object(d.jsx)(u.a,{data:p,className:"mt-6 mb-20"})})]})})}},JUhy:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r("/yi9")}])},KtBt:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("YFqc"),c=r.n(n),a=r("ma3e"),i=r("NIcq"),s=r("nKUr");function l(e){var t=e.data,r=e.className;return Object(s.jsx)("div",{className:"grid "+r,children:t.map((function(e,t){var r=e.title.replace(/-/g," ").charAt(0).toUpperCase()+e.title.replace(/-/g," ").slice(1);return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card__behind",children:[Object(s.jsx)(c.a,{href:e.link||"",children:Object(s.jsx)("a",{className:"card__title",title:r,children:Object(s.jsx)("h2",{className:"t-ellipsis",children:r})})}),e.pen&&Object(s.jsxs)("div",{className:"card__links",children:[Object(s.jsx)("a",{href:"https://github.com/beumsk/"+e.title,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:Object(s.jsx)(a.a,{})}),Object(s.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+e.pen,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:Object(s.jsx)(a.b,{})})]}),(e.current||e.past)&&Object(s.jsxs)("div",{className:"card__links",children:[e.current&&Object(s.jsx)("a",{href:e.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:Object(s.jsx)(i.g,{})}),e.past&&Object(s.jsx)("a",{href:e.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:Object(s.jsx)(i.h,{})})]})]}),Object(s.jsx)(c.a,{href:e.link||"",children:Object(s.jsx)("a",{title:"Learn more",tabIndex:"-1",children:Object(s.jsx)("div",{className:"card__img",children:Object(s.jsx)("img",{src:e.img,alt:e.title.replace(/-/g," "),width:"260",height:"146",loading:"lazy"})})})})]},t)}))})}}},[["JUhy",1,0,3,4,6,2,5]]]);