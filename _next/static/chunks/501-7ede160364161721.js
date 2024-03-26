"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{2362:function(e,t,l){l.d(t,{Z:function(){return d}});var r=l(5893),i=l(1664),a=l.n(i),n=l(9583),s=l(5434),o=l(3642);function c(e){var t=e.item;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsxs)("div",{className:"card__behind",children:[(0,r.jsx)(a(),{href:t.link||"",children:(0,r.jsx)("a",{className:"card__title",title:t.title,children:(0,r.jsx)("h2",{className:"t-ellipsis",children:t.title})})}),"perso"===t.type?(0,r.jsxs)("div",{className:"card__links",children:[t.pen?(0,r.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t.pen,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:(0,r.jsx)(n.q25,{title:"Codepen","aria-labelledby":"Codepen"})}):null,t.sandbox?(0,r.jsx)("a",{href:"https://codesandbox.io/s/"+t.sandbox,target:"_blank",rel:"noopener noreferrer",title:"Codesandbox link",children:(0,r.jsx)(o.hY9,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}):null,(0,r.jsx)("a",{href:"https://github.com/beumsk/"+t.title,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:(0,r.jsx)(n.hJX,{title:"Github","aria-labelledby":"Github"})})]}):null,"pro"===t.type?(0,r.jsxs)("div",{className:"card__links",children:[t.current?(0,r.jsx)("a",{href:t.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:(0,r.jsx)(s.zNX,{title:"Live website","aria-labelledby":"Live website"})}):null,t.past?(0,r.jsx)("a",{href:t.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:(0,r.jsx)(s._4_,{title:"Site as I left it","aria-labelledby":"Site as I left it"})}):null]}):null]}),(0,r.jsx)(a(),{href:t.link||"",children:(0,r.jsx)("a",{title:t.title,tabIndex:-1,children:(0,r.jsx)("div",{className:"card__img",children:(0,r.jsx)("img",{src:t.img,alt:t.title,width:"260",height:"146",loading:"lazy"})})})})]})}function d(e){var t=e.data,l=e.className;return(0,r.jsx)("div",{className:"grid "+(l||""),children:t.map((function(e){return(0,r.jsx)(c,{item:e},e.title)}))})}},6945:function(e,t,l){l.d(t,{Z:function(){return y}});var r=l(5893),i=l(7294),a=l(9008),n=l.n(a),s=l(1664),o=l.n(s),c=l(1163),d=l(8193);function h(){var e=(0,c.useRouter)(),t=e.asPath.replace(/\?.*/g,"$'").split("/").filter((function(e){return e}));return"/"!==e.route?(0,r.jsx)("div",{className:"breadcrumb",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/",children:"Home"})}),t.map((function(e,l){return(0,r.jsx)("li",{children:l===t.length-1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.rYR,{}),e.replace(/-/g," ")]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.rYR,{}),(0,r.jsx)(o(),{href:"/".concat(e),children:(0,r.jsx)("a",{children:e.replace(/-/g," ")})})]})},e)}))]})})}):null}var m=l(9583),b=l(3642),u=[{link:"https://github.com/beumsk",title:"Github",icon:m.hJX},{link:"https://codepen.io/beumsk/",title:"Codepen",icon:m.q25},{link:"https://codesandbox.io/u/beumsk",title:"Codesandbox",icon:b.hY9},{link:"https://www.linkedin.com/in/remybeumier/",title:"LinkedIn",icon:m.ltd}];function x(){return(0,r.jsx)("footer",{id:"contact",className:"contact over-h svg-divider",children:(0,r.jsxs)("div",{className:"container","data-aos":"fade-left",children:[(0,r.jsx)("p",{className:"mb-5",children:"Feel free to get in touch and stay connected with me via these different channels."}),(0,r.jsx)("div",{className:"mb-10",children:u.map((function(e){var t=e.icon;return(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,r.jsx)(t,{title:e.title,"aria-labelledby":e.title}),(0,r.jsx)("span",{className:"ml-1",children:e.title})]},e.link)}))}),(0,r.jsxs)("p",{className:"contact__copy",children:["\xa9 ",(new Date).getFullYear()," |"," ",(0,r.jsx)("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person",children:(0,r.jsx)("span",{itemProp:"name",children:"R\xe9my Beumier"})})]})]})})}var p=l(5434),j=[{text:"Home",link:"/#"},{text:"Projects",link:"/projects"},{text:"Blog",link:"/blog"},{text:"Contact",link:"/#contact"}];function g(e){var t=e.onClick,l=e.theme;return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("div",{className:"container",children:[j.map((function(e,t){return(0,r.jsx)(o(),{href:e.link,children:t?(0,r.jsx)("a",{children:e.text}):(0,r.jsx)("a",{className:"logo",children:(0,r.jsx)("img",{src:"/images/logo.svg",alt:"R\xe9my Beumier logo",title:e.text,width:"30",height:"30"})})},e.text)})),(0,r.jsx)("button",{onClick:t,className:"btn",title:"dark"==l?"Switch to light mode":"Switch to dark mode","aria-label":"dark"==l?"Switch to light mode":"Switch to dark mode",children:"dark"===l?(0,r.jsx)(p.Dq,{title:"Dark mode","aria-labelledby":"Dark mode"}):(0,r.jsx)(p.EWX,{title:"Light mode","aria-labelledby":"Light mode"})})]})})}function y(e){var t=e.title,l=e.description,a=e.img,s=e.url,o=e.children,c=e.itemtype,d=e.published,m=e.modified,b=(0,i.useState)(""),u=b[0],p=b[1];(0,i.useEffect)((function(){var e=window.localStorage.getItem("theme");p(e)}),[]);var j=a?a.startsWith("http")?a:"https://remybeumier.be".concat(a):null;return(0,r.jsxs)("main",{className:u,itemScope:!!c||void 0,itemType:c?"http://schema.org/"+c:void 0,children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:t},"title"),(0,r.jsx)("meta",{name:"description",content:l},"description"),(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:l},"og:description"),(0,r.jsx)("meta",{property:"og:url",content:s||"https://remybeumier.be"},"og:url"),(0,r.jsx)("meta",{property:"og:image",content:j||"https://remybeumier.be/images/rb.jpg"},"og:image"),(0,r.jsx)("meta",{property:"twitter:title",content:t},"twitter:title"),(0,r.jsx)("meta",{property:"twitter:description",content:l},"twitter:description"),(0,r.jsx)("meta",{property:"twitter:url",content:s||"https://remybeumier.be"},"twitter:url"),(0,r.jsx)("meta",{property:"twitter:image",content:j||"https://remybeumier.be/images/rb.jpg"},"twitter:image"),d?(0,r.jsx)("meta",{property:"article:published_time",content:d}):null,m?(0,r.jsx)("meta",{property:"article:modified_time",content:m}):null]}),(0,r.jsx)(g,{onClick:function(){var e="light"===u?"dark":"light";window.localStorage.setItem("theme",e),p(e)},theme:u}),(0,r.jsxs)("div",{className:"over-h",children:[(0,r.jsx)(h,{}),o]}),(0,r.jsx)(x,{}),(0,r.jsx)("div",{id:"ie-banner",children:"Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs."})]})}},7455:function(e,t,l){l.d(t,{Z:function(){return a}});var r=l(5893),i=l(3642);function a(e){var t=e.name,l=e.color;return(0,r.jsxs)(r.Fragment,{children:["html"===t?(0,r.jsx)(i.PSn,{color:l?"#E44D26":"",title:"HTML","aria-labelledby":"HTML"}):null,"css"===t?(0,r.jsx)(i.H5g,{color:l?"#1572B6":"",title:"CSS","aria-labelledby":"CSS"}):null,"javascript"===t?(0,r.jsx)(i.vl3,{color:l?"#F0DB4F":"",title:"JavaScript","aria-labelledby":"JavaScript"}):null,"typescript"===t?(0,r.jsx)(i.WZi,{color:l?"#007ACC":"",title:"Typescript","aria-labelledby":"Typescript"}):null,"jquery"===t?(0,r.jsx)(i.VIz,{color:l?"#0868AC":"",title:"jQuery","aria-labelledby":"jQuery"}):null,"bootstrap"===t?(0,r.jsx)(i.BpA,{color:l?"#5B4282":"",title:"Bootstrap","aria-labelledby":"Bootstrap"}):null,"sass"===t?(0,r.jsx)(i.xQ0,{color:l?"#CF649A":"",title:"Sass","aria-labelledby":"Sass"}):null,"angular"===t?(0,r.jsx)(i.eAz,{color:l?"#A6120D":"",title:"Angular","aria-labelledby":"Angular"}):null,"react"===t?(0,r.jsx)(i.pNp,{color:l?"#61DBFB":"",title:"React","aria-labelledby":"React"}):null,"redux"===t?(0,r.jsx)(i.PoL,{color:l?"#764ABC":"",title:"Redux","aria-labelledby":"Redux"}):null,"material-ui"===t?(0,r.jsx)(i.I1f,{color:l?"#007fff":"",title:"Material UI","aria-labelledby":"Material UI"}):null,"chakra-ui"===t?(0,r.jsx)(i.XOF,{color:l?"#3cc7bd":"",title:"Chakra UI","aria-labelledby":"Chakra UI"}):null,"styled-components"===t?(0,r.jsx)(i.urR,{title:"Styled components","aria-labelledby":"Styled components"}):null,"jest"===t?(0,r.jsx)(i.Z$w,{color:l?"#99415B":"",title:"Jest","aria-labelledby":"Jest"}):null,"node.js"===t?(0,r.jsx)(i.uds,{color:l?"#689F63":"",title:"Node.js","aria-labelledby":"Node.js"}):null,"firebase"===t?(0,r.jsx)(i.xEg,{color:l?"#FFA50E":"",title:"Firebase","aria-labelledby":"Firebase"}):null,"mongo-db"===t?(0,r.jsx)(i.t$b,{color:l?"#00684A":"",title:"Mongo DB","aria-labelledby":"Mongo DB"}):null,"c#"===t?(0,r.jsx)(i.qJU,{color:l?"#390092":"",title:"C#","aria-labelledby":"C#"}):null,"umbraco"===t?(0,r.jsx)(i.ddI,{color:l?"#3544b1":"",title:"Umbraco","aria-labelledby":"Umbraco"}):null]})}}}]);