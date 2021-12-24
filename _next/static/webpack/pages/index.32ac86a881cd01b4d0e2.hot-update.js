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
      rel: "noopener noreferrer",
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
        columnNumber: 130
      }
    })), __jsx("a", {
      href: "https://codepen.io/beumsk/pen/" + item.pen,
      target: "_blank",
      rel: "noopener noreferrer",
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
        columnNumber: 137
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
      rel: "noopener noreferrer",
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
        columnNumber: 118
      }
    })), item.past && __jsx("a", {
      href: item.past,
      target: "_blank",
      rel: "noopener noreferrer",
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
        columnNumber: 117
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
      width: "260",
      height: "146",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJ0aXRsZSIsInJlcGxhY2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicGVuIiwiY3VycmVudCIsInBhc3QiLCJpbWciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzVDLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFHLEVBQUVBLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQUwsSUFBYSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUEyQixXQUFLLEVBQUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QkMsTUFBOUIsQ0FBcUMsQ0FBckMsRUFBd0NDLFdBQXhDLEtBQXdETixJQUFJLENBQUNHLEtBQUwsQ0FBV0Ms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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmFDb2RlcGVuLCBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgTWRQdWJsaWMsIE1kU2V0dGluZ3NCYWNrdXBSZXN0b3JlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JlaGluZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rIHx8ICcnfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIiB0aXRsZT1cIkxlYXJuIG1vcmVcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidC1lbGxpcHNpc1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGUucmVwbGFjZSgvLS9nLCBcIiBcIikuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtpdGVtLnBlbiAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fbGlua3NcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXVtc2svXCIgKyBpdGVtLnRpdGxlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJDb2RlcGVuIGxpbmtcIj48RmFDb2RlcGVuIC8+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9jb2RlcGVuLmlvL2JldW1zay9wZW4vXCIgKyBpdGVtLnBlbn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiR2l0aHViIHJlcG9zaXRvcnlcIj48RmFHaXRodWIgLz48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsoaXRlbS5jdXJyZW50IHx8IGl0ZW0ucGFzdCkgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2xpbmtzXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW0uY3VycmVudCAmJiA8YSBocmVmPXtpdGVtLmN1cnJlbnR9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkxpdmUgd2Vic2l0ZVwiPjxNZFB1YmxpYyAvPjwvYT59XHJcbiAgICAgICAgICAgICAge2l0ZW0ucGFzdCAmJiA8YSBocmVmPXtpdGVtLnBhc3R9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIlNpdGUgYXMgSSBsZWZ0IGl0XCI+PE1kU2V0dGluZ3NCYWNrdXBSZXN0b3JlIC8+PC9hPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGluayB8fCAnJ30+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIkxlYXJuIG1vcmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD17aXRlbS50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKX0gd2lkdGg9XCIyNjBcIiBoZWlnaHQ9XCIxNDZcIiBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkIFwiICsgcHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAge2l0ZW1zfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==