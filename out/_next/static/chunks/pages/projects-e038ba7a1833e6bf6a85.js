_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{AwZY:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a("gjpc")}])},KtBt:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("YFqc"),o=a.n(r),i=a("ma3e"),s=a("NIcq"),n=a("LjP0"),c=a("nKUr");function l(e){var t=e.item,a=t.title.replace(/-/g," ").charAt(0).toUpperCase()+t.title.replace(/-/g," ").slice(1);return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card__behind",children:[Object(c.jsx)(o.a,{href:t.link||"",children:Object(c.jsx)("a",{className:"card__title",title:a,children:Object(c.jsx)("h2",{className:"t-ellipsis",children:a})})}),"perso"===t.type&&Object(c.jsxs)("div",{className:"card__links",children:[t.pen&&Object(c.jsx)("a",{href:"https://codepen.io/beumsk/pen/"+t.pen,target:"_blank",rel:"noopener noreferrer",title:"Codepen link",children:Object(c.jsx)(i.a,{title:"Codepen","aria-labelledby":"Codepen"})}),t.sandbox&&Object(c.jsx)("a",{href:"https://codesandbox.io/s/"+t.sandbox,target:"_blank",rel:"noopener noreferrer",title:"Codesandbox link",children:Object(c.jsx)(n.d,{title:"Codesandbox","aria-labelledby":"Codesandbox"})}),Object(c.jsx)("a",{href:"https://github.com/beumsk/"+t.title,target:"_blank",rel:"noopener noreferrer",title:"Github repository",children:Object(c.jsx)(i.b,{title:"Github","aria-labelledby":"Github"})})]}),"pro"===t.type&&Object(c.jsxs)("div",{className:"card__links",children:[t.current&&Object(c.jsx)("a",{href:t.current,target:"_blank",rel:"noopener noreferrer",title:"Live website",children:Object(c.jsx)(s.g,{title:"Live website","aria-labelledby":"Live website"})}),t.past&&Object(c.jsx)("a",{href:t.past,target:"_blank",rel:"noopener noreferrer",title:"Site as I left it",children:Object(c.jsx)(s.h,{title:"Site as I left it","aria-labelledby":"Site as I left it"})})]})]}),Object(c.jsx)(o.a,{href:t.link||"",children:Object(c.jsx)("a",{title:"Learn more",tabIndex:"-1",children:Object(c.jsx)("div",{className:"card__img",children:Object(c.jsx)("img",{src:t.img,alt:t.title.replace(/-/g," "),width:"260",height:"146",loading:"lazy"})})})})]})}function p(e){var t=e.data,a=e.className;return Object(c.jsx)("div",{className:"grid "+a,children:t.map((function(e){return Object(c.jsx)(l,{item:e},e.title)}))})}},Kv6C:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{title:"onomo",link:"/projects/onomo",current:"https://www.onomohotels.com/",past:"https://web.archive.org/web/20211213130244/https://app.staging.onomohotels.com/",img:"/images/projects/onomo.jpg",screen:"/images/projects/onomo-screen.png",intro:"Onomo hotels booking website built with React",tech:["React","HTML","CSS","JavaScript"],chall:["Improve React knowledge for integration","Use Styled-system and Emotion for styling","Work with React day picker to select the dates of an hotel","Add Phone number patterns by country with React phone number input"],homepage:!1,type:"pro"},{title:"omega",link:"/projects/omega",current:"https://www.parcomega.ca/",past:"https://web.archive.org/web/20211213130150/https://app.staging.parcomega.ca/en/",img:"/images/projects/omega.jpg",screen:"/images/projects/omega-screen.png",intro:"Onomo hotels booking website built with React",tech:["React","HTML","CSS","JavaScript"],chall:["Discover integration with React","Use Styled-system and Emotion for styling","Use CSS clip-path to create advanced image shapes","Swiper and Carousel to display images in the best way"],homepage:!0,type:"pro"},{title:"eli-paris",link:"/projects/eli-paris",current:"https://www.eliparis.com/",past:"http://web.archive.org/web/20220120123422/https://www.eliparis.com/accueil",img:"/images/projects/eli-paris.jpg",screen:"/images/projects/eli-paris-screen.png",intro:"Eli Paris jewelry store website built with Angular, Node and Strapi",tech:["Angular","HTML","CSS","JavaScript","Sass"],chall:["Discover integration with Angular","Use Prime NG for component library","CSS grid for the display of the product list","Multi-column layout for advanced text layouts"],homepage:!1,type:"pro"},{title:"kpmg-careers",link:"/projects/kpmg-careers",current:"https://careers.kpmg.be/",past:"https://web.archive.org/web/20200803122755/https://careers.kpmg.be/",img:"/images/projects/kpmg-careers.jpg",screen:"/images/projects/kpmg-careers-screen.png",intro:"KPMG Belgium recruitment website built with Umbraco CMS.",tech:["Umbraco","C#","HTML","CSS","JavaScript","Sass"],chall:["Create a custom Google maps toolkit","Implement an Instagram feed with Curator.io","Fetch JSON events","Fetch JSON job","Slick responsive carousel"],homepage:!1,type:"pro"},{title:"kpmg-law",link:"/projects/kpmg-law",current:"https://www.kpmglaw.be/",past:"https://web.archive.org/web/20200812114928/https://www.klaw.be/",img:"/images/projects/kpmg-law.jpg",screen:"/images/projects/kpmg-law-screen.png",intro:"KPMG Law (previously Klaw) website built with Umbraco CMS.",tech:["Umbraco","C#","HTML","CSS","JavaScript","Sass"],chall:["Discover Umbraco and C#","Use Uskinned theme and improve it","SEO improvements","Meta tags adjustments for social sharing"],homepage:!1,type:"pro"},{title:"memory",link:"/projects/memory",img:"/images/projects/memory.jpg",pen:"xdoKjX",intro:"Find pairs as fast as possible in this Memory!",tech:["HTML","CSS","JavaScript"],chall:["Array.splice to remove a certain array element","setInterval & clearInterval for the timer of the game","Click event listener on parent to handle children clicks","CSS user-select to remove mouse selection"],homepage:!0,type:"perso"},{title:"movies",link:"/projects/movies",img:"/images/projects/movies.jpg",sandbox:"github/beumsk/React-Movies",intro:"Search or scroll for movies and series. Get general info and learn about their actors.",tech:["React","Redux","Material UI"],chall:["React router dom to handle the navigation","Redux to handle states accross the app","Redux thunk for async requests","Fetch data The Movie DataBase API","Use Material UI for components of the app"],homepage:!0,type:"perso"},{title:"quiz",link:"/projects/quiz",img:"/images/projects/quiz.jpg",sandbox:"github/beumsk/Quiz",intro:"Try a set of 10 random questions fetched from Open Trivia DB in this Quiz built with React and score as much points as you can. You win 1 point per good answer but make 5 points when picking the good answer from the start!",tech:["React","Typescript","Sass"],chall:["React hooks: useState and useEffect","Use Typescript for React components","Fetch questions from Opentdb API","Convert JSON data"],homepage:!1,type:"perso"},{title:"snake",link:"/projects/snake",img:"/images/projects/snake.jpg",pen:"PmPxEo",intro:"Get as long as possible in this version of Snake!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["Keydown event to manage the snake","setInterval & clearInterval for the snake and the timer","Array.shift to handle the snake array changes","jQuery mobile swipe to handle snake on mobile"],homepage:!1,type:"perso"},{title:"star-match",link:"/projects/star-match",img:"/images/projects/star-match.jpg",pen:"YzEyVYp",intro:"Play by picking 1 or more numbers that sum to the number of stars",tech:["React","JavaScript","CSS"],chall:["Build one of my first React project","Use the useState and useEffect hooks","Map through components with JSX to render a list of elements","JSX conditional rendering to apply some UI logic"],homepage:!1,type:"perso"},{title:"minesweeper",link:"/projects/minesweeper",img:"/images/projects/minesweeper.jpg",pen:"JJYqop",intro:"Play Minesweeper in this 9x9 grid!",tech:["HTML","CSS","JavaScript"],chall:["Use setInterval & clearInterval to manage the timer","Table to handle adjacent cells checks","Check if the user is on the page with hasFocus"],homepage:!1,type:"perso"},{title:"whack-a-donkey-kong",link:"/projects/whack-a-donkey-kong",img:"/images/projects/whack-a-donkey-kong.jpg",pen:"YabyJJ",intro:"Crush these Donkey Kongs in this whack a mole!",tech:["HTML","CSS","JavaScript"],chall:["setInterval & clearInterval to handle the timer","setTimeout to animate the Kongs on click","Handle element classList: add and remove"],homepage:!1,type:"perso"},{title:"hangman",link:"/projects/hangman",img:"/images/projects/hangman.jpg",pen:"ZEzvEdz",intro:"The Hangman game as in your childhood!",tech:["HTML","CSS","JavaScript"],chall:["Organise collaboration with open sourcers","Array.concat to combine the different arrays into one","String.split to transform the word into an array of letters"],homepage:!1,type:"perso"},{title:"dad-jokes",link:"/projects/dad-jokes",img:"/images/projects/dad-jokes.jpg",pen:"LKXvrq",intro:"Go and get a random dad joke!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["AJAX call with jQuery","JSON parse and stringify methods"],homepage:!1,type:"perso"},{title:"giphy-search",link:"/projects/giphy-search",img:"/images/projects/giphy-search.jpg",pen:"EExyvQ",intro:"Find the gif you need with Giphy Search!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["jQuery for JavaScript: form data, events, select elements, animations","AJAX call with jQuery","JSON parse and stringify methods","Fix order of animations with setTimeout"],homepage:!1,type:"perso"},{title:"tetris",link:"/projects/tetris",img:"/images/projects/tetris.jpg",pen:"eYpxowj",intro:"Break lines and stay alive for as long as you can in this Tetris!",tech:["HTML","CSS","JavaScript"],chall:["Babel to translate newer JavaScript to work with older browsers","Array.forEach to loop over an array","Array.some to check array values","SetInterval & clearInterval to make the game running","Keyup event to move the Tetris"],homepage:!1,type:"perso"},{title:"simon-game",link:"/projects/simon-game",img:"/images/projects/simon-game.jpg",pen:"LWqpGM",intro:"Train your brain with the famous Simon game!",tech:["HTML","CSS","JavaScript"],chall:["Use childNodes to point to the right elements","Math.random to pick a random element","Audio to play sounds","setInterval and setTimeout to handle the sounds loop"],homepage:!1,type:"perso"},{title:"drum-machine",link:"/projects/drum-machine",img:"/images/projects/drum-machine.jpg",pen:"dwmoyE",intro:"Smash this Drum Machine!",tech:["HTML","CSS","JavaScript"],chall:["Audio to play the music sounds","Target elements with getElementById","Click on tiles with keyup event"],homepage:!1,type:"perso"},{title:"clock",link:"/projects/clock",img:"/images/projects/clock.jpg",pen:"YQoBJK",intro:"Check the clock and get the time!",tech:["HTML","CSS","JavaScript"],chall:["Work with Date and its methods getHours and getMinutes","Use CSS transform to rotate the clock hands","Define the transform-origin to rotate as a real clock"],homepage:!1,type:"perso"},{title:"etch-a-sketch",link:"/projects/etch-a-sketch",img:"/images/projects/etch-a-sketch.jpg",pen:"dVWPOW",intro:"Try to sketch something in this!",tech:["HTML","CSS","JavaScript"],chall:["Input event to listen to every input modification","Turn string into number with parseFloat","Translate number into string with toString","Calculate the width of an element with offsetWidth"],homepage:!1,type:"perso"},{title:"calculator",link:"/projects/calculator",img:"/images/projects/calculator.jpg",pen:"dvdZjx",intro:"Fully functional Calculator!",tech:["HTML","CSS","JavaScript"],chall:["Math.round to round numbers","Use eval to process calculation","Create an element in the right location with insertAdjacentHTML","Create shadows on an element with box-shadow"],homepage:!1,type:"perso"},{title:"higher-or-lower",link:"/projects/higher-or-lower",img:"/images/projects/higher-or-lower.jpg",pen:"bGbLzzE",intro:"Guess if the next card will be Higher or Lower!",tech:["HTML","CSS","JavaScript"],chall:["Select elements with querySelector","Find index with Array.indexOf","Math.random to get a random number"],homepage:!1,type:"perso"},{title:"tic-tac-toe",link:"/projects/tic-tac-toe",img:"/images/projects/tic-tac-toe.jpg",pen:"ZevLbx",intro:"Play Tic Tac Toe or OXO against a dumb AI!",tech:["HTML","CSS","JavaScript"],chall:["Use classList methods to act on element classes","Delay functions with setTimeout","Check the completion of the game and state the winner"],homepage:!1,type:"perso"},{title:"sliding-puzzle",link:"/projects/sliding-puzzle",img:"/images/projects/sliding-puzzle.jpg",pen:"RjzGBO",intro:"Try to solve this sliding puzzle!",tech:["HTML","CSS","JavaScript","Sass"],chall:["Swap the position of elements","Use before and after methods to insert elements","Array.splice to delete a certain array element"],homepage:!1,type:"perso"},{title:"pokemon",link:"/projects/pokemon",img:"/images/projects/pokemon.jpg",pen:"rjBWWR",intro:"Find out what Pokemon you are!",tech:["HTML","CSS","JavaScript","jQuery"],chall:["Manage jQuery fading animations","@keyframes to handle rotation animations","Handle classes with jQuery methods"],homepage:!1,type:"perso"},{title:"color-game",link:"/projects/color-game",img:"/images/projects/color-game.jpg",pen:"poyXqWZ",intro:"Sharpen your RGB knowledge by playing this little Color game!",tech:["HTML","CSS","JavaScript"],chall:["Define the display with CSS grids","Use BEM to name elements classes","Create HTML elements with JS"],homepage:!1,type:"perso"},{title:"brick-breaker",link:"/projects/brick-breaker",img:"/images/projects/brick-breaker.jpg",pen:"GEgjEb",intro:"Break all the bricks in this first level!",tech:["HTML","CSS","JavaScript"],chall:["Create blocks, bar and ball with Canvas","Mousemove event to handle the bar of the game","Detect collisions between the ball and the bricks, bar or walls"],homepage:!1,type:"perso"},{title:"connect-4",link:"/projects/connect-4",img:"/images/projects/connect-4.jpg",pen:"bqWqGV",intro:"Play Connect 4 with a friend and align 4 of yours!",tech:["HTML","CSS","JavaScript"],chall:["Create all elements with JavaScript","Use the :not() CSS selector","Use the :nth-of-type() CSS selector","Array.slice to copy an array of elements"],homepage:!1,type:"perso"},{title:"date-counter",link:"/projects/date-counter",img:"/images/projects/date-counter.jpg",pen:"oWYVYj",intro:"Find out how many days passed since a certain date, or between two dates, or what date will ti be in x days.",tech:["HTML","CSS","JavaScript"],chall:["Listen to input changes with Input event","Date methods to get the right info","Convert dates to the desired formats","Calculate the difference between two dates"],homepage:!1,type:"perso"},{title:"quotes",link:"/projects/quotes",img:"/images/projects/quotes.jpg",pen:"xgGzdJ",intro:"Click and get a random quote from Forismatic!",tech:["HTML","CSS","JavaScript","Bootstrap","jQuery"],chall:["Get quotes through an AJAX call","Parse and Stringify JSON data"],homepage:!1,type:"perso"},{title:"timer",link:"/projects/timer",img:"/images/projects/timer.jpg",pen:"WpKWgG",intro:"Set a timer for anything!",tech:["HTML","CSS","JavaScript"],chall:["Handle the time with setInterval & clearInterval","Delay functions with setTimeout","Enable and disable input fields"],homepage:!1,type:"perso"}]},gjpc:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return h})),a.d(t,"default",(function(){return m}));var r=a("q1tI"),o=a("20a2"),i=a("YFqc"),s=a.n(i),n=a("Kv6C"),c=a("CafY"),l=a("KtBt"),p=a("nKUr"),h=!0;function m(e){var t=e.title,a=e.description,i=e.url,h=Object(o.useRouter)(),m="/projects"===h.asPath.replace(/.*\?/g,"")?"":h.asPath.replace(/.*\?/g,""),g=Object(r.useState)(!m.includes("personal")),d=g[0],j=g[1];return Object(p.jsx)(c.a,{title:t,description:a,url:i,children:Object(p.jsxs)("div",{className:"container projects-shape",children:[Object(p.jsx)("h1",{children:"Projects"}),Object(p.jsx)("p",{className:"ch-80 mb-8",children:"This project list is a collection of work I have been able to build over the years. You can find here the codes I am most proud of, whether they are professional or personal."}),Object(p.jsxs)("div",{children:[Object(p.jsx)(s.a,{href:"?professional",children:Object(p.jsx)("a",{onClick:function(){return j(!0)},className:"btn mb-4 mr-4 ".concat(d&&"active"),children:"Professional projects"})}),Object(p.jsx)(s.a,{href:"?personal",children:Object(p.jsx)("a",{onClick:function(){return j(!1)},className:"btn mb-4 ".concat(!d&&"active"),children:"Personal projects"})})]}),Object(p.jsx)("div",{"data-aos":"fade-up",children:Object(p.jsx)(l.a,{data:n.a.filter((function(e){return d?"pro"===e.type:"perso"===e.type})),className:"mt-6 mb-20"})})]})})}m.defaultProps={title:"Projects | R\xe9my Beumier"}}},[["AwZY",2,1,3,6,4,7,0,5]]]);