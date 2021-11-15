webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Grid(props) {
  var _this = this;

  var items = props.data.map(function (x, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: x.link || '',
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "rel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, x.title.replace(/-/g, " ").charAt(0).toUpperCase() + x.title.replace(/-/g, " ").slice(1)), __jsx("img", {
      src: x.img,
      alt: x.title.replace(/-/g, " "),
      loading: "lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }))));
  });
  return __jsx("div", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, items);
}
_c = Grid;

var _c;

$RefreshReg$(_c, "Grid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIngiLCJpbmRleCIsImxpbmsiLCJ0aXRsZSIsInJlcGxhY2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDbEMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3pDLFdBQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsQ0FBQyxDQUFDRSxJQUFGLElBQVUsRUFBdEI7QUFBMEIsU0FBRyxFQUFFRCxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsQ0FBQyxDQUFDRyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDQyxXQUFyQyxLQUFxRE4sQ0FBQyxDQUFDRyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkJHLEtBQTNCLENBQWlDLENBQWpDLENBQTFELENBREYsRUFFRTtBQUFLLFNBQUcsRUFBRVAsQ0FBQyxDQUFDUSxHQUFaO0FBQWlCLFNBQUcsRUFBRVIsQ0FBQyxDQUFDRyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsQ0FBdEI7QUFBa0QsYUFBTyxFQUFDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGLENBREYsQ0FERjtBQVVELEdBWGEsQ0FBZDtBQWFBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLEtBREgsQ0FERjtBQUtEO0tBbkJ1QkYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjRhMGU1MDliN2IzOTU3ZjRhNTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBwcm9wcy5kYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e3gubGluayB8fCAnJ30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbFwiPlxyXG4gICAgICAgICAgICA8aDI+e3gudGl0bGUucmVwbGFjZSgvLS9nLCBcIiBcIikuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4LnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpLnNsaWNlKDEpfTwvaDI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt4LmltZ30gYWx0PXt4LnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpfSBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIClcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICB7aXRlbXN9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9