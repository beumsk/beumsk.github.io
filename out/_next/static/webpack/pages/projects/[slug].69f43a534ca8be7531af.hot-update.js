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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var components_codepen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/codepen */ "./components/codepen.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Tech = function Tech(props) {
  return __jsx("li", {
    className: "tech",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.name === 'HTML' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiHtml5"], {
    color: "#E44D26",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 33
    }
  }), props.name === 'CSS' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiCss3"], {
    color: "#1572B6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 32
    }
  }), props.name === 'JS' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiJavascript"], {
    color: "#F0DB4F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 31
    }
  }), props.name === 'jQuery' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiJquery"], {
    color: "#0868AC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 35
    }
  }), props.name === 'Bootstrap' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiBootstrap"], {
    color: "#5B4282",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 38
    }
  }), props.name === 'Sass' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiSass"], {
    color: "#CF649A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), props.name === 'Angular' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiAngular"], {
    color: "#A6120D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 36
    }
  }), props.name === 'React' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiReact"], {
    color: "#61DBFB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 34
    }
  }), props.name === 'C#' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiCsharp"], {
    color: "#390092",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 31
    }
  }), props.name === 'Umbraco' && __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_6__["SiUmbraco"], {
    color: "#3544b1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 36
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.name));
};

_c = Tech;
var __N_SSG = true;
function DynamicPage(props) {
  _s();

  var _this2 = this,
      _personal,
      _professional;

  var personal = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].filter(function (x) {
    return x.pen;
  });
  var professional = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].filter(function (x) {
    return !x.pen;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var slug = router.query.slug;
  var proj = _data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"][_data_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].findIndex(function (x) {
    return x.title === slug;
  })];
  var isPro = !proj.pen;
  var slugTitle = proj.title.replace(/-/g, " ");
  slugTitle = slugTitle.charAt(0).toUpperCase() + slugTitle.slice(1);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: slugTitle,
    description: proj.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    "data-aos": "fade-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, slugTitle), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, proj.intro), proj.tech.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Technologies"), __jsx("ul", {
    style: {
      paddingLeft: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, proj.tech.map(function (x, i) {
    return __jsx(Tech, {
      key: i,
      name: x,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 40
      }
    });
  }))), proj.chall.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, proj.chall.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 41
      }
    }, x);
  }))), !isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pen: proj.pen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "https://github.com/beumsk/" + proj.title,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/' + (((_personal = personal[personal.indexOf(proj) + 1]) === null || _personal === void 0 ? void 0 : _personal.link) || personal[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Next project"))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), proj.current && __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 30
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/' + (((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Next project"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 32
    }
  }, "Back to projects"))));
}

