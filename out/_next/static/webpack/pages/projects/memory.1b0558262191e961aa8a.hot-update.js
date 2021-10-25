webpackHotUpdate_N_E("pages/projects/memory",{

/***/ "./data/personalProjects.js":
/*!**********************************!*\
  !*** ./data/personalProjects.js ***!
  \**********************************/
/*! exports provided: personal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal", function() { return personal; });
var personal = [{
  title: 'Memory',
  link: 'projects/memory',
  img: '/images/memory.jpg'
}, {
  title: 'Snake',
  link: 'projects/snake',
  img: '/images/snake.jpg'
}, {
  title: 'Minesweeper',
  link: 'projects/minesweeper',
  img: '/images/minesweeper.jpg'
}, {
  title: 'whack-a-donkey-kong',
  link: 'projects/whack-a-donkey-kong',
  img: '/images/whack-a-donkey-kong.jpg'
}, {
  title: 'hangman',
  link: 'projects/hangman',
  img: '/images/hangman.jpg'
}, {
  title: 'dad-jokes',
  link: 'projects/dad-jokes',
  img: '/images/dad-jokes.jpg'
}, {
  title: 'giphy-search',
  link: 'projects/giphy-search',
  img: '/images/giphy-search.jpg'
}, {
  title: 'tetris',
  link: 'projects/tetris',
  img: '/images/tetris.jpg'
}, {
  title: 'simon-game',
  link: 'projects/simon-game',
  img: '/images/simon-game.jpg'
}, {
  title: 'drum-machine',
  link: 'projects/drum-machine',
  img: '/images/drum-machine.jpg'
}, {
  title: 'clock',
  link: 'projects/clock',
  img: '/images/clock.jpg'
}, {
  title: 'etch-a-sketch',
  link: 'projects/etch-a-sketch',
  img: '/images/etch-a-sketch.jpg'
}, {
  title: 'calculator',
  link: 'projects/calculator',
  img: '/images/calculator.jpg'
}, {
  title: 'higher-or-lower',
  link: 'projects/higher-or-lower',
  img: '/images/higher-or-lower.jpg'
}, {
  title: 'tic-tac-toe',
  link: 'projects/tic-tac-toe',
  img: '/images/tic-tac-toe.jpg'
}, {
  title: 'sliding-puzzle',
  link: 'projects/sliding-puzzle',
  img: '/images/sliding-puzzle.jpg'
}, {
  title: 'pokemon',
  link: 'projects/pokemon',
  img: '/images/pokemon.jpg'
}, {
  title: 'color-game',
  link: 'projects/color-game',
  img: '/images/color-game.jpg'
}, {
  title: 'brick-breaker',
  link: 'projects/brick-breaker',
  img: '/images/brick-breaker.jpg'
}, {
  title: 'connect-4',
  link: 'projects/connect-4',
  img: '/images/connect-4.jpg'
}, {
  title: 'date-counter',
  link: 'projects/date-counter',
  img: '/images/date-counter.jpg'
}, {
  title: 'quotes',
  link: 'projects/quotes',
  img: '/images/quotes.jpg'
}, {
  title: 'timer',
  link: 'projects/timer',
  img: '/images/timer.jpg'
}];

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

/***/ }),

/***/ "./pages/projects/memory.js":
/*!**********************************!*\
  !*** ./pages/projects/memory.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Memory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/project */ "./components/project.js");
/* harmony import */ var components_codepen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/codepen */ "./components/codepen.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var data_personalProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! data/personalProjects */ "./data/personalProjects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\memory.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Memory(props) {
  console.log(data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["personal"].indexOf("Memory"));
  return __jsx(components_project__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Memory"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Introduction text"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Technologies"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "HTML"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "CSS"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "JS")), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "array.splice"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "setInterval & clearInterval"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "click event listener on parent"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "linear-gradient")), __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pen: "xdoKjX",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: "https://github.com/beumsk/Memory",
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Next projects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 30
    }
  }, "Back to projects")));
}
_c = Memory;

var _c;

