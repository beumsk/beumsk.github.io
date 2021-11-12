webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_mobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/mobileNav */ "./components/mobileNav.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function longResolve() {
  return new Promise(function (res) {
    setTimeout(res, 3000);
  });
}

function Layout(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    if (true) {
      return localStorage.getItem('theme') || false;
    }
  }),
      theme = _useState[0],
      setTheme = _useState[1];

  var test = function test() {
    setTheme(!theme);
    localStorage.setItem('theme', !theme);
    console.log(localStorage.getItem('theme'), theme);
  };

  return __jsx("main", {
    className: theme ? 'dark' : 'light',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return test();
    },
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), props.children, __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

_s(Layout, "MfCto6oKWYrJVp2i2HZW0njqpgQ=");

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsibG9uZ1Jlc29sdmUiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbWUiLCJzZXRUaGVtZSIsInRlc3QiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLEdBQUcsRUFBSTtBQUN4QkMsY0FBVSxDQUFDRCxHQUFELEVBQU0sSUFBTixDQUFWO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRWMsU0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxZQUFNO0FBQ3JDLGNBQW1DO0FBQ2pDLGFBQU9DLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixLQUFpQyxLQUF4QztBQUNEO0FBQ0YsR0FKK0IsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFNcEMsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkQsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNBRixnQkFBWSxDQUFDSyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLENBQUNILEtBQS9CO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWixFQUEyQ0MsS0FBM0M7QUFDRCxHQUpEOztBQU1BLFNBQ0U7QUFBTSxhQUFTLEVBQUVBLEtBQUssR0FBRyxNQUFILEdBQVksT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUosS0FBSyxDQUFDVSxLQUFkLENBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRVYsS0FBSyxDQUFDVyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMseURBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNTCxJQUFJLEVBQVY7QUFBQSxLQUFqQjtBQUErQixTQUFLLEVBQUVGLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HSixLQUFLLENBQUNZLFFBTlQsRUFPRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRDs7R0F4QnVCYixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNTRjNWQxNzlmOWVkMzUwOTQxNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICdjb21wb25lbnRzL21vYmlsZU5hdidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gbG9uZ1Jlc29sdmUoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzLCAzMDAwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICBsZXQgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgICBzZXRUaGVtZSghdGhlbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICF0aGVtZSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyksIHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXt0aGVtZSA/ICdkYXJrJyA6ICdsaWdodCd9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxNb2JpbGVOYXYgLz5cbiAgICA8L21haW4+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9