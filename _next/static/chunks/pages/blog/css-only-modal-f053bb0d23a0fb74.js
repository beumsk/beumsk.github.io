(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{8057:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/css-only-modal",function(){return t(5323)}])},4911:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(1799),s=t(9396),o=t(5893),a=t(7294),r=t(1664),l=t.n(r),d=t(1163),c=t(4725),h=t.n(c),p=(t(9578),t(8674),t(7013),t(2427),t(7771)),m=t(3422),u=t.n(m),f=t(2362),g=t(6945),x=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function b(e){var n=e.children,t=(0,d.useRouter)();(0,a.useEffect)((function(){h().highlightAll()}),[t]);var r=u().find((function(e){return e.slug===t.asPath.replace("/blog/","")})),c=r.title,m=r.intro,b=r.img,j=r.published,w=r.modified,v=r.categories,y=null===v||void 0===v?void 0:v.split(", ").filter((function(e){return e})),k=u()[u().findIndex((function(e){return e.title===c}))+1]||u()[0],_=[u()[u().findIndex((function(e){return e.title===c}))-1]||u()[u().length-1],k];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g.Z,(0,s.Z)((0,i.Z)({title:"".concat(c," | Blog | R\xe9my Beumier"),description:m,itemtype:"Article"},r),{children:(0,o.jsx)("div",{className:"container narrow post-shape",children:(0,o.jsx)("div",{"data-aos":"fade-left",children:(0,o.jsxs)("article",{children:[(0,o.jsx)("h1",{itemProp:"headline name",children:c}),(0,o.jsx)("img",{src:b,alt:c,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,o.jsxs)("div",{className:"space-between-x mb-10",children:[(0,o.jsx)("div",{className:"post__categories",children:null===y||void 0===y?void 0:y.map((function(e){return(0,o.jsx)(l(),{href:"/blog?".concat(e),children:(0,o.jsx)("a",{children:(0,o.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:x(j),dateTime:x(j),children:["Published on: ",x(j)]}),(0,o.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:x(w),dateTime:x(w),children:["Modified on: ",x(w)]})]})]}),(0,o.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:n}),(0,o.jsx)("div",{className:"mb-15",children:(0,o.jsx)(l(),{href:"/blog",children:(0,o.jsxs)("a",{className:"btn",children:[(0,o.jsx)(p.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"mb-5",children:"Suggested articles"}),(0,o.jsx)(f.Z,{data:_,className:"mb-20"})]})]})})})}))})}},5694:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893);function s(e){var n=e.className,t=e.pen,s=e.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"code-iframe-wrapper "+(n||""),children:(0,i.jsxs)("iframe",{height:"300",scrolling:"no",title:s,loading:"lazy",src:"https://codepen.io/beumsk/embed/"+t+"?default-tab=result",children:[(0,i.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t,target:"_blank",rel:"noopener noreferrer",children:"See the Pen"}),"by",(0,i.jsx)("a",{href:"https://codepen.io/beumsk",target:"_blank",rel:"noopener noreferrer",children:"R\xe9my Beumier"})]})})})}},5323:function(e,n,t){"use strict";t.r(n);var i=t(5893),s=t(1151),o=t(4911),a=t(5694),r=function(e){var n=e.children;return(0,i.jsx)(o.Z,{children:n})};function l(e){var n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Modals are really useful on websites and applications to give feedback to users or to ask for confirmation. They are often used to display additional content or to request user input. In this tutorial, we will be building a modal component using only CSS. Let's dive into it with accessibility in mind and ensuring correct cross-browser compatibility."}),"\n",(0,i.jsxs)(n.p,{children:["We will avoid any JavaScript by relying on anchor links and the ",(0,i.jsx)(n.code,{children:":target"})," pseudo-class. This will allow us to create a modal that can be opened and closed by clicking on a link. The modal will be displayed in the center of the screen and will have a close button to dismiss it."]}),"\n",(0,i.jsxs)(n.p,{children:["This article piece is in line with the following articles: ",(0,i.jsx)(n.a,{href:"/blog/css-only-responsive-navbar",children:"a Navbar that works without any JS"}),", ",(0,i.jsx)(n.a,{href:"/blog/css-only-toggle-switch-button",children:"a switch toggle button with no script"})," and ",(0,i.jsx)(n.a,{href:"/blog/css-only-accordion",children:"a simple CSS accordion"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Start from the anchor link and the target pseudo-class"}),"\n",(0,i.jsxs)(n.p,{children:["The HTML structure of the modal component is rather simple. The ",(0,i.jsx)(n.code,{children:"<a>"})," link must point to an ",(0,i.jsx)(n.code,{children:"id"})," that will be used as the ",(0,i.jsx)(n.code,{children:":target"})," pseudo-class. The modal itself will be a ",(0,i.jsx)(n.code,{children:"<div>"})," element that will be displayed when the ",(0,i.jsx)(n.code,{children:":target"})," pseudo-class is active."]}),"\n",(0,i.jsx)(n.p,{children:"Let's dive into the code right now."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<a class="btn" href="#open-modal">Open Modal</a>\n\n<div id="open-modal" class="modal-window">\n  <a href="#" class="modal-backdrop"></a>\n  <div class="modal">\n    <a href="#" title="Close" class="modal-close">\u2716</a>\n    <p>Modal Window</p>\n    <p>\n      <a href="https://remybeumier.be/blog/css-only-modal" target="_blank">Read the related article</a>\n    </p>\n  </div>\n</div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"a"})," element points to whatever you set your modal id to (here it's ",(0,i.jsx)(n.code,{children:"open-modal"}),"). All the modal div need is the same name as id. We added a close button and closing backdrop to make it more user-friendly."]}),"\n",(0,i.jsx)(n.p,{children:"By leveraging the native functionality of the anchor link elements, we already have an accessible and working modal. But let's design it!"}),"\n",(0,i.jsx)(n.h2,{children:"Modify the link style"}),"\n",(0,i.jsx)(n.p,{children:"Let's style our link first, giving it a button look. You could drop a few lines if you don't want to style it as a button."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".btn {\n  appearance: none;\n  display: inline-block;\n  font-size: inherit;\n  color: inherit;\n  background: #f5f5f5;\n  text-decoration: none;\n  border: solid 1px #f5f5f5;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  margin: 0 auto;\n  min-width: 5rem;\n  max-width: 10rem;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background: rgba(256, 256, 256, 0.5);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Style the modal window"}),"\n",(0,i.jsxs)(n.p,{children:["The modal itself is more complex in terms of CSS. The key point is the use of the ",(0,i.jsx)(n.code,{children:":target"})," pseudo-class to show or hide the modal. We will also use the ",(0,i.jsx)(n.code,{children:"visibility"})," and ",(0,i.jsx)(n.code,{children:"opacity"})," properties to create a smooth transition effect."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".modal-window {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:target {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .modal {\n    width: 20rem;\n    padding: 2em;\n    background: white;\n    position: relative;\n    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);\n    border-radius: 0.5rem;\n  }\n  .modal-close {\n    color: #aaa;\n    font-size: 80%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    text-align: center;\n    text-decoration: none;\n    margin: 0;\n    padding: 0.25rem 0.5rem;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"About the backdrop style"}),"\n",(0,i.jsxs)(n.p,{children:["The backdrop is the overlay that appears behind the modal. It's a simple ",(0,i.jsx)(n.code,{children:"a"})," element that will cover the whole screen. It's a good practice to add a backdrop to make the modal more user-friendly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".modal-backdrop {\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.5);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n}\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If Sass is not your friend, copy-paste and transpile it into CSS on ",(0,i.jsx)("a",{href:"https://www.sassmeister.com/",target:"_blank",children:"https://www.sassmeister.com/"})," or ",(0,i.jsx)("a",{href:"https://sass.js.org/",target:"_blank",children:"https://sass.js.org/"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Completed modal look"}),"\n",(0,i.jsxs)(n.p,{children:["We did it! A fully accessible, well-designed and smooth modal. You probably observed the use of ",(0,i.jsx)(n.code,{children:"rem"}),", meaning our component will follow the ",(0,i.jsx)(n.code,{children:"html"})," element ",(0,i.jsx)(n.code,{children:"font-size"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TLDR"}),": See the finalised code for this ",(0,i.jsx)("a",{href:"https://codepen.io/beumsk/pen/EaYNBJV",target:"_blank",children:"CSS only modal on Codepen"}),". You can take any level of inspiration from this and use it in your future developments."]}),"\n",(0,i.jsx)(a.Z,{pen:"EaYNBJV",title:"CSS only modal on Codepen"}),"\n",(0,i.jsx)(n.p,{children:"Enjoy coding with CSS!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(l,e)}))}}},function(e){e.O(0,[838,151,365,594,913,734,311,774,888,179],(function(){return n=8057,e(e.s=n);var n}));var n=e.O();_N_E=n}]);