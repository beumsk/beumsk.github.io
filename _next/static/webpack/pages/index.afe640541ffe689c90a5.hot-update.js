webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _data_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/nav */ "./data/nav.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Header(_ref) {
  var _this = this;

  var onClick = _ref.onClick,
      theme = _ref.theme;
  return __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, _data_nav__WEBPACK_IMPORTED_MODULE_3__["nav"].map(function (n, i) {
    return !i ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: n.link,
      key: n + i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "/images/logo.svg",
      alt: "R\xE9my Beumier logo",
      title: n.text,
      width: "30",
      height: "30",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: n.link,
      key: n + i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, n.text);
  }), __jsx("button", {
    onClick: onClick,
    className: "btn m-2",
    title: theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    "aria-label": theme == 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, theme === 'dark' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDarkMode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdLightMode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 50
    }
  }))));
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwib25DbGljayIsInRoZW1lIiwibmF2IiwibWFwIiwibiIsImkiLCJsaW5rIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDL0MsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDZDQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNQLENBQUNBLENBQUQsR0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxDQUFDLENBQUNFLElBQWQ7QUFBb0IsU0FBRyxFQUFFRixDQUFDLEdBQUNDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxrQkFBVDtBQUE0QixTQUFHLEVBQUMsc0JBQWhDO0FBQW9ELFdBQUssRUFBRUQsQ0FBQyxDQUFDRyxJQUE3RDtBQUFtRSxXQUFLLEVBQUMsSUFBekU7QUFBOEUsWUFBTSxFQUFDLElBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREYsR0FPRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFSCxDQUFDLENBQUNFLElBQWQ7QUFBb0IsU0FBRyxFQUFFRixDQUFDLEdBQUNDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JELENBQUMsQ0FBQ0csSUFBakMsQ0FSSztBQUFBLEdBQVIsQ0FESCxFQVdFO0FBQ0UsV0FBTyxFQUFFUCxPQURYO0FBRUUsYUFBUyxFQUFDLFNBRlo7QUFHRSxTQUFLLEVBQUVDLEtBQUssSUFBSSxNQUFULEdBQWtCLHNCQUFsQixHQUEyQyxxQkFIcEQ7QUFJRSxrQkFBWUEsS0FBSyxJQUFJLE1BQVQsR0FBa0Isc0JBQWxCLEdBQTJDLHFCQUp6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0tBLEtBQUssS0FBSyxNQUFWLEdBQW1CLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQixHQUFvQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMekMsQ0FYRixDQURGLENBREY7QUF1QkQ7S0F4QnVCRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmZTY0MDU0MWZmZTY4OWM5MGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRMaWdodE1vZGUsIE1kRGFya01vZGUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyBuYXYgfSBmcm9tICdAZGF0YS9uYXYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe29uQ2xpY2ssIHRoZW1lfSkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7bmF2Lm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICFpID8gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17bi5saW5rfSBrZXk9e24raX0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJSw6lteSBCZXVtaWVyIGxvZ29cIiB0aXRsZT17bi50ZXh0fSB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogPExpbmsgaHJlZj17bi5saW5rfSBrZXk9e24raX0+e24udGV4dH08L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBtLTJcIiBcbiAgICAgICAgICB0aXRsZT17dGhlbWUgPT0gJ2RhcmsnID8gJ1N3aXRjaCB0byBsaWdodCBtb2RlJyA6ICdTd2l0Y2ggdG8gZGFyayBtb2RlJ30gXG4gICAgICAgICAgYXJpYS1sYWJlbD17dGhlbWUgPT0gJ2RhcmsnID8gJ1N3aXRjaCB0byBsaWdodCBtb2RlJyA6ICdTd2l0Y2ggdG8gZGFyayBtb2RlJ30+XG4gICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IDxNZERhcmtNb2RlIC8+IDogPE1kTGlnaHRNb2RlIC8+IH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=