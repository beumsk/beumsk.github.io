webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\blog\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function Post(props) {
  var _props$posts;

  var date = props.data.date === '' ? 'No date' : new Date(props.data.date).getDate() + '.' + (new Date(props.data.date).getMonth() + 1) + '.' + new Date(props.data.date).getFullYear();
  var nextLink = ((_props$posts = props.posts[props.posts.findIndex(function (x) {
    return x.title === props.data.title;
  }) + 1]) === null || _props$posts === void 0 ? void 0 : _props$posts.link) || props.posts[0].link;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.data.title + ' | Rémy Beumier',
    img: props.data.img,
    description: props.data.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container narrow over-x-h",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    "data-aos": "fade-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, props.data.title), __jsx("img", {
    src: props.data.img,
    alt: props.data.title,
    className: "post__img mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "post__date pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, date), __jsx("div", {
    className: "post__content mb-5",
    dangerouslySetInnerHTML: {
      __html: props.data.content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: nextLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "Next blog post")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 34
    }
  }, "Back to blog listing")))))));
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiZGF0ZSIsImRhdGEiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJuZXh0TGluayIsInBvc3RzIiwiZmluZEluZGV4IiwieCIsInRpdGxlIiwibGluayIsImltZyIsImludHJvIiwiX19odG1sIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBb0I7QUFBQTs7QUFDakMsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0QsSUFBWCxLQUFvQixFQUFwQixHQUF5QixTQUF6QixHQUNULElBQUlFLElBQUosQ0FBU0gsS0FBSyxDQUFDRSxJQUFOLENBQVdELElBQXBCLEVBQTBCRyxPQUExQixLQUFzQyxHQUF0QyxJQUNDLElBQUlELElBQUosQ0FBU0gsS0FBSyxDQUFDRSxJQUFOLENBQVdELElBQXBCLEVBQTBCSSxRQUExQixLQUFxQyxDQUR0QyxJQUMyQyxHQUQzQyxHQUVBLElBQUlGLElBQUosQ0FBU0gsS0FBSyxDQUFDRSxJQUFOLENBQVdELElBQXBCLEVBQTBCSyxXQUExQixFQUhKO0FBS0EsTUFBTUMsUUFBUSxHQUFHLGlCQUFBUCxLQUFLLENBQUNRLEtBQU4sQ0FBYVIsS0FBSyxDQUFDUSxLQUFOLENBQVlDLFNBQVosQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsS0FBRixLQUFZWCxLQUFLLENBQUNFLElBQU4sQ0FBV1MsS0FBOUI7QUFBQSxHQUF0QixDQUFELEdBQTZELENBQXpFLCtEQUE2RUMsSUFBN0UsS0FDWlosS0FBSyxDQUFDUSxLQUFOLENBQVksQ0FBWixFQUFlSSxJQURwQjtBQUdBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBRVosS0FBSyxDQUFDRSxJQUFOLENBQVdTLEtBQVgsR0FBbUIsaUJBQWxDO0FBQXFELE9BQUcsRUFBRVgsS0FBSyxDQUFDRSxJQUFOLENBQVdXLEdBQXJFO0FBQTBFLGVBQVcsRUFBRWIsS0FBSyxDQUFDRSxJQUFOLENBQVdZLEtBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxnQkFBUyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZCxLQUFLLENBQUNFLElBQU4sQ0FBV1MsS0FBaEIsQ0FERixFQUVFO0FBQUssT0FBRyxFQUFFWCxLQUFLLENBQUNFLElBQU4sQ0FBV1csR0FBckI7QUFBMEIsT0FBRyxFQUFFYixLQUFLLENBQUNFLElBQU4sQ0FBV1MsS0FBMUM7QUFBaUQsYUFBUyxFQUFDLGdCQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDVixJQUFoQyxDQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsMkJBQXVCLEVBQUU7QUFBQ2MsWUFBTSxFQUFDZixLQUFLLENBQUNFLElBQU4sQ0FBV2M7QUFBbkIsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVULFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQjtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXRCLENBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFHLGFBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQW5CLENBRkYsQ0FORixDQURGLENBREYsQ0FERixDQURGO0FBbUJEO0tBNUJ1QlIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS42ZDhhN2M4MGRmNDE5NzQxNTU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCJAYXBpXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcyl7XG4gIGNvbnN0IGRhdGUgPSBwcm9wcy5kYXRhLmRhdGUgPT09ICcnID8gJ05vIGRhdGUnIFxuICAgIDogbmV3IERhdGUocHJvcHMuZGF0YS5kYXRlKS5nZXREYXRlKCkgKyAnLicgXG4gICAgKyAobmV3IERhdGUocHJvcHMuZGF0YS5kYXRlKS5nZXRNb250aCgpKzEpICsgJy4nIFxuICAgICsgbmV3IERhdGUocHJvcHMuZGF0YS5kYXRlKS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IG5leHRMaW5rID0gcHJvcHMucG9zdHNbKHByb3BzLnBvc3RzLmZpbmRJbmRleCgoeCkgPT4geC50aXRsZSA9PT0gcHJvcHMuZGF0YS50aXRsZSkpKzFdPy5saW5rIFxuICAgIHx8IHByb3BzLnBvc3RzWzBdLmxpbms7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtwcm9wcy5kYXRhLnRpdGxlICsgJyB8IFLDqW15IEJldW1pZXInfSBpbWc9e3Byb3BzLmRhdGEuaW1nfSBkZXNjcmlwdGlvbj17cHJvcHMuZGF0YS5pbnRyb30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBuYXJyb3cgb3Zlci14LWhcIj4gXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT57cHJvcHMuZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGEuaW1nfSBhbHQ9e3Byb3BzLmRhdGEudGl0bGV9IGNsYXNzTmFtZT1cInBvc3RfX2ltZyBtYi01XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RfX2RhdGUgcGItNVwiPntkYXRlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudCBtYi01XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cHJvcHMuZGF0YS5jb250ZW50fX0vPlxuICAgICAgICAgICAgey8qIFRPRE86IGFkZCBuZXh0L3ByZXZpb3VzIHBvc3QgbGluayAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25leHRMaW5rfT48YSBjbGFzc05hbWU9XCJidG4gbWItMiBtci0yXCI+TmV4dCBibG9nIHBvc3Q8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYmxvZyc+PGEgY2xhc3NOYW1lPVwiYnRuXCI+QmFjayB0byBibG9nIGxpc3Rpbmc8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcbiAgbGV0IG5leHQgPSBhd2FpdCBnZXRBbGxQb3N0cygpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBuZXh0LFxuICAgICAgZGF0YTogYXdhaXQgZ2V0UG9zdEJ5U2x1Zyhjb250ZXh0LnBhcmFtcy5zbHVnKVxuICAgIH0sXG4gICAgICAvLyBwcm9wczogYXdhaXQgZ2V0UG9zdEJ5U2x1Zyhjb250ZXh0LnBhcmFtcy5zbHVnKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICBsZXQgcGF0aHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpXG4gIHBhdGhzID0gcGF0aHMubWFwKHBvc3QgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1Zzpwb3N0LnNsdWcgfVxuICB9KSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==