webpackHotUpdate_N_E("pages/404",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Custom404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/grid */ "./components/grid.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\404.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Image from 'next/image'

var __N_SSG = true;
function Custom404(props) {
  var pro = _data_projects__WEBPACK_IMPORTED_MODULE_2__["projects"].filter(function (x) {
    return !x.pen;
  });
  var perso = _data_projects__WEBPACK_IMPORTED_MODULE_2__["projects"].filter(function (x) {
    return x.pen;
  });
  var randomPro = pro[Math.floor(Math.random() * pro.length)];
  var randomPerso = perso[Math.floor(Math.random() * perso.length)];
  var randomPost = props.posts[Math.floor(Math.random() * props.posts.length)];
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "404 - Page Not Found | R\xE9my Beumier",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container error-shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "404 - Page Not Found"), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(components_grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: [randomPro, randomPerso, randomPost],
    className: "mt-10 mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 26
    }
  }, "Go back Home")))));
}
_c = Custom404;

var _c;

$RefreshReg$(_c, "Custom404");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbTQwNCIsInByb3BzIiwicHJvIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicGVyc28iLCJyYW5kb21Qcm8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyYW5kb21QZXJzbyIsInJhbmRvbVBvc3QiLCJwb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7O0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsTUFBTUMsR0FBRyxHQUFHQyx1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUNBLENBQUMsQ0FBQ0MsR0FBUDtBQUFBLEdBQWpCLENBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsR0FBTjtBQUFBLEdBQWpCLENBQWQ7QUFDQSxNQUFNRSxTQUFTLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlQsR0FBRyxDQUFDVSxNQUEvQixDQUFELENBQXJCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTixLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLEtBQUssQ0FBQ0ssTUFBakMsQ0FBRCxDQUF6QjtBQUNBLE1BQU1FLFVBQVUsR0FBR2IsS0FBSyxDQUFDYyxLQUFOLENBQVlOLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JWLEtBQUssQ0FBQ2MsS0FBTixDQUFZSCxNQUF2QyxDQUFaLENBQW5CO0FBRUEsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFO0FBQUssZ0JBQVMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFNLFFBQUksRUFBRSxDQUFDSixTQUFELEVBQVlLLFdBQVosRUFBeUJDLFVBQXpCLENBQVo7QUFBa0QsYUFBUyxFQUFDLGFBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWU7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFmLENBREYsQ0FMRixDQURGLENBREY7QUFnQkQ7S0F2QnVCZCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC44MmNkOGEyZTI2YjZlNjI3MTFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICdAZGF0YS9wcm9qZWN0cyc7XHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnQGFwaSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnY29tcG9uZW50cy9ncmlkJztcclxuXHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tNDA0KHByb3BzKSB7XHJcbiAgY29uc3QgcHJvID0gcHJvamVjdHMuZmlsdGVyKHggPT4gIXgucGVuKTtcclxuICBjb25zdCBwZXJzbyA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKTtcclxuICBjb25zdCByYW5kb21Qcm8gPSBwcm9bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJvLmxlbmd0aCldO1xyXG4gIGNvbnN0IHJhbmRvbVBlcnNvID0gcGVyc29bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGVyc28ubGVuZ3RoKV07XHJcbiAgY29uc3QgcmFuZG9tUG9zdCA9IHByb3BzLnBvc3RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb3BzLnBvc3RzLmxlbmd0aCldO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIjQwNCAtIFBhZ2UgTm90IEZvdW5kIHwgUsOpbXkgQmV1bWllclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlcnJvci1zaGFwZVwiPlxyXG4gICAgICAgIDxoMT40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDE+XHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxHcmlkIGRhdGE9e1tyYW5kb21Qcm8sIHJhbmRvbVBlcnNvLCByYW5kb21Qb3N0XX0gY2xhc3NOYW1lPVwibXQtMTAgbWItMTBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkdvIGJhY2sgSG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgYXNwZWN0UmF0aW86ICcyNzIyLzEzNDQ4J319PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvcGFyY29tZWdhLWNhLXNjcmVlbi5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogYWxsUG9zdHNcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9