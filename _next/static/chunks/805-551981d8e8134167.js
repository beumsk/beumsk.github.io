(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,u=r(7273).Z,a=o(r(7294)),l=r(6273),c=r(2725),i=r(3462),f=r(1018),s=r(7190),p=r(1210),d=r(8684),y={};function v(e,t,r,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;y[t+"%"+r+(o?"%"+o:"")]=!0}}var b=a.default.forwardRef((function(e,t){var r,o=e.href,b=e.as,O=e.children,g=e.prefetch,m=e.passHref,h=e.replace,j=e.shallow,P=e.scroll,w=e.locale,C=e.onClick,_=e.onMouseEnter,x=e.onTouchStart,E=e.legacyBehavior,M=void 0===E?!0!==Boolean(!1):E,L=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=O,!M||"string"!==typeof r&&"number"!==typeof r||(r=a.default.createElement("a",null,r));var k=!1!==g,R=a.default.useContext(i.RouterContext),S=a.default.useContext(f.AppRouterContext);S&&(R=S);var D,N=a.default.useMemo((function(){var e=n(l.resolveHref(R,o,!0),2),t=e[0],r=e[1];return{href:t,as:b?l.resolveHref(R,b):r||t}}),[R,o,b]),T=N.href,I=N.as,Z=a.default.useRef(T),U=a.default.useRef(I);M&&(D=a.default.Children.only(r));var z=M?D&&"object"===typeof D&&D.ref:t,B=n(s.useIntersection({rootMargin:"200px"}),3),A=B[0],H=B[1],K=B[2],G=a.default.useCallback((function(e){U.current===I&&Z.current===T||(K(),U.current=I,Z.current=T),A(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[I,z,T,K,A]);a.default.useEffect((function(){var e=H&&k&&l.isLocalURL(T),t="undefined"!==typeof w?w:R&&R.locale,r=y[T+"%"+I+(t?"%"+t:"")];e&&!r&&v(R,T,I,{locale:t})}),[I,T,H,w,k,R]);var q={ref:G,onClick:function(e){M||"function"!==typeof C||C(e),M&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r)){e.preventDefault();var p=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:i,scroll:c}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!s})};f?a.default.startTransition(p):p()}}(e,R,T,I,h,j,P,w,Boolean(S),k)},onMouseEnter:function(e){M||"function"!==typeof _||_(e),M&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),!k&&S||l.isLocalURL(T)&&v(R,T,I,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof x||x(e),M&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),!k&&S||l.isLocalURL(T)&&v(R,T,I,{priority:!0})}};if(!M||m||"a"===D.type&&!("href"in D.props)){var W="undefined"!==typeof w?w:R&&R.locale,F=R&&R.isLocaleDomain&&p.getDomainLocale(I,W,R.locales,R.domainLocales);q.href=F||d.addBasePath(c.addLocale(I,W,R&&R.defaultLocale))}return M?a.default.cloneElement(D,q):a.default.createElement("a",Object.assign({},L,q),r)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!a,f=n(o.useState(!1),2),s=f[0],p=f[1],d=n(o.useState(null),2),y=d[0],v=d[1];o.useEffect((function(){if(a){if(i||s)return;if(y&&y.tagName){var e=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=l.get(n)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:u,elements:o},c.push(r),l.set(r,t),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!s){var n=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(n)}}}),[y,i,r,t,s]);var b=o.useCallback((function(){p(!1)}),[]);return[v,s,b]};var o=r(7294),u=r(9311),a="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),o=n.default.createContext(null);t.AppRouterContext=o;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=n.default.createContext(null);t.TemplateContext=l},1664:function(e,t,r){e.exports=r(8418)},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})},9534:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},5054:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=n.createContext&&n.createContext(o),a=["attr","size","title"];function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map(((e,t)=>n.createElement(e.tag,f({key:t},e.attr),p(e.child))))}function d(e){return t=>n.createElement(y,c({attr:f({},e.attr)},t),p(e.child))}function y(e){var t=t=>{var r,{attr:o,size:u,title:i}=e,s=l(e,a),p=u||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:f(f({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==u?n.createElement(u.Consumer,null,(e=>t(e))):t(o)}}}]);