webpackHotUpdate_N_E("pages/projects/[slug]",{

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

  // fix local storage to be listened on page refresh
  // https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
  var _useLocalStorage = use_local_storage__WEBPACK_IMPORTED_MODULE_6___default()('theme'),
      _useLocalStorage2 = Object(C_Users_PC_Documents_GitHub_rb_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorage, 2),
      theme = _useLocalStorage2[0],
      setTheme = _useLocalStorage2[1];

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return __jsx("main", {
    className: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: switchTheme,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), props.children, __jsx(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ0aGVtZSIsInNldFRoZW1lIiwic3dpdGNoVGhlbWUiLCJuZXdUaGVtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNwQztBQUNBO0FBRm9DLHlCQUdWQyx3REFBZSxDQUFDLE9BQUQsQ0FITDtBQUFBO0FBQUEsTUFHN0JDLEtBSDZCO0FBQUEsTUFHdEJDLFFBSHNCOztBQUtwQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR0gsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkIsT0FBOUM7QUFDQUMsWUFBUSxDQUFDRSxRQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBTSxhQUFTLEVBQUVILEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLEtBQUssQ0FBQ00sS0FBZCxDQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVOLEtBQUssQ0FBQ08sV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFSCxXQUFqQjtBQUE4QixTQUFLLEVBQUVGLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HRixLQUFLLENBQUNRLFFBTlQsRUFPRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRDs7R0F0QnVCVCxNO1VBR0lFLHdEOzs7S0FISkYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uZTgyOGI3OWI3M2ZjODUzNzNkNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICdjb21wb25lbnRzL21vYmlsZU5hdidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJ3VzZS1sb2NhbC1zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gIC8vIGZpeCBsb2NhbCBzdG9yYWdlIHRvIGJlIGxpc3RlbmVkIG9uIHBhZ2UgcmVmcmVzaFxyXG4gIC8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZWFzeS1kYXJrLW1vZGUtYW5kLW11bHRpcGxlLWNvbG9yLXRoZW1lcy1pbi1yZWFjdC9cclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUxvY2FsU3RvcmFnZSgndGhlbWUnKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcclxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3RoZW1lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIG9uQ2xpY2s9e3N3aXRjaFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8TW9iaWxlTmF2IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==