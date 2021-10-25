webpackHotUpdate_N_E("pages/projects",{

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

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/default */ "./components/default.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/grid */ "./components/grid.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var data_personalProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! data/personalProjects */ "./data/personalProjects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Projects(props) {
  console.log(data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["personal"]);
  var professional = [{
    title: 'KPMG Careers'
  }];
  return __jsx(components_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "PROJECTS"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Personal projects"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Professional projects"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects/kpmg-careers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "KPMG Careers Belgium")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://www.kpmglaw.be/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "KPMG Law")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://www.bee-paris.com/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Bee Paris")))));
}
_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9wZXJzb25hbFByb2plY3RzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwZXJzb25hbCIsInRpdGxlIiwibGluayIsImltZyIsIlByb2plY3RzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvZmVzc2lvbmFsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3BCO0FBQUNDLE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsaUJBQXhCO0FBQTJDQyxLQUFHLEVBQUU7QUFBaEQsQ0FEb0IsRUFFcEI7QUFBQ0YsT0FBSyxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRSxnQkFBdkI7QUFBeUNDLEtBQUcsRUFBRTtBQUE5QyxDQUZvQixFQUdwQjtBQUFDRixPQUFLLEVBQUUsYUFBUjtBQUF1QkMsTUFBSSxFQUFFLHNCQUE3QjtBQUFxREMsS0FBRyxFQUFFO0FBQTFELENBSG9CLEVBSXBCO0FBQUNGLE9BQUssRUFBRSxxQkFBUjtBQUErQkMsTUFBSSxFQUFFLDhCQUFyQztBQUFxRUMsS0FBRyxFQUFFO0FBQTFFLENBSm9CLEVBS3BCO0FBQUNGLE9BQUssRUFBRSxTQUFSO0FBQW1CQyxNQUFJLEVBQUUsa0JBQXpCO0FBQTZDQyxLQUFHLEVBQUU7QUFBbEQsQ0FMb0IsRUFNcEI7QUFBQ0YsT0FBSyxFQUFFLFdBQVI7QUFBcUJDLE1BQUksRUFBRSxvQkFBM0I7QUFBaURDLEtBQUcsRUFBRTtBQUF0RCxDQU5vQixFQU9wQjtBQUFDRixPQUFLLEVBQUUsY0FBUjtBQUF3QkMsTUFBSSxFQUFFLHVCQUE5QjtBQUF1REMsS0FBRyxFQUFFO0FBQTVELENBUG9CLEVBUXBCO0FBQUNGLE9BQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsaUJBQXhCO0FBQTJDQyxLQUFHLEVBQUU7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyx3QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFKLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMseUJBQVI7QUFBa0MsVUFBTSxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyw0QkFBUjtBQUFxQyxVQUFNLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSixDQUhGLENBbENGLENBREYsQ0FERjtBQTRDRDtLQWhEdUJMLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuYjc5YzY1YjUwZjU5YzdkMGNiZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwZXJzb25hbCA9IFtcclxuICAgIHt0aXRsZTogJ01lbW9yeScsIGxpbms6ICdwcm9qZWN0cy9tZW1vcnknLCBpbWc6ICcvaW1hZ2VzL21lbW9yeS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ1NuYWtlJywgbGluazogJ3Byb2plY3RzL3NuYWtlJywgaW1nOiAnL2ltYWdlcy9zbmFrZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ01pbmVzd2VlcGVyJywgbGluazogJ3Byb2plY3RzL21pbmVzd2VlcGVyJywgaW1nOiAnL2ltYWdlcy9taW5lc3dlZXBlci5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3doYWNrLWEtZG9ua2V5LWtvbmcnLCBsaW5rOiAncHJvamVjdHMvd2hhY2stYS1kb25rZXkta29uZycsIGltZzogJy9pbWFnZXMvd2hhY2stYS1kb25rZXkta29uZy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2hhbmdtYW4nLCBsaW5rOiAncHJvamVjdHMvaGFuZ21hbicsIGltZzogJy9pbWFnZXMvaGFuZ21hbi5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2RhZC1qb2tlcycsIGxpbms6ICdwcm9qZWN0cy9kYWQtam9rZXMnLCBpbWc6ICcvaW1hZ2VzL2RhZC1qb2tlcy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2dpcGh5LXNlYXJjaCcsIGxpbms6ICdwcm9qZWN0cy9naXBoeS1zZWFyY2gnLCBpbWc6ICcvaW1hZ2VzL2dpcGh5LXNlYXJjaC5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3RldHJpcycsIGxpbms6ICdwcm9qZWN0cy90ZXRyaXMnLCBpbWc6ICcvaW1hZ2VzL3RldHJpcy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3NpbW9uLWdhbWUnLCBsaW5rOiAncHJvamVjdHMvc2ltb24tZ2FtZScsIGltZzogJy9pbWFnZXMvc2ltb24tZ2FtZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2RydW0tbWFjaGluZScsIGxpbms6ICdwcm9qZWN0cy9kcnVtLW1hY2hpbmUnLCBpbWc6ICcvaW1hZ2VzL2RydW0tbWFjaGluZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2Nsb2NrJywgbGluazogJ3Byb2plY3RzL2Nsb2NrJywgaW1nOiAnL2ltYWdlcy9jbG9jay5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2V0Y2gtYS1za2V0Y2gnLCBsaW5rOiAncHJvamVjdHMvZXRjaC1hLXNrZXRjaCcsIGltZzogJy9pbWFnZXMvZXRjaC1hLXNrZXRjaC5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2NhbGN1bGF0b3InLCBsaW5rOiAncHJvamVjdHMvY2FsY3VsYXRvcicsIGltZzogJy9pbWFnZXMvY2FsY3VsYXRvci5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2hpZ2hlci1vci1sb3dlcicsIGxpbms6ICdwcm9qZWN0cy9oaWdoZXItb3ItbG93ZXInLCBpbWc6ICcvaW1hZ2VzL2hpZ2hlci1vci1sb3dlci5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3RpYy10YWMtdG9lJywgbGluazogJ3Byb2plY3RzL3RpYy10YWMtdG9lJywgaW1nOiAnL2ltYWdlcy90aWMtdGFjLXRvZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3NsaWRpbmctcHV6emxlJywgbGluazogJ3Byb2plY3RzL3NsaWRpbmctcHV6emxlJywgaW1nOiAnL2ltYWdlcy9zbGlkaW5nLXB1enpsZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3Bva2Vtb24nLCBsaW5rOiAncHJvamVjdHMvcG9rZW1vbicsIGltZzogJy9pbWFnZXMvcG9rZW1vbi5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2NvbG9yLWdhbWUnLCBsaW5rOiAncHJvamVjdHMvY29sb3ItZ2FtZScsIGltZzogJy9pbWFnZXMvY29sb3ItZ2FtZS5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2JyaWNrLWJyZWFrZXInLCBsaW5rOiAncHJvamVjdHMvYnJpY2stYnJlYWtlcicsIGltZzogJy9pbWFnZXMvYnJpY2stYnJlYWtlci5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2Nvbm5lY3QtNCcsIGxpbms6ICdwcm9qZWN0cy9jb25uZWN0LTQnLCBpbWc6ICcvaW1hZ2VzL2Nvbm5lY3QtNC5qcGcnfSxcclxuICAgIHt0aXRsZTogJ2RhdGUtY291bnRlcicsIGxpbms6ICdwcm9qZWN0cy9kYXRlLWNvdW50ZXInLCBpbWc6ICcvaW1hZ2VzL2RhdGUtY291bnRlci5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3F1b3RlcycsIGxpbms6ICdwcm9qZWN0cy9xdW90ZXMnLCBpbWc6ICcvaW1hZ2VzL3F1b3Rlcy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ3RpbWVyJywgbGluazogJ3Byb2plY3RzL3RpbWVyJywgaW1nOiAnL2ltYWdlcy90aW1lci5qcGcnfVxyXG4gIF07IiwiaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9kZWZhdWx0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtwZXJzb25hbH0gZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwZXJzb25hbCk7XHJcbiAgY29uc3QgcHJvZmVzc2lvbmFsID0gW3t0aXRsZTogJ0tQTUcgQ2FyZWVycyd9XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxyXG5cclxuICAgICAgICA8aDI+UGVyc29uYWwgcHJvamVjdHM8L2gyPlxyXG4gICAgICAgIHsvKiA8R3JpZCBkYXRhPXtwZXJzb25hbH0gLz4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9qZWN0cy9tZW1vcnlcIj5tZW1vcnk8L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1NuYWtlL1wiIHRhcmdldD1cIl9ibGFua1wiPlNuYWtlPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9NaW5lc3dlZXBlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5lc3dlZXBlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vV2hhY2stYS1Eb25rZXktS29uZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaGFjayBhIERvbmtleSBLb25nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9IYW5nbWFuL1wiIHRhcmdldD1cIl9ibGFua1wiPkhhbmdtYW48L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0RhZC1Kb2tlcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYWQgam9rZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0dpcGh5LVNlYXJjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXBoeSBTZWFyY2g8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RldHJpcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZXRyaXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1NpbW9uLUdhbWUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2ltb24gR2FtZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRHJ1bS1NYWNoaW5lL1wiIHRhcmdldD1cIl9ibGFua1wiPkRydW0gTWFjaGluZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ2xvY2svXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2xvY2s8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0V0Y2gtYS1Ta2V0Y2gvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RXRjaCBhIFNrZXRjaDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ2FsY3VsYXRvci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DYWxjdWxhdG9yPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9IaWdoZXItb3ItTG93ZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SGlnaGVyLW9yLUxvd2VyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9UaWMtVGFjLVRvZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaWMtVGFjLVRvZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vU2xpZGluZy1QdXp6bGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2xpZGluZy1QdXp6bGU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RvLURvLUxpc3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VG8tRG8tTGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vUG9rZW1vbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Qb2tlbW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Db2xvci1HYW1lL1wiIHRhcmdldD1cIl9ibGFua1wiPkNvbG9yLUdhbWU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0JyaWNrLUJyZWFrZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJpY2stQnJlYWtlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ29ubmVjdC00L1wiIHRhcmdldD1cIl9ibGFua1wiPkNvbm5lY3QtNDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRGF0ZS1Db3VudGVyL1wiIHRhcmdldD1cIl9ibGFua1wiPkRhdGUtQ291bnRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vUXVvdGVzL1wiIHRhcmdldD1cIl9ibGFua1wiPlF1b3RlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vVGltZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGltZXI8L2E+PC9saT5cclxuICAgICAgICA8L3VsPiAqL31cclxuXHJcbiAgICAgICAgPGgyPlByb2Zlc3Npb25hbCBwcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvamVjdHMva3BtZy1jYXJlZXJzXCI+S1BNRyBDYXJlZXJzIEJlbGdpdW08L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cua3BtZ2xhdy5iZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5LUE1HIExhdzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5iZWUtcGFyaXMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkJlZSBQYXJpczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EZWZhdWx0TGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogJ1Byb2plY3RzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9qZWN0cyBmcm9tIFJCJ1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=