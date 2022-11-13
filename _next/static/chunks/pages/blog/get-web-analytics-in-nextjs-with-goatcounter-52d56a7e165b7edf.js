(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4804:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/get-web-analytics-in-nextjs-with-goatcounter",function(){return n(9798)}])},3753:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(5893),s=n(7294),a=n(1163),r=n(1664),i=n(5697),c=n.n(i),l=n(4725),d=n.n(l),h=(n(9578),n(2427),n(8193)),u=n(3422),p=n(9095),m=n(4285);function x(e){var t=e.children,n=(0,a.useRouter)();(0,s.useEffect)((function(){d().highlightAll()}),[n]);var i=u.x.filter((function(e){return e.slug===n.asPath.replace("/blog/","")}))[0],c=i.title,l=i.intro,x=i.img,f=i.date,g=i.categories,j=i.url,w=""===f?"No date":"".concat(new Date(f).getDate(),".").concat(new Date(f).getMonth()+1,".").concat(new Date(f).getFullYear()),b=null===g||void 0===g?void 0:g.split(", ").filter((function(e){return e})),y=u.x[u.x.findIndex((function(e){return e.title===c}))+1]||u.x[0],v=[u.x[u.x.findIndex((function(e){return e.title===c}))-1]||u.x[u.x.length-1],y];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{title:"".concat(c," | Blog | R\xe9my Beumier"),description:l,img:x,url:j,itemtype:"Article",children:(0,o.jsx)("div",{className:"container narrow posts-shape",children:(0,o.jsx)("div",{"data-aos":"fade-left",children:(0,o.jsxs)("article",{children:[(0,o.jsx)("h1",{itemProp:"headline name",children:c}),(0,o.jsx)("img",{src:x,alt:c,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,o.jsxs)("div",{className:"space-between-x mb-10",children:[(0,o.jsx)("div",{className:"post__categories",children:null===b||void 0===b?void 0:b.map((function(e){return(0,o.jsx)(r.default,{href:"/blog?".concat(e),children:(0,o.jsx)("a",{children:(0,o.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,o.jsx)("time",{className:"post__date",itemProp:"datePublished",content:w,dateTime:w,children:w})]}),(0,o.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:t}),(0,o.jsx)("div",{className:"mb-15",children:(0,o.jsx)(r.default,{href:"/blog",children:(0,o.jsxs)("a",{className:"btn",children:[(0,o.jsx)(h.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"related-title mb-5",children:"Suggested articles"}),(0,o.jsx)(m.Z,{data:v,className:"mb-20"})]})]})})})})})}x.propTypes={meta:c().object,children:c().node,posts:c().array}},9798:function(e,t,n){"use strict";n.r(t);var o=n(5893),s=n(1151),a=n(3753),r=function(e){var t=e.children;return(0,o.jsx)(a.Z,{children:t})};function i(e){var t=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",em:"em",code:"code",img:"img",h3:"h3",pre:"pre",a:"a"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Next.js is more and more complete with the years and it adds features every other month. One feature that we want for our websites is analytics. Vercel, the company behind Next.js provides an analytics tool that seems very complete as long as we decide to host our site on their platform. But what are the options for those of us not willing to host on that site?"}),"\n",(0,o.jsx)(t.p,{children:"Of course, Google is one of the many options, but as I was searching I realised I could use a less famous approach that doesn't track visitor's personal data and which is very lightweight."}),"\n",(0,o.jsx)(t.p,{children:"That solution is called GoatCounter. It is an open source web analytics platform aiming to offer easy to use and meaningful privacy-friendly web analytics."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"We will use the hosted service as it is free for non-commercial use. Feel free to go an extra step by self-hosting the service and don't hesitate to make a donation."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's see how we can implement this tool with our SSG Next.js website! \ud83d\ude80"}),"\n",(0,o.jsx)(t.h2,{children:"Create a GoatCounter account"}),"\n",(0,o.jsxs)(t.p,{children:["The first step is to create an account at ",(0,o.jsx)("a",{href:"https://goatcounter.com/signup",target:"_blank",children:"GoatCounter"}),".\nThe design is not the sexiest, but it is very functional and easy to understand."]}),"\n",(0,o.jsxs)(t.p,{children:["We can reach our account at: ",(0,o.jsx)(t.em,{children:"https://[my-code].goatcounter.com"}),". Make sure to replace ",(0,o.jsx)(t.code,{children:"[my-code]"})," with your actual account code."]}),"\n",(0,o.jsx)(t.p,{children:"In the settings, we will be able to disable the analytics for certain IP addresses, especially, ours.\nIf needed, we can also delete some data, import some other data and manage many other settings."}),"\n",(0,o.jsx)(t.p,{children:"The dashboard presents useful data about pages traffic, top referrers, visitors locations, browsers, devices, etc. The layout of this dashboard is editable."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"/images/content/goatcounter-example.png",alt:"GoatCounter dashboard example"})}),"\n",(0,o.jsx)(t.h2,{children:"Integrate GoatCounter inside Next.js"}),"\n",(0,o.jsx)(t.p,{children:"In order to get the data into our dashboard, we need to link GoatCounter to our Next.js app."}),"\n",(0,o.jsx)(t.h3,{children:"1. Download GoatCounter file"}),"\n",(0,o.jsxs)(t.p,{children:["We will download a version of the ",(0,o.jsx)("a",{href:"https://gc.zgo.at/count.js",target:"_blank",children:"GoatCounter code"}),".\nWe can add it under the ",(0,o.jsx)(t.code,{children:"public/script"})," folder in our solution."]}),"\n",(0,o.jsx)(t.h3,{children:"2. Connect the app to GoatCounter.com"}),"\n",(0,o.jsxs)(t.p,{children:["GoatCounter needs to receive the info from our website, and we will create a connection inside ",(0,o.jsx)(t.code,{children:"_document.js"}),". To be able to run some testing, there is an option to allow GoatCounter in your local solution. It is mentioned as a comment in the snippet below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import Document, { Html, Head, Main, NextScript } from \'next/document\';\n\nclass MyDocument extends Document {\n  render() {\n    return (\n      <Html lang="en">\n        <Head>\n          {/* add "allow_local": true to data-goatcounter-settings to test in local env */}\n          <script\n            data-goatcounter="https://beumsk.goatcounter.com/count"\n            data-goatcounter-settings=\'{"no_onload": true}\'\n            async\n            src="/scripts/goatcounter.js"\n          ><\/script>\n        </Head>\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n'})}),"\n",(0,o.jsx)(t.p,{children:"You could experiment with Next.js Script component, but I somehow couldn't make it work properly."}),"\n",(0,o.jsx)(t.h3,{children:"3. Add the GoatCounter logic"}),"\n",(0,o.jsxs)(t.p,{children:["Inside ",(0,o.jsx)(t.code,{children:"_app.js"}),", we need to use the ",(0,o.jsx)(t.code,{children:"useEffect"})," trick seen in another tutorial to ",(0,o.jsx)(t.a,{href:"/blog/fix-the-window-is-not-defined-error",children:"use the window object with Next"}),". That way we can inform GoatCounter about every route change it can count in its analytics."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { useEffect } from 'react';\nimport { useRouter } from 'next/router';\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter();\n\n  useEffect(() => {\n    if (typeof window !== 'undefined') {\n      window.goatcounter.count({\n        path: router.asPath,\n      });\n    }\n  }, [router]);\n\n  return <Component {...pageProps} />;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Reaching this point, we should have been able to test GoatCounter locally, and it should work once delivered on production."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Keep in mind that ad blockers may interfere with GoatCounter"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"I'm personally very satisfied so far with the service, as it allows me to check my site's web analytics respecting visitor's privacy with a very light script."}),"\n",(0,o.jsx)(t.p,{children:"Enjoy coding with Next.js!"})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(i,e)}))}}},function(e){e.O(0,[228,415,445,617,417,434,127,774,888,179],(function(){return t=4804,e(e.s=t);var t}));var t=e.O();_N_E=t}]);