(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{2013:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return t(1411)}])},5694:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var n=t(5893),l=t(9786);function r(e){var s=e.className,t=e.pen,r=e.title;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"code-iframe-wrapper "+(s||""),children:(0,n.jsxs)("iframe",{height:"300",scrolling:"no",title:r,loading:"lazy",src:"https://codepen.io/beumsk/embed/"+t+"?default-tab=result",children:[(0,n.jsx)(l.Z,{href:"https://codepen.io/beumsk/pen/"+t,children:"See the Pen"}),"by",(0,n.jsx)(l.Z,{href:"https://codepen.io/beumsk",children:"R\xe9my Beumier"})]})})})}},4152:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var n=t(5893),l=t(9786);function r(e){var s=e.className,t=e.sandbox,r=e.title;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"code-iframe-wrapper "+(s||""),children:(0,n.jsx)("iframe",{height:"300",title:r,loading:"lazy",src:"https://codesandbox.io/embed/"+t+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,n.jsx)(l.Z,{href:"https://codesandbox.io/s/"+t,children:"See the Sandbox by R\xe9my Beumier"})})})})}},1411:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return g},default:function(){return N}});var n=t(5893),l=t(7771),r=t(2091),c=t(80),i=t(5694),a=t(4152),o=t(2362),h=t(6945),u=t(9786),d=t(6042),m=t(9396),j=t(9534),x=t(7294),b=t(8809);function f(e){var s=function(e){h("left"===e?function(e){return 0===e?t.screens.length-1:e-1}:function(e){return e===t.screens.length-1?0:e+1})},t=e.project,r=(0,j.Z)(e,["project"]),i=(0,b.Z)(),a=(0,x.useState)(0),o=a[0],h=a[1],u=(0,x.useState)(!0),f=u[0],p=u[1];return(0,x.useEffect)((function(){h(0)}),[t.link]),(0,n.jsxs)(n.Fragment,{children:[i?(0,n.jsxs)("div",{className:"space-between-x mb-4",children:[t.screens.length>1?(0,n.jsxs)("button",{title:"See previous screenshot",onClick:function(){return s("left")},children:[(0,n.jsx)(l.FtK,{className:"mr-1"}),"Previous"]}):null,(0,n.jsxs)("button",{onClick:function(){return p((function(e){return!e}))},children:[(0,n.jsx)(c.zeM,{className:"mr-1"}),f?"Set screenshot scrollable":"Set screenshot full size",(0,n.jsx)(c.zeM,{className:"ml-1"})]}),t.screens.length>1?(0,n.jsxs)("button",{title:"See next screenshot",onClick:function(){return s("right")},children:["Next",(0,n.jsx)(l.rYR,{className:"ml-1"})]}):null]}):null,(0,n.jsxs)("div",(0,m.Z)((0,d.Z)({className:"project__screen"},r),{children:[(0,n.jsxs)("figure",{className:f?"":"scrollable",children:[(0,n.jsx)("img",{src:t.screens[o],alt:"Screenshot of ".concat(t.current),width:"300",height:"400",loading:"lazy"}),(0,n.jsx)("figcaption",{className:"sr-only",children:"Full size screenshot of ".concat(t.title," website")})]}),i&&t.screens.length>1?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{title:"See previous screenshot",onClick:function(){return s("left")},tabIndex:0,role:"button","aria-label":"See previous screenshot",className:"left"}),(0,n.jsx)("div",{title:"See next screenshot",onClick:function(){return s("right")},tabIndex:0,role:"button","aria-label":"See next screenshot",className:"right"})]}):null]}))]})}var p=t(7455),g=!0;function N(e){var s=e.project,t=e.relatedLinks,d=e.img,m=e.url,j="pro"===s.type;return(0,n.jsx)(h.Z,{title:"".concat(s.title," | Projects | R\xe9my Beumier"),description:s.intro,img:d,url:m,children:(0,n.jsx)("div",{className:"container project-shape",children:(0,n.jsxs)("div",{"data-aos":"fade-left",children:[(0,n.jsx)("h1",{children:s.title}),(0,n.jsx)("p",{className:"project__intro mb-8",children:s.intro}),s.tech.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Technologies"}),(0,n.jsx)("ul",{className:"mb-6 project__tech-list",children:s.tech.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsxs)(u.Z,{href:"/projects?tech=".concat(e),className:"btn",children:[(0,n.jsx)(p.Z,{name:e,color:!0}),(0,n.jsx)("span",{children:e.replace("-"," ")})]})},e)}))})]}):null,s.chall.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Challenges and accomplishments"}),(0,n.jsx)("ul",{className:"mb-8",children:s.chall.map((function(e){return(0,n.jsx)("li",{children:e},e)}))})]}):null,!j&&s.pen?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Demo"}),(0,n.jsx)(i.Z,{pen:s.pen,title:s.title})]}):null,!j&&s.sandbox?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Demo"}),(0,n.jsx)(a.Z,{sandbox:s.sandbox,title:s.title})]}):null,j&&s.screens.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{children:["Visual",s.screens.length>1?"s":""]}),(0,n.jsx)(f,{project:s,className:"project__screen"})]}):null,(0,n.jsxs)("div",{className:"mb-15",children:[(0,n.jsxs)(u.Z,{href:"/projects",className:"btn mb-4 mr-4",style:{verticalAlign:"bottom"},children:[(0,n.jsx)(l.FtK,{className:"mr-1"}),"Back to projects"]}),j?null:(0,n.jsxs)(u.Z,{href:"https://github.com/beumsk/".concat(s.title.replace(/ /g,"-")),className:"btn mb-4 mr-4",children:["Github repository",(0,n.jsx)(r.hJX,{title:"Github","aria-labelledby":"Github",className:"ml-1"})]}),j&&s.current?(0,n.jsxs)(u.Z,{href:s.current,className:"btn mb-4 mr-4",children:["Live website",(0,n.jsx)(c.zNX,{title:"Live website","aria-labelledby":"Live website",className:"ml-1"})]}):null,j&&s.past?(0,n.jsxs)(u.Z,{href:s.past,className:"btn mb-4 mr-4",children:["Site as I left it",(0,n.jsx)(c._4_,{title:"Site as I left it","aria-labelledby":"Site as I left it",className:"ml-1"})]}):null]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"mb-5",children:"Suggested projects"}),(0,n.jsx)(o.Z,{data:t,className:"mb-20"})]})]})})})}}},function(e){e.O(0,[838,151,365,594,805,276,774,888,179],(function(){return s=2013,e(e.s=s);var s}));var s=e.O();_N_E=s}]);