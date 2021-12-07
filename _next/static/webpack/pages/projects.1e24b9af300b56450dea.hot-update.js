webpackHotUpdate_N_E("pages/projects",{

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




 // import useLocalStorage from 'use-local-storage';

function Layout(props) {
  _s();

  // fix local storage to be listened on page refresh
  // https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
  // update theme hook
  // const [theme, setTheme] = useLocalStorage('theme', '');
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // after mounting > get theme from local storage and apply theme
    // setTimeout(function() {
    var localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme);
    console.log(theme); // }, 2000)
  }, []);

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return __jsx("main", {
    className: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: props.img || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:secure_url",
    content: props.img || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: switchTheme,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), props.children, __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
}

_s(Layout, "3P4xXCVpfh6R2LV2gD7mN6c9AsM=");

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

/***/ }),

/***/ "./node_modules/use-local-storage/dist/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzd2l0Y2hUaGVtZSIsIm5ld1RoZW1lIiwic2V0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNwQztBQUNBO0FBRUE7QUFDQTtBQUxvQyxrQkFNVkMsc0RBQVEsQ0FBQyxFQUFELENBTkU7QUFBQSxNQU03QkMsS0FONkI7QUFBQSxNQU10QkMsUUFOc0I7O0FBUXBDQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBQ0UsUUFBSUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLENBQWpCO0FBQ0FMLFlBQVEsQ0FBQ0UsVUFBRCxDQUFSO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaLEVBTFksQ0FNZDtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFNQyxRQUFRLEdBQUdWLEtBQUssS0FBSyxPQUFWLEdBQW9CLE1BQXBCLEdBQTZCLE9BQTlDO0FBQ0FJLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQk0sT0FBcEIsQ0FBNEIsT0FBNUIsRUFBcUNELFFBQXJDO0FBQ0FULFlBQVEsQ0FBQ1MsUUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxTQUNFO0FBQU0sYUFBUyxFQUFFVixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRixLQUFLLENBQUNjLEtBQWQsQ0FERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFZCxLQUFLLENBQUNlLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFZixLQUFLLENBQUNnQixHQUFOLElBQWEsd0NBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sWUFBUSxFQUFDLHFCQUFmO0FBQXFDLFdBQU8sRUFBRWhCLEtBQUssQ0FBQ2dCLEdBQU4sSUFBYSx3Q0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRSxNQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFTCxXQUFqQjtBQUE4QixTQUFLLEVBQUVULEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFHRixLQUFLLENBQUNpQixRQVJULEVBU0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGO0FBY0Q7O0dBckN1QmxCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMWUyNGI5YWYzMDBiNTY0NTBkZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICdjb21wb25lbnRzL21vYmlsZU5hdidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJ3VzZS1sb2NhbC1zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gIC8vIGZpeCBsb2NhbCBzdG9yYWdlIHRvIGJlIGxpc3RlbmVkIG9uIHBhZ2UgcmVmcmVzaFxyXG4gIC8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZWFzeS1kYXJrLW1vZGUtYW5kLW11bHRpcGxlLWNvbG9yLXRoZW1lcy1pbi1yZWFjdC9cclxuXHJcbiAgLy8gdXBkYXRlIHRoZW1lIGhvb2tcclxuICAvLyBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUxvY2FsU3RvcmFnZSgndGhlbWUnLCAnJyk7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBhZnRlciBtb3VudGluZyA+IGdldCB0aGVtZSBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIGFwcGx5IHRoZW1lXHJcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgbG9jYWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcclxuICAgICAgc2V0VGhlbWUobG9jYWxUaGVtZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoZW1lKTtcclxuICAgIC8vIH0sIDIwMDApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGhlbWUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgbmV3VGhlbWUpO1xyXG4gICAgc2V0VGhlbWUobmV3VGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17dGhlbWV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5pbWcgfHwgXCJodHRwczovL2JldW1zay5naXRodWIuaW8vaW1hZ2VzL3JiLnBuZ1wifSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e3Byb3BzLmltZyB8fCBcImh0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pby9pbWFnZXMvcmIucG5nXCJ9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciBvbkNsaWNrPXtzd2l0Y2hUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPE1vYmlsZU5hdiAvPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=