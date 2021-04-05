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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
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
      console.log(res.data);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Item, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy9baWRdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJ1c2VTdGF0ZSIsIml0ZW0iLCJzZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIkFQSV9VUkwiLCJnZXREYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUVqQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRmlCLE1BR1RDLEVBSFMsR0FHRkYsTUFBTSxDQUFDRyxLQUhMLENBR1RELEVBSFM7QUFLakIsTUFBTUUsT0FBTyw2REFBc0RGLEVBQXRELFVBQWI7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkMsb0RBQUEsQ0FBVUYsT0FBVixFQUFtQkcsSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVixFQUFFLElBQUlBLEVBQUUsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCRyxhQUFPO0FBQ1I7QUFDRixHQUpRLEVBSU4sQ0FBQ0gsRUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFBTyw4REFBQyxtREFBRDtBQUFNLFFBQUksRUFBRUo7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQXBCRDs7R0FBTUYsSTtVQUVXSyxrRDs7O0tBRlhMLEk7QUFzQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlldy9baWRdLjc0MGZmY2ZlOGVmNzg3MDJiYjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IEFQSV9VUkwgPSBgaHR0cDovL21ha2V1cC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJvZHVjdHMvJHtpZH0uanNvbmA7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoQVBJX1VSTCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQgJiYgaWQgPiAwKSB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIDxJdGVtIGl0ZW09e2l0ZW19IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==