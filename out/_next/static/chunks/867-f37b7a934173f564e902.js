(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{3877:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(1664),a=r(9583),i=r(5434),l=r(7735),s=r(5893);function o(e){var t=e.item,r=t.title.replace(/-/g," ").charAt(0).toUpperCase()+t.title.replace(/-/g," ").slice(1);return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsxs)("div",{className:"card__behind",children:[(0,s.jsx)(n.default,{href:t.link||"",children:(0,s.jsx)("a",{className:"card__title",title:r,children:(0,s.jsx)("h2",{className:"t-ellipsis",children:r})})}),"perso"===t.type&&(0,s.jsxs)("div",{className:"card__links",children:[t.pen&&(0,s.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t.pen,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:(0,s.jsx)(a.q25,{title:"Codepen","aria-labelledby":"Codepen"})}),t.sandbox&&(0,s.jsx)("a",{href:"https://codesandbox.io/s/"+t.sandbox,target:"_blank",rel:"noopener noreferrer",title:"Codesandbox link",children:(0,s.jsx)(l.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}),(0,s.jsx)("a",{href:"https://github.com/beumsk/"+t.title,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:(0,s.jsx)(a.hJX,{title:"Github","aria-labelledby":"Github"})})]}),"pro"===t.type&&(0,s.jsxs)("div",{className:"card__links",children:[t.current&&(0,s.jsx)("a",{href:t.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:(0,s.jsx)(i.zNX,{title:"Live website","aria-labelledby":"Live website"})}),t.past&&(0,s.jsx)("a",{href:t.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:(0,s.jsx)(i._4_,{title:"Site as I left it","aria-labelledby":"Site as I left it"})})]})]}),(0,s.jsx)(n.default,{href:t.link||"",children:(0,s.jsx)("a",{title:"Learn more",tabIndex:"-1",children:(0,s.jsx)("div",{className:"card__img",children:(0,s.jsx)("img",{src:t.img,alt:t.title.replace(/-/g," "),width:"260",height:"146",loading:"lazy"})})})})]})}function c(e){var t=e.data,r=e.className;return(0,s.jsx)("div",{className:"grid "+r,children:t.map((function(e){return(0,s.jsx)(o,{item:e},e.title)}))})}},8559:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7294),a=r(9008),i=r(1664),l=r(5434),s=[{text:"Home",link:"/#"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Contact",link:"/#contact"}],o=r(5893);function c(e){var t=e.onClick,r=e.theme;return(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"container",children:[s.map((function(e,t){return(0,o.jsx)(i.default,{href:e.link,children:t?(0,o.jsx)("a",{children:e.text}):(0,o.jsx)("a",{className:"logo",children:(0,o.jsx)("img",{src:"/images/logo.svg",alt:"R\xe9my Beumier logo",title:e.text,width:"30",height:"30"})})},e.text)})),(0,o.jsx)("button",{onClick:t,className:"btn",title:"dark"==r?"Switch to light mode":"Switch to dark mode","aria-label":"dark"==r?"Switch to light mode":"Switch to dark mode",children:"dark"===r?(0,o.jsx)(l.Dq,{title:"Dark mode","aria-labelledby":"Dark mode"}):(0,o.jsx)(l.EWX,{title:"Light mode","aria-labelledby":"Light mode"})})]})})}var d=r(9583),u=r(7735);function h(){return(0,o.jsx)("footer",{id:"contact",className:"over-h svg-divider",children:(0,o.jsxs)("div",{className:"container","data-aos":"fade-left",children:[(0,o.jsx)("p",{className:"mb-5",children:"Feel free to get in touch and stay connected with me via these different channels."}),(0,o.jsxs)("div",{className:"mb-10",children:[(0,o.jsxs)("a",{href:"https://github.com/beumsk",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,o.jsx)(d.hJX,{title:"Github","aria-labelledby":"Github"}),(0,o.jsx)("span",{className:"ml-1",children:"Github"})]}),(0,o.jsxs)("a",{href:"https://codepen.io/beumsk/",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,o.jsx)(d.q25,{title:"Codepen","aria-labelledby":"Codepen"}),(0,o.jsx)("span",{className:"ml-1",children:"Codepen"})]}),(0,o.jsxs)("a",{href:"https://codesandbox.io/u/beumsk",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,o.jsx)(u.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"}),(0,o.jsx)("span",{className:"ml-1",children:"Codesandbox"})]}),(0,o.jsxs)("a",{href:"https://www.linkedin.com/in/remybeumier/",target:"_blank",rel:"noopener noreferrer",className:"btn",children:[(0,o.jsx)(d.ltd,{title:"LinkedIn","aria-labelledby":"LinkedIn"}),(0,o.jsx)("span",{className:"ml-1",children:"LinkedIn"})]})]}),(0,o.jsxs)("p",{className:"copy",children:["\xa9 ",(new Date).getFullYear()," |"," ",(0,o.jsx)("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person",children:(0,o.jsx)("span",{itemProp:"name",children:"R\xe9my Beumier"})})]})]})})}var f=r(1163),p=r(8193);function m(){var e=(0,f.useRouter)(),t=e.asPath.replace(/\?.*/g,"$'").split("/").filter((function(e){return e}));return"/"!==e.route&&(0,o.jsx)("div",{className:"breadcrumb",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.default,{href:"/",children:"Home"})}),t.map((function(e,r){return(0,o.jsx)("li",{children:r===t.length-1?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.rYR,{}),e.replace(/-/g," ")]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.rYR,{}),(0,o.jsx)(i.default,{href:"/".concat(e),children:(0,o.jsx)("a",{children:e.replace(/-/g," ")})})]})},e)}))]})})})}function b(e){var t=e.img,r=e.title,i=e.description,l=e.url,s=e.children,d=e.itemtype,u=(0,n.useState)(""),f=u[0],p=u[1];(0,n.useEffect)((function(){var e=window.localStorage.getItem("theme");p(e)}),[]);var b=t&&(t.startsWith("http")?t:"https://remybeumier.be".concat(t));return(0,o.jsxs)("main",{className:f,itemScope:!!d||void 0,itemType:d?"http://schema.org/"+d:void 0,children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:r},"title"),(0,o.jsx)("meta",{name:"description",content:i},"description"),(0,o.jsx)("meta",{property:"og:title",content:r},"og:title"),(0,o.jsx)("meta",{property:"og:description",content:i},"og:description"),(0,o.jsx)("meta",{property:"og:url",content:l||"https://remybeumier.be"},"og:url"),(0,o.jsx)("meta",{property:"og:image",content:b||"https://remybeumier.be/images/rb.jpg"},"og:image"),(0,o.jsx)("meta",{property:"twitter:title",content:r},"twitter:title"),(0,o.jsx)("meta",{property:"twitter:description",content:i},"twitter:description"),(0,o.jsx)("meta",{property:"twitter:url",content:l||"https://remybeumier.be"},"twitter:url"),(0,o.jsx)("meta",{property:"twitter:image",content:b||"https://remybeumier.be/images/rb.jpg"},"twitter:image")]}),(0,o.jsx)(c,{onClick:function(){var e="light"===f?"dark":"light";window.localStorage.setItem("theme",e),p(e)},theme:f}),(0,o.jsxs)("div",{className:"over-h",children:[(0,o.jsx)(m,{}),s]}),(0,o.jsx)(h,{}),(0,o.jsx)("div",{id:"ie-banner",children:"Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs."})]})}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1063),s=r(4651),o=r(7426);var c={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),u=i.default.useMemo((function(){var t=l.resolveHref(a,e.href,!0),r=n(t,2),i=r[0],s=r[1];return{href:i,as:e.as?l.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),h=u.href,f=u.as,p=e.children,m=e.replace,b=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var v=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,g=o.useIntersection({rootMargin:"200px"}),y=n(g,2),k=y[0],w=y[1],N=i.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(h),t="undefined"!==typeof j?j:a&&a.locale,n=c[h+"%"+f+(t?"%"+t:"")];e&&!n&&d(a,h,f,{locale:t})}),[f,h,w,j,r,a]);var C={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](r,n,{shallow:i,locale:o,scroll:s}))}(e,a,h,f,m,b,x,j)},onMouseEnter:function(e){l.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:a&&a.locale,L=a&&a.isLocaleDomain&&l.getDomainLocale(f,_,a&&a.locales,a&&a.domainLocales);C.href=L||l.addBasePath(l.addLocale(f,_,a&&a.defaultLocale))}return i.default.cloneElement(t,C)};t.default=u},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,o=a.useRef(),c=a.useState(!1),d=n(c,2),u=d[0],h=d[1],f=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,l=n.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=r(7294),i=r(3447),l="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return n.createElement(d,l({attr:l({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var r,a=e.attr,i=e.size,o=e.title,c=s(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);