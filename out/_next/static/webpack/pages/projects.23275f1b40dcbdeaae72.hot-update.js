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
      return setList(pro ? _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
        return !x.pen;
      }) : _data_projects__WEBPACK_IMPORTED_MODULE_3__["projects"].filter(function (x) {
        return x.pen;
      }));
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
    data: list,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwicHJvamVjdHMiLCJmaWx0ZXIiLCJ4IiwicGVuIiwibGlzdCIsInNldExpc3QiLCJwZXJzb25hbCIsInByb2Zlc3Npb25hbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDL0JDLEdBRCtCO0FBQUEsTUFDMUJDLE1BRDBCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDRyx1REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQU47QUFBQSxHQUFqQixDQUFELENBRk07QUFBQSxNQUUvQkMsSUFGK0I7QUFBQSxNQUV6QkMsT0FGeUI7O0FBR3RDLE1BQU1DLFFBQVEsR0FBR04sdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNSSxZQUFZLEdBQUdQLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVQLEtBQUssQ0FBQ1ksS0FBckI7QUFBNEIsZUFBVyxFQUFFWixLQUFLLENBQUNhLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUosT0FBTyxDQUFDUCxHQUFHLEdBQUdFLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGVBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsT0FBakIsQ0FBSCxHQUFrQ0gsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsT0FBakIsQ0FBdEMsQ0FBYjtBQUFBLEtBQWpCO0FBQ0UsYUFBUyxFQUFFTCxHQUFHLEdBQUcsWUFBSCxHQUFrQixLQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtBLEdBQUcsR0FBRyx1QkFBSCxHQUE2QixvQkFGckMsQ0FIRixDQUxGLEVBY0U7QUFBSyxnQkFBUyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxFQUFFTSxJQUFaO0FBQWtCLGFBQVMsRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FkRixDQURGLENBREY7QUF5QkQ7O0dBL0J1QlQsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4yMzI3NWYxYjQwZGNiZGVhYWU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCdcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICdAZGF0YS9wcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bybywgc2V0UHJvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbikpO1xyXG4gIGNvbnN0IHBlcnNvbmFsID0gcHJvamVjdHMuZmlsdGVyKHggPT4geC5wZW4pXHJcbiAgY29uc3QgcHJvZmVzc2lvbmFsID0gcHJvamVjdHMuZmlsdGVyKHggPT4gIXgucGVuKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17cHJvcHMudGl0bGV9IGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cclxuXHJcbiAgICAgICAgey8qIFRPRE86IGFkZCBmaWx0ZXJzIHRlY2gsIHByby9wZXJzbywgZXRjLiBhbmQgb3JkZXIgKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNfX3N3aXRjaFwiPlxyXG4gICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJvKCFwcm8pfSBjbGFzc05hbWU9eyFwcm8gPyAnYWN0aXZlIGJ0bicgOiAnYnRuJ30+UGVyc29uYWwgcHJvamVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJvKCFwcm8pfSBjbGFzc05hbWU9e3BybyA/ICdhY3RpdmUgYnRuJyA6ICdidG4nfT5Qcm9mZXNzaW9uYWwgcHJvamVjdHM8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldExpc3QocHJvID8gcHJvamVjdHMuZmlsdGVyKHggPT4gIXgucGVuKSA6IHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvID8gJ2FjdGl2ZSBidG4nIDogJ2J0bid9PlxyXG4gICAgICAgICAgICAgIHtwcm8gPyAnUHJvZmVzc2lvbmFsIHByb2plY3RzJyA6ICdQZXJzaW9uYWwgcHJvamVjdHMnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICB7LyogeyFwcm8gJiYgPEdyaWQgZGF0YT17cGVyc29uYWx9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+fVxyXG4gICAgICAgICAge3BybyAmJiA8R3JpZCBkYXRhPXtwcm9mZXNzaW9uYWx9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+fSAqL31cclxuICAgICAgICAgIDxHcmlkIGRhdGE9e2xpc3R9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHRpdGxlOiAnUHJvamVjdHMgfCBSw6lteSBCZXVtaWVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNeSBwZXJzb25hbCBhbmQgcHJvZmVzc2lvbmFsIHByb2plY3RzIGRldmVsb3BlZCB3aXRoIEhUTUwsIENTUywgSlMsIFJlYWN0LCBBbmd1bGFyIGFuZCBtYW55IG1vcmUuJ1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=