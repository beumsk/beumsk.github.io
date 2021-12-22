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
    className: "btn mb-2 mr-2",
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
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Next project")))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, proj.current && __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 34
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 31
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: ((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "Next project")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 34
    }
  }, "Back to projects")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlRlY2giLCJwcm9wcyIsIm5hbWUiLCJEeW5hbWljUHJvamVjdCIsInBlcnNvbmFsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicHJvZmVzc2lvbmFsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicHJvaiIsImZpbmRJbmRleCIsInRpdGxlIiwiaXNQcm8iLCJzbHVnVGl0bGUiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImludHJvIiwiaW1nIiwidGVjaCIsImxlbmd0aCIsIm1hcCIsImkiLCJjaGFsbCIsImluZGV4T2YiLCJsaW5rIiwic2NyZWVuIiwiY3VycmVudCIsInBhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLElBQU4sS0FBZSxNQUFmLElBQXlCLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDVCLEVBRUdELEtBQUssQ0FBQ0MsSUFBTixLQUFlLEtBQWYsSUFBd0IsTUFBQyxxREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGM0IsRUFHR0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixJQUF1QixNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QixJQUFJLENBQUNtQixPQUFkO0FBQXVCLFVBQU0sRUFBQyxRQUE5QjtBQUF1QyxhQUFTLEVBQUMsZUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEbkIsRUFFR25CLElBQUksQ0FBQ29CLElBQUwsSUFBYTtBQUFHLFFBQUksRUFBRXBCLElBQUksQ0FBQ29CLElBQWQ7QUFBb0IsVUFBTSxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBQyxlQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZoQixFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsa0JBQUF6QixZQUFZLENBQUNBLFlBQVksQ0FBQ3FCLE9BQWIsQ0FBcUJoQixJQUFyQixJQUE2QixDQUE5QixDQUFaLGdFQUE4Q2lCLElBQTlDLEtBQXNEdEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQnNCLElBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FKRixDQVBGLENBckNKLEVBdURFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdkIsQ0F2REYsQ0FERixDQURGLENBREY7QUErREQ7O0dBekV1QjVCLGM7VUFHUFEscUQ7OztNQUhPUixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS5lNGI5NTY0Mzk4Yzg4OGMwNDE2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBDb2RlcGVuIGZyb20gJ2NvbXBvbmVudHMvY29kZXBlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU2lIdG1sNSwgU2lDc3MzLCBTaUphdmFzY3JpcHQsIFNpSnF1ZXJ5LCBTaUJvb3RzdHJhcCwgU2lTYXNzLCBTaUFuZ3VsYXIsIFNpUmVhY3QsIFNpQ3NoYXJwLCBTaVVtYnJhY28gfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XHJcblxyXG5jb25zdCBUZWNoID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0ZWNoXCI+XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnSFRNTCcgJiYgPFNpSHRtbDUgY29sb3I9XCIjRTQ0RDI2XCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQ1NTJyAmJiA8U2lDc3MzIGNvbG9yPVwiIzE1NzJCNlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0pTJyAmJiA8U2lKYXZhc2NyaXB0IGNvbG9yPVwiI0YwREI0RlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ2pRdWVyeScgJiYgPFNpSnF1ZXJ5IGNvbG9yPVwiIzA4NjhBQ1wiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0Jvb3RzdHJhcCcgJiYgPFNpQm9vdHN0cmFwIGNvbG9yPVwiIzVCNDI4MlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ1Nhc3MnICYmIDxTaVNhc3MgY29sb3I9XCIjQ0Y2NDlBXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQW5ndWxhcicgJiYgPFNpQW5ndWxhciBjb2xvcj1cIiNBNjEyMERcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdSZWFjdCcgJiYgPFNpUmVhY3QgY29sb3I9XCIjNjFEQkZCXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQyMnICYmIDxTaUNzaGFycCBjb2xvcj1cIiMzOTAwOTJcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdVbWJyYWNvJyAmJiA8U2lVbWJyYWNvIGNvbG9yPVwiIzM1NDRiMVwiIC8+fVxyXG4gICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY1Byb2plY3QocHJvcHMpIHtcclxuICBjb25zdCBwZXJzb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKVxyXG4gIGNvbnN0IHByb2Zlc3Npb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbilcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuc2x1Z1xyXG4gIGNvbnN0IHByb2ogPSBwcm9qZWN0c1twcm9qZWN0cy5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSBzbHVnKV1cclxuICBjb25zdCBpc1BybyA9ICFwcm9qLnBlbjtcclxuICBsZXQgc2x1Z1RpdGxlID0gcHJvai50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxuICBzbHVnVGl0bGUgPSBzbHVnVGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzbHVnVGl0bGUuc2xpY2UoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtzbHVnVGl0bGUgKyAnIHwgUHJvamVjdHMgfCBSw6lteSBCZXVtaWVyJ30gZGVzY3JpcHRpb249e3Byb2ouaW50cm99IGltZz17J2h0dHBzOi8vYmV1bXNrLmdpdGh1Yi5pbycgKyBwcm9qLmltZ30+ICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiPlxyXG4gICAgICAgICAgPGgxPntzbHVnVGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj57cHJvai5pbnRyb308L3A+XHJcblxyXG4gICAgICAgICAge3Byb2oudGVjaC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDI+VGVjaG5vbG9naWVzPC9oMj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtMCBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvai50ZWNoLm1hcCgoeCwgaSkgPT4gPFRlY2gga2V5PXtpfSBuYW1lPXt4fS8+KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Byb2ouY2hhbGwubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyPkNoYWxsZW5nZXMsIGtleSBsZXNzb25zPC9oMj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2ouY2hhbGwubWFwKCh4LCBpKSA9PiA8bGkga2V5PXtpfT57eH08L2xpPil9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHshaXNQcm8gJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDb2RlcGVuIHBlbj17cHJvai5wZW59IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2dpdGh1Yi5jb20vYmV1bXNrL1wiICsgcHJvai50aXRsZX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIG1iLTIgbXItMlwiPkdpdGh1YiByZXBvc2l0b3J5PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BlcnNvbmFsW3BlcnNvbmFsLmluZGV4T2YocHJvaikgKyAxXT8ubGluayB8fCBwZXJzb25hbFswXS5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIG1iLTIgbXItMlwiPk5leHQgcHJvamVjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7aXNQcm8gJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtwcm9qLnNjcmVlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ouc2NyZWVufSBhbHQ9e1wiU2NyZWVuc2hvdCBvZiBcIiArIHByb2ouY3VycmVudH0gY2xhc3NOYW1lPVwic2Nyb2xsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2ouY3VycmVudCAmJiA8YSBocmVmPXtwcm9qLmN1cnJlbnR9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5MaXZlIHdlYnNpdGU8L2E+fVxyXG4gICAgICAgICAgICAgICAge3Byb2oucGFzdCAmJiA8YSBocmVmPXtwcm9qLnBhc3R9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5TaXRlIGFzIEkgbGVmdCBpdDwvYT59XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Zlc3Npb25hbFtwcm9mZXNzaW9uYWwuaW5kZXhPZihwcm9qKSArIDFdPy5saW5rIHx8IHByb2Zlc3Npb25hbFswXS5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIG1iLTIgbXItMlwiPk5leHQgcHJvamVjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+PGEgY2xhc3NOYW1lPVwiYnRuXCI+QmFjayB0byBwcm9qZWN0czwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge31cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBwcm9qZWN0cy5tYXAoeCA9PiB4LnRpdGxlKTtcclxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBzbHVnOiBwb3N0IH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9