(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{7995:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/css-only-accordion",function(){return t(1797)}])},3753:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var i=t(5893),s=t(7294),o=t(1163),r=t(1664),a=t(5697),c=t.n(a),l=t(4725),d=t.n(l),h=(t(9578),t(8674),t(7013),t(2427),t(8193)),p=t(3422),u=t(9095),m=t(4285);function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){g(e,n,t[n])}))}return e}var x=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function j(e){var n=e.children,t=(0,o.useRouter)();(0,s.useEffect)((function(){d().highlightAll()}),[t]);var a=p.x.filter((function(e){return e.slug===t.asPath.replace("/blog/","")})),c=a[0],l=c.title,g=c.intro,j=c.img,b=c.published,w=c.modified,y=c.categories,v=(c.url,null===y||void 0===y?void 0:y.split(", ").filter((function(e){return e}))),_=p.x[p.x.findIndex((function(e){return e.title===l}))+1]||p.x[0],k=[p.x[p.x.findIndex((function(e){return e.title===l}))-1]||p.x[p.x.length-1],_];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,f({title:"".concat(l," | Blog | R\xe9my Beumier"),description:g,itemtype:"Article"},a[0],{children:(0,i.jsx)("div",{className:"container narrow posts-shape",children:(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{itemProp:"headline name",children:l}),(0,i.jsx)("img",{src:j,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,i.jsxs)("div",{className:"space-between-x mb-10",children:[(0,i.jsx)("div",{className:"post__categories",children:null===v||void 0===v?void 0:v.map((function(e){return(0,i.jsx)(r.default,{href:"/blog?".concat(e),children:(0,i.jsx)("a",{children:(0,i.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:x(b),dateTime:x(b),children:["Published on: ",x(b)]}),(0,i.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:x(w),dateTime:x(w),children:["Modified on: ",x(w)]})]})]}),(0,i.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:n}),(0,i.jsx)("div",{className:"mb-15",children:(0,i.jsx)(r.default,{href:"/blog",children:(0,i.jsxs)("a",{className:"btn",children:[(0,i.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,i.jsx)(m.Z,{data:k,className:"mb-20"})]})]})})})}))})}j.propTypes={meta:c().object,children:c().node,posts:c().array}},8368:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(5893),s=t(5697),o=t.n(s);function r(e){var n=e.className,t=e.pen,s=e.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"code-iframe-wrapper "+(n||""),children:(0,i.jsxs)("iframe",{height:"300",scrolling:"no",title:s,loading:"lazy",src:"https://codepen.io/beumsk/embed/"+t+"?default-tab=result",children:[(0,i.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t,target:"_blank",rel:"noopener noreferrer",children:"See the Pen"}),"by",(0,i.jsx)("a",{href:"https://codepen.io/beumsk",target:"_blank",rel:"noopener noreferrer",children:"R\xe9my Beumier"})]})})})}r.propTypes={className:o().string,pen:o().string,title:o().string}},1797:function(e,n,t){"use strict";t.r(n);var i=t(5893),s=t(1151),o=t(3753),r=t(8368),a=function(e){var n=e.children;return(0,i.jsx)(o.Z,{children:n})};function c(e){var n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Accordions can be a great way to display a lot of information in a small amount of space and can be a great addition to any website or web application. We will be using the ",(0,i.jsx)(n.code,{children:"details"})," and ",(0,i.jsx)(n.code,{children:"summary"})," HTML elements as a starting point."]}),"\n",(0,i.jsxs)(n.p,{children:["This will allow us to not use any JavaScript and to focus on a CSS only approach to land a great design. This article piece is therefore in line with two previous articles: ",(0,i.jsx)(n.a,{href:"/blog/css-only-responsive-navbar",children:"a Navbar that works without any JS"})," and ",(0,i.jsx)(n.a,{href:"/blog/css-only-toggle-switch-button",children:"a switch toggle button with no script"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As you already understood, in this tutorial, we will be building an accordion component using only CSS. Let's dive into it with accessibility in mind and ensuring a correct cross-browser compatibility."}),"\n",(0,i.jsx)(n.h2,{children:"Start from the details and summary elements"}),"\n",(0,i.jsx)(n.p,{children:"The HTML structure of the accordion component is relatively straightforward. Each accordion item consists of a title and a content area. The title serves as the button that expands and collapses the content area. The content area is hidden by default and is only shown when the title is clicked."}),"\n",(0,i.jsx)(n.p,{children:"As we know all that, let's look at the code right now."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<details class="accordion">\n  <summary class="accordion__title">Accordion title</summary>\n  <div class="accordion__content">\n    <p>Lorem ipsum dolor sit amet...</p>\n  </div>\n</details>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By utilizing the native functionality of the ",(0,i.jsx)(n.code,{children:"details"})," and ",(0,i.jsx)(n.code,{children:"summary"})," elements, we already have an accessible and working accordion. But let's design it!"]}),"\n",(0,i.jsx)(n.h2,{children:"Modify the accordion style"}),"\n",(0,i.jsxs)(n.p,{children:["Let's add some basic styles to our accordion. Pay attention to the use of the ",(0,i.jsx)(n.code,{children:"+"})," adjacent sibling combinator which helps us add spacing between elements that follow one another."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion {\n  border: solid 2px #f5f5f5;\n  transition: all 0.3s ease-in-out;\n  & + & {\n    margin-top: 0.25rem;\n  }\n  &:hover {\n    background-color: #f5f5f5;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion__title {\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #555555;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion__content {\n  padding: 0 1rem 1rem 1rem;\n  p {\n    margin: 0;\n  }\n  p + p {\n    margin-top: 0.5em;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Design the accordion title"}),"\n",(0,i.jsxs)(n.p,{children:["We will now tweak the typical accordion design by getting rid of the default arrow that appears on the left of the collapse. To influence most browser we will use ",(0,i.jsx)(n.code,{children:"list-style-type"}),", but a couple more lines are needed for others."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion__title {\n  list-style-type: none;\n  &::marker,\n  &::-webkit-details-marker {\n    display: none;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And adding a new arrow using data URI as a ",(0,i.jsx)(n.code,{children:"background-image"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion__title {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M23.024 11.263l-7.024 7.023-7.022-7.023-3.091 3.090 8.569 8.569c0.413 0.413 0.961 0.64 1.545 0.64s1.133-0.228 1.545-0.64l8.569-8.569-3.091-3.090z' fill='%23555555'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem top 0.625rem;\n  background-size: 1.5rem;\n  padding: 0.875rem 2.5rem 0.875rem 0.875rem;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Manage the open state"}),"\n",(0,i.jsxs)(n.p,{children:["We are almost ready with our collapse. Last step is to adapt its design when in an open state. We will leverage the power of the attribute selection of CSS; ",(0,i.jsx)(n.code,{children:"[open]"}),";"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".accordion {\n  &[open] {\n    background-color: #ebebeb;\n    border-color: #ebebeb;\n    .accordion__title {\n      background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.976 22.025l7.024-7.023 7.022 7.023 3.091-3.090-8.568-8.568c-0.413-0.412-0.961-0.64-1.545-0.64s-1.133 0.228-1.545 0.64l-8.569 8.569 3.091 3.090z' fill='%23555555'/%3e%3c/svg%3e\");\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the codepen linked, you will also find a way to animate the opening of an accordion element commented out. I'm not fully convinced by that workaround and that's why I don't detail it in this post."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If Sass is not your friend, copy-paste and transpile it into CSS on ",(0,i.jsx)("a",{href:"https://www.sassmeister.com/",target:"_blank",children:"https://www.sassmeister.com/"})," or ",(0,i.jsx)("a",{href:"https://sass.js.org/",target:"_blank",children:"https://sass.js.org/"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Completed accordion look"}),"\n",(0,i.jsxs)(n.p,{children:["We did it! A fully accessible, well-designed and smooth accordion. You probably observed the use of ",(0,i.jsx)(n.code,{children:"rem"}),", meaning our component will follow the ",(0,i.jsx)(n.code,{children:"html"})," element ",(0,i.jsx)(n.code,{children:"font-size"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TLDR"}),": See the finalised code for this ",(0,i.jsx)("a",{href:"https://codepen.io/beumsk/pen/WNKJzoR",target:"_blank",children:"CSS only accordion on Codepen"}),". You can take any level of inspiration from this and use it in your future developments."]}),"\n",(0,i.jsx)(r.Z,{pen:"WNKJzoR",title:"CSS only accordion on Codepen"}),"\n",(0,i.jsx)(n.p,{children:"Enjoy coding with CSS!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,Object.assign({},e,{children:(0,i.jsx)(c,e)}))}}},function(e){e.O(0,[228,415,445,617,417,136,127,774,888,179],(function(){return n=7995,e(e.s=n);var n}));var n=e.O();_N_E=n}]);