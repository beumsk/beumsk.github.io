(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{4586:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/set-nextjs-lang",function(){return t(9250)}])},9250:function(e,n,t){"use strict";t.r(n);var o=t(5893),i=t(1151),r=t(4911),s=(t(9786),function(e){var n=e.children;return(0,o.jsx)(r.Z,{children:n})});function d(e){var n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"It is advised and a good practice to define the language of a site. It's very straightforward in plain HTML, but it isn't so intuitive in Next.js. Let's see how we can do it."}),"\n",(0,o.jsx)(n.h2,{children:"Static Site Generation"}),"\n",(0,o.jsxs)(n.p,{children:["In Next.js, if we want to modify the ",(0,o.jsx)(n.code,{children:"<head>"})," we import Head from next/Head, but what if we want to pass a property to the ",(0,o.jsx)(n.code,{children:"<html>"})," tag? Next provides an option to add another JS file \u2014 in the pages folder \u2014 called ",(0,o.jsx)(n.code,{children:"_document.js"})," allowing us to be in control of the upper HTML."]}),"\n",(0,o.jsx)(n.p,{children:"Here is the default content of it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import Document, { Html, Head, Main, NextScript } from 'next/document';\n\nclass MyDocument extends Document {\n  render() {\n    return (\n      <Html lang=\"en\">\n        <Head />\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Make sure the above ",(0,o.jsx)(n.code,{children:"_document.js"})," is in the pages folder.\nWe can now add the ",(0,o.jsx)(n.code,{children:"lang"})," property on HTML ",(0,o.jsx)(n.code,{children:'<html lang="en">'})," and have the language defined for our website."]}),"\n",(0,o.jsx)(n.h2,{children:"Server Side Rendering"}),"\n",(0,o.jsxs)(n.p,{children:["If our site works with SSR, we can use another solution.\nIn ",(0,o.jsx)(n.code,{children:"next.config.js"})," at the root of our project, define the following ",(0,o.jsx)(n.code,{children:"i18n"})," object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  i18n: {\n    locales: ['en'],\n    defaultLocale: 'en',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note this solution only works in Next.js version 10 and newer."}),"\n",(0,o.jsx)(n.p,{children:"Enjoy coding with Next.js!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(d,e)}))}}},function(e){e.O(0,[838,151,365,594,805,136,911,774,888,179],(function(){return n=4586,e(e.s=n);var n}));var n=e.O();_N_E=n}]);