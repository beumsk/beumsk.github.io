(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"20a2":function(e,t,r){e.exports=r("nOHt")},CafY:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),c=r("g4pe"),a=r.n(c),o=r("YFqc"),i=r.n(o),s=r("NIcq"),l=[{text:"Home",link:"/#"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Contact",link:"/#contact"}],u=r("nKUr");function f(e){var t=e.onClick,r=e.theme;return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"container",children:[l.map((function(e,t){return t?Object(u.jsx)(i.a,{href:e.link,children:e.text},e+t):Object(u.jsx)(i.a,{href:e.link,children:Object(u.jsx)("a",{className:"logo",children:Object(u.jsx)("img",{src:"/images/logo.svg",alt:"R\xe9my Beumier logo",title:e.text,width:"30",height:"30"})})},e+t)})),Object(u.jsx)("button",{onClick:t,className:"btn",title:"dark"==r?"Switch to light mode":"Switch to dark mode","aria-label":"dark"==r?"Switch to light mode":"Switch to dark mode",children:"dark"===r?Object(u.jsx)(s.a,{}):Object(u.jsx)(s.c,{})})]})})}var d=r("ma3e");function m(){return Object(u.jsx)("footer",{id:"contact",className:"over-h svg-divider",children:Object(u.jsxs)("div",{className:"container","data-aos":"fade-left",children:[Object(u.jsx)("p",{className:"mb-5",children:"Feel free to get in touch and stay connected with me via these different channels."}),Object(u.jsxs)("div",{className:"mb-10",children:[Object(u.jsxs)("a",{href:"https://codepen.io/beumsk/",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("span",{className:"ml-1",children:"Codepen"})]}),Object(u.jsxs)("a",{href:"https://github.com/beumsk",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[Object(u.jsx)(d.b,{}),Object(u.jsx)("span",{className:"ml-1",children:"Github"})]}),Object(u.jsxs)("a",{href:"https://www.linkedin.com/in/remybeumier/",target:"_blank",rel:"noopener noreferrer",className:"btn",children:[Object(u.jsx)(d.c,{}),Object(u.jsx)("span",{className:"ml-1",children:"LinkedIn"})]})]}),Object(u.jsxs)("p",{className:"copy",children:["\xa9 ",(new Date).getFullYear()," | R\xe9my Beumier"]})]})})}var h=r("20a2"),b=r("33Fu");function j(){var e=Object(h.useRouter)(),t=e.asPath.replace(/\?.*/g,"$'").split("/").filter((function(e){return e}));return"/"!==e.route&&Object(u.jsx)("div",{className:"breadcrumb",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.a,{href:"/",children:"Home"})}),t.map((function(e,r){return Object(u.jsx)("li",{children:r===t.length-1?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{}),e.replace(/-/g," ")]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{}),Object(u.jsx)(i.a,{href:"/"+e,children:Object(u.jsx)("a",{children:e.replace(/-/g," ")})})]})},e)}))]})})})}function p(e){var t=Object(n.useState)(""),r=t[0],c=t[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");c(e)}),[]);var o=e.img&&(e.img.startsWith("http")?e.img:"https://remybeumier.be".concat(e.img));return Object(u.jsxs)("main",{className:r,children:[Object(u.jsxs)(a.a,{children:[Object(u.jsx)("title",{children:e.title},"title"),Object(u.jsx)("meta",{name:"description",content:e.description},"description"),Object(u.jsx)("meta",{property:"og:image",content:o||"https://remybeumier.be/images/rb.png"},"og:image"),Object(u.jsx)("meta",{property:"og:image:secure_url",content:o||"https://remybeumier.be/images/rb.png"},"og:image:secure_url")]}),Object(u.jsx)(f,{onClick:function(){var e="light"===r?"dark":"light";window.localStorage.setItem("theme",e),c(e)},theme:r}),Object(u.jsxs)("div",{className:"over-h",children:[Object(u.jsx)(j,{}),e.children]}),Object(u.jsx)(m,{})]})}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),c=r.n(n),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=c.a.createContext&&c.a.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]])}return r};function l(e){return e&&e.map((function(e,t){return c.a.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return c.a.createElement(f,i({attr:i({},e.attr)},t),l(e.child))}}function f(e){var t=function(t){var r,n=e.attr,a=e.size,o=e.title,l=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),c.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&c.a.createElement("title",null,o),e.children)};return void 0!==o?c.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,a=(c=r("q1tI"))&&c.__esModule?c:{default:c},o=r("Sgtc"),i=r("nOHt"),s=r("vNVm");var l={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(c?"%"+c:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,c=i.useRouter(),f=a.default.useMemo((function(){var t=o.resolveHref(c,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?o.resolveHref(c,e.as):i||a}}),[c,e.href,e.as]),d=f.href,m=f.as,h=e.children,b=e.replace,j=e.shallow,p=e.scroll,v=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,O=s.useIntersection({rootMargin:"200px"}),x=n(O,2),y=x[0],w=x[1],k=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);a.default.useEffect((function(){var e=w&&r&&o.isLocalURL(d),t="undefined"!==typeof v?v:c&&c.locale,n=l[d+"%"+m+(t?"%"+t:"")];e&&!n&&u(c,d,m,{locale:t})}),[m,d,w,v,r,c]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,c,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[c?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,c,d,m,b,j,p,v)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(c,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof v?v:c&&c.locale,E=c&&c.isLocaleDomain&&o.getDomainLocale(m,C,c&&c.locales,c&&c.domainLocales);N.href=E||o.addBasePath(o.addLocale(m,C,c&&c.defaultLocale))}return a.default.cloneElement(t,N)};t.default=f},g4pe:function(e,t,r){e.exports=r("mLbm")},vNVm:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=c.useRef(),l=c.useState(!1),u=n(l,2),f=u[0],d=u[1],m=c.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:c,elements:n}),r}(r),c=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return c.useEffect((function(){if(!o&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[m,f]};var c=r("q1tI"),a=r("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map}}]);