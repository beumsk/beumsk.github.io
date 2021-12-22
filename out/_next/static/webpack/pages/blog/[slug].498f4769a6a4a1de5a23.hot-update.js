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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicBlogPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\blog\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function DynamicBlogPost(props) {
  var _props$posts;

  var date = props.data.date === '' ? 'No date' : new Date(props.data.date).getDate() + '.' + (new Date(props.data.date).getMonth() + 1) + '.' + new Date(props.data.date).getFullYear();
  var nextLink = ((_props$posts = props.posts[props.posts.findIndex(function (x) {
    return x.title === props.data.title;
  }) + 1]) === null || _props$posts === void 0 ? void 0 : _props$posts.link) || props.posts[0].link;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.data.title + ' | Blog | Rémy Beumier',
    img: props.data.img,
    description: props.data.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container narrow",
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
    className: "mb-8",
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
_c = DynamicBlogPost;

var _c;

$RefreshReg$(_c, "DynamicBlogPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsiRHluYW1pY0Jsb2dQb3N0IiwicHJvcHMiLCJkYXRlIiwiZGF0YSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm5leHRMaW5rIiwicG9zdHMiLCJmaW5kSW5kZXgiLCJ4IiwidGl0bGUiLCJsaW5rIiwiaW1nIiwiaW50cm8iLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQStCO0FBQUE7O0FBQzVDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdELElBQVgsS0FBb0IsRUFBcEIsR0FBeUIsU0FBekIsR0FDVCxJQUFJRSxJQUFKLENBQVNILEtBQUssQ0FBQ0UsSUFBTixDQUFXRCxJQUFwQixFQUEwQkcsT0FBMUIsS0FBc0MsR0FBdEMsSUFDQyxJQUFJRCxJQUFKLENBQVNILEtBQUssQ0FBQ0UsSUFBTixDQUFXRCxJQUFwQixFQUEwQkksUUFBMUIsS0FBcUMsQ0FEdEMsSUFDMkMsR0FEM0MsR0FFQSxJQUFJRixJQUFKLENBQVNILEtBQUssQ0FBQ0UsSUFBTixDQUFXRCxJQUFwQixFQUEwQkssV0FBMUIsRUFISjtBQUtBLE1BQU1DLFFBQVEsR0FBRyxpQkFBQVAsS0FBSyxDQUFDUSxLQUFOLENBQWFSLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxTQUFaLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEtBQUYsS0FBWVgsS0FBSyxDQUFDRSxJQUFOLENBQVdTLEtBQTlCO0FBQUEsR0FBdEIsQ0FBRCxHQUE2RCxDQUF6RSwrREFBNkVDLElBQTdFLEtBQ1paLEtBQUssQ0FBQ1EsS0FBTixDQUFZLENBQVosRUFBZUksSUFEcEI7QUFHQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVaLEtBQUssQ0FBQ0UsSUFBTixDQUFXUyxLQUFYLEdBQW1CLHdCQUFsQztBQUE0RCxPQUFHLEVBQUVYLEtBQUssQ0FBQ0UsSUFBTixDQUFXVyxHQUE1RTtBQUFpRixlQUFXLEVBQUViLEtBQUssQ0FBQ0UsSUFBTixDQUFXWSxLQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssZ0JBQVMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS2QsS0FBSyxDQUFDRSxJQUFOLENBQVdTLEtBQWhCLENBREYsRUFFRTtBQUFLLE9BQUcsRUFBRVgsS0FBSyxDQUFDRSxJQUFOLENBQVdXLEdBQXJCO0FBQTBCLE9BQUcsRUFBRWIsS0FBSyxDQUFDRSxJQUFOLENBQVdTLEtBQTFDO0FBQWlELGFBQVMsRUFBQyxnQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1YsSUFBaEMsQ0FIRixFQUlFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQW9DLDJCQUF1QixFQUFFO0FBQUNjLFlBQU0sRUFBQ2YsS0FBSyxDQUFDRSxJQUFOLENBQVdjO0FBQW5CLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQU1FO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVULFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQjtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXRCLENBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFHLGFBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQW5CLENBRkYsQ0FORixDQURGLENBREYsQ0FERixDQURGO0FBbUJEO0tBNUJ1QlIsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS40OThmNDc2OWE2YTRhMWRlNWEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gXCJAYXBpXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY0Jsb2dQb3N0KHByb3BzKXtcbiAgY29uc3QgZGF0ZSA9IHByb3BzLmRhdGEuZGF0ZSA9PT0gJycgPyAnTm8gZGF0ZScgXG4gICAgOiBuZXcgRGF0ZShwcm9wcy5kYXRhLmRhdGUpLmdldERhdGUoKSArICcuJyBcbiAgICArIChuZXcgRGF0ZShwcm9wcy5kYXRhLmRhdGUpLmdldE1vbnRoKCkrMSkgKyAnLicgXG4gICAgKyBuZXcgRGF0ZShwcm9wcy5kYXRhLmRhdGUpLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgbmV4dExpbmsgPSBwcm9wcy5wb3N0c1socHJvcHMucG9zdHMuZmluZEluZGV4KCh4KSA9PiB4LnRpdGxlID09PSBwcm9wcy5kYXRhLnRpdGxlKSkrMV0/LmxpbmsgXG4gICAgfHwgcHJvcHMucG9zdHNbMF0ubGluaztcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3Byb3BzLmRhdGEudGl0bGUgKyAnIHwgQmxvZyB8IFLDqW15IEJldW1pZXInfSBpbWc9e3Byb3BzLmRhdGEuaW1nfSBkZXNjcmlwdGlvbj17cHJvcHMuZGF0YS5pbnRyb30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBuYXJyb3dcIj4gXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT57cHJvcHMuZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGEuaW1nfSBhbHQ9e3Byb3BzLmRhdGEudGl0bGV9IGNsYXNzTmFtZT1cInBvc3RfX2ltZyBtYi01XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RfX2RhdGUgcGItNVwiPntkYXRlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudCBtYi01XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cHJvcHMuZGF0YS5jb250ZW50fX0vPlxuICAgICAgICAgICAgey8qIFRPRE86IGFkZCBuZXh0L3ByZXZpb3VzIHBvc3QgbGluayAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtuZXh0TGlua30+PGEgY2xhc3NOYW1lPVwiYnRuIG1iLTIgbXItMlwiPk5leHQgYmxvZyBwb3N0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Jsb2cnPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gYmxvZyBsaXN0aW5nPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XG4gIGxldCBuZXh0ID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogbmV4dCxcbiAgICAgIGRhdGE6IGF3YWl0IGdldFBvc3RCeVNsdWcoY29udGV4dC5wYXJhbXMuc2x1ZylcbiAgICB9LFxuICAgICAgLy8gcHJvcHM6IGF3YWl0IGdldFBvc3RCeVNsdWcoY29udGV4dC5wYXJhbXMuc2x1ZylcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgbGV0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKVxuICBwYXRocyA9IHBhdGhzLm1hcChwb3N0ID0+ICh7XG4gICAgcGFyYW1zOiB7IHNsdWc6cG9zdC5zbHVnIH1cbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=