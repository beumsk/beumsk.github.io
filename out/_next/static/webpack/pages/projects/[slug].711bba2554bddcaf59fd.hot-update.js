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
  }, proj.intro), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Technologies"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, proj.tech.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 36
      }
    }, x);
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Challenges, key lessons"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, proj.chall.map(function (x, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 37
      }
    }, x);
  })), !isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_codepen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pen: proj.pen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "https://github.com/beumsk/" + proj.title,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Github repository"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/' + (((_personal = personal[personal.indexOf(proj) + 1]) === null || _personal === void 0 ? void 0 : _personal.link) || personal[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Next project"))), isPro && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, proj.screen && __jsx("figure", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: proj.screen,
    alt: "Screenshot of " + proj.current,
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: proj.current,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Live website"), __jsx("a", {
    href: proj.past,
    target: "_blank",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Site as I left it"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/' + (((_professional = professional[professional.indexOf(proj) + 1]) === null || _professional === void 0 ? void 0 : _professional.link) || professional[0].link),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Next project"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkR5bmFtaWNQYWdlIiwicHJvcHMiLCJwZXJzb25hbCIsInByb2plY3RzIiwiZmlsdGVyIiwieCIsInBlbiIsInByb2Zlc3Npb25hbCIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsInByb2oiLCJmaW5kSW5kZXgiLCJ0aXRsZSIsImlzUHJvIiwic2x1Z1RpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiaW50cm8iLCJ0ZWNoIiwibWFwIiwiaSIsImNoYWxsIiwiaW5kZXhPZiIsImxpbmsiLCJzY3JlZW4iLCJjdXJyZW50IiwicGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQ3pDLE1BQU1DLFFBQVEsR0FBR0MsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsSUFBMUI7QUFDQSxNQUFNRSxJQUFJLEdBQUdULHVEQUFRLENBQUNBLHVEQUFRLENBQUNVLFNBQVQsQ0FBbUIsVUFBQVIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1MsS0FBRixLQUFZSixJQUFoQjtBQUFBLEdBQXBCLENBQUQsQ0FBckI7QUFDQSxNQUFNSyxLQUFLLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDTixHQUFwQjtBQUNBLE1BQU1VLFNBQVMsR0FBR0osSUFBSSxDQUFDRSxLQUFMLENBQVdHLE9BQVgsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkJDLFdBQTdCLEVBQWxCO0FBRUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLFNBQVIsQ0FERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFSixJQUFJLENBQUNPLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxTQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLElBQUksQ0FBQ08sS0FBVCxDQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDUSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFDaEIsQ0FBRCxFQUFJaUIsQ0FBSjtBQUFBLFdBQVU7QUFBSSxTQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhakIsQ0FBYixDQUFWO0FBQUEsR0FBZCxDQURILENBTEYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTyxJQUFJLENBQUNXLEtBQUwsQ0FBV0YsR0FBWCxDQUFlLFVBQUNoQixDQUFELEVBQUlpQixDQUFKO0FBQUEsV0FBVTtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFqQixDQUFiLENBQVY7QUFBQSxHQUFmLENBREgsQ0FWRixFQWNHLENBQUNVLEtBQUQsSUFDQyxtRUFDRSxNQUFDLDBEQUFEO0FBQVMsT0FBRyxFQUFFSCxJQUFJLENBQUNOLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQUcsUUFBSSxFQUFFLCtCQUErQk0sSUFBSSxDQUFDRSxLQUE3QztBQUFvRCxVQUFNLEVBQUMsUUFBM0Q7QUFBb0UsYUFBUyxFQUFDLEtBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQU8sY0FBQVosUUFBUSxDQUFDQSxRQUFRLENBQUNzQixPQUFULENBQWlCWixJQUFqQixJQUF5QixDQUExQixDQUFSLHdEQUFzQ2EsSUFBdEMsS0FBOEN2QixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVl1QixJQUFqRSxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FKRixDQWZKLEVBeUJHVixLQUFLLElBQ0osbUVBQ0dILElBQUksQ0FBQ2MsTUFBTCxJQUNDO0FBQVEsYUFBUyxFQUFDLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRWQsSUFBSSxDQUFDYyxNQUFmO0FBQXVCLE9BQUcsRUFBRSxtQkFBbUJkLElBQUksQ0FBQ2UsT0FBcEQ7QUFBNkQsYUFBUyxFQUFDLFFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLEVBT0U7QUFBRyxRQUFJLEVBQUVmLElBQUksQ0FBQ2UsT0FBZDtBQUF1QixVQUFNLEVBQUMsUUFBOUI7QUFBdUMsYUFBUyxFQUFDLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsRUFRRTtBQUFHLFFBQUksRUFBRWYsSUFBSSxDQUFDZ0IsSUFBZDtBQUFvQixVQUFNLEVBQUMsUUFBM0I7QUFBb0MsYUFBUyxFQUFDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkYsRUFTRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQU8sa0JBQUFyQixZQUFZLENBQUNBLFlBQVksQ0FBQ2lCLE9BQWIsQ0FBcUJaLElBQXJCLElBQTZCLENBQTlCLENBQVosZ0VBQThDYSxJQUE5QyxLQUFzRGxCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JrQixJQUE3RSxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FURixDQTFCSixFQXlDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFHLGFBQVMsRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXZCLENBekNGLENBTkYsQ0FERjtBQW9ERDs7R0E3RHVCekIsVztVQUdQUyxxRDs7O0tBSE9ULFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3NsdWddLjcxMWJiYTI1NTRiZGRjYWY1OWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvZGVmYXVsdCdcclxuaW1wb3J0IENvZGVwZW4gZnJvbSAnY29tcG9uZW50cy9jb2RlcGVuJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnQGRhdGEvcHJvamVjdHMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBwZXJzb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKVxyXG4gIGNvbnN0IHByb2Zlc3Npb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbilcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuc2x1Z1xyXG4gIGNvbnN0IHByb2ogPSBwcm9qZWN0c1twcm9qZWN0cy5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSBzbHVnKV1cclxuICBjb25zdCBpc1BybyA9ICFwcm9qLnBlbjtcclxuICBjb25zdCBzbHVnVGl0bGUgPSBwcm9qLnRpdGxlLnJlcGxhY2UoXCItXCIsIFwiIFwiKS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERlZmF1bHRMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57c2x1Z1RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb2ouaW50cm99IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPntzbHVnVGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57cHJvai5pbnRyb308L3A+XHJcblxyXG4gICAgICAgIDxoMj5UZWNobm9sb2dpZXM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtwcm9qLnRlY2gubWFwKCh4LCBpKSA9PiA8bGkga2V5PXtpfT57eH08L2xpPil9XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPGgyPkNoYWxsZW5nZXMsIGtleSBsZXNzb25zPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7cHJvai5jaGFsbC5tYXAoKHgsIGkpID0+IDxsaSBrZXk9e2l9Pnt4fTwvbGk+KX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICB7IWlzUHJvICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb2RlcGVuIHBlbj17cHJvai5wZW59IC8+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXVtc2svXCIgKyBwcm9qLnRpdGxlfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj5HaXRodWIgcmVwb3NpdG9yeTwvYT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKHBlcnNvbmFsW3BlcnNvbmFsLmluZGV4T2YocHJvaikgKyAxXT8ubGluayB8fCBwZXJzb25hbFswXS5saW5rKX0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCI+TmV4dCBwcm9qZWN0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHtpc1BybyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvai5zY3JlZW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ouc2NyZWVufSBhbHQ9e1wiU2NyZWVuc2hvdCBvZiBcIiArIHByb2ouY3VycmVudH0gY2xhc3NOYW1lPVwic2Nyb2xsXCIgLz5cclxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2ouY3VycmVudH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+TGl2ZSB3ZWJzaXRlPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qLnBhc3R9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPlNpdGUgYXMgSSBsZWZ0IGl0PC9hPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyAocHJvZmVzc2lvbmFsW3Byb2Zlc3Npb25hbC5pbmRleE9mKHByb2opICsgMV0/LmxpbmsgfHwgcHJvZmVzc2lvbmFsWzBdLmxpbmspfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5OZXh0IHByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gcHJvamVjdHM8L2E+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRGVmYXVsdExheW91dD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IHByb2plY3RzLm1hcCh4ID0+IHgudGl0bGUpO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IHNsdWc6IHBvc3QgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=