webpackHotUpdate_N_E("pages/projects/memory",{

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
  console.log(data_personalProjects__WEBPACK_IMPORTED_MODULE_4__["personal"].findIndex(function (x) {
    return x.title === 'Memory';
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvbWVtb3J5LmpzIl0sIm5hbWVzIjpbIk1lbW9yeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBlcnNvbmFsIiwiZmluZEluZGV4IiwieCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4REFBUSxDQUFDQyxTQUFULENBQW1CLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEtBQUYsS0FBWSxRQUFoQjtBQUFBLEdBQXBCLENBQVo7QUFDQSxTQUNFLE1BQUMsMERBQUQ7QUFBZSxTQUFLLEVBQUVOLEtBQUssQ0FBQ00sS0FBNUI7QUFBbUMsZUFBVyxFQUFFTixLQUFLLENBQUNPLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEYsQ0FMRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixDQVhGLEVBa0JFLE1BQUMsMERBQUQ7QUFBUyxPQUFHLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLEVBb0JFO0FBQUcsUUFBSSxFQUFDLGtDQUFSO0FBQTJDLFVBQU0sRUFBQyxRQUFsRDtBQUEyRCxhQUFTLEVBQUMsS0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQkYsRUFzQkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGLEVBd0JFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdkIsQ0F4QkYsQ0FERjtBQTRCRDtLQTlCdUJSLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvbWVtb3J5LmYwZDE2NzE0YjZmZTFlMmQ4OTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExheW91dCBmcm9tICdjb21wb25lbnRzL3Byb2plY3QnXHJcbmltcG9ydCBDb2RlcGVuIGZyb20gJ2NvbXBvbmVudHMvY29kZXBlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3BlcnNvbmFsfSBmcm9tICdkYXRhL3BlcnNvbmFsUHJvamVjdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1vcnkocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwZXJzb25hbC5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSAnTWVtb3J5JykpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvamVjdExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgIDxoMT5NZW1vcnk8L2gxPlxyXG4gICAgICA8cD5JbnRyb2R1Y3Rpb24gdGV4dDwvcD5cclxuXHJcbiAgICAgIDxoMj5UZWNobm9sb2dpZXM8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPkhUTUw8L2xpPlxyXG4gICAgICAgIDxsaT5DU1M8L2xpPlxyXG4gICAgICAgIDxsaT5KUzwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxoMj5DaGFsbGVuZ2VzLCBrZXkgbGVzc29uczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+YXJyYXkuc3BsaWNlPC9saT5cclxuICAgICAgICA8bGk+c2V0SW50ZXJ2YWwgJiBjbGVhckludGVydmFsPC9saT5cclxuICAgICAgICA8bGk+Y2xpY2sgZXZlbnQgbGlzdGVuZXIgb24gcGFyZW50PC9saT5cclxuICAgICAgICA8bGk+bGluZWFyLWdyYWRpZW50PC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxDb2RlcGVuIHBlbj1cInhkb0tqWFwiIC8+XHJcblxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JldW1zay9NZW1vcnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj5HaXRodWIgcmVwb3NpdG9yeTwvYT5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TmV4dCBwcm9qZWN0czwvTGluaz5cclxuICAgICAgXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48YSBjbGFzc05hbWU9XCJidG5cIj5CYWNrIHRvIHByb2plY3RzPC9hPjwvTGluaz5cclxuICAgIDwvUHJvamVjdExheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6ICdNZW1vcnkgfCBSQicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWVtb3J5IGZyb20gUkInXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==