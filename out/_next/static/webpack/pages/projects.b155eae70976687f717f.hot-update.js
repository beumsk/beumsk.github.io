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
      setPro = _useState[1]; // const [list, setList] = useState(projects.filter(x => x.pen));


  var personal = _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
    return x.pen;
  });
  var professional = _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
    return !x.pen;
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    description: props.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Projects"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setPro(!pro);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, pro ? 'Professional projects' : 'Personal projects')), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(components_grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: pro ? _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
      return !x.pen;
    }) : _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
      return x.pen;
    }),
    className: "mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwicGVyc29uYWwiLCJwcm9qZWN0cyIsImZpbHRlciIsIngiLCJwZW4iLCJwcm9mZXNzaW9uYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUTtBQUFBLE1BQy9CQyxHQUQrQjtBQUFBLE1BQzFCQyxNQUQwQixpQkFFdEM7OztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVSLEtBQUssQ0FBQ1UsS0FBckI7QUFBNEIsZUFBVyxFQUFFVixLQUFLLENBQUNXLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVIsTUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBWjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsR0FBRyxHQUFHLHVCQUFILEdBQTZCLG1CQURuQyxDQUhGLENBTEYsRUFhRTtBQUFLLGdCQUFTLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsdURBQUQ7QUFBTSxRQUFJLEVBQUVBLEdBQUcsR0FBR0csdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsYUFBSSxDQUFDQSxDQUFDLENBQUNDLEdBQVA7QUFBQSxLQUFqQixDQUFILEdBQWtDSCx1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLEdBQU47QUFBQSxLQUFqQixDQUFqRDtBQUE4RSxhQUFTLEVBQUMsV0FBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBYkYsQ0FERixDQURGO0FBd0JEOztHQTlCdUJULFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuYjE1NWVhZTcwOTc2Njg3ZjcxN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdjb21wb25lbnRzL2dyaWQnXHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnQGRhdGEvcHJvamVjdHMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9wcykge1xyXG4gIGNvbnN0IFtwcm8sIHNldFByb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUocHJvamVjdHMuZmlsdGVyKHggPT4geC5wZW4pKTtcclxuICBjb25zdCBwZXJzb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKVxyXG4gIGNvbnN0IHByb2Zlc3Npb25hbCA9IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e3Byb3BzLnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XHJcblxyXG4gICAgICAgIHsvKiBUT0RPOiBhZGQgZmlsdGVycyB0ZWNoLCBwcm8vcGVyc28sIGV0Yy4gYW5kIG9yZGVyICovfVxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJvKCFwcm8pfSBjbGFzc05hbWU9eyFwcm8gPyAnYWN0aXZlIGJ0bicgOiAnYnRuJ30+UGVyc29uYWwgcHJvamVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJvKCFwcm8pfSBjbGFzc05hbWU9e3BybyA/ICdhY3RpdmUgYnRuJyA6ICdidG4nfT5Qcm9mZXNzaW9uYWwgcHJvamVjdHM8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBybyghcHJvKX0+XHJcbiAgICAgICAgICAgIHtwcm8gPyAnUHJvZmVzc2lvbmFsIHByb2plY3RzJyA6ICdQZXJzb25hbCBwcm9qZWN0cyd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIHsvKiB7IXBybyAmJiA8R3JpZCBkYXRhPXtwZXJzb25hbH0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz59XHJcbiAgICAgICAgICB7cHJvICYmIDxHcmlkIGRhdGE9e3Byb2Zlc3Npb25hbH0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz59ICovfVxyXG4gICAgICAgICAgPEdyaWQgZGF0YT17cHJvID8gcHJvamVjdHMuZmlsdGVyKHggPT4gIXgucGVuKSA6IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKX0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6ICdQcm9qZWN0cyB8IFLDqW15IEJldW1pZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ015IHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgcHJvamVjdHMgZGV2ZWxvcGVkIHdpdGggSFRNTCwgQ1NTLCBKUywgUmVhY3QsIEFuZ3VsYXIgYW5kIG1hbnkgbW9yZS4nXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==