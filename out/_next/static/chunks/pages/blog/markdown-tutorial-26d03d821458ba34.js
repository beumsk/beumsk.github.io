(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{6336:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/markdown-tutorial",function(){return r(9519)}])},3753:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var i=r(5893),t=r(7294),c=r(1163),l=r(1664),s=r(5697),d=r.n(s),o=r(4725),h=r.n(o),a=(r(9578),r(2427),r(8193)),x=r(3422),j=r(9095),u=r(4285);function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){m(e,n,r[n])}))}return e}var f=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function g(e){var n=e.children,r=(0,c.useRouter)();(0,t.useEffect)((function(){h().highlightAll()}),[r]);var s=x.x.filter((function(e){return e.slug===r.asPath.replace("/blog/","")})),d=s[0],o=d.title,m=d.intro,g=d.img,b=d.published,w=d.modified,v=d.categories,y=(d.url,null===v||void 0===v?void 0:v.split(", ").filter((function(e){return e}))),_=x.x[x.x.findIndex((function(e){return e.title===o}))+1]||x.x[0],k=[x.x[x.x.findIndex((function(e){return e.title===o}))-1]||x.x[x.x.length-1],_];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(j.Z,p({title:"".concat(o," | Blog | R\xe9my Beumier"),description:m,itemtype:"Article"},s[0],{children:(0,i.jsx)("div",{className:"container narrow posts-shape",children:(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{itemProp:"headline name",children:o}),(0,i.jsx)("img",{src:g,alt:o,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,i.jsxs)("div",{className:"space-between-x mb-10",children:[(0,i.jsx)("div",{className:"post__categories",children:null===y||void 0===y?void 0:y.map((function(e){return(0,i.jsx)(l.default,{href:"/blog?".concat(e),children:(0,i.jsx)("a",{children:(0,i.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:f(b),dateTime:f(b),children:["Published on: ",f(b)]}),(0,i.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:f(w),dateTime:f(w),children:["Modified on: ",f(w)]})]})]}),(0,i.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:n}),(0,i.jsx)("div",{className:"mb-15",children:(0,i.jsx)(l.default,{href:"/blog",children:(0,i.jsxs)("a",{className:"btn",children:[(0,i.jsx)(a.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,i.jsx)(u.Z,{data:k,className:"mb-20"})]})]})})})}))})}g.propTypes={meta:d().object,children:d().node,posts:d().array}},9519:function(e,n,r){"use strict";r.r(n);var i=r(5893),t=r(1151),c=r(3753),l=function(e){var n=e.children;return(0,i.jsx)(c.Z,{children:n})};function s(e){var n=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",em:"em",h1:"h1",blockquote:"blockquote",ol:"ol",li:"li",ul:"ul",hr:"hr",a:"a",img:"img"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Markdown is a simple but widely used language, especially for documentation."}),"\n",(0,i.jsx)(n.p,{children:"Every section has the syntax first and the rendered example right after."}),"\n",(0,i.jsx)(n.p,{children:"Let's see how we can write with it!"}),"\n",(0,i.jsx)(n.h2,{children:"Text"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"**bold text**\r\n*italicized text*\r\n~~strikethrough text~~\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"bold text"}),", ",(0,i.jsx)(n.em,{children:"italicized text"})," and ~~strikethrough text~~"]}),"\n",(0,i.jsx)(n.h2,{children:"Heading"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# H1\r\n## H2\n"})}),"\n",(0,i.jsx)(n.h1,{children:"H1"}),"\n",(0,i.jsx)(n.h2,{children:"H2"}),"\n",(0,i.jsx)(n.h2,{children:"Blockquote"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"> blockquote\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"blockquote"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Ordered list"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1. First item\r\n2. Second item\r\n3. Third item\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"First item"}),"\n",(0,i.jsx)(n.li,{children:"Second item"}),"\n",(0,i.jsx)(n.li,{children:"Third item"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Unordered list"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- First item\r\n- Second item\r\n- Third item\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"First item"}),"\n",(0,i.jsx)(n.li,{children:"Second item"}),"\n",(0,i.jsx)(n.li,{children:"Third item"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"`code`\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"code"})}),"\n",(0,i.jsx)(n.h2,{children:"Block code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```\r\n// some line of code\r\n```\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// some line of code\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Horizontal rule"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"---\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{children:"Link"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[title](https://remybeumier.be)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://remybeumier.be",children:"title"})}),"\n",(0,i.jsx)(n.h2,{children:"Image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"![alt text](/images/rb.jpg)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/rb.jpg",alt:"alt text"})}),"\n",(0,i.jsx)(n.h2,{children:"Task list"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- [x] Completed\r\n- [ ] Uncompleted\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[x] Completed"}),"\n",(0,i.jsx)(n.li,{children:"[ ] Uncompleted"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"| First col title | Second col title |\r\n| ----------- | ----------- |\r\n| row1 col1 | row1 col2 |\r\n| row2 col1 | row2 col2 |\n"})}),"\n",(0,i.jsx)(n.p,{children:"| First col title | Second col title |\r\n| --------------- | ---------------- |\r\n| row1 col1       | row1 col2        |\r\n| row2 col1       | row2 col2        |"}),"\n",(0,i.jsx)(n.p,{children:"As you can see it's not difficult and it's rather easy to remember."}),"\n","\n",(0,i.jsx)(n.p,{children:"Enjoy writing with Markdown!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(l,Object.assign({},e,{children:(0,i.jsx)(s,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return n=6336,e(e.s=n);var n}));var n=e.O();_N_E=n}]);