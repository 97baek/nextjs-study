self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Item */ "./src/components/Item.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\pages\\view\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var Post = function Post() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      item = _useState[0],
      setItem = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var id = router.query.id;
  var API_URL = "http://makeup-api.herokuapp.com/api/v1/products/".concat(id, ".json");

  var getData = function getData() {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL).then(function (res) {
      setItem(res.data);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Item__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: item
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, _this);
};

_s(Post, "01SGlMLi/v/FkM/7d+KXiOJrW3E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy9baWRdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJ1c2VTdGF0ZSIsIml0ZW0iLCJzZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIkFQSV9VUkwiLCJnZXREYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBRWpCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFGaUIsTUFHVEMsRUFIUyxHQUdGRixNQUFNLENBQUNHLEtBSEwsQ0FHVEQsRUFIUztBQUtqQixNQUFNRSxPQUFPLDZEQUFzREYsRUFBdEQsVUFBYjs7QUFFQSxNQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxvREFBQSxDQUFVRixPQUFWLEVBQW1CRyxJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JULGFBQU8sQ0FBQ1MsR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsRUFBRSxJQUFJQSxFQUFFLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkcsYUFBTztBQUNSO0FBQ0YsR0FKUSxFQUlOLENBQUNILEVBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQU8sOERBQUMseURBQUQ7QUFBTSxRQUFJLEVBQUVKO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FwQkQ7O0dBQU1GLEk7VUFFV0ssa0Q7OztLQUZYTCxJO0FBc0JOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZXcvW2lkXS5hNGYxMjE4NjRmN2VhOGRiNWRhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9JdGVtJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgQVBJX1VSTCA9IGBodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy8ke2lkfS5qc29uYDtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChBUElfVVJMKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0SXRlbShyZXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkICYmIGlkID4gMCkge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiA8SXRlbSBpdGVtPXtpdGVtfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=