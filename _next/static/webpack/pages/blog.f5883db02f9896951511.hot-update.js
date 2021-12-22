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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsIml0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJ0aXRsZSIsInJlcGxhY2UiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicGVuIiwiY3VycmVudCIsInBhc3QiLCJpbWciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzVDLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFHLEVBQUVBLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQUwsSUFBYSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUEyQixXQUFLLEVBQUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QkMsTUFBOUIsQ0FBcUMsQ0FBckMsRUFBd0NDLFdBQXhDLEtBQXdETixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixHQUF6QixFQUE4QkcsS0FBOUIsQ0FBb0MsQ0FBcEMsQ0FEM0QsQ0FERixDQURGLENBREYsRUFRR1AsSUFBSSxDQUFDUSxHQUFMLElBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUUsK0JBQStCUixJQUFJLENBQUNHLEtBQTdDO0FBQW9ELFlBQU0sRUFBQyxRQUEzRDtBQUFvRSxXQUFLLEVBQUMsY0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5RixNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekYsQ0FERixFQUVFO0FBQUcsVUFBSSxFQUFFLG1DQUFtQ0gsSUFBSSxDQUFDUSxHQUFqRDtBQUFzRCxZQUFNLEVBQUMsUUFBN0Q7QUFBc0UsV0FBSyxFQUFDLG1CQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdHLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoRyxDQUZGLENBVEosRUFjRyxDQUFDUixJQUFJLENBQUNTLE9BQUwsSUFBZ0JULElBQUksQ0FBQ1UsSUFBdEIsS0FDQztBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsSUFBSSxDQUFDUyxPQUFMLElBQWdCO0FBQUcsVUFBSSxFQUFFVCxJQUFJLENBQUNTLE9BQWQ7QUFBdUIsWUFBTSxFQUFDLFFBQTlCO0FBQXVDLFdBQUssRUFBQyxjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRELE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE1RCxDQURuQixFQUVHVCxJQUFJLENBQUNVLElBQUwsSUFBYTtBQUFHLFVBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUFkO0FBQW9CLFlBQU0sRUFBQyxRQUEzQjtBQUFvQyxXQUFLLEVBQUMsbUJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEQsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTlELENBRmhCLENBZkosQ0FERixFQXNCRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFVixJQUFJLENBQUNFLElBQUwsSUFBYSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxXQUFLLEVBQUMsWUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVGLElBQUksQ0FBQ1csR0FBZjtBQUFvQixTQUFHLEVBQUVYLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxPQUFYLENBQW1CLElBQW5CLEVBQXlCLEdBQXpCLENBQXpCO0FBQXdELGFBQU8sRUFBQyxNQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURGLENBdEJGLENBREY7QUFnQ0QsR0FqQ2EsQ0FBZDtBQW1DQSxTQUNFO0FBQUssYUFBUyxFQUFFLFVBQVVSLEtBQUssQ0FBQ2dCLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsS0FESCxDQURGO0FBS0Q7S0F6Q3VCRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZjU4ODNkYjAyZjk4OTY5NTE1MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRmFDb2RlcGVuLCBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgTWRQdWJsaWMsIE1kU2V0dGluZ3NCYWNrdXBSZXN0b3JlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JlaGluZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rIHx8ICcnfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIiB0aXRsZT1cIkxlYXJuIG1vcmVcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidC1lbGxpcHNpc1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGUucmVwbGFjZSgvLS9nLCBcIiBcIikuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtpdGVtLnBlbiAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fbGlua3NcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXVtc2svXCIgKyBpdGVtLnRpdGxlfSB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkNvZGVwZW4gbGlua1wiPjxGYUNvZGVwZW4gLz48L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2NvZGVwZW4uaW8vYmV1bXNrL3Blbi9cIiArIGl0ZW0ucGVufSB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkdpdGh1YiByZXBvc2l0b3J5XCI+PEZhR2l0aHViIC8+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7KGl0ZW0uY3VycmVudCB8fCBpdGVtLnBhc3QpICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19saW5rc1wiPlxyXG4gICAgICAgICAgICAgIHtpdGVtLmN1cnJlbnQgJiYgPGEgaHJlZj17aXRlbS5jdXJyZW50fSB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkxpdmUgd2Vic2l0ZVwiPjxNZFB1YmxpYyAvPjwvYT59XHJcbiAgICAgICAgICAgICAge2l0ZW0ucGFzdCAmJiA8YSBocmVmPXtpdGVtLnBhc3R9IHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiU2l0ZSBhcyBJIGxlZnQgaXRcIj48TWRTZXR0aW5nc0JhY2t1cFJlc3RvcmUgLz48L2E+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rIHx8ICcnfT5cclxuICAgICAgICAgIDxhIHRpdGxlPVwiTGVhcm4gbW9yZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gYWx0PXtpdGVtLnRpdGxlLnJlcGxhY2UoLy0vZywgXCIgXCIpfSBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkIFwiICsgcHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAge2l0ZW1zfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==