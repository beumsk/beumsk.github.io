(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{94:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(2417)}])},4285:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(5893),i=r(1664),s=r(5697),l=r.n(s),n=r(9583),o=r(5434),c=r(7735);function d(e){var t=e.item,r=t.title.replace(/-/g," ").charAt(0).toUpperCase()+t.title.replace(/-/g," ").slice(1);return(0,a.jsxs)("div",{className:"card",children:[(0,a.jsxs)("div",{className:"card__behind",children:[(0,a.jsx)(i.default,{href:t.link||"",children:(0,a.jsx)("a",{className:"card__title",title:r,children:(0,a.jsx)("h2",{className:"t-ellipsis",children:r})})}),"perso"===t.type&&(0,a.jsxs)("div",{className:"card__links",children:[t.pen&&(0,a.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t.pen,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:(0,a.jsx)(n.q25,{title:"Codepen","aria-labelledby":"Codepen"})}),t.sandbox&&(0,a.jsx)("a",{href:"https://codesandbox.io/s/"+t.sandbox,target:"_blank",rel:"noopener noreferrer",title:"Codesandbox link",children:(0,a.jsx)(c.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}),(0,a.jsx)("a",{href:"https://github.com/beumsk/"+t.title,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:(0,a.jsx)(n.hJX,{title:"Github","aria-labelledby":"Github"})})]}),"pro"===t.type&&(0,a.jsxs)("div",{className:"card__links",children:[t.current&&(0,a.jsx)("a",{href:t.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:(0,a.jsx)(o.zNX,{title:"Live website","aria-labelledby":"Live website"})}),t.past&&(0,a.jsx)("a",{href:t.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:(0,a.jsx)(o._4_,{title:"Site as I left it","aria-labelledby":"Site as I left it"})})]})]}),(0,a.jsx)(i.default,{href:t.link||"",children:(0,a.jsx)("a",{title:"Learn more",tabIndex:"-1",children:(0,a.jsx)("div",{className:"card__img",children:(0,a.jsx)("img",{src:t.img,alt:t.title.replace(/-/g," "),width:"260",height:"146",loading:"lazy"})})})})]})}function h(e){var t=e.data,r=e.className;return(0,a.jsx)("div",{className:"grid "+r,children:t.map((function(e){return(0,a.jsx)(d,{item:e},e.title)}))})}d.propTypes={item:l().object},h.propTypes={data:l().array,className:l().string}},9095:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(5893),i=r(7294),s=r(9008),l=r(5697),n=r.n(l),o=r(1664),c=r(5434),d=[{text:"Home",link:"/#"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Contact",link:"/#contact"}];function h(e){var t=e.onClick,r=e.theme;return(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"container",children:[d.map((function(e,t){return(0,a.jsx)(o.default,{href:e.link,children:t?(0,a.jsx)("a",{children:e.text}):(0,a.jsx)("a",{className:"logo",children:(0,a.jsx)("img",{src:"/images/logo.svg",alt:"R\xe9my Beumier logo",title:e.text,width:"30",height:"30"})})},e.text)})),(0,a.jsx)("button",{onClick:t,className:"btn",title:"dark"==r?"Switch to light mode":"Switch to dark mode","aria-label":"dark"==r?"Switch to light mode":"Switch to dark mode",children:"dark"===r?(0,a.jsx)(c.Dq,{title:"Dark mode","aria-labelledby":"Dark mode"}):(0,a.jsx)(c.EWX,{title:"Light mode","aria-labelledby":"Light mode"})})]})})}h.propTypes={theme:n().string,onClick:n().func};var p=r(9583),m=r(7735);function b(){return(0,a.jsx)("footer",{id:"contact",className:"over-h svg-divider",children:(0,a.jsxs)("div",{className:"container","data-aos":"fade-left",children:[(0,a.jsx)("p",{className:"mb-5",children:"Feel free to get in touch and stay connected with me via these different channels."}),(0,a.jsxs)("div",{className:"mb-10",children:[(0,a.jsxs)("a",{href:"https://github.com/beumsk",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,a.jsx)(p.hJX,{title:"Github","aria-labelledby":"Github"}),(0,a.jsx)("span",{className:"ml-1",children:"Github"})]}),(0,a.jsxs)("a",{href:"https://codepen.io/beumsk/",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,a.jsx)(p.q25,{title:"Codepen","aria-labelledby":"Codepen"}),(0,a.jsx)("span",{className:"ml-1",children:"Codepen"})]}),(0,a.jsxs)("a",{href:"https://codesandbox.io/u/beumsk",target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,a.jsx)(m.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"}),(0,a.jsx)("span",{className:"ml-1",children:"Codesandbox"})]}),(0,a.jsxs)("a",{href:"https://www.linkedin.com/in/remybeumier/",target:"_blank",rel:"noopener noreferrer",className:"btn",children:[(0,a.jsx)(p.ltd,{title:"LinkedIn","aria-labelledby":"LinkedIn"}),(0,a.jsx)("span",{className:"ml-1",children:"LinkedIn"})]})]}),(0,a.jsxs)("p",{className:"copy",children:["\xa9 ",(new Date).getFullYear()," |"," ",(0,a.jsx)("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person",children:(0,a.jsx)("span",{itemProp:"name",children:"R\xe9my Beumier"})})]})]})})}var u=r(1163),x=r(8193);function j(){var e=(0,u.useRouter)(),t=e.asPath.replace(/\?.*/g,"$'").split("/").filter((function(e){return e}));return"/"!==e.route&&(0,a.jsx)("div",{className:"breadcrumb",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:"/",children:"Home"})}),t.map((function(e,r){return(0,a.jsx)("li",{children:r===t.length-1?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.rYR,{}),e.replace(/-/g," ")]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.rYR,{}),(0,a.jsx)(o.default,{href:"/".concat(e),children:(0,a.jsx)("a",{children:e.replace(/-/g," ")})})]})},e)}))]})})})}function f(e){var t=e.img,r=e.title,l=e.description,n=e.url,o=e.children,c=e.itemtype,d=(0,i.useState)(""),p=d[0],m=d[1];(0,i.useEffect)((function(){var e=window.localStorage.getItem("theme");m(e)}),[]);var u=t&&(t.startsWith("http")?t:"https://remybeumier.be".concat(t));return(0,a.jsxs)("main",{className:p,itemScope:!!c||void 0,itemType:c?"http://schema.org/"+c:void 0,children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:r},"title"),(0,a.jsx)("meta",{name:"description",content:l},"description"),(0,a.jsx)("meta",{property:"og:title",content:r},"og:title"),(0,a.jsx)("meta",{property:"og:description",content:l},"og:description"),(0,a.jsx)("meta",{property:"og:url",content:n||"https://remybeumier.be"},"og:url"),(0,a.jsx)("meta",{property:"og:image",content:u||"https://remybeumier.be/images/rb.jpg"},"og:image"),(0,a.jsx)("meta",{property:"twitter:title",content:r},"twitter:title"),(0,a.jsx)("meta",{property:"twitter:description",content:l},"twitter:description"),(0,a.jsx)("meta",{property:"twitter:url",content:n||"https://remybeumier.be"},"twitter:url"),(0,a.jsx)("meta",{property:"twitter:image",content:u||"https://remybeumier.be/images/rb.jpg"},"twitter:image")]}),(0,a.jsx)(h,{onClick:function(){var e="light"===p?"dark":"light";window.localStorage.setItem("theme",e),m(e)},theme:p}),(0,a.jsxs)("div",{className:"over-h",children:[(0,a.jsx)(j,{}),o]}),(0,a.jsx)(b,{}),(0,a.jsx)("div",{id:"ie-banner",children:"Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs."})]})}f.propTypes={title:n().string,description:n().string,img:n().string,url:n().string,children:n().node,itemtype:n().string}},2241:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(5893),i=r(7735),s=r(5697),l=r.n(s);function n(e){var t=e.name,r=e.color;return(0,a.jsxs)(a.Fragment,{children:["html"===t&&(0,a.jsx)(i.PSn,{color:r?"#E44D26":"",title:"HTML","aria-labelledby":"HTML"}),"css"===t&&(0,a.jsx)(i.H5g,{color:r?"#1572B6":"",title:"CSS","aria-labelledby":"CSS"}),"javascript"===t&&(0,a.jsx)(i.vl3,{color:r?"#F0DB4F":"",title:"JavaScript","aria-labelledby":"JavaScript"}),"typescript"===t&&(0,a.jsx)(i.WZi,{color:r?"#007ACC":"",title:"Typescript","aria-labelledby":"Typescript"}),"jquery"===t&&(0,a.jsx)(i.VIz,{color:r?"#0868AC":"",title:"jQuery","aria-labelledby":"jQuery"}),"bootstrap"===t&&(0,a.jsx)(i.BpA,{color:r?"#5B4282":"",title:"Bootstrap","aria-labelledby":"Bootstrap"}),"sass"===t&&(0,a.jsx)(i.xQ0,{color:r?"#CF649A":"",title:"Sass","aria-labelledby":"Sass"}),"angular"===t&&(0,a.jsx)(i.eAz,{color:r?"#A6120D":"",title:"Angular","aria-labelledby":"Angular"}),"react"===t&&(0,a.jsx)(i.pNp,{color:r?"#61DBFB":"",title:"React","aria-labelledby":"React"}),"redux"===t&&(0,a.jsx)(i.PoL,{color:r?"#764ABC":"",title:"Redux","aria-labelledby":"Redux"}),"material-ui"===t&&(0,a.jsx)(i.I1f,{color:r?"#007fff":"",title:"Material UI","aria-labelledby":"Material UI"}),"chakra-ui"===t&&(0,a.jsx)(i.XOF,{color:r?"#3cc7bd":"",title:"Chakra UI","aria-labelledby":"Chakra UI"}),"styled-components"===t&&(0,a.jsx)(i.urR,{title:"Styled components","aria-labelledby":"Styled components"}),"node.js"===t&&(0,a.jsx)(i.uds,{color:r?"#689F63":"",title:"Node.js","aria-labelledby":"Node.js"}),"firebase"===t&&(0,a.jsx)(i.xEg,{color:r?"#FFA50E":"",title:"Firebase","aria-labelledby":"Firebase"}),"mongo-db"===t&&(0,a.jsx)(i.t$b,{color:r?"#00684A":"",title:"Mongo DB","aria-labelledby":"Mongo DB"}),"c#"===t&&(0,a.jsx)(i.qJU,{color:r?"#390092":"",title:"C#","aria-labelledby":"C#"}),"umbraco"===t&&(0,a.jsx)(i.ddI,{color:r?"#3544b1":"",title:"Umbraco","aria-labelledby":"Umbraco"})]})}n.propTypes={name:l().string,color:l().bool}},2417:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m},default:function(){return b}});var a=r(5893),i=r(7294),s=r(1163),l=r(1664),n=r(5697),o=r.n(n),c=r(5314),d=r(9095),h=r(4285),p=r(2241),m=!0;function b(e){var t=e.title,r=e.description,n=e.url,o=(0,s.useRouter)(),m="/projects"===o.asPath.replace(/.*\?/g,"")?"":o.asPath.replace(/.*\?/g,""),b=(0,i.useState)(m),u=b[0],x=b[1];(0,i.useEffect)((function(){m||x("")}),[o,m]);return(0,a.jsx)(d.Z,{title:t,description:r,url:n,children:(0,a.jsxs)("div",{className:"container projects-shape",children:[(0,a.jsx)("h1",{children:"Projects"}),(0,a.jsx)("p",{className:"ch-80 mb-8",children:"This project list is a collection of work I have been able to build over the years. You can find here the codes I am most proud of, whether they are professional or personal."}),(0,a.jsxs)("div",{className:"tech-list mb-4",children:[(0,a.jsx)(l.default,{href:"?professional",children:(0,a.jsx)("a",{onClick:function(){return x("professional")},className:"btn ".concat("professional"===u?"active":""),children:"Professional projects"})}),(0,a.jsx)(l.default,{href:"?personal",children:(0,a.jsx)("a",{onClick:function(){return x("personal")},className:"btn ".concat("personal"===u?"active":""),children:"Personal projects"})})]}),(0,a.jsx)("div",{className:"tech-list",children:["html","css","javascript","react","jquery","sass","angular"].map((function(e){return(0,a.jsx)(l.default,{href:"?".concat(e),children:(0,a.jsxs)("a",{onClick:function(){return x(e)},className:"btn ".concat(u===e?"active":""),children:[(0,a.jsx)(p.Z,{name:e}),(0,a.jsx)("span",{children:e.replace("-"," ")})]})},e)}))}),(0,a.jsxs)("div",{"data-aos":"fade-up",children:[""===u&&(0,a.jsx)(h.Z,{data:c.q,className:"mt-6 mb-20"}),"personal"===u||"professional"===u?(0,a.jsx)(h.Z,{data:c.q.filter((function(e){return"professional"===u?"pro"===e.type:"perso"===e.type})),className:"mt-6 mb-20"}):(0,a.jsx)(h.Z,{data:c.q.filter((function(e){return e.tech[e.tech.findIndex((function(e){return e.toLowerCase()===u}))]===u})),className:"mt-6 mb-20"})]})]})})}b.defaultProps={title:"Projects | R\xe9my Beumier"},b.propTypes={title:o().string.isRequired,description:o().string,url:o().string}}},function(e){e.O(0,[228,415,445,617,417,314,774,888,179],(function(){return t=94,e(e.s=t);var t}));var t=e.O();_N_E=t}]);