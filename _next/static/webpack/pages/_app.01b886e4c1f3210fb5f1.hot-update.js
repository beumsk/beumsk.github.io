webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage */ "./node_modules/use-local-storage/dist/index.js");
/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var public_styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/styles/style.scss */ "./public/styles/style.scss");
/* harmony import */ var public_styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(public_styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useLocalStorage = use_local_storage__WEBPACK_IMPORTED_MODULE_3___default()('theme'),
      _useLocalStorage2 = Object(C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLocalStorage, 2),
      theme = _useLocalStorage2[0],
      setTheme = _useLocalStorage2[1];

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init({
      once: true,
      offset: 50
    });
  }, []);
  return __jsx(Component, Object(C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: switchTheme,
    theme: theme
  }, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx("button", {
    onClick: switchTheme,
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, theme === 'dark' ? '🌙' : '🔆'));
}

_s(MyApp, "YGS+s8CVEWRviNom18nwlIGWkHI=", false, function () {
  return [use_local_storage__WEBPACK_IMPORTED_MODULE_3___default.a];
});

_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUxvY2FsU3RvcmFnZSIsInRoZW1lIiwic2V0VGhlbWUiLCJzd2l0Y2hUaGVtZSIsIm5ld1RoZW1lIiwidXNlRWZmZWN0IiwiQU9TIiwiaW5pdCIsIm9uY2UiLCJvZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDZSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSx5QkFDNUJDLHdEQUFlLENBQUMsT0FBRCxDQURhO0FBQUE7QUFBQSxNQUMvQ0MsS0FEK0M7QUFBQSxNQUN4Q0MsUUFEd0M7O0FBR3RELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsUUFBUSxHQUFHSCxLQUFLLEtBQUssT0FBVixHQUFvQixNQUFwQixHQUE2QixPQUE5QztBQUNBQyxZQUFRLENBQUNFLFFBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw4Q0FBRyxDQUFDQyxJQUFKLENBQVM7QUFDUEMsVUFBSSxFQUFFLElBREM7QUFFUEMsWUFBTSxFQUFFO0FBRkQsS0FBVDtBQUlELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxTQUFRLE1BQUMsU0FBRDtBQUFXLFdBQU8sRUFBRU4sV0FBcEI7QUFBaUMsU0FBSyxFQUFFRjtBQUF4QyxLQUFtREYsU0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNOO0FBQVEsV0FBTyxFQUFFSSxXQUFqQjtBQUE4QixhQUFTLEVBQUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQ0YsS0FBSyxLQUFLLE1BQVYsR0FBbUIsSUFBbkIsR0FBMEIsSUFBekUsQ0FETSxDQUFSO0FBR0Q7O0dBbEJ1QkosSztVQUNJRyx3RDs7O0tBREpILEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMWI4ODZlNGMxZjMyMTBmYjVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAndXNlLWxvY2FsLXN0b3JhZ2UnO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuXHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0ICdwdWJsaWMvc3R5bGVzL3N0eWxlLnNjc3MnXHJcblxyXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUxvY2FsU3RvcmFnZSgndGhlbWUnKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcclxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgIG9mZnNldDogNTAsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoPENvbXBvbmVudCBvbkNsaWNrPXtzd2l0Y2hUaGVtZX0gdGhlbWU9e3RoZW1lfSB7Li4ucGFnZVByb3BzfT5cclxuICAgIDxidXR0b24gb25DbGljaz17c3dpdGNoVGhlbWV9IGNsYXNzTmFtZT1cImJ0blwiPnt0aGVtZSA9PT0gJ2RhcmsnID8gJ/CfjJknIDogJ/CflIYnIH08L2J1dHRvbj5cclxuICA8L0NvbXBvbmVudD4pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9