$RefreshReg$(_c, "Memory");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9wZXJzb25hbFByb2plY3RzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9tZW1vcnkuanMiXSwibmFtZXMiOlsicGVyc29uYWwiLCJ0aXRsZSIsImxpbmsiLCJpbWciLCJNZW1vcnkiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQUNDLE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsaUJBQXhCO0FBQTJDQyxLQUFHLEVBQUU7QUFBaEQsQ0FEc0IsRUFFdEI7QUFBQ0YsT0FBSyxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRSxnQkFBdkI7QUFBeUNDLEtBQUcsRUFBRTtBQUE5QyxDQUZzQixFQUd0QjtBQUFDRixPQUFLLEVBQUUsYUFBUjtBQUF1QkMsTUFBSSxFQUFFLHNCQUE3QjtBQUFxREMsS0FBRyxFQUFFO0FBQTFELENBSHNCLEVBSXRCO0FBQUNGLE9BQUssRUFBRSxxQkFBUjtBQUErQkMsTUFBSSxFQUFFLDhCQUFyQztBQUFxRUMsS0FBRyxFQUFFO0FBQTFFLENBSnNCLEVBS3RCO0FBQUNGLE9BQUssRUFBRSxTQUFSO0FBQW1CQyxNQUFJLEVBQUUsa0JBQXpCO0FBQTZDQyxLQUFHLEVBQUU7QUFBbEQsQ0FMc0IsRUFNdEI7QUFBQ0YsT0FBSyxFQUFFLFdBQVI7QUFBcUJDLE1BQUksRUFBRSxvQkFBM0I7QUFBaURDLEtBQUcsRUFBRTtBQUF0RCxDQU5zQixFQU90QjtBQUFDRixPQUFLLEVBQUUsY0FBUjtBQUF3QkMsTUFBSSxFQUFFLHVCQUE5QjtBQUF1REMsS0FBRyxFQUFFO0FBQTVELENBUHNCLEVBUXRCO0FBQUNGLE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsaUJBQXhCO0FBQTJDQyxLQUFHLEVBQUU7QUFBaEQs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QUFBQTtBQUFBO0FBQUEsV0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIRixDQUxGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFWRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLENBWEYsRUFrQkUsTUFBQywwREFBRDtBQUFTLE9BQUcsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFvQkU7QUFBRyxRQUFJLEVBQUMsa0NBQVI7QUFBMkMsVUFBTSxFQUFDLFFBQWxEO0FBQTJELGFBQVMsRUFBQyxLQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXBCRixFQXNCRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkYsRUF3QkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF2QixDQXhCRixDQURGO0FBNEJEO0tBOUJ1QkwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9tZW1vcnkuMWIwNTU4MjYyMTkxZTk2MWFhOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwZXJzb25hbCA9IFtcclxuICB7dGl0bGU6ICdNZW1vcnknLCBsaW5rOiAncHJvamVjdHMvbWVtb3J5JywgaW1nOiAnL2ltYWdlcy9tZW1vcnkuanBnJ30sXHJcbiAge3RpdGxlOiAnU25ha2UnLCBsaW5rOiAncHJvamVjdHMvc25ha2UnLCBpbWc6ICcvaW1hZ2VzL3NuYWtlLmpwZyd9LFxyXG4gIHt0aXRsZTogJ01pbmVzd2VlcGVyJywgbGluazogJ3Byb2plY3RzL21pbmVzd2VlcGVyJywgaW1nOiAnL2ltYWdlcy9taW5lc3dlZXBlci5qcGcnfSxcclxuICB7dGl0bGU6ICd3aGFjay1hLWRvbmtleS1rb25nJywgbGluazogJ3Byb2plY3RzL3doYWNrLWEtZG9ua2V5LWtvbmcnLCBpbWc6ICcvaW1hZ2VzL3doYWNrLWEtZG9ua2V5LWtvbmcuanBnJ30sXHJcbiAge3RpdGxlOiAnaGFuZ21hbicsIGxpbms6ICdwcm9qZWN0cy9oYW5nbWFuJywgaW1nOiAnL2ltYWdlcy9oYW5nbWFuLmpwZyd9LFxyXG4gIHt0aXRsZTogJ2RhZC1qb2tlcycsIGxpbms6ICdwcm9qZWN0cy9kYWQtam9rZXMnLCBpbWc6ICcvaW1hZ2VzL2RhZC1qb2tlcy5qcGcnfSxcclxuICB7dGl0bGU6ICdnaXBoeS1zZWFyY2gnLCBsaW5rOiAncHJvamVjdHMvZ2lwaHktc2VhcmNoJywgaW1nOiAnL2ltYWdlcy9naXBoeS1zZWFyY2guanBnJ30sXHJcbiAge3RpdGxlOiAndGV0cmlzJywgbGluazogJ3Byb2plY3RzL3RldHJpcycsIGltZzogJy9pbWFnZXMvdGV0cmlzLmpwZyd9LFxyXG4gIHt0aXRsZTogJ3NpbW9uLWdhbWUnLCBsaW5rOiAncHJvamVjdHMvc2ltb24tZ2FtZScsIGltZzogJy9pbWFnZXMvc2ltb24tZ2FtZS5qcGcnfSxcclxuICB7dGl0bGU6ICdkcnVtLW1hY2hpbmUnLCBsaW5rOiAncHJvamVjdHMvZHJ1bS1tYWNoaW5lJywgaW1nOiAnL2ltYWdlcy9kcnVtLW1hY2hpbmUuanBnJ30sXHJcbiAge3RpdGxlOiAnY2xvY2snLCBsaW5rOiAncHJvamVjdHMvY2xvY2snLCBpbWc6ICcvaW1hZ2VzL2Nsb2NrLmpwZyd9LFxyXG4gIHt0aXRsZTogJ2V0Y2gtYS1za2V0Y2gnLCBsaW5rOiAncHJvamVjdHMvZXRjaC1hLXNrZXRjaCcsIGltZzogJy9pbWFnZXMvZXRjaC1hLXNrZXRjaC5qcGcnfSxcclxuICB7dGl0bGU6ICdjYWxjdWxhdG9yJywgbGluazogJ3Byb2plY3RzL2NhbGN1bGF0b3InLCBpbWc6ICcvaW1hZ2VzL2NhbGN1bGF0b3IuanBnJ30sXHJcbiAge3RpdGxlOiAnaGlnaGVyLW9yLWxvd2VyJywgbGluazogJ3Byb2plY3RzL2hpZ2hlci1vci1sb3dlcicsIGltZzogJy9pbWFnZXMvaGlnaGVyLW9yLWxvd2VyLmpwZyd9LFxyXG4gIHt0aXRsZTogJ3RpYy10YWMtdG9lJywgbGluazogJ3Byb2plY3RzL3RpYy10YWMtdG9lJywgaW1nOiAnL2ltYWdlcy90aWMtdGFjLXRvZS5qcGcnfSxcclxuICB7dGl0bGU6ICdzbGlkaW5nLXB1enpsZScsIGxpbms6ICdwcm9qZWN0cy9zbGlkaW5nLXB1enpsZScsIGltZzogJy9pbWFnZXMvc2xpZGluZy1wdXp6bGUuanBnJ30sXHJcbiAge3RpdGxlOiAncG9rZW1vbicsIGxpbms6ICdwcm9qZWN0cy9wb2tlbW9uJywgaW1nOiAnL2ltYWdlcy9wb2tlbW9uLmpwZyd9LFxyXG4gIHt0aXRsZTogJ2NvbG9yLWdhbWUnLCBsaW5rOiAncHJvamVjdHMvY29sb3ItZ2FtZScsIGltZzogJy9pbWFnZXMvY29sb3ItZ2FtZS5qcGcnfSxcclxuICB7dGl0bGU6ICdicmljay1icmVha2VyJywgbGluazogJ3Byb2plY3RzL2JyaWNrLWJyZWFrZXInLCBpbWc6ICcvaW1hZ2VzL2JyaWNrLWJyZWFrZXIuanBnJ30sXHJcbiAge3RpdGxlOiAnY29ubmVjdC00JywgbGluazogJ3Byb2plY3RzL2Nvbm5lY3QtNCcsIGltZzogJy9pbWFnZXMvY29ubmVjdC00LmpwZyd9LFxyXG4gIHt0aXRsZTogJ2RhdGUtY291bnRlcicsIGxpbms6ICdwcm9qZWN0cy9kYXRlLWNvdW50ZXInLCBpbWc6ICcvaW1hZ2VzL2RhdGUtY291bnRlci5qcGcnfSxcclxuICB7dGl0bGU6ICdxdW90ZXMnLCBsaW5rOiAncHJvamVjdHMvcXVvdGVzJywgaW1nOiAnL2ltYWdlcy9xdW90ZXMuanBnJ30sXHJcbiAge3RpdGxlOiAndGltZXInLCBsaW5rOiAncHJvamVjdHMvdGltZXInLCBpbWc6ICcvaW1hZ2VzL3RpbWVyLmpwZyd9XHJcbl07IiwiaW1wb3J0IFByb2plY3RMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9wcm9qZWN0J1xyXG5pbXBvcnQgQ29kZXBlbiBmcm9tICdjb21wb25lbnRzL2NvZGVwZW4nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtwZXJzb25hbH0gZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVtb3J5KHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocGVyc29uYWwuaW5kZXhPZihcIk1lbW9yeVwiKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9qZWN0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGgxPk1lbW9yeTwvaDE+XHJcbiAgICAgIDxwPkludHJvZHVjdGlvbiB0ZXh0PC9wPlxyXG5cclxuICAgICAgPGgyPlRlY2hub2xvZ2llczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+SFRNTDwvbGk+XHJcbiAgICAgICAgPGxpPkNTUzwvbGk+XHJcbiAgICAgICAgPGxpPkpTPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGgyPkNoYWxsZW5nZXMsIGtleSBsZXNzb25zPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5hcnJheS5zcGxpY2U8L2xpPlxyXG4gICAgICAgIDxsaT5zZXRJbnRlcnZhbCAmIGNsZWFySW50ZXJ2YWw8L2xpPlxyXG4gICAgICAgIDxsaT5jbGljayBldmVudCBsaXN0ZW5lciBvbiBwYXJlbnQ8L2xpPlxyXG4gICAgICAgIDxsaT5saW5lYXItZ3JhZGllbnQ8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPENvZGVwZW4gcGVuPVwieGRvS2pYXCIgLz5cclxuXHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmV1bXNrL01lbW9yeVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPkdpdGh1YiByZXBvc2l0b3J5PC9hPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5OZXh0IHByb2plY3RzPC9MaW5rPlxyXG4gICAgICBcclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gcHJvamVjdHM8L2E+PC9MaW5rPlxyXG4gICAgPC9Qcm9qZWN0TGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogJ01lbW9yeSB8IFJCJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNZW1vcnkgZnJvbSBSQidcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9