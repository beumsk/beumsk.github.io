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
  }, "Personal projects"), __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("h2", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwZXJzb25hbCIsInByb2Zlc3Npb25hbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBWjtBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUNDLFNBQUssRUFBRTtBQUFSLEdBQUQsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBZSxTQUFLLEVBQUVMLEtBQUssQ0FBQ0ssS0FBNUI7QUFBbUMsZUFBVyxFQUFFTCxLQUFLLENBQUNNLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixFQUlFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUVILDZEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWpDRixFQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsd0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLHlCQUFSO0FBQWtDLFVBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBcUMsVUFBTSxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUosQ0FIRixDQWxDRixDQURGLENBREY7QUE0Q0Q7S0FoRHVCSixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjQwNWU2NzUxOGRlYzQ0ZjczNWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdjb21wb25lbnRzL2RlZmF1bHQnXHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgcGVyc29uYWwgZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwZXJzb25hbCk7XHJcbiAgY29uc3QgcHJvZmVzc2lvbmFsID0gW3t0aXRsZTogJ0tQTUcgQ2FyZWVycyd9XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxyXG5cclxuICAgICAgICA8aDI+UGVyc29uYWwgcHJvamVjdHM8L2gyPlxyXG4gICAgICAgIDxHcmlkIGRhdGE9e3BlcnNvbmFsfSAvPlxyXG5cclxuICAgICAgICB7LyogPHVsPlxyXG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbWVtb3J5XCI+bWVtb3J5PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9TbmFrZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TbmFrZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vTWluZXN3ZWVwZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWluZXN3ZWVwZXI8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1doYWNrLWEtRG9ua2V5LUtvbmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2hhY2sgYSBEb25rZXkgS29uZzwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vSGFuZ21hbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5IYW5nbWFuPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9EYWQtSm9rZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGFkIGpva2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9HaXBoeS1TZWFyY2gvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2lwaHkgU2VhcmNoPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9UZXRyaXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGV0cmlzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9TaW1vbi1HYW1lL1wiIHRhcmdldD1cIl9ibGFua1wiPlNpbW9uIEdhbWU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0RydW0tTWFjaGluZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EcnVtIE1hY2hpbmU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0Nsb2NrL1wiIHRhcmdldD1cIl9ibGFua1wiPkNsb2NrPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9FdGNoLWEtU2tldGNoL1wiIHRhcmdldD1cIl9ibGFua1wiPkV0Y2ggYSBTa2V0Y2g8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0NhbGN1bGF0b3IvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2FsY3VsYXRvcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vSGlnaGVyLW9yLUxvd2VyL1wiIHRhcmdldD1cIl9ibGFua1wiPkhpZ2hlci1vci1Mb3dlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vVGljLVRhYy1Ub2UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGljLVRhYy1Ub2U8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1NsaWRpbmctUHV6emxlL1wiIHRhcmdldD1cIl9ibGFua1wiPlNsaWRpbmctUHV6emxlPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Uby1Eby1MaXN0L1wiIHRhcmdldD1cIl9ibGFua1wiPlRvLURvLUxpc3Q8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1Bva2Vtb24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UG9rZW1vbjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2JldW1zay5naXRodWIuaW8vQ29sb3ItR2FtZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db2xvci1HYW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9Ccmljay1CcmVha2VyL1wiIHRhcmdldD1cIl9ibGFua1wiPkJyaWNrLUJyZWFrZXI8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0Nvbm5lY3QtNC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db25uZWN0LTQ8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL0RhdGUtQ291bnRlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYXRlLUNvdW50ZXI8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1F1b3Rlcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5RdW90ZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL1RpbWVyL1wiIHRhcmdldD1cIl9ibGFua1wiPlRpbWVyPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD4gKi99XHJcblxyXG4gICAgICAgIDxoMj5Qcm9mZXNzaW9uYWwgcHJvamVjdHM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2plY3RzL2twbWctY2FyZWVyc1wiPktQTUcgQ2FyZWVycyBCZWxnaXVtPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmtwbWdsYXcuYmUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+S1BNRyBMYXc8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVlLXBhcmlzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CZWUgUGFyaXM8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRGVmYXVsdExheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6ICdQcm9qZWN0cycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnUHJvamVjdHMgZnJvbSBSQidcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9