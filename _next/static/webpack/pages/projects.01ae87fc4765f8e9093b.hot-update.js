webpackHotUpdate_N_E("pages/projects",{

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
  console.log(data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwZXJzb25hbCIsInByb2Zlc3Npb25hbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBWjtBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUNDLFNBQUssRUFBRTtBQUFSLEdBQUQsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBZSxTQUFLLEVBQUVMLEtBQUssQ0FBQ0ssS0FBNUI7QUFBbUMsZUFBVyxFQUFFTCxLQUFLLENBQUNNLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWpDRixFQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsd0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLHlCQUFSO0FBQWtDLFVBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBcUMsVUFBTSxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUosQ0FIRixDQWxDRixDQURGLENBREY7QUE0Q0Q7S0FoRHVCUCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjAxYWU4N2ZjNDc2NWY4ZTkwOTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdjb21wb25lbnRzL2RlZmF1bHQnXHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgcGVyc29uYWwgZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwZXJzb25hbCk7XHJcbiAgY29uc3QgcHJvZmVzc2lvbmFsID0gW3t0aXRsZTogJ0tQTUcgQ2FyZWVycyd9XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxyXG5cclxuICAgICAgICA8aDI+UGVyc29uYWwgcHJvamVjdHM8L2gyPlxyXG4gICAgICAgIHsvKiA8R3JpZCBkYXRhPXtwZXJzb25hbH0gLz4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcm9qZWN0cy9tZW1vcnlcIj5tZW1vcnk8L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1NuYWtlL1wiIHRhcmdldD1cIl9ibGFua1wiPlNuYWtlPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9NaW5lc3dlZXBlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5lc3dlZXBlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vV2hhY2stYS1Eb25rZXktS29uZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaGFjayBhIERvbmtleSBLb25nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9IYW5nbWFuL1wiIHRhcmdldD1cIl9ibGFua1wiPkhhbmdtYW48L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0RhZC1Kb2tlcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYWQgam9rZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0dpcGh5LVNlYXJjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXBoeSBTZWFyY2g8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RldHJpcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZXRyaXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1NpbW9uLUdhbWUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2ltb24gR2FtZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRHJ1bS1NYWNoaW5lL1wiIHRhcmdldD1cIl9ibGFua1wiPkRydW0gTWFjaGluZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ2xvY2svXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2xvY2s8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0V0Y2gtYS1Ta2V0Y2gvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RXRjaCBhIFNrZXRjaDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ2FsY3VsYXRvci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DYWxjdWxhdG9yPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9IaWdoZXItb3ItTG93ZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SGlnaGVyLW9yLUxvd2VyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9UaWMtVGFjLVRvZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaWMtVGFjLVRvZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vU2xpZGluZy1QdXp6bGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2xpZGluZy1QdXp6bGU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RvLURvLUxpc3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VG8tRG8tTGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vUG9rZW1vbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Qb2tlbW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Db2xvci1HYW1lL1wiIHRhcmdldD1cIl9ibGFua1wiPkNvbG9yLUdhbWU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0JyaWNrLUJyZWFrZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJpY2stQnJlYWtlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ29ubmVjdC00L1wiIHRhcmdldD1cIl9ibGFua1wiPkNvbm5lY3QtNDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vRGF0ZS1Db3VudGVyL1wiIHRhcmdldD1cIl9ibGFua1wiPkRhdGUtQ291bnRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vUXVvdGVzL1wiIHRhcmdldD1cIl9ibGFua1wiPlF1b3RlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vVGltZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGltZXI8L2E+PC9saT5cclxuICAgICAgICA8L3VsPiAqL31cclxuXHJcbiAgICAgICAgPGgyPlByb2Zlc3Npb25hbCBwcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvamVjdHMva3BtZy1jYXJlZXJzXCI+S1BNRyBDYXJlZXJzIEJlbGdpdW08L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cua3BtZ2xhdy5iZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5LUE1HIExhdzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5iZWUtcGFyaXMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkJlZSBQYXJpczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EZWZhdWx0TGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogJ1Byb2plY3RzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9qZWN0cyBmcm9tIFJCJ1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=