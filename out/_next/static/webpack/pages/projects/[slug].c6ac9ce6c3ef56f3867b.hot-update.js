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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicProject; });
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
function DynamicProject(props) {
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
    title: slugTitle + ' | Projects | Rémy Beumier',
    description: proj.intro,
    img: 'https://beumsk.github.io' + proj.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    "data-aos": "fade-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, slugTitle), __jsx("p", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, proj.intro), proj.tech.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Technologies"), __jsx("ul", {
    className: "pl-0 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, proj.tech.map(function (x, i) {
    return __jsx(Tech, {
      key: i,
      name: x,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 42
      }
    });
  }))), proj.chall.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, proj.chall.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 43
      }
    }, x);
  }))), !isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pen: proj.pen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://github.com/beumsk/" + proj.title,
    target: "_blank",
    className: "btn mb-4 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: ((_personal = personal[personal.indexOf(proj) + 1]) === null || _personal === void 0 ? void 0 : _personal.link) || personal[0].link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn mb-4 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Next project")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 40
    }
  }, "Back to projects")))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, proj.current && __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn mb-4 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 34
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn mb-4 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 31
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: ((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn mb-4 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "Next project")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 40
    }
  }, "Back to projects")))))));
}

_s(DynamicProject, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = DynamicProject;

var _c, _c2;

$RefreshReg$(_c, "Tech");
$RefreshReg$(_c2, "DynamicProject");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlRlY2giLCJwcm9wcyIsIm5hbWUiLCJEeW5hbWljUHJvamVjdCIsInBlcnNvbmFsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicHJvZmVzc2lvbmFsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicHJvaiIsImZpbmRJbmRleCIsInRpdGxlIiwiaXNQcm8iLCJzbHVnVGl0bGUiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImludHJvIiwiaW1nIiwidGVjaCIsImxlbmd0aCIsIm1hcCIsImkiLCJjaGFsbCIsImluZGV4T2YiLCJsaW5rIiwic2NyZWVuIiwiY3VycmVudCIsInBhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLElBQU4sS0FBZSxNQUFmLElBQXlCLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDVCLEVBRUdELEtBQUssQ0FBQ0MsSUFBTixLQUFlLEtBQWYsSUFBd0IsTUFBQyxxREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGM0IsRUFHR0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixJQUF1QixNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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ZWN0cy9bc2x1Z10uYzZhYzljZTZjM2VmNTZmMzg2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgQ29kZXBlbiBmcm9tICdjb21wb25lbnRzL2NvZGVwZW4nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICdAZGF0YS9wcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFNpSHRtbDUsIFNpQ3NzMywgU2lKYXZhc2NyaXB0LCBTaUpxdWVyeSwgU2lCb290c3RyYXAsIFNpU2FzcywgU2lBbmd1bGFyLCBTaVJlYWN0LCBTaUNzaGFycCwgU2lVbWJyYWNvIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xyXG5cclxuY29uc3QgVGVjaCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwidGVjaFwiPlxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0hUTUwnICYmIDxTaUh0bWw1IGNvbG9yPVwiI0U0NEQyNlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0NTUycgJiYgPFNpQ3NzMyBjb2xvcj1cIiMxNTcyQjZcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdKUycgJiYgPFNpSmF2YXNjcmlwdCBjb2xvcj1cIiNGMERCNEZcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdqUXVlcnknICYmIDxTaUpxdWVyeSBjb2xvcj1cIiMwODY4QUNcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdCb290c3RyYXAnICYmIDxTaUJvb3RzdHJhcCBjb2xvcj1cIiM1QjQyODJcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdTYXNzJyAmJiA8U2lTYXNzIGNvbG9yPVwiI0NGNjQ5QVwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0FuZ3VsYXInICYmIDxTaUFuZ3VsYXIgY29sb3I9XCIjQTYxMjBEXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnUmVhY3QnICYmIDxTaVJlYWN0IGNvbG9yPVwiIzYxREJGQlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0MjJyAmJiA8U2lDc2hhcnAgY29sb3I9XCIjMzkwMDkyXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnVW1icmFjbycgJiYgPFNpVW1icmFjbyBjb2xvcj1cIiMzNTQ0YjFcIiAvPn1cclxuICAgICAgPHNwYW4+e3Byb3BzLm5hbWV9PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNQcm9qZWN0KHByb3BzKSB7XHJcbiAgY29uc3QgcGVyc29uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbilcclxuICBjb25zdCBwcm9mZXNzaW9uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuICBjb25zdCBwcm9qID0gcHJvamVjdHNbcHJvamVjdHMuZmluZEluZGV4KHggPT4geC50aXRsZSA9PT0gc2x1ZyldXHJcbiAgY29uc3QgaXNQcm8gPSAhcHJvai5wZW47XHJcbiAgbGV0IHNsdWdUaXRsZSA9IHByb2oudGl0bGUucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcbiAgc2x1Z1RpdGxlID0gc2x1Z1RpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc2x1Z1RpdGxlLnNsaWNlKDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17c2x1Z1RpdGxlICsgJyB8IFByb2plY3RzIHwgUsOpbXkgQmV1bWllcid9IGRlc2NyaXB0aW9uPXtwcm9qLmludHJvfSBpbWc9eydodHRwczovL2JldW1zay5naXRodWIuaW8nICsgcHJvai5pbWd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cclxuICAgICAgICAgIDxoMT57c2x1Z1RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+e3Byb2ouaW50cm99PC9wPlxyXG5cclxuICAgICAgICAgIHtwcm9qLnRlY2gubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyPlRlY2hub2xvZ2llczwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLTAgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2oudGVjaC5tYXAoKHgsIGkpID0+IDxUZWNoIGtleT17aX0gbmFtZT17eH0vPil9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtwcm9qLmNoYWxsLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxoMj5DaGFsbGVuZ2VzLCBrZXkgbGVzc29uczwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qLmNoYWxsLm1hcCgoeCwgaSkgPT4gPGxpIGtleT17aX0+e3h9PC9saT4pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7IWlzUHJvICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q29kZXBlbiBwZW49e3Byb2oucGVufSAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2JldW1zay9cIiArIHByb2oudGl0bGV9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi00IG1yLTRcIj5HaXRodWIgcmVwb3NpdG9yeTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwZXJzb25hbFtwZXJzb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcGVyc29uYWxbMF0ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBtYi00IG1yLTRcIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gcHJvamVjdHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtpc1BybyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge3Byb2ouc2NyZWVuICYmIChcclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvai5zY3JlZW59IGFsdD17XCJTY3JlZW5zaG90IG9mIFwiICsgcHJvai5jdXJyZW50fSBjbGFzc05hbWU9XCJzY3JvbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvai5jdXJyZW50ICYmIDxhIGhyZWY9e3Byb2ouY3VycmVudH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIG1iLTQgbXItNFwiPkxpdmUgd2Vic2l0ZTwvYT59XHJcbiAgICAgICAgICAgICAgICB7cHJvai5wYXN0ICYmIDxhIGhyZWY9e3Byb2oucGFzdH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIG1iLTQgbXItNFwiPlNpdGUgYXMgSSBsZWZ0IGl0PC9hPn1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZmVzc2lvbmFsW3Byb2Zlc3Npb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcHJvZmVzc2lvbmFsWzBdLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gbWItNCBtci00XCI+TmV4dCBwcm9qZWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48YSBjbGFzc05hbWU9XCJidG5cIj5CYWNrIHRvIHByb2plY3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gcHJvamVjdHMubWFwKHggPT4geC50aXRsZSk7XHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdCB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==