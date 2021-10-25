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
/* harmony import */ var components_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/default */ "./components/default.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/grid */ "./components/grid.js");
/* harmony import */ var data_personalProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! data/personalProjects */ "./data/personalProjects.js");
/* harmony import */ var data_professionalProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! data/professionalProjects */ "./data/professionalProjects.js");
var _jsxFileName = "C:\\Users\\PC\\Documents\\GitHub\\rb\\pages\\projects\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
function Projects(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      pro = _useState[0],
      setPro = _useState[1];

  return __jsx(components_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "PROJECTS"), __jsx("h2", {
    onClick: function onClick() {
      return setPro(!pro);
    },
    className: !pro && 'active',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Personal projects"), __jsx("h2", {
    onClick: function onClick() {
      return setPro(!pro);
    },
    className: pro && 'active',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Professional projects"), !pro && __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data_personalProjects__WEBPACK_IMPORTED_MODULE_3__["personal"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }), pro && __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data_professionalProjects__WEBPACK_IMPORTED_MODULE_4__["professional"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcnNvbmFsIiwicHJvZmVzc2lvbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUTtBQUFBLE1BQy9CQyxHQUQrQjtBQUFBLE1BQzFCQyxNQUQwQjs7QUFHdEMsU0FDRSxNQUFDLDBEQUFEO0FBQWUsU0FBSyxFQUFFSCxLQUFLLENBQUNJLEtBQTVCO0FBQW1DLGVBQVcsRUFBRUosS0FBSyxDQUFDSyxXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUtFO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUYsTUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBWjtBQUFBLEtBQWI7QUFBaUMsYUFBUyxFQUFFLENBQUNBLEdBQUQsSUFBUSxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLEVBTUU7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUMsQ0FBQ0QsR0FBRixDQUFaO0FBQUEsS0FBYjtBQUFpQyxhQUFTLEVBQUVBLEdBQUcsSUFBSSxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5GLEVBUUcsQ0FBQ0EsR0FBRCxJQUFRLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUVJLDhEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSWCxFQVNHSixHQUFHLElBQUksTUFBQyx1REFBRDtBQUFNLFFBQUksRUFBRUssc0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRWLENBREYsQ0FERjtBQWdCRDs7R0FuQnVCUixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjMzNjYzYWJjYzM1NzEzMjAwOTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdjb21wb25lbnRzL2RlZmF1bHQnXHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCdcclxuaW1wb3J0IHtwZXJzb25hbH0gZnJvbSAnZGF0YS9wZXJzb25hbFByb2plY3RzJ1xyXG5pbXBvcnQge3Byb2Zlc3Npb25hbH0gZnJvbSAnZGF0YS9wcm9mZXNzaW9uYWxQcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bybywgc2V0UHJvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxyXG5cclxuICAgICAgICB7LyogVE9ETzogdGFiL3N3aXRjaCB0byBnbyBmcm9tIHBlcnNvIHRvIHBybyBwcm9qZWN0cyAqL31cclxuXHJcbiAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHNldFBybyghcHJvKX0gY2xhc3NOYW1lPXshcHJvICYmICdhY3RpdmUnfT5QZXJzb25hbCBwcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHNldFBybyghcHJvKX0gY2xhc3NOYW1lPXtwcm8gJiYgJ2FjdGl2ZSd9PlByb2Zlc3Npb25hbCBwcm9qZWN0czwvaDI+XHJcblxyXG4gICAgICAgIHshcHJvICYmIDxHcmlkIGRhdGE9e3BlcnNvbmFsfSAvPn1cclxuICAgICAgICB7cHJvICYmIDxHcmlkIGRhdGE9e3Byb2Zlc3Npb25hbH0gLz59XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EZWZhdWx0TGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogJ1Byb2plY3RzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9qZWN0cyBmcm9tIFJCJ1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=