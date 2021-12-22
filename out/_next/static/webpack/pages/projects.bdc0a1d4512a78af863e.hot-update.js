webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/grid */ "./components/grid.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/projects */ "./data/projects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Projects(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      pro = _useState[0],
      setPro = _useState[1];

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container project-shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Projects"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setPro(!pro);
    },
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, pro ? 'Professional projects' : 'Personal projects')), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
      return pro ? !x.pen : x.pen;
    }),
    className: "mt-10 mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
}

_s(Projects, "+FuWAXgrzjLTF70kESyBu9D9LW0=");

_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RzIiwiZmlsdGVyIiwieCIsInBlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxLQUFELENBRFE7QUFBQSxNQUMvQkMsR0FEK0I7QUFBQSxNQUMxQkMsTUFEMEI7O0FBR3RDLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxLQUFyQjtBQUE0QixlQUFXLEVBQUVKLEtBQUssQ0FBQ0ssV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUYsTUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBWjtBQUFBLEtBQWpCO0FBQXFDLGFBQVMsRUFBQyxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEdBQUcsR0FBRyx1QkFBSCxHQUE2QixtQkFEbkMsQ0FERixDQUxGLEVBV0U7QUFBSyxnQkFBUyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxFQUFFSSx1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxhQUFJTixHQUFHLEdBQUcsQ0FBQ00sQ0FBQyxDQUFDQyxHQUFOLEdBQVlELENBQUMsQ0FBQ0MsR0FBckI7QUFBQSxLQUFqQixDQUFaO0FBQXdELGFBQVMsRUFBQyxhQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixDQURGLENBREY7QUFvQkQ7O0dBdkJ1QlYsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5iZGMwYTFkNDUxMmE3OGFmODYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCdcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICdAZGF0YS9wcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bybywgc2V0UHJvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e3Byb3BzLnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwcm9qZWN0LXNoYXBlXCI+XHJcbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cclxuXHJcbiAgICAgICAgey8qIFRPRE86IGFkZCBmaWx0ZXJzIHRlY2gsIHByby9wZXJzbywgZXRjLiBhbmQgb3JkZXIgKi99XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBybyghcHJvKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgIHtwcm8gPyAnUHJvZmVzc2lvbmFsIHByb2plY3RzJyA6ICdQZXJzb25hbCBwcm9qZWN0cyd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIDxHcmlkIGRhdGE9e3Byb2plY3RzLmZpbHRlcih4ID0+IHBybyA/ICF4LnBlbiA6IHgucGVuKX0gY2xhc3NOYW1lPVwibXQtMTAgbWItMTBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogJ1Byb2plY3RzIHwgUsOpbXkgQmV1bWllcicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTXkgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBwcm9qZWN0cyBkZXZlbG9wZWQgd2l0aCBIVE1MLCBDU1MsIEpTLCBSZWFjdCwgQW5ndWxhciBhbmQgbWFueSBtb3JlLidcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9