webpackHotUpdate_N_E("pages/projects",{

/***/ "./data/professionalProjects.js":
/*!**************************************!*\
  !*** ./data/professionalProjects.js ***!
  \**************************************/
/*! exports provided: professional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "professional", function() { return professional; });
var professional = [{
  title: 'KPMG Careers'
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
/* harmony import */ var data_professionalProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/professionalProjects */ "./data/professionalProjects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
function Projects(props) {
  return __jsx(components_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "PROJECTS"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Personal projects"), __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["personal"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Professional projects"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects/kpmg-careers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "KPMG Careers Belgium")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://www.kpmglaw.be/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "KPMG Law")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://www.bee-paris.com/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9wcm9mZXNzaW9uYWxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvZmVzc2lvbmFsIiwidGl0bGUiLCJQcm9qZWN0cyIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJwZXJzb25hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNQSxZQUFZLEdBQUcsQ0FDMUI7QUFBQ0MsT0FBSyxFQUFFO0FBQVIsQ0FEMEIsQ0FBckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUV0QyxTQUNFLE1BQUMsMERBQUQ7QUFBZSxTQUFLLEVBQUVBLEtBQUssQ0FBQ0YsS0FBNUI7QUFBbUMsZUFBVyxFQUFFRSxLQUFLLENBQUNDLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixFQUlFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUVDLDhEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWpDRixFQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsd0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLHlCQUFSO0FBQWtDLFVBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBcUMsVUFBTSxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUosQ0FIRixDQWxDRixDQURGLENBREY7QUE0Q0Q7S0E5Q3VCSCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjYzNzE4YjlkNDQzYzc2YmYxNDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvZmVzc2lvbmFsID0gW1xyXG4gIHt0aXRsZTogJ0tQTUcgQ2FyZWVycyd9XHJcbl07IiwiaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9kZWZhdWx0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtwZXJzb25hbH0gZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5pbXBvcnQge3Byb2Zlc3Npb25hbH0gZnJvbSAnZGF0YS9wcm9mZXNzaW9uYWxQcm9qZWN0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb3BzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGVmYXVsdExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cclxuXHJcbiAgICAgICAgPGgyPlBlcnNvbmFsIHByb2plY3RzPC9oMj5cclxuICAgICAgICA8R3JpZCBkYXRhPXtwZXJzb25hbH0gLz5cclxuXHJcbiAgICAgICAgey8qIDx1bD5cclxuICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2plY3RzL21lbW9yeVwiPm1lbW9yeTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vU25ha2UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U25ha2U8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL01pbmVzd2VlcGVyL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbmVzd2VlcGVyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9XaGFjay1hLURvbmtleS1Lb25nL1wiIHRhcmdldD1cIl9ibGFua1wiPldoYWNrIGEgRG9ua2V5IEtvbmc8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0hhbmdtYW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SGFuZ21hbjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRGFkLUpva2VzL1wiIHRhcmdldD1cIl9ibGFua1wiPkRhZCBqb2tlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vR2lwaHktU2VhcmNoL1wiIHRhcmdldD1cIl9ibGFua1wiPkdpcGh5IFNlYXJjaDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vVGV0cmlzL1wiIHRhcmdldD1cIl9ibGFua1wiPlRldHJpczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vU2ltb24tR2FtZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TaW1vbiBHYW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9EcnVtLU1hY2hpbmUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RHJ1bSBNYWNoaW5lPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9DbG9jay9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DbG9jazwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRXRjaC1hLVNrZXRjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5FdGNoIGEgU2tldGNoPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9DYWxjdWxhdG9yL1wiIHRhcmdldD1cIl9ibGFua1wiPkNhbGN1bGF0b3I8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0hpZ2hlci1vci1Mb3dlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5IaWdoZXItb3ItTG93ZXI8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RpYy1UYWMtVG9lL1wiIHRhcmdldD1cIl9ibGFua1wiPlRpYy1UYWMtVG9lPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9TbGlkaW5nLVB1enpsZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TbGlkaW5nLVB1enpsZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vVG8tRG8tTGlzdC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Uby1Eby1MaXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Qb2tlbW9uL1wiIHRhcmdldD1cIl9ibGFua1wiPlBva2Vtb248L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0NvbG9yLUdhbWUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29sb3ItR2FtZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQnJpY2stQnJlYWtlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ccmljay1CcmVha2VyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Db25uZWN0LTQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29ubmVjdC00PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9EYXRlLUNvdW50ZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGF0ZS1Db3VudGVyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9RdW90ZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UXVvdGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9UaW1lci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaW1lcjwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+ICovfVxyXG5cclxuICAgICAgICA8aDI+UHJvZmVzc2lvbmFsIHByb2plY3RzPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9qZWN0cy9rcG1nLWNhcmVlcnNcIj5LUE1HIENhcmVlcnMgQmVsZ2l1bTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5rcG1nbGF3LmJlL1wiIHRhcmdldD1cIl9ibGFua1wiPktQTUcgTGF3PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmJlZS1wYXJpcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmVlIFBhcmlzPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHRpdGxlOiAnUHJvamVjdHMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1Byb2plY3RzIGZyb20gUkInXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==