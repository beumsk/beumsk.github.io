webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./components/footer.js");
/* harmony import */ var components_mobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/mobileNav */ "./components/mobileNav.js");
/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-local-storage */ "./node_modules/use-local-storage/dist/index.js");
/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_local_storage__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Layout(props) {
  _s();

  // let [theme, setTheme] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     return localStorage.getItem('theme') || false;
  //   }
  // });
  // const test = () => {
  //   setTheme(!theme);
  //   localStorage.setItem('theme', !theme);
  //   console.log(localStorage.getItem('theme'), !theme);
  // }
  // let defaultDark;
  // if (typeof window !== 'undefined') {
  // defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // }
  var localTheme;

  var _useLocalStorage = use_local_storage__WEBPACK_IMPORTED_MODULE_6___default()('theme', localTheme || 'light'),
      _useLocalStorage2 = Object(C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 2),
      theme = _useLocalStorage2[0],
      setTheme = _useLocalStorage2[1];

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(!newTheme);
    console.log(localStorage.getItem('theme'));
  };

  return __jsx("main", {
    className: theme === 'dark' ? 'dark' : 'light',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: switchTheme,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), props.children, __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
}

_s(Layout, "cU7RfcDtWjaFuZGISXTRa2p1rXs=", false, function () {
  return [use_local_storage__WEBPACK_IMPORTED_MODULE_6___default.a];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJsb2NhbFRoZW1lIiwidXNlTG9jYWxTdG9yYWdlIiwidGhlbWUiLCJzZXRUaGVtZSIsInN3aXRjaFRoZW1lIiwibmV3VGhlbWUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsVUFBSjs7QUFoQm9DLHlCQWlCVkMsd0RBQWUsQ0FBQyxPQUFELEVBQVVELFVBQVUsSUFBSSxPQUF4QixDQWpCTDtBQUFBO0FBQUEsTUFpQjdCRSxLQWpCNkI7QUFBQSxNQWlCdEJDLFFBakJzQjs7QUFtQnBDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsUUFBUSxHQUFHSCxLQUFLLEtBQUssT0FBVixHQUFvQixNQUFwQixHQUE2QixPQUE5QztBQUNBQyxZQUFRLENBQUMsQ0FBQ0UsUUFBRixDQUFSO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWjtBQUNELEdBSkQ7O0FBT0EsU0FDRTtBQUFNLGFBQVMsRUFBRVAsS0FBSyxLQUFLLE1BQVYsR0FBbUIsTUFBbkIsR0FBNEIsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUgsS0FBSyxDQUFDVyxLQUFkLENBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRVgsS0FBSyxDQUFDWSxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMseURBQUQ7QUFBUSxXQUFPLEVBQUVQLFdBQWpCO0FBQThCLFNBQUssRUFBRUYsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBT0dILEtBQUssQ0FBQ2EsUUFQVCxFQVFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERjtBQWFEOztHQXZDdUJkLE07VUFpQklHLHdEOzs7S0FqQkpILE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmVhMTVmNzFkNmVhNDA3NjMzMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICdjb21wb25lbnRzL21vYmlsZU5hdidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAndXNlLWxvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgLy8gbGV0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAvLyAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpIHx8IGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gY29uc3QgdGVzdCA9ICgpID0+IHtcbiAgLy8gICBzZXRUaGVtZSghdGhlbWUpO1xuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICF0aGVtZSk7XG4gIC8vICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyksICF0aGVtZSk7XG4gIC8vIH1cbiAgLy8gbGV0IGRlZmF1bHREYXJrO1xuICAvLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gZGVmYXVsdERhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gIC8vIH1cbiAgbGV0IGxvY2FsVGhlbWU7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlTG9jYWxTdG9yYWdlKCd0aGVtZScsIGxvY2FsVGhlbWUgfHwgJ2xpZ2h0Jyk7XG5cbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGhlbWUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgc2V0VGhlbWUoIW5ld1RoZW1lKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXt0aGVtZSA9PT0gJ2RhcmsnID8gJ2RhcmsnIDogJ2xpZ2h0J30+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIG9uQ2xpY2s9e3N3aXRjaFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICB7LyogPEhlYWRlciBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9IHRoZW1lPXt0aGVtZX0gLz4gKi99XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8TW9iaWxlTmF2IC8+XG4gICAgPC9tYWluPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==