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
    className: "projects__switch",
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
    className: pro ? 'active btn' : 'btn',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvIiwic2V0UHJvIiwicGVyc29uYWwiLCJwcm9qZWN0cyIsImZpbHRlciIsIngiLCJwZW4iLCJwcm9mZXNzaW9uYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUTtBQUFBLE1BQy9CQyxHQUQrQjtBQUFBLE1BQzFCQyxNQUQwQixpQkFFdEM7OztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsR0FBakIsQ0FBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsR0FBakIsQ0FBckI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVSLEtBQUssQ0FBQ1UsS0FBckI7QUFBNEIsZUFBVyxFQUFFVixLQUFLLENBQUNXLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVIsTUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBWjtBQUFBLEtBQWpCO0FBQ0UsYUFBUyxFQUFFQSxHQUFHLEdBQUcsWUFBSCxHQUFrQixLQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtBLEdBQUcsR0FBRyx1QkFBSCxHQUE2QixtQkFGckMsQ0FIRixDQUxGLEVBY0U7QUFBSyxnQkFBUyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxFQUFFQSxHQUFHLEdBQUdHLHVEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxHQUFQO0FBQUEsS0FBakIsQ0FBSCxHQUFrQ0gsdURBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxHQUFOO0FBQUEsS0FBakIsQ0FBakQ7QUFBOEUsYUFBUyxFQUFDLFdBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQWRGLENBREYsQ0FERjtBQXlCRDs7R0EvQnVCVCxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjliMTA1NTczYzc1NjE0YzlmMmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnY29tcG9uZW50cy9ncmlkJ1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJ0BkYXRhL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuICBjb25zdCBbcHJvLCBzZXRQcm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHByb2plY3RzLmZpbHRlcih4ID0+IHgucGVuKSk7XHJcbiAgY29uc3QgcGVyc29uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbilcclxuICBjb25zdCBwcm9mZXNzaW9uYWwgPSBwcm9qZWN0cy5maWx0ZXIoeCA9PiAheC5wZW4pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxyXG5cclxuICAgICAgICB7LyogVE9ETzogYWRkIGZpbHRlcnMgdGVjaCwgcHJvL3BlcnNvLCBldGMuIGFuZCBvcmRlciAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c19fc3dpdGNoXCI+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQcm8oIXBybyl9IGNsYXNzTmFtZT17IXBybyA/ICdhY3RpdmUgYnRuJyA6ICdidG4nfT5QZXJzb25hbCBwcm9qZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQcm8oIXBybyl9IGNsYXNzTmFtZT17cHJvID8gJ2FjdGl2ZSBidG4nIDogJ2J0bid9PlByb2Zlc3Npb25hbCBwcm9qZWN0czwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UHJvKCFwcm8pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BybyA/ICdhY3RpdmUgYnRuJyA6ICdidG4nfT5cclxuICAgICAgICAgICAgICB7cHJvID8gJ1Byb2Zlc3Npb25hbCBwcm9qZWN0cycgOiAnUGVyc29uYWwgcHJvamVjdHMnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICB7LyogeyFwcm8gJiYgPEdyaWQgZGF0YT17cGVyc29uYWx9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+fVxyXG4gICAgICAgICAge3BybyAmJiA8R3JpZCBkYXRhPXtwcm9mZXNzaW9uYWx9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+fSAqL31cclxuICAgICAgICAgIDxHcmlkIGRhdGE9e3BybyA/IHByb2plY3RzLmZpbHRlcih4ID0+ICF4LnBlbikgOiBwcm9qZWN0cy5maWx0ZXIoeCA9PiB4LnBlbil9IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHRpdGxlOiAnUHJvamVjdHMgfCBSw6lteSBCZXVtaWVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNeSBwZXJzb25hbCBhbmQgcHJvZmVzc2lvbmFsIHByb2plY3RzIGRldmVsb3BlZCB3aXRoIEhUTUwsIENTUywgSlMsIFJlYWN0LCBBbmd1bGFyIGFuZCBtYW55IG1vcmUuJ1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=