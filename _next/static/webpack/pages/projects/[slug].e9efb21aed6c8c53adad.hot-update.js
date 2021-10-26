webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/default */ "./components/default.js");
/* harmony import */ var components_codepen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/codepen */ "./components/codepen.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\[slug].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var __N_SSG = true;
function DynamicPage(props) {
  _s();

  var _this = this,
      _personal,
      _professional;

  var personal = _data_projects__WEBPACK_IMPORTED_MODULE_5__["projects"].filter(function (x) {
    return x.pen;
  });
  var professional = _data_projects__WEBPACK_IMPORTED_MODULE_5__["projects"].filter(function (x) {
    return !x.pen;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var slug = router.query.slug;
  var proj = _data_projects__WEBPACK_IMPORTED_MODULE_5__["projects"][_data_projects__WEBPACK_IMPORTED_MODULE_5__["projects"].findIndex(function (x) {
    return x.title === slug;
  })];
  var isPro = !proj.pen;
  var slugTitle = proj.title.replace("-", " ").toUpperCase();
  return __jsx(components_default__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, slugTitle), __jsx("meta", {
    name: "description",
    content: proj.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, slugTitle), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, proj.intro), proj.tech.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Technologies"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, proj.tech.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 40
      }
    }, x);
  }))), proj.chall.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, proj.chall.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 41
      }
    }, x);
  }))), !isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pen: proj.pen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "https://github.com/beumsk/" + proj.title,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/' + (((_personal = personal[personal.indexOf(proj) + 1]) === null || _personal === void 0 ? void 0 : _personal.link) || personal[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Next project"))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), proj.current && __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 30
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 27
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/' + (((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Next project"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 32
    }
  }, "Back to projects"))));
}

_s(DynamicPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = DynamicPage;

var _c;

$RefreshReg$(_c, "DynamicPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkR5bmFtaWNQYWdlIiwicHJvcHMiLCJwZXJzb25hbCIsInByb2plY3RzIiwiZmlsdGVyIiwieCIsInBlbiIsInByb2Zlc3Npb25hbCIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsInByb2oiLCJmaW5kSW5kZXgiLCJ0aXRsZSIsImlzUHJvIiwic2x1Z1RpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiaW50cm8iLCJ0ZWNoIiwibGVuZ3RoIiwibWFwIiwiaSIsImNoYWxsIiwiaW5kZXhPZiIsImxpbmsiLCJzY3JlZW4iLCJjdXJyZW50IiwicGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQ3pDLE1BQU1DLFFBQVEsR0FBR0MsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsSUFBMUI7QUFDQSxNQUFNRSxJQUFJLEdBQUdULHVEQUFRLENBQUNBLHVEQUFRLENBQUNVLFNBQVQsQ0FBbUIsVUFBQVIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1MsS0FBRixLQUFZSixJQUFoQjtBQUFBLEdBQXBCLENBQUQsQ0FBckI7QUFD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QjFCLFc7VUFHUFMscUQ7OztLQUhPVCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS5lOWVmYjIxYWVkNmM4YzUzYWRhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdjb21wb25lbnRzL2RlZmF1bHQnXHJcbmltcG9ydCBDb2RlcGVuIGZyb20gJ2NvbXBvbmVudHMvY29kZXBlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgcGVyc29uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbilcclxuICBjb25zdCBwcm9mZXNzaW9uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuICBjb25zdCBwcm9qID0gcHJvamVjdHNbcHJvamVjdHMuZmluZEluZGV4KHggPT4geC50aXRsZSA9PT0gc2x1ZyldXHJcbiAgY29uc3QgaXNQcm8gPSAhcHJvai5wZW47XHJcbiAgY29uc3Qgc2x1Z1RpdGxlID0gcHJvai50aXRsZS5yZXBsYWNlKFwiLVwiLCBcIiBcIikudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3NsdWdUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9qLmludHJvfSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT57c2x1Z1RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3Byb2ouaW50cm99PC9wPlxyXG5cclxuICAgICAgICB7cHJvai50ZWNoLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPlRlY2hub2xvZ2llczwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7cHJvai50ZWNoLm1hcCgoeCwgaSkgPT4gPGxpIGtleT17aX0+e3h9PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Byb2ouY2hhbGwubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+Q2hhbGxlbmdlcywga2V5IGxlc3NvbnM8L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3Byb2ouY2hhbGwubWFwKCh4LCBpKSA9PiA8bGkga2V5PXtpfT57eH08L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7IWlzUHJvICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb2RlcGVuIHBlbj17cHJvai5wZW59IC8+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXVtc2svXCIgKyBwcm9qLnRpdGxlfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj5HaXRodWIgcmVwb3NpdG9yeTwvYT5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChwZXJzb25hbFtwZXJzb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcGVyc29uYWxbMF0ubGluayl9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPk5leHQgcHJvamVjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICB7aXNQcm8gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb2ouc2NyZWVuICYmIChcclxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qLnNjcmVlbn0gYWx0PXtcIlNjcmVlbnNob3Qgb2YgXCIgKyBwcm9qLmN1cnJlbnR9IGNsYXNzTmFtZT1cInNjcm9sbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7cHJvai5jdXJyZW50ICYmIDxhIGhyZWY9e3Byb2ouY3VycmVudH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+TGl2ZSB3ZWJzaXRlPC9hPn1cclxuICAgICAgICAgICAge3Byb2oucGFzdCAmJiA8YSBocmVmPXtwcm9qLnBhc3R9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPlNpdGUgYXMgSSBsZWZ0IGl0PC9hPn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChwcm9mZXNzaW9uYWxbcHJvZmVzc2lvbmFsLmluZGV4T2YocHJvaikgKyAxXT8ubGluayB8fCBwcm9mZXNzaW9uYWxbMF0ubGluayl9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPk5leHQgcHJvamVjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+PGEgY2xhc3NOYW1lPVwiYnRuXCI+QmFjayB0byBwcm9qZWN0czwvYT48L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EZWZhdWx0TGF5b3V0PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gcHJvamVjdHMubWFwKHggPT4geC50aXRsZSk7XHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdCB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==