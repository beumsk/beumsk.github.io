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





function Layout(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme);
  }, []);

  var switchTheme = function switchTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  var fullImageUrl = props.img && (props.img.startsWith('http') ? props.img : "https://beumsk.github.io".concat(props.img));
  return __jsx("main", {
    className: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.title), __jsx("meta", {
    name: "description",
    content: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: fullImageUrl || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:secure_url",
    content: fullImageUrl || "https://beumsk.github.io/images/rb.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: switchTheme,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "over-h",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, props.children), __jsx(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(components_mobileNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN3aXRjaFRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiZnVsbEltYWdlVXJsIiwiaW1nIiwic3RhcnRzV2l0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsRUFBRCxDQURFO0FBQUEsTUFDN0JDLEtBRDZCO0FBQUEsTUFDdEJDLFFBRHNCOztBQUdwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLENBQWpCO0FBQ0FMLFlBQVEsQ0FBQ0UsVUFBRCxDQUFSO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR1IsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkIsT0FBOUM7QUFDQUksVUFBTSxDQUFDQyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixPQUE1QixFQUFxQ0QsUUFBckM7QUFDQVAsWUFBUSxDQUFDTyxRQUFELENBQVI7QUFDRCxHQUpEOztBQU1BLE1BQU1FLFlBQVksR0FBR1osS0FBSyxDQUFDYSxHQUFOLEtBQWNiLEtBQUssQ0FBQ2EsR0FBTixDQUFVQyxVQUFWLENBQXFCLE1BQXJCLElBQStCZCxLQUFLLENBQUNhLEdBQXJDLHFDQUFzRWIsS0FBSyxDQUFDYSxHQUE1RSxDQUFkLENBQXJCO0FBRUEsU0FDRTtBQUFNLGFBQVMsRUFBRVgsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsS0FBSyxDQUFDZSxLQUFkLENBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRWYsS0FBSyxDQUFDZ0IsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVKLFlBQVksSUFBSSx3Q0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxZQUFRLEVBQUMscUJBQWY7QUFBcUMsV0FBTyxFQUFFQSxZQUFZLElBQUksd0NBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0UsTUFBQyx5REFBRDtBQUFRLFdBQU8sRUFBRUgsV0FBakI7QUFBOEIsU0FBSyxFQUFFUCxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDaUIsUUFEVCxDQVJGLEVBV0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGO0FBZ0JEOztHQWhDdUJsQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMDhiOTQ3MmZlZDM5NGNkMWIxYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICdjb21wb25lbnRzL21vYmlsZU5hdidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gICAgICBzZXRUaGVtZShsb2NhbFRoZW1lKTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBuZXdUaGVtZSk7XHJcbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmdWxsSW1hZ2VVcmwgPSBwcm9wcy5pbWcgJiYgKHByb3BzLmltZy5zdGFydHNXaXRoKCdodHRwJykgPyBwcm9wcy5pbWcgOiBgaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvJHtwcm9wcy5pbWd9YCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3RoZW1lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZnVsbEltYWdlVXJsIHx8IFwiaHR0cHM6Ly9iZXVtc2suZ2l0aHViLmlvL2ltYWdlcy9yYi5wbmdcIn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBjb250ZW50PXtmdWxsSW1hZ2VVcmwgfHwgXCJodHRwczovL2JldW1zay5naXRodWIuaW8vaW1hZ2VzL3JiLnBuZ1wifSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgb25DbGljaz17c3dpdGNoVGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyLWhcIj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxNb2JpbGVOYXYgLz5cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9