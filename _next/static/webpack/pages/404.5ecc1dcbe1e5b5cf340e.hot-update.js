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
  console.log(pro, perso);
  var randomPro = pro[Math.floor(Math.random() * pro.length)];
  var randomPerso = perso[Math.floor(Math.random() * perso.length)];
  var randomPost = props.posts[Math.floor(Math.random() * props.posts.length)];
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "404 - Page Not Found | R\xE9my Beumier",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container error-shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "404 - Page Not Found"), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: [randomPost],
    className: "mt-10 mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbTQwNCIsInByb3BzIiwicHJvIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicGVyc28iLCJjb25zb2xlIiwibG9nIiwicmFuZG9tUHJvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmFuZG9tUGVyc28iLCJyYW5kb21Qb3N0IiwicG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLE1BQU1DLEdBQUcsR0FBR0MsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUFDQSxDQUFDLENBQUNDLEdBQVA7QUFBQSxHQUFqQixDQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSix1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQU47QUFBQSxHQUFqQixDQUFkO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxHQUFaLEVBQWlCSyxLQUFqQjtBQUNBLE1BQU1HLFNBQVMsR0FBR1IsR0FBRyxDQUFDUyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCWCxHQUFHLENBQUNZLE1BQS9CLENBQUQsQ0FBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUdSLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sS0FBSyxDQUFDTyxNQUFqQyxDQUFELENBQXpCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHZixLQUFLLENBQUNnQixLQUFOLENBQVlOLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JaLEtBQUssQ0FBQ2dCLEtBQU4sQ0FBWUgsTUFBdkMsQ0FBWixDQUFuQjtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFHRTtBQUFLLGdCQUFTLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUUsQ0FBQ0UsVUFBRCxDQUFaO0FBQTBCLGFBQVMsRUFBQyxhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZixDQURGLENBTkYsQ0FERixDQURGO0FBaUJEO0tBekJ1QmhCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LjVlY2MxZGNiZTFlNWI1Y2YzNDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJztcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdAYXBpJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQnO1xyXG5cclxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b200MDQocHJvcHMpIHtcclxuICBjb25zdCBwcm8gPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pO1xyXG4gIGNvbnN0IHBlcnNvID0gcHJvamVjdHMuZmlsdGVyKHggPT4geC5wZW4pO1xyXG4gIGNvbnNvbGUubG9nKHBybywgcGVyc28pO1xyXG4gIGNvbnN0IHJhbmRvbVBybyA9IHByb1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcm8ubGVuZ3RoKV07XHJcbiAgY29uc3QgcmFuZG9tUGVyc28gPSBwZXJzb1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwZXJzby5sZW5ndGgpXTtcclxuICBjb25zdCByYW5kb21Qb3N0ID0gcHJvcHMucG9zdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJvcHMucG9zdHMubGVuZ3RoKV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiNDA0IC0gUGFnZSBOb3QgRm91bmQgfCBSw6lteSBCZXVtaWVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVycm9yLXNoYXBlXCI+XHJcbiAgICAgICAgPGgxPjQwNCAtIFBhZ2UgTm90IEZvdW5kPC9oMT5cclxuICAgICAgICB7LyogVE9ETzogYWRkIHJhbmRvbSBwcm9qZWN0IC8gcG9zdCA/ICovfVxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICA8R3JpZCBkYXRhPXtbcmFuZG9tUG9zdF19IGNsYXNzTmFtZT1cIm10LTEwIG1iLTEwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJidG5cIj5HbyBiYWNrIEhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIGFzcGVjdFJhdGlvOiAnMjcyMi8xMzQ0OCd9fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzL3BhcmNvbWVnYS1jYS1zY3JlZW4ucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHM6IGFsbFBvc3RzXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==