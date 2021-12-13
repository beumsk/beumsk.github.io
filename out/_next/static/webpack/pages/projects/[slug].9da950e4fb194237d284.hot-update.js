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
    title: slugTitle + ' | Rémy Beumier',
    description: proj.intro,
    img: proj.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    "data-aos": "fade-left",
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
    className: "mb-4",
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
    className: "pl-0 mb-3",
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
    className: "btn mb-2 mr-2",
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
    className: "btn mb-2 mr-2",
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
    className: "btn mb-2 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 30
    }
  }, "Live website"), proj.past && __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn mb-2 mr-2",
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
    className: "btn mb-2 mr-2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlRlY2giLCJwcm9wcyIsIm5hbWUiLCJEeW5hbWljUGFnZSIsInBlcnNvbmFsIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwicHJvZmVzc2lvbmFsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwicHJvaiIsImZpbmRJbmRleCIsInRpdGxlIiwiaXNQcm8iLCJzbHVnVGl0bGUiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImludHJvIiwiaW1nIiwidGVjaCIsImxlbmd0aCIsIm1hcCIsImkiLCJjaGFsbCIsImluZGV4T2YiLCJsaW5rIiwic2NyZWVuIiwiY3VycmVudCIsInBhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLElBQU4sS0FBZSxNQUFmLElBQXlCLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDVCLEVBRUdELEtBQUssQ0FBQ0MsSUFBTixLQUFlLEtBQWYsSUFBd0IsTUFBQyxxREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGM0IsRUFHR0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixJQUF1QixNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFI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LFFBQTNCO0FBQW9DLGFBQVMsRUFBQyxlQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJoQixFQVVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsT0FBTyxrQkFBQXpCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDcUIsT0FBYixDQUFxQmhCLElBQXJCLElBQTZCLENBQTlCLENBQVosZ0VBQThDaUIsSUFBOUMsS0FBc0R0QixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCc0IsSUFBN0UsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBVkYsQ0FuQ0osRUFtREUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF2QixDQW5ERixDQURGLENBREY7QUF5REQ7O0dBbkV1QjVCLFc7VUFHUFEscUQ7OztNQUhPUixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS45ZGE5NTBlNGZiMTk0MjM3ZDI4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBDb2RlcGVuIGZyb20gJ2NvbXBvbmVudHMvY29kZXBlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU2lIdG1sNSwgU2lDc3MzLCBTaUphdmFzY3JpcHQsIFNpSnF1ZXJ5LCBTaUJvb3RzdHJhcCwgU2lTYXNzLCBTaUFuZ3VsYXIsIFNpUmVhY3QsIFNpQ3NoYXJwLCBTaVVtYnJhY28gfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XHJcblxyXG5jb25zdCBUZWNoID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJ0ZWNoXCI+XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnSFRNTCcgJiYgPFNpSHRtbDUgY29sb3I9XCIjRTQ0RDI2XCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQ1NTJyAmJiA8U2lDc3MzIGNvbG9yPVwiIzE1NzJCNlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0pTJyAmJiA8U2lKYXZhc2NyaXB0IGNvbG9yPVwiI0YwREI0RlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ2pRdWVyeScgJiYgPFNpSnF1ZXJ5IGNvbG9yPVwiIzA4NjhBQ1wiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ0Jvb3RzdHJhcCcgJiYgPFNpQm9vdHN0cmFwIGNvbG9yPVwiIzVCNDI4MlwiIC8+fVxyXG4gICAgICB7cHJvcHMubmFtZSA9PT0gJ1Nhc3MnICYmIDxTaVNhc3MgY29sb3I9XCIjQ0Y2NDlBXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQW5ndWxhcicgJiYgPFNpQW5ndWxhciBjb2xvcj1cIiNBNjEyMERcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdSZWFjdCcgJiYgPFNpUmVhY3QgY29sb3I9XCIjNjFEQkZCXCIgLz59XHJcbiAgICAgIHtwcm9wcy5uYW1lID09PSAnQyMnICYmIDxTaUNzaGFycCBjb2xvcj1cIiMzOTAwOTJcIiAvPn1cclxuICAgICAge3Byb3BzLm5hbWUgPT09ICdVbWJyYWNvJyAmJiA8U2lVbWJyYWNvIGNvbG9yPVwiIzM1NDRiMVwiIC8+fVxyXG4gICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBwZXJzb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKVxyXG4gIGNvbnN0IHByb2Zlc3Npb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbilcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuc2x1Z1xyXG4gIGNvbnN0IHByb2ogPSBwcm9qZWN0c1twcm9qZWN0cy5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSBzbHVnKV1cclxuICBjb25zdCBpc1BybyA9ICFwcm9qLnBlbjtcclxuICBsZXQgc2x1Z1RpdGxlID0gcHJvai50aXRsZS5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxuICBzbHVnVGl0bGUgPSBzbHVnVGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzbHVnVGl0bGUuc2xpY2UoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtzbHVnVGl0bGUgKyAnIHwgUsOpbXkgQmV1bWllcid9IGRlc2NyaXB0aW9uPXtwcm9qLmludHJvfSBpbWc9e3Byb2ouaW1nfT4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiPlxyXG4gICAgICAgIDxoMT57c2x1Z1RpdGxlfTwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntwcm9qLmludHJvfTwvcD5cclxuXHJcbiAgICAgICAge3Byb2oudGVjaC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5UZWNobm9sb2dpZXM8L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAge3Byb2oudGVjaC5tYXAoKHgsIGkpID0+IDxUZWNoIGtleT17aX0gbmFtZT17eH0vPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7cHJvai5jaGFsbC5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5DaGFsbGVuZ2VzLCBrZXkgbGVzc29uczwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7cHJvai5jaGFsbC5tYXAoKHgsIGkpID0+IDxsaSBrZXk9e2l9Pnt4fTwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshaXNQcm8gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvZGVwZW4gcGVuPXtwcm9qLnBlbn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9naXRodWIuY29tL2JldW1zay9cIiArIHByb2oudGl0bGV9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5HaXRodWIgcmVwb3NpdG9yeTwvYT5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChwZXJzb25hbFtwZXJzb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcGVyc29uYWxbMF0ubGluayl9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAge2lzUHJvICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9qLnNjcmVlbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvai5zY3JlZW59IGFsdD17XCJTY3JlZW5zaG90IG9mIFwiICsgcHJvai5jdXJyZW50fSBjbGFzc05hbWU9XCJzY3JvbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3Byb2ouY3VycmVudCAmJiA8YSBocmVmPXtwcm9qLmN1cnJlbnR9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5MaXZlIHdlYnNpdGU8L2E+fVxyXG4gICAgICAgICAgICB7cHJvai5wYXN0ICYmIDxhIGhyZWY9e3Byb2oucGFzdH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIG1iLTIgbXItMlwiPlNpdGUgYXMgSSBsZWZ0IGl0PC9hPn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIChwcm9mZXNzaW9uYWxbcHJvZmVzc2lvbmFsLmluZGV4T2YocHJvaikgKyAxXT8ubGluayB8fCBwcm9mZXNzaW9uYWxbMF0ubGluayl9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBtYi0yIG1yLTJcIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gcHJvamVjdHM8L2E+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gcHJvamVjdHMubWFwKHggPT4geC50aXRsZSk7XHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdCB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==