_s(DynamicPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = DynamicPage;

var _c, _c2;

$RefreshReg$(_c, "Tech");
$RefreshReg$(_c2, "DynamicPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlRlY2giLCJwcm9wcyIsIm5hbWUiLCJEeW5hbWljUGFnZSIsInBlcnNvbmFsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicHJvZmVzc2lvbmFsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicHJvaiIsImZpbmRJbmRleCIsInRpdGxlIiwiaXNQcm8iLCJzbHVnVGl0bGUiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImludHJvIiwidGVjaCIsImxlbmd0aCIsInBhZGRpbmdMZWZ0IiwibWFwIiwiaSIsImNoYWxsIiwiaW5kZXhPZiIsImxpbmsiLCJzY3JlZW4iLCJjdXJyZW50IiwicGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BQWYsSUFBeUIsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFENUIsRUFFR0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsS0FBZixJQUF3QixNQUFDLHFEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUYzQixFQUdHRCxLQUFLLENBQUNDLElBQU4sS0FBZSxJQUFmLElBQXVCLE1BQUMsMkRBQUQ7QUFBYyxTQUFLLEVBQUMsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSaEIsRUFVRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQU8sa0JBQUF6QixZQUFZLENBQUNBLFlBQVksQ0FBQ3FCLE9BQWIsQ0FBcUJoQixJQUFyQixJQUE2QixDQUE5QixDQUFaLGdFQUE4Q2lCLElBQTlDLEtBQXNEdEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQnNCLElBQTdFLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVZGLENBbkNKLEVBbURFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdkIsQ0FuREYsQ0FERixDQURGO0FBeUREOztHQW5FdUI1QixXO1VBR1BRLHFEOzs7TUFIT1IsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uNjlmNDNhNTM0Y2E4YmU3NTMxYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgQ29kZXBlbiBmcm9tICdjb21wb25lbnRzL2NvZGVwZW4nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICdAZGF0YS9wcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFNpSHRtbDUsIFNpQ3NzMywgU2lKYXZhc2NyaXB0LCBTaUpxdWVyeSwgU2lCb290c3RyYXAsIFNpU2FzcywgU2lBbmd1bGFyLCBTaVJlYWN0LCBTaUNzaGFycCwgU2lVbWJyYWNvIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xyXG5cclxuY29uc3QgVGVjaCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwidGVjaFwiPlxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0hUTUwnICYmIDxTaUh0bWw1IGNvbG9yPVwiI0U0NEQyNlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0NTUycgJiYgPFNpQ3NzMyBjb2xvcj1cIiMxNTcyQjZcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdKUycgJiYgPFNpSmF2YXNjcmlwdCBjb2xvcj1cIiNGMERCNEZcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdqUXVlcnknICYmIDxTaUpxdWVyeSBjb2xvcj1cIiMwODY4QUNcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdCb290c3RyYXAnICYmIDxTaUJvb3RzdHJhcCBjb2xvcj1cIiM1QjQyODJcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdTYXNzJyAmJiA8U2lTYXNzIGNvbG9yPVwiI0NGNjQ5QVwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0FuZ3VsYXInICYmIDxTaUFuZ3VsYXIgY29sb3I9XCIjQTYxMjBEXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnUmVhY3QnICYmIDxTaVJlYWN0IGNvbG9yPVwiIzYxREJGQlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0MjJyAmJiA8U2lDc2hhcnAgY29sb3I9XCIjMzkwMDkyXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnVW1icmFjbycgJiYgPFNpVW1icmFjbyBjb2xvcj1cIiMzNTQ0YjFcIiAvPn1cclxuICAgICAgPHNwYW4+e3Byb3BzLm5hbWV9PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgcGVyc29uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbilcclxuICBjb25zdCBwcm9mZXNzaW9uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuICBjb25zdCBwcm9qID0gcHJvamVjdHNbcHJvamVjdHMuZmluZEluZGV4KHggPT4geC50aXRsZSA9PT0gc2x1ZyldXHJcbiAgY29uc3QgaXNQcm8gPSAhcHJvai5wZW47XHJcbiAgbGV0IHNsdWdUaXRsZSA9IHByb2oudGl0bGUucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcbiAgc2x1Z1RpdGxlID0gc2x1Z1RpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc2x1Z1RpdGxlLnNsaWNlKDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17c2x1Z1RpdGxlfSBkZXNjcmlwdGlvbj17cHJvai5pbnRyb30+ICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCI+XHJcbiAgICAgICAgPGgxPntzbHVnVGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57cHJvai5pbnRyb308L3A+XHJcblxyXG4gICAgICAgIHtwcm9qLnRlY2gubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+VGVjaG5vbG9naWVzPC9oMj5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICB7cHJvai50ZWNoLm1hcCgoeCwgaSkgPT4gPFRlY2gga2V5PXtpfSBuYW1lPXt4fS8+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtwcm9qLmNoYWxsLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPkNoYWxsZW5nZXMsIGtleSBsZXNzb25zPC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtwcm9qLmNoYWxsLm1hcCgoeCwgaSkgPT4gPGxpIGtleT17aX0+e3h9PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyFpc1BybyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q29kZXBlbiBwZW49e3Byb2oucGVufSAvPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vYmV1bXNrL1wiICsgcHJvai50aXRsZX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+R2l0aHViIHJlcG9zaXRvcnk8L2E+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyAocGVyc29uYWxbcGVyc29uYWwuaW5kZXhPZihwcm9qKSArIDFdPy5saW5rIHx8IHBlcnNvbmFsWzBdLmxpbmspfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAge2lzUHJvICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9qLnNjcmVlbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvai5zY3JlZW59IGFsdD17XCJTY3JlZW5zaG90IG9mIFwiICsgcHJvai5jdXJyZW50fSBjbGFzc05hbWU9XCJzY3JvbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3Byb2ouY3VycmVudCAmJiA8YSBocmVmPXtwcm9qLmN1cnJlbnR9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPkxpdmUgd2Vic2l0ZTwvYT59XHJcbiAgICAgICAgICAgIHtwcm9qLnBhc3QgJiYgPGEgaHJlZj17cHJvai5wYXN0fSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj5TaXRlIGFzIEkgbGVmdCBpdDwvYT59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyAocHJvZmVzc2lvbmFsW3Byb2Zlc3Npb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcHJvZmVzc2lvbmFsWzBdLmxpbmspfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gcHJvamVjdHM8L2E+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gcHJvamVjdHMubWFwKHggPT4geC50aXRsZSk7XHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdCB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==