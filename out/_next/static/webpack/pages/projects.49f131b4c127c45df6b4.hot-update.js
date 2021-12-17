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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
    return x.pen;
  })),
      list = _useState2[0],
      setList = _useState2[1];

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
    className: "projects__switch",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setList(!pro);
    },
    className: pro ? 'active btn' : 'btn',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, pro ? 'Professional projects' : 'Persional projects')), __jsx("div", {
    "data-aos": "fade-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 31,
      columnNumber: 11
    }
  }))));
}

_s(Projects, "4IeL+Uaknn4iJosNDkWIgEuYlTU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwibGlzdCIsInNldExpc3QiLCJwZXJzb25hbCIsInByb2Zlc3Npb25hbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDL0JDLEdBRCtCO0FBQUEsTUFDMUJDLE1BRDBCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDRyx1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQU47QUFBQSxHQUFqQixDQUFELENBRk07QUFBQSxNQUUvQkMsSUFGK0I7QUFBQSxNQUV6QkMsT0FGeUI7O0FBR3RDLE1BQU1DLFFBQVEsR0FBR04sdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNSSxZQUFZLEdBQUdQLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVQLEtBQUssQ0FBQ1ksS0FBckI7QUFBNEIsZUFBVyxFQUFFWixLQUFLLENBQUNhLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUosT0FBTyxDQUFDLENBQUNQLEdBQUYsQ0FBYjtBQUFBLEtBQWpCO0FBQ0UsYUFBUyxFQUFFQSxHQUFHLEdBQUcsWUFBSCxHQUFrQixLQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtBLEdBQUcsR0FBRyx1QkFBSCxHQUE2QixvQkFGckMsQ0FIRixDQUxGLEVBY0U7QUFBSyxnQkFBUyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxFQUFFQSxHQUFHLEdBQUdFLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsS0FBakIsQ0FBSCxHQUFrQ0gsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsS0FBakIsQ0FBakQ7QUFBOEUsYUFBUyxFQUFDLFdBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQWRGLENBREYsQ0FERjtBQXlCRDs7R0EvQnVCUixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjQ5ZjEzMWI0YzEyN2M0NWRmNmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnY29tcG9uZW50cy9ncmlkJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zdCBbcHJvLCBzZXRQcm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKSk7XHJcbiAgY29uc3QgcGVyc29uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbilcclxuICBjb25zdCBwcm9mZXNzaW9uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxyXG5cclxuICAgICAgICB7LyogVE9ETzogYWRkIGZpbHRlcnMgdGVjaCwgcHJvL3BlcnNvLCBldGMuIGFuZCBvcmRlciAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c19fc3dpdGNoXCI+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQcm8oIXBybyl9IGNsYXNzTmFtZT17IXBybyA/ICdhY3RpdmUgYnRuJyA6ICdidG4nfT5QZXJzb25hbCBwcm9qZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQcm8oIXBybyl9IGNsYXNzTmFtZT17cHJvID8gJ2FjdGl2ZSBidG4nIDogJ2J0bid9PlByb2Zlc3Npb25hbCBwcm9qZWN0czwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TGlzdCghcHJvKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm8gPyAnYWN0aXZlIGJ0bicgOiAnYnRuJ30+XHJcbiAgICAgICAgICAgICAge3BybyA/ICdQcm9mZXNzaW9uYWwgcHJvamVjdHMnIDogJ1BlcnNpb25hbCBwcm9qZWN0cyd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgIHsvKiB7IXBybyAmJiA8R3JpZCBkYXRhPXtwZXJzb25hbH0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz59XHJcbiAgICAgICAgICB7cHJvICYmIDxHcmlkIGRhdGE9e3Byb2Zlc3Npb25hbH0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz59ICovfVxyXG4gICAgICAgICAgPEdyaWQgZGF0YT17cHJvID8gcHJvamVjdHMuZmlsdGVyKHggPT4gIXgucGVuKSA6IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKX0gY2xhc3NOYW1lPVwibXQtNSBtYi01XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6ICdQcm9qZWN0cyB8IFLDqW15IEJldW1pZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ015IHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgcHJvamVjdHMgZGV2ZWxvcGVkIHdpdGggSFRNTCwgQ1NTLCBKUywgUmVhY3QsIEFuZ3VsYXIgYW5kIG1hbnkgbW9yZS4nXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==