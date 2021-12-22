webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\components\\grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Grid(props) {
  var _this = this;

  var items = props.data.map(function (item, index) {
    return __jsx("div", {
      className: "card",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "card__behind",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.link || '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "card__title",
      title: "Learn more",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "t-ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, item.title.replace(/-/g, " ").charAt(0).toUpperCase() + item.title.replace(/-/g, " ").slice(1)))), item.pen && __jsx("div", {
      className: "card__links",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "https://github.com/beumsk/" + item.title,
      target: "_blank",
      title: "Codepen link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCodepen"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 104
      }
    })), __jsx("a", {
      href: "https://codepen.io/beumsk/pen/" + item.pen,
      target: "_blank",
      title: "Github repository",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 111
      }
    }))), (item.current || item.past) && __jsx("div", {
      className: "card__links",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, item.current && __jsx("a", {
      href: item.current,
      target: "_blank",
      title: "Live website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 32
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdPublic"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 92
      }
    })), item.past && __jsx("a", {
      href: item.past,
      target: "_blank",
      title: "Site as I left it",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdSettingsBackupRestore"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 91
      }
    })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.link || '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx("a", {
      title: "Learn more",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card__img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: item.img,
      alt: item.title.replace(/-/g, " "),
      loading: "lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    })))));
  });
  return __jsx("div", {
    className: "grid " + props.className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJ0aXRsZSIsInJlcGxhY2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicGVuIiwiY3VycmVudCIsInBhc3QiLCJpbWciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzVDLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFHLEVBQUVBLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQUwsSUFBYSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUEyQixXQUFLLEVBQUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QkMsTUFBOUIsQ0FBcUMsQ0FBckMsRUFBd0NDLFdBQXhDLEtBQXdETixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QkcsS0FBOUIsQ0FBb0MsQ0FBcEMsQ0FEM0QsQ0FERixDQURGLENBREYsRUFRR1AsSUFBSSxDQUFDUSxHQUFMLElBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUUsK0JBQStCUixJQUFJLENBQUNHLEtBQTdDO0FBQW9ELFlBQU0sRUFBQyxRQUEzRDtBQUFvRSxXQUFLLEVBQUMsY0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5RixNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekYsQ0FERixFQUVFO0FBQUcsVUFBSSxFQUFFLG1DQUFtQ0gsSUFBSSxDQUFDUSxHQUFqRDtBQUFzRCxZQUFNLEVBQUMsUUFBN0Q7QUFBc0UsV0FBSyxFQUFDLG1CQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdHLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoRyxDQUZGLENBVEosRUFjRyxDQUFDUixJQUFJLENBQUNTLE9BQUwsSUFBZ0JULElBQUksQ0FBQ1UsSUFBdEIsS0FDQztBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsSUFBSSxDQUFDUyxPQUFMLElBQWdCO0FBQUcsVUFBSSxFQUFFVCxJQUFJLENBQUNTLE9BQWQ7QUFBdUIsWUFBTSxFQUFDLFFBQTlCO0FBQXVDLFdBQUssRUFBQyxjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRELE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE1RCxDQURuQixFQUVHVCxJQUFJLENBQUNVLElBQUwsSUFBYTtBQUFHLFVBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUFkO0FBQW9CLFlBQU0sRUFBQyxRQUEzQjtBQUFvQyxXQUFLLEVBQUMsbUJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEQsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTlELENBRmhCLENBZkosQ0FERixFQXNCRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFVixJQUFJLENBQUNFLElBQUwsSUFBYSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxXQUFLLEVBQUMsWUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVGLElBQUksQ0FBQ1csR0FBZjtBQUFvQixTQUFHLEVBQUVYLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxPQUFYLENBQW1CLElBQW5CLEVBQXlCLEdBQXpCLENBQXpCO0FBQXdELGFBQU8sRUFBQyxNQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURGLENBdEJGLENBREY7QUFnQ0QsR0FqQ2EsQ0FBZDtBQW1DQSxTQUNFO0FBQUssYUFBUyxFQUFFLFVBQVVSLEtBQUssQ0FBQ2dCLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsS0FESCxDQURGO0FBS0Q7S0F6Q3VCRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ODgzZGIwMmY5ODk2OTUxNTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZhQ29kZXBlbiwgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IE1kUHVibGljLCBNZFNldHRpbmdzQmFja3VwUmVzdG9yZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICBjb25zdCBpdGVtcyA9IHByb3BzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19iZWhpbmRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGluayB8fCAnJ30+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCIgdGl0bGU9XCJMZWFybiBtb3JlXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKS5zbGljZSgxKX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7aXRlbS5wZW4gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2xpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vYmV1bXNrL1wiICsgaXRlbS50aXRsZX0gdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJDb2RlcGVuIGxpbmtcIj48RmFDb2RlcGVuIC8+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9jb2RlcGVuLmlvL2JldW1zay9wZW4vXCIgKyBpdGVtLnBlbn0gdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJHaXRodWIgcmVwb3NpdG9yeVwiPjxGYUdpdGh1YiAvPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeyhpdGVtLmN1cnJlbnQgfHwgaXRlbS5wYXN0KSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fbGlua3NcIj5cclxuICAgICAgICAgICAgICB7aXRlbS5jdXJyZW50ICYmIDxhIGhyZWY9e2l0ZW0uY3VycmVudH0gdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJMaXZlIHdlYnNpdGVcIj48TWRQdWJsaWMgLz48L2E+fVxyXG4gICAgICAgICAgICAgIHtpdGVtLnBhc3QgJiYgPGEgaHJlZj17aXRlbS5wYXN0fSB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIlNpdGUgYXMgSSBsZWZ0IGl0XCI+PE1kU2V0dGluZ3NCYWNrdXBSZXN0b3JlIC8+PC9hPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGluayB8fCAnJ30+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIkxlYXJuIG1vcmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD17aXRlbS50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKX0gbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZCBcIiArIHByb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgIHtpdGVtc31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=