_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{KtBt:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("YFqc"),i=a.n(r),s=a("ma3e"),o=a("NIcq"),n=a("LjP0"),c=a("nKUr");function l(e){var t=e.item,a=t.title.replace(/-/g," ").charAt(0).toUpperCase()+t.title.replace(/-/g," ").slice(1);return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card__behind",children:[Object(c.jsx)(i.a,{href:t.link||"",children:Object(c.jsx)("a",{className:"card__title",title:a,children:Object(c.jsx)("h2",{className:"t-ellipsis",children:a})})}),"perso"===t.type&&Object(c.jsxs)("div",{className:"card__links",children:[t.pen&&Object(c.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t.pen,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:Object(c.jsx)(s.a,{title:"Codepen","aria-labelledby":"Codepen"})}),t.sandbox&&Object(c.jsx)("a",{href:"https://codesandbox.io/s/"+t.sandbox,target:"_blank",rel:"noopener noreferrer",title:"Codesandbox link",children:Object(c.jsx)(n.d,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}),Object(c.jsx)("a",{href:"https://github.com/beumsk/"+t.title,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:Object(c.jsx)(s.b,{title:"Github","aria-labelledby":"Github"})})]}),"pro"===t.type&&Object(c.jsxs)("div",{className:"card__links",children:[t.current&&Object(c.jsx)("a",{href:t.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:Object(c.jsx)(o.g,{title:"Live website","aria-labelledby":"Live website"})}),t.past&&Object(c.jsx)("a",{href:t.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:Object(c.jsx)(o.h,{title:"Site as I left it","aria-labelledby":"Site as I left it"})})]})]}),Object(c.jsx)(i.a,{href:t.link||"",children:Object(c.jsx)("a",{title:"Learn more",tabIndex:"-1",children:Object(c.jsx)("div",{className:"card__img",children:Object(c.jsx)("img",{src:t.img,alt:t.title.replace(/-/g," "),width:"260",height:"146",loading:"lazy"})})})})]})}function p(e){var t=e.data,a=e.className;return Object(c.jsx)("div",{className:"grid "+a,children:t.map((function(e){return Object(c.jsx)(l,{item:e},e.title)}))})}},Kv6C:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{title:"onomo",link:"/projects/onomo",current:"https://www.onomohotels.com/",past:"https://web.archive.org/web/20211213130244/https://app.staging.onomohotels.com/",img:"/images/projects/onomo.jpg",screen:"/images/projects/onomo-screen.png",intro:"Onomo hotels booking website built with React",tech:["React","HTML","CSS","JavaScript"],chall:["Improve React knowledge for integration","Using Styled-system and Emotion for styling","Date picker form with React day picker","Phone numbers form with React phone number input"],homepage:!1,type:"pro"},{title:"omega",link:"/projects/omega",current:"https://www.parcomega.ca/",past:"https://web.archive.org/web/20211213130150/https://app.staging.parcomega.ca/en/",img:"/images/projects/omega.jpg",screen:"/images/projects/omega-screen.png",intro:"Onomo hotels booking website built with React",tech:["React","HTML","CSS","JavaScript"],chall:["Discover integration with React","Using Styled-system and Emotion for styling","CSS clip-path for advanced image shapes","Swiper and Carousel for image display"],homepage:!0,type:"pro"},{title:"eli-paris",link:"/projects/eli-paris",current:"https://www.eliparis.com/",past:"http://web.archive.org/web/20220120123422/https://www.eliparis.com/accueil",img:"/images/projects/eli-paris.jpg",screen:"/images/projects/eli-paris-screen.png",intro:"Eli Paris jewelry store website built with Angular, Node and Strapi",tech:["Angular","HTML","CSS","JavaScript","Sass"],chall:["Discover integration with Angular","Prime NG for component library","CSS grid for product listing","Multi-column layout"],homepage:!1,type:"pro"},{title:"kpmg-careers",link:"/projects/kpmg-careers",current:"https://careers.kpmg.be/",past:"https://web.archive.org/web/20200803122755/https://careers.kpmg.be/",img:"/images/projects/kpmg-careers.jpg",screen:"/images/projects/kpmg-careers-screen.png",intro:"KPMG Belgium recruitment website built with Umbraco CMS.",tech:["Umbraco","C#","HTML","CSS","JavaScript","Sass"],chall:["Google maps custom","Instagram feed with Curator.io","JSON events fetching","JSON job fetching","Slick responsive carousel"],homepage:!1,type:"pro"},{title:"kpmg-law",link:"/projects/kpmg-law",current:"https://www.kpmglaw.be/",past:"https://web.archive.org/web/20200812114928/https://www.klaw.be/",img:"/images/projects/kpmg-law.jpg",screen:"/images/projects/kpmg-law-screen.png",intro:"KPMG Law (previously Klaw) website built with Umbraco CMS.",tech:["Umbraco","C#","HTML","CSS","JavaScript","Sass"],chall:["Discovering Umbraco","Use Uskinned theme","SEO improvements","Meta tags adjustments for social sharing"],homepage:!1,type:"pro"},{title:"memory",link:"/projects/memory",img:"/images/projects/memory.jpg",pen:"xdoKjX",intro:"Find pairs as fast as possible in this Memory!",tech:["HTML","CSS","JavaScript"],chall:["array.splice","setInterval & clearInterval","click event listener on parent","linear-gradient"],homepage:!0,type:"perso"},{title:"movies",link:"/projects/movies",img:"/images/projects/movies.jpg",sandbox:"github/beumsk/React-Movies",intro:"Search or scroll for movies and series. Get general info and learn about their actors.",tech:["React","Redux","Material UI"],chall:["React router dom","Redux","Redux thunk","Fetching API","Material UI"],homepage:!0,type:"perso"},{title:"quiz",link:"/projects/quiz",img:"/images/projects/quiz.jpg",sandbox:"github/beumsk/Quiz",intro:"Try a set of 10 random questions fetched from Open Trivia DB in this Quiz built with React and score as much points as you can. You win 1 point per good answer but make 5 points when picking the good answer from the start!",tech:["React","Typescript","Sass"],chall:["React hooks","Typescript","fetching API","JSON"],homepage:!1,type:"perso"},{title:"snake",link:"/projects/snake",img:"/images/projects/snake.jpg",pen:"PmPxEo",intro:"Get as long as possible in this version of Snake!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["keydown event","setInterval & clearInterval","array.shift","mobile swipe"],homepage:!1,type:"perso"},{title:"star-match",link:"/projects/star-match",img:"/images/projects/star-match.jpg",pen:"YzEyVYp",intro:"Play by picking 1 or more numbers that sum to the number of stars",tech:["React","JavaScript","CSS"],chall:["React","useState","useEffect","components mapping","conditional rendering"],homepage:!1,type:"perso"},{title:"minesweeper",link:"/projects/minesweeper",img:"/images/projects/minesweeper.jpg",pen:"JJYqop",intro:"Play Minesweeper in this 9x9 grid!",tech:["HTML","CSS","JavaScript"],chall:["setInterval & clearInterval","parentNode","hasFocus"],homepage:!1,type:"perso"},{title:"whack-a-donkey-kong",link:"/projects/whack-a-donkey-kong",img:"/images/projects/whack-a-donkey-kong.jpg",pen:"YabyJJ",intro:"Crush these Donky Kongs in this whack a mole!",tech:["HTML","CSS","JavaScript"],chall:["setInterval & clearInterval","parentNode","classList"],homepage:!1,type:"perso"},{title:"hangman",link:"/projects/hangman",img:"/images/projects/hangman.jpg",pen:"ZEzvEdz",intro:"The Hangman game as in your childhood!",tech:["HTML","CSS","JavaScript"],chall:["array.concat","string.split"],homepage:!1,type:"perso"},{title:"dad-jokes",link:"/projects/dad-jokes",img:"/images/projects/dad-jokes.jpg",pen:"LKXvrq",intro:"Go and get a random dad joke!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["AJAX call","JSON"],homepage:!1,type:"perso"},{title:"giphy-search",link:"/projects/giphy-search",img:"/images/projects/giphy-search.jpg",pen:"EExyvQ",intro:"Find the gif you need with Giphy Search!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["AJAX call","JSON","setTimeout"],homepage:!1,type:"perso"},{title:"tetris",link:"/projects/tetris",img:"/images/projects/tetris.jpg",pen:"eYpxowj",intro:"Break lines and stay alive for as long as you can in this Tetris!",tech:["HTML","CSS","JavaScript"],chall:["Babel","array.forEach","array.some","setInterval & clearInterval","keyup event"],homepage:!1,type:"perso"},{title:"simon-game",link:"/projects/simon-game",img:"/images/projects/simon-game.jpg",pen:"LWqpGM",intro:"Train your brain with the famous Simon game!",tech:["HTML","CSS","JavaScript"],chall:["childNodes","Math.random","Audio","setInterval","setTimeout"],homepage:!1,type:"perso"},{title:"drum-machine",link:"/projects/drum-machine",img:"/images/projects/drum-machine.jpg",pen:"dwmoyE",intro:"Smash this Drum Machine!",tech:["HTML","CSS","JavaScript"],chall:["Audio","childNodes","keyup event"],homepage:!1,type:"perso"},{title:"clock",link:"/projects/clock",img:"/images/projects/clock.jpg",pen:"YQoBJK",intro:"Check the clock and get the time!",tech:["HTML","CSS","JavaScript"],chall:["Date","getHours","getMinutes","transform: rotate","tranform-origin"],homepage:!1,type:"perso"},{title:"etch-a-sketch",link:"/projects/etch-a-sketch",img:"/images/projects/etch-a-sketch.jpg",pen:"dVWPOW",intro:"Try to sketch something in this!",tech:["HTML","CSS","JavaScript"],chall:["Input event","parseFloat","toString","offsetWidth"],homepage:!1,type:"perso"},{title:"calculator",link:"/projects/calculator",img:"/images/projects/calculator.jpg",pen:"dvdZjx",intro:"Fully functional Calculator!",tech:["HTML","CSS","JavaScript"],chall:["Math.round","eval","insertAdjacentHTML","box-shadow"],homepage:!1,type:"perso"},{title:"higher-or-lower",link:"/projects/higher-or-lower",img:"/images/projects/higher-or-lower.jpg",pen:"bGbLzzE",intro:"Guess if the next card will be Higher or Lower!",tech:["HTML","CSS","JavaScript"],chall:["array.indexOf","Math.random"],homepage:!1,type:"perso"},{title:"tic-tac-toe",link:"/projects/tic-tac-toe",img:"/images/projects/tic-tac-toe.jpg",pen:"ZevLbx",intro:"Play Tic Tac Toe or OXO against a dumb AI!",tech:["HTML","CSS","JavaScript"],chall:["classList","setTimeout","Math.random"],homepage:!1,type:"perso"},{title:"sliding-puzzle",link:"/projects/sliding-puzzle",img:"/images/projects/sliding-puzzle.jpg",pen:"RjzGBO",intro:"Try to solve this sliding puzzle!",tech:["HTML","CSS","JavaScript","Sass"],chall:["setTimeout","Math.random","array.splice"],homepage:!1,type:"perso"},{title:"pokemon",link:"/projects/pokemon",img:"/images/projects/pokemon.jpg",pen:"rjBWWR",intro:"Find out what Pokemon you are!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["@keyframes","transform: rotate"],homepage:!1,type:"perso"},{title:"color-game",link:"/projects/color-game",img:"/images/projects/color-game.jpg",pen:"poyXqWZ",intro:"Sharpen your RGB knowledge by playing this little Color game!",tech:["HTML","CSS","JavaScript"],chall:["display: grid","setTimeout","array.push"],homepage:!1,type:"perso"},{title:"brick-breaker",link:"/projects/brick-breaker",img:"/images/projects/brick-breaker.jpg",pen:"GEgjEb",intro:"Break all the bricks in this first level!",tech:["HTML","CSS","JavaScript"],chall:["Canvas","Mousemove event"],homepage:!1,type:"perso"},{title:"connect-4",link:"/projects/connect-4",img:"/images/projects/connect-4.jpg",pen:"bqWqGV",intro:"Play Connect 4 with a friend and align 4 of yours!",tech:["HTML","CSS","JavaScript"],chall:[":not()",":nth-of-type()","array.slice"],homepage:!1,type:"perso"},{title:"date-counter",link:"/projects/date-counter",img:"/images/projects/date-counter.jpg",pen:"oWYVYj",intro:"Find out how many days passed since a certain date, or between two dates, or what date will ti be in x days.",tech:["HTML","CSS","JavaScript"],chall:["Input event","Date","getDate","getMonth","getFullYear"],homepage:!1,type:"perso"},{title:"quotes",link:"/projects/quotes",img:"/images/projects/quotes.jpg",pen:"xgGzdJ",intro:"Click and get a random quote from Forismatic!",tech:["HTML","CSS","JavaScript","Bootstrap","jQuery"],chall:["AJAX call","JSON"],homepage:!1,type:"perso"},{title:"timer",link:"/projects/timer",img:"/images/projects/timer.jpg",pen:"WpKWgG",intro:"Set a timer for anything!",tech:["HTML","CSS","JavaScript"],chall:["setInterval & clearInterval","setTimeout"],homepage:!1,type:"perso"}]},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return h})),a.d(t,"default",(function(){return m}));var r=a("YFqc"),i=a.n(r),s=a("LjP0"),o=a("Kv6C"),n=a("CafY"),c=a("nKUr");function l(){return Object(c.jsxs)("svg",{id:"logo-gradient",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 600 600",width:"100px",fill:"url(#linear-gradient) #009688",children:[Object(c.jsx)("defs",{children:Object(c.jsxs)("linearGradient",{id:"linear-gradient",x1:"435.39",y1:"490.86",x2:"84.52",y2:"139.99",gradientUnits:"userSpaceOnUse",children:[Object(c.jsx)("stop",{offset:"0",stopColor:"transparent",children:Object(c.jsx)("animate",{attributeName:"stop-color",values:"transparent; #004d40",begin:"2.5s",dur:"0.1s",repeatCount:"none",fill:"freeze"})}),Object(c.jsx)("stop",{offset:"1",stopColor:"transparent",children:Object(c.jsx)("animate",{attributeName:"stop-color",values:"transparent; #26a69a",begin:"2.5s",dur:"0.1s",repeatCount:"none",fill:"freeze"})})]})}),Object(c.jsx)("path",{stroke:"#009688",strokeWidth:"1px",strokeDasharray:"2861px",strokeDashoffset:"-2861px",d:"M446,352h-.33q-4.68-37.26-25.73-55.6a73.82,73.82,0,0,0-14.19-9.55c-6.37,18.34-16.14,32-27.37,42.17q10.67,11.87,11.1,30.65c.2,2.43.31,5,.31,7.63v69.57q-1.06,21.12-11.63,31.41-11.76,11.43-36.6,11.43H261.83v-.09H210.09V339.21h64l51.38,115.5h16c9.2,0,16.37-1.63,19.17-4.35,2.15-2.09,3.65-7.36,4.06-14.18V405.64l-35.1-77.54Q388.5,309.82,388.49,236V173.22q0-52.93-28.42-77.44t-84-24.51H153.23V528.73H335.67q59.46,0,85.29-23.53t25.81-79.73V366.66A135.33,135.33,0,0,0,446,352ZM210.09,120.29h73.84q24.82,0,36.27,11.11t11.44,35.94v75.15q0,24.84-11.44,36.27T283.93,290.2H210.09Z",children:Object(c.jsx)("animate",{id:"p1",attributeName:"stroke-dashoffset",values:"2861;0",dur:"3s",repeatCount:"none",fill:"freeze"})})]})}var p=a("KtBt"),h=!0;function m(e){var t=e.title,a=e.description,r=e.posts;return Object(c.jsxs)(n.a,{title:t,description:a,children:[Object(c.jsx)("section",{id:"splash",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container","data-aos":"fade-up",children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h1",{children:"R\xe9my Beumier"}),Object(c.jsx)("p",{children:"Front-end Dev"}),Object(c.jsx)(l,{})]})})})}),Object(c.jsxs)("section",{id:"about",className:"svg-divider",children:[Object(c.jsx)("div",{className:"back-shapes"}),Object(c.jsx)("div",{className:"container","data-aos":"fade-right",children:Object(c.jsxs)("div",{className:"cols cols-lg",children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("h2",{children:"I'm R\xe9my, I am a Web Lover based in Brussels and I specialise in Front-end Development."}),Object(c.jsxs)("p",{children:["Since my young years, I have always enjoyed building things. I started developing my hunger for"," ",Object(c.jsx)("strong",{children:"creation"})," with Lego, continued with Minecraft and ultimately discovered"," ",Object(c.jsx)("strong",{children:"Web development"}),"."]}),Object(c.jsxs)("p",{children:["It was a relief to find out what I really wanted to do for a living. I took full advantage of that motivation to start a long, difficult, but passionate journey of self-learning"," ",Object(c.jsx)("strong",{children:"front-end"})," technologies."]}),Object(c.jsxs)("p",{children:["I now code everyday for a living and as a hobby with the powerful trio ",Object(c.jsx)("strong",{children:"HTML"}),","," ",Object(c.jsx)("strong",{children:"CSS"})," and ",Object(c.jsx)("strong",{children:"JavaScript"}),", as well as some additional frameworks and libraries such as ",Object(c.jsx)("strong",{children:"Bootstrap"}),", ",Object(c.jsx)("strong",{children:"Sass"})," and ",Object(c.jsx)("strong",{children:"jQuery"}),"."]}),Object(c.jsxs)("p",{className:"mb-5",children:["I've recently jumped into coding with ",Object(c.jsx)("strong",{children:"React"}),", and I'm grasping its power and complexity combined with Hooks, Redux, Material UI, and many more."]}),Object(c.jsx)(i.a,{href:"/resume-remy-beumier",children:Object(c.jsx)("a",{className:"btn mb-4 mr-4",target:"_blank",children:"Check out my resume"})}),Object(c.jsx)("a",{className:"btn mb-4",href:"remy-beumier-resume.pdf",target:"_blank",download:!0,children:"Download my resume"})]}),Object(c.jsxs)("div",{className:"col centered",children:[Object(c.jsxs)("div",{className:"languages mx-2",children:[Object(c.jsx)(s.g,{title:"HTML","aria-labelledby":"HTML"}),Object(c.jsx)(s.f,{title:"CSS","aria-labelledby":"CSS"}),Object(c.jsx)(s.h,{title:"JavaScript","aria-labelledby":"JavaScript"}),Object(c.jsx)(s.k,{title:"React","aria-labelledby":"React"}),Object(c.jsx)(s.i,{title:"jQuery","aria-labelledby":"jQuery"}),Object(c.jsx)(s.b,{title:"Bootstrap","aria-labelledby":"Bootstrap"}),Object(c.jsx)(s.m,{title:"Sass","aria-labelledby":"Sass"}),Object(c.jsx)(s.a,{title:"Angular","aria-labelledby":"Angular"})]}),Object(c.jsx)("img",{src:"/images/developer-thinking.svg",alt:"developer thinking next to a computer",width:"270",height:"112",loading:"lazy",className:"mt-5 mb-5"})]})]})})]}),Object(c.jsx)("section",{id:"projects",className:"pattern",children:Object(c.jsxs)("div",{className:"container","data-aos":"fade-left",children:[Object(c.jsx)("h2",{children:"Projects"}),Object(c.jsx)("p",{children:"I build projects as a living and as a hobby. Here is a list of my favorites."}),Object(c.jsx)(p.a,{data:o.a.filter((function(e){return e.homepage})).slice(0,3),className:"mt-10 mb-10"}),Object(c.jsx)(i.a,{href:"/projects",children:Object(c.jsx)("a",{className:"btn",children:"Check all projects"})})]})}),Object(c.jsx)("section",{id:"blog",children:Object(c.jsxs)("div",{className:"container","data-aos":"fade-right",children:[Object(c.jsx)("h2",{children:"Blog"}),Object(c.jsx)("p",{children:"I write some stuff about coding and the web in general. Here are the latest posts."}),Object(c.jsx)(p.a,{data:r.slice(0,3),className:"mt-10 mb-10"}),Object(c.jsx)(i.a,{href:"/blog",children:Object(c.jsx)("a",{className:"btn",children:"Check all posts"})})]})})]})}m.defaultProps={title:"R\xe9my Beumier | Front-end Developer"}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",2,1,3,6,4,7,0,5]]]);